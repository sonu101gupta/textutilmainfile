import React from 'react';

const Contact = () => {
  const statesInIndia = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
  ];

  return (
    <div className="contact-page d-flex justify-content-center align-items-center vh-100">
      <div className="container">
        <h1 className="contact-heading text-center mb-5">Contact Us</h1>
        <form className="needs-validation" noValidate>
          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="validationCustom01" className="form-label">First name</label>
              <input type="text" className="form-control" id="validationCustom01" required />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4">
              <label htmlFor="validationCustom02" className="form-label">Last name</label>
              <input type="text" className="form-control" id="validationCustom02"  required />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4">
              <label htmlFor="validationCustomUsername" className="form-label">Username</label>
              <div className="input-group has-validation">
                <span className="input-group-text" id="inputGroupPrepend">@</span>
                <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                <div className="invalid-feedback">Please choose a username.</div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="validationCustom03" className="form-label">City</label>
              <input type="text" className="form-control" id="validationCustom03" required />
              <div className="invalid-feedback">Please provide a valid city.</div>
            </div>
            <div className="col-md-3">
              <label htmlFor="validationCustom04" className="form-label">State</label>
              <select className="form-select" id="validationCustom04" required>
                <option disabled value="">Choose...</option>
                {statesInIndia.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
              <div className="invalid-feedback">Please select a valid state.</div>
            </div>
            <div className="col-md-3">
              <label htmlFor="validationCustom05" className="form-label">Zip</label>
              <input type="text" className="form-control" id="validationCustom05" required />
              <div className="invalid-feedback">Please provide a valid zip.</div>
            </div>
          </div>
          <div className="form-check mb-3">
            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
            <label className="form-check-label" htmlFor="invalidCheck">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedback">You must agree before submitting.</div>
          </div>
          <div className="text-center">
            <button className="btn btn-primary" type="submit">Submit form</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
