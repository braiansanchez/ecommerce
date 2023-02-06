import Button from 'react-bootstrap/Button';
import { FaBeer } from 'react-icons/fa';


const CartWidget = () => {
  return (
    <div>
      <Button variant="light">
        <FaBeer /> Carrito
      </Button>{' '}
    </div>
  )
}

export default CartWidget