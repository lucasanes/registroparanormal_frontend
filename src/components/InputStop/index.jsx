import { Container, ContainerInput, InputB, LabelContainer} from "./styles"

export function InputStop({label, valor, ...rest }) {

  return (
    <Container>
      
      <LabelContainer>
        {label}
      </LabelContainer>

      <ContainerInput>
        <InputB value={valor} disabled={true} onChange={(e) => {return e}} {...rest}/>
      </ContainerInput>
    </Container>
  )
}