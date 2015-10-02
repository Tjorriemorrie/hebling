'use strict';

var React = require('react-native');
var s = require('./Styling');
var p = require('./Pallette');
var {
	View,
	Text,
	TouchableHighlight,
	TextInput,
	} = React;

var Firebase = require('firebase');
var fb = new Firebase('https://fiery-heat-1979.firebaseio.com');

var App = require('./App');


var Auth = React.createClass({

	getInitialState: function () {
		return {
			authData: null,
			email: '',
			password: '',
		};
	},

	componentWillMount: function () {
		console.log('[Auth] componentWillMount');
		fb.onAuth(this.authDataCallback);

	},

	componentWillUnmount: function () {
		console.log('[Auth] componentWillUnmount');
		fb.offAuth(authDataCallback);
	},

	authDataCallback: function (authData) {
		console.log('[Auth] authDataCallback', authData);
		this.setState({authData: authData});
	},

	authActionCallback(error, authData) {
		console.log('[Auth] authActionCallback');
		if (error) {
			console.log("Login Failed!", error);
		}
		else {
			console.log("Authenticated successfully with payload:", authData);
		}
	},

	onSignIn: function () {
		console.log('[Auth] onSignIn');
		fb.authWithPassword({
			email: this.state.email,
			password: this.state.password,
		}, this.authActionCallback);
	},

	render: function () {
		console.log('[Auth] render');
		if (this.state.authData) {
			return <App fb={fb}/>;
		}
		else {
			return (
				<View style={[s.container, s.center, s.middle]}>
					<Text>Hebling</Text>
					<Text>Sign in</Text>
					<Text>Email address:</Text>
					<TextInput
						style={s.input}
						onChangeText={(text) => this.setState({email: text})}
						value={this.state.email}
						keyboardType="email-address"
						autoFocus={true}
						autoCorrect={false}
						/>
					<Text>Password:</Text>
					<TextInput
						style={s.input}
						onChangeText={(text) => this.setState({password: text})}
						value={this.state.password}
						autoCorrect={false}
						secureTextEntry={true}
						/>
					<TouchableHighlight
						style={[s.btn, s.btn_md]}
						onPress={() => this.onSignIn}
						underlayColor={p.tertiary_4}>
						<Text>Sign in</Text>
					</TouchableHighlight>

				</View>
			);
		}
	},

});


module.exports = Auth;


// write
//myFirebaseRef.set({
//  title: "Hello World!",
//  author: "Firebase",
//  location: {
//    city: "San Francisco",
//    state: "California",
//    zip: 94103
//  }
//});

// read
//myFirebaseRef.child("location/city").on("value", function(snapshot) {
//  alert(snapshot.val());  // Alerts "San Francisco"
//});


