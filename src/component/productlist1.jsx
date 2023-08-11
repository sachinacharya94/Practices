import React from "react";
import ProductList from "../Constant/product";

const ProductListAll = () => {
  return (
    <div className="container pt-3">
      <h5>All Products</h5>
      <div className="row">
        {ProductList.map((item) => {
          return (
            <div key={item.id} className="col-6 col-md-4 col-lg-3">
              <div className="shadow shadow-sm m-3 p-3">
                <div>
                  <img
                    src={`https://images.bewakoof.com/t640/${item.display_image}`}
                    alt={item.name}
                    className="img-fluid"
                  />
                </div>
                <div>
                  <div>
                    <h5>{item.name}</h5>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>Price : {item.mrp}</div>
                    <div>Offer: {item.offer}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductListAll;
