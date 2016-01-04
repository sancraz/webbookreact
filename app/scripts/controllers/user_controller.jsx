/*global define */

'use strict';

import gateway from '../api_gateway/gateway';
import appCache from '../app_cache';
import Vent from '../Vent';
import User from '../models/user';

var initUser = function(response) {
    return appCache.get('user').init(response.uid, response.userName)
        .then( function () {
            Vent.trigger('login_success');
            return response;
        });
};

var killUser = function(response) {
    appCache.get('user').kill();
    localStorage.removeItem('cmxUID');
    Vent.trigger('logout_success');
    return response;
};

export default {

    getCurrentUser: function () {
        return appCache.fetch('user', new User());
    },

    hasCurrentUser: function() {
        if ( appCache.get('user') && appCache.get('user').getUID ) {
            return appCache.get('user').getUID() ? true : false;
        }
        return false;
    },

    loginUser: function (username, password) {
        return gateway.sendRequest('login', {
            payload: {
                userid: username,
                password: password
            }
        });
    },

    logout: function(UID){
        return gateway.sendRequest('logout',{
            UID: UID
        }).then(killUser);
    }

};
