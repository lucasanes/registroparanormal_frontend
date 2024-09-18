
export function prepareToRecieveOffers(
  peer,
  videoRef,
  peerConnections,
  socket,
  webcam,
  roomId
) {
  socket.on(`webcam/enter-room?${roomId}`, function (user) {

    const isSameUser = user.peerId == peer.current.id;
    if (isSameUser) return;

    peerConnections.current[user.peerId] = user;

    socket.emit("webcam/connect-with-me", {
      peerId: peer.current.id,
      socketId: user.socketId,
      roomId
    });

    const call = peer.current.call(user.peerId, webcam.current);

    if (call) {
      call.peerConnection.addEventListener("connectionstatechange", () => {
        peerConnections.current[call.connectionId] = call;

        if (webcam.current) {
          peer.current.call(user.peerId, videoRef.current.srcObject);
        }

      });
    }
  });

  socket.on(`webcam/connect-with-me?${roomId}`, function (user) {
    const isSameUser = user.peerId == peer.current.id;
    if (isSameUser) return;

    peerConnections.current[user.peerId] = user;

    const call = peer.current.call(user.peerId, webcam.current);

    if (call) {
      call.peerConnection.addEventListener("connectionstatechange", () => {
        peerConnections.current[call.connectionId] = call;

        if (webcam.current) {
          peer.current.call(user.peerId, videoRef.current.srcObject);
        }

      });
    }
  });
}
