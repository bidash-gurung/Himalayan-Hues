import { showAlert } from "./alert.js"

const allProducts = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: 'https://group4himalayanhues.onrender.com/api/v1/products',
      });
       
      displayProduct(res.data.data)
    } catch (err) {
      console.log(err);
    }
  };
  
  
  
  localStorage.removeItem('userID')
  
  allProducts();
  
  
  
  
    
   
  const displayProduct = (data) => {
      const dataL = data.length
       var display = document.querySelector('.products');
       for (let i = 0; i < dataL; i++) {
           var cookie = document.cookie.split("token=")[1]
          var user = JSON.parse(cookie.split(';')[0]);
           const element = data[i]
           display.innerHTML += `
          <div class="product">
            <div class="proimg">
            <img class="cardphoto" src="./image/product/${element.photo}" alt="Product Photo">

            </div>
            <h3>${element.product_name}</h3>
            <p  >Nu. ${element.price}.00</p>
            <a id="more_info" style="cursor:pointer;"   onclick="moreInfo('${element._id}');">Click here to see more information</a>
            <button class="edit-button" onclick="addCart('${element._id}','${user._id}')">Add to Cart</button>
          <button class="delete-button" onclick="addWishlist('${element._id}','${user._id}')">Add to Wishlist</button>
        </div>
          `
  
           
        }
      
  }

 


  
  