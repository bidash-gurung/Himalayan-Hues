import { showAlert } from "./alert.js"


const getFeed= async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: 'https://group4himalayanhues.onrender.com/api/v1/feedback',
      });
       
      displayFeed(res.data.data)
    } catch (err) {
      console.log(err);
    }
};

const deleteFeedback= async (id) => {
    try {
      const res = await axios({
        method: 'DELETE',
        url: `https://group4himalayanhues.onrender.com/api/v1/feedback/${id}`,
      });
       
      if(res.data.status == "success"){
        showAlert("success","Feedback Deleted...")
        window.setTimeout(() => {
            window.location.href = "feedbackdash.html"
        }, 1500); 
      }
    } catch (err) {
        showAlert("error","Unsuccessfull...")
    }
};



const getUser = async (id, data,sl) => {
    try {
      const res = await axios({
        method: 'GET',
        url: `https://group4himalayanhues.onrender.com/api/v1/users/${id}`,
      });
       if(res.data.status=="success"){
        displayAllFeedback(res.data.data, data,sl)
      }
    } catch (err) {
      console.log(err);
    }
  };



getFeed()


window.displayFeed = async function (data){


    for (let i=0; i<data.length; i++){
        
        var username = getUser(data[i].user_id, data[i],i+1)

     }
}

window.displayAllFeedback = async function (user, data,sl){
    var display = document.getElementById("feedtable");

    display.innerHTML += `
    <td>${sl}</td>
    <td>${user.name}</td>
    <td>${data.feedback}</td>
    <td><button type="button" onclick="deleteFeed('${ data._id}')" style="border-radius:5px;
    background-color: rgb(255, 0, 128);
    position:relative; left:-220px;">Delete</button></td>
    `;
}

window.deleteFeed = async function (id){
    var conf = window.confirm("Do you want to delete this feedback!")

    if(conf){
        deleteFeedback(id)
    }
}