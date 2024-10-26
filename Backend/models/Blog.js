const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogPostSchema = new Schema({
    title: {
        type: String,
        required: true,
      
    },
    BlogImage: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        default: [],
    },
    category: {
        type: String,
        
    },
    published: {
        type: Boolean,
        default: false,
    },
    publishedAt: {
        type: Date,
        default: null,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
}, { timestamps:true });

// Middleware to update `updatedAt` field before saving
blogPostSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

const Blog = mongoose.model('Blog',blogPostSchema)
module.exports = Blog;
