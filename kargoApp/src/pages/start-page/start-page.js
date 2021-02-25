import React, { Component } from 'react';

import {
	Text,
	Button,
	View
} from 'react-native';

export default class StartPage extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<View
				style={{
					flex: 1,
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center'
				}}>
				<Text>Yükleniyor..</Text>
			</View>
		);
	}
} 