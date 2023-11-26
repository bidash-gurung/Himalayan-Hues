import { showAlert } from "./alert.js"

window.addtoWishlist = async function(product_name,price,product_id,user_id,user){
    try{
        console.log(product_name,price,product_id,user_id)
        const res = await axios({
            method: 'POST',
            url : `http://localhost:4000/api/v1/wishlist`,
            data: {
                product_name,
                price,
                product_id, 
                user_id,
                user,
            }
        })
         if (res.data.status === 'success'){
            showAlert('success','Product Added to wishlist!')
        }
    }
    catch(err){
        showAlert("error","Failed to add to wishlist!")
    }
}


window.checkWishlist = async function(data,user){
    try{
          const res = await axios({
            method: 'GET',
            url : `http://localhost:4000/api/v1/wishlist`,
            
        })
 
        if (res.data.status === 'success'){
            var cart = res.data.data;
            var cartL = cart.length;
            
             var names = [];

            for(let i = 0; i<cartL; i++){
                 if(user == cart[i].user){
                    if (!names.includes(cart[i].product_name)) {
                        names.push(cart[i].product_name); // Add the item to the array if it's not already in the array
                    }
                }
            }
             
            if(names.includes(data.product_name)){
                showAlert("error","Product already exists!")
            }else{
                addtoWishlist(data.product_name,
                       data.price,
                        data._id,
                        data.user,user)
            }
        }

        
    }
    catch(err){
         
        showAlert("error","Failed to add to Wishlist!")
    }

}




