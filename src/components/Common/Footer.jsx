import React from "react";
import { newsLetterSchema } from "../validations/newsLetterSchema";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import {
  useGetSettingDataQuery,
  usePostNewsLetterDataMutation,
} from "../../Redux/Slices/GeneralSettingsApi";

export default function Footer() {
const initialValues = {
    email: "",
  };

  const [postNewsLetterData] = usePostNewsLetterDataMutation();
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: newsLetterSchema,
      validateOnChange: true,
      validateOnBlur: false,

      onSubmit: async (values, action) => {
        let res = await postNewsLetterData(values);
        action.resetForm();
        if (res?.data?.success === true) {
          toast.success("Subscribed Successfully!");
        } else {
          toast.error("Already Subscribed!");
        }
      },
    });

  const { data: settingData } = useGetSettingDataQuery();
  return (
    <div>
      <div className="container-fluid bg-dark text-secondary mt-4 pt-5">
        <div className="row px-xl-5 pt-5">
          <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
            <h5 className="text-secondary text-uppercase mb-4">Get In Touch</h5>
            <p className="mb-4">
              No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et
              et dolor sed dolor. Rebum tempor no vero est magna amet no
            </p>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt text-primary mr-3" />
              123 Street, New York, USA
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope text-primary mr-3" />
              info@example.com
            </p>
            <p className="mb-0">
              <i className="fa fa-phone-alt text-primary mr-3" />
              +012 345 67890
            </p>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="row">
              <div className="col-md-4 mb-5">
                <h5 className="text-secondary text-uppercase mb-4">
                  Quick Shop
                </h5>
                <div className="d-flex flex-column justify-content-start">
                  <Link className="text-secondary mb-2" to="#">
                    <i className="fa fa-angle-right mr-2" />
                    Home
                  </Link>
                  <Link className="text-secondary mb-2" to="#">
                    <i className="fa fa-angle-right mr-2" />
                    Our Shop
                  </Link>
                  <Link className="text-secondary mb-2" to="#">
                    <i className="fa fa-angle-right mr-2" />
                    Shopping Cart
                  </Link>
                  <Link className="text-secondary mb-2" to="/faqs">
                    <i className="fa fa-angle-right mr-2" />
                    FAQs
                  </Link>
                  <Link className="text-secondary" to="/about">
                    <i className="fa fa-angle-right mr-2" />
                    About Us
                  </Link>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <h5 className="text-secondary text-uppercase mb-4">
                  My Account
                </h5>
                <div className="d-flex flex-column justify-content-start">
                  <Link className="text-secondary mb-2" to="/account">
                    <i className="fa fa-angle-right mr-2" />
                    My Profile
                  </Link>
                  <Link className="text-secondary mb-2" to="/change-password">
                    <i className="fa fa-angle-right mr-2" />
                    Change Password
                  </Link>
                  <Link className="text-secondary mb-2" to="/my-order">
                    <i className="fa fa-angle-right mr-2" />
                    My Orders
                  </Link>
                  <Link className="text-secondary mb-2" to="/help">
                    <i className="fa fa-angle-right mr-2" />
                    Help
                  </Link>
                  <Link className="text-secondary" to="/contact">
                    <i className="fa fa-angle-right mr-2" />
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <h5 className="text-secondary text-uppercase mb-4">
                  Newsletter
                </h5>
                <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
                <form action="">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Email Address"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <p className="form-error text-danger">{errors.email}</p>
                    ) : null}
                    <div className="input-group-append">
                      <button
                        onClick={handleSubmit}
                        className="btn btn-primary"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
                <h6 className="text-secondary text-uppercase mt-4 mb-3">
                  Follow Us
                </h6>
                {settingData &&
                  settingData?.footer?.map((data, index) => (
                    <div className="d-flex" key={index}>
                      <Link
                        className="btn btn-primary btn-square mr-2"
                        to={data.twitter}
                      >
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link
                        className="btn btn-primary btn-square mr-2"
                        to={data.facebook}
                      >
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link
                        className="btn btn-primary btn-square mr-2"
                        to={data.linkedIn}
                      >
                        <i className="fab fa-linkedin-in" />
                      </Link>
                      <Link
                        className="btn btn-primary btn-square"
                        to={data.instagram}
                      >
                        <i className="fab fa-instagram" />
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className="row border-top mx-xl-5 py-4"
          style={{ borderColor: "rgba(256, 256, 256, .1) !important" }}
        >
          <div className="col-md-6 px-xl-0">
            <p className="mb-md-0 text-center text-md-left text-secondary">
              ©{" "}
              <Link className="text-primary" to="#">
                Domain
              </Link>
              . All Rights Reserved. Designed by{" "}
              <Link className="text-primary" to="https://htmlcodex.com">
                HTML Codex
              </Link>
            </p>
          </div>
          <div className="col-md-6 px-xl-0 text-center text-md-right">
            <img className="img-fluid" src="img/payments.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
