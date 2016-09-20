app.controller('mainCtrl', function($scope, $rootScope, $location){

  $rootScope.menu = false;

});

app.controller('loginCtrl', function($scope, $rootScope, $location, generalRep){
  $rootScope.menu = false;
  $scope.error=false;
  $scope.login = function(){
                 //Crear el menú de acuerdo al usuario
        if ($scope.usuario==='malpica' && $scope.password==='riesgos'){

            generalRep.crearMenu(function(){
              console.log('Menu creado');
            });

              $location.path('/inicio');
            }
        else {
            $scope.error=true;
            }

  };
});

app.controller('inicioCtrl', function($scope, $rootScope, $location){
  $rootScope.menu = false;
  $scope.riesgos = function(){
    $location.path('/riesgos');
  };

});

app.controller('riesgosCtrl', function($scope, $rootScope, $location){
  $rootScope.menu = true;
});

app.controller('matrizConsCantidadCtrl', function($scope, $location){

});

app.controller('cargaCtrl', function($scope, $location){
  $scope.csv = {
    	content: null,
    	header: true,
    	headerVisible: true,
    	separator: ',',
    	separatorVisible: true,
    	result: null,
    	encoding: 'ISO-8859-1',
    	encodingVisible: true,
    };

});
