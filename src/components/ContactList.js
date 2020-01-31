import React from 'react';
import Contact from './Contact';



const list = [
  {
    names: "Troy Abalo",
    text: "online",
    status: "true",
    avatar: "https://randomuser.me/api/portraits/men/18.jpg"
    
  },
  {
    names: "Joia Smith",
    text: "online",
    status: "true",
    avatar: "https://randomuser.me/api/portraits/women/49.jpg"
  },

  {
    names: "Maria Alvarez",
    text: "online",
    status: "true",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
  },

  {
    names: "Cindy Cory",
    text: "online",
    status: "true",
    avatar: "https://randomuser.me/api/portraits/women/47.jpg"
  },

  {
    names: "Shay Harris",
    text: "online",
    status: "true",
    avatar: "https://randomuser.me/api/portraits/women/82.jpg"
  }
];

const ContactList = () => (
    <div>
      {list.map(item => (
            <Contact avatar={item.avatar} status={item.status} names={item.names} />
            
      ))}
    </div>
  );
      

export default ContactList;