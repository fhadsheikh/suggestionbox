'use strict';

/**
 * @ngdoc service
 * @name suggestionboxApp.user
 * @description
 * # user
 * Factory in the suggestionboxApp.
 */
angular.module('suggestionboxApp')
  .factory('user', function ($q,$location,$http,API,jwtHelper,store,$rootScope,toastr) {
    
    var isInArray = function(permission, permissions){
        return permissions.indexOf(permission) > -1;
    }
    
    var user = null;
        
    return {
        
        user: function(){
            return user;
        },
        
        checkLogin: function(){
            
            var deferred = $q.defer();
            
            if(store.get('jwt') && !jwtHelper.isTokenExpired(store.get('jwt'))){
                deferred.resolve('user is logged in');
            } else {
                $location.path('/login');
                deferred.reject('user is not logged in');
            }
            
            return deferred.promise;
            
        },
        isAllowed: function(permission){
            
            var deferred = $q.defer();
            
            if(store.get('jwt') !== null){
                
                var jwt = jwtHelper.decodeToken(store.get('jwt'));
                
                if(isInArray(permission, jwt.data.permissions)){
                    deferred.resolve('User has acccess');
                } else {
                    console.log('access denied');
                    deferred.reject('Access denied');
                }
            }
            
            
            return deferred.promise;
            
        },
        login: function(username, password){
            
            var data = $.param({
                username: username,
                password: password
            });
            
            var deferred = $q.defer();
            
            $http.post(API.url+'auth', data)
            .then(function(res){
                store.set('jwt',res.data);
                deferred.resolve(res.data);
                
                $rootScope.$broadcast('userDataChanged', {user: jwtHelper.decodeToken(res.data).data});
                
                toastr.clear();
                toastr.info('Login Successful','Success');
                
                $location.path('/suggestions');
            }, function(err){
                console.log(err);
                toastr.error(err.data,'Error');
                deferred.reject(err);
            });
            
            return deferred.promise;
            
        },
        logout: function(){
            
            var deferred = $q.defer();
            
            if(store.get('jwt')){
                store.remove('jwt')
                deferred.resolve('User was logged out');
                $location.path('/login');
            } else {
                deferred.reject('User is already logged out');
            }
            
            return deferred.promise;
            
        }
        
    };
  });
