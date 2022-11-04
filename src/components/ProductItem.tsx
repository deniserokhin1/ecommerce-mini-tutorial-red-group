import React, { FC } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IProduct } from "../store/product/product.type";

interface ProductItemProps {
  product: IProduct;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  const { addItem, removeItem } = useActions();
  const { cart } = useTypedSelector((state) => state);

  const isExistsInCart = cart.some((p) => p.id === product.id);

  return (
    <div
      key={product.id}
      onClick={() => {
        !isExistsInCart ? addItem(product) : removeItem(product);
      }}
    >
      <img style={{ width: 200 }} src={product.image} alt="" />
      {isExistsInCart ? (
        <div>Товар уже в корзине</div>
      ) : (
        <div>Добавить товар в корзину</div>
      )}
    </div>
  );
};

export default ProductItem;
