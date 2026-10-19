"use client"
import {useState} from "react"
export default function Home() {
    const [darkMode, setDarkMode] = useState(false)

    const switchMode= () => {
        darkMode(!darkMode)
    }
    return(
        <div>
            <button className="" onClick={switchMode}>Switch mode</button>
        </div>
    )
}