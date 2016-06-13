'use strict';

/**
 * @ngdoc service
 * @name suggestionboxApp.layout
 * @description
 * # layout
 * Factory in the suggestionboxApp.
 */
angular.module('suggestionboxApp')
  .factory('layout', function () {
    
    var resizeWindow = function(subtract){
        var height = $(window).height();
        $('.stickyFooterDependancy').css('min-height',height-subtract); 
    }
    
    return {
        
        stickyFooter: function (subtract) {
            
            resizeWindow(subtract);
            
            $(window).resize(function(){resizeWindow(subtract);});
            
        },
        
        validateEmptyFields: function (fields){
            
            for (var i = 0; i < fields.length; i++){
                
                if(fields[i].$pristine){

                    fields[i].$invalid = true;
                    fields[i].$pristine = false;

                }
            }
        }
    };
    
  });
