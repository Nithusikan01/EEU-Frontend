import React from 'react'


const cardStyle = {
    border: '1px solid #07a8ff',
    borderRadius: '8px',
    padding: '20px',
    margin: '20px auto', // Center the card horizontally
    maxWidth: '800px', // Limit the card width for smaller screens
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f0f0f0', // Set the background color here
    lineHeight: 1.5, // Add line spacing of 1.5
};

function ContactUs(){
    return (
        <div className='ContactUs-container' style={cardStyle}>
            <h1>Contact Us</h1>
            <h2>Director</h2>
            <p>Dr. Isuru Nawinne</p>
            <p>Dept of Computer Engineering</p>
            <p>Faculty of Engineering</p>
            <p>University of Peradeniya</p>
            <p>Sri Lanka</p>
            
            <h3>Telephone</h3>
            <p>Office: +94 (0)81 2393918</p>
            <p>Mobile: +94 81 239 3470</p>
            
            <h3>Mail</h3>
            <p>Email: direeu@eng.pdn.ac.lk</p>
            <p>Email: kamalanath@eng.pdn.ac.lk</p>
            
            <h2>Office</h2>
            <p>Engineering Education Unit</p>
            <p>Faculty of Engineering</p>
            <p>University of Peradeniya</p>
            <p>Sri Lanka</p>
            
            <h3>Phone</h3>
            <p>Phone: +94-81-239-3918</p>
            
            <h3>Mobile</h3>
            <p>Office: 081-239-3304/3313</p>
            
            <h2>WEB</h2>
            <p><a href="http://eng.pdn.ac.lk/eeu" target="_blank" rel="noopener noreferrer">http://eng.pdn.ac.lk/eeu</a></p>
        </div>
    );
}

export default ContactUs;
