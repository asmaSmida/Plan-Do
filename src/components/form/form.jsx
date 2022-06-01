import React, { useState } from "react";
import classes from "./form.module.css";
import { motion } from "framer-motion";
import { send } from 'emailjs-com';
const Contact = () => {
   
    const [toSend, setToSend] = useState({
        from_name: '',
        reply_to: '',
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
            from_name: '',
            reply_to: '',
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
            <div className={classes.contact}>
                <form onSubmit={onSubmit}>
                    <input
                        className={classes.input}
                        type='text'
                        name='from_name'
                        placeholder='from name'
                        value={toSend.from_name}
                        onChange={handleChange}
                    />
                    <input
                        className={classes.input}
                        type='text'
                        name='reply_to'
                        placeholder='Your email'
                        value={toSend.reply_to}
                        onChange={handleChange}
                    />
                    <input
                        className={classes.input}
                        type='text'
                        name='subject'
                        placeholder='Subject'
                        value={toSend.subject}
                        onChange={handleChange}
                    />
                    <textarea
                        className={classes.input}
                        name='message'
                        placeholder='Your message'
                        value={toSend.message}
                        onChange={handleChange}
                    />
                     <div className={classes.button}>
                        <button
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
