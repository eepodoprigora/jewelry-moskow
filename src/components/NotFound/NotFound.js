import {useHistory} from "react-router-dom";
import "./NotFound.css"

const NotFound = () =>{
    const history = useHistory();
    const backtoMain = () => history.push('/');
    return (
        <div className='container'>
            <div className='notFoundContent'>
            <h2>The Page is Not Found</h2>
            <button onClick={backtoMain}>К выбору филиала</button></div>
        </div>
    )
}

export default NotFound