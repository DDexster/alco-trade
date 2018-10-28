import React, { Component } from 'react';
import moment from 'moment';
import FormData from './form';
import ContractReport from './contractRepo';
import PartnerReport from './partnerRepo';
import AccountReport from './accountRepo';
import InvestorReport from './investorRepo';

import partnerMock from './partnerRepo.mock';
import investorMock from './investorRepo.mock';
import accountMock from './accountRepo.mock';
import contractMock from './contractRepo.mock';

const DATE_FORMAT = 'YYYY-MM-DD';

// TODO fetch select options
// TODO fetch data by form inputs
// TODO forBackend: 1. AccNo for account, 2. currency to contract, 3. reportType
// required fields for each answer ('period')

class InvestorReports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reportType: 'none',
      repoData: null,
      form: {
        partner: 'ALL',
        investor: 'ALL',
        account: 'ALL',
        contract: 'ALL',
        startDate: moment().subtract(1, 'month').format(DATE_FORMAT),
        endDate: moment().format(DATE_FORMAT)
      }
    }
  }

  componentDidMount() {
  }

  renderReport(type) {
    switch(type) {
      case 'contract':
        return <ContractReport data={contractMock} />;
      case 'account':
        return <AccountReport data={accountMock} />;
      case 'investor':
        return <InvestorReport data={investorMock} />;
      case 'partner':
        return <PartnerReport data={partnerMock} />;
      default:
        return <p className={'d-flex justify-content-center'} style={{ marginTop: 50 }}>Please select data to get a report</p>
    }
  }

  handleRepoType = (e) => {
    this.setState({ ...this.state, reportType: e.target.value });
  };

  handleAccountChange = (e) => {
    const form = this.state.form;
    form.account = e.target.value;
    this.setState({ ...this.state, form });
  };

  handleContractChange = (e) => {
    const form = this.state.form;
    form.contract = e.target.value;
    this.setState({ ...this.state, form });
  };

  handleInvestorChange = (e) => {
    const form = this.state.form;
    form.investor = e.target.value;
    this.setState({ ...this.state, form });
  };

  handlePartnerChange = (e) => {
    const form = this.state.form;
    form.partner = e.target.value;
    this.setState({ ...this.state, form });
  };

  handleStartDateChange = (e) => {
    const form = this.state.form;
    form.startDate = e.target.value;
    this.setState({ ...this.state, form });
  };

  handleEndDateChange = (e) => {
    const form = this.state.form;
    form.endDate = e.target.value;
    this.setState({ ...this.state, form });
  };

  handleDateStepUp = () => {
    const form = this.state.form;
    form.startDate = moment(form.startDate).add(1, 'month').format(DATE_FORMAT);
    form.endDate = moment(form.endDate).add(1, 'month').format(DATE_FORMAT);
    this.setState({ ...this.state, form });
  };

  handleDateStepDown = () => {
    const form = this.state.form;
    form.startDate = moment(form.startDate).subtract(1, 'month').format(DATE_FORMAT);
    form.endDate = moment(form.endDate).subtract(1, 'month').format(DATE_FORMAT);
    this.setState({ ...this.state, form });
  };

  handleSubmit = () => {
    alert(`Submitting form with values: ${JSON.stringify(this.state.form)}`);
  };


  render() {
    const { reportType, form } = this.state;
    return (
      <div>
        <div className={'d-flex justify-content-center align-items-center'}>
          <p>DEV Only</p>
          <select className={'form-control form-control-sm'} value={this.state.repoData} onChange={this.handleRepoType}>
            <option>none</option>
            <option>contract</option>
            <option>account</option>
            <option>investor</option>
            <option>partner</option>
          </select>
        </div>
        <FormData
          values={form}
          onAccountChange={this.handleAccountChange}
          onContractChange={this.handleContractChange}
          onInvestorChange={this.handleInvestorChange}
          onPartnerChange={this.handlePartnerChange}
          onStartDateChange={this.handleStartDateChange}
          onEndDateChange={this.handleEndDateChange}
          onDateStepUp={this.handleDateStepUp}
          onDateStepDown={this.handleDateStepDown}
          onSubmit={this.handleSubmit}
        />
        { this.renderReport(reportType) }
      </div>
    );
  }
}

export default InvestorReports;