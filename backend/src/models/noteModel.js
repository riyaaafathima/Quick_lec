const mongoose = require("mongoose");
const templateSchema=require('./templateModel')

const notesSchema = new mongoose.Schema({
  title: {
     type: String,
      required: true 
    },
  content: {
     type: String, 
     required: true 
    },

  templateType: templateSchema,

  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User"
 },

  createdAt: {
     type: Date,
      default: Date.now
     },
  updatedAt: {
     type: Date, 
     default: Date.now
     },
});


module.exports = mongoose.model("Notes", notesSchema);
