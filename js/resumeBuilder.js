//$("#main").append("Joe Gallivan");
//var awesomeThoughts = "I am Joe ";
//awesomeThoughts +="and I am AWESOME!!!";
//funThoughts = awesomeThoughts.replace("AWESOME","FUN");
//$("#main").append(funThoughts);
var formattedName=HTMLheaderName.replace("%data%","Joe Gallivan");
var formattedRole=HTMLheaderRole.replace("%data%","Learning Facilitator");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

