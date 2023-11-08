import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { ProductCard } from './ProductCard';


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortType, setSortType] = useState('default');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

 
  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data); 
      })
      .catch((error) => {
        console.log('Error fetching products', error);
      });
  }, []);

     // Filter products by category
     const filterProducts = (category) => {
      setSelectedCategory(category);
      if (category === 'All') {
        setFilteredProducts(products); 
      } else {
        const filtered = products.filter((product) => product.category === category);
        setFilteredProducts(filtered);

    setCurrentPage(1);
      }
    };
  
    // Sort products by price
    const sortProducts = (type) => {
      setSortType(type);
      const sortedProducts = [...filteredProducts];
      if (type === 'asc') {
        sortedProducts.sort((a, b) => a.price - b.price);
      } else if (type === 'desc') {
        sortedProducts.sort((a, b) => b.price - a.price);
      }
      setFilteredProducts(sortedProducts);

    setCurrentPage(1);
    };
    const indexOfLastProduct = currentPage * postsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - postsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  
    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  

  return (
    <Container>
      <h1>Product List</h1>
      <div>
      <Title>Filter by Category:</Title>
        <SelectCategory onChange={(e) => filterProducts(e.target.value)} value={selectedCategory}>
          <Option value="All">All</Option>
          <Option value="electronics">Electronics</Option>
          <Option value="jewelery">Jewelery</Option>
          <Option value="men's clothing">Men's Clothing</Option>
          <Option value="women's clothing">Women's Clothing</Option>
        </SelectCategory>
  </div>
  <div>
      <Title>Filter by Price:</Title>
        <Button onClick={() => sortProducts('default')}>Default</Button>
        <Button onClick={() => sortProducts('asc')}>Low to High</Button>
        <Button onClick={() => sortProducts('desc')}>High to Low</Button>
       </div>
 
      <ProductGrid>
      {currentProducts.map((product) => (
        //Product card
  <ProductCard key={product.id} product={product}/>   ))}
      </ProductGrid>
    
         <Pagination>
        {Array.from({ length: Math.ceil(filteredProducts.length / postsPerPage) }).map((_, index) => (
          <PageNumber
            key={index}
            onClick={() => paginate(index + 1)}
            active={index + 1 === currentPage}>
            {index + 1}
          </PageNumber>
        ))}
      // </Pagination> 
    </Container>
  );
};

//Styling using styled components............ 

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const PageNumber = styled.div`
  cursor: pointer;
  padding: 5px 10px;
  margin: 0 5px;
  border: 1px solid #ccc;
  background-color: ${(props) => (props.active ? '#007bff' : 'transparent')};
  color: ${(props) => (props.active ? 'white' : '#007bff')};
  border-radius: 5px;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`;




const Title = styled.h2`
  display: inline;
  color: #ff9900;
  margin-right: 5px;
`;

const Container = styled.div`
background: #f5f5f7;
  padding: 20px;
  text-align: center;

`;

const ProductGrid = styled.div`
display: grid;
gap: 20px;
max-width: 100%;
margin: 0 auto;

@media (min-width: 768px) {
  grid-template-columns: repeat(2, 1fr);
}

@media (min-width: 1200px) {
  grid-template-columns: repeat(3, 1fr);
}
`;



const SelectCategory = styled.select`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #333;

  /* Additional styles for the select element */
`;

const Option = styled.option`
  background-color: #fff;
  color: #333;
  font-size: 16px;
`;
 const Button=styled.button`
 background:#1976D2;
 color:white;
 padding:5px 5px;
 margin:5px;
 `
 

export default ProductList;
