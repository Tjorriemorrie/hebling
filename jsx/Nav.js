var React = require('react-native');
var styles = require('./../styles/nav.js');

var {
	View,
	Text,
	TouchableHighlight,
} = React;


var Nav = React.createClass({

	componentWillMount: function () {
		this.props.styles = Object.assign(this.props.styles, styles);
	},

	render: function () {
		return (
			<View>
				<TouchableHighlight onPress={this.props.loadPage.bind(this, 'home')}>
					<View style={this.props.styles.container}>
						<View style={this.props.styles.navBox}>
							<Text style={this.props.styles.navItem}>Home</Text>
						</View>
					</View>
				</TouchableHighlight>
				<TouchableHighlight onPress={this.props.loadPage.bind(this, 'about')}>
					<View style={this.props.styles.container}>
						<Text style={this.props.styles.navItem}>About</Text>
					</View>
				</TouchableHighlight>
			</View>
		);
	},
});


module.exports = Nav;