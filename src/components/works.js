import { motion } from 'framer-motion'
import React from 'react'
import SectionWrapper from '../hoc/sectionWrapper'
import { github } from '../assets'
import { projects } from './data'
import { fadeIn, textVariant} from '../utils/motion'
import {Tilt} from 'react-tilt'

const Works = () => {
    return(
         <>
            <motion.div variants={textVariant()}>
            <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
                My Works
            </p>
            <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                Projects
            </h2>
            </motion.div>

            <div className=' w-full flex'>
                <motion.p variants={fadeIn("", "", 0.1, 1)}>
                    Following Projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems technologies, and manage project effectively.
                </motion.p>
            </div>

            <div className='mt-20 flex flex-wrap gap-7'>
                {projects.map((project) => (
                    <ProjectCard  key={`project-${project.index}`} index={project.index}{...project}/>
                ))}
            </div>
         </>
    )
}

const ProjectCard = ({index, name,description, tags, image, source_code_link}) => {
    return(
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                option={{max: 45, scale:1, speed: 450}}
                className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
            >
                <div className='relative w-full h-[230px]'>
                    <img 
                        src={image}
                        alt={name}
                        className='w-full h-full object-cover rounded-2xl'
                    />

                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        <a href={source_code_link}>
                        <div className='w-10 h-10 black-gradient cursor-pointer flex justify-center items-center rounded-full'>
                            <img src={github} alt='github' className='w-1/2 h-1/2 object-contain'/>
                        </div>
                        </a>
                    </div>
                </div>

                <div className='mt-5'>
                    <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                    <p className='text-secondary text-[14px]'>{description}</p>
                </div>

                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <p className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    )
}

export default SectionWrapper(Works, "works")