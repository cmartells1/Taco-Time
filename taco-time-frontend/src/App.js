import Layout from './hoc/Layout/Layout';
import './App.css';

import LaunchPage from './containers/LaunchPage/LaunchPage';

const App = props => {
	return (
		<div>
			<Layout>
				<div className='App-header'>
					<LaunchPage />
				</div>
			</Layout>
		</div>
	);
};

// function App() {
// 	return (
// 		<div className='App'>
// 			<header className='App-header'>
// 				<img src={logo} className='App-logo' alt='logo' />
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload.
// 				</p>
// 				<a
// 					className='App-link'
// 					href='https://reactjs.org'
// 					target='_blank'
// 					rel='noopener noreferrer'
// 				>
// 					Learn React
// 				</a>
// 			</header>
// 		</div>
// 	);
// }

export default App;
