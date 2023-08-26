import React, {useState, UseEffect} from 'react'
import { Link } from 'react-router-dom'
import { navLinks} from './data'
import { menu, close } from '../assets';

const Navbar = () => {
    const [active, setActive] = useState("")
    const [toggle, setToggle] = useState(false)

    return(
        <div className="sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-primary">
            <div className='flex justify-between w-full mx-auto item-center'>
                <Link to="/" className="flex item-center gap-2" onClick={() => {
                        setActive("")
                        window.scrollTo(0, 0)
                    }}>
                    {/* <img src="" alt="logo" className=""></img>
                    <p>yash Agarwal</p> */}
                </Link>
                <ul className='hidden sm:flex flex-row gap-10'>
                    {navLinks.map((link) => {
                        const {title, id} = link
                        return(
                            <li key={id} className={`${active === title ? 'text-white': 'text-secondary'} hover:text-white cursor-pointer`} 
                                onClick={() => {setActive(title)}}
                            >
                                <a href={`#${id}`}>{title}</a>
                            </li>
                        )
                    })}
                </ul>

                <div className='sm:hidden flex flex-1 justify-end'>
                    <img src={toggle ? close:menu} alt='menu' className='cursor-pointer' 
                        onClick={() => {setToggle(!toggle)}}
                    ></img>
                </div>
                <div className={`${toggle ? 'flex' : 'hidden'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 z-10 rounded-xl min-w-[140px] sm:hidden`}>
                    <ul>
                        {navLinks.map((link) => {
                            const {id, title} = link
                            return(
                                <li className={`${active === title ? 'text-white':'text-secondary'} p-2 hover:text-white cursor-pointer`}>
                                    <a href={`#${id}`}>{title}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>

            </div>
        </div>
    )
}
export default Navbar