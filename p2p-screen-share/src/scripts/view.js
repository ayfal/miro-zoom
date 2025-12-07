const videoElement = document.getElementById('sharedScreen');
const audioElement = document.getElementById('audioStream');

const peer = new Peer('viewer-1', { host: 'peerjs.com', secure: true, port: 443 });

peer.on('call', call => {
    // Answer without sending a stream (viewer not sending video)
    call.answer();
    call.on('stream', stream => {
        // Screen (with audio if included) arrives as one stream
        videoElement.srcObject = stream;
        videoElement.play().catch(console.warn);
        // If you prefer separate audio element:
        audioElement.srcObject = stream;
        audioElement.play().catch(console.warn);
    });
    call.on('error', console.error);
});

peer.on('error', console.error);