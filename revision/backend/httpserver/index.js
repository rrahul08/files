const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())

// function middleware(req,res,next){
//   console.log("middleware"+req.headers.counter);
//   next();
// }

// app.use(middleware);
// app.get('/', (req, res) => {
//     var counter = req.query.counter;
//   res.send('calculated sum is ' + calculatesum(counter))
// })
app.get('/handlesum', (req, res) => {
  var counter = req.query.counter;

  var sum = {
    sum:calculatesum(counter)
  }
res.send(sum)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


function calculatesum(ctr){
    var sum=0;
    for(let i=0;i<ctr;i++){
        sum +=i;

    }
    return sum;
}