import React, { useEffect, useState,  } from "react";
import form_user from "../assets/images/form_user.svg";
import delete2_img from "../assets/images/delete2_img.svg";
import share_img from "../assets/images/share_img.svg";
import tick_img from "../assets/images/tick_img.svg";
import arrow_img from "../assets/images/arrow_img.svg";

import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { foodFormSubmit, getCountry, getUserDetails } from "../redux-store/actions/user";
import SuccessImg from "../assets/images/Group 9106.png";
import Swal from "sweetalert2";
import { foodFormValidation } from "../helpers/validations/Schema";


const MyAccount = () => {


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth);
    const [disabled, setDisabled] = useState(false);


    const endYear = new Date().getFullYear();
    const startYear = endYear - 20;

    const years = [];

    for (let year = endYear; year >= startYear; year--) {
        years.push(year);
    }

    useEffect(() => {
        dispatch(getCountry());
        // dispatch(getUserDetails(user));
    }, []);


    const validateAndFilterFields = (values) => {
        const {
            ...rest
        } = values;

        const user_id = Number(user?.userInfo?.user_id) || 1;
        const filteredValues = {
            ...rest,
            user_id,
        };
        return filteredValues;
    };

    const formik = useFormik({

        initialValues: {
            first_name: "",
            last_name: "",
            email: "",
            password: ""
        },

        // validationSchema: foodFormValidation,

        onSubmit: (values) => { },
    });

    const submitHandler = async (e) => {
        e.preventDefault();
        const { values, isValid, errors } = formik;
        formik.handleSubmit();

        if (isValid) {
            setDisabled(true);

            const filteredValues = await validateAndFilterFields(values);
            const response = await dispatch(foodFormSubmit(filteredValues));
            setDisabled(false)
            if (!response?.payload?.error && response?.payload?.data) {
                Swal.fire({
                    title: "Success!",
                    text: "Form submitted successfully",
                    imageUrl: SuccessImg,
                    imageWidth: 100,
                    imageHeight: 100,
                    showCancelButton: false,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate("/financial");
                    }
                });
            } else {
                const errorMsg = response?.payload?.response?.data?.errorMsg;
                if (errorMsg) {
                    const errorMessages = Object.values(errorMsg).flatMap(messages => messages);
                    if (errorMessages.length > 0) {
                        const errorMessage = errorMessages.join("\n");
                        Swal.fire({
                            title: "Failed!",
                            html: errorMessage || "Failed to form submit, please try again",
                            icon: "error",
                            showCancelButton: false,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                        });
                    }
                }
            }
        } else {
            console.error('Form is not valid', errors);
        }
    };
    return (
        <>
            <section className="Personal-information">
                <div className="container">
                    <h1>My account</h1>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="information-box">
                                <div class="personal-heading">
                                    <img src={form_user} alt="" />
                                    <h2>Personal information</h2>
                                </div>
                                <form>
                                    <div class="form-div">
                                        <label htmlFor="text">Your name</label>
                                        <input type="text" name="" placeholder="First name"  />
                                    </div>
                                    <div class="form-div">
                                        <label htmlFor="text">Last name</label>
                                        <input type="text" name="" placeholder="Last name" />
                                    </div>
                                    <div class="form-div">
                                        <label htmlFor="email">Your email address</label>
                                        <input type="email" name="" placeholder="Email address" />
                                    </div>
                                    <div class="form-div">
                                        <label htmlFor="paddword">Your password</label>
                                        <input type="password" name="" placeholder="************" />
                                    </div>
                                    <button class="submit-btn " type="submit">Save</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6">

                            <h2>Saved forms</h2>

                            <div class="accordion" id="regularAccordionRobots">

                                <div class="accordion-item">
                                    <h2 id="regularHeadingFirst" class="accordion-header">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#regularCollapseFirst" aria-expanded="true" aria-controls="regularCollapseFirst">
                                            1.Latest form
                                        </button>
                                    </h2>
                                    <div id="regularCollapseFirst" class="accordion-collapse collapse show" aria-labelledby="regularHeadingFirst" data-bs-parent="#regularAccordionRobots">
                                        <div class="accordion-body">
                                            <div className="accordion-content">
                                                <div className="title-accodion">
                                                    <span>Form submitted</span>
                                                    <a href="#">View form</a>
                                                </div>
                                                <div className="accordion-img">
                                                    <img src={share_img} alt="" />
                                                    <img src={delete2_img} alt="" />
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="regularHeadingSecond">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#regularCollapseSecond" aria-expanded="false" aria-controls="regularCollapseSecond">
                                            2.Second form name
                                        </button>
                                    </h2>
                                    <div id="regularCollapseSecond" class="accordion-collapse collapse" aria-labelledby="regularHeadingSecond" data-bs-parent="#regularAccordionRobots">
                                        <div class="accordion-body">
                                            <div className="accordion-content">
                                                <div className="title-accodion">
                                                    <span>Form submitted</span>
                                                    <a href="#">View form</a>
                                                </div>
                                                <div className="accordion-img">
                                                    <img src={share_img} alt="" />
                                                    <img src={delete2_img} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
export default MyAccount