import { useEffect, useState } from 'react';
import { BsArrowDownUp } from 'react-icons/bs';
import { MdOutlineCleaningServices } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';
import noportrait from '../../../../assets/img/noportrait.png';
import { useFichas } from '../../../../hooks/useFichas';
import { api } from '../../../../services/api';
import { Rolagem } from './Rolagem';
import {
  BodyContainer,
  ButtonIcon,
  Container,
  HeaderContainer,
} from './styles';

const socket = io(api.defaults.baseURL);

export function UTContainer() {
  const { id } = useParams();

  const { fichas } = useFichas();

  const [rolagens, setRolagens] = useState([]);

  const [noReverse, setNoReverse] = useState(false);

  useEffect(() => {
    const rolagensStorage = localStorage.getItem(
      '@registroparanormal:rolagens'
    );

    const rolagens = rolagensStorage ? JSON.parse(rolagensStorage) : [];

    setRolagens(rolagens);

    function updateRolagens({
      fichaId,
      nomeNPC,
      valorTotal,
      dadosRolados,
      nome,
      isDano,
      isCritico,
      isDesastre,
      conta,
    }) {
      if (!valorTotal) {
        return;
      }

      const rolagensStorage = localStorage.getItem(
        '@registroparanormal:rolagens'
      );

      const rolagens = rolagensStorage ? JSON.parse(rolagensStorage) : [];

      if (fichaId == id) {
        const horas = new Date().getHours().toString().padStart(2, '0');
        const minutos = new Date().getMinutes().toString().padStart(2, '0');
        const segundos = new Date().getSeconds().toString().padStart(2, '0');

        const horarioAtual = horas + ':' + minutos + ':' + segundos;

        const novaRolagem = {
          valorTotal,
          dadosRolados,
          nome,
          isDano,
          isCritico,
          isDesastre,
          conta,
          nomeFicha: nomeNPC ? nomeNPC : 'Mestre',
          portrait: noportrait,
          horarioAtual,
        };

        setRolagens((prev) => [...prev, novaRolagem]);
        localStorage.setItem(
          '@registroparanormal:rolagens',
          JSON.stringify([...rolagens, novaRolagem])
        );
      } else {
        fichas.forEach((ficha) => {
          if (ficha.id == fichaId && nome.length > 0) {
            const horas = new Date().getHours().toString().padStart(2, '0');
            const minutos = new Date().getMinutes().toString().padStart(2, '0');
            const segundos = new Date()
              .getSeconds()
              .toString()
              .padStart(2, '0');

            const horarioAtual = horas + ':' + minutos + ':' + segundos;

            const novaRolagem = {
              valorTotal,
              dadosRolados,
              nome,
              isDano,
              isCritico,
              isDesastre,
              conta,
              nomeFicha: ficha.Principal[0].nome,
              portrait: ficha.Portrait[0].normal,
              horarioAtual,
            };

            setRolagens((prev) => [...prev, novaRolagem]);
            localStorage.setItem(
              '@registroparanormal:rolagens',
              JSON.stringify([...rolagens, novaRolagem])
            );
          }
        });
      }
    }

    socket.on(`dado.rolado`, updateRolagens);

    return () => {
      socket.off(`dado.rolado`, updateRolagens);
    };
  }, []);

  function handleClear() {
    localStorage.removeItem('@registroparanormal:rolagens');
    setRolagens([]);
  }

  return (
    <Container>
      <HeaderContainer>
        <ButtonIcon onClick={() => setNoReverse(!noReverse)}>
          <BsArrowDownUp size={21} color={'green'} />
        </ButtonIcon>
        <h1>Últimos Testes</h1>
        <ButtonIcon onClick={handleClear}>
          <MdOutlineCleaningServices size={22} color={'green'} />
        </ButtonIcon>
      </HeaderContainer>

      <hr />

      <BodyContainer nulo={rolagens.length.toString()}>
        {noReverse
          ? rolagens.map((rolagem, index) => (
              <Rolagem key={index} data={rolagem} />
            ))
          : rolagens
              .map((rolagem, index) => <Rolagem key={index} data={rolagem} />)
              .reverse()}
      </BodyContainer>
    </Container>
  );
}
