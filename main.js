// let response = fetch('https://dummyjson.com/quotes/random')
// .then((response) => response.json())
// .then((data) => console.log(data))
// .catch((error) => console.log(error))

let h1 = document.querySelector('h1')
let p = document.querySelector('p')
let container = document.querySelector('#container')


const fetchData = async () =>{
    let response = await fetch('https://dummyjson.com/quotes/random')
    let data = await response.json()

    h1.innerText = data.quote
    p.innerText = data.author

    let color = `hsl(${Math.random() * 360}, 70%, 50%)`

    h1.style.color = color
    p.style.color = color
    container.style.backgroundColor = color

}

fetchData()


setInterval(() =>{
    fetchData()
}, 5000)