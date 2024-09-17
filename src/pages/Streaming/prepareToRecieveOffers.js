
export function prepareToRecieveOffers(
  peer,
  videoRef,
  peerConnections,
  socket,
  screen,
  roomId
) {
  socket.on(`screen/enter-room?${roomId}`, function (user) {

    const isSameUser = user.peerId == peer.current.id;
    if (isSameUser) return;

    peerConnections.current[user.peerId] = user;

    socket.emit("screen/connect-with-me", {
      peerId: peer.current.id,
      socketId: user.socketId,
      roomId
    });

    const call = peer.current.call(user.peerId, screen.current);

    if (call) {
      call.peerConnection.addEventListener("connectionstatechange", () => {
        peerConnections.current[call.connectionId] = call;

        if (screen.current) {
          peer.current.call(user.peerId, videoRef.current.srcObject);
        }

        call.on("close", () => (videoRef.current.srcObject = null));
      });
    }
  });

  socket.on(`screen/connect-with-me?${roomId}`, function (user) {
    const isSameUser = user.peerId == peer.current.id;
    if (isSameUser) return;

    peerConnections.current[user.peerId] = user;

    const call = peer.current.call(user.peerId, screen.current);

    if (call) {
      call.peerConnection.addEventListener("connectionstatechange", () => {
        peerConnections.current[call.connectionId] = call;

        if (screen.current) {
          peer.current.call(user.peerId, videoRef.current.srcObject);
        }

        call.on("close", () => (videoRef.current.srcObject = null));
      });
    }
  });
}
