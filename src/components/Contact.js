import React from 'react';
import './Contact.css';


class Contact extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            favorite: false,
          };
    }
    render () {
    return (
        <div className="Contact">
            <img className="avatar"
                src={this.props.avatar}
                alt={this.props.names} />
            <div className="status">
                <h4 className="name">{this.props.names}</h4>
                    <div>
                    <span
                onClick={event => {
                const newFavorite = !this.state.favorite;
                this.setState({ favorite: newFavorite });
                
              }}
            >

                <p className='status-text'> 
                    <span className={this.state.favorite ? 'status-online' : 'status-offline'}></span> 
                    {this.state.favorite ? 'Online' : 'Offline'} 
                </p>
                </span>

             
                

                   
                </div>
            </div>
            </div>
         
    );
}}
export default Contact;