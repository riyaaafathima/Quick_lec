const fetchTranscript=require('./fetchTranscript')

const extractVideoId=(url)=>{
    try {
        const match=url.match(/v=([^&]+)/);
        return match?match[1]:null
    } catch (error) {
        return null
    }
}