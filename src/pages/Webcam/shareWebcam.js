export async function shareWebcam(peer, socket, roomId, peerConnections) {

  const cameraId = localStorage.getItem("@registroparanormal:camera");

  const media = await navigator.mediaDevices.getUserMedia({
    video: {
      deviceId: cameraId ? { exact: cameraId } : undefined,
      aspectRatio: { ideal: 1.7777777778 },
      width: { ideal: 1920 },
      height: { ideal: 1080 },
      frameRate: { ideal: 60 }
    },
    audio: false
  });

  if (media) {
    Object.keys(peerConnections.current).forEach((conn) => {
      const shareConn = peer.current.call(conn, media, {});

      media.getTracks()[0].addEventListener("ended", () => {
        shareConn.close();
        socket.emit("webcam/leave-room", {
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
