// let api = "https://api.escuelajs.co/api/v1/users";
//  async function FetchApi() {
//      let response = await fetch(api);
//      let result =await response.json();
//      console.log(result)
// }
// FetchApi()





axios
  .get(' https://api.escuelajs.co/api/v1/users')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error("There was a problem with the axios request:", error);
  }); 




