import { Container, InputB, LabelContainer} from "./styles"

export function Select({label, setValor, valor, ...rest }) {

  return (
    <Container>
      
      <LabelContainer>
        {label} |
      </LabelContainer>

      <InputB defaultValue={valor} {...rest}
        onChange={(event) => {
          setValor(event.target.value)
        }}
      />
    </Container>
  )
}