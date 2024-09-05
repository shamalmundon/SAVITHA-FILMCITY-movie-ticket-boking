import commonApi from "./commonApi";
import axios from "axios";

export const getUpcoming =()=>{
    return commonApi("","GET","http://127.0.0.1:8000/Upcoming/","")
}

export const getRunning =()=>{
  return commonApi("","GET","http://127.0.0.1:8000/Running/","")
}

export const postContact = (data) => {
  return axios.post('http://127.0.0.1:8000/contact/', data);
};

// Define the function to post ticket data
export const postTicket = (data) => {
  return commonApi("", "POST", "http://127.0.0.1:8000/tickets/", data);
};


