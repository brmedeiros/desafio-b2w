import React from 'react';
import api from './components/apirequest.js';
import Sidebar from './components/sidebar.js';
import LargeSection from './components/large-section.js';
import './App.css';

export default class App extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    person: {},
	    isLoading: true,
	    fetchError: false
	};
    }

    componentDidMount() {
	api.request()
	    .then(data => {
		this.setState({person: data, isLoading: false});
	    }).catch(() => {
		this.setState({isLoading: false, fetchError: true});
	    });
    }

    render() {
	const {person, isLoading, fetchError} = this.state;
	let profile = person.profile;
	return(
	<div className='App container-fluid mt-2 px-0'>
	  {isLoading
	      ? <h1>wait</h1>
	      :
	      <div className='border'>
		<div className='row mx-auto'>
		  <div className='col-md-4 px-0 py-0'>
			<Sidebar logo={profile.image} name={profile.name} profession={profile.profession}
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
