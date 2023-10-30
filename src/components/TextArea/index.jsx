import { useEffect, useState } from "react"
import { Container, InputB, LabelContainer} from "./styles"

export function TextArea({label, setValor, valor, ...rest }) {

  const [hover, setHover] = useState(false)

  useEffect(() => {
    if (valor != null && valor.toString().length > 0) {
      setHover(true)
    } else {
      if (!hover) {
        setHover(false)
      }  
    }
    
  }, [valor])

  return (
    <Container>
      
      <LabelContainer hover={hover.toString()}>
        {label}
      </LabelContainer>

      <InputB value={valor} {...rest}
        onChange={(event) => {
          setValor(event.target.value)
        }}
        onFocus={() => {
          setHover(true)
        }}
        onBlur={() => {
          if (valor == null || valor.toString().length == 0) {
            setHover(false)
          }
        }}
      />
    </Container>
  )
}