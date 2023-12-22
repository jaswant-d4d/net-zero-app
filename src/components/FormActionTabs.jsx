import React, { useState } from "react";
import generalImg from "../assets/images/user.svg";
import houseImg from "../assets/images/t_house.svg";
import foodImg from "../assets/images/food.svg";
import carImg from "../assets/images/t_car.svg";
import financialImg from "../assets/images/financial .svg";
import Path_img from "../assets/images/Path_img.png";



const FormActionTabs = () => {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <section className="information mt-80 mb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="information-header">
              <div className="col-div">
                <div className="information-icon-box">
                  <div
                    className={`information-cricle-box ${
                      activeTab === "general" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("general")}
                  >
                    <img src={generalImg} alt="" />
                  </div>
                  <p>General Information</p>
                </div>
              </div>
              <div className="col-div">
                <div className="information-icon-box">
                  <div
                    className={`information-cricle-box ${
                      activeTab === "home" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("home")}
                  >
                    <img src={houseImg} alt="" />
                  </div>
                  <p>Your Home</p>
                </div>
              </div>
              <div className="col-div">
                <div className="information-icon-box">
                  <div
                    className={`information-cricle-box ${
                      activeTab === "travel" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("travel")}
                  >
                    <img src={carImg} alt="" />
                  </div>
                  <p>Travel</p>
                </div>
              </div>
              <div className="col-div">
                <div className="information-icon-box">
                  <div
                    className={`information-cricle-box ${
                      activeTab === "food" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("food")}
                  >
                    <img src={foodImg} alt="" />
                  </div>
                  <p>Food and Shopping</p>
                </div>
              </div>
              <div className="col-div">
                <div className="information-icon-box">
                  <div
                    className={`information-cricle-box ${
                      activeTab === "financial" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("financial")}
                  >
                    <img src={financialImg} alt="" />
                  </div>
                  <p>Financial assets</p>
                </div>
              </div>
            </div>
            <div class="information-header-nav">
              <ul>
                <li>
                  <a href="#">Home 1</a>
                </li>
                <li>
                  <a href="#">Home 2</a>
                </li>
                <li>
                  <a href="#">Home 2</a>
                </li>
                <li>
                  <a href="#">Home 2</a>
                </li>
                <li>
                  <a href="#">
                    Add <br /> home +
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormActionTabs;
