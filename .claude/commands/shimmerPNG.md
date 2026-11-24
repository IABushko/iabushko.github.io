Apply a shimmer effect to the specified PNG image element(s) that follows the silhouette of the PNG rather than a rectangular bounding box.

## Technique

Use CSS `mask-image` to clip the shimmer overlay to the PNG's opaque pixels. The image source is passed via a CSS custom property `--sticker-src` so the mask matches the image exactly.

## Required CSS

```css
.shimmer-container {
  position: relative;
  display: inline-block;
}

.shimmer-container img {
  display: block;
  filter: drop-shadow(0 4px 12px rgba(0,0,0,0.25));
}

.shimmer-container .shimmer-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    105deg,
    transparent 30%,
    rgba(255,255,255,0.45) 45%,
    rgba(255,255,255,0.65) 50%,
    rgba(255,255,255,0.45) 55%,
    transparent 70%
  );
  background-size: 250% 100%;
  animation: shimmer 2.5s ease-in-out infinite;
  pointer-events: none;
  -webkit-mask-image: var(--sticker-src);
  mask-image: var(--sticker-src);
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
}

@keyframes shimmer {
  0%   { background-position: 200% center; }
  100% { background-position: -200% center; }
}
```

## Required HTML structure

```html
<div class="shimmer-container" style="--sticker-src: url('path/to/image.png')">
  <img src="path/to/image.png" alt="description" />
  <div class="shimmer-overlay"></div>
</div>
```

## Instructions

1. Find the target PNG `<img>` element(s) the user specifies (by context or argument: $ARGUMENTS).
2. Wrap each image in a container `<div>` with `position: relative; display: inline-block;`.
3. Set `--sticker-src: url(...)` on the container using the same `src` as the `<img>`.
4. Add a `<div class="shimmer-overlay"></div>` sibling right after the `<img>`.
5. Add the CSS above (adapt class names to fit the existing codebase; reuse if similar styles already exist).
6. Do NOT use `overflow: hidden`, `border-radius` clipping, or `::after` pseudo-elements for the shimmer -- those create rectangular effects. The mask-image approach is the whole point.
7. If the image container already has a rectangular shimmer (e.g. `::after` with `linear-gradient`), replace it with this mask-based technique.
