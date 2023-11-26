import { showAlert } from "./alert.js"

async function moreInfo(id) {
    try { 
       const res = await axios({
        method: 'GET',
        url: `https://group4himalayanhues.onrender.com/api/v1/products/${id}`,
      })
   
    
    editProd(res.data.data)
      
  
    } catch (err) {
      console.log(err)
    }
  }

var myElement = document.querySelector(".addform .id#myElement");
moreInfo(myElement.textContent)


function editProd(data){
    var c1 = document.getElementById('imageDisplay');
    var c2 = document.getElementById('product_name');
    var c3 = document.getElementById('product_description');
    var c4 = document.getElementById('quantity');
    var c5 = document.getElementById('price');
    var c6 = document.getElementById('bank');
    var c7 = document.getElementById('account_number');
    

    c1.src = `./image/product/${data.photo}`;
    c2.value = data.product_name;
    c3.value = data.description;
    c4.value = data.price;
    c5.value = data.quantity;
    c6.value = data.bank;
    c7.value = data.account;
     


}


    
const updateProduct = async (product_name,description,price,quantity,bank,account,id) => {
    try {
        const res = await axios({
            method: 'PUT',
            url: `https://group4himalayanhues.onrender.com/api/v1/products/${id}`,
            data:{
                product_name,
                description,
                price,
                quantity,
                bank,
                account
            }
        });
        if (res.data.status === 'success') {
            showAlert("success","Product updated Successfully")
        }
    } catch (err) {
        showAlert("error","Product updated failed")
         
    }
};

document.getElementById('saveChange').addEventListener('click', async (e) => {
    e.preventDefault();

  

    const product_name = document.getElementById('product_name').value;
    const description = document.getElementById('product_description').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;
    const bank = document.getElementById('bank').value;
    const account = document.getElementById('account_number').value;
  
  
    updateProduct(product_name,description,price,quantity,bank,account,myElement.textContent);
});



