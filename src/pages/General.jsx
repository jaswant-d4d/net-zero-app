import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import SuccessImg from "../assets/images/Group 9106.png";
import { useNavigate } from "react-router-dom";
import generalImg from '../assets/images/user.svg'

const validate = (values) => {
  const errors = {};
  if (!values.first_name?.trim()) {
    errors.first_name = "First Name field is required";
  }

  if (!values.last_name?.trim()) {
    errors.last_name = "Last Name field is required";
  }

  if (!values.email?.trim()) {
    errors.email = "Email Address field is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password?.trim()) {
    errors.password = "Password field is required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be atleast 6 characters";
  }

  if (!values.cpassword?.trim()) {
    errors.cpassword = "Confirm Password field is required";
  } else if (values.password !== values.cpassword) {
    errors.cpassword = "Confirm Password not matched";
  }

  return errors;
};

const General = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, userInfo, error } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      cpassword: "",
      role: "2",
    },

    validate,

    onSubmit: async (values) => {
      if (
        !values.first_name ||
        !values.last_name ||
        !values.email ||
        !values.password ||
        !values.cpassword
      ) {
        return false;
      }
      try {
        // const response = await dispatch(userSignup(values));
        // if (!response?.payload?.error && response?.payload?.data) {
        //     Swal.fire({
        //         title: "Success!",
        //         text: "User login successfully",
        //         imageUrl: SuccessImg,
        //         imageWidth: 100,
        //         imageHeight: 100,
        //         showCancelButton: false,
        //         confirmButtonColor: "#3085d6",
        //         cancelButtonColor: "#d33",
        //     }).then((result) => {
        //         if (result.isConfirmed) {
        //             navigate("/")
        //         }
        //     });
        // } else {
        //     const errorMsg = response?.payload?.response?.data?.errorMsg;
        //     if (errorMsg) {
        //         const errorMessages = Object.values(errorMsg).flatMap(messages => messages);
        //         if (errorMessages.length > 0) {
        //             const errorMessage = errorMessages.join("\n");
        //             Swal.fire({
        //                 title: "Failed!",
        //                 html: errorMessage,
        //                 icon: "error",
        //                 showCancelButton: false,
        //                 confirmButtonColor: "#3085d6",
        //                 cancelButtonColor: "#d33",
        //             });
        //         }
        //     }
        // }
      } catch (error) {
        Swal.fire({
          title: "Failed!",
          text: "Please check credentials",
          icon: "error",
          showCancelButton: false,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
        });
      }
    },
  });

  return (
    <>

<section class="information mt-80 mb-80">
    <div class="container">
        <div class="row">
            <div class="information-header">
                <div class="col">
                    <div class="information-icon-box">
                        <div class="information-cricle-box">
                            <img src={generalImg} alt="" />
                        </div>
                         <p>General Information</p>
                    </div>
                </div>
                <div class="col">
                    <div class="information-icon-box">
                        <div class="information-cricle-box">
                            <img src={generalImg} alt="" />
                        </div>
                         <p>General Information</p>
                    </div>
                </div>
                <div class="col">
                    <div class="information-icon-box">
                        <div class="information-cricle-box">
                            <img src={generalImg} alt="" />
                        </div>
                         <p>General Information</p>
                    </div>
                </div>
                <div class="col">
                    <div class="information-icon-box">
                        <div class="information-cricle-box">
                            <img src={generalImg} alt="" />
                        </div>
                         <p>General Information</p>
                    </div>
                </div>
                <div class="col">
                    <div class="information-icon-box">
                        <div class="information-cricle-box">
                            <img src={generalImg} alt="" />
                        </div>
                         <p>General Information</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


      <section className="general-form mt-80 mb-80">
        <div className="container ">
            <h1>General information</h1>
          <div className="bg-lightgray-color pt-70 pb-70 ">
            <div className="row">
              <div className="col-lg-12">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="card card-par">
                  <p> Fields marked with an * are required</p>
                    <div className="form ">
                      <form onSubmit={formik.handleSubmit}>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-div">
                              <label htmlFor="first_name">Name*</label>
                              <input
                                type="text"
                                name="first_name"
                                id="first_name"
                                className={`form-control ${
                                  formik.errors.first_name ? "invalidInput" : ""
                                } `}
                                placeholder="First Name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.first_name}
                              />
                              {formik.errors.first_name ? (
                                <span className="input-error-msg">
                                  {formik.errors.first_name}
                                </span>
                              ) : null}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-div">
                              <label htmlFor="first_name" className="last-name">Last name
                              </label>
                              <input
                                type="text"
                                name="last_name"
                                id="last_name"
                                className={`form-control ${
                                  formik.errors.last_name ? "invalidInput" : ""
                                } `}
                                placeholder="Last Name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.last_name}
                              />
                              {formik.errors.last_name ? (
                                <span className="input-error-msg">
                                  {formik.errors.last_name}
                                </span>
                              ) : null}
                            </div>
                          </div>
                        </div>
                        <div className="form-div">
                          <label htmlFor="email">Email*</label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className={`form-control ${
                              formik.errors.email ? "invalidInput" : ""
                            } `}
                            placeholder=""
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                          />
                          {formik.errors.email ? (
                            <span className="input-error-msg">
                              {formik.errors.email}
                            </span>
                          ) : null}
                        </div>
                        <div className="form-div">
                          <label htmlFor="emailConfirmation">
                            Email Confirmation*
                          </label>
                          <input
                            type="text"
                            name="emailConfirmation"
                            id="emailConfirmation"
                            className={`form-control ${
                              formik.errors.emailConfirmation
                                ? "invalidInput"
                                : ""
                            } `}
                            placeholder="Email Confirmation"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.emailConfirmation}
                          />
                          {formik.errors.emailConfirmation ? (
                            <span className="input-error-msg">
                              {formik.errors.emailConfirmation}
                            </span>
                          ) : null}
                        </div>
                        <div className="form-div">
                          <label htmlFor="year">Year*</label>
                          <input
                            type="text"
                            name="year"
                            id="year"
                            className={`form-control ${
                              formik.errors.year ? "invalidInput" : ""
                            } `}
                            placeholder="Please enter the calendar year you would like to input information for"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.year}
                          />
                          {formik.errors.year ? (
                            <span className="input-error-msg">
                              {formik.errors.year}
                            </span>
                          ) : null}
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-div">
                              <label htmlFor="primaryAddress">
                                Country of primary residence*
                              </label>
                              <select
                                name="primaryAddress"
                                id="primaryAddress"
                                className={`form-control ${
                                  formik.errors.primaryAddress
                                    ? "invalidInput"
                                    : ""
                                } `}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.primaryAddress}
                              >
                                <option value="">United Kingdom</option>
                                <option value="America">America</option>
                              </select>
                              {formik.errors.primaryAddress ? (
                                <span className="input-error-msg">
                                  {formik.errors.primaryAddress}
                                </span>
                              ) : null}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-div">
                              <label htmlFor="homeCount">
                                How many homes do you own?*
                              </label>
                              <select
                                name="homeCount"
                                id="homeCount"
                                className={`form-control ${
                                  formik.errors.homeCount ? "invalidInput" : ""
                                } `}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.homeCount}
                              >
                                <option value="">1</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                              </select>
                              {formik.errors.year ? (
                                <span className="input-error-msg">
                                  {formik.errors.year}
                                </span>
                              ) : null}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-div">
                              <label htmlFor="liveWithPartner">
                                Second home country*
                              </label>
                              <input
                                type="text"
                                name="liveWithPartner"
                                id="liveWithPartner"
                                className={`form-control ${
                                  formik.errors.liveWithPartner
                                    ? "invalidInput"
                                    : ""
                                } `}
                                placeholder="Select option"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.liveWithPartner}
                              />
                              {formik.errors.liveWithPartner ? (
                                <span className="input-error-msg">
                                  {formik.errors.liveWithPartner}
                                </span>
                              ) : null}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-div">
                              <label htmlFor="Partner">
                                Third home country*
                              </label>
                              <input
                                type="text"
                                name="Partner"
                                id="Partner"
                                className={`form-control ${
                                  formik.errors.liveWithPartner
                                    ? "invalidInput"
                                    : ""
                                } `}
                                placeholder="Select option"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.liveWithPartner}
                              />
                              {formik.errors.liveWithPartner ? (
                                <span className="input-error-msg">
                                  {formik.errors.liveWithPartner}
                                </span>
                              ) : null}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-div">
                              <label htmlFor="Partner">
                                Do you live with a partner?*
                              </label>
                              <div class="sub-btn">
                                <label>
                                  <input
                                    type="checkbox"
                                    id="vehicle1"
                                    name="vehicle1"
                                    value="Yes"
                                  />
                                </label>
                                <label>
                                  <input
                                    type="checkbox"
                                    id="vehicle2"
                                    name="vehicle2"
                                    value="No"
                                  />
                                </label>
                              </div>
                              {formik.errors.liveWithPartner ? (
                                <span className="input-error-msg">
                                  {formik.errors.liveWithPartner}
                                </span>
                              ) : null}
                            </div>
                          </div>
                        </div>
                        <div className="form-div">
                          <label htmlFor="homeCount">
                            How many children under 18 living with you? *{" "}
                            <span>(As of 31st December of selected year)</span>
                          </label>
                          <select
                            name="homeCount"
                            id="homeCount"
                            className={`form-control ${
                              formik.errors.homeCount ? "invalidInput" : ""
                            } `}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.homeCount}
                          >
                            <option value="">Select option</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                          </select>
                          {formik.errors.year ? (
                            <span className="input-error-msg">
                              {formik.errors.year}
                            </span>
                          ) : null}
                        </div>
                        <div className="form-div">
                          <label htmlFor="homeCount">
                            Do you have any other dependants who live with you
                            all of the time or most of the time? *{" "}
                            <span>(grand-parents etc)</span>
                          </label>
                          <select
                            name="homeCount"
                            id="homeCount"
                            className={`form-control ${
                              formik.errors.homeCount ? "invalidInput" : ""
                            } `}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.homeCount}
                          >
                            <option value="">Select option</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                          </select>
                          {formik.errors.year ? (
                            <span className="input-error-msg">
                              {formik.errors.year}
                            </span>
                          ) : null}
                        </div>
                        <div className="form-div">
                          <label htmlFor="homeCount">Please specify *</label>
                          <input
                            type="text"
                            name="Partner"
                            id="Partner"
                            className={`form-control ${
                              formik.errors.liveWithPartner
                                ? "invalidInput"
                                : ""
                            } `}
                            placeholder=""
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.liveWithPartner}
                          />
                          {formik.errors.liveWithPartner ? (
                            <span className="input-error-msg">
                              {formik.errors.liveWithPartner}
                            </span>
                          ) : null}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="Additional mb-80">

        <div className="container">
        <h2>Additional information</h2>
          <div class="bg-lightgray-color pt-70 pb-70">
      
            <div className="row justify-content-center">
              <div class="col-lg-12">
                <div class="card">
                  <div class="Additional-box">
                    <p>
                      This section is optional, however it will allow us to make
                      your carbon footprint more complete and your
                      recommendations more specific.
                    </p>
                    <form>
                      <label htmlFor="homeCount">Other than domestic property, do you own any forest, farmland or other not attached to one of your properties? If so, please advise size and location.</label>
                      <textarea id="view" name="view" rows="6" cols="50">
                      </textarea>
                    </form>
                    <div class="Additional-bottom-btn">
                        <button class="btn">Save progress</button>
                        <button class="btn">Continue</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default General;
