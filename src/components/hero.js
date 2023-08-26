import { motion } from 'framer-motion'
//import {ComputersCanvas} from './canvas'
import {Starfield} from '../assets'
import {dp} from '../assets'

const Hero = () => {
    
    return(
        <section className="relative w-full h-screen mx-auto">
            <div className='sm:px-16 px-6 absolute flex flex-row top-[120px] items-start gap-5 max-w-7xl'>
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='rounded-full w-5 h-5 bg-purple-600'/>
                    <div className='w-1 sm:h-80 h-40 violet-gradient'/>
                </div>
                <div>
                    <h1 className='font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2'>Hi! i am <span className='text-purple-600'>Yash</span></h1>
                    <p className='text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]'>A passionate Front-end React Developer based in Ghaziabad, India</p>
                </div>
            </div>
            {/* <ComputersCanvas /> */}
            <div className='w-full absolute top-1/3 h-[580px] flex justify-center'>
                <img src={Starfield} alt='gif' className='object-cover w-full'>
                </img>
                <div className='absolute border-2 border-gray-100 rounded-full top-1/3 w-[200px] h-[200px]'>
                    <img src={dp} className='object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full '></img>
                </div>
            </div>

            <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-full border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 40, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-4 h-4 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
        </section>
    )
}
export default Hero