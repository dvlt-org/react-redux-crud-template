import React from 'react'
import { useState } from "react"
import "./pages.css"

export default function Create() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [location, setLocation] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(name, email, password, location)
    }
    return (
        <div className='create'>
            <form className='create-form'>
                <p style={{ marginBottom: 10 }}>Yangi foydalanuvchi yaratish</p>
                <input type="name" className='create-form__input' placeholder='name' onChange={(event) => setName(event.target.value)} />
                <input type="email" className='create-form__input' placeholder="email" onChange={(event) => setEmail(event.target.value)} />
                <input type="password" className='create-form__input' placeholder="password" onChange={(event) => setPassword(event.target.value)} />
                <input type="location" className='create-form__input' placeholder='location' onChange={(event) => setLocation(event.target.value)} />
                <button className='create-form__button' onClick={handleSubmit}>Create</button>
            </form>
        </div>
    )
}
