import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { defineCurrencySign } from '../../helperFunctions';
import ContractDetails from './contractDetails';

class ContractRepo extends PureComponent {
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
          Contract Report
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
            <tr className="table-dates">
              <td colSpan={2}>{data.account.name}</td>
              <td >{`${defineCurrencySign(data.account.currency)} ${data.account.total.toFixed(2)}`}</td>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td colSpan={3}>
                <ContractDetails contract={data.data} currency={data.account.currency}/>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

ContractRepo.propTypes = {
  data: PropTypes.object,
};

export default ContractRepo;