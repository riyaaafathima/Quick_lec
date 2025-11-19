const{YoutubeTranscript}=require('youtube-transcript')

const fetchTranscript=async(videoId)=>{
try {
    const transcript=await YoutubeTranscript.fetchTranscript(videoId)

    const fullText=transcript.map(item=>item.text).join(' ');
    return fullText
} catch (error) {
    console.log('something went wrong at transcripting',error);
    return null

}
}

module.exports=fetchTranscript