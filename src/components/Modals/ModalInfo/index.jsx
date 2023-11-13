import React from "react";
import { Body, Container, Header } from "./styles";

export function ModalInfo({setModalClose}) {

  return (
    <Container>

      <Header>

        <h1>Guia dos Dados</h1>
        <button type="button" onClick={setModalClose}>x</button>

      </Header>

      <hr />

      <Body>

        <h3>Princípios Básicos</h3>
        <br />
        <p>
          Um dado é composto por <var>N</var> faces. Esse valor fica depois do <code>d</code>.<br /> Exemplo: Um dado de 20 lados, será "<code>d20</code>".
        </p>
        <br />
        <p>
          Para Expressar quantidade de dados, nós colocamos o valor antes do "<code>d</code>".<br/>
          Exemplo: Para rolar 2 dados de 6 lados (sendo que iremos pegar o melhor), será "<code>2d6</code>, 2 de quantidade de dados, e 6 de lados".<br/>
        </p>
        <br />
        <p>
          Agora para poder adicionar um valor fixo depois do resultado do dado, devemos por um "<code>+</code>". Depois de tudo.<br/>
          Exemplo: Rolar 1 dado de 20 lados e somar 5 do resultado, ficará "<code>1d20+5</code>" OU "<code>d20+5</code>". (é importante não ter espaços).
        </p>
        <br />
        <br />
        <h3>Aprofundado nos Princípios</h3>
        <br />
        <p>
          Para rolar dois ou mais dados de lados diferentes, é só usar "<code>+</code>" Entre cada um, deixando a soma para o final.<br/>
          Exemplo: Um dado de 6 lados, somado com um dado de 10 lados, ficará "<code>1d6+1d10</code>" OU "<code>d6+d10</code>".
        </p>
        <br />
        <br />
        <h3>Dados Dinâmicos</h3>
        <br />
        <p>
          Para usar algum atributo como, por exemplo, FORÇA basta adicionar "<code>/FOR/</code>".<br/>
          Exemplos: Rolar 2d20 somando FORÇA, "<code>2d20+/FOR/</code>".
        </p>
        <br />
        <p>
          Há, Também uma forma e rolar com atributo como base.<br/>
          Exemplos: FOR = 2, "<code>/FOR/d20</code>" -&gt; "<code>2d20</code>".<br/>
          Também é possível rolar uma quantidade de lados usando os atributos<br/>
          Exemplos: AGI = 4, "<code>1d/FOR/</code>" -&gt; "<code>1d4</code>".<br/>
          E claro usar tudo de uma vez.<br/>
          Exemplos: AGI = 2, FOR = 3, INT = 4: "<code>/AGI/d/FOR/+/INT/</code>" -&gt; "<code>2d3+4</code>".<br/>
          Pode parecer confuso, mas é bem explicátivo.<br/>
        </p>
        <br />
        <p>
          Para fazer com perícias, é importante lembrar que são as 4 letras iniciais.<br/>
          Exemplos: FOR = 2, "<code>/PONT/d20</code>" -&gt; "<code>5d20</code>".<br/>
          Também é possível rolar uma quantidade de lados usando os atributos<br/>
          Exemplos: AGI = 4, "<code>1d/INIC/</code>" -&gt; "<code>1d5</code>".<br/>
          E claro usar tudo de uma vez.<br/>
          Exemplos: AGI = 2, FOR = 3, INT = 4: "<code>/AGI/d/FOR/+/LUTA/</code>" -&gt; "<code>2d3+4</code>".<br/>
          Pode parecer confuso, mas é bem explicativo.<br/>
        </p>
        <br />
        <br />
        <h3>Lembrando que:</h3>
        <br />
        <ol>
            <li>Dados podem ter lados, quantidades, e soma customizados.</li>
            <li>Não pode rolar mais de 10 dados em cada item. (Errado:"<code>15d10</code>" Certo:"<code>10d10+5d10</code>").</li>
            <li>Não pode rolar dados que tenham mais de 100 lados, o limite é 100.</li>
            <li>Não pode somar mais de 30 absolutamente. (Negativo ou positivo)</li>
        </ol>

      </Body>
      
    </Container>
  );
}