import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import service from '../service.js';
import './suggestionPage.css';


function SuggestionPage(){
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");


    function goToFrontPage(){
        history.push("/");


    }

    function handleTitleChange(e) {
        const newTitle = e.target.value;
        setTitle(newTitle);
      };

    function handleContentChange(e) {
        const newContent = e.target.value;
        setContent(newContent);
    };
    
    function handleSubmit(e) {
        const suggestion = {
            title: title,
            content: content
        }

        service
        .submitSuggestion(suggestion)
        .then(response => {
            history.push("/submit/success")
          })
          .catch((error) => console.log('Error ' + error.message));

        e.preventDefault();  
        
    }

   

    
    return(
        <div className="container">
            <NavBar />
            <div className="formArea" >
                <p className="heading text-center">Forslagskjema</p>
            <form>
            <div className="mb-3 titel">
                <label for="exampleFormControlInput1" class="form-label">Tittel</label>
                <input type="text" class="form-control" id="FormControlInput1" value={title} onChange={handleTitleChange}/>
            </div>
            
            <div className="mb-3 content">
                <label for="exampleFormControlTextarea1" class="form-label">Forslag</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" value={content} onChange={handleContentChange}></textarea>
            </div>
            
                
                    
                
                <div className="submitBtn">
                <button type="button" className="btn btn-primary " onClick={ handleSubmit}>Submit</button>

                </div>
                
                    
                
            
            
            
            

            </form>

            </div>
           
        
        </div>
    )
};


export default SuggestionPage;