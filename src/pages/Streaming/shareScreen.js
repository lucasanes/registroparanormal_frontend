export async function shareScreen(peer, socket, roomId, peerConnections) {

  const media = await navigator.mediaDevices.getDisplayMedia({
    video: true,
    audio: false
  });

  if (media) {
    Object.keys(peerConnections.current).forEach((conn) => {
      const shareConn = peer.current.call(conn, media, {});

      media.getTracks()[0].addEventListener("ended", () => {
        shareConn.close();
        socket.emit("screen/leave-room", {
          peerId: shareConn.connectionId,
          socketId: socket.id,
          roomId: roomId
        });
      });
    });

    return media;
  }

  return false;
}
