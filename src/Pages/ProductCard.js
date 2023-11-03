import React from 'react';
import styled from 'styled-components';

export const ProductCard = (props) => {
    const{product}=props;
  return (
   <>
   <ProductBody>
    <ProductName>{product.name}</ProductName>
            <ProductImage>
              <img src={product.image} alt={product.title} />
            </ProductImage>
            <ProductContent>
              {product.description.length > 150 ? `${product.description.substring(0, 150)}...` : product.description}
            </ProductContent>
            <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
            <AddToCartButton>Add to Cart</AddToCartButton></ProductBody>
   </>
  )
}
const ProductBody = styled.div`
  background: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
`;

const ProductName = styled.h2`
  font-size: 1.2rem;
`;

const ProductPrice = styled.h1`
  font-size: 1rem;
  color: #777;
`;

const AddToCartButton = styled.button`
  background: #007bff;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;
const ProductImage=styled.div`
img {
  width: 100px;  
  height: 100px; 
  object-fit: cover;
`
const ProductContent=styled.p`
font-size: 20px;

`