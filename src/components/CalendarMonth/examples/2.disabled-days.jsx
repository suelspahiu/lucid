import React from 'react';
import { DateUtils } from 'react-day-picker';
import CalendarMonth from '../CalendarMonth';

export default React.createClass({
	render() {
		return (
			<section style={{ maxWidth: 400 }}>

				<CalendarMonth
					disabledDays={DateUtils.isPastDay}
				/>

			</section>
		);
	},
});
