import * as Yup from 'yup'
export const formvalidation = Yup.object().shape({
    // General Form //
    first_name: Yup.string().min(2).max(25).required("Please enter your first name"),
    last_name: Yup.string().min(2).max(25).required("Please enter your last name"),
    email: Yup.string().matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Please enter valid email address').required('Please enter your email'),
    emailConfirmation: Yup.string().email().required('Email Confirmation is required').oneOf([Yup.ref('email'), null], 'Email Confirmation must match with email'),
    password: Yup.string().min(6).required("Please enter your password"),
    confirm_password: Yup.string().required().oneOf([Yup.ref("password"), null], "Confirm password must match with password"),
    year_of_birth: Yup.string().required("Please enter your birth year"),
    country_of_residence: Yup.string().required("Please enter your residence country'name"),
    num_of_homes: Yup.string().required("Please select number of your homes"),
    first_home_country: Yup.string().required("Please select your first home country'name"),
    second_home_country: Yup.string().required("Please select your second home country'name"),
    third_home_country: Yup.string().required("Please select your third home country'name"),
    fourth_home_country: Yup.string().required("Please select your fourth home country'name"),
    fifth_home_country: Yup.string().required("Please select your fifth home country'name"),
    living_with_partner: Yup.string().required("Please select one option"),
    num_of_children_under_18: Yup.string().required("This field is required"),
    other_dependants: Yup.string().required("This field is required"),
    other_dependants_details: Yup.string().required("This field is required"),
    forest_or_farmland_details: Yup.string().min(5, "Min length must be atleast 5 character").max(1000, "Max length must be 1000 character"),


    // Home Form //
    location: Yup.string().required("Please enter your home location"),
    heating_type: Yup.string().required("please select atleast one option"),
    // // heating_type: Yup.array().when([], {
    // //     is: (array) => !array || array.length === 0,
    // //     then: Yup.array().min(1, 'Select at least one heating type'),
    // //   }),
    zero_carbon_energy_tariff: Yup.string().required("please select one option"),
    electricity_usage_known: Yup.string().required("please select one option"),
    // electricity_usage_amount: Yup.number().when('electricity_usage_known', {
    //     is: 'Yes',
    //     then: Yup.number().required('Electricity usage amount is required'),
    // }),
    // electricity_usage_unit: Yup.string().when('electricity_usage_known', {
    //     is: 'Yes',
    //     then: Yup.string().required('Electricity usage unit is required'),
    // }),
    // electricity_usage_time_period: Yup.string().when('electricity_usage_known', {
    //     is: 'Yes',
    //     then: Yup.string().required('Electricity usage time period is required'),
    // }),
    // electricity_supplier: Yup.string().when('electricity_usage_known', {
    //     is: 'Yes',
    //     then: Yup.string().required('Electricity supplier is required'),
    // }),
    // on_site_renewable_energy: Yup.string().required(),
    // on_site_renewable_amount: Yup.number().when('on_site_renewable_energy', {
    //     is: 'Yes',
    //     then: Yup.number().required('On-site renewable amount is required'),
    // }),
    // on_site_renewable_unit: Yup.string().when('on_site_renewable_energy', {
    //     is: 'Yes',
    //     then: Yup.string().required('On-site renewable unit is required'),
    // }),
    // natural_gas_usage_known: Yup.string().required('Natural gas usage known is required'),
    // natural_gas_usage_amount: Yup.number().when('natural_gas_usage_known', {
    //     is: 'Yes',
    //     then: Yup.number().required('Natural gas usage amount is required'),
    // }),
    // natural_gas_usage_unit: Yup.string().when('natural_gas_usage_known', {
    //     is: 'Yes',
    //     then: Yup.string().required('Natural gas usage unit is required'),
    // }),
    // natural_gas_usage_time_period: Yup.string().when('natural_gas_usage_known', {
    //     is: 'Yes',
    //     then: Yup.string().required('Natural gas usage time period is required'),
    // }),
    // gas_consumption_offset: Yup.string(),
    // oil_usage_known: Yup.string(),
    // oil_usage_amount: Yup.number().when('oil_usage_known', {
    //     is: 'Yes',
    //     then: Yup.number().required('Oil usage amount is required'),
    // }),
    // oil_usage_unit: Yup.string().when('oil_usage_known', {
    //     is: 'Yes',
    //     then: Yup.string().required('Oil usage unit is required'),
    // }),
    // wood_usage_known: Yup.string(),
    // wood_usage_amount: Yup.number().when('wood_usage_known', {
    //     is: 'Yes',
    //     then: Yup.number().required('Wood usage amount is required'),
    // }),
    // wood_usage_unit: Yup.string().when('wood_usage_known', {
    //     is: 'Yes',
    //     then: Yup.string().required('Wood usage unit is required'),
    // }),
    // coal_usage_known: Yup.string(),
    // coal_usage_amount: Yup.number().when('coal_usage_known', {
    //     is: 'Yes',
    //     then: Yup.number().required('Coal usage amount is required'),
    // }),
    // coal_usage_unit: Yup.string().when('coal_usage_known', {
    //     is: 'Yes',
    //     then: Yup.string().required('Coal usage unit is required'),
    // }),
    // other_energy_usage: Yup.string().required('Other Energy Usage is required'),
    // other_energy_which_and_amount: Yup.string().required('Other Energy Details are required'),
    // property_features: Yup.string().required('Property Features are required'),
    // house_type: Yup.string().required('House Type is required'),
    // construction_material: Yup.string().required('Construction Material is required'),
    // year_built: Yup.string().required('Year Built is required'),
    // winter_temperature: Yup.string().required('Winter Temperature is required'),
    // additional_property_features: Yup.string().required('Additional Property Features are required'),
    // live_in_staff: Yup.string().required('Living Staff details are required'),
    // planned_renovations: Yup.string().required('Planned Renovations details are required'),
    // significant_land: Yup.string().required('Significant Land details are required'),
    // land_details: Yup.string().required('Land Details are required'),
    // other_details: Yup.string().required('Other Details are required'),
});


