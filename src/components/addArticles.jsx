import { useState } from "react";
const AddArticle = () => {
    const [titre, setTitre] = useState("");
    const [contenu, setContenu] = useState("");
    const [auteur, setAuteur] = useState("");

    const Enregistrement = () =>{
        const datePublication = new Date();
        fetch("http://localhost:3000/articles",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({titre,contenu,auteur,datePublication})
        })
        .then(response =>{
            response.json()
            if(!response){
                console.log("erreur de recuperation")
            }
        })
        .then(data => {
            console.log(data.err);
        })
        .catch(err => console.log("erreur"+err))
    }

    return (
        <>
            <div className="pt-10 ">
                <h1 className="text-3xl text-center pb-4">Cree un nouvel article </h1>
                <form onSubmit={(e)=>{e.preventDefault()}} action="" className="max-w-7xl mx-auto space-y-10">
                    <input className="border input border-gray-400  w-full h-12 p-4" type="text"
                        name="titre"
                        value={titre}
                        onChange={(e) => setTitre(e.target.value)}
                        placeholder="TITRE"
                        required
                    />  <br />
                    <input className="border input border-gray-400  w-full h-12 p-4" type="text"
                        name="auteur"
                        value={auteur}
                        onChange={(e) => setAuteur(e.target.value)}
                        placeholder="AUTEUR"
                        required
                    /> <br  />
                    <textarea className="border border-gray-400  w-full h-96 p-4" type="text"
                        name="contenu"
                        value={contenu}
                        onChange={(e) => setContenu(e.target.value)}
                        placeholder="CONTENU"
                        required
                    />
                    <button onClick={Enregistrement} type="submit" className="bg-blue-600 py-2 px-8 rounded-md">Ajouter un article</button>
                </form>
            </div>
        </>
    );
}

export default AddArticle;