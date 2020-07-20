const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL,{
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true 
}).then((result) =>{
	console.log('Connection Successful!')
}).catch((error) =>{
	console.log('Error',error)
})





// const task = new Task({
// 	description: 'Eat healthy  '
// })

// task.save().then(() =>{
// 	console.log(task)
// }).catch((error) => {
// 	console.log('Error!',error)
// })

// const me = new User({
// 	name: '  Vaibhav  ',
// 	email: 'myemail@gmail.com ',
// 	password: 'phone123!'
// })
// me.save().then(() =>{
// 	console.log(me)
// }).catch((error) => {
// 	console.log('Error!',error)
// })