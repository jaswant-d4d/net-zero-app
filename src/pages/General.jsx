import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import SuccessImg from "../assets/images/Group 9106.png";
import { useNavigate } from "react-router-dom";
import { formvalidation } from "../helpers/validations/Schema";
import generalImg from "../assets/images/user.svg";
import { generalFormSubmit } from "../redux-store/actions/user";

const General = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth)

    const counts = ["First", "Second", "Third", "Fourth", "Fifth"];

    const endYear = new Date().getFullYear();
    const startYear = endYear - 100;

    const years = [];
    for (let year = endYear; year >= startYear; year--) {
        years.push(year);
    }


    const formik = useFormik({
        initialValues: {
            first_name: "",
            last_name: "",
            email: "",
            emailConfirmation: "",
            year_of_birth: undefined,
            country_of_residence: "",
            num_of_homes: "",
            first_home_country: "",
            second_home_country: "",
            third_home_country: "",
            fourth_home_country: "",
            fifth_home_country: "",
            living_with_partner: "",
            num_of_children_under_18: undefined,
            other_dependants: "",
            other_dependants_details: "",
            forest_or_farmland_details: "",
        },

        validationSchema: formvalidation,

        onSubmit: async (values) => {
            if (
                !values.first_name ||
                !values.last_name ||
                !values.email ||
                !values.emailConfirmation ||
                !values.year_of_birth ||
                !values.country_of_residence ||
                !values.num_of_homes ||
                !values.first_home_country ||
                !values.second_home_country ||
                !values.third_home_country ||
                !values.fourth_home_country ||
                !values.fifth_home_country ||
                !values.living_with_partner ||
                !values.num_of_children_under_18 ||
                !values.other_dependants ||
                !values.other_dependants_details
            ) {
                return false;
            }
            try {
                let user_id = user.userInfo.user_id
                let newFormData = { ...values, user_id: user_id }
                dispatch(generalFormSubmit(newFormData))
            } catch (error) {
                Swal.fire({
                    title: "Failed!",
                    text: "Something went wrong",
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
            <section className="information mt-80 mb-80">
                <div className="container">
                    <div className="row">
                        <div className="information-header">
                            <div className="col">
                                <div className="information-icon-box">
                                    <div className="information-cricle-box">
                                        <img src={generalImg} alt="" />
                                    </div>
                                    <p>General Information</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="information-icon-box">
                                    <div className="information-cricle-box">
                                        <img src={generalImg} alt="" />
                                    </div>
                                    <p>General Information</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="information-icon-box">
                                    <div className="information-cricle-box">
                                        <img src={generalImg} alt="" />
                                    </div>
                                    <p>General Information</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="information-icon-box">
                                    <div className="information-cricle-box">
                                        <img src={generalImg} alt="" />
                                    </div>
                                    <p>General Information</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="information-icon-box">
                                    <div className="information-cricle-box">
                                        <img src={generalImg} alt="" />
                                    </div>
                                    <p>General Information</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <form onSubmit={formik.handleSubmit}>
                <section className="general-form mt-80 mb-80">
                    <div className="container ">
                        <h1>General information</h1>
                        <div className="bg-lightgray-color pt-70 pb-70 ">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="card card-par">
                                            <p> Fields marked with an <span>*</span> are required</p>
                                            <div className="form ">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-div">
                                                            <label htmlFor="first_name">Name<span>*</span></label>
                                                            <input
                                                                type="text"
                                                                name="first_name"
                                                                id="first_name"
                                                                className={`form-control ${formik.errors.first_name && formik.touched.first_name && "invalidInput"}`}
                                                                placeholder="First Name"
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                                value={formik.values.first_name}
                                                            />
                                                            {formik.errors.first_name &&
                                                                formik.touched.first_name ? (
                                                                <span className="input-error-msg">
                                                                    {formik.errors.first_name}
                                                                </span>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-div">
                                                            <label htmlFor="first_name" className="last-name">
                                                                Fields marked with an * are required
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="last_name"
                                                                id="last_name"
                                                                className={`form-control ${formik.errors.last_name && formik.touched.last_name && "invalidInput"}`}
                                                                placeholder="Last Name"
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                                value={formik.values.last_name}
                                                            />
                                                            {formik.errors.last_name &&
                                                                formik.touched.last_name ? (
                                                                <span className="input-error-msg">
                                                                    {formik.errors.last_name}
                                                                </span>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-div">
                                                    <label htmlFor="email">Email<span>*</span></label>
                                                    <input
                                                        type="text"
                                                        name="email"
                                                        id="email"
                                                        className={`form-control ${formik.errors.email && formik.touched.email && "invalidInput"}`}
                                                        placeholder="Email"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.email}
                                                    />
                                                    {formik.errors.email && formik.touched.email ? (
                                                        <span className="input-error-msg">
                                                            {formik.errors.email}
                                                        </span>
                                                    ) : null}
                                                </div>
                                                <div className="form-div">
                                                    <label htmlFor="emailConfirmation">
                                                        Email Confirmation<span>*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="emailConfirmation"
                                                        id="emailConfirmation"
                                                        className={`form-control ${formik.errors.emailConfirmation && formik.touched.emailConfirmation && "invalidInput"}`}
                                                        placeholder="Email Confirmation"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.emailConfirmation}
                                                    />
                                                    {formik.errors.emailConfirmation &&
                                                        formik.touched.emailConfirmation ? (
                                                        <span className="input-error-msg">
                                                            {formik.errors.emailConfirmation}
                                                        </span>
                                                    ) : null}
                                                </div>
                                                <div className="form-div">
                                                    <label htmlFor="year_of_birth">Year<span>*</span></label>
                                                    <select
                                                        name="year_of_birth"
                                                        id="year_of_birth"
                                                        className={`form-control ${formik.errors.year_of_birth && formik.touched.year_of_birth ? "invalidInput" : ""}`}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.year_of_birth}
                                                    >
                                                        <option value="">Select option</option>
                                                        {years.map((year, index) => (
                                                            <option key={index} value={year}>
                                                                {year}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    {formik.errors.year_of_birth &&
                                                        formik.touched.year_of_birth ? (
                                                        <span className="input-error-msg">
                                                            {formik.errors.year_of_birth}
                                                        </span>
                                                    ) : null}


                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-div">
                                                            <label htmlFor="country_of_residence">
                                                                Country of primary residence<span>*</span>
                                                            </label>
                                                            <select
                                                                name="country_of_residence"
                                                                id="country_of_residence"
                                                                className={`form-control ${formik.errors.country_of_residence && formik.touched.country_of_residence ? "invalidInput" : ""}`}
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                                value={formik.values.country_of_residence}
                                                            >
                                                                <option value="">Select option</option>
                                                                <option value="America">America</option>
                                                                <option value="America">India</option>
                                                                <option value="America">Italy</option>
                                                            </select>
                                                            {formik.errors.country_of_residence &&
                                                                formik.touched.country_of_residence ? (
                                                                <span className="input-error-msg">
                                                                    {formik.errors.country_of_residence}
                                                                </span>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-div">
                                                            <label htmlFor="num_of_homes">
                                                                How many homes do you own?<span>*</span>
                                                            </label>
                                                            <select
                                                                name="num_of_homes"
                                                                id="num_of_homes"
                                                                className={`form-control ${formik.errors.num_of_homes && formik.touched.num_of_homes ? "invalidInput" : ""}`}
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                                value={formik.values.num_of_homes}
                                                            >
                                                                <option value={""}>Select Option</option>
                                                                {Array(5).fill().map((opt, index) => (
                                                                    <option value={index + 1} key={"opt" + index}>    {index + 1}  </option>
                                                                ))}
                                                            </select>
                                                            {formik.errors.num_of_homes &&
                                                                formik.touched.num_of_homes ? (
                                                                <span className="input-error-msg">
                                                                    {formik.errors.num_of_homes}
                                                                </span>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                    {Array(Number(formik?.values?.num_of_homes))
                                                        .fill()
                                                        .map((opt, index) => (
                                                            <div className="col-md-6" key={index}>
                                                                <div className="form-div">
                                                                    <label
                                                                        htmlFor={`${counts[
                                                                            index
                                                                        ]?.toLowerCase()}_home_country`}
                                                                    >
                                                                        {counts[index]} home country <span>*</span>
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name={`${counts[
                                                                            index
                                                                        ]?.toLowerCase()}_home_country`}
                                                                        id={`${counts[
                                                                            index
                                                                        ]?.toLowerCase()}_home_country`}
                                                                        className={`form-control ${formik.errors[
                                                                            `${counts[
                                                                                index
                                                                            ]?.toLowerCase()}_home_country`
                                                                        ] &&
                                                                            formik.touched[
                                                                            `${counts[
                                                                                index
                                                                            ]?.toLowerCase()}_home_country`
                                                                            ]
                                                                            ? "invalidInput"
                                                                            : ""
                                                                            } `}
                                                                        placeholder="Enter country"
                                                                        onChange={formik.handleChange}
                                                                        onBlur={formik.handleBlur}
                                                                        value={
                                                                            formik.values[
                                                                            `${counts[
                                                                                index
                                                                            ]?.toLowerCase()}_home_country`
                                                                            ]
                                                                        }
                                                                    />
                                                                    {formik.errors[
                                                                        `${counts[
                                                                            index
                                                                        ]?.toLowerCase()}_home_country`
                                                                    ] &&
                                                                        formik.touched[
                                                                        `${counts[
                                                                            index
                                                                        ]?.toLowerCase()}_home_country`
                                                                        ] && (
                                                                            <span className="input-error-msg">
                                                                                {
                                                                                    formik.errors[
                                                                                    `${counts[
                                                                                        index
                                                                                    ]?.toLowerCase()}_home_country`
                                                                                    ]
                                                                                }
                                                                            </span>
                                                                        )}
                                                                </div>
                                                            </div>
                                                        ))}

                                                    <div className="col-md-6">
                                                        <div className="form-div">
                                                            <label htmlFor="living_with_partner">
                                                                Do you live with a partner?<span>*</span>
                                                            </label>
                                                            <div className="sub-btn">
                                                                <input
                                                                    type="radio"
                                                                    id="living_with_partner"
                                                                    name="living_with_partner"
                                                                    value="Yes"
                                                                />
                                                                <label for="radioBanana">Yes</label>
                                                                <input
                                                                    type="radio"
                                                                    id="living_with_partner"
                                                                    name="living_with_partner"
                                                                    value="No"
                                                                />
                                                                <label for="radioBanana">No</label>
                                                            </div>
                                                            {formik.errors.living_with_partner && formik.touched.living_with_partner ? (
                                                                <span className="input-error-msg">
                                                                    {formik.errors.living_with_partner}
                                                                </span>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-div">
                                                    <label htmlFor="homeCount">
                                                        How many children under 18 living with you?<span>*</span>{" "}
                                                        <p>(As of 31st December of selected year)</p>
                                                    </label>
                                                    <select
                                                        name="num_of_children_under_18"
                                                        id="num_of_children_under_18"
                                                        className={`form-control ${formik.errors.num_of_children_under_18 && formik.touched.num_of_children_under_18
                                                            ? "invalidInput"
                                                            : ""
                                                            } `}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.num_of_children_under_18}
                                                    >
                                                        <option value="">Select option</option>
                                                        {Array(5)
                                                            .fill()
                                                            .map((opt, index) => (
                                                                <option value={index + 1} key={"opt" + index}>
                                                                    {index + 1}
                                                                </option>
                                                            ))}
                                                    </select>
                                                    {formik.errors.num_of_children_under_18 && formik.touched.num_of_children_under_18 ? (
                                                        <span className="input-error-msg">
                                                            {formik.errors.num_of_children_under_18}
                                                        </span>
                                                    ) : null}
                                                </div>
                                                <div className="form-div">
                                                    <label htmlFor="other_dependants">
                                                        Do you have any other dependants who live with you
                                                        all of the time or most of the time?<span>*</span>{" "}
                                                        <p>(grand-parents etc)</p>
                                                    </label>
                                                    <select
                                                        name="other_dependants"
                                                        id="other_dependants"
                                                        className={`form-control ${formik.errors.other_dependants &&
                                                            formik.touched.other_dependants
                                                            ? "invalidInput"
                                                            : ""
                                                            } `}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.other_dependants}
                                                    >
                                                        <option value="">Select option</option>
                                                        <option value="Yes">Yes</option>
                                                        <option value="No">No</option>
                                                    </select>
                                                    {formik.errors.other_dependants && formik.touched.other_dependants ? (
                                                        <span className="input-error-msg">
                                                            {formik.errors.other_dependants}
                                                        </span>
                                                    ) : null}
                                                </div>

                                                {formik.values.other_dependants === "Yes" && (

                                                    <div className="form-div">
                                                        <label htmlFor="specify">Please specify <span>*</span></label>
                                                        <input
                                                            type="text"
                                                            name="Partner"
                                                            id="Partner"
                                                            className={`form-control ${formik.errors.living_with_partner && formik.touched.living_with_partner
                                                                ? "invalidInput"
                                                                : ""
                                                                } `}
                                                            placeholder=""
                                                            onChange={formik.handleChange}
                                                            onBlur={formik.handleBlur}
                                                            value={formik.values.living_with_partner}
                                                        />
                                                        {formik.errors.living_with_partner && formik.touched.living_with_partner ? (
                                                            <span className="input-error-msg">
                                                                {formik.errors.living_with_partner}
                                                            </span>
                                                        ) : null}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="Additional mb-80">
                    <div className="container">
                        <h2>Additional information</h2>
                        <div className="bg-lightgray-color pt-70 pb-70">
                            <div className="row justify-content-center">
                                <div className="col-lg-12">
                                    <div className="card">
                                        <div className="Additional-box">
                                            <p>
                                                This section is optional, however it will allow us to
                                                make your carbon footprint more complete and your
                                                recommendations more specific.
                                            </p>
                                            <label htmlFor="forest_or_farmland_details">
                                                Other than domestic property, do you own any forest,
                                                farmland or other not attached to one of your
                                                properties? If so, please advise size and location.
                                            </label>
                                            <textarea
                                                id="forest_or_farmland_details"
                                                name="forest_or_farmland_details"
                                                rows="6"
                                                className="form-control"
                                                cols="50"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.forest_or_farmland_details}
                                            ></textarea>
                                            <div className="Additional-bottom-btn">
                                                <button className="btn">Save progress</button>
                                                <button className="btn" type="button">Continue</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form >
        </>
    );
};

export default General;
