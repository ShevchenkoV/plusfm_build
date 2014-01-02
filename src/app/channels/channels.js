
 angular.module( 'ngBoilerplate.channels', [
 'ui.state',
 'plusOne'
 ])

 /**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
    $stateProvider.state( 'channels', {
        url: '/channels',
        views: {
            "main": {
                controller: 'ChannelsCtrl',
                templateUrl: 'channels/channels.tpl.html'
            }
        },
        data:{ pageTitle: 'Channels' }
    });
})

/**
 * And of course we define a controller for our route.
 */
    .controller( 'ChannelsCtrl', function ChanelController( $scope ) {
         $scope.parsedUrlList=parsedUrlList;
         $scope.parsedUrlList.range = function() {
             var range = [];
             for( var i = 0; i < $scope.parsedUrlList.length; i = i + 4 )
             {
                 range.push(i);

             }
                return range;
         };

     });

