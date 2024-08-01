import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";

import "./styles/projects.css";

const Projects = () => {

    const codedDescription = (
        <span>
            I've worked on a variety of projects since beginning my coding journey and I'm proud of the progress I've made. All of 
            them are open-source and I welcome any feedback or contributions. I am actively researching backend technologies and how they 
            could be integrated into future projects. I am interested in <strong>emulators</strong> and <strong>how they are build.</strong>
        </span>
    )

    const codedTitle = (
        <span>
            Below are the projects I've worked on, try them out using Github link
        </span>
    )
    useEffect(() => {
		document.title = `Projects | ${INFO.main.title}`;
	}, []);

	return (
		<React.Fragment>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-container">
						<div className="title projects-title">
                            {INFO.project.title !== "" ? INFO.project.title : codedTitle}
						</div>

						<div className="subtitle projects-subtitle">
                            {INFO.project.description !== "" ? INFO.project.description : codedDescription}
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
