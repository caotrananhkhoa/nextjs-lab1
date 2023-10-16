"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignupPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {};

  const handleUserChange = (e: any, key: string) => {
    setUser({
      ...user,
      [key]: e.target.value,
    });
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-center text-black text-2xl">Signup</h1>
      <hr />
      <label htmlFor="username">Username</label>
      <input
        className="p-2 border cursor-pointer border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="text"
        id="username"
        value={user.username}
        onChange={(e) => handleUserChange(e, "username")}
        placeholder="username"
      />

      <label htmlFor="email">Email</label>
      <input
        className="p-2 border cursor-pointer border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="text"
        id="email"
        value={user.email}
        onChange={(e) => handleUserChange(e, "email")}
        placeholder="email"
      />

      <label htmlFor="password">Password</label>
      <input
        className="p-2 border cursor-pointer border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="text"
        id="password"
        value={user.password}
        onChange={(e) => handleUserChange(e, "password")}
        placeholder="password"
      />

      <button className="p-2 border cursor-pointer border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      onClick={onSignup}
      >
        Signup
      </button>
      <Link href={"/login"}>Visit login page</Link>
    </div>
  );
}
