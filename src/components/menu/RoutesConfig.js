import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../../Pages/About';
import Online from '../../Pages/Online';
import Offline from '../../Pages/Offline';
import Contact from '../../Pages/Contact';
import Home from '../../Pages/Home';
import Development from '../../Pages/Development/Development';
import Teal1 from "../../Pages/6_Teal/Teal1"
import Teal2 from "../../Pages/6_Teal/Teal2"
import Seminarroom1 from "../../Pages/5_Facilities/Seminarroom1"
import Seminarroom2 from "../../Pages/5_Facilities/Seminarroom2"
import Seminarroom3 from './../../Pages/5_Facilities/Seminarroom3';
import AVRecordingRoom from "./../../Pages/5_Facilities/AVRecordingRoom"
import ConferenceRoom from "./../../Pages/5_Facilities/ConferenceRoom"
import LectureRooms from '../../Pages/5_Facilities/LectureRooms';
import PublicAddressingSystem from "../../Pages/5_Facilities/PublicAddressingSystem"
import GES from '../../Pages/4_GES/User/GES';
import HomeUser from '../../Pages/1_Home/HomeUser';
import ContactUs from '../../Pages/16_Help/Contact_us';





const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Online" element={<Online />} />
      <Route path="/Offline" element={<Offline />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Development" element={<Development/>} />
      <Route path="/Teal1" element={<Teal1/>} />
      <Route path="/Teal2" element={<Teal2/>} />
      <Route path="/Seminarroom1" element={<Seminarroom1/>} />
      <Route path="/Seminarroom2" element={<Seminarroom2/>} />
      <Route path="/Seminarroom3" element={<Seminarroom3/>} />
      <Route path="/AVRecordingRoom" element={<AVRecordingRoom/>} />
      <Route path="/ConferenceRoom" element={<ConferenceRoom/>} />
      <Route path="/LectureRooms" element={<LectureRooms/>} />
      <Route path="/PublicAddressingSystem" element={<PublicAddressingSystem/>} />
      <Route path="/GES" element={<GES/>} />
      <Route path="/HomeUser" element={<HomeUser/>} />
      <Route path="/ContactUs" element={<ContactUs/>} />
      
    </Routes>
  );
};

export default RoutesConfig;
