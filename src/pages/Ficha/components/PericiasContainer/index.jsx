import { Body, Pericias, Container, HeaderContainer, Footer, Button, ButtonIcon } from './styles';
import { useState, useEffect } from 'react';
import { Modal } from '../../../../components/Modals/Modal';
import { ToastContainer } from 'react-toastify';
import { ButtonEdit } from '../../../../components/ButtonEdit';
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { Pericia } from './Pericia';
import { ModalPericias } from './ModalPericias';

export function PericiasContainer({ data, atributos }) {

  const [todasPericias, setTodasPericias] = useState([])
  const [pericias, setPericias] = useState([])
  const [active, setActive] = useState('p')
  const [modalPericiasIsOpen, setModalPericiasIsOpen] = useState(false)

  function gerarPericias() {
    let varPericias = []

    for (const [key, value] of Object.entries(data)) {

      let atributoChave = ''

      const mapeamento = {
        adestramento: atributos.pre,
        arte: atributos.pre,
        diplomacia: atributos.pre,
        enganacao: atributos.pre,
        intimidacao: atributos.pre,
        percepcao: atributos.pre,
        religiao: atributos.pre,
        vontade: atributos.pre,
        acrobacia: atributos.agi,
        crime: atributos.agi,
        furtividade: atributos.agi,
        pilotagem: atributos.agi,
        pontaria: atributos.agi,
        reflexo: atributos.agi,
        atletismo: atributos.for,
        luta: atributos.for,
        atualidade: atributos.int,
        ciencia: atributos.int,
        intuicao: atributos.int,
        investigacao: atributos.int,
        medicina: atributos.int,
        ocultismo: atributos.int,
        profissao: atributos.int,
        sobrevivencia: atributos.int,
        tatica: atributos.int,
        tecnologia: atributos.int,
        fortitude: atributos.vig,
        iniciativa: atributos.agi
      }

      atributoChave = mapeamento[key]

      if (key != 'id' && key != 'fichaId') {
        const novaPericia = { nome: key, atributoChave, valor: value }
        varPericias.push(novaPericia)
      }
    }
    return varPericias
  }

  useEffect(() => {
    async function definirPericias(gerador) {
      const gerandoPericias = await gerador()
      setTodasPericias(gerandoPericias)
      setPericias(gerandoPericias.filter(pericia => pericia.valor > 0))
    }
    definirPericias(gerarPericias)
  }, [])

  useEffect(() => {

    switch (active) { 
      case "todas":
        setPericias(todasPericias);
        break;
      case "p":
        const periciasMaiorQueZero = todasPericias.filter(pericia => pericia.valor > 0);
        setPericias(periciasMaiorQueZero);
        break;
      case "nt":
        const periciasMenorQueCinco = todasPericias.filter(pericia => pericia.valor < 5);
        setPericias(periciasMenorQueCinco);
        break;
      case "t":
        const periciasMaiorQueCinco = todasPericias.filter(pericia => pericia.valor >= 5 && pericia.valor <= 9);
        setPericias(periciasMaiorQueCinco);
        break;
      case "v":
        const periciasMaiorQueDez = todasPericias.filter(pericia => pericia.valor >= 10 && pericia.valor <= 14);
        setPericias(periciasMaiorQueDez);
        break;
      case "e":
        const periciasMaiorQueQuinze = todasPericias.filter(pericia => pericia.valor >= 15);
        setPericias(periciasMaiorQueQuinze);
        break;
    }

  }, [active, todasPericias])

  function trocarOlho() {
    if (active != 'p') {
      setActive('p')
    } else {
      setActive('todas')
    }
  }

  return (
    <Container>

      <Modal isOpen={modalPericiasIsOpen} setClose={() => setModalPericiasIsOpen(false)}>
        <ModalPericias atualizar={setTodasPericias} atributos={atributos} data={data} pericias={todasPericias} setModalClose={() => setModalPericiasIsOpen(false)} />
      </Modal>

      <HeaderContainer>
        <ButtonIcon onClick={trocarOlho}>{active != 'todas' ? <BsEyeSlash color='aqua' size={23} /> : <BsEye color='aqua' size={23} />}</ButtonIcon>
        <h1>Perícias</h1>
        <ButtonEdit onClick={() => setModalPericiasIsOpen(true)} />
      </HeaderContainer>

      <hr />

      <Body>

        <Pericias>

          {pericias.map(pericia => <Pericia key={pericia.nome} nome={pericia.nome} valor={pericia.valor} atributoChave={pericia.atributoChave} />)}

        </Pericias>

        <Footer>
          <Button onClick={() => setActive('nt')} color={'nt'}>Não Treinadas</Button>
          <Button onClick={() => setActive('t')} color={'t'}>Treinadas</Button>
          <Button onClick={() => setActive('v')} color={'v'}>Veteranas</Button>
          <Button onClick={() => setActive('e')} color={'e'}>Expert</Button>
        </Footer>

      </Body>

    </Container>
  );
}