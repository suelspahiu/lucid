import React from 'react';
import { SplitButton } from '../../../index';

export default React.createClass({
	render() {
		return (
			<SplitButton style={{height: 100}}>
				<SplitButton.Button isDisabled>Save</SplitButton.Button>
				<SplitButton.Button isDisabled>This action should be disabled</SplitButton.Button>
				<SplitButton.Button>This one should be enabled</SplitButton.Button>
				<SplitButton.Button isDisabled>This should be disabled, too</SplitButton.Button>
			</SplitButton>
		);
	},
});
