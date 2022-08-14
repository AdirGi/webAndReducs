import React from 'react'

const Logout = () => {
    // log out
    const logout = async () => {
        await fetch("http://127.0.0.1:8000/logout",
            { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
            .then(response => response.json()).then(localStorage.removeItem('token'))
    }

    return (
        <div>
            <h2>log out</h2>
            <button onClick={() => logout()}>log out</button>
            <hr />
        </div>
    )
}

export default Logout