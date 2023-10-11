import React from 'react';
import seminarRoom1Image from '../Pics/2O9A9659.jpg';


const Seminarroom1 = () => {

    const cardStyle = {
        border: '1px solid #07a8ff',
        borderRadius: '8px',
        padding: '20px',
        /*margin: '20px 200px 20px 200px',*/
        margin: '20px auto', // Center the card horizontally
        maxWidth: '800px', // Limit the card width for smaller screens
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f0f0f0', // Set the background color here
    };
    const headingStyle = {
        color: '#07a8ff',
        
    };
    const rowStyle = {
        display: 'flex',
        justifyContent: 'space-between', // Add space between images
        margin: '10px 0', // Add margin between rows
    };

    const imageContainerStyle = {
        display: 'flex',
        justifyContent: 'center', // Center the content horizontally
        alignItems: 'center',     // Center the content vertically
    };
    
    const imageStyle = {
        maxWidth: '50%', // Ensure the image fits within its container
        height: 'auto',   // Maintain aspect ratio
        display: 'block', // Remove any extra spacing around the image
        marginRight: '10px', // Add margin between images
    };

  return (
    <div style = {cardStyle}>
      <h2 style={{ ...headingStyle, textAlign: 'center' }}>Seminar Room 1</h2>
      <div style={imageContainerStyle}>
        {/* Add the image below the heading */}
        <img src={seminarRoom1Image} alt="Seminar Room 1" style={imageStyle} />
      </div>
      <h3 style={headingStyle}>Facilities</h3>
      <ul>
        <li>Fully air conditioned room</li>
        <li>Capacity - 105 seats</li>
        <li>Laptop</li>
        <li>Digital White Board with Multimedia Projector</li>
        <li>Motorized Wall Mounted Center Screen</li>
        <li>Multimedia Projector</li>
        <li>Overhead Projector, Screen with stand</li>
        <li>Laser Pointer</li>
        <li>Wall Mounted Fans</li>
        <li>Document Scanner for projection</li>
        <li>White Board</li>
        <li>Podium</li>
        <li>Wired and wireless sound system</li>
      </ul>
      <h3 style={headingStyle}>Acknowledgements for improvements</h3>
      <p>Refurbished by E73 Batch</p>
      <p>
        Digital White Board with Multimedia Projector and Document Scanner was
        donated by E97 batch in 2017
      </p>
      <h3 style={headingStyle}>Images</h3>
      <div style={rowStyle}>
            <img src={seminarRoom1Image} alt="Image 1" style={imageStyle} />
            <img src={seminarRoom1Image} alt="Image 2" style={imageStyle} />
        </div>
        <div style={rowStyle}>
            <img src={seminarRoom1Image} alt="Image 3" style={imageStyle} />
            {/*<img src={seminarRoom1Image} alt="Image 4" style={imageStyle} />*/}
        </div>
    </div>
  );
};

export default Seminarroom1;

