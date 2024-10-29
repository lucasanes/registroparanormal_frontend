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

      if (fichaId == id) {
        const horas = new Date().getHours().toString().padStart(2, '0');
        const minutos = new Date().getMinutes().toString().padStart(2, '0');
        const segundos = new Date().getSeconds().toString().padStart(2, '0');

        const horarioAtual = horas + ':' + minutos + ':' + segundos;

        if (nomeNPC != null) {
          setRolagens((prev) => [
            ...prev,
            {
              valorTotal,
              dadosRolados,
              nome,
              isDano,
              isCritico,
              isDesastre,
              conta,
              nomeFicha: nomeNPC,
              portrait: noportrait,
              horarioAtual,
            },
          ]);
        } else {
          setRolagens((prev) => [
            ...prev,
            {
              valorTotal,
              dadosRolados,
              nome,
              isDano,
              isCritico,
              isDesastre,
              conta,
              nomeFicha: 'Mestre',
              portrait: noportrait,
              horarioAtual,
            },
          ]);
        }
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

            setRolagens((prev) => [
              ...prev,
              {
                valorTotal,
                dadosRolados,
                nome,
                isDano,
                isCritico,
                conta,
                nomeFicha: ficha.Principal[0].nome,
                portrait: ficha.Portrait[0].normal,
                horarioAtual,
              },
            ]);
          }
        });
      }
    }

    socket.on(`dado.rolado`, updateRolagens);

    return () => {
      socket.off(`dado.rolado`, updateRolagens);
    };
  }, []);

  return (
    <Container>
      <HeaderContainer>
        <ButtonIcon onClick={() => setNoReverse(!noReverse)}>
          {' '}
          <BsArrowDownUp size={21} color={'green'} />{' '}
        </ButtonIcon>
        <h1>Últimos Testes</h1>
        <ButtonIcon onClick={() => setRolagens([])}>
          {' '}
          <MdOutlineCleaningServices size={22} color={'green'} />{' '}
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
