import React from "react";
import Booklists from "../Constant/booklist";

const BookList12 = () => {
  console.log(Booklists, "yy");
  return (
    <div className="conatainer pt-3">
      <h5>All Booklist</h5>
      <div className="row">
        {Booklists.map((item) => {
          console.log("img", item.images);
          return (
            <div key={item.id} className="col-6 col-md-4 col-lg-4">
              <div className="shodow shadow-sm m-3 p-3">
                <div>
                  <img
                    src={item.images[0].url}
                    alt={item.name}
                    className="img-fluid"
                  />
                </div>
                <div>
                  <h5>{item.name}</h5>
                  <p>by{item.authors[0].name}</p>
                  <h4>Rs.{item.sales_price}</h4>
                </div>
                <div>
                  <button type="button" class="btn btn-outline-primary">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookList12;
