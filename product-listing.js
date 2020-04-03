'use strict';


//fetch('http://jsonplaceholder.typicode.com/photos')
//fetch('https://learnwebcode.github.io/json-example/animals-1.json')


// fetching and rendering

fetch('/json/listing.json')
    .then((res) => {

        res.json().then((data) => {
            const temp = document.querySelector('template').content;
            const img = temp.querySelector('img');
            const title = temp.querySelector('.title');
            const price = temp.querySelector('.price');

            const gridContainer = document.getElementById('grid-container');

            return data.map((item, idx) => {

                img.setAttribute('src', item.image);
                title.textContent = item.title;
                price.textContent = item.price;

                //gridContainer.appendChild(document.importNode(temp, true)) or
                gridContainer.appendChild(temp.cloneNode(true))

            })
        })
    })


var sortLowToHigh = (a, b) => {
    return a - b
}
var sortHighToLow = (a, b) => {
    return b - a
}

const sortBy = (sortAs) => {
    var priceElements = document.getElementsByClassName('price');
    var inn = Array.from(priceElements).map(item => {
        return item.innerText;
    });

    var sortedPrice = inn.sort(sortAs);
    console.log(sortedPrice)

    return Array.from(priceElements).map(item => {
        let pi = item.innerText;
        if (sortedPrice.includes(pi)) {
            item.parentElement.setAttribute('style', 'order:' + (sortedPrice.indexOf(pi) + 1))
        }
    });
};

//const sortHTL = document.getElementById('sortH');
//sortHTL.addEventListener('click', sortBy(sortHighToLow))

// Search from Input
const searchInput = document.getElementById('search');
searchInput.addEventListener('keyup', searchText => {
    searchText = searchInput.value;
    let list = document.getElementsByClassName('grid-item');

    return Array.from(list).filter(item => {

        if (item.innerText.toLowerCase().includes(searchText.toLowerCase())) {
            item.style.display = 'block';
            return true;
        }
        item.style.display = 'none';
        return false
    });

})

// shopping cart
document.getElementById('bag').addEventListener('click', () => {
    document.getElementById("cartContent").classList.remove("hide");
})

document.getElementById('close').addEventListener('click', () => {
    document.getElementById("cartContent").classList.add("hide");
})