import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AccountDetails from './accountDetails';

class InvestorRepo extends PureComponent {
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
          Investor Report
        </h5>
        <div className="card-body">
          <table className="table table-sm repo-table">
            <thead>
            <tr className="table-dates">
              <td colSpan="3">{data.period}</td>
            </tr>
            <tr className="table-dates">
              <td colSpan="3">{data.investorName}</td>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td colSpan={2}>
                { !!data && !!data.data.length && data.data.map((acc, index) => <AccountDetails account={acc} key={index} />)}
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

InvestorRepo.propTypes = {
  data: PropTypes.object,
};

export default InvestorRepo;