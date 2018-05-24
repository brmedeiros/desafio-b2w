import React from 'react';

function EventList(props) {
    const events = props.events;
    const listItems = events.map((event) =>
				 <li key={event.name}>
				   <p className='small mb-1'><strong>{event.name.toUpperCase()}</strong></p>
				   <p className='small mb-1' style={{letterSpacing: 2}}>{event.date}</p>
				   <p className='small mb-3'>{event.description}</p>
				 </li>);
    return (
	<ul className='list-unstyled'>{listItems}</ul>
    );
}


export default class LargeSection extends React.Component {
    render() {
	return(
	    <div className='text-left pt-4 px-5'>
	      <p className='mb-2'><strong>WORK EXPERIENCE</strong></p>
	      <hr className='hr-large-section mt-1'/>
	      <EventList events={this.props.experiences}/>

	      <p className='mb-2'><strong>EDUCATION</strong></p>
	      <hr className='hr-large-section mt-1'/>
	      <EventList events={this.props.education}/>

	    </div>
	);
    }

}
