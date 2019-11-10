const express = require('express');

const app = express();

app.get ('/api/festivals',(req,res)=>{
const festivals = 
[{"name":"Twisted Tour","bands":[{"name":"Auditones","recordLabel":"Marner Sis. Recording"},{"name":"Summon","recordLabel":"Outerscope"},{"name":"Squint-281"}]},{"name":"Small Night In","bands":[{"name":"Squint-281","recordLabel":"Outerscope"},{"name":"Wild Antelope","recordLabel":"Marner Sis. Recording"},{"name":"Yanke East","recordLabel":"MEDIOCRE Music"},{"name":"Green Mild Cold Capsicum","recordLabel":"Marner Sis. Recording"},{"name":"The Black Dashes","recordLabel":"Fourth Woman Records"}]},{"name":"Trainerella","bands":[{"name":"Manish Ditch","recordLabel":"ACR"},{"name":"YOUKRANE","recordLabel":"Anti Records"},{"name":"Adrian Venti","recordLabel":"Monocracy Records"},{"name":"Wild Antelope","recordLabel":"Still Bottom Records"}]},{"name":"LOL-palooza","bands":[{"name":"Werewolf Weekday","recordLabel":"XS Recordings"},{"name":"Jill Black","recordLabel":"Fourth Woman Records"},{"name":"Frank Jupiter","recordLabel":"Pacific Records"},{"name":"Winter Primates","recordLabel":""}]},{"bands":[{"name":"Propeller","recordLabel":"Pacific Records"},{"name":"Critter Girls","recordLabel":"ACR"}]}]

res.json(festivals);
});

const port =5000;

app.listen(port ,()=> console.log('server started on port ${port}'));