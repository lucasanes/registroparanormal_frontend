import { Container } from './styles';
import { useDisabled } from '../../hooks/useDisabled';
import { AiOutlinePlus } from 'react-icons/ai';

export function ButtonAdd({ onClick, ...rest }) {

  const { disabled } = useDisabled()

  return (
    <Container {...rest}>
      <button type='button' disabled={disabled} onClick={onClick}>
        <AiOutlinePlus color='#00b740' size={20} />
      </button>
    </Container>
  );
}