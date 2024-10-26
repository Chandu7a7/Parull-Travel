const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const { generateAdminToken } = require("../lib/generateToken");
const { checkMandatoryFields } = require('../lib/validations');
const { success, badRequest, serverError } = require('../lib/response');
// const {deleteImage} = require('../middleware/mediaUpload');
const jwt = require('jsonwebtoken');

const User = require("../models/User");
const Blog = require("../models/Blog");
const contactForm = require("../models/ContactForm");
const HotelOwner = require('../models/HotelOwner');
const Tour = require('../models/Tour')

// Admine login
const adminLogin = async (req, res) => {
    const mandatoryFields = ['username', 'password'];
    if (checkMandatoryFields(res, req.body, mandatoryFields)) {
        const { username, password } = req.body;
        try {
            let admin = await Admin.findOne({ username });
            if (!admin) {
                return badRequest(res, 'Invalid Credentials')
            }
            const isMatch = await bcrypt.compare(password, admin.password);
            if (!isMatch) {
                return badRequest(res, 'Invalid Credentials')
            }

            const token = generateAdminToken(admin._id);
            success(res, 'Admin Logged In Successfully', { token });


        }
        catch (error) {
            console.error(error.message);
            serverError(res);
        }
    }

}

// Creat admin
const createAdmin = async (req, res) => {
    const mandatoryFields = ['username', 'password'];
    if (checkMandatoryFields(res, req.body, mandatoryFields)) {
        const { username, password } = req.body;
        try {
            let admin = await Admin.findOne({ username });
            if (admin) {
                return badRequest(res, 'Admin already exists');
            }
            admin = new Admin({
                username,
                password
            });
            const salt = await bcrypt.genSalt(10);
            admin.password = await bcrypt.hash(password, salt);
            await admin.save();
            success(res, 'Admin Created Successfully');
        }
        catch (error) {
            console.error(error.message);
            serverError(res);
        }
    }
}

// get all user details
const getAllUser = async (req, res) => {
    try {
        const users = await User.find();
        success(res, 'All Users', users);
    } catch (error) {
        console.error(error.message);
        serverError(res);
    }
}


// creat blog

const createBlog = async (req,res) =>{
    const mandatoryFields = ['title', 'content','author','tags','category','published','publishedAt','createdAt'];
    if (checkMandatoryFields(res, req.body,mandatoryFields)){
        const {title,content,author,tags,category,published,publishedAt,createdAt} = req.body; 
    try{
        let blog = await Blog.findOne({title});
        if(blog){
            return badRequest(res,'Blog already exists');
        }
          // uploaded image url 
        const fileUrl = req.file.location;
        blog = new Blog({  
            title,
            content,
            BlogImage:fileUrl,
            author,
            tags,
            category,
            published,
            publishedAt,
            createdAt,
        
        });
        await blog.save();
        success(res,'Blog Created Successfully');
    }
    catch(error){
        console.error(error.message);
        serverError(res);
    }
    }
}


// get all blog

const getAllBlog = async (req, res) => {
  
    try{
        const blog = await Blog.find();
        success(res, 'All Blogs', blog);
    } catch(error){
        console.error(error.message);
        serverError(res);
    }

}

// get blog by id

const getBlogById = async (req, res) => {
    const {id}=req.params;
    if(!id){
        return badRequest(res,'Blog id is required');
    }
    try{
        const blog = await Blog.findById(id);
        if(!blog){
            return badRequest(res,'Blog not found');
        }
        success (res,'Blog',blog);
    } catch(error){
        console.error(error.message);
        serverError(res);
        }
}

// update blog
const updateBlog = async (req, res) => {
    const {id} = req.params;
    if(!id){
        return badRequest(res,'Blog id is required');
    }
    try{
        const blog = await Blog.findById(id);
        if(!blog){
            return badRequest(res,'Blog not found');
        }
        await Blog.findByIdAndUpdate(id);
        success(res,'Blog updated succesfully');
    } catch(error){
        console.error(error.message);
        serverError(res);
    }
     
}

// delete blog

const deleteBlog = async (req, res) => { 
    const {id}=req.params;
    if(!id){
        return badRequest(res,'Blog id is required');
    }
    try{
        const blog = await Blog.findById(id);
        if(!blog){
            return badRequest(res,'Blog not found');
        }
        await Blog.findByIdAndDelete(id);
        success(res,'Blog deleted');
    } catch(error){
        console.error(error.message);
        serverError(res);
    }
}



// Read all contact form entries (admin only)
const getAllContacts = async (req, res) => {
    try {
        const contact = await contactForm.find();
        success(res,'All contact',contact)
    } catch (error) {
        console.error(error.message);
        serverError(res);
    }
};

// Read a specific contact form entry (admin only)
const getContactById = async (req, res) => {
    
    const {id}=req.params;
    if(!id){
        return badRequest(res,'contact is required');
    }
    try{
        const contact = await contactForm.findById(id);
        if(!contact){
            return badRequest(res,'contact not found');
        }
        success(res,'contactForm',contact);
    } catch(error){
        console.error(error.message);
        serverError(res);
    }
};

// Delete a contact form entry (admin only)
const deleteContact = async (req, res) => {
    try {
        const contact = await contactForm.findByIdAndDelete(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: "Contact form entry not found" });
        }
        res.status(200).json({ message: "Contact form entry deleted" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


// Tour package

// Tour 

const createTour = async (req,res) =>{
    const mandatoryFields = ['title','description','offer_price','original_price','available_dates'];
  if(checkMandatoryFields(res,req.body,mandatoryFields)){
  const { title,description,offer_price,original_price,available_dates }=req.body;

  try{

    let tour = await Tour.findOne({title});
    if(tour){
        return badRequest(res,'tour already exists');
    }
    // uploaded image url 
       const fileUrl = req.file.location;
       tour = new Tour({
        title,
        description,
        offer_price,
        TourImage : fileUrl,
        original_price,
        available_dates,
       });

       await tour.save();
       success(res,'tour created Successfully');

}
catch(error){
    console.error(error.message);
    serverError(res);
}
  }
}

// GET ALL TOUR PACKAGE

const getAllTour = async (req,res)  => {

    try{
        const tour = await Tour.find();
        success(res,'All Topur',tour);
    }catch(error){
        console.error(error.message);
        serverError(res);
    }

}

// GET TOUR PACKAG EBY ID

const getTourById = async (req,res) =>{

    const {id}=req.params;
    if(!id){
        return badRequest(res,'Tour id is required');
    }
    try{
        const tour = await Tour.findById(id);
        if(!tour){
            return badRequest(res,'Blog not found');
        }
        success (res,'Tour',tour);
    } catch(error){
        console.error(error.message);
        serverError(res);
        }

}


// UPDATE TOUR PACKAGE
const updateTour = async (req,res) =>{
    const {id}=req.params;
    if(!id){
        return badRequest(res,'Tour id is required');
    }
    try{
        const tour = await Tour.findById(id);
        if(!tour){
            return badRequest(res,'Tour not found');
        }
        await Tour.findByIdAndUpdate(id);
        success(res,'Tour updated succesfully');
    } catch(error){
        console.error(error.message);
        serverError(res);
    }
}

// Delete Tour Package
const deleteTour = async (req, res) => { 
    const {id}=req.params;
    if(!id){
        return badRequest(res,'Tour id is required');
    }
    try{
        const tour = await Tour.findById(id);
        if(!tour){
            return badRequest(res,'Tour not found');
        }
        await deleteImage(tour.TourImage).then((data) => {
            console.log("image deleted successfully",data);
        }).catch((error) => {
            console.log("error while deleting image",error.message);
        });
        await Tour.findByIdAndDelete(id);
        success(res,'Tour deleted');
    } catch(error){
        console.error(error.message);
        serverError(res);
    }
}


module.exports = { adminLogin, createAdmin , getAllUser , 
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
};