import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import List from './List';
import Detail from './Detail';
import About from './About';

const Root = () => (
	<BrowserRouter>
		<div>
			<Route exact path="/" component={List}/>
			<Route exact path="/video/:id" component={Detail}/> 
			<Route exact path="/about" component={About}/> 
		</div>
	</BrowserRouter>
);

export default Root;