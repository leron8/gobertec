app.factory('generalRep', function($resource) {

	var crearMenu = function(fin){
    var datos = [
      {
        text: "Resumen",
        state: {
          expanded: false
        },
        nodes: [
          {
            text: "Consumo",
            href: "#/riesgos/resumen/consumo"
          },
          {
            text: "Comercial",
            href: ""
          },
          {
            text: "Vivienda",
            href: ""
          }
        ]
      },
      {
        text: "Matriz por cantidad de créditos",
        state: {
          expanded: false
        },
        nodes: [
          {
            text: "Consumo",
            href: "#/matriz/consumo/cantidad"
          },
          {
            text: "Comercial",
            href: ""
          },
          {
            text: "Vivienda",
            href: ""
          }
        ]
      },
      {
        text: "Matriz por monto de créditos",
        state: {
          expanded: false
        },
        nodes: [
          {
            text: "Consumo",
            href: ""
          },
          {
            text: "Comercial",
            href: ""
          },
          {
            text: "Vivienda",
            href: ""
          }
        ]
      },
      {
        text: "Administración del sistema",
        state: {
          expanded: false
        },
        nodes: [
          {
            text: "Carga de archivo",
            href: "#"
          },
          {
            text: "Datos de la caja",
            href: ""
          },
          {
            text: "Usuarios",
            href: ""
          }
        ]
      }
    ];

    $('#tree').treeview({data: datos, enableLinks: true});
    fin();
	};

	return {
		crearMenu: crearMenu
	}

});
