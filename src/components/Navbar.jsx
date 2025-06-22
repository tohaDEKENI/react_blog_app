import { Cuboid, Moon, Sun } from "lucide-react"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [theme, setTheme] = useState(()=>{
        return localStorage.getItem("theme") || "light"
    });
    useEffect(() => {
        document.querySelector("html").setAttribute("data-theme", theme);
        localStorage.setItem("theme",theme)
    }, [theme])

    //localStorage.clear()
    const toogleTheme = () => {
        setTheme((prev) => prev === "light" ? "dark" : "light")
    }
    useEffect(()=>{
        const theme = localStorage.getItem("theme")
        if(theme){
            setTheme(theme);
        }
      
    },[])

    return (
        <>
            <div className="max-w-7xl shadow-md flex justify-between mx-auto py-4 items-center px-4 rounded">
                <div className="flex space-x-4 items-center">
                    <h1 className="text-blue-600 text-2xl cursor-pointer"><Link to="/">MPROO <span className="text-orange-400">BLOG</span></Link></h1>
                    <Cuboid className="text-blue-500" />
                </div>
                <div className="space-x-8 flex items-center">
                    <button onClick={toogleTheme}>
                        {theme ==="light" ? <Sun /> : <Moon />}
                    </button>
                    <Link to="/">Accueil</Link>
                    <button className="bg-blue-600 p-2 rounded text-white text-xl"><Link to="/creeArticle"> Créer Article</Link></button>
                </div>
            </div>
        </>
    );
}
export default Navbar;