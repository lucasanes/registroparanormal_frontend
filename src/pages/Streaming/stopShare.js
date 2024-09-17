export async function stopShare(peer, socket, roomId, screen) {
  socket.emit('stop-share', {
    peerId: peer.current.id,
    socketId: socket.id,
    roomId
  });

  if (screen.current) {
    screen.current.getTracks().forEach(track => track.stop());
    screen.current = null;
  }
}
