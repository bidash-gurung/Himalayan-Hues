import { showAlert } from "./alert.js"


window.clearCookies = async function () {
    // Replace "your_cookie_name" with the actual name of your authentication cookie
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}




window.logout = async function () {
    // Replace "your_logout_api_endpoint" with the actual endpoint for logging out on your server
            // Clear cookies or perform other client-side cleanup if needed
            clearCookies();
            localStorage.clear();

            showAlert('success',"Logged Out")
            // Redirect to the logout confirmation page or home page
            window.history.replaceState({}, document.title, "login.html");

            setTimeout(function () {
                window.location.href = "login.html";
            }, 3000);
       
}
