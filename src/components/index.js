import React from 'react';
import Custom from './Custom';

const _attr_ = {
	className: 'trux-app container',
	style: {
		flex: 1,
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '100%',
		height: '100%',
	},
};

function Container(props) {
	return (
		<div {..._attr_}>
			<Custom />
		</div>
	);
}

export default Container;
