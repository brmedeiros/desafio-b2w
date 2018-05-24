import React from 'react';
import api from './components/apirequest.js';
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
	return(
	<div className="App">
	  {isLoading
	      ? <h1>wait</h1>
	      : <h1>{person.profile.name}</h1>
	  }
	  {fetchError && !isLoading
	      ? <div className='validation-text text-danger small'>Falha de conexão com o serviodor API...</div>
	      : null
	  }
	</div>
    );
  }
}
