import React, { FC } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { productApi, useGetProductsQuery } from "../store/product/product.api";
import ProductItem from "./ProductItem";

const Home: FC = () => {
  const { data, isLoading, isError } = useGetProductsQuery(6);

  return (
    <div>
      {isError && (
        <div>
          <h2>Ошибка загрузки данных</h2>
        </div>
      )}
      {isLoading ? (
        <div>Загрузка</div>
      ) : (
        <div style={{ display: "flex" }}>
          {data?.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
