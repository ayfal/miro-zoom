# MiroZoom — Mirotalk Zoom/Pan Utility

Small utility to isolate a Mirotalk screen-share video into a fullscreen, zoomable and pannable overlay.

## Key points
- Targets the shared-screen video element (video elements whose id ends with `___screen`).
- Does NOT remove or relocate the original UI element that provides audio. Instead it creates a muted mirrored video in an overlay so audio continues to play from the original page element.
- Overlay features:
  - Mouse-wheel zoom (cursor-centered)
  - Click-and-drag pan
  - Double-click to reset
  - Esc or click outside to close
  - Touch pinch/drag support
  - Requests fullscreen when possible
- Designed for low-vision users (index.html includes a large-font, high-contrast UI and an accessible copy flow).

## Files
- index.html — accessible install page with a draggable bookmarklet link and a copy-to-clipboard option.
- (Optional) client/mirozoom.js, client/mirozoom.css — suggested files if this feature is integrated into the Mirotalk client.

## Usage
1. Install the bookmarklet by dragging the "MiroZoom" link from index.html to your browser bookmarks bar or use the "Copy bookmarklet" button and add it manually in your bookmarks manager.
2. Join a Mirotalk room and wait for screen-sharing to start.
3. Activate the bookmarklet:
   - A fullscreen overlay appears showing a muted mirrored video of the shared screen.
   - Use mouse wheel to zoom, drag to pan, double-click to reset, Esc to close. Audio remains coming from the original Mirotalk UI element.

## Notes for maintainers
- This approach is non-invasive and preserves page audio by leaving the original video element in place.
- To integrate as a built-in feature, move the overlay logic into the client bundle and attach activation to the UI (see prior PR plan artifacts).
- Accessibility: index.html contains a large-font dark theme and an accessible copy path for users who cannot drag links.

## License
MIT
