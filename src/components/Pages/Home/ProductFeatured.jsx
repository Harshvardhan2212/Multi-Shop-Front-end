import React, { useEffect, useState } from "react";
import product1 from "../../../assets/img/product-1.jpg";
import product2 from "../../../assets/img/product-2.jpg";
import product3 from "../../../assets/img/product-3.jpg";
import product4 from "../../../assets/img/product-4.jpg";
import product5 from "../../../assets/img/product-5.jpg";
import product6 from "../../../assets/img/product-6.jpg";
import product7 from "../../../assets/img/product-7.jpg";
import product8 from "../../../assets/img/product-8.jpg";
import axios from "axios";
import { Link } from "react-router-dom";
export default function ProductFeatured() {
  const [productFeatured, setProductFeatured] = useState([]);
  useEffect(() => {
    async function collectData() {
     await axios
        .get("./JSON/product.json")
        .then((response) => setProductFeatured(response.data.product))
        .catch((error) => console.log(error));
    }
    collectData();
  }, []);
  return (
    <div className="container-fluid pt-5 pb-3">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Featured Products</span>
      </h2>
      <div className="row px-xl-5">
        {productFeatured.slice(0, 8).map((data, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={index}>
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img className="img-fluid w-100" src={data.url[0]} alt="" />
                <div className="product-action">
                  <Link to={"/wishlist"}>
                    <a className="btn btn-outline-dark btn-square" href="">
                      <i className="far fa-heart" />
                    </a>
                  </Link>
                  <Link to={`/shop/${data.id}`}>
                    <a className="btn btn-outline-dark btn-square" href="">
                      <i className="fa fa-search" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="text-center py-4">
                <a className="h6 text-decoration-none text-truncate" href="">
                 {data.title}
                </a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>${data.price}</h5>
                  <h6 className="text-muted ml-2">
                    <del>${data.specialPrice}</del>
                  </h6>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small>({data.noOfRating})</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
