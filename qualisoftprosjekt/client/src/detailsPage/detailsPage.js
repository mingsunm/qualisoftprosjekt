import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import service from '../service';
import NavBar from '../NavBar/NavBar';


function DetailsPage(props){
    const history = useHistory();
    

    const suggestionId = props.match.params.id

    const [suggestion, setDetails] = useState("")

    function getSuggestionDetails(){
        console.log(suggestionId)
        console.log(JSON.stringify(suggestionId))

        service
        .getSuggestionDetails(suggestionId)
        .then((data) => setDetails(data))
        .catch((error) => console.log('Error getting categories: ' + error.message));



    };

    useEffect(() => {
        getSuggestionDetails()
    }, [setDetails]);

    
    return(
        <div className="container">
            <NavBar />
            
            <div className="detailsPage">
             <div className="w-75 p-3 h-75 d-inline-block border border-primary border-3" >
               <p> {suggestion.content} </p>
             </div>  
            
            </div>

        </div>
    
    )
}

export default DetailsPage;