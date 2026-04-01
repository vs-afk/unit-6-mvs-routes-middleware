const router = require("express").Router()

let db = [
	{ id: 1, item: "get milk", checked: false },
	{ id: 2, item: "learn JS", checked: false },
	{ id: 3, item: "buy bread", checked: false },
	{ id: 4, item: "get rich", checked: false },
]

// ? challenge: return all of our todo's
router.get("/all", (req, res) => {
	res.status(200).json({ db })
})

module.exports = router