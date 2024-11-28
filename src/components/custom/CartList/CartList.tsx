import { FC } from 'react';
import {
  Card,
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableFooter,
} from '../../molecules';
import { useCart } from '../../../hooks/useCart';
import { Icon } from '../../atoms';
import { removeFromCart, updateCartQuantity } from '../../../context/actions/cartActions';
import { formatPrice } from '../../../utils/formatPrice';

const CartList: FC = () => {
  const { state, dispatch } = useCart();

  return (
    <>
      <Card>
        <h3>Carrito de Compras</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Producto</TableHead>
              <TableHead></TableHead>
              <TableHead>Cantidad</TableHead>
              <TableHead>Eliminar</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {state.cart.map((item, index) => (
              <TableRow key={`cart_${index}`}>
                <TableCell>
                  <img src={item.thumbnail} alt={item.title} className="cardlist__image" />
                </TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>
                  <div className="counter">
                    <button
                      onClick={() => updateCartQuantity(dispatch, item.id, item.quantity - 1)}
                      className="counter__button"
                      aria-label="Decrement"
                    >
                      -
                    </button>
                    <div className="counter__display">{item.quantity}</div>
                    <button
                      onClick={() => updateCartQuantity(dispatch, item.id, item.quantity + 1)}
                      className="counter__button"
                      aria-label="Increment"
                    >
                      +
                    </button>
                  </div>
                </TableCell>
                <TableCell>
                  <div
                    aria-label="Eliminar"
                    onClick={() => removeFromCart(dispatch, item.id)}
                    className="button_icon"
                  >
                    <Icon name="trash" color="white" size={20} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4}>Total a pagar: ${formatPrice(state.totalPrice)}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Card>
    </>
  );
};

export default CartList;
