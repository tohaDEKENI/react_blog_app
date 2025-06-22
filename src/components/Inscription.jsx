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
                    location.href = "/teste"
                }else{
                    alert("ereur d'inscription")
                }
            })
    }
    return (
        <>
            <div className="h-screen flex items-center justify-center">
                <div className="flex flex-col space-y-8 w-[600px] h-[520px] bg-gray-50 border rounded-md p-4 shadow-md">

                    <form  onSubmit={(e) => e.preventDefault()} className=" " >
                        <fieldset className="flex flex-col space-y-10 border p-4 text-blue-600">
                            <legend>Inscription</legend>
                            <input type="text" className="w-full h-12 border p-2 rounded-md bg-gray-200"
                                name="username"
                                value={username}
                                placeholder="votre nom"
                                onChange={(e)=>setUsername(e.target.value)}
                                required
                            /> <br />
                            <input type="email" className="w-full h-12 border p-2 rounded-md bg-gray-200"
                                name="email"
                                value={email}
                                placeholder="Votre email"
                                onChange={(e)=>setEmail(e.target.value)}
                                required
                            /> <br />
                            <input type="password" className="w-full h-12 border p-2 rounded-md bg-gray-200"
                                name="password"
                                value={password}
                                placeholder="Votre mot de passe"
                                onChange={(e)=>setPassword(e.target.value)}
                                required
                            />
                            <button onClick={inscription} className="bg-blue-700 py-2 px-4 text-white">S'inscrire</button>
                        </fieldset >
                        <p className="text-black text-center w-full text-3xl underline"><Link to="/teste">Se connecter</Link></p>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Inscription;