require("dotenv").config()
const express = require("express")
const app = express()

// import any exports from elsewhere we need to use
const routes = require("./controllers/routes")
const requestTimestamp = require("./middlewares/timestamp")

const PORT = process.env.PORT
const HOST = process.env.HOST

// use built-in middleware to connect routes to the listener
// middlewares get called in order in the req/res lifecycle
// if we flip the two below, requestTimestamp will never trigger
app.use(express.json())
// ^^^ this middleware will parse our request body so we can access it
app.use(requestTimestamp)
app.use(routes)

app.listen(PORT, HOST, () => {
	console.log(`[server] listening on ${HOST}:${PORT}`)
})

/* 
	? Separation of Concerns
	* allows our code to be maintainable
	* allows us to find specific modules, services, etc.
	* requires the use of design patterns

	? Model View Controller Pattern (MVC)
	* a way to architect your application
	* handles full-stack application
	* breaks a full-stack application, into three categories:
		* model (data)
		* view (client) such as browser, phone, Postman, or even curl command
		* controller (logic)
	* MVC is used for Separation of Concerns
*/