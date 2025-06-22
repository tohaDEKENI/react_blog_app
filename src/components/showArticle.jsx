import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState, } from "react";



const AddArticle = () => {
    const { id } = useParams();
    const [article, setArticle] = useState([]);
    const [isload, setLoad] = useState(false);


    useEffect(() => {
        fetch(`https://blogzio.glitch.me/articles/${id}`)
            .then(response => response.json())
            .then(data => {
                setArticle(data);
                console.log(data);
                setLoad(true);
            }).catch(err => {
                console.log("erreur de fetch" + err);
            })
    }, [])
    return (
        <>
            <Navbar />

            {!isload && (<h1 className="text-center text-3xl pt-8">Chargement...</h1>)}
            {isload && (
                <div >
                    <h1 className="text-center pt-8 text-3xl font-black text-blue-700">{article.titre}</h1>
                    <div className="max-w-5xl mx-auto pt-8 border p-8 mt-8 rounded shadow-lg">
                        <div >
                            <h1 className="text-orange-200 my-4 text-xl font-bold "> {article.titre}</h1>
                            <p className="text-left font-medium ">📕📕📕{article.contenu}</p>
                            <p className="my-8 ">Publié le :<span className="text-green-600">{article.datePublication}</span></p>
                        </div>
                        <div className="flex justify-between">

                            <cite className="text-orange-600 border-l-4 border-blue-700 bg-slate-100 
                        py-2 px-2"
                            >
                                Écrit par :  {article.auteur}
                            </cite>

                        </div>
                    </div>
                </div>
            )}
            <div>

            </div>

        </>
    );
}

export default AddArticle;