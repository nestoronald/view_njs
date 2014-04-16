var express =require('express'), app = express(), jade = require('jade');
var http = require('http'), server = http.createServer(app),
    io = require('socket.io').listen(server);

//app.use(express.bodyParser());

// vistas con jade
app.set('views',__dirname);
app.set('view engine','jade');
app.set('view option',{layout: false});
app.get('/',function(req,res){
	res.render('base.jade');
});
//Peticiones por get
app.get('/hola',function(req,res){
	res.send('hola bienvenido');
});
app.get('/users/:userName',function(req,res){
	var name = req.params.userName;
	res.send('Hola '+name+' Bienvenido ...!');
});
//Peticiones por post
//app.post('/users',function(req,res){
//	var username = req.body.username;
//	res.send('Hola, '+username+' Bienvenido...!');
//});

// expresiones regulares 
app.get(/\/personal\/(\d*)\/?(edit)?/, function (req, res) {
	var message = 'El perfil del empleado #'+ req.params[0];
	if(req.params[1]==='edit'){
		message = 'Editando '+ message;
	}else{
		message = 'Viendo '+ message;
	}
	res.send(message);
});

server.listen(3000)



