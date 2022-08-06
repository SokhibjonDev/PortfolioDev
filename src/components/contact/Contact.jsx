import { Link } from 'react-router-dom';
import './Contact.css';

function Contact() {
    return (
        <>
            <div className="title"><h1>Contact</h1></div>
            <div className="Contact">
                <div className="contactInfo">
                    <h1>Lorem, ipsum</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, quia?. Ab, saepe.</p>
                    <Link to='/contact'>Contact me</Link>
                </div>
                <div className="contactImg">
                    <img src="/images/contact.png" alt="" />
                </div>
            </div>
        </>
    );
}

export default Contact;
