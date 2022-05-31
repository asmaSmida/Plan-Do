import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { send } from 'emailjs-com';
import "./ContactUs.css";
import Footer from "../../components/footer/Footer";
import { motion } from "framer-motion";


export default function ContactUs() {
    const contactConfig = {
        YOUR_EMAIL: 'assistant@plando.tn',
        YOUR_PHONE: '+216 99 666 333',
        description:
            'Nous sommes à votre disponibilité 7 jours sur 7, pour nous contacter veuillez nous envoyer votre message du Lundi Au Samedi: 08h00 à 19h00 et Dimanche: 09h00 à 15h00',
    };

    const [toSend, setToSend] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',

    });
    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_rqjakyc',
            'template_zpl8pj3',
            toSend,
            'X5HGW1EeAGH5M4OTs'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
        setToSend({
            name: '',
            email: '',
            subject: '',
            message: '',
    
        })
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setToSend({ ...toSend, [name]: value });
    };
    return (

        <motion.div initial="out" animate="in" exit="out">
            <Container className="contactUs">

                <Row className="mb-5 mt-3">
                    <Col lg="8">
                        <h1 className="display-4 mb-4">Contact Us</h1>
                        <hr className="t_border my-4 ml-0 text-left" />
                    </Col>
                </Row>
                <Row className="sec_sp">
                    <Col lg="5" className="mb-5">
                        <h3 className="color_sec py-4">Get in touch</h3>
                        <address>
                            <strong>Email:</strong>{" "}
                            <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                                {contactConfig.YOUR_EMAIL}
                            </a>
                            <br />
                            <br />
                            {contactConfig.hasOwnProperty("YOUR_PHONE") ? (
                                <p>
                                    <strong>Phone:</strong> {contactConfig.YOUR_PHONE}
                                </p>
                            ) : (
                                ""
                            )}
                        </address>
                        <p>{contactConfig.description}</p>
                    </Col>
                    <Col lg="7" className="d-flex align-items-center">
                        <form onSubmit={onSubmit} className="contact__form w-100" >
                            <Row>
                                <Col lg="6" className="form-group">
                                    <input
                                        className="form-control rounded-0"
                                        id="name"
                                        name="name"
                                        placeholder="Name"
                                        type="text"
                                        value={toSend.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </Col>
                                <Col lg="6" className="form-group">
                                    <input
                                        className="form-control rounded-0"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        type="email"
                                        value={toSend.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </Col>
                            </Row>
                            <Col className="form-group">
                                <input
                                    className="form-control rounded-0"
                                    id="subject"
                                    name="subject"
                                    placeholder="Subject"
                                    type="text"
                                    value={toSend.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </Col>

                            <textarea
                                className="form-control rounded-0"
                                id="message"
                                name="message"
                                placeholder="Message"
                                rows="5"
                                required
                                value={toSend.message}
                                onChange={handleChange}
                            ></textarea>
                            <br />
                            <Row>
                                <Col lg="12" className="form-group">
                                    <button className="btn ac_btn">
                                        Send
                                    </button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </motion.div>

    );
}