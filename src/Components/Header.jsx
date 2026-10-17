import { useEffect, useState } from "react"

export const Header = () => {
    const [now, setNow] = useState(new Date())
    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000)
        return () => clearInterval(timer)
    }, [])
    return (
        <header>
            <img src="https://bcassetcdn.com/social/vs16vt8h9z/preview.png" alt="logo" />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Experiences</li>
                <li>Courses</li>
                <li>Contact</li>
            </ul>
            <span>
                {now.toDateString()}, {now.toLocaleTimeString('en-GB')}
            </span>
        </header>
    )
}