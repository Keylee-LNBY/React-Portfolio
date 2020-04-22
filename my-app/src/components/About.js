import React from "react";

const About = () => {
    return (
        <div class="col s12 grey darken-3">
            <h2 class="header white-text">About Me</h2>
            <div class="card horizontal">
                <div class="card-image grey accent-1">
                    <img src="/images/profilePic.jpg"/>
                </div>
                <div class="card-stacked grey accent-1">
                    <div class="card-content">
                        I am a talented coder with an interest in building the most effective, user-friendly, and beautiful software possible. I come from a background in higher-education, eco-tourism, and corporate finance which has given me the opportunity to collaborate with a large variety of people. I have experience with marketing, management, corporate culture, and human resources. I am currently sharpening my development and coding skills through a Trilogy Bootcamp hosted at the University of Denver, which will wrap up in April 2020.
                        <br/>
                        Outside of work I love volunteering at organic farms, learning new programming languages, working my way through every recipe in the family cookbook, and indulging my love for seeing new places.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;