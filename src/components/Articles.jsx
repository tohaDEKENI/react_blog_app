import { useEffect, useState} from "react";
import {Link} from "react-router-dom"
const Articles = () => {
    const [Articles, SetArticle] = useState([]);
    const [isLoading,setLoading] = useState(true);

    
   
    useEffect(() => {
            fetch("https://blogzio.glitch.me")
                .then(response => response.json())
                .then(data => {
                    SetArticle(data);
                    console.log(data);
                    setLoading(false)
                })
                .catch(err => {
                    console.log("erreur" + err);
                })
    }, [])
    
    return (
        <>
        {isLoading &&(
        <div>
            <h1 className="text-center text-3xl pt-4">En cours de chargements... </h1>
        </div>)}
        {!isLoading&&(
            <div className="mt-8 space-y-10">
                {
                    Articles.map((article, index) => (
                        <div key={index} className="hover:shadow-md max-w-7xl mx-auto p-4 rounded-md border">
                            <h2 className="text-xl text-blue-600 font-black pb-8 underline"><Link to={`/article/${article.id}`}>{article.titre}.</Link></h2>
                            <p>Publié le : <span className="text-green-600"> {article.datePublication}.</span></p>
                            <cite className="text-orange-500">{article.auteur}.</cite>
                        </div>
                    ))
                }
            </div>
        )}
        </>
    );
}

export default Articles;