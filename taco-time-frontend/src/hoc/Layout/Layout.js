import React from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = props => {
	return (
		<React.Fragment>
			<Toolbar />
			<SideDrawer />
			<main>{props.children}</main>
		</React.Fragment>
	);
};

export default Layout;
