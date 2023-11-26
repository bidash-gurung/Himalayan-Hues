import { showAlert } from "./alert.js";

window.getUser = async function (id) {
    try {
 
        const res = await axios({
            method: 'GET',
            url: `http://localhost:4000/api/v1/users/${id}`,
        });

        if (res.data.status === 'success') {
            display(res.data.data);
        }
    } catch (err) {
        showAlert("error", "Profile retrieval failed");
    }
};
var cookie = document.cookie.split("token=")[1];
var user = JSON.parse(cookie.split(';')[0]);

var id = user._id;
getUser(id);

window.updateName = async function () {
    var cookie = document.cookie.split("token=")[1];
    var user = JSON.parse(cookie.split(';')[0]);

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    updateEmail(name, email, user._id);
};

window.updateEmail = async function (name, email, id) {
    try {
 
        const res = await axios({
            method: 'PATCH',
            url: `http://localhost:4000/api/v1/users/${id}`,
            data: {
                name,
                email
            }
        });

         if (res.data.status === 'success') {
            showAlert("success", "Profile updated Successfully");
             window.setTimeout(() => {
                window.location.href = "profile.html"
            }, 1500);        }
    } catch (err) {
        showAlert("error", "Profile update failed");
    }
};



window.display = async function (data) {
    document.getElementById("name").value = data.name;
    document.getElementById("email").value = data.email;
};


window.verifypassword = async function (){
    var nepas = document.getElementById("newPassword").value;
    var confnew = document.getElementById("confirmPassword").value;

    if(nepas == confnew){
        updatePass(nepas,confnew);
    }else{
        showAlert("error","Password does not match!")
    }
}

window.updatePass = async function (password,passwordConfirm) {
    try {
 
        const res = await axios({
            method: 'PATCH',
            url: `http://localhost:4000/api/v1/users/${id}`,
            data: {
                password,
                passwordConfirm
            }
        });

         if (res.data.status === 'success') {
            showAlert("success", "Password updated Successfully");
             window.setTimeout(() => {
                window.location.href = "profile.html"
            }, 1500);        }
    } catch (err) {
        showAlert("error", "Profile update failed");
    }
};