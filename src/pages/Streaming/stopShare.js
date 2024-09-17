export async function stopShare(peer, socket, roomId, screen, isSharingScreen) {
  if (!isSharingScreen) {
    return;
  }

  socket.emit('screen/stop-share', {
    peerId: peer.current.id,
    socketId: socket.id,
    roomId
  });

  if (screen.current) {
    screen.current.getTracks().forEach(track => track.stop());
    screen.current = null;
  }
}
