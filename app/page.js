'use client'
import Login from "@/components/Login";
import { useState,useRef } from "react";

export default function Home() {

  const [isMuted, setIsMuted] = useState(true) // start muted since your code has muted
  const videoRef = useRef(null)

  function handleToggleMute() {
    if(videoRef.current){
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }
  
  
  return (
    <main id="hero">
      <div className="hero-img">
        <video ref={videoRef} autoPlay muted={isMuted} loop playsInline>
          <source src="video.mp4" type="video/mp4"/>
        </video>
        <button className="mute-btn" onClick={handleToggleMute}>{isMuted ? "Unmute" : "Mute"}</button>
      </div>
      <div className="hero-login">
        <Login />
      </div>
    </main>
  );
}