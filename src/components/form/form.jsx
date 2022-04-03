import React, { useState } from "react";
import classes from "./form.module.css";
import { motion } from "framer-motion";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [warningMsg, setWarningMsg] = useState(false);

    const handleClick = (e) => {
        if (name === "" || email === "" || subject === "" || message === "") {
            setWarningMsg(true);
            console.log(warningMsg);
        } else {
            setWarningMsg(false);
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
        }
    };

    return (
        <motion.div initial="out" animate="in" exit="out">
            <div className={classes.contact}>
                <form>
                    <input
                        className={classes.input}
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className={classes.input}
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        className={classes.input}
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                    <textarea
                        className={classes.input}
                        type="textarea"
                        name="msg"
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />

                    {warningMsg ? (
                        <p className="error-contact">
                            Please fill the required fields above.
                        </p>
                    ) : (
                        ""
                    )}
                    <div className={classes.button}>
                        <button
                            block
                            onClick={handleClick}
                        >
                            SEND MESSAGE
                        </button>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default Contact;
