import React from 'react';
//import FontAwesomeIcon from '@fortawesome/react-fontawesome';
//import { faList, faUserPlus } from '@fortawesome/fontawesome-free-solid';

export default class Sidebar extends React.Component {
    render() {
	//let img_source = this.props.logo;
	let img_source = 'https://raw.githubusercontent.com/b2w-marketplace/code-challenge/master/files/avatar-dev.png';
	//img_source = img_source.slice(0,8) + 'raw.githubusercontent' + img_source.slice(14);
	//console.log(img_source);
	return(
	    <nav className='navbar navbar-expand-lg bg-dark text-light text-center d-block'>
	      <div className='mx-auto text-center py-2'>
		<img src={img_source} alt='avatar'/>
	      </div>
	      <div className='py-2'>
		<h2><strong>{this.props.name.toUpperCase()}</strong></h2>
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
		<p className='small mb-2'>{this.props.skills[0].name.toUpperCase()}</p>
		<div className='progress w-75 mx-auto bg-dark border border-light rounded-0' style={{height: 15}}>
		  <div className='progress-bar bg-light' style={{width: this.props.skills[0].value}} role='progressbar'></div>
		</div>
	      </div>



	    </nav>
	);
    }
}
