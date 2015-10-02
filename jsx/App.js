'use strict';

var React = require('react-native');
var s = require('./Styling');
var p = require('./Pallette');
var {
	Navigator,
	View,
	Text,
	DrawerLayoutAndroid,
	Image,
	ListView,
	ToolbarAndroid,
	TouchableOpacity,
	} = React;

var Home = require('./Home');
var About = require('./About');
var Firebase = require('firebase');



var App = React.createClass({

	getInitialState: function () {
		return {
			loggedIn: false,
			actions: [{title: 'start', show: 'always'}],
		};
	},

	componentWillMount: function () {
		console.log('[App] componentWillMount');
		console.log(this.props.fb.getAuth());
	},

	componentWillUnmount: function () {
		console.log('[App] componentWillUnmount');
	},

	setActions: function (actions) {
		console.log('[App] setActions', actions);
		this.setState({actions: actions});
	},

	render: function () {
		console.log('[App] render');
		return (
			<View style={[s.container]}>
				<ToolbarAndroid
					style={[s.toolbar]}
					title="Hebling"
					titleColor={p.color_secondary_1_4}
					subtitle="Learn the alphabet"
					subtitleColor={p.color_secondary_1_3}
					actions={this.state.actions}
					onActionSelected={this.onActionSelected}
					/>
				<Navigator
					ref="navigator"
					initialRoute={{id: 'home'}}
					renderScene={this.renderScene}
					/>
			</View>
		);
	},

	onActionSelected: function (index) {
		console.log('[App] onActionSelected: ', index);
		if (this.state.actions[0].title == 'start') {
			console.log('[App] onActionSelected: start');
			this.setState({actions: [{title: 'stop', show: 'always'}]});
			this.refs.navigator.push({id: 'about'});
		}
		else {
			console.log('[App] onActionSelected: top');
			this.setState({actions: [{title: 'start', show: 'always'}]});
			this.refs.navigator.popToTop();
		}
	},

	renderScene: function (route, navigator) {
		console.log('[App] renderScene: route =', route);
		console.log('[App] renderScene: navigator =', navigator);

		if (route.id == 'about') {
			console.log('[App] renderScene: ABOUT');
			return <About navigator={navigator} fb={this.props.fb}/>;
		}
		else {
			console.log('[App] renderScene: HOME');
			return <Home navigator={navigator} fb={this.props.fb}/>;
		}
	},
});


module.exports = App;