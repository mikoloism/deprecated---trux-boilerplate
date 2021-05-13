import React from 'react';
import useTrux from './../trux';

const Custom = (props) => {
	const { state, actions } = useTrux();
	// state.propName
	// actions.ACTION_NAME(args);
	return <h1>Hi, React</h1>;
};

export default Custom;
