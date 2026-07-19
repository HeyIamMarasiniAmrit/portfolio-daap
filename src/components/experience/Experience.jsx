import { useState, useEffect } from "react";
import './Experience.css';
import { SlCalender } from "react-icons/sl";   // ← Correct import

const Experience = ({ state }) => {
    const [education, setEducation] = useState([]);

    useEffect(() => {
        const { contract } = state;

        const educationDetails = async () => {
            if (contract) {
                try {
                    const educationData = await contract.methods.allEducationDetails().call();
                    setEducation(educationData);
                } catch (error) {
                    console.error("Error fetching education details:", error);
                    setEducation([]);
                }
            }
        };

        educationDetails();
    }, [state]);

    return (
        <section className="exp-section">
            <h1 className="title">Experience & Education</h1>

            <div className="container">
                {/* Education Section */}
                <div className="education">
                    <h1 className="edu-title">Education</h1>
                    {education && education.length > 0 ? (
                        education.map((edu, index) => (
                            <div className="edu-card" key={index}>
                                <p className="card-text1">
                                    <SlCalender className="icon" /> {edu.date}
                                </p>
                                <h3 className="card-text2">{edu.degree}</h3>
                                <p className="card-text3">{edu.knowledgeAcquired}</p>
                                <p className="card-text4">{edu.instutionName}</p>
                            </div>
                        ))
                    ) : (
                        <p>No education details available.</p>
                    )}
                </div>

                {/* Experience Section */}
                <div className="education">
                    <h1 className="edu-title">Experience</h1>

                    {/* Card 1 */}
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className="icon" /> March 2020 - Present
                        </p>
                        <h3 className="card-text2">Blockchain Developer Intern</h3>
                        <p className="card-text3">
                            Learned this this and that. Learned this this and that.
                        </p>
                        <p className="card-text4">Code Learning</p>
                    </div>

                    {/* Card 2 */}
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className="icon" /> March 2020 - Present
                        </p>
                        <h3 className="card-text2">Blockchain Developer Intern</h3>
                        <p className="card-text3">
                            Learned this this and that. Learned this this and that.
                        </p>
                        <p className="card-text4">Code Learning</p>
                    </div>

                    {/* Card 3 */}
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className="icon" /> March 2020 - Present
                        </p>
                        <h3 className="card-text2">Blockchain Developer Intern</h3>
                        <p className="card-text3">
                            Learned this this and that. Learned this this and that.
                        </p>
                        <p className="card-text4">Code Learning</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;