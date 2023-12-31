import React from 'react';
import ContactImg from "../assets/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useDarkMode } from '../DarkModeContext'; // Import the custom hook

const Contact = () => {
  const { isDarkMode } = useDarkMode(); // Access the isDarkMode state

  return (
    <section name="contact" className={`w-full pt-16 sm:pt-32 ${isDarkMode ? 'bg-[#150E28] text-white' : 'bg-[#F0F0F0] text-[#150E28]'}`}>
       
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-start w-full'>

        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__backInRight" : ""}>
              <span className={`text-4xl font-bold inline border-b-4 border-[#D434FE] whitespace-nowrap`}>Contact</span>
            </div>
          )}
        </TrackVisibility>

        <span className='py-8'>
          Feel free to reach out if you have any inquiries or need further
          clarification. I would be delighted to schedule a video call to
          discuss potential projects or brainstorm ideas together. You can submit the form below or 
          <strong
            > <a
              href="mailto: olatunbosunopeyemi186035@gmail.com?subject = Feedback&body = Message"
            >
              Send an Email </a
            ></strong
          >
          or directly call or text me on 
          <strong><a href="http://wa.me/+2348176779961"> Whatsapp </a></strong
          >. I look forward to hearing from you!
        </span>

        <div className='sm:flex '>
          <form className={`${isDarkMode ? 'bg-[#150E28] text-[#F0F0F0] ' : 'bg-[#F0F0F0] text-[#150E28] '} flex flex-col w-full md:w-1/2`} action="https://getform.io/f/9441241e-c273-428d-8bd7-0838c318f786" method="post">
            <input type="text" name='name' placeholder='Enter your name'  className={`${isDarkMode ? ' border-[#F0F0F0] ' : 'border-[#150E28] '} p-2 bg-transparent border-2 rounded-md focus:outline-none `} />
            <input type="text" name='email' placeholder='Enter your email'  className={`${isDarkMode ? ' border-[#F0F0F0] ' : 'border-[#150E28] '} p-2 bg-transparent border-2 my-4 rounded-md focus:outline-none `} />
            <textarea name="message" rows="10" placeholder='Enter your message'  className={`${isDarkMode ? ' border-[#F0F0F0] ' : 'border-[#150E28] '} p-2 bg-transparent border-2 my-4 rounded-md focus:outline-none `}></textarea>
            <button className={`group text-${isDarkMode ? '#150E28' : '#F0F0F0'} w-fit px-6 py-3 my-2 flex items-center hover:bg-white bg-gradient-to-b from-[#D434FE] to-[#903AFF] rounded-md cursor-pointer`}>Submit</button>
          </form>

          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                <img src={ContactImg} className='mt-6 sm:mt-0' alt="" />
              </div>
            )}
          </TrackVisibility>
        </div>
      </div>
    </section>
  )
}

export default Contact;
