import React from 'react';
import boxlg from '../../assets/boxlg.png';
import boxsm from '../../assets/boxsm.png';

const About = () => {
  return (
    <div className="h-screen flex items-center justify-center relative">
     
      <img 
        src={boxlg} 
        alt="Large Box" 
        className="hidden w-3/5 md:w-3/5 lg:w-3/5 xl:w-2/3 h-auto z-0 lg:block m-4" 
      /> 

      <img 
        src={boxsm} 
        alt="Small Box" 
        className="block w-9/10 h-auto lg:hidden z-0" 
      />

      <div className="absolute text-center z-10 top-1/4 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-2 lg:mt-2 mt-1" style={{ fontFamily: 'Black Ops One, sans-serif' }}>HACK OF DUTY</h1>
        
        {/* Paragraphs for larger screens */}
        <div className="hidden lg:block" style={{fontFamily:"Hitmarker"}}>
          <br></br>
          <p className="text-sm sm:text-base md:text-lg text-white">Welcome to <b>Hack Of Duty</b>, a thrilling 24-hour hackathon brought to you by <b>SRMIST ACM SIGKDD!</b></p>
          <p className="text-sm sm:text-base md:text-lg text-white">Get ready to unleash your coding skills and creativity as you tackle real-world challenges across four</p>
          <p className="text-sm sm:text-base md:text-lg text-white">exciting tracks: <b>Computer Vision</b>, <b>Natural Language Processing (NLP)</b>, <b>EdTech</b>, and <b>Healthcare</b>.</p>
          <p className="text-sm sm:text-base md:text-lg text-white">Gear up for a 24h non-stop marathon of code, collaboration, and groundbreaking ideas. Rally your team,</p>
          <p className="text-sm sm:text-base md:text-lg text-white">dive into the mission, and let's push the boundaries of technology together.</p>
          <br></br>
          <p className="text-sm sm:text-base md:text-lg text-white">"<i>History is written by the victor.</i>" — Captain Price, Call of Duty</p>
          <br></br>
          <p className="text-sm sm:text-base md:text-lg text-white"><b>Prepare to code, innovate, and dominate! 💻🚀</b></p>
        </div>

          {/* Paragraphs for small screens */}
        <div className="block lg:hidden" style={{fontFamily:"Hitmarker"}}>
          <p className="text-sm sm:text-base md:text-lg text-white">Welcome to <b>Hack Of Duty</b>, a thrilling</p>
          <p className="text-sm sm:text-base md:text-lg text-white">24-hour hackathon brought to you by</p>
          <p className="text-sm sm:text-base md:text-lg text-white"><b>SRMIST ACM SIGKDD!</b></p>
          <p className="text-sm sm:text-base md:text-lg text-white">Get ready to unleash your coding skills and</p>
          <p className="text-sm sm:text-base md:text-lg text-white">creativity as you tackle real-world challenges</p>
          <p className="text-sm sm:text-base md:text-lg text-white">across four exciting tracks: <b>Computer Vision</b>,</p>
          <p className="text-sm sm:text-base md:text-lg text-white"><b>Natural Language Processing (NLP)</b>, <b>EdTech</b></p>
          <p className="text-sm sm:text-base md:text-lg text-white">and <b>Healthcare</b>.</p>
          <p className="text-sm sm:text-base md:text-lg text-white">Gear up for a 24h non-stop marathon of code,</p>
          <p className="text-sm sm:text-base md:text-lg text-white">collaboration, and groundbreaking ideas.</p>
          <p className="text-sm sm:text-base md:text-lg text-white">Rally your team, dive into the mission,</p>
          <p className="text-sm sm:text-base md:text-lg text-white">and let's push the boundaries of technology</p>
          <p className="text-sm sm:text-base md:text-lg text-white">together.</p>
          <br></br>
          <p className="text-sm sm:text-base md:text-lg text-white">"<i>History is written by the victor.</i>"</p>
          <p className="text-sm sm:text-base md:text-lg text-white">— Captain Price, Call of Duty</p>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default About;
