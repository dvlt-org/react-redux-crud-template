import React from 'react'
import "./pages.css"
import { userList } from "../data/userList"

export default function Home() {
    return (
        <div className='home'>
            <table className='home-table'>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>password</th>
                    <th>location</th>
                </tr>
                {userList.map((item) => {
                    return (
                        <>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                                <td>{item.location}</td>
                            </tr>
                        </>
                    )
                })}
            </table>
        </div>
    )
}
