import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api/v1';


class service {
    async submitSuggestion (data) {
        try {
        const res = await axios.post('/suggestion', data);
        return res.data;
      } catch (error) {
        return console.error(error);
      }
        
      }

    
    getAllSuggestions(token) {
      return axios.get('/suggestionList', {
        headers: {
          Authorization: token
        }
       }).then((res) => res.data)
    }  

    getSuggestionDetails(id) {

      return axios.get('/suggestionList/' + id).then((response) => response.data)

    }
    
}

export default new service();