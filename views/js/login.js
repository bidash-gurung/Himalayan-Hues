import { showAlert } from "./alert.js"

const login = async (email, password, role) => {
    try {
        const res = await axios({
            method: 'POST',
            url: 'http://localhost:4000/api/v1/users/login',
            data: {
                email,
                password,
                 
                
            },
        })
        const roles = res.data.data.user.role
        if (res.data.status === 'success'){

             
            var obj = res.data.data.user
             document.cookie = ' token = ' + JSON.stringify(obj)
          
            if(role === roles){
                if(roles  == "buyer"){
                    showAlert("success","Login Successful for buyer")
                    // window.location.href = "buyerhome.html";
                    window.setTimeout(() => {
                        // location.assign('/buyerhome');
                        window.location.href = "buyerhome.html";
                    }, 1500);

                 }
        
                else if(roles  == "seller"){
                    showAlert("success","Login Successful for seller")
                    //  window.location.href = "sellerhome.html";
                     window.setTimeout(() => {
                        // location.assign('/sellerhome');
                        window.location.href = "sellerhome.html";
                    }, 1500);
                    
                }
                else if(roles  == "admin"){
                    showAlert("success","Welcome Admin!")
                    window.setTimeout(() => {
                        // location.assign('/sellerhome');
                        window.location.href = "dashboard.html";
                    }, 1500);
                 }
                
            }
            else{
                showAlert("error","Invalid Password or Email or User Type")
             }

        }
        else{
            showAlert("error","Invalid Password or Email or User Type")
         }


        
        // if (res.data.status == 'success') {

            
        //     showAlert('success', 'Logged in successfully')
           
        // }
    } catch (err) {
        let message = 
            typeof err.response !== 'undefined'
            ? err.response.data.message
            :err.message
        showAlert('error', 'Error: Incorrect email or password', message)
    }
}

document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault()
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const selectedRole = document.querySelector('input[name="role"]:checked').value;

    
      


    login(email, password,selectedRole)
})
