"use client";
import React from "react";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = React.useState("")
  const onLogout = async () => {
    try {
      const response = await axios.get("/api/users/logout");
      toast.success("Logout success");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails =async () => {
    const response = await axios.get('api/users/me')
    console.log(response.data)
    setData(response.data.data._id)
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p>Profile page</p>
      <h2 className="hover:text-blue-500">{data === "" ? "---" : <Link href={`/profile/${data}`}>{data}</Link>}</h2>
      <hr />
      <button
        className="bg-purple-500 mt-4 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        onClick={getUserDetails}
      >
        User Details
      </button>
      <button
        className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={onLogout}
      >
        Logout
      </button>
    </div>
  );
}
