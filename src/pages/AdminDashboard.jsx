import React, { useState, useEffect } from "react";
import form_user from "../assets/images/form_user.svg";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../components/Pagination";
import arrowImg from "../assets/images/arrow_img.svg"
import share_img from "../assets/images/share_img.svg";
import missions_img from "../assets/images/missions_img.svg";

import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { userFormValidation } from "../helpers/validations/Schema";
import { formlist, getUserDetails, updateUserDetails } from "../redux-store/actions/user";
import SuccessImg from "../assets/images/Group 9106.png";
import Swal from "sweetalert2";
import { ordinalNumbers } from "../helpers/ordinalNumber";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth);
  const formList = useSelector((state) => state.users.formList);
  const isLoading = useSelector((state) => state.users.isLoading);

  const [disabled, setDisabled] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const serialNo = (currentPage - 1) * itemsPerPage;
  const userId = user?.userInfo?.user_id

  useEffect(() => {
    dispatch(formlist(userId));
  }, []);


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = formList?.slice(indexOfFirstItem, indexOfLastItem);

  const formik = useFormik({
    initialValues: {
      first_name: user?.userInfo?.first_name,
      last_name: user?.userInfo?.last_name,
      email: user?.userInfo?.email,
      password: user?.userInfo?.password,
    },
    validationSchema: userFormValidation,
    onSubmit: (values) => { },
  });

  const UpdateUserDetails = async (e) => {
    dispatch(getUserDetails(userId));
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    const { values, isValid, errors } = formik;
    formik.handleSubmit();

    if (isValid) {
      setDisabled(true);
      const user_id = Number(user?.userInfo?.user_id);

      const response = await dispatch(updateUserDetails({ data: values, user_id }));
      setDisabled(false)
      if (!response?.payload?.error && response?.payload?.data) {
        Swal.fire({
          title: "Success!",
          text: "Profile Information saved successfully",
          imageUrl: SuccessImg,
          imageWidth: 100,
          imageHeight: 100,
          showCancelButton: false,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          didClose: UpdateUserDetails
        });
      } else {
        const errorMsg = response?.payload?.response?.data?.errorMsg;
        if (errorMsg) {
          const errorMessages = Object.values(errorMsg).flatMap(messages => messages);
          if (errorMessages.length > 0) {
            const errorMessage = errorMessages.join("\n");
            Swal.fire({
              title: "Failed!",
              html: errorMessage || "Failed to saved profile Information, please try again",
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
      <form>
        <section className="Personal-information ">
          <div className="container">
            <h1>Admin Dashboard</h1>
            <div className="row admin-dashboard">
              <div class="personal-heading">
                <img src={form_user} alt="" />
                <h2>Personal information</h2>
              </div>
              <div className="col-lg-6">
                <div className="information-box">
                  <div class="form-div">
                    <label htmlFor="first_name">Your name</label>
                    <input type="text" name="first_name" placeholder="First name" className={`${formik.errors.first_name && formik.touched.first_name && "invalidInput"}`} value={formik.values.first_name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.first_name && formik.touched.first_name ? (
                      <span className="input-error-msg">
                        {formik.errors.first_name}
                      </span>
                    ) : null}
                  </div>
                  <div class="form-div">
                    <label htmlFor="email">Your email address</label>
                    <input type="email" name="email" id="email" placeholder="Email address" className={`${formik.errors.email && formik.touched.email && "invalidInput"}`} value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.email && formik.touched.email ? (
                      <span className="input-error-msg">
                        {formik.errors.email}
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="information-box">
                  <div class="form-div">
                    <label htmlFor="last_name">Last name</label>
                    <input type="text" name="last_name" id="last_name" className={`${formik.errors.last_name && formik.touched.last_name && "invalidInput"}`} placeholder="Last name" value={formik.values.last_name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.last_name && formik.touched.last_name ? (
                      <span className="input-error-msg">
                        {formik.errors.last_name}
                      </span>
                    ) : null}
                  </div>
                  <div class="form-div">
                    <label htmlFor="password">Your password</label>
                    <input type="password" id="password" name="password" className={`${formik.errors.password && formik.touched.password && "invalidInput"}`} placeholder="************" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.password &&
                      formik.touched.password ? (
                      <span className="input-error-msg">
                        {formik.errors.password}
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>
              <button class="submit-btn " type="button" onClick={() => submitHandler()}>
                Save
              </button>
            </div>
          </div>
        </section>
      </form>


      <section className="submissions">
        <div className="container">
          <div className="submissions-bg-color">
            <div className="submissions-header">
              <div class="personal-heading">
                <img src={missions_img} alt="" />
                <h2>Submissions</h2>
              </div>
              <div className="submissions-header-btn">
                <button class="submit-btn " type="button">
                  Create new user
                </button>
                <button class="submit-btn " type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Upload CSV form
                </button>
              </div>
            </div>
            <div class="information-box">
              <form>
                <div className="submission-form">

                  <div class="form-div">
                    <label htmlFor="text">Search submitted forms by user email address.</label>
                    <input type="text" name="" placeholder="First name" />
                  </div>
                  <button class="submit-btn " type="submit">
                    Submit
                  </button>
                </div>
              </form>


              <table class="customers" style={{ borderRadius: '20px' }}>
                <thead className="table-header">
                <tr style={{ borderRadius: '20px' }}>
                  <th style={{ width: '25%' }}>Form name</th>
                  <th style={{ width: '50%' }}>User email address</th>
                  <th style={{ width: '25%' }}></th>
                </tr>
                </thead>
                <tbody>
                  {isLoading ? (<div className="text-center">loading...</div>) :
                    currentItems?.length > 0 ? currentItems?.map((form, index) => (
                      <tr key={index}>
                        <td>{ordinalNumbers[serialNo + index]} form</td>
                        <td>{form.email}</td>
                        <td className="d-flex justify-content-between table-td">
                          <div className="d-flex justify-content-between align-items-center table-text">
                            <p>View form</p> <img src={arrowImg} /></div>
                          <div class="table-img">  <img src={share_img} width={36} height={44} /></div>
                        </td>
                      </tr>
                    )) : (<tr className="text-center"><td>Data not found</td></tr>)}
                </tbody>
              </table>

              {!isLoading && formList?.length > 0 && (<Pagination dataLength={formList?.length} itemsPerPage={itemsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />)}

            </div>
          </div>
        </div>

        {/* Modal popup */}
        <div class="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" >
            <div class="modal-content">
              <div class="close-btn-box d-flex justify-content-end">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-headers d-flex justify-content-center ">
                <h1 class="modal-title fs-5" id="exampleModalLabel mt-5">Upload CSV form</h1>
              </div>
              <div class="modal-body">
                <div class="upload-box">
                  <input type="file" />
                </div>
              </div>
              <div class="">
                {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                <button type="button" class="btn btn-primary">Upload</button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};
export default AdminDashboard;
