import { useEffect, useState } from 'react';
import { Container, Header, Body, Button, ButtonLink, Li, Line1, Line2, Line3 } from './styles';
import { RiUserLine, RiUserUnfollowLine } from 'react-icons/ri'
import { BsFillDice6Fill } from 'react-icons/bs'
import { useAuth } from "../../hooks/useAuth";
import { useTitle } from '../../hooks/useTitle';
import { Link } from 'react-router-dom';
import icon from '../../assets/img/Calamidade.png'

export function Menu() {

  const [active, setActive] = useState('fechado')
  const { signOut } = useAuth();
  const { title } = useTitle()

  function abrirMenu() {
    if (active == 'fechado') {
      setActive('aberto')
    } else if (active == 'aberto') {
      setActive('fechando')
      setTimeout(() => { setActive('fechado') }, 400)
    }
  }

  window.addEventListener("click", (event) => {

    if (event.clientX > 151) {
      if (active == 'aberto') {
        setActive('fechando')
        setTimeout(() => { setActive('fechado') }, 400)
      }
    }

  });

  return (
    <Container active={active} >

      <Header>

        <button onClick={abrirMenu}>
          <Line1 active={active} />
          <Line2 active={active} />
          <Line3 active={active} />
        </button>

        <div>
          <h1>{title}</h1>
        </div>

        <Link to={'/'} ><img src={icon} width={'60px'} /></Link>

      </Header>

      <Body active={active}>

        <ul>

          <Li>
            <ButtonLink onClick={abrirMenu} color={'purple'} to={"/"}> <BsFillDice6Fill size={25} /> Painel </ButtonLink>
          </Li>
          <Li>
            <ButtonLink onClick={abrirMenu} color={'yellow'} to={'/conta'}> <RiUserLine size={30} /> Conta </ButtonLink>
          </Li>
          <Li>
            <Button onClick={() => { signOut(); abrirMenu() }}> <RiUserUnfollowLine size={30} /> Sair </Button>
          </Li>

        </ul>

      </Body>

    </Container >
  );
}