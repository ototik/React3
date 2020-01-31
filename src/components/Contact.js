import React from 'react';
import './Contact.css';

function Contact(props) {
    return (
        <div className="Contact">
            <img className="avatar"
                src={props.avatar}
                alt={props.name} />
            <div className="status">
                <h4 className="name">{props.name}</h4>
                    <div>
                    {props.status === "true" ? <div className="row"><div className="status-online"></div><div className="status-text"> online </div></div> : <div className="row"><div className="status-offline"></div><div className="status-text"> offline </div></div>}
                </div>
            </div>
        </div>
    );
}


export default Contact;
