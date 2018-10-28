import React from 'react';
import PropTypes from 'prop-types';

const ReportsForm = props => {
  const { values: { partner, investor, account, contract, startDate, endDate } } = props;
  return (
    <div className="col">
      <h4>Investor Reports</h4>
      <div>
        <div className="form-group row">
          <div className="col-sm-3">
            <label htmlFor="selectPartner">Partner</label>
            <select className="form-control form-control-sm" value={partner} onChange={props.onPartnerChange}>
              <option>ALL</option>
              <option>Alex D</option>
              <option>Alex N</option>
              <option>ATS</option>
            </select>
          </div>
          <div className="col-sm-3">
            <label htmlFor="selectInvestor">Investor</label>
            <select className="form-control form-control-sm" value={investor} onChange={props.onInvestorChange}>
              <option>ALL</option>
              <option>Adam Ong</option>
              <option>Adventum</option>
              <option>Alex Douedari</option>
              <option>Alexandre Oliveira</option>
            </select>
          </div>
          <div className="col-sm-3">
            <label htmlFor="selectAccount">Account</label>
            <select className="form-control form-control-sm" value={account} onChange={props.onAccountChange}>
              <option>ALL</option>
              <option>9876</option>
              <option>8765</option>
              <option>7654</option>
            </select>
          </div>
          <div className="col-sm-3">
            <label htmlFor="selectContract">Contract</label>
            <select className="form-control form-control-sm" value={contract} onChange={props.onContractChange}>
              <option>ALL</option>
              <option>12345</option>
              <option>23456</option>
              <option>3456789</option>
              <option>4567891011</option>
            </select>
          </div>
        </div>

        <div className="form-group row no-gutters d-flex align-items-end justify-content-center">
          <div>
            <button type="button" className="btn btn-dark" onClick={props.onDateStepDown}>
              {'<<'}
            </button>
          </div>
          <div className="date-input">
            <label htmlFor="startDate">Start Date</label>
            <input className="form-control" type="date" value={startDate} min="2000-01-01" onChange={props.onStartDateChange} />
          </div>
          <div className="date-input">
            <label htmlFor="endDate">End Date</label>
            <input className="form-control" type="date" value={endDate} min="2000-01-01" onChange={props.onEndDateChange} />
          </div>
          <div>
            <button type="button" className="btn btn-dark" onClick={props.onDateStepUp}>{'>>'}</button>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn btn-primary" onClick={props.onSubmit}>Generate</button>
        </div>
      </div>
    </div>
  );
};

ReportsForm.propTypes = {
  values: PropTypes.shape({
    partner: PropTypes.string,
    investor: PropTypes.string,
    account: PropTypes.string,
    contract: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
  }),
  onPartnerChange: PropTypes.func,
  onInvestorChange: PropTypes.func,
  onContractChange: PropTypes.func,
  onAccountChange: PropTypes.func,
  onStartDateChange: PropTypes.func,
  onEndDateChange: PropTypes.func,
  onDateStepUp: PropTypes.func,
  onDateStepDown: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default ReportsForm;
