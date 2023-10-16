"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast/headless";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisable, setButtonDisable] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("api/users/login", user);
      console.log("Login success", response.data);
      toast.success("Login success");
      router.push("/profile");
    } catch (error: any) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
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
      <h1 className="text-center text-black text-2xl">Login</h1>
      <hr />
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
          onClick={onLogin}
        >
          Login
        </button>
      ) : null}

      <Link href={"/signup"}>Visit signup page</Link>
    </div>
  );
}
