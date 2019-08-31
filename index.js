const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;

app.use(bodyParser.urlencoded({extended:true}));
var db;

mongoClient.connect('mongodb+srv://tanvirgeek:<password>@cluster0-nescq.mongodb.net/test?retryWrites=true&w=majority',(err, client)=>{
	if(err){
		return console.log(err)
	}
	db = client.db(Cluster0);
	app.listen(3000, function(){
	console.log('I am a novice serverside coder');
	});
})



app.get('/',(req, res)=>{
	res.send("Hello World");
});
app.get('/file', (req,res)=>{
	res.sendFile(__dirname + '/view/file.html');
})

app.post('/quotes', (req,res)=>{
	console.log("post method is handling request in get</br>");
	console.log(req.body);
})