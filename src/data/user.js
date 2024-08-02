const INFO = {
	main: {
		title: "Yash's Portfolio",
		name: "Yashraj Chopra",
		email: "yashuxchopra@gmail.com",
		logo: "../headshot.png",
	},

	socials: {
		twitter: "https://twitter.com/itsYashuC",
		github: "https://github.com/yashrajxchopra",
		linkedin: "https://www.linkedin.com/in/yashraj-chopra-637550264",
	},

	homepage: {
		title: "",
		description: "",
	},

	about: {
		title: "",
		description: "",
	},

    contact: {
		title: "",
		description: "",
	},

    project: {
		title: "",
		description: "",
	},

	projects: [
		{
			title: "Portfolio",
			description:
				`A simple and responsive web app to showcase projects, display contact information and my skills as a UI/UX Developer.`,
            
            // I recommend not exceeding four logos here, leads to a poor mobile UX
			logos: [
                "../react-icon.png",
                "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
                "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/css/css.png",
            ],
			linkText1: "GitHub",
			link1: "https://github.com/yashrajxchopra",
            linkText2: "Live",
			link2: ""
		},

		{
			title: "Instagram Clone",
			description:
				`Instagram Clone web application created using React library and Node.js/MongoDb featuring user authorization, creating posts and commenting other's post.`,
            logos: [
                "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
                "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/css/css.png",
                "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/html/html.png",
                "../openai-icon.png",
            ],
			linkText1: "GitHub",
			link1: "https://github.com/yashrajxchopra/instagram-clone",
            linkText2: "Live",
			link2: "https://github.com/yashrajxchopra/instagram-clone"
		},

		{
			title: "Nutrion Web App",
			description:
				`Created a nutrition application using HTML and JavaScript to 
				display nutritional information about food items entered by 
				users. Using RESTful APIs to fetch data and present it. With user login/signup using Spring Boot.`,
            logos: [
                "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
                "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/css/css.png",
                "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/html/html.png",
                "../openai-icon.png",
            ],
			linkText1: "GitHub",
			link1: "https://github.com/yashrajxchopra/UserLoginForNutritionApp",
            linkText2: "Live",
			link2: "https://github.com/yashrajxchopra/UserLoginForNutritionApp"
		}
	],
};

export default INFO;
