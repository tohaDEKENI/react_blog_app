import { Link } from "react-router-dom";
import { useState } from "react";
const Inscription = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    
    const inscription = ()=>{
        fetch('https://blogzio.glitch.me/singUp',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({username,email,password})
        })
            .then(res => res.json())
            .then(data =>{
                if(data){
                    alert("ca marche")
                }else{
                    alert("ereur d'inscription")
                }
            })
    }
    return (
        <>
            <div className="h-screen flex items-center justify-center">
                <div className="flex flex-col space-y-8 w-[600px] h-[520px] bg-gray-50 border rounded-md p-4 shadow-md">

                    <form action="" onSubmit={(e) => e.preventDefault()} className="" >
                        <fieldset className="flex flex-col space-y-10 border p-4">
                            <legend>Inscription</legend>
                            <input type="text" className="w-full h-12 border p-2 rounded-md"
                                name="username"
                                value={username}
                                placeholder="votre nom"
                                onChange={(e)=>setUsername(e.target.value)}
                            /> <br />
                            <input type="text" className="w-full h-12 border p-2 rounded-md"
                                name="email"
                                value={email}
                                placeholder="Votre email"
                                onChange={(e)=>setEmail(e.target.value)}
                            /> <br />
                            <input type="password" className="w-full h-12 border p-2 rounded-md"
                                name="password"
                                value={password}
                                placeholder="Votre mot de passe"
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                            <button onClick={inscription} className="bg-blue-700 py-2 px-4">S'inscrire</button>
                        </fieldset >
                        <p className="text-black text-center w-full text-3xl underline"><Link to="/teste">Se connecter</Link></p>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Inscription;