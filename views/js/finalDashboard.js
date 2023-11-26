import { showAlert } from "./alert.js"


const showUser = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: 'http://localhost:4000/api/v1/users',
      });
       
      displayUser(res.data.data)
    } catch (err) {
      console.log(err);
    }
  };


const getProd = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: 'http://localhost:4000/api/v1/products',
      });
       
      displayProd(res.data.data)
    } catch (err) {
      console.log(err);
    }
  };

  const getFeed= async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: 'http://localhost:4000/api/v1/feedback',
      });
       
      displayFeed(res.data.data)
    } catch (err) {
      console.log(err);
    }
  };
showUser()
getProd()
getFeed()

window.displayUser = async function(data){

    document.getElementById("users").textContent=data.length;

    var display = document.getElementById("myTableBody");
    var totalAdmin = 0;
    var slno = 0;
    for(let i = 0; i<data.length; i++){

        if(data[i].role != "admin"){
            slno += 1;
            display.innerHTML += `
                                <td>${slno}</td>
                                <td>${data[i].name}</td>
                                <td>${data[i].email}</td>
                                <td><button type="button" onclick="deleteUser('${data[i]._id}')" style="border-radius:5px;
                                background-color: rgb(255, 0, 128);
                                ">Deactivate</button></td>
            `;
        }else{
            totalAdmin+=1;
            continue;
        }
    }
    document.getElementById("admusers").textContent= totalAdmin;
}

window.displayProd = async function(data2){
    document.getElementById("announcements").textContent = data2.length;
}

window.displayFeed = async function(data3){
    document.getElementById("comments").textContent = data3.length;
}


window.deleteUser = async function(id){
    var conf = window.confirm("Do you really want to delete this user");
    if(conf){
        removeUser(id);
    } 
}

window.removeUser = async function (id){
    try {
        const res = await axios({
          method: 'DELETE',
          url: `http://localhost:4000/api/v1/users/${id}`,
        });
         
        if(res.data.status == "success"){
            showAlert("success","User Deactivated..")
            window.setTimeout(() => {
                window.location.href = "dashboard.html"
            }, 1500); 
        }
      } catch (err) {
        showAlert("error","User Deactivation Unsuccessfull..")

       }
}