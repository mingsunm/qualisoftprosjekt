/*let suggestion = {
    id: number,
    title: "",
    content:""
};*/

class Database {

    autoIncrement = 1
    suggestionList = [];

    userList = [{
        username: "bob",
        password: "123" 
    },
    {
        username: "lisa",
        password: "123" 
    }]

    storeSuggestion(suggestion) {
        suggestion.id = this.autoIncrement

        this.autoIncrement++

        this.suggestionList.push(suggestion)

        console.log(this.suggestionList)

        return suggestion
        
    }

    getSuggestionList() {
        return this.suggestionList
    }

    getSuggestionContent(findId) {
        console.log(findId)
        console.log("suggestionList"+ this.suggestionList)
        return this.suggestionList.find( suggestion  => suggestion.id == findId)

    }

    getToken() {
        return "dummy-token-123"
    }

    getUser(username) {
        return this.userList.find( user  => user.username == username)
    }
}

export default new Database()


