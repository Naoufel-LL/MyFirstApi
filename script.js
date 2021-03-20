const express = require('express');
const app = express();
const port = process.env.PORT || 3000
app.use(express.json());
const courses = [
    {"id":1,"name":"Course1","title":"Html Tutorial","author":"Naoufel Bahassoune"},
    {"id":2,"name":"Course2","title":"Css Tutorial","author":"Naoufel Bahassoune"},
    {"id":3,"name":"Course3","title":"JavaScript Tutorial","author":"Naoufel Bahassoune"},
    {"id":4,"name":"Course5","title":"Python Tutorial","author":"Naoufel Bahassoune"},
    {"id":5,"name":"Course6","title":"NodeJs Tutorial","author":"Naoufel Bahassoune"},
    {"id":6,"name":"Course7","title":"ReactJS Tutorial","author":"Naoufel Bahassoune"},
    {"id":7,"name":"Course8","title":"Sass Tutorial","author":"Naoufel Bahassoune"},
    {"id":8,"name":"Course9","title":"ExpressJS Tutorial","author":"Naoufel Bahassoune"},
];
app.get('/',(req,res)=>{
    res.send('Hello World ❤,This My First Api That I Created After 2 Days of Learning Node.js Express.Js 👨‍💻,Go To /api to see What available in this Api ');
});
app.get('/api',(req,res)=>{
    res.send('/courses')
})
app.get('/api/courses',function(req,res){
    res.json(courses);
});

app.get('/api/courses/:id',function (req,res) {
    const course = courses.find(c=> c.id === parseInt(req.params.id));
     if (!course) return res.status(404).send('The Course With The Given Id Not Found 404 😥')
     res.send(course)  
});
app.post('/api/courses',function(req,res){
  const course =[{
      "id":courses.length +1,
      "name":req.body.name,
      "title":req.body.title,
      "author":req.body.author
  }]
    courses.push(course);
    res.json(course);
})
app.put('/api/courses/:id',(req,res)=>{
    const course = courses.find(c=>c.id=== parseInt(req.params.id));
    if (!course) return res.status(404).send('The Course With The Given Id Not Found 404 😥')
    course.name = req.body.name;
    course.title = req.body.title;
    course.author = req.body.author;
    res.send(course);
});
app.delete('/api/courses/:id',(req,res)=>{
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The Course With The Given Id Not Found 404 😥')
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course);
})
app.listen(port,()=>{console.log(`Listening on port ${port}`)});
