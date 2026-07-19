import React, { useEffect, useState } from 'react';
import { Modal, ModalBody, Row } from "reactstrap";
import './Hero.css';

const Hero = ({ state }) => {
    const [modal, setModal] = useState(false);
    const [description, setDescription] = useState("");
    const [cid, setCid] = useState("");

    // Fetch description
    useEffect(() => {
        const { contract } = state;
        const getDescription = async () => {
            if (contract) {
                try {
                    const descriptionText = await contract.methods.description().call();
                    setDescription(descriptionText);
                } catch (error) {
                    console.error("Error fetching description:", error);
                }
            }
        };
        getDescription();
    }, [state]);

    // Fetch image CID
    useEffect(() => {
        const { contract } = state;
        const getCid = async () => {
            if (contract) {
                try {
                    const cidValue = await contract.methods.imageLink().call();
                    setCid(cidValue);
                } catch (error) {
                    console.error("Error fetching CID:", error);
                }
            }
        };
        getCid();
    }, [state]);

    return (
        <section className="hero">
            <div className="container">
                <div className="hero-text">
                    <p>
                        <span>Amrit</span> is a Full-Stack Blockchain Developer From Nepal.
                    </p>
                    <h1>I develop decentralised apps in web3 space.</h1>
                    <h3>{description}</h3>

                    {/* Bootstrap Modal */}
                    <Modal size='md' isOpen={modal} toggle={() => setModal(!modal)}>
                        <ModalBody>
                            <Row className="text-align">
                                <label htmlFor="" onClick={() => setModal(!modal)}>
                                    Mail Id - amritmaraasi163@gmail.com
                                </label>
                            </Row>
                        </ModalBody>
                    </Modal>

                    <button className="msg-btn" onClick={() => setModal(true)}>
                        Get in Touch
                    </button>
                </div>

                <div className="hero-img">
                    <div className="img-container">
                        {cid ? (
                            <img 
                                src={`https://app.pinata.cloud/ipfs/files${cid}`} 
                                alt="profilePhoto" 
                            />
                        ) : (
                            <p>Loading profile image...</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;