import Button from 'react-bootstrap/Button';
import { BsFillCartFill } from "react-icons/bs";

const CartWidget = () => {
  return (
    <div>
      <Button variant="light">
        <BsFillCartFill /> Carrito
      </Button>{' '}
    </div>
  )
}

export default CartWidget