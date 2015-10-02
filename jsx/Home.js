'use strict';

var React = require('react-native');
var s = require('./Styling');
var p = require('./Pallette');
var {
	TouchableHighlight,
	View,
	Text,
} = React;


var Home = React.createClass({

	signOut: function () {
		console.log('[Home] Signout');
		this.props.fb.unauth();
	},

	render: function () {
		return (
			<View style={s.container}>

				<View style={s.section}>
					<View style={s.sectionHeaderView}>
						<Text style={s.sectionHeaderText}>Me</Text>
					</View>
					<View>
						<Text>Name: John Doe</Text>
					</View>
					<TouchableHighlight style={[s.btn, s.btn_sm]}
						activeOpacity={0.67}
						underlayColor={p.secondary_2}>
						<Text style={s.btnText} onPress={this.signOut}>Sign out</Text>
					</TouchableHighlight>
				</View>

			</View>
		);
	},

});


module.exports = Home;