/* 
	? Router
	* an object handling routing and middleware only
	* helps with scope pollution (access to all methods when unnecessary)

	? Basic Routing
	* Router.method() handles request type (GET, PATCH, POST, PUT, DELTE, etc.)
	* endpoint
	* callack with business logic and req, res as parameters
	* response sent via .sendFile, .send, .json, and so on....
*/

// import express and invoke its .Router() interface
const router = require("express").Router()

let db = [
	{ email: "paul@codecademy.com", password: "dbLocal"},
	{ email: "scott@gmail.com", password: "Scotti3"},
	{ email: "arush@google.com", password: "password"},
	{ email: "rus@cyberexpert.com", password: "lakdh&)ldkx-dakhjlf"},
	{ email: "vince@gmail.com", password: "admin"}
]

router.get("/health", (req, res) => {
	console.log(req)
	res.status(200).json({
		message: "The server is running."
	})
})

/* 
	? POST Request
	* this type of request comes in with a body
	* the body will hold a payload, usually in the form of JSON
*/

router.post("/register", (req, res) => {
	// req.body gives us access to the body of the request
	console.log(req.body)
	// req.headers gives us access to the headers of the request
	console.log(req.headers)
	// tl;dr - anything you need to access from the request, comes from req
	let newUser = req.body

	if (newUser) {
		db.push(newUser)
		console.log(db)
		res.status(201).json({
			message: "User created",
			user: newUser.email
		})
	}
})

// let newDb = [
// 	{ email: "vince@gmail.com", password: "admin"},
// ]

router.post("/login", (req, res) => {
	console.log(req.body)
	console.log(req.headers)
	let nuUser = req.body
	
let foundUser = db.find((user) => {
    return user.email === nuUser.email
})

if (!foundUser) {
    return res.status(404).json({
    message: "User not found"
    })
}

if (foundUser.password !== nuUser.password) {
    return res.status(401).json({
    message: "Wrong password"
    })
}

return res.status(200).json({
    message: "User logged in"
})
})




/* 
	? Challenge
	* create a POST route called /login
	* using Postman setup your POST request to /login
	* this req should have a body with email and password properties
	* within the route
		* check if the user exists against your database
		* check if the password matches
		* send different requests for:
			* when user is not found
			* when user has an invalid password
			* when user has been successfully logged in
	* feel free to utilize same response pattern as in /register route
*/

// Export all modified content of the object for access elsewhere
module.exports = router

// let foundUser = database.filter(usr => usr.email === request.email)

// if (foundUser.length) {
// 	if (foundUser[0].password === request.password) {
		
// 	} else {
		
// 	}
// } else {
	
// }