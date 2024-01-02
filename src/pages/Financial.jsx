import React, { useState } from "react";
import finance_img from "../assets/images/finance_img.png";
import FormActionTabs from "../components/FormActionTabs";
import { finanicialFormSubmit } from "../redux-store/actions/user";
import SuccessImg from "../assets/images/Group 9106.png";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Financial = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const user = useSelector((state) => state.auth);

  const submitHandler = async (e) => {
    e.preventDefault();
    setDisabled(true);
    let values = { general_information_id: Number(user?.generalInfoId), form_status: "Submit" }

    const response = await dispatch(finanicialFormSubmit(values));
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
          navigate("/");
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
  };


  return (
    <>
      <FormActionTabs selectedTab={"financial"} />
      <section className="investments">
        <div className="container">
          <div className="sub-heading">
            <h2>Financial assets</h2>
          </div>
          <div className=" bg-color">
            <div className="card">
              <h3>Anthos investments</h3>
              <p>
                The carbon footprint of your Anthos investments (the family
                investment funds managed by Anthos Private Wealth Management) will
                be automatically included in your report. You therefore do not
                need to provide any details about your Anthos investments.
              </p>
              <p>
                Please contact your Client Advisor/Investment Specialist to
                discuss the carbon footprint of your Anthos investments. In case
                you have any investments managed outside Anthos Private Wealth
                Management and want to include these in the discussion, please
                have these details to hand.
              </p>
              <div class="form">
                <form>
                  <button class="submit-btn " type="submit" onClick={submitHandler} disabled={disabled}>submit </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Financial;
