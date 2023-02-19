console.log('callback function')


function pizzaOrder(name, type, callback) {
    console.log(`your pizza is ${name} and contain: ${type} `)
    setTimeout (() => {
        const message = 'Your pizza is ready'
        callback(message)
    }, 3000)
}
pizzaOrder ('meat and mashroom', `cheese, mashroom, meat`, function (message) {
    console.log(message)
})
