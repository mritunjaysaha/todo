
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://homyartest:test123@cluster0.d25ay.mongodb.net/";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

	client.connect(err => {
	  const collection = client.db("test").collection("devices");
	  // perform actions on the collection object
	   client.close();
	   console.log(err.stack);
	});

	console.log("Connected correctly to server");
