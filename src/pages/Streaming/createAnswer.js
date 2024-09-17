export async function createAnswer(peer, videoRef, peerConnections) {
  peer.current.on("call", function (call) {
    call.answer();

    call.on("stream", function (remoteStream) {
      videoRef.current.srcObject = remoteStream;
    });

    peerConnections.current[call.connectionId] = call;
    call.on("close", () => (videoRef.current.srcObject = null));
  });
}
