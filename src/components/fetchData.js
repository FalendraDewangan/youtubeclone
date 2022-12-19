const axios = require("axios");

const BASE_URL = 'https://youtube138.p.rapidapi.com/'

const options = {
  url: BASE_URL,
  headers: {
    'X-RapidAPI-Key': 'd6d92dc23dmsh85517a568ab6d79p1fca2fjsn0bbf3b9279e9',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

let k = 10;

export const fetchData = async (url) =>{
  if(k>0)
  {
    k--;
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  }
  else{
    console.log("Fetch Data");
    return null;
  }
  
}