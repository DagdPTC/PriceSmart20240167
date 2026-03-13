import express from "express"

//Router() nos ayudará a colocar los métodos
//que tendrá el endpoint
const router = express.Router()

router.route("/")
.get()
.post()

router.route("/:id")
.put()
.delete()

export default router;