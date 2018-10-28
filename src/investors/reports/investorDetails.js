import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AccountDetails from './accountDetails';

class InvestorDetails extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    }
  }

  render() {
    const collapsed = this.state.collapsed;
    const { partner } = this.props;
    return (
      <table className={'table table-sm'}>
        <tbody>
          <tr className="table-inv-name" onClick={() => this.setState({ collapsed: !this.state.collapsed })}>
            <td width={40}>
              <i className={`far fa-${collapsed ? 'plus' : 'minus'}-square`} />
            </td>
            <td colSpan={2}>{partner.name}</td>
          </tr>
          <tr className={`collapse${collapsed ? '' : ' show'}`}>
            <td colSpan={3}>
              <table className="table table-sm partner-data">
                <tbody>
                  <tr>
                    <td>
                    { partner.account.map((acc, index) => <AccountDetails key={index} account={acc} />) }
                    </td>
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

InvestorDetails.propTypes = {
  partner: PropTypes.object,
};

export default InvestorDetails;
