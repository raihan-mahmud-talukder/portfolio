import { useEffect, useState } from "react"
import { NavLink, Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { About } from './About'
import { Skills } from './Skills'
import { Projects } from './Projects'
import { Experiences } from './Experiences'
import { Contacts } from "./Contacts"
import { Courses } from "./Courses"

export const Header = () => {
    const [now, setNow] = useState(new Date())
    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000)
        return () => clearInterval(timer)
    }, [])
    return (
        <>
            <header>
                <img src="https://bcassetcdn.com/social/vs16vt8h9z/preview.png" alt="logo" />
                <ul>
                    <li><NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
                    <li><NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink></li>
                    <li><NavLink to='/skills' className={({ isActive }) => (isActive ? 'active' : '')}>Skills</NavLink></li>
                    <li><NavLink to='/projects' className={({ isActive }) => (isActive ? 'active' : '')}>Projects</NavLink></li>
                    <li><NavLink to='/experiences' className={({ isActive }) => (isActive ? 'active' : '')}>Experiences</NavLink></li>
                    <li><NavLink to='/courses' className={({ isActive }) => (isActive ? 'active' : '')}>Courses</NavLink></li>
                    <li><NavLink to='/contact' className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink></li>
                </ul>
                <span>
                    {now.toDateString()}, {now.toLocaleTimeString('en-GB')}
                </span>
            </header>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/experiences' element={<Experiences />} />
                <Route path='/courses' element={<Courses />} />
                <Route path='/contact' element={<Contacts />} />
            </Routes>
        </>
    )
}