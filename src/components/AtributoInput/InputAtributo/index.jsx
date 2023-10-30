import { Container, Input } from './styles';

export function InputAtributo({ valor, setValor }) {

  function onlyNumbers(v) {
    v = v.replace(/[^0-9]/g, "")
    setValor(v)
  }

  return (
    <Container>
      <Input required maxLength={1} autoComplete="off" type="text" value={valor} onChange={(e) => {
        onlyNumbers(e.target.value)
      }} />
    </Container>
  );
}