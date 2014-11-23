

// Bio object
var bio = {
	    "name" : "Joe Gallivan",
	    "role" : "Learning Facilitator",
	    "welcomeMessage" : "Welcome to my CV",
	    "contacts" : {
	    	"mobile" : "fill in later",
	    	"email" : "joegallivan@talktalk.net",
	    	"github" : "joegallivan",
	    	"location" : "Southport, UK"
	    },
	    "skills" : [
	        "Mentor",
	        "Note Taker",
	        "Sometime Programmer",
	        "IT Development Manager",
	        "IT Project Manager"]
};
// Work object
var work = {
	"jobs" : [
	{
		"employer" : "Edge Hill University",
		"title" : "Learning Facilitator",
		"location" : "Ormskirk, UK",
		"dateStarted" : 2006,
		"dateFinished" : 2015,
		"description" : "Help students with disabilities"
	},
	{
		"employer" : "Alliance & Leicester",
		"title" : "Development Manager",
		"location" : "Liverpool, UK",
		"dateStarted" : 1980,
		"dateFinished" : 2006,
		"description" : "Manage IT projects, support and maintenance"
	},
	{
		"employer" : "F W Woolworth",
		"title" : "Systems Programmer",
		"location" : "Rochdale, UK",
		"dateStarted" : 1978,
		"dateFinished" : 1980,
		"description" : "Support the organisation's operating system"
	},
	{
		"employer" : "UK Department of Health",
		"title" : "Analyst Programmer",
		"location" : "Fleetwood, UK",
		"dateStarted" : 1974,
		"dateFinished" : 1978,
		"description" : "Design and develop programs to specification"
	}
	]
};
// Education object
var education = {
	"schools" : [
	{
		"name": "Liverpool John Moores University",
		"location": "Liverpool, UK",
		"degree": "MBA",
		"majors" : ["Business Studies"],
		"dateStarted" : 1992,
		"dateGraduated" : 1995,
		"url" : "http://www.ljmu.ac.uk"
	},
	{
		"name": "Liverpool Polytechnic",
		"location": "Liverpool, UK",
		"degree": "BSC(Econ)",
		"majors": ["Economics"],
		"dateStarted" : 1971,
		"dateGraduated" : 1974,
		"url" : "http://www.ljmu.ac.uk"
	}
	],
	"onlineCourses" : [
	{
		"title": "JavaScript Syntax",
		"school": "Udacity",
		"dateStarted" : 2014,
		"dateCompleted" : 2014,
		"url" : "http://www.udacity.com/course/ud804"
	},
	{
		"title": "Intro to Java Programming",
		"school": "Udacity",
		"dateStarted" : 2013,
		"dateCompleted" : 2013,
		"url" : "http://www.udacity.com/course/cs046"
	},
	{
		"title": "Intro to Computer Science",
		"school": "Udacity",
		"dateStarted" : 2012,
		"dateGraduated" : 2013,
		"url" : "http://www.udacity.com/course/cs101"
	}
	]
};
// Projects Object
var projects = {
	"projects" : [
	{
		"title" : "XP Migration",
		"dateStarted" : 2004,
		"dateCompleted" : 2006,
		"description" : "Manage the migration of the organisation's client computers to Windows XP",
		"urls" : ["images/computermonitor.jpg"]
	},
	{
		"title" : "Integrated Financial and Administrative Systems",
		"dateStarted" : 1997,
		"dateCompleted" : 2000,
		"description" : "Manage parts of the migration of the organisation's financial, accounting and administrative systems to Oracle Applications",
		"urls" : ["images/computermonitor.jpg"]
	},
	{
		"title" : "Centralised Support",
		"dateStarted" : 2000,
		"dateCompleted" : 2002,
		"description" : "Manage a project to reorganise the maintenance and support of the organisation's major applications",
		"urls" : ["images/computermonitor.jpg"]
	},
	{
		"title" : "Corporate Charging",
		"dateStarted" : 1992,
		"dateCompleted" : 1994,
		"description" : "Manage the testing andimplementation of a bespoke application to charge corporate bank customers",
		"urls" : ["images/computermonitor.jpg"]
	}
	]
};

// Now add formatted skills details to the CV
// first, personal details except skills
var FormattedBio = {
	formattedName:HTMLheaderName.replace("%data%",bio.name),
	formattedRole:HTMLheaderRole.replace("%data%",bio.role),
	formattedEmail:HTMLemail.replace("%data%",bio.contacts["email"]),
	formattedGithub:HTMLgithub.replace("%data%",bio.contacts.github),
	formattedLocation:HTMLlocation.replace("%data%",bio.contacts.location),
	formattedBioPic:HTMLbioPic.replace("%data%","js/me.jpg"),
	formattedWelcomeMsg:HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage),
	fullBio:function() {
	    return this.formattedName +
		this.formattedRole + this.formattedBioPic +
		this.formattedEmail  + this.formattedGithub + this.formattedLocation +
		this.formattedWelcomeMsg;
		}
};
$("#header").prepend(FormattedBio.fullBio());
// Next the skills info
if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (var i=0; i<bio.skills.length; i++) {
		    var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
		    $("#skills").append(formattedSkill);
		    
	}
}

// Lession 2.5 - work objects bundled into a function
var displayWork = function() {
for (thisOne in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var job = work.jobs[thisOne];
	var employer = HTMLworkEmployer.replace("%data%",job.employer);
	var title = HTMLworkTitle.replace("%data%",job.title);
	var located = HTMLworkLocation.replace("%data%","Based at " + job.location + "  .");
	var dateStart = HTMLworkDates.replace("%data%","Date Started " + job.dateStarted + " -");
	var dateEnd = HTMLworkDates.replace("%data%","- Date Finished "+job.dateFinished);
	var dates = dateStart + dateEnd;
	var description = HTMLworkDescription.replace("%data%",job.description);
	$(".work-entry:last").append(employer + title + located + dates + description);
	
	
}
};
displayWork();	
/*
// Collect the clicks as per Lesson 2.7
$(document).click(function(loc) {
	logClicks(loc.pageX,loc.pageY);
});

// Internationalise the surname as per Lesson 2.9
$("#main").append(internationalizeButton);
var inName = function() {
	var pos = bio.name.search(" "); // position of space between 1st name & surname
	return bio.name.slice(0,pos) + " " + bio.name.slice(pos+1,bio.name.length).toUpperCase();
};
*/
// Show projects - function inside object - Lesson 2.11
projects.display = function () {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var entry = projects.projects[project]; // project object
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",entry.title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%","Date Started " + entry.dateStarted));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%"," ---Date Completed " + entry.dateCompleted));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%",entry.description));
        for (url in entry.urls) {
        	$(".project-entry:last").append(HTMLprojectImage.replace("%data%",entry.urls[url]));
        }
	}
};
projects.display();
