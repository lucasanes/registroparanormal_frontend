export async function stopShare(peer, socket, roomId, webcam, isSharingWebcam) {
  if (!isSharingWebcam) {
    return;
  }
  socket.emit('webcam/stop-share', {
    peerId: peer.current.id,
    socketId: socket.id,
    roomId
  });

  if (webcam.current) {
    webcam.current.getTracks().forEach(track => track.stop());
    webcam.current = null;
  }
}
