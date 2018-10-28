import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { defineCurrencySign, sumArray } from '../../helperFunctions';

const SummaryRow = (props) =>
  <tr className="bg-success repo-summary">
    <td colSpan={7}></td>
    <td>{`${props.summary} ${props.sign}`}</td>
  </tr>;

SummaryRow.propTypes = {
  summary: PropTypes.number,
  sign: PropTypes.string,
};

class ContractDetails extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    }
  }

  _renderDealsRow = (deal, index, currSign) =>
    <tr key={deal.calc_id} className={`${index === 0 ? 'bg-info contract-no' : ''}`}>
      <td>{deal.deal_time}</td>
      <td>{deal.description}</td>
      <td>{`${currSign} ${deal.amount.toFixed(2)}`}</td>
    </tr>;

  _renderInvoiceRow = (invoice, currSign) =>
    <tr key={invoice.invoice_id}>
      <td>{invoice.invoice_date}</td>
      <td></td>
      <td>{`${currSign} ${invoice.amount.toFixed(2)}`}</td>
    </tr>;

  render() {
    const collapsed = this.state.collapsed;
    const { contract: { name, total, details }, currency } = this.props;
    const currSign = defineCurrencySign(currency);
    return (
      <table className={'table table-sm'}>
        <tbody>
          <tr className="bg-primary contract-no"  onClick={() => this.setState({ collapsed: !this.state.collapsed })} >
            <td>
              <i className={`far fa-${collapsed ? 'plus' : 'minus'}-square`} />
            </td>
            <td colSpan={2}>
              {name}
            </td>
            <td>
              {`${currSign} ${total.toFixed(2)}`}
            </td>
          </tr>
          <tr className={`collapse${collapsed ? '' : ' show'}`}>
            <td colSpan={4}>
              <table className="table table-sm data-details">
                { !!details && <tbody>
                  { !!details.deals.length && details.deals.map((deal, index) => this._renderDealsRow(deal, index, currSign)) }
                  { !!details.deals.length &&
                    <tr className="bg-success repo-summary">
                      <td></td>
                      <td></td>
                      <td>{`${currSign} ${sumArray(details.deals.map(deal => deal.amount)).toFixed(2)}`}</td>
                    </tr>
                  }
                  <tr><td></td></tr>
                  { !!details.invoice_pending.length &&
                    <tr className="repo-header-light-bg">
                      <td colSpan={3}>Pending Invoices</td>
                    </tr>
                  }
                  { !!details.invoice_pending.length && details.invoice_pending.map((invoice) => this._renderInvoiceRow(invoice, currSign))}
                  { !!details.invoice_pending.length &&
                    <tr className="bg-success repo-summary">
                      <td></td>
                      <td></td>
                      <td>{`${currSign} ${sumArray(details.invoice_pending.map(invoice => invoice.amount)).toFixed(2)}`}</td>
                    </tr>
                  }
                  <tr><td></td></tr>
                  { !!details.invoice_pending.length &&
                    <tr className="repo-header-light-bg">
                      <td colSpan={3}>Paid Invoices</td>
                    </tr>
                  }
                  { details.invoice_paid.map((invoice) => this._renderInvoiceRow(invoice, currSign))}
                  <tr><td></td></tr>
                  <tr className="bg-primary repo-summary">
                    <td>Summary</td>
                    <td />
                    <td>{`${currSign} ${total.toFixed(2)}`}</td>
                  </tr>
                </tbody>
                }
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

ContractDetails.propTypes = {
  contract: PropTypes.object,
  currency: PropTypes.string,
};

export default ContractDetails;