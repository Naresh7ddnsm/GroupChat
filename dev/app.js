import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Grid } from "./core/core";
import { Login } from "./components/login";

class App extends React.Component{
	render(){
		return(
			<Container className="container-md-max" data-rol='container'>
				<Row>
				 	<Login />
				 </Row>
			</Container>
		);
	}
}
ReactDOM.render(<App />, document.getElementById('app'));