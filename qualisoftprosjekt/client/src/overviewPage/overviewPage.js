import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import service from '../service';
import { NavLink } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import LogInPage from '../LogInPage/LogInPage';

function OverviewPage(){
    const history = useHistory();
    const [suggestions, setSuggestions] = useState([{ id:"", title: "", content: "" }])
    const [token, setToken] = useState();

    function getSuggestionList() {
        service
        .getAllSuggestions(token)
        .then((data) => setSuggestions(data))
        .catch((error) => console.log('Error getting categories: ' + error.message));
    }
    
    useEffect(() => {
        getSuggestionList()
    }, [setSuggestions, token]);


    if(!token) {
      return <LogInPage setToken={setToken} />
    }
    
    return(
        <div className="container">
            <NavBar />
            <div className="overview">
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Forslag Titel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {suggestions.map((item,key) => {
                            return(
                            <tr key={key}>
                            <th scope="row">{item.id}</th>
                            <td> <NavLink to={"/suggestionDetails/"+ item.id}>{item.title}</NavLink></td>
                            </tr>
                            )
                            })}
                    </tbody>
                </table>
            </div>
    </div>
    )
}


export default OverviewPage;