# Bookmarklet Fullscreen Video

This project provides a bookmarklet that allows users to find a video element on a webpage, specifically targeting video elements with IDs that start with random characters and end with `___screen`. Once the video is identified, the bookmarklet enables fullscreen mode and provides zoom and pan capabilities.

## How to Use

1. **Add the Bookmarklet to Your Browser:**
   - Drag the bookmarklet link from the `index.html` file to your bookmarks toolbar. 
   - Alternatively, you can create a new bookmark in your browser and paste the JavaScript code provided in the `index.html` file as the URL.

2. **Activate the Bookmarklet:**
   - Navigate to a webpage that contains a video element with an ID matching the specified pattern (e.g., `U7YS7UV5HfaPb-iPAZFF___screen`).
   - Click on the bookmarklet in your bookmarks toolbar.

3. **Fullscreen and Zoom/Pan:**
   - The video will automatically enter fullscreen mode.
   - Use your mouse or touch gestures to zoom and pan around the video as needed.

## Requirements

- This bookmarklet is designed to work in modern web browsers that support the Fullscreen API and CSS transformations.

## Limitations

- The bookmarklet will only work on pages where the video element is present and matches the ID criteria.
- Ensure that your browser settings allow for fullscreen requests from JavaScript.

## License

This project is open-source and available for modification and redistribution under the MIT License.