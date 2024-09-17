export function prepareToRecieveOffers(
  peer,
  videoRef,
  peerConnections,
  socket,
  screen
) {
  socket.on("enter-room", function (user) {
    const isSameUser = user.id == peer.current.id;
    if (isSameUser) return;

    peerConnections.current[user.id] = user;

    const call = peer.current.call(user.id, screen.current);

    if (call) {
      call.peerConnection.addEventListener("connectionstatechange", () => {
        peerConnections.current[call.connectionId] = call;

        if (screen.current) {
          peer.current.call(user.id, videoRef.current.srcObject);
        }

        call.on("close", () => (videoRef.current.srcObject = null));
      });
    }
  });
}
