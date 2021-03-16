import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../NavBar/NavBar'
import './frontPage.css'

function FrontPage(){
    

    
    return(
    <div className="container">
        <div className="FrontPage">
            <NavBar />
            <div className="heading">
            <h1 className="text-center">Velkommen!</h1>

            </div>
            
            
                
               
                
        
        </div>
    </div>
    
    )
}


export default FrontPage;