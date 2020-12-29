import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = props => (
	<ul className={classes.NavigationItems}>
		<NavigationItem link='/'>Launch Screen</NavigationItem>
		<NavigationItem link='/admin'>Administration Screen</NavigationItem>
	</ul>
);

export default navigationItems;
