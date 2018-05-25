import api from'./apirequest.js';
import $ from 'jquery';

//process.env.REACT_APP_BACKEND_HOST = 'pathMock';

test('the request is made with the correct parameters and received the correct response', () => {
    const data = {'profile': {'image': 'url', 'name': 'some name'}};
    $.ajax = jest.fn().mockReturnValue($.Deferred().resolve(data));
    return api.request().then((response) => {
	expect($.ajax).toHaveBeenCalledWith({
	    url: 'http://www.mocky.io/v2/5a5e38f3330000b0261923a5',
	    type: 'GET'});
	expect(typeof(response)).toBe('object');
	expect(response).toHaveProperty('profile', {"image": "url", "name": "some name"});
    });
});
