var React = require('react-native');
var p = require('./Pallette');
var {
	StyleSheet,
	PixelRatio,
} = React;


var s = StyleSheet.create({

	///////////////////////////////////////////////////////////////////////
	// BASE
	///////////////////////////////////////////////////////////////////////

	container: {
		flex: 1,
		backgroundColor: p.secondary_1,
	},

	center: {
		alignItems: 'center',
	},

	middle: {
		justifyContent: 'center',
	},

	btn: {
		borderColor: p.tertiary_3,
		borderWidth: 1,
		borderRadius: 5,
		//margin: 5,
		padding: 1,
		backgroundColor: p.tertiary_0,
	},

	btn_sm: {
		width: 80,
	},

	btn_md: {
		width: 160,
	},

	btn_lg: {
		width: 240,
	},

	btnText: {
		fontSize: 12,
		textAlign: 'center',
		lineHeight: 18,
	},

	input: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
	},

	///////////////////////////////////////////////////////////////////////
	// TOOLBAR
	///////////////////////////////////////////////////////////////////////

	toolbar: {
		backgroundColor: p.primary_2,
		height: 60,
		borderWidth: 10,
		borderColor: p.primary_3,
	},


	///////////////////////////////////////////////////////////////////////
	// HOME
	///////////////////////////////////////////////////////////////////////

	section: {
		margin: 10,
		//backgroundColor: p.secondary_2,
	},

	sectionHeaderView: {
		marginBottom: 10,
		borderBottomColor: p.tertiary_2,
		borderBottomWidth: 1,
		//backgroundColor: p.secondary_3,
	},

	sectionHeaderText: {
		margin: 6,
		color: p.primary_4,
		fontSize: 18,
		fontWeight: 'bold',
	},


	title: {
		fontSize: 20,
		marginBottom: 8,
		textAlign: 'center',
	},
	year: {
		textAlign: 'center',
	},
	thumbnail: {
		width: 53,
		height: 81,
	},
	listView: {
		paddingTop: 20,
		backgroundColor: '#F5FCFF',
	},
});


///////////////////////////////////
//Text styling
///////////////////////////////////
//color string
//fontFamily string
//fontSize number
//fontStyle enum('normal', 'italic')
//fontWeight enum("normal", 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900')
//letterSpacing number
//lineHeight number
//textAlign enum("auto", 'left', 'right', 'center', 'justify')
//textDecorationLine enum("none", 'underline', 'line-through', 'underline line-through')
//textDecorationStyle enum("solid", 'double', 'dotted', 'dashed')
//textDecorationColor string
//writingDirection enum("auto", 'ltr', 'rtl')


module.exports = s;
