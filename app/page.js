import Login from "@/components/Login";

export default function Home() {
  
  return (
    <main id="hero">
      <div className="hero-img">
        <video autoPlay loop playsInline>
          <source src="video.mp4" type="video/mp4"/>
        </video>
      </div>
      <div className="hero-login">
        <Login />
      </div>
    </main>
  );
}