import { Outlet } from "react-router-dom";
import { Menu } from "../../components/Menu";
import { Container, ContentWrapper } from "./styles";

export function AppLayout() {
  return (
    <Container>
      <Menu/>

      <ContentWrapper>
        <Outlet/>
      </ContentWrapper>
    </Container>
  );
}
