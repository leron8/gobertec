var app = angular.module('myApp', ['ngRoute', 'ngResource', 'ngCsvImport']);//, 'angulartics', 'angulartics.google.analytics']);

app.config(['$routeProvider','$httpProvider',
  function($routeProvider, $httpProvider) {

		//$httpProvider.interceptors.push('TokenInterceptor');

    $routeProvider.
      when('/', {
				templateUrl: 'parciales/login.html',
				controller: 'loginCtrl',
      	access: {
        	requiredLogin: false
      	}
			}).
      when('/inicio', {
        templateUrl: 'parciales/inicio.html',
        controller: 'inicioCtrl',
        access: {
          requiredLogin: true
        }
      }).
      when('/riesgos', {
        templateUrl: 'parciales/riesgos.html',
        controller: 'riesgosCtrl',
        access: {
          requiredLogin: true
        }
      }).
      when('/riesgos/resumen/consumo', {
        templateUrl: 'parciales/riesgos-res-consumo.html',
        controller: '',
        access: {
          requiredLogin: true
        }
      }).
      when('/carga', {
        templateUrl: 'parciales/carga.html',
        controller: 'cargaCtrl',
        access: {
          requiredLogin: true
        }
      }).
      when('/matriz/consumo/cantidad', {
        templateUrl: 'parciales/matriz-cons-cantidad.html',
        controller: 'matrizConsCantidadCtrl',
        access: {
          requiredLogin: true
        }
      }).
			otherwise({
        redirectTo: '/'
      });
	}]);

/*app.run(function($rootScope, $window, $location, AuthenticationFactory) {
  // revisar si el usuario ya está firmado, cuando la página refresque
  AuthenticationFactory.check();

  $rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {
		$rootScope.loading = true;

    if ((nextRoute.access && nextRoute.access.requiredLogin) && !AuthenticationFactory.isLogged) {
      $location.path("/login");
    } else {
      // revisar si el objeto existe, si no traerlo, en caso de cuando la página refresque
      if (!AuthenticationFactory.usuario){
        AuthenticationFactory.numPerfil = $window.sessionStorage.numPerfil;
        AuthenticationFactory.usuario = $window.sessionStorage.usuario;
        //rol
      };
    }
  });*/

  /*$rootScope.$on('$routeChangeSuccess', function(event, nextRoute, currentRoute) {
		$rootScope.loading = false;

    $rootScope.showMenu = AuthenticationFactory.isLogged;
    $rootScope.showMenuNotLogin = !AuthenticationFactory.isLogged;

    // si el usuario está logueado, llevarlo a su página de perfil
    if (AuthenticationFactory.isLogged == true && $location.path() == '/login') {
      $location.path('/perfil-admin/' + AuthenticationFactory.numPerfil);
    }
  });

});*/
