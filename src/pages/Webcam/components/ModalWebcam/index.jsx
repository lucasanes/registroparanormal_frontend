import { useEffect, useState } from "react";
import { Body, Button, Container, Header } from "./styles";

export function ModalWebcam({ setModalClose }) {

  const [webcams, setWebcams] = useState([]);
  const [permissionDenied, setPermissionDenied] = useState(false);
  const deviceId = localStorage.getItem("@registroparanormal:camera");

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(() => {
        navigator.mediaDevices.enumerateDevices().then(devices => {
          const webcams = devices.filter(device => device.kind === 'videoinput');
          setWebcams(webcams);
        });
      })
      .catch(() => {
        setPermissionDenied(true);
      });
  }, []);

  async function handleCreate(deviceId) {
    localStorage.setItem("@registroparanormal:camera", deviceId);
    setModalClose();
  }

  return (
    <Container>

      <Header>
        <h1>Selecionar Webcam</h1>
        <button type="button" onClick={setModalClose}>x</button>
      </Header>

      <hr />

      <Body>
        {
          permissionDenied ? (
            <p>Permissão de acesso à câmera negada. Por favor, habilite para continuar.</p>
          ) : (
            webcams.length > 0 ? (
              <>
                {
                  webcams.map(webcam => (
                    deviceId === webcam.deviceId ? (
                      <Button 
                        key={webcam.deviceId} 
                        active={true} 
                        onClick={() => handleCreate(webcam.deviceId)}
                        disabled={true}>
                          {webcam.label}
                      </Button>
                    ) : (
                      <Button 
                        key={webcam.deviceId} 
                        active={false} 
                        onClick={() => handleCreate(webcam.deviceId)}
                        disabled={false}>
                          {webcam.label}
                      </Button>
                    )
                  ))
                }
              </>
            ) : (
              <p>Nenhuma webcam encontrada.</p>
            )
          )
        }
      </Body>

    </Container>
  );
}
