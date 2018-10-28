import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { defineCurrencySign } from '../../helperFunctions';
import ContractDetails from './contractDetails';

class AccountDetails extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    }
  }

  render() {
    const collapsed = this.state.collapsed;
    const { account: { name, currency, contract, total } } = this.props;
    const accNo = name.split('#')[1].split(' ')[0];
    return (
      <table className={'table table-sm'}>
        <tbody>
          <tr className="bg-primary table-acc-no" onClick={() => this.setState({ collapsed: !this.state.collapsed })}>
            <td>
              <i className={`far fa-${collapsed ? 'plus' : 'minus'}-square`} />
            </td>
            <td>{name}</td>
            <td>{`${defineCurrencySign(currency)} ${total.toFixed(2)}`}</td>
          </tr>
          <tr className={`collapse${collapsed ? '' : ' show'}`}>
            <td colSpan={3}>
              <table className="table table-sm account-details">
                <tbody>
                  <tr>
                    <td colSpan={3}>
                      { contract.map((contr, index) => <ContractDetails key={index} contract={contr} currency={currency} />) }
                    </td>
                  </tr>
                  <tr className="bg-info repo-summary">
                    <td colSpan={2}>{`Total by account #${accNo}`}</td>
                    <td>{`${defineCurrencySign(currency)} ${total.toFixed(2)}`}</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

AccountDetails.propTypes = {
  account: PropTypes.object,
};

export default AccountDetails;