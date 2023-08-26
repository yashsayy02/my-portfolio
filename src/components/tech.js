
import SectionWrapper from '../hoc/sectionWrapper'
import { technologies } from "./data";
import {motion} from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion';
import {Tilt} from 'react-tilt'

const TechCard = ({icon, title, index}) => {
    return(
        <Tilt className='xs:w-[150px]'>
            <motion.div variants={fadeIn("left", "spring", 0.5 * index, 0.75)} className='  p-[1px]  px-[2px] py-[2px]'>
                 <div options={{
                    max: 45,
                    scale: 1,
                    speed: 450
                 }} className=' rounded-[20px] py-5 px-12 min-h-[180px] flex justify-evenly items-center flex-col'>
                    <img src={icon} alt='icon' className='scale-50'/>
                    <h3 className='text-center text-white text-[20px] font-bold'>{title}</h3>
                 </div>
            </motion.div>
        </Tilt>
    )
}

const Tech = () => {
    return (
        <>
        
            <motion.div variants={textVariant()}>
                <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>My Tools</p>
                <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Expertise</h2>
            </motion.div>

            <div className='flex flex-wrap mt-20 gap-10'>
                    {technologies.map((tech, index) => {
                        return(
                            <TechCard key={tech.title} index={index} {...tech}/>
                        )
                    })}
            </div>
        </>
    )
}

export default SectionWrapper(Tech, "")