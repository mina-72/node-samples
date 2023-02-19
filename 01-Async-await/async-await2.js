console.log('async/await with try&catch')

const getUser = () => {
    return new Promise((resolve, reject) =>{
        setTimeout (() => {
            if (data.name === 'reza'){
                reject(new Error(`name is ${data.name}`));
            }
            resolve(data)
        }, 1000)
    })
}
const data = {
    name: 'mina',
    email: 'mina.com',
    password: '123'
}

const fetchData = async () => {
    try {
        const result =  await getUser()
        console.log(result)
        
    } catch (error) {
        console.log('Error is:', error.message)
    }
}

fetchData()