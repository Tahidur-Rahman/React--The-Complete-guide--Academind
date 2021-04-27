import React from 'react'

function Users({users}) {
    return (
        <ul>
            {users.map(user=>{
                return <li className="userItem" key={user.username}>{user.username} : {user.age} years old</li>
            })}
            
        </ul>
    )
}

export default Users
