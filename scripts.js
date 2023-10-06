let list = document.querySelector('ul')
let buttonshowAll = document.querySelector('.show-all')
let buttonmapAll = document.querySelector('.map-all')
let buttonsumAll = document.querySelector('.sum-All')
let buttonFilterAll = document.querySelector('.filter-all')


function showAll(burguerAll) {
    let myLi = ""

    burguerAll.forEach(product => {
        myLi += `
            <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                <p class="item-price">R$ ${product.price}</p>
            </li>
            `

    })

    list.innerHTML = myLi
}

function mapAll() {
    let newPrice = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }))

    showAll(newPrice)

}

function sumAll() {
    let totalprice = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
       list.innerHTML= `
            <li>
                <p>O valor total dos itens é de R$ ${totalprice}</p>
            </li>
            `

}

function filterAll(){
    let newvegan = menuOptions.filter((product) => product.vegan)

    showAll(newvegan)
}


buttonshowAll.addEventListener('click', () => showAll(menuOptions))
buttonmapAll.addEventListener('click', mapAll)
buttonsumAll.addEventListener('click', sumAll)
buttonFilterAll.addEventListener('click', filterAll)