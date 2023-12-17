import React from "react";

export function Card({ name, username, email, id, fetchUser }) {
  return (
    <>
      <div className="card" onClick={() => fetchUser(id)}>
        <h2>{name}</h2>
        <h2>{username}</h2>
        <h2>{email}</h2>
      </div>
    </>
  );
}
