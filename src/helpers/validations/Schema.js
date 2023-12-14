import * as Yup from 'yup'
export const formvalidation = Yup.object({
    first_name: Yup.string().min(2).max(25).required("Please enter your first name jjgiujhnbwj"),
    last_name: Yup.string().min(2).max(25).required("Please enter your last name"),
    email: Yup.string().email().matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/).required("Please enter your email"),
    emailConfirmation: Yup.string().email().required().oneOf([Yup.ref("email"), null], "email must match"),
    password: Yup.string().min(6).required("Please enter your password"),
    confirm_password: Yup.string().required().oneOf([Yup.ref("password"), null], "Password must match"),
    year_of_birth: Yup.string().required("Please enter the date year"),
    primaryAddress: Yup.string().required("This field is required"),
    selectedCountry: Yup.string().required("Please select the residence"),
    num_of_homes: Yup.string().required("Please select the no. of home"),
    first_home_country: Yup.string().required("Please enter first home country name"),
    second_home_country: Yup.string().required("Please enter second home country name"),
    third_home_country: Yup.string().required("Please enter third home country name"),
    fourth_home_country: Yup.string().required("Please enter fourth home country name"),
    fifth_home_country: Yup.string().required("Please enter fifth home country name"),
    living_with_partner: Yup.string().required("Please select one option"),
    num_of_children_under_18: Yup.string().required("This field is required"),
    other_dependants: Yup.string().required("This field is required"),
    other_dependants_details: Yup.string().required("This field is required"),
    forest_or_farmland_details: Yup.string().required("This field is required"),
    suggestion: Yup.string().required("This textarea is required"),

})

