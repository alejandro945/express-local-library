//Import the mongoose module
var mongoose = require('mongoose')
var mongoDB = 'mongodb+srv://alejo:alejo1234@library-cluster.mlmsa.mongodb.net/Library-Cluster?retryWrites=true&w=majority';
//Set up default mongoose connection
mongoose.connect(mongoDB,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

