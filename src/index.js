import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Sidebar from './sidebar';
import InvestorReports from './investors/reports';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Sidebar />, document.getElementById('sidebar'));
ReactDOM.render(<InvestorReports />, document.getElementById('inv-reports'));
