const axios = require("axios");
const baseURL = "https://shubhdeeps.herokuapp.com/api/e-numbers"


const getData = (setData) => {

        axios
          .get(baseURL)
          .then(response => {
            console.log('promise fulfilled')
            setData(response.data)
          })
      
}

export default { 
    getData: getData
  }