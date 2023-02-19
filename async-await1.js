console.log('async/await')


const getUser = () => {
    return new Promise((resolve, reject) =>{
        setTimeout (() => {
            resolve(data)
        }, 2000)
    })
}
const data = {
    name: 'mina',
    email: 'mina.com',
    password: '123'
}

const fetchData = async () => {
   const result =  await getUser()
   console.log(result)
}

fetchData()