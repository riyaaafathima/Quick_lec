

const Notes=require('../models/noteModel')

const generateNotes=(req,res)=>{
const{videoUrl,title,template}=req.body

const videoId=extractVideoId(videoUrl)
      

if (!videoUrl||!template?.name||!title) {

return res.status(400).json({message:'bruh give me this data'})
}


return res.status(200).json({message:'notes are hereee'})
}

const createNotes= async(req,res)=>{
   try {
     const {title,content,templateType}=req.body


    if (!title||!content) {
        return res.status(400).json({message:'bruh how can i create ur note without these two🫤'})
    }
    if(templateType&&!templateType.name){
       return res.status(400).json('it should has name')
    }
    const newNote= await Notes.create({
        title,
        content,
        templateType:templateType||null
    });


    return res.status(200).json({message:'notes are done bruhh😚',
        notes:newNote
    })

    
   } catch (error) {
    console.log('something went wrong ',error);
    
    return res.status(500).json('server error')
   }
}



module.exports= {generateNotes,createNotes}