//$("#main").append("Joe Gallivan");
//var awesomeThoughts = "I am Joe ";
//awesomeThoughts +="and I am AWESOME!!!";
//funThoughts = awesomeThoughts.replace("AWESOME","FUN");
//$("#main").append(funThoughts);
//var formattedName=HTMLheaderName.replace("%data%","Joe Gallivan");
//var formattedRole=HTMLheaderRole.replace("%data%","Learning Facilitator");
//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);

// Now set up bio information

var bio = {
	formattedName:HTMLheaderName.replace("%data%","Joe Gallivan"),
	formattedRole:HTMLheaderRole.replace("%data%","Learning Facilitator"),
	formattedContact:HTMLemail.replace("%data%","joegallivan@talktalk.net"),
	formattedBioPic:HTMLbioPic.replace("%data%","js/me.jpg"),
	formattedWelcomeMsg:HTMLWelcomeMsg.replace("%data%","Welcome to my resume"),
	formattedSkills:HTMLskills.replace("%data%",["Mentor"," Note Taker"," Sometime Programmer"].toString()),

	fullBio:function() {
		return this.formattedName +
		this.formattedRole + this.formattedBioPic +
		this.formattedContact  +
		HTMLskillsStart + this.formattedSkills + this.formattedWelcomeMsg;
		}
};
$("#header").prepend(bio.fullBio());
// work object
var work = {};
work.position = "Learning Facilitator";
work.employer = "Edge Hill University";
work.yearsWorked = 8;
work.place = "Ormskirk, UK";
//$("#main").append(HTMLworkStart);
$("#main").append(HTMLworkTitle.replace("%data%",work["position"]))
// education object
var education = {};
education["lastSchool"] = "King Edwards VI Aston";
education["yearsAttended"] = 7;
education["schoolsCity"] = "Birmingham, UK";
$("#main").append(HTMLschoolName.replace("%data%",education.lastSchool));



