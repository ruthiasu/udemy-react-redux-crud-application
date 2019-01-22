import React from 'react';

//class App extends Component {
//  render() {
//    return ( 
//	<div>
// 	<label htmlFor="bar">bar</label>
//	<INput type="text" onChange = {() => {console.log("I am clicked!")}} /> 
//	</DIV>
//    )
//  }
//}


const App = () => {
	return (
		<div>
		<Cat />
		<Cat />
		<Cat />
		<Cat />
		</div>
	)
}

const Cat = () => {
	return <div>Meow!</div>
}

export default App;
