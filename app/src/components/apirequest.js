import $ from 'jquery';

export default {

    request: () => {
    	return new Promise((resolve, reject) => {
    	    $.ajax({
    	    	url: 'http://www.mocky.io/v2/5a5e38f3330000b0261923a5',
    		type: 'GET'
    	    }).done((response) => {
    		resolve(response);
    	    }).fail((response) => {
    		reject();
    	    });
    	});
    },
};
