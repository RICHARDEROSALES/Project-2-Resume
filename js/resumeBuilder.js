
//My Bio Project

var bio = {
	"name": "Richard Rosales",
	"role": "Web Developer",
	"contacts":  [
	   {
		"mobile": "(210 862-5755",
		"email": "richarderosales@gmail.com", 
		"github": "richarderosales",
		"location": "San Antonio, Texas"
	   }],
	"welcomeMessage":"Welcome To My Resume Page",	
	"skills": [
            "Sales and Margin Improvement",
            "Project Management",
            "HTML,CSS,and Javascript"],
    "biopic": "images/richard.png"        
			
};

//My Education

var education = {
    "schools": [
        {
            "name": "Patten University",
            "location": "San Antonio, Texas",
            "degree": "Bachelor of Science",
            "majors": ["Management, Marketing"],
            "dates": 2014,
            "url": "http://www.patten.edu/"
        }
    ], 
    "onlineCourses": [
        {
            "title": "Front End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": 2014,
            "url": "http://udacity.com"
        }
    ]
};      

//My Work Experiance

var work = {
	"jobs": [
		{
		  "employer" : "At&t",
		  "title" : "Associate Sales Director",
		  "location" : "San Antonio, Texas",
		  "datesWorked" : "July 2004 - Present",
		  "description":"Lead a team of 182 direct reports in multiple locations. Interview, develop and mentor call center employees. Partner with CWA and fostered a collaborative respectful relationship. Lead all new initiatives to insure alignment with company goals. Oversee and develop process for all call center operations."
		},
		{
		  "employer" : "Freestand Financial Mortgage Co.",
		  "title" : "Senior Loan Officer",
		  "location" : "Tucson, Arizona",
		  "datesWorked" : "January 2003 - June 2004",
		  "description":"Responsible for increasing mortgage loan portfolio by developing business contacts within the community, specifically with the real estate community and making sales calls to prospective customers. Responsible for the Completion of mortgage loans by monitoring collection, verification, and preparation of mortgage loan documentation. Scheduled and completed mortgage loan closing."
		},
		{
		  "employer" : "O'Rielly Chevrolet",
		  "title" : "Used Car Manager",
		  "datesWorked" : "January 1998-January 2003",
		  "location" : "Tucson, Arizona",
		  "description":"Set target and goals for dealership by forecasting. Hired, motivated, counseled, and monitored the performance of all used vehicle sales employees. Prepared and administered an annual operating forecast and budgeted for the used car department. Developed, implemented, and monitored a follow-up system for used vehicle purchasers. Directed and scheduled the activities of all department employees, ensuring proper staffing at all times. Assured compliance with federal, state, and local regulations that affected used vehicle sales. Established and reinforced product knowledge standards."
		}
   ]

};

function locationizer(work_obj) {
	var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
}

//My Projects

var projects = {
	"projects":[
	   {
		 "title": "Portfolio Project",
		 "dates": "October 2014",
		 "description" : "Uses HTML, CSS and Bootstrap to create a website that showcases my work",
		 "images": ["images/Project.png"]
		},
		{
		 "title": "T-Space Call Center Blog",
		 "dates": "December 2013 - June 2014",
		 "description" : "This is a blog that assist call center employees.",
		 "images": ["images/call center.png"]
		},
		{
		 "title": "Meow App",
		 "dates": "May 2014",
		 "description" : "This app is designed to introduce students in an active mentoring class to the joy of a cerating an app.",
		 "images": ["images/meow.png"]
		},
		{
		 "title": "Online Resume",
		 "dates": "February 2015",
		 "description" : "This is an online resume to showcase me.",
		 "images":["images/resume.png"]
		}
	]
};

bio.display = function(){
	for (biograph in bio.contacts) {
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[biograph].mobile);
$("#topContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts[biograph].email);
$("#topContacts").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts[biograph].github);
$("#topContacts").append(formattedGithub);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts[biograph].location);
$("#topContacts").append(formattedLocation);
}

var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedBioPic);
if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
    }
};

bio.display();
//Finsihed Bio code
//Start Work code
work.displayWork = function(){
for(job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer= HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedJobTitle= HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedJobTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	var formattedDates= HTMLworkDates.replace("%data%",work.jobs[job].datesWorked);
	$(".work-entry:last").append(formattedDates);
	var formattedLocation= HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedLocation);
	var formattedDescription= HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
 } 
}
work.displayWork();
//Finished wok experiance fix above ; remove and displayWork to display and work.disply
//Project code
projects.display = function(){
	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);

	var	formattedTitle= HTMLprojectTitle.replace("%data%",projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);
	var	formattedDates= HTMLprojectDates.replace("%data%",projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);
	var	formattedDescription= HTMLprojectDescription.replace("%data%",projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);
			if(projects.projects[project].images.length>0){
				for (image in projects.projects[project].images)
			var	formattedImage= HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
			}
		}
};

projects.display();
//end of projects 
//Educationa Code
education.displayEdu = function(){
    for(edu in education.schools){
         $("#education").append(HTMLschoolStart);
         var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[edu].name);
         $(".education-entry:last").append(formattedSchoolName);
          formattedDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
        $(".education-entry:last").append(formattedDates);
        formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
         $(".education-entry:last").append(formattedDegree);
         formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
         $(".education-entry:last").append(formattedLocation);
         formattedUrl = HTMLonlineURL.replace("%data%", education.schools[edu].url);
         $(".education-entry:last").append(formattedUrl);
       
          formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[edu].majors[0]);
        $(".education-entry:last").append(formattedMajors);        
    };

    $(".education-entry").append(HTMLonlineClasses);
        for (onlineCourse in education.onlineCourses) {
            $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school));
            $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates));
            $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url));
        }

};        


education.displayEdu();
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() +
	   name[0].sice(1).toLowerCase();

	return name[0] +" "+name[1];   
}
$('#main').append(internationalizeButton);
$("#mapDiv").append(googleMap);