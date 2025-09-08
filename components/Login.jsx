'use client'

import { useState } from "react"
import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"

export default function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('') 
    const [isRegistered,setIsRegistered] = useState(false)
    const [ isAuthenticating, setIsAuthenticating] = useState(false)

     const { login,signup } = useAuth()
     const router = useRouter()

    const cantAuth = !email.includes('@') || password.length<6

    async function handleAuthUser() {
        
        if(cantAuth){
            return
        }
        setIsAuthenticating(true)

        try{
            if(isRegistered){
              await signup(email, password) 
            }
            else{
                await login(email,password)
            }

            router.push('/notes')

        } catch(err) {
            console.log(err.message);
            
        } finally{
            setIsAuthenticating(false)
        }
    }

    return (
        <>
            <div className="login-container">
                <h1 className="text-gradient">EzNotes</h1>
                <h2>Your ideas,neatly captured and always within reach</h2>
                <p>An archive of your ideas, structured and easy to explore, Capture. Index. Navigate. Your notes, your archive</p>
                <div className="full-line"></div>
                <h6>{isRegistered? 'Create an account' :'Log in'}</h6>
                <div>
                    <p>Email</p>
                    <input value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }} type="text" placeholder="enter your email address" />
                </div>
                <div>
                    <p>Password</p>
                    <input value={password} onChange={(e) => {
                        setPassword(e.target.value)}} type="text" placeholder="********" />
                </div>
                <button onClick={handleAuthUser} disabled={cantAuth || isAuthenticating} className="submit-btn">
                    <h6>{isAuthenticating ? 'Submitting...' : 'Submit'}</h6>
                </button>
                <div className="secondary-btn-container">
                    <button onClick={() => {
                        setIsRegistered(!isRegistered)
                    }} className="card-btn-secondary">
                    <small>{isRegistered?'Log in' :'Sign up'}</small>
                    </button>
                    <button className="card-btn-secondary">
                        <small>Forgot Password</small>
                    </button>
                </div>
                <div className="full-line">
                   <footer>
                    <a target="_blank" href="https://github.com/ash-1231">
                    <img src="https://avatars.githubusercontent.com/u/196295065?v=4" alt="pfp" />
                    <h6>@ash-1231</h6>
                    <i className="fa-brands fa-github"></i>
                    </a>
                   </footer>
                </div>
            </div>
        </>
    )
}