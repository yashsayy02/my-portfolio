import React, {useState, useRef} from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'

import SectionWrapper from '../hoc/sectionWrapper'
import { slideIn } from '../utils/motion'

//template_fnfqaf2
//service_plzcltw
//ihfxXG0czZdBjEMUr

const Contacts = () => {
    const [form, setForm] = useState({name: "", email: "", message: ""})
    const formRef = useRef(null)
    const [Loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    } 

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        emailjs.send('service_plzcltw', 'template_fnfqaf2',{
                                                            from_name: form.name,
                                                            to_name:'Yash',
                                                            from_email: form.email,
                                                            to_email: 'yash.jack02@gmail.com',
                                                            message: form.message
                                                        
        }, 'ihfxXG0czZdBjEMUr')
        .then(() => {
            setLoading(false)
            alert('ThankYou')
            setForm({name: '', email: '', message: ''})
        }, (error) => {
            setLoading(false)
            alert('Something went wrong')
        })
    }

    /* return(
        <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
            <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
                <p className= "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
                    Get in touch
                </p>
                <h3 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Contact</h3>

                <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
                    <label className='flex flex-col'>
                        Your Name
                        <input type='text' name='name' value={form.name} onchange={handleChange} className='bg-tertiary text-white rounded-lg outlined-none border-none font-medium'></input>
                    </label>
                    <label className='flex flex-col'>
                        Your Email
                        <input type='text' name='email' value={form.email} onchange={(e) => {setForm({...form, email: e.target.value})}} className='bg-tertiary text-white rounded-lg outlined-none border-none font-medium'></input>
                    </label>
                    <label className='flex flex-col'>
                        Your Message
                        <textarea rows='7' type='text' name='message' value={form.message} onchange={(e) => {setForm({...form, message: e.target.value})}} className='bg-tertiary text-white rounded-lg outlined-none border-none font-medium'></textarea>
                    </label>
                    <button type='submit' className='bg-tertiary py-3 px-8 outline-none font-bold shadow-md shadow-primary rounded-xl'>
                        {Loading ? 'Sending':'Send'}
                    </button>
                </form>
                
            </motion.div>
        </div>
    ) */

    return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Get in touch</p>
        <h3 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {Loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
    )
}

export default SectionWrapper(Contacts, "contact")

