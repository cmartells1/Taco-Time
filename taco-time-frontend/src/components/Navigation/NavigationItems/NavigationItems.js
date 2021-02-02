import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = props => (
	<div>
		<ul className={classes.NavigationItems}>
			<NavigationItem link='/'>Launch Screen</NavigationItem>
			<NavigationItem link='/project-management'>
				Project Management
			</NavigationItem>
			<NavigationItem link='/team-management'>Team Management</NavigationItem>
			<NavigationItem link='/employee-allocation'>
				Employee Allocation
			</NavigationItem>
			<NavigationItem link='/employee-management'>
				Employee Management
			</NavigationItem>
		</ul>
	</div>
);

export default navigationItems;
