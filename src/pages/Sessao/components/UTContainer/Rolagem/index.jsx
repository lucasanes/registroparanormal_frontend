import noportrait from '../../../../../assets/img/noportrait.png';
import pericias from '../../../../../components/mappers/pericias';
import { Body, Container, Footer, Header, Horas, Main } from './styles';

export function Rolagem({ data }) {

  return (
    <Container>

      <Header>

        <video src={data.portrait || noportrait} autoPlay loop muted/>
        <h1>{data.nomeFicha}</h1>

      </Header>

      <Main>

        <Body isCritico={data.isCritico} isDano={data.isDano}>
          <h1>{pericias(data.nome) != null ? pericias(data.nome) : data.nome}:</h1>
          <span>
            {data.conta} = {data.valorTotal}
          </span>
        </Body>

        <Footer isCritico={data.isCritico}>
          {data.dadosRolados && data.dadosRolados.map((dado) => (
            <span key={dado.dado}>
              {dado.dado}: {dado.valores.join(', ')}
            </span>
          ))}
        </Footer>

      </Main>

      <Horas>{data.horarioAtual}</Horas>

    </Container>
  );
}