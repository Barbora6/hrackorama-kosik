import { useState } from "react";
import type { IProduct } from "../../models/Product";
import Amount from "../Amount";
import CartProduct from "../CartProduct";
import "./style.css";

interface ICartItemProps {
  product: IProduct;
}

const CartItem = ({ product }: ICartItemProps) => {
  const [count, setCount] = useState(product.amount);

  const handleAmountChange = (newCount: number) => {
    setCount(newCount);
  };

  return (
    <div className="cart-item">
      <CartProduct name={product.name} price={product.price} />
      <Amount value={count} onAmountChange={handleAmountChange} />
    </div>
  );
};

export default CartItem;
