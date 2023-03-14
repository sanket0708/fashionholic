import React from "react";

import styled from "styled-components";

import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "80px" }}>
        <h1>DEALS YOU DON'T WANT TO MISS</h1>
      </div>
      <Container>
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Container>
    </div>
  );
};

export default Products;
