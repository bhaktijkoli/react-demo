import clsx from "clsx";
import * as React from "react";
import PRODUCTS from "../data/products.json";
import useFilter from "../hooks/useFilter";

const Products: React.FC = () => {
  const { categories, sizes, minPrice, maxPrice, search } = useFilter().get();
  const products = PRODUCTS.filter((product) =>
    categories.length > 0 ? categories.includes(product.category) : true
  )
    .filter((product) =>
      sizes.length > 0 ? sizes.includes(product.size) : true
    )
    .filter((product) => product.price >= minPrice && product.price <= maxPrice)
    .filter(
      (product) =>
        product.company.includes(search) || product.name.includes(search)
    );
  return (
    <React.Fragment>
      <div className="container">
        <div className="products">
          {products.map((product, key) => {
            const highlight = product.highlight;
            return (
              <div className="product" key={key}>
                <div className={clsx({ "product-heading": true, highlight })}>
                  <h4 className="product-company">{product.company}</h4>
                  <h3 className="product-name">{product.name}</h3>
                </div>
                <div className="product-image">
                  <img src={product.images[0]} alt={`${product.name} 1`} />
                </div>
                <div className="product-details">
                  <div className="price-details">
                    <div className="label">Price</div>
                    <div className="value">&#36;{product.price}</div>
                  </div>
                  <div className="product-images">
                    <img src={product.images[1]} alt={`${product.name} 2`} />
                    <img src={product.images[2]} alt={`${product.name} 3`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Products;
