import React, { Component } from 'react';

class About extends Component{
    render() {
        return(
            <div class="back">
            <img
            src="https://res.cloudinary.com/dkcjqlakt/image/upload/v1545943795/traintrackcircle.png"
            alt="trainimg"
            class="center" 
            />
            
            <p class="aboutme-paragraph">My name is Ankita Upadhyay and I am currently a senior at the University
            of California, Santa Cruz (UCSC) pursuing a Bachelor's in Computer Science. I have experience in web development
            - namely, front-end web dev but am interested in pursuing software engineering related roles as well. If you 
            navigate to the "Projects" section of this website, you'll see some of the web dev projects I've worked on.
            I am a huge proponent of giving back to the community and deeply value volunteerism which is
            why I am passionate about creating apps that allow people to make a positive impact on their community.
            Some projects I've worked on include a volunteering match website which connects college/high school 
            students to volunteering
            opportunities within their community and "TreesGo" which is a web app that allows members of a community to 
            adopt a tree in their name (kind of like owning a star but more beneficial/useful to society). I have experience
            working with Vue.js, React, Bootstrap, Web2Py, Python, MySQL, LaTeX, and Scrum/Agile. I am currently working on enhancing my technical
            skills by learning new frameworks like Node, Django, and MERN stack. 
            I am looking for a full time job and am actively applying to technical related jobs. Some roles
            I am open to include software engineer, fullstack web developer, front-end web dev, technology analyst, technical writer, and product manager. In a company, I value
            culture, impact, and mission. Please feel free to contact me for job opportunities!
            </p>
            <p class="aboutme-paragraph">
            Also, this is non-CS related, but I am also a content developer on YouTube! Check out my
            <a href="http://youtube.com/c/AnkitaKatGreenflower" rel="noopener noreferrer" target="_blank"
            className="channel">  channel!</a>
            
            </p>
            

            </div>
            
        )

        
    }
}

export default About;