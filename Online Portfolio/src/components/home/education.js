import React from "react";
import Moment from "react-moment";
import './education.css';
import './homeComponent.css'

class Education extends React.Component {
    
    render() {
    
    const listEducation = [
        {
            campus: "LoremIpsum Institute of Information Technology",
            degree: "Bachelor of Tehnology",
            dateFrom: "09/02/2010",
            dateTo:"07/15/2013",
            description: "12.34"
        },

        {
            campus: "LoremIpsum Institute of Information Technology",
            degree: "Master of Technology",
            dateFrom: "01/15/2015",
            dateTo: "12/16/2016",
            description: "10.11"
        },
    ]

    return (
        <>
            <div className="container-fluid" id="Education">
                <h2>Education</h2>
                <br></br><br></br>
                {listEducation.map((v) =>
                    <div className="row">
                        <div className="col-8">
                            <h3>{v.campus}</h3>
                            <h4>{v.degree}</h4>
                            <br></br>
                            <p>{v.description}</p>
                            <br></br>
                        </div>
                        <div className="col-4">
                            <p className="educationDate">
                                <Moment format="MMMM YYYY">{v.dateFrom}</Moment>
                                {" - "}
                                {v.dateTo === Date.now() ? "Present" : <Moment format="MMMM YYYY">{v.dateTo}</Moment>}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
}

export default Education;