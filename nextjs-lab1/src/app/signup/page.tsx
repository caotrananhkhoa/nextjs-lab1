"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisable, setButtonDisable] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("api/users/signup", user);
      console.log("Signup sucess", response.data);
      
      // Redirect to Login page
      router.push("/login");
    } catch (error: any) {
      console.log("Signup failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisable(true);
    } else {
      setButtonDisable(false);
    }
  }, [user]);

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
        className="p-2 border cursor-auto border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="text"
        id="username"
        value={user.username}
        onChange={(e) => handleUserChange(e, "username")}
        placeholder="username"
      />

      <label htmlFor="email">Email</label>
      <input
        className="p-2 border cursor-auto border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="text"
        id="email"
        value={user.email}
        onChange={(e) => handleUserChange(e, "email")}
        placeholder="email"
      />

      <label htmlFor="password">Password</label>
      <input
        className="p-2 border cursor-auto border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="text"
        id="password"
        value={user.password}
        onChange={(e) => handleUserChange(e, "password")}
        placeholder="password"
      />
      {buttonDisable && !loading ? (
        <button
          className="p-2 border cursor-pointer border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
          onClick={onSignup}
        >
          Signup
        </button>
      ) : null}

      <Link href={"/login"}>Visit login page</Link>
    </div>
  );
}
