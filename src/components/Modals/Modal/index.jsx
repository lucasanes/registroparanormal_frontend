import { useEffect, useState } from "react";
import { Container, Content, ContentContainer } from "./styles";
export function Modal({ isOpen, setClose, children, padding = true }) {

  const [realIsOpen, setRealIsOpen] = useState(isOpen)

  useEffect(() => {

    if (isOpen) {
      setRealIsOpen(true)
    } else {
      setTimeout(() => {
        setRealIsOpen(false)
      }, 260);
    }

  }, [isOpen])

  return (
    <Container open={realIsOpen} onClose={setClose}>
      <ContentContainer padding={padding.toString()}>
        <Content animation={isOpen}>{children}</Content>
      </ContentContainer>
    </Container>
  );
}