import React, { useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { CartContext } from "../contexts/cartContext";

const CategoryProduct = ({
  id,
  title,
  image,
  specs,
  features,
  price,
  stock,
}) => {
  const navigate = useNavigate();
  const { addProduct } = useContext(CartContext);

  return (
    <ProductInfoArticle>
      <ProductTitle>
        <Link to={`/products/${id}`}>{title}</Link>
      </ProductTitle>

      <figure>
        <ProductImageContainer>
          <ProductImage src={`/assets/${image}`} alt={title} />
        </ProductImageContainer>
      </figure>

      <aside>
        <ProductInfo>
          <ProductInfoHeader>Dimensions</ProductInfoHeader>
          <label>{specs.dimensions}</label>
        </ProductInfo>

        {specs.capacity && (
          <ProductInfo>
            <ProductInfoHeader>Capacity</ProductInfoHeader>
            <label>{specs.capacity}</label>
          </ProductInfo>
        )}

        <ProductInfo>
          <ProductInfoHeader>Features</ProductInfoHeader>
          <ul>
            {features?.map((f, i) => {
              return (
                <ProductInfoListItem key={`feature${i}`}>
                  {f}
                </ProductInfoListItem>
              );
            })}
          </ul>
        </ProductInfo>
      </aside>

      <aside>
        <ProductInfoFinancePrice>&pound;{price}</ProductInfoFinancePrice>

        <ProductInfoStock>
          <ProductInfoStockLabel>Stock Level: {stock}</ProductInfoStockLabel>
          <ProductInfoStockLabel>FREE Delivery</ProductInfoStockLabel>
        </ProductInfoStock>

        <ProductInfoAction>
          <ProductInfoActionButton onClick={() => navigate(`/products/${id}`)}>
            View Product
          </ProductInfoActionButton>
          <ProductInfoActionButton
            onClick={() => addProduct({ id, title, price })}
          >
            Add to Basket
          </ProductInfoActionButton>
        </ProductInfoAction>
      </aside>
    </ProductInfoArticle>
  );
};

export default CategoryProduct;

const ProductInfoArticle = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 0.25fr 1fr 0.25fr;
  column-gap: 2em;
`;

const ProductTitle = styled.div`
  grid-column: 1 / span 3;
  color: black;
  font-weight: bold;
  font-size: 1.5em;
  padding-left: 1em;
`;

const ProductImageContainer = styled.div`
  padding: 0.1em;
  width: 90%;
  margin-left:2em;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductInfoHeader = styled.h3`
  color: Black;
  font-size: 1em;
  font-weight: bold;
  padding-top: 0.5em;
  padding-bottom:0.5em;
`;

const ProductInfoListItem = styled.li`
  padding-top: 0.5em;
`;

const ProductInfoStock = styled.div`
  padding: 1em;
  margin: 1em;
  // padding-top: 10px;
  background-color: rgba(105, 125, 183, 0.653);
  height: 5em;
  width: 10em;
  border-radius: 1em;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  border:1px solid black;
`;

const ProductInfoStockLabel = styled.label`
  // padding-bottom: 5px;
  margin-bottom: 5px
`;

const ProductInfoAction = styled.div`
  display: flex;
  flex-direction: column;
  
`;

const ProductInfoActionButton = styled.button`
  width:12em;
  height: 4em;
  border-radius: 1em;
  margin: 1em;
  background-color: rgba(105, 125, 183, 0.653);
  border:1px solid black;
  font-weight: bold;
 
`;

const ProductInfoFinancePrice = styled.div`
  color: Black;
  font-size: 2em;
  font-weight: bold;
  // padding-top: 10px;
  margin:1em;
  margin-top:0px;
  margin-bottom:0px;
`;
