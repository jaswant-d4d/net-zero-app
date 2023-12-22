import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import FormActionTabs from "../components/FormActionTabs";
import CountryOptions from "../components/CountryOptions";
import { useDispatch, useSelector } from "react-redux";
import { getCountry } from "../redux-store/actions/user";
import { formvalidation } from "../helpers/validations/Schema";
import delete_img from "../assets/images/delete_img.svg";

// import homeimage from "../assets/images/home-img.png"
const heatingTypes = [
  "Electricity",
  "Oil",
  "Coal",
  "Gas",
  "Wood",
  "Don't know"
];

const Homeform = () => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.users);
  const [disabled, setDisabled] = useState(false);

  const endYear = new Date().getFullYear();
  const startYear = endYear - 20;

  const years = [];

  for (let year = endYear; year >= startYear; year--) {
    years.push(year);
  }

  useEffect(() => {
    dispatch(getCountry());
  }, []);

  const formik = useFormik({
    initialValues: {
      general_information_id: "1",
      location: "Sigapure",
      heating_type: "",
      zero_carbon_energy_tariff: "",
      electricity_usage_known: "",
      electricity_usage_amount: null,
      electricity_usage_unit: "",
      electricity_usage_time_period: "",
      electricity_annual_spend: "",
      electricity_annual_amount: null,
      electricity_annual_unit: "",
      electricity_supplier: "",
      on_site_renewable_energy: "Yes",
      on_site_renewable_amount: "200",
      on_site_renewable_unit: "kwh",
      natural_gas_usage_known: "",
      natural_gas_usage_amount: "",
      natural_gas_usage_unit: "",
      natural_gas_usage_time_period: "",
      gas_consumption_offset: "",
      oil_usage_known: "",
      oil_usage_amount: "",
      oil_usage_unit: "",
      wood_usage_known: "",
      wood_usage_amount: "",
      wood_usage_unit: "",
      coal_usage_known: "",
      coal_usage_amount: "",
      coal_usage_unit: "",
      other_energy_usage: "",
      other_energy_which_and_amount: "",
      property_features: "",
      house_type: "",
      construction_material: "",
      year_built: "",
      winter_temperature: "",
      additional_property_features: "",
      live_in_staff: "",
      planned_renovations: "",
      significant_land: "",
      land_details: "",
      other_details: "",
    },

    validationSchema: formvalidation,

    onSubmit: (values) => { },
  });

  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    const { heating_type } = formik.values;
    debugger
    const updatedHeatingType = heating_type.includes(value)
      ? heating_type.filter((type) => type !== value)
      : [...heating_type, value];

    formik.setFieldValue("heating_type", updatedHeatingType);
  };

  return (
    <>
      <FormActionTabs selectedTab={"home"} />
      <form onSubmit={formik.handleSubmit}>

        <section className="general-form mt-80 mb-80">
          <div className="container ">
            <div className="bg-lightgray-color">
              <div className="row">
                <div className="col-lg-12">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="card card-par">
                      <div className=" home-title-div">
                        <div className="home-title">
                          <h2>Home2</h2>
                        </div>
                        <div className="delete-box">
                          <span>Delete this home</span>
                          <img src={delete_img} alt="" />
                        </div>
                      </div>

                      <p>
                        Fields marked with an <span>*</span> are required
                      </p>
                      <div className="form ">
                        <div className="row">
                          <div className="form-div">
                            <label htmlFor="location">
                              <strong>1.</strong> Location of home<span>*</span>
                            </label>
                            <select
                              name="location"
                              id="location"
                              className={`form-control ${formik.errors.location &&
                                formik.touched.location &&
                                "invalidInput"
                                }`}
                              placeholder="First Name"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.location}
                            >
                              <option value="">Select option</option>
                              <CountryOptions countries={details?.countries} />
                            </select>
                            {formik.errors.location &&
                              formik.touched.location ? (
                              <span className="input-error-msg">
                                {formik.errors.location}
                              </span>
                            ) : null}
                          </div>
                          <div className="form-div">
                            <div class="form-label-div">
                              <label htmlFor="first_name">
                                <strong>2.</strong> How is the home heated?
                                <span>*</span>
                              </label>
                              <p>(Select all that apply)</p>
                            </div>
                            {/* <div className="sub-btn">
                              <div class="check-input">
                                <input
                                  type="checkbox"
                                  name="heating_type"
                                  value="Electricity"
                                  checked={formik.values.heating_type.includes(
                                    "Electricity"
                                  )}
                                  onChange={formik.handleChange}
                                />
                                <label
                                  className={`${formik.values.heating_type.includes(
                                    "Electricity"
                                  )
                                      ? "active"
                                      : ""
                                    }`}
                                >
                                  Electricity
                                </label>
                              </div>
                              <div class="check-input">

                                <input
                                  type="checkbox"
                                  name="heating_type"
                                  value="Oil"
                                  checked={formik.values.heating_type.includes(
                                    "Oil"
                                  )}
                                  onChange={formik.handleChange}
                                />
                                <label
                                  className={`${formik.values.heating_type.includes("Oil")
                                      ? "active"
                                      : ""
                                    }`}
                                >
                                  Oil
                                </label>
                              </div>

                              <div class="check-input">
                                <input
                                  type="checkbox"
                                  name="heating_type"
                                  value="Coal"
                                  checked={formik.values.heating_type.includes(
                                    "Coal"
                                  )}
                                  onChange={formik.handleChange}
                                />
                                <label
                                  className={`${formik.values.heating_type.includes("Coal")
                                      ? "active"
                                      : ""
                                    }`}
                                >
                                  Coal
                                </label>
                              </div>
                              <div class="check-input">
                                <input
                                  type="checkbox"
                                  name="heating_type"
                                  value="Gas"
                                  checked={formik.values.heating_type.includes(
                                    "Gas"
                                  )}
                                  onChange={formik.handleChange}
                                />
                                <label
                                  className={`${formik.values.heating_type.includes("Gas")
                                      ? "active"
                                      : ""
                                    }`}
                                >
                                  Gas
                                </label>
                              </div>
                              <div class="check-input">
                                <input
                                  type="checkbox"
                                  name="heating_type"
                                  value="Wood"
                                  checked={formik.values.heating_type.includes(
                                    "Wood"
                                  )}
                                  onChange={formik.handleChange}
                                />
                                <label
                                  className={`${formik.values.heating_type.includes("Wood")
                                      ? "active"
                                      : ""
                                    }`}
                                >
                                  Wood
                                </label>
                              </div>
                              <div class="check-input">
                                <input
                                  type="checkbox"
                                  name="heating_type"
                                  value="Don't know"
                                  checked={formik.values.heating_type.includes(
                                    "Don't know"
                                  )}
                                  onChange={formik.handleChange}
                                />
                                <label
                                  className={`${formik.values.heating_type.includes(
                                    "Don't know"
                                  )
                                      ? "active"
                                      : ""
                                    }`}
                                >
                                  Don't know
                                </label>
                              </div>
                            </div> */}
                            {formik.values.heating_type}
                            <div className="sub-btn">
                              {heatingTypes.map((type, index) => (
                                <div className="check-input" key={index}>
                                  <input
                                    id={type + "1"}
                                    type="checkbox"
                                    name="heating_type"
                                    value={type}
                                    checked={formik.values.heating_type.includes(type)}
                                    onChange={formik.handleChange}
                                  />
                                  <label htmlFor={type + "1"} className={`${formik.values.heating_type.includes(type) ? "active" : ""}`}>
                                    {type}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="form-div">
                          <div class="form-label-div">
                            <label htmlFor="zero_carbon_energy_tariff">
                              <strong>3. </strong> Was your electricity supplied
                              under a zero-carbon energy tariff? <span>*</span>{" "}
                            </label>
                            <p>
                              (100% electricity generated from wind, water,
                              solar, nuclear)
                            </p>
                          </div>
                          <select
                            name="zero_carbon_energy_tariff"
                            id="zero_carbon_energy_tariff"
                            className={`form-control ${formik.errors.zero_carbon_energy_tariff &&
                              formik.touched.zero_carbon_energy_tariff
                              ? "invalidInput"
                              : ""
                              } `}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.zero_carbon_energy_tariff}
                          >
                            <option value="">Select option</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                          {formik.errors.zero_carbon_energy_tariff &&
                            formik.touched.zero_carbon_energy_tariff ? (
                            <span className="input-error-msg">
                              {formik.errors.zero_carbon_energy_tariff}
                            </span>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Electricity Section */}
            <div className="bg-lightgray-color mt-80 mb-80">
              <div className="row">
                <div className="col-lg-12">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="card card-par">
                      <h2>Electricity</h2>

                      <div className="form ">
                        <div className="row">
                          <div className="form-div">

                            <label htmlFor="electricity_usage_known">
                              <strong>4.</strong> Do you know how much
                              electricity was used at the home in the selected
                              year?<span>*</span>
                            </label>
                            <select
                              name="electricity_usage_known"
                              id="electricity_usage_known"
                              className={`form-control ${formik.errors.electricity_usage_known &&
                                formik.touched.electricity_usage_known
                                ? "invalidInput"
                                : ""
                                } `}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.electricity_usage_known}
                            >
                              <option value="">Select option</option>
                              <option value="Yes, for part of the year">Yes, for part of the year</option>
                              <option value="Yes, for the whole year">Yes, for the whole year</option>
                              <option value="No">No</option>
                            </select>

                            {formik.errors.electricity_usage_known &&
                              formik.touched.electricity_usage_known ? (
                              <span className="input-error-msg">
                                {formik.errors.electricity_usage_known}
                              </span>
                            ) : null}
                            <div className="row electricity-row">
                              <div className="col-md-6 electricity-col">
                                <input
                                  type="text"
                                  placeholder="Amount"
                                  name="electricity_usage_amount"
                                  id="electricity_usage_amount"
                                  className={`form-control ${formik.errors.electricity_usage_amount &&
                                    formik.touched.electricity_usage_amount
                                    ? "invalidInput"
                                    : ""
                                    } `}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.electricity_usage_amount}
                                />
                                {formik.errors.electricity_usage_amount &&
                                  formik.touched.electricity_usage_amount ? (
                                  <span className="input-error-msg">
                                    {formik.errors.electricity_usage_amount}
                                  </span>
                                ) : null}
                              </div>
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  placeholder="Kwh"
                                  name="electricity_usage_unit"
                                  id="electricity_usage_unit"
                                  className={`form-control ${formik.errors.electricity_usage_unit &&
                                    formik.touched.electricity_usage_unit
                                    ? "invalidInput"
                                    : ""
                                    } `}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.electricity_usage_unit}
                                />
                                {formik.errors.electricity_usage_unit &&
                                  formik.touched.electricity_usage_unit ? (
                                  <span className="input-error-msg">
                                    {formik.errors.electricity_usage_unit}
                                  </span>
                                ) : null}
                              </div>
                            </div>
                          </div>

                          {formik.values.electricity_usage_known === "Yes, for part of the year" && (
                            <div className="form-div">
                              <div class="form-label-div">
                                <label htmlFor="electricity_usage_time_period">
                                  <strong>4b. </strong> Please specify the time
                                  period for which you have electricity bills{" "}
                                  <span>*</span>{" "}
                                </label>
                              </div>
                              <input
                                type="text"
                                placeholder="2023-2024"
                                name="electricity_usage_time_period"
                                id="electricity_usage_time_period"
                                className={`form-control ${formik.errors.electricity_usage_time_period &&
                                  formik.touched.electricity_usage_time_period
                                  ? "invalidInput"
                                  : ""
                                  } `}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={
                                  formik.values.electricity_usage_time_period
                                }
                              />
                              {formik.errors.electricity_usage_time_period &&
                                formik.touched.electricity_usage_time_period ? (
                                <span className="input-error-msg">
                                  {formik.errors.electricity_usage_time_period}
                                </span>
                              ) : null}
                            </div>
                          )}

                          {formik.values.electricity_usage_known === "No" && (
                            <div className="form-div">
                              <div class="form-label-div">
                                <label htmlFor="">
                                  <strong>4b. </strong> Do you know what the annual spend was for electricity in the selected year? <span>*</span>{" "}
                                </label>
                                <p>
                                  (100% electricity generated from wind, water,
                                  solar, nuclear)
                                </p>
                              </div>
                              <select
                                name="electricity_annual_spend"
                                id="electricity_annual_spend"
                                className={`form-control ${formik.errors.electricity_annual_spend &&
                                  formik.touched.electricity_annual_spend
                                  ? "invalidInput"
                                  : ""
                                  } `}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.electricity_annual_spend}
                              >
                                <option value="">Select option</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </select>
                              {formik.errors.electricity_annual_spend &&
                                formik.touched.electricity_annual_spend ? (
                                <span className="input-error-msg">
                                  {formik.errors.electricity_annual_spend}
                                </span>
                              ) : null}
                              {formik.values.electricity_annual_spend !== "No" && (
                                <div className="row electricity-row">
                                  <div className="col-md-6">
                                    <input
                                      type="text"
                                      placeholder="Amount"
                                      name="electricity_annual_amount"
                                      id="electricity_annual_amount"
                                      className={`form-control ${formik.errors.electricity_annual_amount &&
                                        formik.touched.electricity_annual_amount
                                        ? "invalidInput"
                                        : ""
                                        } `}
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      value={formik.values.electricity_annual_amount}
                                    />
                                    {formik.errors.electricity_annual_amount &&
                                      formik.touched.electricity_annual_amount ? (
                                      <span className="input-error-msg">
                                        {formik.errors.electricity_annual_amount}
                                      </span>
                                    ) : null}
                                  </div>
                                  <div className="col-md-6">
                                    <select
                                      name="electricity_annual_unit"
                                      id="electricity_annual_unit"
                                      className={`form-control ${formik.errors.electricity_annual_unit &&
                                        formik.touched.electricity_annual_unit
                                        ? "invalidInput"
                                        : ""
                                        } `}
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      value={formik.values.electricity_annual_unit}
                                    >
                                      <option value="">Select option</option>
                                      <option value="Kwh">Kwh</option>
                                      <option value="Kwh">Kwh</option>
                                      <option value="Kwh">Kwh</option>
                                      <option value="Kwh">Kwh</option>
                                    </select>
                                    {formik.errors.electricity_annual_unit &&
                                      formik.touched.electricity_annual_unit ? (
                                      <span className="input-error-msg">
                                        {formik.errors.electricity_annual_unit}
                                      </span>
                                    ) : null}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                          <div className="form-div">
                            <div class="form-label-div">
                              <label htmlFor="electricity_supplier">
                                <strong>5. </strong> Who was your electricity
                                supplier? <span>*</span>{" "}
                              </label>
                              <p>
                                (100% electricity generated from wind, water,
                                solar, nuclear)
                              </p>
                            </div>
                            <input
                              type="text"
                              placeholder=""
                              name="electricity_supplier"
                              id="electricity_supplier"
                              className={`form-control ${formik.errors.electricity_supplier &&
                                formik.touched.electricity_supplier
                                ? "invalidInput"
                                : ""
                                } `}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.electricity_supplier}
                            />
                            {formik.errors.electricity_supplier &&
                              formik.touched.electricity_supplier ? (
                              <span className="input-error-msg">
                                {formik.errors.electricity_supplier}
                              </span>
                            ) : null}
                          </div>
                          <div className="form-div">
                            <div class="form-label-div">
                              <label htmlFor="on_site_renewable_energy">
                                <strong>6.</strong> Do you know if any of the
                                property's electricity was generated from onsite
                                renewable sources?<span>*</span>
                              </label>
                              <p>(wind turbines, solar panel etc)</p>
                            </div>
                            <select
                              name="on_site_renewable_energy"
                              id="on_site_renewable_energy"
                              className={`form-control ${formik.errors.on_site_renewable_energy &&
                                formik.touched.on_site_renewable_energy
                                ? "invalidInput"
                                : ""
                                } `}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.on_site_renewable_energy}
                            >
                              <option value="">Select option</option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </select>

                            {formik.errors.on_site_renewable_energy &&
                              formik.touched.on_site_renewable_energy ? (
                              <span className="input-error-msg">
                                {formik.errors.on_site_renewable_energy}
                              </span>
                            ) : null}
                          </div>

                          {formik.values.on_site_renewable_energy === "Yes" && (
                            <>
                              <div className="col-md-6 electricity-col">
                                <input
                                  type="text"
                                  name="on_site_renewable_amount"
                                  id="on_site_renewable_amount"
                                  className={`form-control ${formik.errors.on_site_renewable_amount &&
                                    formik.touched.on_site_renewable_amount
                                    ? "invalidInput"
                                    : ""
                                    } `}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.on_site_renewable_amount}
                                />
                                {formik.errors.on_site_renewable_amount &&
                                  formik.touched.on_site_renewable_amount ? (
                                  <span className="input-error-msg">
                                    {formik.errors.on_site_renewable_amount}
                                  </span>
                                ) : null}
                              </div>
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  name="on_site_renewable_unit"
                                  id="on_site_renewable_unit"
                                  className={`form-control ${formik.errors.electricity_usage_unit &&
                                    formik.touched.on_site_renewable_unit
                                    ? "invalidInput"
                                    : ""
                                    } `}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.on_site_renewable_unit}
                                />
                                {formik.errors.on_site_renewable_unit &&
                                  formik.touched.on_site_renewable_unit ? (
                                  <span className="input-error-msg">
                                    {formik.errors.on_site_renewable_unit}
                                  </span>
                                ) : null}
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gas Section */}

            <div className="bg-lightgray-color">
              <div className="row">
                <div className="col-lg-12">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="card card-par">
                      <h2>Gas</h2>
                      <div className="form ">
                        <div className="row">
                          <div className="form-div">
                            <div class="form-label-div">
                              <label htmlFor="natural_gas_usage_known">
                                <strong>7.</strong> Do you know how much natural
                                gas was used at the home in the selected year?
                                <span>*</span>
                              </label>
                              <p>(mains supply)</p>
                            </div>
                            <select
                              name="natural_gas_usage_known"
                              id="natural_gas_usage_known"
                              className={`form-control ${formik.errors.natural_gas_usage_known &&
                                formik.touched.natural_gas_usage_known
                                ? "invalidInput"
                                : ""
                                } `}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.natural_gas_usage_known}
                            >
                              <option value="">Select option</option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </select>
                            {formik.errors.natural_gas_usage_known &&
                              formik.touched.natural_gas_usage_known ? (
                              <span className="input-error-msg">
                                {formik.errors.natural_gas_usage_known}
                              </span>
                            ) : null}
                            <div className="row electricity-row">
                              <div className="col-md-6 electricity-col">
                                <input
                                  type="text"
                                  placeholder="Amount"
                                  name="natural_gas_usage_amount"
                                  id="natural_gas_usage_amount"
                                  className={`form-control ${formik.errors.natural_gas_usage_amount &&
                                    formik.touched.natural_gas_usage_amount
                                    ? "invalidInput"
                                    : ""
                                    } `}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.natural_gas_usage_amount}
                                />
                                {formik.errors.natural_gas_usage_amount &&
                                  formik.touched.natural_gas_usage_amount ? (
                                  <span className="input-error-msg">
                                    {formik.errors.natural_gas_usage_amount}
                                  </span>
                                ) : null}
                              </div>
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  placeholder="Kwh"
                                  name="natural_gas_usage_unit"
                                  id="natural_gas_usage_unit"
                                  className={`form-control ${formik.errors.natural_gas_usage_unit &&
                                    formik.touched.natural_gas_usage_unit
                                    ? "invalidInput"
                                    : ""
                                    } `}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.natural_gas_usage_unit}
                                />
                                {formik.errors.natural_gas_usage_unit &&
                                  formik.touched.natural_gas_usage_unit ? (
                                  <span className="input-error-msg">
                                    {formik.errors.natural_gas_usage_unit}
                                  </span>
                                ) : null}
                              </div>
                            </div>
                          </div>

                          <div className="form-div">
                            <label htmlFor="natural_gas_usage_time_period">
                              <strong>7b. </strong> Please specify the time
                              period for which you have gas bills <span>*</span>{" "}
                            </label>
                            <input
                              type="text"
                              placeholder="Kwh"
                              name="natural_gas_usage_time_period"
                              id="natural_gas_usage_time_period"
                              className={`form-control ${formik.errors.natural_gas_usage_time_period &&
                                formik.touched.natural_gas_usage_time_period
                                ? "invalidInput"
                                : ""
                                } `}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={
                                formik.values.natural_gas_usage_time_period
                              }
                            />
                            {formik.errors.natural_gas_usage_time_period &&
                              formik.touched.natural_gas_usage_time_period ? (
                              <span className="input-error-msg">
                                {formik.errors.natural_gas_usage_time_period}
                              </span>
                            ) : null}
                          </div>
                          <div className="form-div">
                            <div class="form-label-div">
                              <label htmlFor="gas_consumption_offset">
                                <strong>8.</strong> Has your gas consumption been
                                offset by your supplier?<span>*</span>
                              </label>
                              <p>(wind turbines, solar panel etc)</p>
                            </div>
                            <select
                              name="gas_consumption_offset"
                              id="gas_consumption_offset"
                              className={`form-control ${formik.errors.gas_consumption_offset &&
                                formik.touched.gas_consumption_offset
                                ? "invalidInput"
                                : ""
                                } `}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.gas_consumption_offset}
                            >
                              <option value="">Select option</option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </select>
                            {formik.errors.gas_consumption_offset &&
                              formik.touched.gas_consumption_offset ? (
                              <span className="input-error-msg">
                                {formik.errors.gas_consumption_offset}
                              </span>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Other energy Section */}

            <div className="bg-lightgray-color mt-80 mb-80">
              <div className="row">
                <div className="col-lg-12">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="card card-par">
                      <h2>Other energy</h2>

                      <div className="form ">
                        <div className="row">
                          <div className="form-div">
                            <div class="form-label-div">
                              <label htmlFor="oil_usage_known">
                                <strong>9.</strong> Do you know how much oil was
                                used at the home last year?<span>*</span>
                              </label>
                              <p>(mains supply)</p>
                            </div>
                            <select
                              name="oil_usage_known"
                              id="oil_usage_known"
                              className={`form-control ${formik.errors.oil_usage_known &&
                                formik.touched.oil_usage_known
                                ? "invalidInput"
                                : ""
                                } `}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.oil_usage_known}
                            >
                              <option value="">Select option</option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </select>
                            {formik.errors.oil_usage_known &&
                              formik.touched.oil_usage_known ? (
                              <span className="input-error-msg">
                                {formik.errors.oil_usage_known}
                              </span>
                            ) : null}
                            <div className="row electricity-row">
                              <div className="col-md-6 electricity-col">
                                <input
                                  type="text"
                                  placeholder="Amount"
                                  name="oil_usage_amount"
                                  id="oil_usage_amount"
                                  className={`form-control ${formik.errors.oil_usage_amount &&
                                    formik.touched.oil_usage_amount
                                    ? "invalidInput"
                                    : ""
                                    } `}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.oil_usage_amount}
                                />
                                {formik.errors.oil_usage_amount &&
                                  formik.touched.oil_usage_amount ? (
                                  <span className="input-error-msg">
                                    {formik.errors.oil_usage_amount}
                                  </span>
                                ) : null}
                              </div>
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  placeholder="Tonnes"
                                  name="oil_usage_unit"
                                  id="oil_usage_unit"
                                  className={`form-control ${formik.errors.oil_usage_unit &&
                                    formik.touched.oil_usage_unit
                                    ? "invalidInput"
                                    : ""
                                    } `}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.oil_usage_unit}
                                />
                                {formik.errors.oil_usage_unit &&
                                  formik.touched.oil_usage_unit ? (
                                  <span className="input-error-msg">
                                    {formik.errors.oil_usage_unit}
                                  </span>
                                ) : null}
                              </div>
                            </div>
                          </div>

                          <div className="form-div">
                            <label htmlFor="wood_usage_known">
                              <strong>10. </strong> Do you know how much wood
                              was used at the home in the selected year?{" "}
                              <span>*</span>{" "}
                            </label>

                            <select
                              name="wood_usage_known"
                              id="wood_usage_known"
                              className={`form-control ${formik.errors.wood_usage_known &&
                                formik.touched.wood_usage_known
                                ? "invalidInput"
                                : ""
                                } `}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.wood_usage_known}
                            >
                              <option value="">Select option</option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </select>
                            {formik.errors.wood_usage_known &&
                              formik.touched.wood_usage_known ? (
                              <span className="input-error-msg">
                                {formik.errors.wood_usage_known}
                              </span>
                            ) : null}
                            <div className="row electricity-row">
                              <div className="col-md-6 electricity-col">
                                <input
                                  type="text"
                                  placeholder="Amount"
                                  name="wood_usage_amount"
                                  id="wood_usage_amount"
                                  className={`form-control ${formik.errors.wood_usage_amount &&
                                    formik.touched.wood_usage_amount
                                    ? "invalidInput"
                                    : ""
                                    } `}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.wood_usage_amount}
                                />
                                {formik.errors.wood_usage_amount &&
                                  formik.touched.wood_usage_amount ? (
                                  <span className="input-error-msg">
                                    {formik.errors.wood_usage_amount}
                                  </span>
                                ) : null}
                              </div>
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  placeholder="Tonnes"
                                  name="wood_usage_unit"
                                  id="wood_usage_unit"
                                  className={`form-control ${formik.errors.wood_usage_unit &&
                                    formik.touched.wood_usage_unit
                                    ? "invalidInput"
                                    : ""
                                    } `}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.wood_usage_unit}
                                />
                                {formik.errors.wood_usage_unit &&
                                  formik.touched.wood_usage_unit ? (
                                  <span className="input-error-msg">
                                    {formik.errors.wood_usage_unit}
                                  </span>
                                ) : null}
                              </div>
                            </div>
                          </div>

                          <div className="form-div">
                            <label htmlFor="coal_usage_known">
                              <strong>11. </strong> Do you know how much coal
                              was used at the home in the selected year?{" "}
                              <span>*</span>{" "}
                            </label>

                            <select
                              name="coal_usage_known"
                              id="coal_usage_known"
                              className={`form-control ${formik.errors.coal_usage_known &&
                                formik.touched.coal_usage_known
                                ? "invalidInput"
                                : ""
                                } `}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.coal_usage_known}
                            >
                              <option value="">Select option</option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </select>
                            {formik.errors.coal_usage_known &&
                              formik.touched.coal_usage_known ? (
                              <span className="input-error-msg">
                                {formik.errors.coal_usage_known}
                              </span>
                            ) : null}
                            <div className="row electricity-row">
                              <div className="col-md-6 electricity-col">
                                <input
                                  type="text"
                                  placeholder="Amount"
                                  name="coal_usage_amount"
                                  id="coal_usage_amount"
                                  className={`form-control ${formik.errors.coal_usage_amount &&
                                    formik.touched.coal_usage_amount
                                    ? "invalidInput"
                                    : ""
                                    } `}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.coal_usage_amount}
                                />
                                {formik.errors.coal_usage_amount &&
                                  formik.touched.coal_usage_amount ? (
                                  <span className="input-error-msg">
                                    {formik.errors.coal_usage_amount}
                                  </span>
                                ) : null}
                              </div>
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  placeholder="Tonnes"
                                  name="coal_usage_unit"
                                  id="coal_usage_unit"
                                  className={`form-control ${formik.errors.coal_usage_unit &&
                                    formik.touched.coal_usage_unit
                                    ? "invalidInput"
                                    : ""
                                    } `}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.coal_usage_unit}
                                />
                                {formik.errors.coal_usage_unit &&
                                  formik.touched.coal_usage_unit ? (
                                  <span className="input-error-msg">
                                    {formik.errors.coal_usage_unit}
                                  </span>
                                ) : null}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-div">
                          <label htmlFor="other_energy_usage">
                            <strong>12. </strong> Other than for heating, was
                            there any other energy used at the property{" "}
                            <span>*</span>{" "}
                          </label>
                          <select
                            name="other_energy_usage"
                            id="other_energy_usage"
                            className={`form-control ${formik.errors.other_energy_usage &&
                              formik.touched.other_energy_usage
                              ? "invalidInput"
                              : ""
                              } `}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.other_energy_usage}
                          >
                            <option value="">Select option</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                          {formik.errors.other_energy_usage &&
                            formik.touched.other_energy_usage ? (
                            <span className="input-error-msg">
                              {formik.errors.other_energy_usage}
                            </span>
                          ) : null}
                        </div>
                        {formik.values.other_energy_usage === "Yes" && (
                          <div className="">
                            <input
                              type="text"
                              placeholder="What energy and the amount used"
                              name="other_energy_which_and_amount"
                              id="other_energy_which_and_amount"
                              className={`form-control ${formik.errors.other_energy_which_and_amount &&
                                formik.touched.other_energy_which_and_amount
                                ? "invalidInput"
                                : ""
                                } `}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.other_energy_usage}
                            />
                            {formik.errors.other_energy_which_and_amount &&
                              formik.touched.other_energy_which_and_amount ? (
                              <span className="input-error-msg">
                                {formik.errors.other_energy_which_and_amount}
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

            {/* Additional information Section */}
            <div className="sub-heading">
              <h2>Additional Information</h2>
            </div>
            <div className="bg-lightgray-color additional-box-div-main">
              <div className="row">
                <div className="col-lg-12">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="card">
                      <div className="form ">
                        <div className="row">
                          <div class="Additional-box title-p">
                            <p>
                              This section is optional, however it will allow us
                              to make your carbon footprint more complete and
                              your recommendations more specific.
                            </p>
                          </div>
                          <div className="col-lg-7 additional-form-outer">
                            <div className="form-div">
                              <div class="form-label-div">
                                <label htmlFor="first_name">
                                  <strong>13.</strong> Does the property have any
                                  of the folllowing?
                                </label>
                                <p>(mains supply)</p>
                              </div>
                              <div className="sub-btn">
                                <div class="check-input">
                                  <input
                                    type="checkbox"
                                    id="living_with_partner_yes"
                                    name="property_features"
                                    value="Yes"
                                  />
                                  <label htmlFor="">
                                    Food Waste Collection
                                  </label>
                                </div>
                                <div class="check-input">
                                  <input
                                    type="checkbox"
                                    id="living_with_partner_yes"
                                    name="property_features"
                                    value="Yes"
                                  />
                                  <label htmlFor="">
                                    Plastic/Glass/Metal/Paper recycling services
                                    provided
                                  </label>
                                </div>
                                <div class="check-input">
                                  <input
                                    type="checkbox"
                                    id="living_with_partner_no"
                                    name="living_with_partner"
                                    value="No"
                                  />
                                  <label htmlFor="">Home Composting</label>
                                </div>

                                <div class="check-input">
                                  <input
                                    type="checkbox"
                                    id="living_with_partner_no"
                                    name="living_with_partner"
                                    value="No"
                                  />
                                  <label htmlFor="">Don't know</label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-div">
                            <label htmlFor="house_type">
                              <strong>14. </strong>What kind of house do you
                              live in?{" "}
                            </label>
                            <select
                              name="house_type"
                              id="house_type"
                              className={`form-control`}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.house_type}
                            >
                              <option value="">Select option</option>
                              <option value="">Select option</option>
                              <option value="">Select option</option>
                            </select>
                          </div>
                          <div className="form-div">
                            <label htmlFor="construction_material">
                              <strong>15. </strong>What is the primary
                              construction material?{" "}
                            </label>
                            <select
                              name="construction_material"
                              id="construction_material"
                              className={`form-control`}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.construction_material}
                            >
                              <option value="">Select option</option>
                              <option value="">Select option</option>
                              <option value="">Select option</option>
                            </select>
                          </div>
                          <div className="form-div">
                            <label htmlFor="year_built">
                              <strong>16. </strong>When was it built?{" "}
                            </label>
                            <select
                              name="year_built"
                              id="year_built"
                              className={`form-control ${formik.errors.year_built &&
                                formik.touched.year_built
                                ? "invalidInput"
                                : ""
                                } `}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.year_built}
                            >
                              <option value="">Select option</option>
                              {years.map((year, index) => (
                                <option key={index} value={year}>
                                  {year}
                                </option>
                              ))}
                            </select>
                            {formik.errors.year_built &&
                              formik.touched.year_built ? (
                              <span className="input-error-msg">
                                {formik.errors.year_built}
                              </span>
                            ) : null}
                          </div>
                          <div className="form-div">
                            <div class="form-label-div">
                              <label htmlFor="winter_temperature">
                                <strong>17. </strong>What temprature was the home
                                kept in the winter?
                              </label>
                              <p>(Use slider below)</p>
                            </div>
                            <input
                              type="range"
                              className={`custom-range`}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            // value={formik.values.winter_temperature}
                            />
                            <div className="slider-labels">
                              <span>{"< 14%"}</span>
                              <span>{"14% - 17%"}</span>
                              <span>{"18% - 21%"}</span>
                              <span>{"> 21%"}</span>
                              <span>{"Don't know"}</span>
                            </div>
                          </div>
                          <div className="form-div additional-form-outer">
                            <label htmlFor="additional_property_features">
                              <strong>18. </strong>Does the property have any of
                              the following?{" "}
                            </label>
                            <div className="sub-btn">
                              <div class="check-input">
                                <input
                                  type="checkbox"
                                  id="living_with_partner_yes"
                                  name="living_with_partner"
                                  value="Yes"
                                />
                                <label htmlFor="">Swimming Pool</label>
                                <input
                                  type="checkbox"
                                  id="living_with_partner_no"
                                  name="living_with_partner"
                                  value="No"
                                />
                                <label htmlFor="">Sauna</label>
                              </div>
                              <div class="check-input">
                                <input
                                  type="checkbox"
                                  id="living_with_partner_no"
                                  name="living_with_partner"
                                  value="No"
                                />
                                <label htmlFor="">Solarium</label>
                                <input
                                  type="checkbox"
                                  id="living_with_partner_no"
                                  name="living_with_partner"
                                  value="No"
                                />
                                <label htmlFor="">Hot Tub</label>
                              </div>
                              <div class="check-input">
                                <input
                                  type="checkbox"
                                  id="living_with_partner_no"
                                  name="living_with_partner"
                                  value="No"
                                />
                                <label htmlFor="">Server Room</label>
                              </div>

                              {/* <input
                                  type="checkbox"
                                  id="living_with_partner_no"
                                  name="living_with_partner"
                                  value="No"
                                />
                                <label htmlFor="">Don't know</label> */}
                            </div>
                          </div>
                          <div className="form-div">
                            <label htmlFor="live_in_staff">
                              <strong>19. </strong>Does the property have any
                              live-in staff?{" "}
                            </label>
                            <select
                              name="live_in_staff"
                              id="live_in_staff"
                              className={`form-control ${formik.errors.live_in_staff &&
                                formik.touched.live_in_staff
                                ? "invalidInput"
                                : ""
                                } `}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.live_in_staff}
                            >
                              <option value="">Select option</option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </select>
                          </div>
                          <div className="form-div">
                            <label htmlFor="other_dependants">
                              <strong>20. </strong>Do you have any renovations
                              planned this year or next year?{" "}
                            </label>
                            <div className="col-lg-6">
                              <div className="sub-btn">
                                <input
                                  type="radio"
                                  id="living_with_partner_yes"
                                  name="living_with_partner"
                                  value="Yes"
                                />
                                <label>Yes</label>
                                <input
                                  type="radio"
                                  id="living_with_partner_no"
                                  name="living_with_partner"
                                  value="No"
                                />
                                <label htmlFor="living_with_partner_no">
                                  No
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form-div">
                            <label htmlFor="other_dependants">
                              <strong>21. </strong>Does the property have any
                              significant land attached?{" "}
                            </label>
                            <div className="col-lg-6">
                              <div className="sub-btn">
                                <input
                                  type="radio"
                                  id="living_with_partner_yes"
                                  name="living_with_partner"
                                  value="Yes"
                                />
                                <label>Yes</label>
                                <input
                                  type="radio"
                                  id="living_with_partner_no"
                                  name="living_with_partner"
                                  value="No"
                                />
                                <label htmlFor="living_with_partner_no">
                                  No
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form-div">
                            <label htmlFor="other_dependants">
                              <strong>22. </strong>Please provide some details
                              on the land, and any livestock?{" "}
                            </label>
                            <textarea
                              id="forest_or_farmland_details"
                              name="forest_or_farmland_details"
                              rows="6"
                              className={`form-control`}
                              cols="50"
                              maxLength={1000}
                            ></textarea>
                          </div>
                          <div className="form-div">
                            <label htmlFor="other_dependants">
                              <strong>23. </strong>Is there anything else you
                              would like to tell us? For Example, What measures
                              have you taken to improve the sustainability of
                              you home? Have you had any challenges in doing so?
                              Has the building has been developed to meet a
                              particular environmental standard (Passivhaus
                              standards etc) ? Do you use a heat pump?{" "}
                            </label>
                            <textarea
                              id="forest_or_farmland_details"
                              name="forest_or_farmland_details"
                              rows="6"
                              className={`form-control`}
                              cols="50"
                              maxLength={1000}
                            ></textarea>
                          </div>
                          <section class="Additional">
                            <div class="container">
                              <div class="row">
                                <div class="col-lg-12">

                                  <div class="Additional-box">
                                    <div class="Additional-bottom-btn">
                                      <button class="btn" type="submit">
                                        Save progress{" "}
                                      </button>
                                      <button class="btn" type="button">
                                        Continue
                                      </button>

                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </>
  );
};

export default Homeform;
