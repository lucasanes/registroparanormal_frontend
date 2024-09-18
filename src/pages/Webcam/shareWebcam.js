export async function shareWebcam(peer, socket, roomId, peerConnections) {

  // const cameraId = window.localStorage.getItem("@registroparanormal:camera");

  const media = await navigator.mediaDevices.getUserMedia({
    video: {
      // deviceId: cameraId ? { exact: cameraId } : undefined,
      aspectRatio: 16 / 9,
      width: { min: 1280, ideal: 1920, max: 1920 },
      height: { min: 720, ideal: 1080, max: 1080 },
      frameRate: { min: 30, ideal: 30, max: 60 }
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
