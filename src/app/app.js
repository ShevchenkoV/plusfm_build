angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'ngBoilerplate.channels',
  'ui.state',
  'ui.route'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {

  $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
    }
  });
        $scope.listStation = ["http://online.radiorecord.ru:8100/rr_64",
            "http://217.20.164.170:8002/;",
            "http://listen.rpfm.ru:9000/premium128",
            "http://92.53.112.250:8102/sd90_128",
            "http://ru2.101.ru:8000/v1_1",
            "http://stream.kissfm.ua:8000/kiss",
            "http://mp3.nashe.ru/best-128.mp3",
            "http://online-hitfm.tavrmedia.ua/HitFM",
            "http://92.53.112.250:8102/tm_128?type=.aac",
            "http://16bit.fm:8000/main_mp3_128",
            "http://stream04.media.rambler.ru/club128.mp3",
            "http://online.radiorecord.ru:8102/gop_128",
            "http://stream04.media.rambler.ru/disco128.mp3",
            "http://radio02-cn03.akadostream.ru:8114/radiovanya64.mp3",
            "http://mp3.nashe.ru/ru-128.mp3",
            "http://91.220.161.56:8088/;stream.nsv",
            "http://16bit.fm:8000/cafe_mp3_128",
            "http://stream.161.fm:8000/128",
            "http://mp3.nashe.ru/nashe-128.mp3",
            "http://dorognoe.hostingradio.ru:8000/dor_64_no",
            "http://online-rusradio.tavrmedia.ua/RusRadio",
            "http://radio-shtorm.ru:8000/112"
        ];
});




