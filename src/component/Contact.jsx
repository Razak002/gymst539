import React from 'react'

function Contect() {
    return (
        <div id='contact'>
            <h1>CONTACT US</h1>
            <form action='' method='POST'>
                <input type='name' placeholder="First Name" required />
                <input type='email' placeholder="Email" required />
                <textarea placeholder='Write Here......' />
                <input type='submit' value='send' />
            </form>
        </div>
    )
}

export default Contect
