import { showAlert } from './alert.js';


const createProduct = async (data) => {
    try {
        const res = await axios({
            method: 'POST',
            url: 'https://group4himalayanhues.onrender.com/api/v1/products',
            data
        });

        if (res.data.status === 'success') {
            // window.alert('success', 'Product added successfully');
            showAlert("success","Product Successfully added.")
            window.setTimeout(() => {
                location.assign('/sellerhome');
            }, 1500);
        }
    } catch (err) {
        console.log(err)
         
    }
};

document.getElementById('submittheFormDetals').addEventListener('click', async (e) => {
    e.preventDefault();

    // var obj = JSON.parse(document.cookie.substring(6))
    const productImage = document.getElementById('productImage').files[0];
    const product_name = document.getElementById('product_name').value;
    const product_description = document.getElementById('product_description').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;
    const bank = document.getElementById('bank').value;
    const account_number = document.getElementById('account_number').value;

    var cookie = document.cookie.split("token=")[1]
    var user = JSON.parse(cookie.split(';')[0]);
 
    // const Users = obj._id();
    const formData = new FormData();
    formData.append('photo', productImage);
    formData.append('product_name', product_name);
    formData.append('description', product_description);
    formData.append('quantity', quantity);
    formData.append('price', price);
    formData.append('bank', bank);
    formData.append('account', account_number);
    formData.append('user',user._id)

    // for (const [key, value] of formData.entries()) {
    //     console.log(`${key}: ${value}`);
    // }
    createProduct(formData);
});
