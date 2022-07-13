//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true})); // by setting true it allows us to post nested objects
                                                // αντι για url μπαίνει και το json or text


//GET
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html"); //αντί για σκέτο index.html ωστέ να μπαίνει στον φάκελο και να ψάχνει το index.html 
});

/**arrow function   
app.get('/', (req, res) => {
  res.send('Hello World!')
})
*/

//POST
app.post('/', function(req, res) {

    var number1 = Number(req.body.number1);
    var number2 = Number(req.body.number2);
    
    
    var result = number1 + number2;

    res.send(" Thanks for posting that " + result); 
});


//BMI CALCULATOR

//GET
app.get('/bmicalculator', function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html"); 
});


//POST
app.post('/bmicalculator', function(req, res) {

    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    
    var resultBMI = weight / (height*height);

    res.send(" Your BMI is " + resultBMI); 
});




app.listen(3000,function() {
    console.log("Server is running on port 3000")
  })