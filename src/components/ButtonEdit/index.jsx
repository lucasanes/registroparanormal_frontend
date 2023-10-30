import { Container } from './styles';
import { MdOutlineEdit } from 'react-icons/md'
import { useDisabled } from '../../hooks/useDisabled';

export function ButtonEdit({ onClick, size = 20, ...rest }) {

  const { disabled } = useDisabled()

  return (
    <Container {...rest}>
      <button type='button' disabled={disabled} onClick={onClick}>
        <MdOutlineEdit size={size} color={'#dcd91c'} />
      </button>
    </Container>
  );
}