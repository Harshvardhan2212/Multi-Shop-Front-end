import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RatingIntegration from "../../Common/RatingIntegration";
import { useGetProductDataByIdQuery } from "../../../Redux/Slices/ProductApi";
export default function ShopProductById() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const { data: productDetail } = useGetProductDataByIdQuery(id);
  return (
    <div className="container-fluid pb-5">
      {productDetail?.products?.map((data, index) => (
        <div className="row px-xl-5">
          <div className="col-lg-5 mb-30">
            <div
              id="product-carousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <div
                className="carousel-inner bg-light"
                style={{ height: "700px" }}
              >
                {data?.product_images?.map((url, index) => (
                  <div
                    className={
                      index === 0 ? "carousel-item active" : "carousel-item"
                    }
                  >
                    <img
                      className="w-100 "
                      src={url}
                      alt="Image"
                      style={{ height: "800px" }}
                    />
                  </div>
                ))}
              </div>
              <a
                className="carousel-control-prev"
                href="#product-carousel"
                data-slide="prev"
              >
                <i className="fa fa-2x fa-angle-left text-dark" />
              </a>
              <a
                className="carousel-control-next"
                href="#product-carousel"
                data-slide="next"
              >
                <i className="fa fa-2x fa-angle-right text-dark" />
              </a>
            </div>
          </div>
          <div className="col-lg-7 h-auto mb-30">
            <div className="h-100 bg-light p-30">
              <h3>{data.product_name}</h3>
              <div className="d-flex mb-3">
                <div className="text-primary mr-2">
                  <RatingIntegration star={data.Rating_Count} />
                </div>
                <small className="pt-1">({data?.totalReviews} Reviews)</small>
              </div>
              <h3 className="font-weight-semi-bold mb-4">
                $
                {data.discount_type === "fixed"
                  ? data.price - data.discount_value
                  : data.price - (data.price * data.discount_value) / 100}
              </h3>
              <p className="mb-4">{data.short_desc}</p>
              <div className="d-flex mb-3">
                <strong className="text-dark mr-3">Sizes:</strong>
                <form>
                  {data?.sizes?.map((size, index) => (
                    <div
                      className="custom-control custom-radio custom-control-inline"
                      key={index}
                    >
                      <input
                        type="radio"
                        className="custom-control-input"
                        id={size}
                        name="size"
                      />
                      <label className="custom-control-label" htmlFor={size}>
                        {size}
                      </label>
                    </div>
                  ))}
                </form>
              </div>
              <div className="d-flex mb-4">
                <strong className="text-dark mr-3">Colors:</strong>
                <form>
                  {data?.colors?.map((color, index) => (
                    <div
                      className="custom-control custom-radio custom-control-inline"
                      key={index}
                    >
                      <input
                        type="radio"
                        className="custom-control-input"
                        id={color}
                        name="color"
                      />
                      <label className="custom-control-label" htmlFor={color}>
                        {color}
                      </label>
                    </div>
                  ))}
                </form>
              </div>
              <div className="d-flex align-items-center mb-4 pt-2">
                <div
                  className="input-group quantity mr-3"
                  style={{ width: 130 }}
                >
                  <div className="input-group-btn">
                    <button className="btn btn-primary btn-minus">
                      <i className="fa fa-minus" />
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control bg-secondary border-0 text-center"
                    defaultValue={1}
                  />
                  <div className="input-group-btn">
                    <button className="btn btn-primary btn-plus">
                      <i className="fa fa-plus" />
                    </button>
                  </div>
                </div>
                <button className="btn btn-primary px-3">
                  <i className="fa fa-shopping-cart mr-1" /> Add To Cart
                </button>
              </div>
              <div className="d-flex pt-2">
                <strong className="text-dark mr-2">Share on:</strong>
                <div className="d-inline-flex">
                  <a className="text-dark px-2" href="">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="text-dark px-2" href="">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="text-dark px-2" href="">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a className="text-dark px-2" href="">
                    <i className="fab fa-pinterest" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* <div className="row px-xl-5">
        <div className="col">
          <div className="bg-light p-30">
            <div className="nav nav-tabs mb-4">
              <Link
                className="nav-item nav-link text-dark active"
                data-toggle="tab"
                to="#tab-pane-1"
              >
                Description
              </Link>
              <Link
                className="nav-item nav-link text-dark"
                data-toggle="tab"
                to="#tab-pane-2"
              >
                Information
              </Link>
              <Link
                className="nav-item nav-link text-dark"
                data-toggle="tab"
                to="#tab-pane-3"
              >
                Reviews (0)
              </Link>
            </div>
            <div className="tab-content">
              <div className="tab-pane fade show active" id="tab-pane-1">
                <h4 className="mb-3">Product Description</h4>
                <p>
                  Eos no lorem eirmod diam diam, eos elitr et gubergren diam
                  sea. Consetetur vero aliquyam invidunt duo dolores et duo sit.
                  Vero diam ea vero et dolore rebum, dolor rebum eirmod
                  consetetur invidunt sed sed et, lorem duo et eos elitr,
                  sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed
                  tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing,
                  eos dolores sit no ut diam consetetur duo justo est, sit
                  sanctus diam tempor aliquyam eirmod nonumy rebum dolor
                  accusam, ipsum kasd eos consetetur at sit rebum, diam kasd
                  invidunt tempor lorem, ipsum lorem elitr sanctus eirmod
                  takimata dolor ea invidunt.
                </p>
                <p>
                  Dolore magna est eirmod sanctus dolor, amet diam et eirmod et
                  ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem
                  tempor. Gubergren amet amet labore sadipscing clita clita diam
                  clita. Sea amet et sed ipsum lorem elitr et, amet et labore
                  voluptua sit rebum. Ea erat sed et diam takimata sed justo.
                  Magna takimata justo et amet magna et.
                </p>
              </div>
              <div className="tab-pane fade" id="tab-pane-2">
                <h4 className="mb-3">Additional Information</h4>
                <p>
                  Eos no lorem eirmod diam diam, eos elitr et gubergren diam
                  sea. Consetetur vero aliquyam invidunt duo dolores et duo sit.
                  Vero diam ea vero et dolore rebum, dolor rebum eirmod
                  consetetur invidunt sed sed et, lorem duo et eos elitr,
                  sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed
                  tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing,
                  eos dolores sit no ut diam consetetur duo justo est, sit
                  sanctus diam tempor aliquyam eirmod nonumy rebum dolor
                  accusam, ipsum kasd eos consetetur at sit rebum, diam kasd
                  invidunt tempor lorem, ipsum lorem elitr sanctus eirmod
                  takimata dolor ea invidunt.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item px-0">
                        Sit erat duo lorem duo ea consetetur, et eirmod
                        takimata.
                      </li>
                      <li className="list-group-item px-0">
                        Amet kasd gubergren sit sanctus et lorem eos sadipscing
                        at.
                      </li>
                      <li className="list-group-item px-0">
                        Duo amet accusam eirmod nonumy stet et et stet eirmod.
                      </li>
                      <li className="list-group-item px-0">
                        Takimata ea clita labore amet ipsum erat justo voluptua.
                        Nonumy.
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item px-0">
                        Sit erat duo lorem duo ea consetetur, et eirmod
                        takimata.
                      </li>
                      <li className="list-group-item px-0">
                        Amet kasd gubergren sit sanctus et lorem eos sadipscing
                        at.
                      </li>
                      <li className="list-group-item px-0">
                        Duo amet accusam eirmod nonumy stet et et stet eirmod.
                      </li>
                      <li className="list-group-item px-0">
                        Takimata ea clita labore amet ipsum erat justo voluptua.
                        Nonumy.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab-pane-3">
                <div className="row">
                  <div className="col-md-6">
                    <h4 className="mb-4">1 review for "Product Name"</h4>
                    <div className="media mb-4">
                      <img
                        src="img/user.jpg"
                        alt="Image"
                        className="img-fluid mr-3 mt-1"
                        style={{ width: 45 }}
                      />
                      <div className="media-body">
                        <h6>
                          John Doe
                          <small>
                            {" "}
                            - <i>01 Jan 2045</i>
                          </small>
                        </h6>
                        <div className="text-primary mb-2">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star-half-alt" />
                          <i className="far fa-star" />
                        </div>
                        <p>
                          Diam amet duo labore stet elitr ea clita ipsum, tempor
                          labore accusam ipsum et no at. Kasd diam tempor rebum
                          magna dolores sed sed eirmod ipsum.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h4 className="mb-4">Leave a review</h4>
                    <small>
                      Your email address will not be published. Required fields
                      are marked *
                    </small>
                    <div className="d-flex my-3">
                      <p className="mb-0 mr-2">Your Rating * :</p>
                      <div className="text-primary">
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                      </div>
                    </div>
                    <form>
                      <div className="form-group">
                        <label htmlFor="message">Your Review *</label>
                        <textarea
                          id="message"
                          cols={30}
                          rows={5}
                          className="form-control"
                          defaultValue={""}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="name">Your Name *</label>
                        <input type="text" className="form-control" id="name" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Your Email *</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                        />
                      </div>
                      <div className="form-group mb-0">
                        <input
                          type="submit"
                          defaultValue="Leave Your Review"
                          className="btn btn-primary px-3"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>

    // <div className="container-fluid pb-5">
    //   <div className="row px-xl-5   position-static">
    //     <div className="col-lg-5 mb-30">
    //       <div
    //         id="product-carousel"
    //         className="carousel slide"
    //         data-ride="carousel"
    //       >
    //         <div className="carousel-inner bg-light">
    //           {productDetail?.url?.map((url, index) => (
    //             <div
    //               key={index}
    //               className={
    //                 index === 0 ? "carousel-item active" : "carousel-item"
    //               }
    //             >
    //               <img className="w-100 h-100" src={url} alt="Image" />
    //             </div>
    //           ))}
    //         </div>
    //         <a
    //           className="carousel-control-prev"
    //           href="#product-carousel"
    //           data-slide="prev"
    //         >
    //           <i className="fa fa-2x fa-angle-left text-dark" />
    //         </a>
    //         <a
    //           className="carousel-control-next"
    //           href="#product-carousel"
    //           data-slide="next"
    //         >
    //           <i className="fa fa-2x fa-angle-right text-dark" />
    //         </a>
    //       </div>
    //     </div>
    //     <div className="col-lg-7 h-auto mb-30">
    //       <div className="h-100 bg-light p-30">
    //         <h3>{productDetail?.title}</h3>
    //         <div className="d-flex mb-3">
    //           <div className="text-primary mr-2">
    //             <RatingIntegration star={productDetail?.rating} />
    //             {/* <small className="fas fa-star" />
    //             <small className="fas fa-star" />
    //             <small className="fas fa-star" />
    //             <small className="fas fa-star-half-alt" />
    //             <small className="far fa-star" /> */}
    //           </div>
    //           <small className="pt-1">
    //             ({productDetail.noOfRating} Reviews)
    //           </small>
    //         </div>
    //         <h3 className="font-weight-semi-bold mb-4">
    //           ${productDetail.specialPrice}
    //         </h3>
    //         <p className="mb-4">{productDetail.detail}</p>
    //         <div className="d-flex mb-3">
    //           <strong className="text-dark mr-3">Sizes:</strong>
    //           <form>
    //             {productDetail?.size?.map((data, index) => (
    //               <div
    //                 className="custom-control custom-radio custom-control-inline"
    //                 key={index}
    //               >
    //                 <input
    //                   type="radio"
    //                   className="custom-control-input"
    //                   id={data}
    //                   name="size"
    //                 />
    //                 <label className="custom-control-label" htmlFor={data}>
    //                   {data}
    //                 </label>
    //               </div>
    //             ))}
    //           </form>
    //         </div>
    //         <div className="d-flex mb-4">
    //           <strong className="text-dark mr-3">Colors:</strong>
    //           <form>
    //             {productDetail?.color?.map((data, index) => (
    //               <div
    //                 className="custom-control custom-radio custom-control-inline"
    //                 key={index}
    //               >
    //                 <input
    //                   type="radio"
    //                   className="custom-control-input"
    //                   id={data}
    //                   name="color"
    //                 />
    //                 <label className="custom-control-label" htmlFor={data}>
    //                   {data}
    //                 </label>
    //               </div>
    //             ))}
    //           </form>
    //         </div>
    //         <div className="d-flex align-items-center mb-4 pt-2">
    //           <div className="input-group quantity mr-3" style={{ width: 130 }}>
    //             <div className="input-group-btn">
    //               <button
    //                 className="btn btn-primary btn-minus"
    //                 style={{ zIndex: "1" }}
    //               >
    //                 <i className="fa fa-minus" />
    //               </button>
    //             </div>
    //             <input
    //               type="text"
    //               className="form-control bg-secondary border-0 text-center"
    //               defaultValue={0}
    //             />
    //             <div className="input-group-btn">
    //               <button className="btn btn-primary btn-plus">
    //                 <i className="fa fa-plus" />
    //               </button>
    //             </div>
    //           </div>
    //           <button className="btn btn-primary px-3">
    //             <i className="fa fa-shopping-cart mr-1" /> Add To Cart
    //           </button>
    //         </div>
    //         <div className="d-flex pt-2">
    //           <strong className="text-dark mr-2">Share on:</strong>
    //           <div className="d-inline-flex">
    //             <a className="text-dark px-2" href="">
    //               <i className="fab fa-facebook-f" />
    //             </a>
    //             <a className="text-dark px-2" href="">
    //               <i className="fab fa-twitter" />
    //             </a>
    //             <a className="text-dark px-2" href="">
    //               <i className="fab fa-linkedin-in" />
    //             </a>
    //             <a className="text-dark px-2" href="">
    //               <i className="fab fa-pinterest" />
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="row px-xl-5">
    //     <div className="col">
    //       <div className="bg-light p-30">
    //         <div className="nav nav-tabs mb-4">
    //           <a
    //             className="nav-item nav-link text-dark active"
    //             data-toggle="tab"
    //             href="#tab-pane-1"
    //           >
    //             Description
    //           </a>
    //           <a
    //             className="nav-item nav-link text-dark"
    //             data-toggle="tab"
    //             href="#tab-pane-2"
    //           >
    //             Information
    //           </a>
    //           <a
    //             className="nav-item nav-link text-dark"
    //             data-toggle="tab"
    //             href="#tab-pane-3"
    //           >
    //             Reviews (0)
    //           </a>
    //         </div>
    //         <div className="tab-content">
    //           <div className="tab-pane fade show active" id="tab-pane-1">
    //             <h4 className="mb-3">Product Description</h4>
    //             <p>
    //               Eos no lorem eirmod diam diam, eos elitr et gubergren diam
    //               sea. Consetetur vero aliquyam invidunt duo dolores et duo sit.
    //               Vero diam ea vero et dolore rebum, dolor rebum eirmod
    //               consetetur invidunt sed sed et, lorem duo et eos elitr,
    //               sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed
    //               tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing,
    //               eos dolores sit no ut diam consetetur duo justo est, sit
    //               sanctus diam tempor aliquyam eirmod nonumy rebum dolor
    //               accusam, ipsum kasd eos consetetur at sit rebum, diam kasd
    //               invidunt tempor lorem, ipsum lorem elitr sanctus eirmod
    //               takimata dolor ea invidunt.
    //             </p>
    //             <p>
    //               Dolore magna est eirmod sanctus dolor, amet diam et eirmod et
    //               ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem
    //               tempor. Gubergren amet amet labore sadipscing clita clita diam
    //               clita. Sea amet et sed ipsum lorem elitr et, amet et labore
    //               voluptua sit rebum. Ea erat sed et diam takimata sed justo.
    //               Magna takimata justo et amet magna et.
    //             </p>
    //           </div>
    //           <div className="tab-pane fade" id="tab-pane-2">
    //             <h4 className="mb-3">Additional Information</h4>
    //             <p>
    //               Eos no lorem eirmod diam diam, eos elitr et gubergren diam
    //               sea. Consetetur vero aliquyam invidunt duo dolores et duo sit.
    //               Vero diam ea vero et dolore rebum, dolor rebum eirmod
    //               consetetur invidunt sed sed et, lorem duo et eos elitr,
    //               sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed
    //               tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing,
    //               eos dolores sit no ut diam consetetur duo justo est, sit
    //               sanctus diam tempor aliquyam eirmod nonumy rebum dolor
    //               accusam, ipsum kasd eos consetetur at sit rebum, diam kasd
    //               invidunt tempor lorem, ipsum lorem elitr sanctus eirmod
    //               takimata dolor ea invidunt.
    //             </p>
    //             <div className="row">
    //               <div className="col-md-6">
    //                 <ul className="list-group list-group-flush">
    //                   <li className="list-group-item px-0">
    //                     Sit erat duo lorem duo ea consetetur, et eirmod
    //                     takimata.
    //                   </li>
    //                   <li className="list-group-item px-0">
    //                     Amet kasd gubergren sit sanctus et lorem eos sadipscing
    //                     at.
    //                   </li>
    //                   <li className="list-group-item px-0">
    //                     Duo amet accusam eirmod nonumy stet et et stet eirmod.
    //                   </li>
    //                   <li className="list-group-item px-0">
    //                     Takimata ea clita labore amet ipsum erat justo voluptua.
    //                     Nonumy.
    //                   </li>
    //                 </ul>
    //               </div>
    //               <div className="col-md-6">
    //                 <ul className="list-group list-group-flush">
    //                   <li className="list-group-item px-0">
    //                     Sit erat duo lorem duo ea consetetur, et eirmod
    //                     takimata.
    //                   </li>
    //                   <li className="list-group-item px-0">
    //                     Amet kasd gubergren sit sanctus et lorem eos sadipscing
    //                     at.
    //                   </li>
    //                   <li className="list-group-item px-0">
    //                     Duo amet accusam eirmod nonumy stet et et stet eirmod.
    //                   </li>
    //                   <li className="list-group-item px-0">
    //                     Takimata ea clita labore amet ipsum erat justo voluptua.
    //                     Nonumy.
    //                   </li>
    //                 </ul>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="tab-pane fade" id="tab-pane-3">
    //             <div className="row">
    //               <div className="col-md-6">
    //                 <h4 className="mb-4">1 review for "Product Name"</h4>
    //                 <div className="media mb-4">
    //                   <img
    //                     src={avatar}
    //                     alt="Image"
    //                     className="img-fluid mr-3 mt-1"
    //                     style={{ width: 45 }}
    //                   />
    //                   <div className="media-body">
    //                     <h6>
    //                       John Doe
    //                       <small>
    //                         {" "}
    //                         - <i>01 Jan 2045</i>
    //                       </small>
    //                     </h6>
    //                     <div className="text-primary mb-2">
    //                       <i className="fas fa-star" />
    //                       <i className="fas fa-star" />
    //                       <i className="fas fa-star" />
    //                       <i className="fas fa-star-half-alt" />
    //                       <i className="far fa-star" />
    //                     </div>
    //                     <p>
    //                       Diam amet duo labore stet elitr ea clita ipsum, tempor
    //                       labore accusam ipsum et no at. Kasd diam tempor rebum
    //                       magna dolores sed sed eirmod ipsum.
    //                     </p>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="col-md-6">
    //                 <h4 className="mb-4">Leave a review</h4>
    //                 <small>
    //                   Your email address will not be published. Required fields
    //                   are marked *
    //                 </small>
    //                 <div className="d-flex my-3">
    //                   <p className="mb-0 mr-2">Your Rating * :</p>
    //                   <div className="text-primary">
    //                     <i className="far fa-star" />
    //                     <i className="far fa-star" />
    //                     <i className="far fa-star" />
    //                     <i className="far fa-star" />
    //                     <i className="far fa-star" />
    //                   </div>
    //                 </div>
    //                 <form>
    //                   <div className="form-group">
    //                     <label htmlFor="message">Your Review *</label>
    //                     <textarea
    //                       id="message"
    //                       cols={30}
    //                       rows={5}
    //                       className="form-control"
    //                       defaultValue={""}
    //                     />
    //                   </div>
    //                   <div className="form-group mb-0">
    //                     <input
    //                       type="submit"
    //                       defaultValue="Leave Your Review"
    //                       className="btn btn-primary px-3"
    //                     />
    //                   </div>
    //                 </form>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
