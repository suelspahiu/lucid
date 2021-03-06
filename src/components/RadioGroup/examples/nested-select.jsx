import React from 'react';
import { RadioGroup, SingleSelect } from '../../../index';

const style = {
	marginRight: '13px',
};

export default React.createClass({
	render() {
		return (
			<RadioGroup>
				<RadioGroup.RadioButton style={style}>
					<RadioGroup.Label>Alvin</RadioGroup.Label>
				</RadioGroup.RadioButton>
				<RadioGroup.RadioButton style={style}>
					<RadioGroup.Label>Simon</RadioGroup.Label>
				</RadioGroup.RadioButton>
				<RadioGroup.RadioButton style={style}>
					<RadioGroup.Label>
						<SingleSelect>
							<SingleSelect.Option>One</SingleSelect.Option>
							<SingleSelect.Option>Two</SingleSelect.Option>
						</SingleSelect>
					</RadioGroup.Label>
				</RadioGroup.RadioButton>
			</RadioGroup>
		);
	},
});
