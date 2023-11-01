import { Container } from './styles';
import { BiTrashAlt } from 'react-icons/bi'
import { useDisabled } from '../../hooks/useDisabled';

export function ButtonDelete({ onClick, size = 20, ...rest }) {

  const { disabled } = useDisabled()

  return (
    <Container {...rest}>
      <button type='button' disabled={disabled} onClick={onClick}>
        <BiTrashAlt size={size} color={'#ff0000'} />
      </button>
    </Container>
  );
}