import axios from "axios";
import store from "../store";

var instance = axios.create({
  baseURL: "http://18.139.50.74:8080",
});

// var token;
// var local = JSON.parse(localStorage.getItem("local"));
// if (local != null) token = local.auth.token;
// instance.defaults.headers.common["Authorization"] = token;

instance.interceptors.response.use(
  (res) => {
    var message = res.data.message
    console.log('output', message)
    store.dispatch("snackbar", {message: message});
    return res;
  },
  (error) => {
    // console.log('error', error.response)
    var errorMessage = error.response.data.message;
    console.log(errorMessage)
    store.dispatch("snackbar", { color: "error", message: errorMessage });
    return error;
  }
);

export default instance;
