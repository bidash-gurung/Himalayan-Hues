import { showAlert } from "./alert.js"


window.giveFeedback = function (){
    var feedback = document.getElementById("feed").value;

    var cookie = document.cookie.split("token=")[1]
    var user = JSON.parse(cookie.split(';')[0]);
     

    uploadFeedback(feedback,user._id)
}


window.uploadFeedback = async function(feedback,user_id){
    try{
         const res = await axios({
            method: 'POST',
            url : `http://localhost:4000/api/v1/feedback`,
            data: {
                feedback,
                user_id,
            }
        })
        if (res.data.status === 'success'){
            showAlert('success','Feedback submitted!')
        }
    }
    catch(err){
        showAlert("error","Failed to submit feedback!")
    }
}