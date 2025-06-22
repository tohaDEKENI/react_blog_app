import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Connection = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const Connection = () => {
        fetch('https://blogzio.glitch.me/singIn', {
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify({email: email, password: password })
        })
            .then(response => response.json())
            .then(data => {
                if(data.token){
                    localStorage.setItem('token',data.token)
                    window.location.href = "/"
                    console.log(data.message)
                    console.log(data.token)
                }else{
                    alert("Echec de connection : "+data.message);
                }  
            })
    }

    useEffect(()=>{
        localStorage.removeItem("token")    
    },[])

    return (
        < >
            <div className="h-screen flex items-center justify-center">
                <div className="flex flex-col space-y-8 w-[600px] h-[520px] bg-gray-50 border rounded-md p-4 shadow-md">

                    <form action="" onSubmit={(e) => e.preventDefault()} className="" >
                        <fieldset className="flex flex-col space-y-10 border p-4">
                            <legend>Connection</legend>
                            <input type="text" className="w-full h-12 border p-2 rounded-md"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="votre nom"
                            /> <br />
                            <input type="text" className="w-full h-12 border p-2 rounded-md"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Votre email"
                            /> <br />
                            <input type="password" className="w-full h-12 border p-2 rounded-md"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Votre mot de passe"
                            />
                            <button onClick={Connection} className="bg-blue-700 py-2 px-4">Se connecter</button>
                        </fieldset >
                        <p className="text-black text-center w-full text-3xl underline"><Link>S'inscrire</Link></p>
                    </form>
                </div>
                <h1>{username}</h1>
            </div>
        </>
    );
}

export default Connection;