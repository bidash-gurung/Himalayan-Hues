
window.getCartDetails = async function(id,useridd){
   
    try {
      const res = await axios({
        method: 'GET',
        url: `http://localhost:4000/api/v1/products/${id}`,
      });

       
      displayorder(res.data.data,useridd)
    } catch (err) {
      console.log(err);
    }
  

}

let id = localStorage.getItem('id');
let useridd = localStorage.getItem('useridd');
getCartDetails(id,useridd)


window.displayorder = async function(data,idd){
    const pname = document.getElementById('pname');
    const pprice = document.getElementById('pprice');
    
    pname.innerHTML = " "+data.product_name;
    pprice.innerHTML = " "+data.price;


}

 
