import React from 'react';

import ProjectItem from './ProjectItem/ProjectItem';
import classes from './Projects.module.css';
const projects = [
	{
		projectName: 'As1s',
	},
	{
		projectName: 'A2aa',
	},
];

const Projects = props => (
	<div className={classes.Projects}>
		<p>Projects</p>
		{projects.map(proj => (
			<ProjectItem key={proj.projectName} projectName={proj.projectName} />
		))}
	</div>
);

export default Projects;
