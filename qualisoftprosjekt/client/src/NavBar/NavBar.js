import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


function NavBar(){

    const history = useHistory();

    function goToSuggestion(){
        history.push("/suggestionHandin");

    }
    function goToHR(){
        history.push("/suggestionOverview");
    }

    function goToFrontPage(){
        history.push("/");
    }
    

    return(

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            
           
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" onClick={goToFrontPage}>Hjemmeside <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" onClick={goToSuggestion}>Gi forslag</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" onClick={goToHR} >HR</a>
                    </li>
      
      
    </ul>
    
  </div>
</nav>
    
    
    )
}

export default NavBar;