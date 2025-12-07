const ROOM = 'dkj5ks3sm8a'; // same as share.js
const videoElement = document.getElementById('sharedScreen');

document.addEventListener('DOMContentLoaded', () => {
  const { joinRoom } = Trystero.torrent;
  const room = joinRoom({ appId: 'p2p-screenshare' }, ROOM);

  room.onStream((stream, peerId) => {
    videoElement.srcObject = stream;
    videoElement.play().catch(console.warn);
  });
});