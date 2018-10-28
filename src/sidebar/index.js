import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
      <nav className="nav flex-column nav-pills justify-content-center align-items-center sidebar-container d-md-flex collapse show" id="sidebar-toggle">
        <button type="button" className="btn btn-secondary" onClick={() => "javascript: btnClick('dashboard');"}>Dashboard</button>
        <button type="button" className="btn btn-secondary" onClick={() => "javascript: btnClick('contracts');"}>Contracts</button>
        <div className="btn-group-vertical">
          <button type="button" className="btn btn-secondary" onClick={() => "javascript: btnClick('investors');"}><strong>Investors</strong></button>
          <button type="button" className="btn btn-outline-secondary" onClick={() => "javascript: btnClick('inv_reports');"}>Reports</button>
          <button type="button" className="btn btn-outline-secondary" onClick={() => "javascript: btnClick('inv_invoices');"}>Invoices</button>
          <button type="button" className="btn btn-outline-secondary" onClick={() => "javascript: btnClick('inv_payments');"}>Payments</button>
        </div>
        <div className="btn-group-vertical">
          <button type="button" className="btn btn-secondary" onClick={() => "javascript: btnClick('partners');"}><strong>Partners</strong></button>
          <button type="button" className="btn btn-outline-secondary" onClick={() => "javascript: btnClick('par_reports');"}>Reports</button>
          <button type="button" className="btn btn-outline-secondary" onClick={() => "javascript: btnClick('par_invoices');"}>Invoices</button>
          <button type="button" className="btn btn-outline-secondary" onClick={() => "javascript: btnClick('par_payments');"}>Payments</button>
        </div>
        <div className="btn-group-vertical">
          <button type="button" className="btn btn-secondary" onClick={() => "javascript: btnClick('service');"}><strong>Misc</strong></button>
          <button type="button" className="btn btn-outline-secondary" onClick={() => "javascript: btnClick('srv_magics');"}>Magics</button>
          <button type="button" className="btn btn-outline-secondary" onClick={() => "javascript: btnClick('srv_deals');"}>Deals</button>
          <button type="button" className="btn btn-outline-secondary" onClick={() => "javascript: btnClick('srv_rates');"}>Conversion Rates</button>
          <button type="button" className="btn btn-outline-secondary" onClick={() => "javascript: btnClick('srv_investors');"}>Investors</button>
          <button type="button" className="btn btn-outline-secondary" onClick={() => "javascript: btnClick('srv_partners');"}>Partners</button>
        </div>
      </nav>
    );
  }
}

export default Sidebar;