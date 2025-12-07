const VIEWER_ID = 'viewer-1';
let peer;
let activeCall;

const startScreenShare = async () => {
    try {
        const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
        peer = new Peer('sharer-1', { host: 'peerjs.com', secure: true, port: 443 });

        peer.on('open', () => {
            activeCall = peer.call(VIEWER_ID, screenStream);
            activeCall?.on('error', console.error);
        });

        peer.on('error', console.error);
    } catch (err) {
        console.error('Error starting screen share:', err);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('startShare');
    if (!btn) {
        console.error('startShare button not found in DOM');
        return;
    }
    btn.addEventListener('click', startScreenShare);
});