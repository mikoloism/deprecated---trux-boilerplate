const INCREMENT = ({ state }, step = 1) => ({
	...state,
	count: state.count + step,
});
const DECREMENT = ({ state }, step = 1) => ({
	...state,
	count: state.count - step,
});
const ZERO = ({ state }) => ({ ...state, count: 0 });

export { DECREMENT, INCREMENT, ZERO };
