import { showAlert } from "./alert.js";

const allProducts = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: 'http://localhost:4000/api/v1/products',
    });
     displayProduct(res.data.data);
  } catch (err) {
    console.log(err);
  }
};

localStorage.removeItem('userID');

allProducts();

const displayProduct = (data) => {
  const dataL = data.length;
  var display = document.querySelector('.products');
  var cookie = document.cookie.split("token=")[1];
  var user = JSON.parse(cookie.split(';')[0]);

  for (let i = 0; i < dataL; i++) {
    const element = data[i];

    // Check if user and user._id are defined
    if (user && user._id && element.user && element.user._id) {
 
      if (element.user._id == user._id) {
        display.innerHTML += `
        <div class="product">
            <div class="proimg">
                <img class="cardphoto" src="./image/product/${element.photo}" alt="Product Photo">
            </div> 
            <h3>${element.product_name}</h3>
            <p>Nu. ${element.price}.00</p>
            <a id="more_info" style="cursor:pointer;" onclick="moreInfo('${element._id}');">Click here to see more information</a>
            
            <a href="#"><button type="submit" onclick="editProd('${element._id}')" class="edit-button">Edit</button></a>
 
            <button class="delete-button" onclick="deleteProd('${element._id}');">Delete</button>
        </div>
        `;
      } else {
        continue;
      }
    } else {
      console.error("User or product data is not properly defined.");
    }
  }
};
