import React from "react";
import Moment from "react-moment";
import './experience.css';
import './homeComponent.css';

class Experience extends React.Component {

    render() {

    const listExperience = [
        {
            title: "Github Campus Expert",
            institution: "Github",
            dateFrom: "08/28/2018",
            dateTo: Date.now(),
            description: "Responsible for building the on campus community with the support of GitHub."
        },

        {
            title: "Opensource Developer Intern",
            institution: "Fossasia",
            dateFrom: "06/01/2019",
            dateTo: Date.now(),
            description: "Contributing to Fossasia's open event server and frontend as an intern. Resolver numerous bugs and added new features to the everyday platform."
        },

        {
            title: "Software Developer Intern",
            institution: "Hasura",
            dateFrom: "12/12/2018",
            dateTo:"01/03/2019",
            description: "Worked on Hassura's GraphQL engine and added new features in it."
        },
    ];
    
    return (
        <>
            <div className="container-fluid" id="Experience">
                <h2>Experience</h2>
                <br></br><br></br>
                {listExperience.map((v) =>
                    <div className="row">
                        <div className="col-8">
                            <h3 className="experienceTitle">{v.title}</h3>
                            <h4>{v.institution}</h4>
                            <p>{v.description}</p>
                        </div>

                        <div className="col-4">
                            <p className="experienceDate">
                                <Moment format="MMMM YYYY">{v.dateFrom}</Moment>
                                {" - "}
                                {v.dateTo === Date.now() ? "Present" : <Moment format="MMMM YYYY">{v.dateTo}</Moment>}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
    }
}

export default Experience;