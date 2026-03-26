/* 
	? Middleware
	* a function (can do anything)
	* access to request and response objects (can modify them)
	* access to next middleware in the call stack
	* can end req/res lifecycle
*/

function requestTimestamp(req, res, next) {
	req.date = new Date().toLocaleDateString()
	console.log(req.date)
	// next() - allows us to continue down the call stack
	next()
}

module.exports = requestTimestamp