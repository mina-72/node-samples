const getUser = new Promise((resolve, reject) => {
  const user = {
    name: 'mina',
    password: '1234',
    email: 'mina.com',
    address: 'mashhad',
    role: ['admin','guide']
  }
  setTimeout(() => {
  
    // Reject the Promise
    reject("Promise has been rejected!");
  }, 2000);
  resolve (user)
    
})



getUser.then((user) => {
    console.log('name is:', user.name);
    
    return user.password
  });
  getUser.then((user) => {

    console.log('password is:', user.password);

    return user.address
  });
  getUser.then((user) => {
    console.log('address is:', user.address);
    if(user.role.includes('admin')){
      throw new Error(`error is: You are ${user.role[0]} and can not allowed to access`);
  }
  })
  getUser.catch((err) => {
    console.log(err.message)
  })

  getUser.finally(() => {
    console.log('this is finally() after promise is settled')
  })
