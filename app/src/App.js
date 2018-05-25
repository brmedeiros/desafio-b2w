import React from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/fontawesome-free-solid';

import api from './components/apirequest.js';
import Sidebar from './components/sidebar.js';
import LargeSection from './components/large-section.js';
import './App.css';

//a function to ensure the component will not call setState after unmounting
const noop = () => {};

export default class App extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    person: {},
	    isLoading: true,
	    fetchError: false
	};
    }

    handleSuccess = data => {
	this.setState({isLoading: false, person: data});
    };

    handleFailure = () => {
	this.setState({isLoading: false, fetchError: true});
    };

    componentDidMount() {
	api.request()
	    .then(data => {
		this.handleSuccess(data);
	    }).catch(() => {
		this.handleFailure();
	    });
    }

    componentWillUnmount() {
	this.handleSuccess = noop;
	this.handleFailure = noop;
    }

    render() {
	const {person, isLoading, fetchError} = this.state;
	let profile;
	if (!isLoading) profile = person.profile;
	return(
	<div className='App container-fluid mt-2 px-0'>
	  {isLoading
	      ? <div className='text-center mt-5'>
                  <FontAwesomeIcon key='spinnerIcon' className='fa-2x fa-fadein-spin mt-5' icon={faCircleNotch}/>
		</div>
	      :
	      <div className='border'>
		<div className='row mx-auto'>
		  <div className='col-md-4 px-0 py-0'>
			<Sidebar image={profile.image} name={profile.name} profession={profile.profession}
				     description={profile.description} contact={profile.contact}
				     skills={profile.skills}/>
		      </div>
		<div className='col px-0 py-0'>
		      <LargeSection experiences={profile.experience} education={profile.education}/>
		</div>
	      </div>
	    </div>
	  }
	  {fetchError && !isLoading
	      ? <div className='validation-text text-danger small'>Falha de conexão com o serviodor API...</div>
	      : null
	  }
	</div>
    );
  }
}
