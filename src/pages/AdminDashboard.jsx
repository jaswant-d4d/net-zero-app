import React, { useState } from "react";
import form_user from "../assets/images/form_user.svg";
import { useSelector } from "react-redux";
import Pagination from "../components/Pagination";
import arrowImg from "../assets/images/arrow_img.svg"

const AdminDashboard = () => {
  const isLoading = useSelector((state) => state.users.isLoading);

  const [disabled, setDisabled] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const serialNo = (currentPage - 1) * itemsPerPage;

  const tableData = [
    { name: "My form name", email: "myfullnameexample@emailaddress.co.uk" },
    { name: "My form name1", email: "myfullnameexample@emailaddress.co.uk" },
    { name: "My form name2", email: "myfullnameexample@emailaddress.co.uk" },
    { name: "My form name3", email: "myfullnameexample@emailaddress.co.uk" },
    { name: "My form name4", email: "myfullnameexample@emailaddress.co.uk" },
    { name: "My form name5", email: "myfullnameexample@emailaddress.co.uk" },
    { name: "My form name6", email: "myfullnameexample@emailaddress.co.uk" },
    { name: "My form name7", email: "myfullnameexample@emailaddress.co.uk" },
    { name: "My form name8", email: "myfullnameexample@emailaddress.co.uk" },
    { name: "My form name9", email: "myfullnameexample@emailaddress.co.uk" },
    { name: "My form name10", email: "myfullnameexample@emailaddress.co.uk" },
  ]

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tableData?.slice(indexOfFirstItem, indexOfLastItem);

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
                    <label htmlFor="text">Your name</label>
                    <input type="text" name="" placeholder="First name" />
                  </div>
                  <div class="form-div">
                    <label htmlFor="email">Your email address</label>
                    <input type="email" name="" placeholder="Email address" />
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="information-box">
                  <div class="form-div">
                    <label htmlFor="text">Last name</label>
                    <input type="text" name="" placeholder="Last name" />
                  </div>
                  <div class="form-div">
                    <label htmlFor="paddword">Your password</label>
                    <input type="password" name="" placeholder="************" />
                  </div>
                </div>
              </div>
              <button class="submit-btn " type="submit">
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
                <img src={form_user} alt="" />
                <h2>Submissions</h2>
              </div>
              <div className="submissions-header-btn">
                <button class="submit-btn " type="submit">
                  Create new user
                </button>
                <button class="submit-btn " type="submit">
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
                    Upload CSV form
                  </button>
                </div>
              </form>


              <table class="customers" style={{ borderRadius: '20px' }}>
                <tr style={{ borderRadius: '20px' }}>
                  <th style={{ width: '25%' }}>Form name</th>
                  <th style={{ width: '50%' }}>User email address</th>
                  <th style={{ width: '25%' }}></th>
                </tr>
                <tbody>
                  {isLoading ? (<div className="text-center">loading...</div>) :
                    currentItems?.length > 0 ? currentItems?.map((form, index) => (
                      <tr key={index}>
                        <td>{form.name}</td>
                        <td>{form.email}</td>
                        <td className="d-flex justify-content-between">
                          <div className="d-flex justify-content-between">
                            View form <img src={arrowImg} width={30} height={30} /></div>
                          <div>  <img src={arrowImg} width={30} height={30} /></div>
                        </td>
                      </tr>
                    )) : (<div className="text-center">Data not found</div>)}
                </tbody>
              </table>

              {!isLoading && tableData?.length > 0 && (<Pagination dataLength={tableData?.length} itemsPerPage={itemsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />)}

            </div>
          </div>
        </div>
      </section>

    </>
  );
};
export default AdminDashboard;
