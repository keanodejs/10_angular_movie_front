/**
 * Created by Sandeep on 01/06/14.
 */

// http://movieappback.azurewebsites.net/api/movies
// http://movieapp-sitepointdemos.rhcloud.com/api/movies


angular.module('movieApp.services',[]).factory('Movie',function($resource){
    return $resource('http://movieappback.azurewebsites.net/api/movies/:id',{id:'@_id'},{
        update: {
            method: 'PUT'
        }
    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});