import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import RatingIntegration from "../../Common/RatingIntegration";
import { useGetProductDataQuery } from "../../../Redux/Slices/ProductApi";
export default function ProductFeatured() {
  const { data: productFeatured } = useGetProductDataQuery();
  return (
    <div className="container-fluid pt-5 pb-3">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Featured Products</span>
      </h2>
      <div className="row px-xl-5">
        {productFeatured?.products?.slice(0, 8).map((data, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={index}>
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img className="img-fluid w-100" src={data.product_images[0]} alt="" style={{height:"510px"}}/>
                <div className="product-action">
                  <Link
                    to={"/wishlist"}
                    className="btn btn-outline-dark btn-square"
                  >
                    <i className="far fa-heart" />
                  </Link>

                  <Link
                    to={`/shop/${data.product_id}`}
                    className="btn btn-outline-dark btn-square"
                  >
                    <i className="fa fa-search" />
                  </Link>
                </div>
              </div>
              <div className="text-center py-4">
                <Link
                  className="h6 text-decoration-none text-truncate"
                  href=""
                  data-toggle="tooltip"
                  data-placement="top"
                  title={data.product_name}
                >
                  {data.product_name}
                </Link>

                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>{data.discount_type === "fixed" ? (data.price-data.discount_value) : (data.price- (data.price * data.discount_value)/100)} </h5>
                  <h6 className="text-muted ml-2">
                    <del>${data.price}</del>
                  </h6>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <RatingIntegration star={data.Rating_Count} />
                  <small>({data.totalReviews})</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
