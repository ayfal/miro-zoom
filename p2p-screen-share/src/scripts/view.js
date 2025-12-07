const socket = new WebSocket('wss://your-websocket-server-url'); // Replace with your WebSocket server URL

// Elements for displaying the shared screen and audio
const videoElement = document.getElementById('sharedScreen');
const audioElement = document.getElementById('audioStream');

// Handle incoming messages from the WebSocket
socket.onmessage = (event) => {
    const message = JSON.parse(event.data);

    if (message.type === 'screen') {
        // Create a blob URL for the incoming screen stream
        const blob = new Blob([message.data], { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        videoElement.src = url;
        videoElement.play();
    } else if (message.type === 'audio') {
        // Create a blob URL for the incoming audio stream
        const blob = new Blob([message.data], { type: 'audio/webm' });
        const url = URL.createObjectURL(blob);
        audioElement.src = url;
        audioElement.play();
    }
};

// Handle errors
socket.onerror = (error) => {
    console.error('WebSocket error:', error);
};

// Handle connection close
socket.onclose = () => {
    console.log('WebSocket connection closed');
};