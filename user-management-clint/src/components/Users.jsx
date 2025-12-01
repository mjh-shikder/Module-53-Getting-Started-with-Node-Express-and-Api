import React, { use } from "react";

const Users = ({ userPromise }) => {
  const users = use(userPromise);
  console.log(users);

  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name, email);

      //   form reset
      e.target.reset();
    const newUser = { name, email };

    // send data to the server
    fetch("http://localhost:4000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after post ", data);
      });
  };

  return (
    <div>
      <div>
        <h3>Add a user</h3>
        <form onSubmit={handleAddUser}>
          <input name="name" type="text" placeholder="name" />
          <br />
          <input name="email" type="email" placeholder="email" />
          <br />
          <button>Add User</button>
        </form>
      </div>
      <div>
        {users.map((user) => (
          <p key={user.id}>
            {user.name} Email: {user.email}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;

/**
 *  have to request object send
 * 1. mention method: post
 * 2. mention header: about json data in the property of th econtent-type : applicaton/json
 * 3. body: JSON.stringfy(newUser)
 *
 * ------------on the server site
 * 1. app.use(express.json())
 *
 */
