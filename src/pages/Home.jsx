import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux-store/actions/auth";
import backgroundImage from "../assets/images/home_img1.png"
import planeImage from "../assets/images/t_plan.svg"
import houseImage from "../assets/images/t_house.svg"
import bulbImage from "../assets/images/blub.png"
import carImage from "../assets/images/t_car.svg"
import travelImage from "../assets/images/travel.png"
import travel2Image from "../assets/images/travel2.png"
import securityImage from "../assets/images/security.png"
import { Link } from "react-router-dom";
import circleImg from "../assets/images/banner_circle.png"

const Home = () => {
    const containerStyle = {
        backgroundImage: `url(${backgroundImage})`,
    };

    return (
        <>
            <section className="home-banner bgCover" >
               
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div class="home-banner-content">
                                <h1>The Anthos<br/>Net Zero Tool</h1>
                                <div className="P_Lead">
                                    <p>Designed for Anthos clients to provide insights into personal emissions and support with emissions reductions</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           
            {/* <section className='home-banner bgCover' style={containerStyle}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h1>The Anthos<br></br> Net Zero Project</h1>
                            <p>Created to provied an ongoing <br /> service to help all family members</p>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <!--------------------- personal-carbon -----------------------> */}

            <section className="personal-carbon bg-lightgray-color pt-80 pb-80">
            <div class="possinend-image"><img src={circleImg} alt="" /></div>
                <div className="container">
                    <div className="carbon-top">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-2">
                                <div className="title-block">
                                    <div className='sub-title'>The Future of Sustainability</div>
                                    <h2>
                                        Your personal carbon footprint calculator
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carbon-contant">
                        <div className="row">
                            <div className="col-lg-4 col-md-4">
                                <div className="img-col">
                                    <img src={bulbImage} />
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-8">
                                <div className="carbon-box">
                                    <div className="text-col">
                                        <div className="text-scroll">
                                            <div className="p-box">
                                                <p style={{color:"#31405A",fontWeight:600}}>Understand the shape and size of your carbon footprint.</p>

                                                <p style={{color:"#2C2B34",fontWeight:600}}>Connect with an advisory service to discuss and explore opportunities for carbon reduction.</p>

                                                <p>Repeat the process on an annual basis and track progress through time.</p>

                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link to="/general" className="btn">Calculate your footprint</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="Form-essentials pt-80 pb-80 ">
                <div className="container">
                    <div className="row Form-essentials-main-row">
                        <div className="col-lg-9 col-md-8">
                            <div className="form-content">
                                <div className="title-block">
                                <div class='sub-title'>FORM GUIDE</div>
                                    <h2>How to complete the form</h2>
                                </div>
                                <p>The first step is to provide information through the tailored form, relating to your home, travel, shopping and assets. Information is encrypted and held on a <span>secure server*</span> and the form should take no more than 15 minutes to complete. </p>
                                <p>On each page there are some sections that are required and others that are optional. The optional sections are for activities that we expect aren’t the biggest sources of emissions and so are not compulsory to fill out. However, adding this information will give you a more accurate carbon footprint and more tailored recommendations.</p>
                                <p>The accuracy of your carbon footprint and the effectiveness of the recommendations derived from it are dependent on the completeness of the information provided by you.</p>
                                <span>To make the process quicker and easier, gather the following details before starting:</span>
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-12 text-align-center">
                                        <div className="icon-box">
                                            <div className="cricle-box">
                                                <img src={houseImage} alt="" />
                                            </div>
                                            <p>Your residential energy consumption (electricity, natural gas, heating oil, any others)</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6">
                                        <div className="icon-box">
                                            <div className="cricle-box">
                                                <img src={planeImage} alt="" />
                                            </div>
                                            <p>Your air travel use (number of flights/distance travelled)</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6">
                                        <div className="icon-box">
                                            <div className="cricle-box">
                                                <img src={carImage} alt="" />
                                            </div>
                                            <p>Your road travel use (vehicle information/distance travelled)</p>
                                        </div>
                                    </div>
                                </div>
                                <p>You can save your responses if you are not able to complete the form, and return to it later. 
Once you have submitted the information, the Good Business team will respond with initial results and suggested actions in their report, and an invitation to arrange a consultation to discuss your form.</p>
                             
                                <Link to="/general" className="btn">Calculate your footprint</Link>
                            </div>
                        </div>
                        <div className="col-lg-3 Form-col-div">
                            <div className="Form-col-img">
                                <img src={travelImage} alt="" />
                            </div>
                            <div className="Form-col-travel">
                                <img src={travel2Image} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!------------Protecting----------> */}

            <section className="Protecting  bg-lightgray-color pt-80 pb-80">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="title-block">
                                <h2>Protecting your data</h2>
                                
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-lg-5 col-md-5">
                            <div className="Protecting-div">
                                <img src={securityImage} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 offset-lg-1 offset-md-1 Protecting-content">
                            <p>All of your responses in the <b>Net Zero Tool</b> will be encrypted with TLS and only accessed by the <b>Good Business team</b> for the purposes of calculating your footprint and providing recommendations to reduce it. You can find more information in Good Business’ privacy policy here. </p>

                            <p>The <b>Net Zero Tool</b> met high data security requriements for pentration testing in <b>March 2023</b>. </p>

                        </div>
                    </div>
                </div>

            </section>
        </>
    )

}

export default Home;
