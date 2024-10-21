export async function shareScreen(peer, socket, roomId, peerConnections) {

  const media = await navigator.mediaDevices.getDisplayMedia({
    // video: {
    //   aspectRatio: { ideal: 1.7777777778 },
    //   frameRate: { min: 60, ideal: 144, max: 165 },
    //   width: { min: 1080, ideal: 1920 },
    //   height: { min: 720, ideal: 1080 }
    // },
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
