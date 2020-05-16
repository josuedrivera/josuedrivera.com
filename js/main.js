const headshot = {
	template: `
  
	`
}
const aboutMe = {
	template: `
    <div class="container is-fluid has-background-white">
        <p class="title">About Me</p>
        <hr>
        <p class="subtitle">Hello World! My name is Josue. I am a front-end developer from the Bay Area. Please hire me; I need money really, really bad. Thanks!</p>
        <p class="subtitle">I am enthusiastic and passionate about art, music, football, and web development. After over a decade in the fast-paced environment of Corporate Security and Emergency Response, I now look to transition my soft and hard skills into the world of Web Development.
            <br>
            <br>
        As a Web Developer, I enjoy the challenge and demand of creative, solution based thinking it requires in order to produce content worthy of an audience. I am passionate about building as well as deconstructing 'things' while learning throughout the whole process. 
            <br>
            <br>
        I have a focus on Front-End Development but I am also familiar with many aspects of Back-End programming. 
        I am currently utilizing these skills to build personal projects for my portfolio, with the ultimate goal of joining a team that enjoys solving difficult problems and shares in my appreciation for direct, clear, and concise communication and open-minded feedback. 
        </p>
            <br>
            <br>
    </div>
	`
}
const hardSkills = {
	template: `
    <div class="container is-fluid has-background-white">
        <p class="title">Hard Skills</p>
        <p class="subtitle">
            I have a focus on Front-End Development but I am also familiar with many aspects of Back-End programming. I am proficient with HTML, CSS (SCSS/SASS), and JavaScript (ECMAScript 5 and 6) as well as Responsive Design, Cross Browser Development, Browser Dev Tools, Testing/Debugging, Command Line, Git/Version Control, APIs and RESTful Routes. 
        </p>

        <ul>In addition, I also have experience with libraries, frameworks, and databases like:
            <li>
                jQuery,  Vue.js, JSON
            </li>
            <li>
                Bootstrap 4,  Bulma, Semantic UI
            </li>
            <li>
                Node.js, NPM and various node packages not limited to but including express.js and passport.js, MySQL, MongoDB, and I am currently learning Python
            </li>
        </ul>

        <ul>Also experienced in:
            <li>
                Adobe XD, Adobe CC(Illustrator, Photoshop, InDesign)
            </li>
            <li>
                MS Suite, Google Suite (including Apps Script)	
            </li>
            <li>
                Content Management Systems
            </li>
            <li>
                JIRA - Issue and Project Tracking Software
            </li>
        </ul>				
    </div>
	`
}
const softSkills = {
	template: `
    <div class="container is-fluid has-background-white">
        <p class="title">Soft Skills</p>
        <p class="subtitle">A list of my soft skills bc I like people...</p>
        <ul> Core Competencies:
            <li>
                Conceptual/Creative Thinking
            </li>
            <li>
                Adaptable/Solution Oriented
            </li>
            <li>
                Drive for Efficiency
            </li>
            <li>
                Embraces Teamwork
            </li>
            <li>
                Empowering of Others
            </li>
            <li>
                Accountable & Approachable
            </li>
            <li>
                Empathic and Open Minded
            </li>
            <li>
                Willingness to Grow 
            </li>
            <li>
                Self-Starter/Motivated
            </li>
            <li>
                Interpersonal Awareness
            </li>
            <li>
                Ability To Take Criticism • Learn From Mistakes
            </li>
            <li>
                Excellent Written and Verbal Communication Skills  
            </li>
        </ul>  
    </div>
	`
}

const router = new VueRouter({
	routes: [
		{
			path: '/',
			component: headshot
		},
		{
			path: '/aboutMe',
			component: aboutMe
		},
		{
			path: '/hardSkills',
			component: hardSkills

		},
		{
			path: '/softSkills',
			component: softSkills

		}
	]
})

var routeTest = new Vue({
	router,
	el: '#about-me',
	data: {

	},
	methods: {

	}
}).$mount('#about-me')


























// STICKY NAVBAR
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("sticky-navbar");
var welcomenav = document.getElementById("welcome-nav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    welcomenav.classList.add("hide");
  } else {
    navbar.classList.remove("sticky");
    welcomenav.classList.remove("hide");
  }
}



// COPY EMAIL
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}
// ^^^REWRITE IN VANILLA JS
// function myFunction() {
//     var copyText = document.getElementById("myemail");
//     copyText.select();
//     copyText.setSelectionRange(0, 99999);
//     document.execCommand("copy");
    
//     var tooltip = document.getElementById("myTooltip");
//     tooltip.innerHTML = "Copied: " + copyText.value;
//   }
  
//   function outFunc() {
//     var tooltip = document.getElementById("myTooltip");
//     tooltip.innerHTML = "Copy to clipboard";
//   }





