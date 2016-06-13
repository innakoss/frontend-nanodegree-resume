//** display my name & role **//
var formattedName = HTMLheaderName.replace("%data%", "Inna Kostiuk");
var formattedRole = HTMLheaderRole.replace("%data%", "Web developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name": "Inna Kostiuk",
	"role": "Web developer",
	"contacts": {
		"mobile": "090 3100 5799",
		"email": "kostiuk.inna@gmail.com",
		"github": "https://github.com/innakoss",
		"location": "Tokyo"
	},
	"welcomeMessage": "Welcome to the awesome web developer hub!",
	"skills": [
		"HTML", "CSS ", "Java", "JavaScript", "Spring", "Bootstrap", "Sql"
	],
	"picture": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/8/000/21e/320/3da10f6.jpg"
};

var work = {
	"jobs": [
	{
		"employer": "Actier",
		"title": "Web developer",
		"location": "Tokyo, Japan",
		"dates": "2014 to present",
		"description": "Developing front-end and back-end of web applications"
	}, {
		"employer": "Samsung Electronics R&D Center",
		"title": "SQA Engineer",
		"location": "Kyiv, Ukraine",
		"dates": "2011 - 2013",
		"description": "Monitored, analyzed and tested software during development. Performed system manual and automated testing that assured product quality"
	}, {
		"employer": "Balville S.A.",
		"title": "Web Test Engineer",
		"location": "Kyiv, Ukraine",
		"dates": "2010 - 2011",
		"description": "Assured quality of social media site"
	}
	]
};

var projects = {
	"projects": [
	{
		"title": "かけるくん",
		"dates": "2015 to present",
		"description": [
		"SFA application that generates daily sales report from speech recorded on a mobile device",
		"Created responsive UI and implemented server-side functionallity for user administration part of application",
		"Wrote unit tests using Spoke framework",
		"Implemented client side and server side functionallity for main application"
		],
		"image": "http://www.kakeru-kun.com"
	},
	{
		"title": "イーキャリアFA",
		"dates": "2014 - 2016",
		"description": [ 
		"Wrote server-side REST API",
		"Coded temporal design that was used by team members that accelerated project developement until final design arrived",
		"Build back-end functionality for employment agency applicatoin"
		],
	},
	{
		"title": "Data managment system for online advertising company",
		"dates": "2014 - 2015",
		"description": [
		"Implemented server-side functionality",
		"Coded client side parts of application"
		]
	}
	]
};

var education = {
	"schools": [
	{
		"name": "National Univercity of Ukraine 'Kyiv Polythecnic Institute'",
		"location": "Kyiv, Ukraine",
		"degree": "MA",
		"majors": "Engineer - Electrician",
		"dates": "2008 - 2010",
		"url": "http://kpi.ua/en/home"
	},
	{
		"name": "National Univercity of Ukraine 'Kyiv Polythecnic Institute'",
		"location": "Kyiv, Ukraine",
		"degree": "BA",
		"majors": "Instrument Engineering",
		"dates": "2004 - 2008",
		"url": "http://kpi.ua/en/home"
	}
	],
	"online-courses": [
	{
		"title": "Intro to HTML and CSS",
		"school": "Udacity",
		"dates": "2015",
		"url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
	},
	{
		"title": "How to Use Git and GitHub",
		"school": "Udacity",
		"dates": "2016",
		"url": "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
	},
	{
		"title": "JavaScript Testing",
		"school": "Udacity",
		"dates": "2015",
		"url": "https://www.udacity.com/course/javascript-testing--ud549"
	}
	]
}

//** display my contacts section **//
function displayContacts() {
	var formattedModile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedModile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedLocation);
}
displayContacts();

// ** my resume photo **//
var formattedPicture = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedPicture);
$("#header").append(formattedWelcomeMessage);


if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkills);
	}
}

function displayWork() {
	// display an employer name and job title
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTittle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTittle;
		// display employer title
		$(".work-entry:last").append(formattedEmployerTitle);
		// display location
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		// display work dates
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedWorkDates);
		// display work description
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedWorkDescription);
	}
}
displayWork();

function displayProjects() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		// console.log(formattedProjectTitle);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);

		//** list bullet points in my project section
		var descriptionWithNewLine = '';
		for (singleString in projects.projects[project].description) {
			var initialValue = projects.projects[project].description[singleString];
			descriptionWithNewLine += initialValue + '<br/>';
		}
		//**
		// console.log(descriptionWithNewLine);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", descriptionWithNewLine);
		var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);

		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDescription);
		$(".project-entry:last").append(formattedProjectImage);
	}
}
displayProjects();

function displayEducation() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolNameAndDegree = formattedSchoolName + formattedSchoolDegree;
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

		$(".education-entry:last").append(formattedSchoolNameAndDegree);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolMajor);
	}
}
displayEducation();

function displayOnlineCourses() {
	$("#education").append(HTMLonlineClasses);
	for (course in education["online-courses"]) {
		$("#education").append(HTMLschoolStart);

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education["online-courses"][course].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education["online-courses"][course].school);
		var formattedOnlineTitleAndSchool = formattedOnlineTitle + formattedOnlineSchool;
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education["online-courses"][course].dates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education["online-courses"][course].url);

		$(".education-entry:last").append(formattedOnlineTitleAndSchool);
		$(".education-entry:last").append(formattedOnlineDates);
		$(".education-entry:last").append(formattedOnlineURL);
	}
}
displayOnlineCourses();

$("#mapDiv").append(googleMap);

// display footer contacts
var contactsList = $("#topContacts > li");
console.log(contactsList);
$("#footerContacts").append(contactsList);






