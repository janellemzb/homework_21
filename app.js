
let number = 5;
let square = Math.pow(number, 2)
console.log(square)

let numbers = [17, 45, 30, 49, 22, 14, 38, 16]
let reduceExample = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(reduceExample)

let filterExample = numbers.filter((number) => number % 11 === 0)
console.log(filterExample)


let mapExample = numbers.map((number) => number ** 2)
console.log(mapExample)

numbers.sort((a,b) => a - b)
console.log(numbers)






/*let url = 'https://fakestoreapi.com/products/'

async function getData() {
  let response = await fetch(url)
  let data = await response.json()
  console.log(data)
}

getData()*/












