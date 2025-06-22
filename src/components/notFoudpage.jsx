import { Link } from "react-router-dom";

const NotFoudPage = () => {
    localStorage.clear()
    return ( 
        <>
            <div className="h-screen flex flex-col justify-center items-center">
                <h1 className="text-6xl">Page introuvable</h1>
                <p className="text-blue-600"> <Link to="/">page principale</Link></p>
            </div>
        
        </>
     );
}
 
export default NotFoudPage;