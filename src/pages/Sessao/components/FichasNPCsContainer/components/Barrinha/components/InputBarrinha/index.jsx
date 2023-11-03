import { useDisabled } from "../../../../../../../../hooks/useDisabled"
import { Container, InputB, } from "./styles"

export function InputBarrinha({ setValor, valor, valorMax, right = false, ...rest }) {

    const { disabled } = useDisabled()

    function onlyNumbers(v) {

        if (!disabled) {
            if (v > valorMax) {
                setValor(valor)
            } else {
                v = v.replace(/[^0-9]/g, "")
                setValor(Number(v))
            }
        }
    }

    return (
        <Container>
            <InputB autoComplete="off" right={right} value={valor != null ? valor : 0} type="text" maxLength={2} {...rest}
                onChange={(event) => {
                    onlyNumbers(event.target.value)
                }}
            />
        </Container>
    )
}