
export function prepareToRecieveOffers(
  peer,
  videoRef,
  peerConnections,
  socket,
  screen,
  roomId
) {
  socket.on("enter-room", function (user) {

    const isSameUser = user.peerId == peer.current.id;
    if (isSameUser) return;

    peerConnections.current[user.peerId] = user;

    console.log('conectei com o amigo')

    socket.emit("connect-with-me", {
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

  socket.on("connect-with-me", function (user) {
    const isSameUser = user.peerId == peer.current.id;
    if (isSameUser) return;

    console.log('conectei com o antigo amigo')

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
