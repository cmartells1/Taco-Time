import React from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import classes from './Layout.module.css';

const Layout = props => {
	return (
		<React.Fragment>
			<div className={classes.Container}>
				<div className={classes.Header}>
					<Toolbar />
				</div>
				<div className={classes.Sidebar}>
					<SideDrawer />
				</div>
				<main className={classes.Content}>{props.children}</main>
			</div>
		</React.Fragment>
	);
};

export default Layout;
