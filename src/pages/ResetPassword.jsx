import React, { useState } from 'react'
import login_img from '../assets/images/login_img.png'
import login_img1 from '../assets/images/login_img1.png'
import { resetPassword } from '../redux-store/actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import SuccessImg from "../assets/images/Group 9106.png"
import { useNavigate, useParams } from 'react-router-dom';
import SweetAlert from '../components/SweetAlert';


const validate = values => {
    const errors = {};

    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!values.password?.trim()) {
        errors.password = 'Password field is required';
    } else if (values.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
    } else if (!strongPasswordRegex.test(values.password)) {
        errors.password = 'Password must include an uppercase letter, a lowercase letter, a number, and a special character';
    }

    if (!values.cpassword?.trim()) {
        errors.cpassword = 'Confirm Password field is required';
    } else if (values.password !== values.cpassword) {
        errors.cpassword = 'Confirm Password not matched';
    }

    return errors;
};



const ResetPassword = () => {
    const { token } = useParams();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { loading, userInfo, error } = useSelector((state) => state.auth)

    const formik = useFormik({
        initialValues: {
            password: '',
            cpassword: '',
            role: "2",
        },

        validate: validate,

        onSubmit: async (values) => {
            if (!values.password || !values.cpassword) {
                return false
            }
            try {

                const requestData = {
                    email: "ravichaudhary.d4d@gmail.com",
                    token: token,
                    password: values.password,
                    password_confirmation: values.cpassword
                }

                const response = await dispatch(resetPassword(requestData));
                if (!response?.payload?.error && response?.payload?.data) {
                    Swal.fire({
                        title: "Success!",
                        text: "Password reset successfully",
                        imageUrl: SuccessImg,
                        imageWidth: 100,
                        imageHeight: 100,
                        showCancelButton: false,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",

                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate("/")
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
                                html: errorMessage,
                                icon: "error",
                                showCancelButton: false,
                                confirmButtonColor: "#3085d6",
                                cancelButtonColor: "#d33",
                            });
                        }
                    }
                }
            } catch (error) {
                Swal.fire({
                    title: "Failed!",
                    text: "Something went wrong!",
                    icon: "error",
                    showCancelButton: false,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                });
            }
        }

    });

    return (
        <>
            <section className="login-form  mt-80 mb-80">
                <div className="container ">
                    <div className="bg-lightgray-color pt-70 pb-70 ">
                        <div className="row">
                            <div className="col-xl-7 col-lg-6">
                                <div className="d-flex justify-content-center align-items-center login-form-div">
                                    <div className="card">
                                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                            <li className="nav-item text-center" >
                                                <a className={`nav-link btl active`} id="pills-home-tab" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="true">Reset Password</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="pills-tabContent">

                                            <div className={`tab-pane fade show active `} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                                <div className="form ">
                                                    <form onSubmit={formik.handleSubmit}>
                                                        <div className="form-div">
                                                            <input type="text" name="password" className={`form-control ${formik.errors.password && formik.touched.password ? "invalidInput" : ""} `} placeholder="Password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
                                                            {formik.errors.password && formik.touched.password ? <span className='input-error-msg'>{formik.errors.password}</span> : null}
                                                        </div>
                                                        <div className="form-div">
                                                            <input type="text" name="cpassword" className={`form-control ${formik.errors.cpassword && formik.touched.cpassword ? "invalidInput" : ""} `} placeholder="Confirm Password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.cpassword} />
                                                            {formik.errors.cpassword && formik.touched.cpassword ? <span className='input-error-msg'>{formik.errors.cpassword}</span> : null}
                                                        </div>
                                                        <button className="submit-btn" type='submit' >Submit {loading ? <div className="spinner-border text-primary" role="status">
                                                        </div> : ''}</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 offset-1">
                                <div className="login-img">
                                    <img src={login_img} alt="" />
                                </div>
                                <div className="login-img-two">
                                    <img src={login_img1} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

            </section >

        </>
    )
}

export default ResetPassword