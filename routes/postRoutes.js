const { Router } = require('express')
const router = Router()
const authMiddleware = require('../middleware/authMiddleware')
const getPostsController = require('../controller/postsController/getPosts')
const createPostController = require('../controller/postsController/createPost')
const upload = require('../common/uploadImage')


router.post('/createpost', authMiddleware, upload('uploads/posts').array('images', 20), createPostController.createPosts)
router.get('/getPosts', authMiddleware, getPostsController.getPosts)

module.exports = router;