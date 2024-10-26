const {checkMandatoryFields} = require("../lib/validations")
const { success, badRequest, serverError } = require("../lib/response");
const {generateUserToken} = require("../lib/generateToken");
const {compareHash ,generateHash} = require("../lib/salting");
const User = require("../models/User");
const contactForm = require("../models/ContactForm");

// user registarion and login

const userRegister = async (req, res) => {
    const mandatoryFields = ["name",  "email", "password"];
    console.log(req.body);
    if (checkMandatoryFields(res, req.body, mandatoryFields)) {
        const { name,  email, password } = req.body;
        try {
            // check if user is already registered with email or phone
            const userExists = await User.findOne({ $or: [{ email }] });
            if (userExists) {
                badRequest(res, "User already exists");
            } else {
                const hashedPassword = await generateHash(password);
                const user = new User({ name,  email, password: hashedPassword });
                await user.save();
                success(res, "User registered successfully");

            }
        } catch (error) {
            console.error("server error",error.message);
            serverError(res);
        }
    }
}

const userLogin = async (req, res) => {
    const mandatoryFields = ["username", "password"];
    if (checkMandatoryFields(res, req.body, mandatoryFields)) {
        const { username, password } = req.body;
        try {
            // check if user exists with phone or email
            const user = await User.findOne({ $or: [{ phone: username }, { email: username }] });
            if (user) {
                const passwordMatch = await compareHash(password, user.password);
                console.log(" pass match",passwordMatch);
                if (passwordMatch) {
                    const token = generateUserToken(user.email);
                    success(res, "User logged in successfully", { token });
                } else {
                    badRequest(res, "Invalid email or password");
                }
            } else {
                badRequest(res, "Invalid email or password");
            }
        } catch (error) {
            console.error(error.message);
            serverError(res);
        }
    }
}


const userProfile = async (req, res) => {
    const email = req.email;
    try {
        const user = await User.findOne( { email : email} ).select("-password");
        success(res, "User profile fetched successfully", user);
    } catch (error) {
        console.error(error.message);
        serverError(res);
    }
}



// Create a new contact form entry
const createContact = async (req, res) => {
     const mandatoryFields=['name','phone','email','message'];
     if(checkMandatoryFields(res,req.body,mandatoryFields)){
        const { name, phone, email, message } = req.body;
        try{
            let contact = new contactForm({ name, phone, email, message });
          
            contact = new contactForm({
                name,
                phone,
                email,
                message,            
            });

            await contact.save();
            success(res, 'contactUs created');


        }
        catch(error){
        console.error(error.message);
        serverError(res);
            
     }
    }
};

// Update an existing contact form entry
const updateContact = async (req, res) => {
    const {id} = req.params;
    if(!id){
        return badRequest(res,'Contact id is required');
    }
    try{
        const contact = await contactForm.findById(id);
        if(!contact){
            return badRequest(res,' contact not found');
        }
        await contactForm.findByIdAndUpdate(id);
        success(res,'contact updated succesfully');
    } catch(error){
        console.error(error.message);
        serverError(res);
    }
};




module.exports = {  userRegister, userLogin, userProfile ,createContact,updateContact};