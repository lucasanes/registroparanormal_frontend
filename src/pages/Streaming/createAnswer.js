export async function createAnswer(peer, videoRef, peerConnections, screen, setIsSharingScreen) {
  peer.current.on("call", function (call) {
    call.answer();

    call.on("stream", function (remoteStream) {

      if (screen.current) {
        screen.current.getTracks().forEach(track => track.stop());
        screen.current = null;
        setIsSharingScreen(false);
      }

      videoRef.current.srcObject = remoteStream;
    });

    peerConnections.current[call.connectionId] = call;
    call.on("close", () => (videoRef.current.srcObject = null));
  });
}
