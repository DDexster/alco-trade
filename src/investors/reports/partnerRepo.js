import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import InvestorDetails from './investorDetails';

class PartnerRepo extends PureComponent {
  render() {
    const { data } = this.props;
    if (!data) {
      return (
        <div className={'d-flex justify-content-center'} style={{ marginTop: 50 }}>No data available!</div>
      );
    }
    return (
      <div className="card col-md-12 repo-card">
        <h5 className="card-header ">
          Partners Report
        </h5>
        <div className="card-body">
          <table className="table table-sm repo-table">
            <thead>
            <tr className="table-dates">
              <td colSpan="3">{data.period}</td>
            </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  { data.partner.map((part, index) => <InvestorDetails key={index} partner={part}/>) }
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

PartnerRepo.propTypes = {
  data: PropTypes.object,
};

export default PartnerRepo;
