import React, { useContext } from "react";

import { useParams } from "react-router-dom";
import styled from "styled-components";

import { CartContext } from "../contexts/cartContext";

import { getProductById } from "../fetcher";

const ProductDetail = () => {
  const { addProduct } = useContext(CartContext);
  const [product, setProduct] = React.useState({
    errorMessage: "",
    data: {},
  });
  const { productId } = useParams();

  React.useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getProductById(productId);
      setProduct(responseObject);
    };
    fetchData();
  }, [productId]);

  const createMarkup = () => {
    return { __html: product.data?.description };
  };

  return (
    <ProductInfoArticle>
      <ProductTitle>{product.data.title}</ProductTitle>

      <figure>
        <ProductImageContainer>
          <ProductImage
            src={`/assets/${product.data.image}`}
            alt={product.data.title}
          />
        </ProductImageContainer>
      </figure>

      <aside>
        <ProductInfo>
          <ProductInfoHeader>Dimensions</ProductInfoHeader>
          <label>{product.data.specs?.dimensions}</label>
        </ProductInfo>

        {product.data.specs?.capacity && (
          <ProductInfo>
            <ProductInfoHeader>Capacity</ProductInfoHeader>
            <label>{product.data.specs?.capacity}</label>
          </ProductInfo>
        )}

        <ProductInfo>
          <ProductInfoHeader>Features</ProductInfoHeader>
          <ul>
            {product.data.features?.map((f, i) => {
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
        <ProductInfoFinancePrice>
          &pound;{product.data.price}
        </ProductInfoFinancePrice>

        <ProductInfoStock>
          <ProductInfoStockLabel>
            Stock Level: {product.data.stock}
          </ProductInfoStockLabel>
          <ProductInfoStockLabel>FREE Delivery</ProductInfoStockLabel>
        </ProductInfoStock>

        <ProductInfoAction>
          <ProductInfoActionButton
            onClick={() =>
              addProduct({
                id: product.data.id,
                title: product.data.title,
                price: product.data.price,
              })
            }
          >
            Add to Basket
          </ProductInfoActionButton>
        </ProductInfoAction>
      </aside>

      <ProductInfoDescription
        dangerouslySetInnerHTML={createMarkup()}
      ></ProductInfoDescription>
    </ProductInfoArticle>
  );
};

export default ProductDetail;

const ProductInfoArticle = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 0.25fr 1fr 0.25fr;
  column-gap: 2em;
`;

const ProductInfoDescription = styled.div`
  grid-column: 1 / span 3;
  margin: 2em;
  margin-top: 3em;
`;

const ProductTitle = styled.div`
  grid-column: 1 / span 3;
  color: black;
  font-weight: bold;
  font-size: 1.5em;
  padding-left: 1em;
`;

const ProductImageContainer = styled.div`
  padding: 10px;
  width: 60%;
  margin-left: 2em;
`;

const ProductImage = styled.img`
  padding: 0.1em;
  width: 90%;
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
  padding-bottom: 0.5em;
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
  border: 1px solid black;
`;

const ProductInfoStockLabel = styled.label`
  margin-bottom: 5px;
`;

const ProductInfoAction = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductInfoActionButton = styled.button`
  width: 12em;
  height: 4em;
  border-radius: 1em;
  margin: 1em;
  background-color: rgba(105, 125, 183, 0.653);
  border: 1px solid black;
  font-weight: bold;
`;

const ProductInfoFinancePrice = styled.div`
  color: Black;
  font-size: 2em;
  font-weight: bold;
  // padding-top: 10px;
  margin: 1em;
  margin-top: 0px;
  margin-bottom: 0px;
`;
