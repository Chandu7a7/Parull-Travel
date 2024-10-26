const express = require('express');
const router = express.Router();

const { adminLogin,
    createAdmin,
    getAllUser,
    createBlog,
    getAllBlog,
    getBlogById,
    updateBlog,
    deleteBlog,
    getAllContacts,
    getContactById,
    deleteContact,
    createTour,
    getAllTour,
    getTourById,
    updateTour,
    deleteTour,

} = require('../controller/admin');
 const { verifyAdminToken } = require('../middleware/tokenverification');



router.post('/login', adminLogin);
router.post('/create', createAdmin);
router.get('/getAllUser',verifyAdminToken ,getAllUser);

// Admin Blog routes
router.post('/createBlog',verifyAdminToken,createBlog);
router.get('/getAllBlog',verifyAdminToken ,getAllBlog);
router.get('/getBlogById/:id',verifyAdminToken,getBlogById);
router.put('/updateBlog/:id',verifyAdminToken,updateBlog);
router.delete('/deleteBlog/:id',verifyAdminToken,deleteBlog);

// Admin Contacts Routes
router.get('/getAllcontact',verifyAdminToken,getAllContacts);
router.get('/getContactById/:id',verifyAdminToken,getContactById);
router.delete('/deletContact/:id',verifyAdminToken,deleteContact);


// Admin Tour Package
router.post('/createTour',verifyAdminToken,createTour)
router.get('/getAllTour',verifyAdminToken,getAllTour)
router.get('/getTourById/:id',verifyAdminToken,getTourById)
router.put('/updateTour/:id',verifyAdminToken,updateTour)
router.delete('/deleteTour/:id',verifyAdminToken,deleteTour)



module.exports = router;