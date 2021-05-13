import React from 'react';
import {
	BrowserRouter as BRouter,
	Route,
	Switch,
	Link,
} from 'react-router-dom';

// importing components

// import Home from './views/Home';
// import About from './views/About';

// remove this line
const RouterNav = () => (
	<nav>
		<ul>
			<li>
				<Link to='/'>Home</Link>
			</li>
			<li>
				<Link to='/yes'>goto yes</Link>
			</li>
			<li>
				<Link to='/yes/doit'>goto Doit</Link>
			</li>
			<li>
				<Link to='/no'>goto No</Link>
			</li>
		</ul>
	</nav>
);
const Home = () => (
	<>
		<RouterNav />
		<h1>Home</h1>
	</>
);
const About = () => (
	<>
		<RouterNav />
		<h1>About</h1>
	</>
);

// change this array of routers
const routers = [
	{
		path: '/',
		exact: true,
		component: Home,
	},
	{
		path: '/about',
		exact: false,
		component: About,
	},
];

// don't remove this line, just import in other files
const Router = () => (
	<BRouter>
		<Switch>
			{routers.map(({ path, exact, component }, index) =>
				exact ? (
					<Route
						key={index}
						exact
						component={component}
						path={path}
					/>
				) : (
					<React key={index} component={component} path={path} />
				),
			)}
		</Switch>
	</BRouter>
);

export default Router;
