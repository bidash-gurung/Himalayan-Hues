import { showAlert } from "./alert.js"

document.addEventListener('DOMContentLoaded', function () {


    window.allProducts = async function () {
        try {
            const res = await axios({
                method: 'GET',
                url: 'http://localhost:4000/api/v1/products',
            });

            // Check if data is present and is an array
            if (res.data.data && Array.isArray(res.data.data)) {
                search(res.data.data);
            } else {
                console.error('Invalid data format:', res.data.data);
            }
        } catch (err) {
            console.error(err);
        }
    };

    console.log("Js is connected");
    // allProducts();

    // myArray = mylist;
    window.search = async function (data) {
        // Check if data is present and is an array
        if (data && Array.isArray(data)) {
            var mylist = [];
            var dataL = data.length;

            for (let i = 0; i < dataL; i++) {
                console.log(data[i].product_name);
                if (!mylist.includes(data[i].product_name)) {
                    mylist.push(data[i].product_name);
                }
            }
            searchProducts(mylist);
        } else {
            console.error('Invalid data format:', data);
        }
    }

    window.searchProducts = async function (list){
        var input = document.getElementById('searchInput').value;
        var display = document.getElementById('result')

        if(list.includes(input)){
            // display.innerHTML = `
            // <h2 style="color: aliceblue;">Product Available</h2>

            // `;
            showAlert('success',"Product Available")
        }else{
            // display.innerHTML =`
            // <h2 style="color: aliceblue;">Product Not Available</h2>

            // `;
            showAlert('error',"Product Not Available")

        }
        // setTimeout(function () {
        //     display.innerHTML = '';
        // }, 3000);

    }

    // window.searchProducts = async function (myArray) {
    //     // Get input value and convert to lowercase for case-insensitive search
    //     var input, filter, result, i;
    //     input = document.getElementById('searchInput');
    //     filter = input.value.toLowerCase();
    //     result = document.getElementById('result');

    //     // Clear previous results
    //     result.innerHTML = ` `;

    //     // Check if the input is empty
    //     if (!filter.trim()) {
    //         return;
    //     }

    //     // Loop through the array, display matching items
    //     for (i = 0; i < myArray.length; i++) {
    //         if (myArray[i].toLowerCase().indexOf(filter) > -1) {
    //             result.innerHTML += myArray[i] +   `<br>`;  // Display the matching item
    //         }
    //     }
    // }

    // Add event listener to the search icon
    // var searchIcon = document.querySelector('.fas.fa-search');
    // if (searchIcon) {
    //     searchIcon.addEventListener('click', function () {
    //         allProducts();
    //     });
    // }

});
