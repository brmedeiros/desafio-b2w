import React from 'react';
//import FontAwesomeIcon from '@fortawesome/react-fontawesome';
//import { faList, faUserPlus } from '@fortawesome/fontawesome-free-solid';

function SkillList(props) {
    const skills = props.skills;
    const listItems = skills.map((skill) =>
				 <li key={skill.name}>
				   <p className='small mb-1'>{skill.name.toUpperCase()}</p>
				   <div className='progress w-75 mx-auto bg-dark border border-light rounded-0 mb-4' style={{height: 12}}>
				     <div className='progress-bar bg-light' style={{width: skill.value}} role='progressbar'></div>
				   </div>
				 </li>);
    return (
	<ul className='list-unstyled'>{listItems}</ul>
    );
}

export default class Sidebar extends React.Component {
    render() {
	let img_source = this.props.image;
	//replace 'blob' with 'raw' on the image URL
	img_source = img_source.slice(0,50) + 'raw' + img_source.slice(54);
	return(
	    <nav className='navbar navbar-expand-lg bg-dark text-light text-center d-block'>
	      <div className='mx-auto text-center py-2'>
		<img src={img_source} alt='avatar'/>
	      </div>
	      <div className='py-2'>
		<h2 style={{letterSpacing: 2}}><strong>{this.props.name.toUpperCase()}</strong></h2>
		<p className='small'>{this.props.profession.toUpperCase()}</p>
		<hr className='hr-sidebar my-4'/>
	      </div>

	      <div className='pb-2'>
		<p className='small mb-2'><strong>PROFILE</strong></p>
		<hr className='hr-sidebar mt-1 w-50'/>
		<p className='small'>{this.props.description}</p>
	      </div>

	      <div className='pb-2'>
		<p className='small mb-2'><strong>CONTACT</strong></p>
		<hr className='hr-sidebar mt-1 w-50'/>
		<p className='small'>{this.props.contact.tel}<br/>{this.props.contact.cel}</p>
		<p className='small'>{this.props.contact.address}</p>
		<p className='small'>{this.props.contact.website}<br/>{this.props.contact.mail}</p>
	      </div>

	      <div className='pb-2'>
		<p className='small mb-2'><strong>SKILLS</strong></p>
		<hr className='hr-sidebar mt-1 w-50'/>
		<SkillList skills={this.props.skills}/>
	      </div>



	    </nav>
	);
    }
}
