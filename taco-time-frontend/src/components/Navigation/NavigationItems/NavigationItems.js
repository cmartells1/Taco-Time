import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import { Dropdown } from 'react-bootstrap';

const navigationItems = props => (
	<ul className={classes.NavigationItems}>
		<NavigationItem link='/'>Launch Screen</NavigationItem>
		<Dropdown></Dropdown>
		<NavigationItem link='/admin'>Administration Screen</NavigationItem>
	</ul>
);

export default navigationItems;
