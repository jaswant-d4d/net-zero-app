import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import SuccessImg from "../assets/images/Group 9106.png"
import { useNavigate } from 'react-router-dom';

const validate = values => {

    const errors = {};
    if (!values.first_name?.trim()) {
        errors.first_name = 'First Name field is required';
    }

    if (!values.last_name?.trim()) {
        errors.last_name = 'Last Name field is required';
    }

    if (!values.email?.trim()) {
        errors.email = 'Email Address field is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password?.trim()) {
        errors.password = 'Password field is required';
    } else if (values.password.length < 6) {
        errors.password = 'Password must be atleast 6 characters';
    }

    if (!values.cpassword?.trim()) {
        errors.cpassword = 'Confirm Password field is required';
    } else if (values.password !== values.cpassword) {
        errors.cpassword = 'Confirm Password not matched';
    }

    return errors;
};


const General = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { loading, userInfo, error } = useSelector((state) => state.auth)


    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            cpassword: '',
            role: "2",
        },

        validate,

        onSubmit: async (values) => {
            if (!values.first_name || !values.last_name || !values.email || !values.password || !values.cpassword) {
                return false
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
        }

    });

    return (
        <>
            <section className="general-form mt-80 mb-80">
                <div className="container ">
                    <div className="bg-lightgray-color pt-70 pb-70 ">
                        <div className="row">
                            <div className="col-lg-10">
                                <div className="d-flex justify-content-center align-items-center mt-5">
                                    <div className="card">
                                        <div className="form px-4 pt-5">
                                            <form onSubmit={formik.handleSubmit}>
                                                <div className="row">
                                                    <div className='col-md-6'>
                                                        <div className='form-div'>
                                                            <label htmlFor='first_name'>Name</label>
                                                            <input type="text" name="first_name" id='first_name' className={`form-control ${formik.errors.first_name ? "invalidInput" : ""} `} placeholder="First Name" onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur} value={formik.values.first_name} />
                                                            {formik.errors.first_name ? <span className='input-error-msg'>{formik.errors.first_name}</span> : null}
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div className='form-div'>
                                                            <input type="text" name="last_name" id='last_name' className={`form-control ${formik.errors.last_name ? "invalidInput" : ""} `} placeholder="Last Name" onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur} value={formik.values.last_name} />
                                                            {formik.errors.last_name ? <span className='input-error-msg'>{formik.errors.last_name}</span> : null}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='form-div'>
                                                    <label htmlFor='email'>Email</label>
                                                    <input type="text" name="email" id='email' className={`form-control ${formik.errors.email ? "invalidInput" : ""} `} placeholder="Email" onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur} value={formik.values.email} />
                                                    {formik.errors.email ? <span className='input-error-msg'>{formik.errors.email}</span> : null}
                                                </div>
                                                <div className='form-div'>
                                                    <label htmlFor='emailConfirmation'>Email Confirmation</label>
                                                    <input type="text" name="emailConfirmation" id='emailConfirmation' className={`form-control ${formik.errors.emailConfirmation ? "invalidInput" : ""} `} placeholder="Email Confirmation" onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur} value={formik.values.emailConfirmation} />
                                                    {formik.errors.emailConfirmation ? <span className='input-error-msg'>{formik.errors.emailConfirmation}</span> : null}
                                                </div>
                                                <div className='form-div'>
                                                    <label htmlFor='year'>Year</label>
                                                    <input type="text" name="year" id='year' className={`form-control ${formik.errors.year ? "invalidInput" : ""} `} placeholder="year" onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur} value={formik.values.year} />
                                                    {formik.errors.year ? <span className='input-error-msg'>{formik.errors.year}</span> : null}
                                                </div>
                                                <div className='form-div'>
                                                    <label htmlFor='primaryAddress'>Country of primary Address</label>
                                                    <select name="primaryAddress" id='primaryAddress' className={`form-control ${formik.errors.primaryAddress ? "invalidInput" : ""} `} onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur} value={formik.values.primaryAddress}>
                                                        <option value="">Select option</option>
                                                        <option value="America">America</option>
                                                    </select>
                                                    {formik.errors.primaryAddress ? <span className='input-error-msg'>{formik.errors.primaryAddress}</span> : null}
                                                </div>
                                                <div className='form-div'>
                                                    <label htmlFor='homeCount'>How many homes do you own?</label>
                                                    <select name="homeCount" id='homeCount' className={`form-control ${formik.errors.homeCount ? "invalidInput" : ""} `} onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur} value={formik.values.homeCount}>
                                                        <option value="">Select option</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                    </select>
                                                    {formik.errors.year ? <span className='input-error-msg'>{formik.errors.year}</span> : null}
                                                </div>
                                                <div className='form-div'>
                                                    <label htmlFor='liveWithPartner'>Do you live with a partner</label>
                                                    <input type="text" name="liveWithPartner" id='liveWithPartner' className={`form-control ${formik.errors.liveWithPartner ? "invalidInput" : ""} `} placeholder="liveWithPartner" onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur} value={formik.values.liveWithPartner} />
                                                    {formik.errors.liveWithPartner ? <span className='input-error-msg'>{formik.errors.liveWithPartner}</span> : null}
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div >

            </section >

        </>
    )
}

export default General