import Image from 'next/image';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { contact, linkedin, github, resume } from './helpers/assets';

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='font-extrabold text-xl tracking-widest uppercase text-[#3b95da]'>
          Contact
        </p>
        <h2 className='py-4 text-[#dcdbdb]'>Reach out to me</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          <div className='col-span-3 lg:col-span-6 w-full h-full shadow-xl shadow-black rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={contact}
                  alt='/'
                  width="125"
                  height="125"
                />
              </div>
              <div className='text-[#dcdbdb]'>
                <h2 className='py-2'>Adharsh RJ</h2>
                <p>Full - Stack Developer</p>
                <p className='py-4'>
                  I am looking for Freelance / Contract/ Full-Time Software Engineer or Software Developer roles.
                </p>
              </div>
              <div>
                <p className='uppercase pt-8 text-[#dcdbdb]'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
                  <a
                    href={linkedin}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn color='white' />
                    </div>
                  </a>
                  <a
                    href={github}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaGithub color='white'/>
                    </div>
                  </a>

                  <a href="mailto:rjadharsh333@gmail.com" className='rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail color='white '/>
                  </a>
                  <a target="_blank" href={resume} rel="noopener noreferrer">
                      <div className='rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill color='white'/>
                      </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;