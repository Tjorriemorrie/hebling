'use strict';

var React = require('react-native');
var s = require('./Styling');
var p = require('./Pallette');
var {
	View,
	Text,
	TouchableHighlight,
} = React;


var About = React.createClass({

	render: function () {
		return (
			<View style={s.container}>
				<Text>about page</Text>
				<TouchableHighlight
					onPress={() => this.props.navigator.push({id: 'home'})}
					underlayColor="#B5B5B5">
					<Text>go to home</Text>
				</TouchableHighlight>
			</View>
		);
	},
});


module.exports = About;