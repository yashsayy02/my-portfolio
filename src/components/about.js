import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion';
import {services} from './data'
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from '../hoc/sectionWrapper';


const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>Introduction</p>
                <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Overview</h2>
            </motion.div>

            <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-5 text-secondary text-[17px] max-w-5xl leading-[30px]'>
                As a junior Full-Stack Web Developer, I possess a comprehensive skill set spanning both the front-end and back-end aspects of web development. My proficiency includes a range of technologies such as HTML, CSS, JavaScript, React, Node.js, Express.js, and database management. I excel not only in designing and maintaining responsive front-end interfaces but also in building dynamic and scalable back-end systems that power seamless user experiences.
                Thriving in cross-functional teams, I collaborate seamlessly with designers and developers, contributing to the full development cycle. I integrate cutting-edge tools and techniques, delivering high-quality solutions that exceed user expectations.
            </motion.p>

            <div className='flex flex-wrap mt-20 gap-10'>
                {services.map((service, index) => {
                    return(

                        <ServiceCard key={service.title} index={index} {...service}/>
                    )
                })}
            </div>
        </>
    )
}

const ServiceCard = ({index, icon, title}) => {
    return(
        <Tilt className='xs:w-[250px] w-full'>
            <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card px-[2px] py-[2px]'>
                 <div options={{
                    max: 45,
                    scale: 1,
                    speed: 450
                 }} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
                    <img src={icon} alt='icon' className=''/>
                    <h3 className='text-center text-white text-[20px] font-bold'>{title}</h3>
                 </div>
            </motion.div>
        </Tilt>
    )
}

export default SectionWrapper(About, 'about')