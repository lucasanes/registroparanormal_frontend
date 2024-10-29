import noportrait from '../../../../../assets/img/noportrait.png';
import pericias from '../../../../../components/mappers/pericias';
import { Body, Container, Footer, Header, Horas, Main } from './styles';

export function Rolagem({ data }) {
  return (
    <Container>
      <Header>
        {!data.portrait.includes('noportrait') ? (
          <video src={data.portrait} autoPlay muted />
        ) : (
          <img src={noportrait} />
        )}
        <h1>{data.nomeFicha}</h1>
      </Header>

      <Main>
        <Body
          isDesastre={data.isDesastre}
          isCritico={data.isCritico}
          isDano={data.isDano}
        >
          <h1>
            {pericias(data.nome) != null ? pericias(data.nome) : data.nome}:
          </h1>
          <span>
            {data.conta} = {data.valorTotal}
          </span>
        </Body>

        <Footer isDesastre={data.isDesastre} isCritico={data.isCritico}>
          {data.dadosRolados &&
            data.dadosRolados.map((dado) => (
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
