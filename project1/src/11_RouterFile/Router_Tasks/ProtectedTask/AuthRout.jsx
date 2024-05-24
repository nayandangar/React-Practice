import { Component } from 'lucide-react';
import React, { useEffect } from 'react'
import { Cookies, useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

export default function AuthRout() {
  let[Cookie]=useCookies(["user"])
  const navigate =useNavigate();
  useEffect (()=>{
    if (!Cookies?.user) {
        return navigate("/login");
      }
  });
    return <>{<Component/>}</>
}

export default function AuthRout({Component}) {
    let[Cookie]=useCookies(["user"])
    const navigate =useNavigate();
    useEffect (()=>{
      if (Cookies?.user.email !== "nayandangar98@gmail.com") {
          return navigate("/login");
        }
    });
      return <>{<Component/>}</>
  }