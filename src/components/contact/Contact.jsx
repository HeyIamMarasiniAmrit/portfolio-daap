import {useState,useEffect} from "react";
import './Contact.css'

const Contact = ({state}) => {
    const [resume,setResume]=useState("");
    useEffect(()=>{
        const {contract}=state;
        const resumeDetails=async()=>{
            const resumeCid = await contract.methods.resumeLink().call();
            setResume("https://fuchsia-personal-vulture-797.mypinata.cloud/ipfs/bafkreigsoe53fwf3zune6c4rljhpbqd7e6as7q7gjyhym3b3ymhwxjoapq"+resumeCid);
        }
        contract && resumeDetails();
    },[state])
    
    return (
        <section className="contact-section">
            <h1 className="title">
                Interested?
                Let's Get In Touch!
            </h1>
            <a href={resume} target='_blank' rel="noopener noreferrer">
                <button className="downlodeBTN">
                    View Resume
                </button>
            </a>

        </section>
    )
}

export default Contact