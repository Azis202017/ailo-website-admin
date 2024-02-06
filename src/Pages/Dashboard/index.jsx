import React, { Fragment } from 'react';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import DashboardPageContain from '../../Component/Dashboard';

const Dashboard = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="pages" title="Dashboard" />
      <DashboardPageContain />
    </Fragment>
  );
};
export default Dashboard;