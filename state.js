/* ── LearnWithMD – Shared State & Progress Tracking ── */

// ─── Active-session helpers ───
function setToolkit(toolkitId) {
  localStorage.setItem("toolkit", toolkitId);
}
function getToolkit() {
  return localStorage.getItem("toolkit");
}
function setCase(caseId) {
  localStorage.setItem("case", caseId);
}
function getCase() {
  return localStorage.getItem("case");
}

// ─── Progress persistence ───
// Shape: { mls: { basicsComplete: false, cases: { wound: { complete: false, step: 0 }, ... } }, ... }

function _getProgress() {
  try {
    return JSON.parse(localStorage.getItem("progress")) || {};
  } catch (e) {
    return {};
  }
}
function _saveProgress(p) {
  localStorage.setItem("progress", JSON.stringify(p));
}

// Ensure a toolkit key exists
function _ensureToolkit(p, tk) {
  if (!p[tk]) p[tk] = { basicsComplete: false, cases: {} };
  return p;
}

// ─── Basics module ───
function markBasicsComplete(tk) {
  var p = _getProgress();
  _ensureToolkit(p, tk);
  p[tk].basicsComplete = true;
  _saveProgress(p);
}
function isBasicsComplete(tk) {
  var p = _getProgress();
  return !!(p[tk] && p[tk].basicsComplete);
}

// ─── Case progress ───
function setCaseStep(tk, caseId, step) {
  var p = _getProgress();
  _ensureToolkit(p, tk);
  if (!p[tk].cases[caseId]) p[tk].cases[caseId] = { complete: false, step: 0 };
  p[tk].cases[caseId].step = step;
  _saveProgress(p);
}
function getCaseStep(tk, caseId) {
  var p = _getProgress();
  if (p[tk] && p[tk].cases[caseId]) return p[tk].cases[caseId].step;
  return 0;
}
function markCaseComplete(tk, caseId) {
  var p = _getProgress();
  _ensureToolkit(p, tk);
  if (!p[tk].cases[caseId]) p[tk].cases[caseId] = { complete: false, step: 0 };
  p[tk].cases[caseId].complete = true;
  _saveProgress(p);
}
function isCaseComplete(tk, caseId) {
  var p = _getProgress();
  return !!(p[tk] && p[tk].cases[caseId] && p[tk].cases[caseId].complete);
}

// ─── Investigation board connections (user-drawn lines) ───
function setBoardConnections(tk, edges) {
  var p = _getProgress();
  _ensureToolkit(p, tk);
  p[tk].boardConnections = edges;
  _saveProgress(p);
}
function getBoardConnections(tk) {
  var p = _getProgress();
  return (p[tk] && p[tk].boardConnections) || null;
}

// ─── Per-case answer payload (for review mode) ───
function setCaseAnswers(tk, caseId, answers) {
  var p = _getProgress();
  _ensureToolkit(p, tk);
  if (!p[tk].cases[caseId]) p[tk].cases[caseId] = { complete: false, step: 0 };
  p[tk].cases[caseId].answers = answers;
  _saveProgress(p);
}
function getCaseAnswers(tk, caseId) {
  var p = _getProgress();
  if (p[tk] && p[tk].cases[caseId] && p[tk].cases[caseId].answers) return p[tk].cases[caseId].answers;
  return null;
}

// ─── Aggregate helpers ───
function getCompletedCount(tk, totalCaseIds) {
  return totalCaseIds.filter(function (id) { return isCaseComplete(tk, id); }).length;
}
function getProgressPercent(tk, totalCaseIds) {
  if (!totalCaseIds.length) return 0;
  return Math.round((getCompletedCount(tk, totalCaseIds) / totalCaseIds.length) * 100);
}

// ─── Reset ───
function resetProgress(tk) {
  var p = _getProgress();
  delete p[tk];
  _saveProgress(p);
}
function resetAllProgress() {
  localStorage.removeItem("progress");
}
