import React, { use } from 'react';


const Users = ({ userPromise }) => {
    
    const users = use(userPromise);
    console.log(users);
    

    return (
        <div>
            <div>
                {
                    users.map(user => <p key={user.id}>{user.name} Email: {user.email}</p>)
                }
            </div>
        </div>
    );
};

export default Users;