'use strict';

import appCache from '../app_cache';
import userController from '../controllers/user_controller';
import gateway from '../api_gateway/gateway';
import User from '../models/user';

var onLoginSuccess = function (response) {

    var user = appCache.fetch('user', new User());
    user.initiate(response.token, response.user_name);

    favoriteActions.getFavoritesForCurrentUser();

    if (response.localStorage !== false) {
        localStorage.setItem('token', response.token);
    };
    Vent.trigger('login_success');
    checkAnonymous();

    return {
        uid: response.uid,
        username: response.userName
    };
};

export default {
	getCurrentUser: function() {
		return true;
	},

	getSessionFromLocalStorage: function () {
        var dfd = $.Deferred(),
        	userToken;

        userToken = localStorage.getItem('auth_token');
        if (userToken) {
            // window.asdesds=persistedUID;
            gateway.sendRequest('getAuthenticationStatus', {auth_token: userToken}).then(function (response) {
                if (response.status === 200) {
                    onLoginSuccess({
                        uid: persistedUID,
                        userName: response.userName
                    });
                } else {
                    localStorage.removeItem('cmxUID');
                }
                dfd.resolve();
            }, function onRequestError () {
                localStorage.removeItem('cmxUID');
                dfd.resolve();
            });
        } else {
            dfd.resolve();
            checkAnonymous();
        }
        return dfd.promise();
    },
}