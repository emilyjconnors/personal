import React from "react"
import emailjs from '@emailjs/browser';

function Contact() {
    const form = React.useRef();
    const [user_name, setName] = React.useState("");
    const [successMessage, setSuccessMessage] = React.useState({
        name: "",
        message: ""
    });

    const sendEmail = (e) => {
        e.preventDefault();
        setSuccessMessage({name: user_name, message: "Thank you for reaching out. I will get back to you shortly."})

        emailjs.sendForm('service_ja7vijg', 'contact_form', form.current, 'iXBNMGYejkqAwi-PX');
    };

    return (
        <form id="contact-form" ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Name" required value={user_name} onChange={(e) => setName(e.target.value)}/>
            <input type="email" name="user_email" placeholder="Email" required/>
            <textarea name="message" rows="5" required></textarea>
            <input type="submit" value="Send" />
            {successMessage.name && 
                <div className="success">
                    <button name="close" onClick={(e) => {setSuccessMessage({name: ""})}}>X</button>
                    <h5>Hello {successMessage.name}!</h5>
                    <p>{successMessage.message}</p>
                </div>
            }
        </form>
    );
};

export default Contact;