// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'Movie Night',
  	routes: [
		{
		path: '/serv/',
    	url: 'serv.html',
    	name: 'inicio',
  		},
		{
		path: '/categorias/',
    	url: 'serv.html',
    	name: 'categorias',
  		},
		{
		path: '/perfil/',
    	url: 'perfil.html',
    	name: 'perfil',
  		},
		{
		path: '/#/',
			url:'#',
			name: '#',
			
		}
		
	],
	dialog: {
		title: 'Movie Night',
		buttonOk: 'Aceptar',
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});