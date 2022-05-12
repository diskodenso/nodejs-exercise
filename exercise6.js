import axios from "axios";

// retrieve data from google.com by using axios
axios
  .get("http://google.com")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
