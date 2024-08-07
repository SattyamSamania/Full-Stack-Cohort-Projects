import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  return (
    <>
      <main className="flex flex-col m-4 ">
        <div>
          <h2 className="font-semibold text-2xl">Users</h2>
        </div>

        <div>
          <input
            placeholder="Search Users..."
            className="w-full rounded border-slate-200 border p-2 mt-3"
          />
        </div>

        <div>
          {users.map((user) => (
            <User user={user} />
          ))}
        </div>
      </main>
    </>
  );
};

function User({ user }) {
  const navigate = useNavigate();
  return (
    <main>
      <div>{user.firstName[0]}sdfg</div>
      <div>
        {user.firstName} {lastName}sdfg
      </div>
      <div>
        <Button label={"Send Money"} />
        sdfg
      </div>
    </main>
  );
}

export default Users;
