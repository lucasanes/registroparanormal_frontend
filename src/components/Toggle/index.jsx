import { Container, SpanContainer, Input } from "./styles"

export function Toggle({ outro = false, span, classNumber, end = false, ...rest }) {
  return (
    <Container outro={outro} end={end}>
      <SpanContainer>
        {span}
      </SpanContainer>
      <Input className={"toggle" + `${classNumber}`} id={"toggle" + `${classNumber}`} type="checkbox" {...rest}></Input>
      <label className={"toggleLabel" + `${classNumber}`} htmlFor={"toggle" + `${classNumber}`}></label>
    </Container>
  )
}