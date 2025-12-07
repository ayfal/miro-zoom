# P2P Screen Share

This project provides a simple peer-to-peer screen sharing solution for two users. One user can share their screen while the other can view it, facilitating discussions and collaborative reading sessions. The application is designed to be user-friendly, especially for users with accessibility needs.

## Features

- Peer-to-peer screen sharing
- Audio communication between users
- No account management or installations required
- Simple link-based connection
- Optimized for large text visibility

## Project Structure

```
p2p-screen-share
├── src
│   ├── index.html        # Main entry point for the application
│   ├── share.html        # Screen sharing interface for the sharer
│   ├── view.html         # Viewing interface for the viewer
│   ├── scripts
│   │   ├── share.js      # JavaScript for screen sharing functionality
│   │   └── view.js       # JavaScript for receiving shared screen and audio
│   └── styles
│       └── styles.css    # CSS styles for the application
├── package.json          # Configuration file for npm
└── README.md             # Documentation for the project
```

## Setup Instructions

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Open `src/index.html` in your web browser to access the application.
4. Use the provided links to start sharing or viewing the screen.

## Usage Guidelines

- The sharer should open `share.html` to initiate screen sharing.
- The viewer should open `view.html` to connect and view the shared screen.
- Both users can communicate via audio while sharing and viewing the screen.

## Notes

- This application is designed for two users only.
- Ensure both users have a stable internet connection for optimal performance.
- The viewer can use pinch-to-zoom functionality on touch screens for better visibility.