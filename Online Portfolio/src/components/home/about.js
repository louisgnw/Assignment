import React from "react";
import './about.css';

class About extends React.Component {
    render() {
    
    return (
        <>
            <div className="container-fluid" id="About">
                <div className="aboutHeader">
                    <h1>Lorem</h1>
                    <h1 className="headerRight">Ipsum</h1>
                </div>
                <div className="aboutHeader">
                    <h3>+62-0123456789-</h3>
                    <h3 className="headerRight">loremipsum@gmail.com</h3>
                </div>
                <br></br>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <br></br>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                <br></br>
                {/* Linkedin logo here */}
                <div>
                    <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" style={{height:50}} alt="Linkedin" /> <></>
                    <img src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_github-512.png" style={{height:50}} alt="Github"/>
                </div>
                {/* GitHub logo here */}
            </div>
        </>
    );
    }
}

export default About;