import React from 'react';
import CalendarMonth from '../CalendarMonth';

export default React.createClass({
	render() {
		return (
			<section style={{ maxWidth: 400 }}>

				<CalendarMonth
					modifiers={{
						tuesday: (day) => day.getDay() === 2,
					}}
				/>

				<style>{`
					.lucid-CalendarMonth .DayPicker-Day--tuesday {
						border: 1px dotted gray;
					}
				`}</style>

			</section>
		);
	},
});
