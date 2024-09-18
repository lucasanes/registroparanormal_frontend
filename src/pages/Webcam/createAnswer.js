export async function createAnswer(peer, videoRef, peerConnections, webcam, setIsSharingWebcam) {
  peer.current.on("call", function (call) {
    call.answer();

    call.on("stream", function (remoteStream) {

      console.log('remoteStream', remoteStream);

      if (webcam.current) {
        webcam.current.getTracks().forEach(track => track.stop());
        webcam.current = null;
        setIsSharingWebcam(false);
      }

      videoRef.current.srcObject = remoteStream;
    });

    peerConnections.current[call.connectionId] = call;
  });
}
