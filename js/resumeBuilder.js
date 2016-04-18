/*
This is empty on purpose! Your code to build the resume will go here.
 */
// var awesomeThoughts = "I am Inna and I am awesome!";
// console.log(awesomeThoughts);

// var funThoughts = awesomeThoughts.replace("awesome", "fun");
// $("#main").append(funThoughts);

var formattedName = HTMLheaderName.replace("%data%", "Inna Kostiuk");

var role = "Web developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name": formattedName,
	"role": role,
	"contacts": {
		"mobile": "090 3100 5799",
		"email": "email: kostiuk.inna@gmail.com",
		"location": "Tokyo"
	},
	"welcomeMessage": "Welcome to the awesome web developer hub!",
	"skills": [
		"html", "css", "java", "javascript", "spring", "bootstrap", "sql"
		],
	"picture": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/8/000/21e/320/3da10f6.jpg"
};

var work = {
};

work.postition = "Java developer";
work.employer = "Actier";
work.years = "2";
work.city = "Tokyo";

var education = {
	"schools": [
	{
	"name": "National Univercity of Ukraine 'Kyiv Polythecnic Institute'",
	"years": "2004-2010",
	"city": "Kyiv",
	"major": "Engineer - Electrician",
	"online-courses": [ "Udacity ' How to use Git and Github'", "Intro to HTML and CSS" ]
	}
 ]
}



