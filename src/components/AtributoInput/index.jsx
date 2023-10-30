import { InputAtributo } from "./InputAtributo"
import { Container, Top, Bot, Mid, Img } from "./styles"
import AtributosImg from '../../assets/img/AtributosImg.png'


export function AtributoInput({ agi, setAgi, int, setInt, vig, setVig, pre, setPre, forca, setFor, ...rest }) {

    return (
        <Container>

            <Top>
                <InputAtributo valor={agi} setValor={setAgi} />
            </Top>

            <Mid>
                <InputAtributo valor={forca} setValor={setFor} />

                <InputAtributo valor={int} setValor={setInt} />
            </Mid>

            <Bot>
                <InputAtributo valor={pre} setValor={setPre} />

                <InputAtributo valor={vig} setValor={setVig} />
            </Bot>

            <Img {...rest} src={AtributosImg} />

        </Container>
    )
}