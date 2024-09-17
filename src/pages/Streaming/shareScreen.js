export async function shareScreen(peer, socket, roomId, peerConnections) {

  const media = await navigator.mediaDevices.getDisplayMedia({
    video: true,
    audio: false
  });

  console.log('Compartilhando')

  if (media) {
    console.log('Conexoes atuais', peerConnections.current)
    Object.keys(peerConnections.current).forEach((conn) => {
      const shareConn = peer.current.call(conn, media, {});

      media.getVideoTracks()[0].addEventListener("ended", () => {
        console.log('Parando de compartilhar mdsss')
        shareConn.close();
        socket.emit("leave-room", {
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
