// Autor Kristel Guzman Venegas

number = prompt('ingresa un número')
const factorial = num => {
    if (num < 0) num = num * -1
    if (num <= 0) return 1
    let factorial = 1
    while (num > 1) {
        factorial = factorial * num
        num--
    }
    return factorial
}

for (let x = 0; x <= number; x++) {
    console.log(x + '! = ' + factorial(x))
}
