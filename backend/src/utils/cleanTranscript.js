/**
 * Cleans and normalizes YouTube transcript text
 * @param {string} transcript - Raw transcript text from fetchTranscript
 * @returns {string} - Cleaned transcript text
 */
const cleanTranscript = (transcript) => {
    if (!transcript || typeof transcript !== 'string') {
        return '';
    }

    let cleaned = transcript;

    // 1. Remove extra whitespace (multiple spaces, tabs, newlines)
    // Replace multiple spaces with single space
    cleaned = cleaned.replace(/\s+/g, ' ');
    
    // 2. Remove common filler words and sounds (optional - can be customized)
    const fillerWords = /\b(um|uh|er|ah|like|you know|so|well)\b/gi;
    cleaned = cleaned.replace(fillerWords, '');
    
    // 3. Fix common transcription errors
    // Fix "don't" -> "don't" (if split incorrectly)
    cleaned = cleaned.replace(/\bdon t\b/gi, "don't");
    cleaned = cleaned.replace(/\bwon t\b/gi, "won't");
    cleaned = cleaned.replace(/\bcan t\b/gi, "can't");
    cleaned = cleaned.replace(/\bisn t\b/gi, "isn't");
    cleaned = cleaned.replace(/\baren t\b/gi, "aren't");
    cleaned = cleaned.replace(/\bwasn t\b/gi, "wasn't");
    cleaned = cleaned.replace(/\bweren t\b/gi, "weren't");
    cleaned = cleaned.replace(/\bdoesn t\b/gi, "doesn't");
    cleaned = cleaned.replace(/\bdidn t\b/gi, "didn't");
    cleaned = cleaned.replace(/\bhaven t\b/gi, "haven't");
    cleaned = cleaned.replace(/\bhasn t\b/gi, "hasn't");
    cleaned = cleaned.replace(/\bhadn t\b/gi, "hadn't");
    cleaned = cleaned.replace(/\bit s\b/gi, "it's");
    cleaned = cleaned.replace(/\bthat s\b/gi, "that's");
    cleaned = cleaned.replace(/\bwhat s\b/gi, "what's");
    cleaned = cleaned.replace(/\bwho s\b/gi, "who's");
    cleaned = cleaned.replace(/\bwhere s\b/gi, "where's");
    cleaned = cleaned.replace(/\bhere s\b/gi, "here's");
    cleaned = cleaned.replace(/\bthere s\b/gi, "there's");
    cleaned = cleaned.replace(/\bI m\b/g, "I'm");
    cleaned = cleaned.replace(/\byou re\b/gi, "you're");
    cleaned = cleaned.replace(/\bwe re\b/gi, "we're");
    cleaned = cleaned.replace(/\bthey re\b/gi, "they're");
    cleaned = cleaned.replace(/\bI ve\b/g, "I've");
    cleaned = cleaned.replace(/\byou ve\b/gi, "you've");
    cleaned = cleaned.replace(/\bwe ve\b/gi, "we've");
    cleaned = cleaned.replace(/\bthey ve\b/gi, "they've");
    cleaned = cleaned.replace(/\bI ll\b/g, "I'll");
    cleaned = cleaned.replace(/\byou ll\b/gi, "you'll");
    cleaned = cleaned.replace(/\bhe ll\b/gi, "he'll");
    cleaned = cleaned.replace(/\bshe ll\b/gi, "she'll");
    cleaned = cleaned.replace(/\bwe ll\b/gi, "we'll");
    cleaned = cleaned.replace(/\bthey ll\b/gi, "they'll");
    cleaned = cleaned.replace(/\bI d\b/g, "I'd");
    cleaned = cleaned.replace(/\byou d\b/gi, "you'd");
    cleaned = cleaned.replace(/\bhe d\b/gi, "he'd");
    cleaned = cleaned.replace(/\bshe d\b/gi, "she'd");
    cleaned = cleaned.replace(/\bwe d\b/gi, "we'd");
    cleaned = cleaned.replace(/\bthey d\b/gi, "they'd");

    // 4. Remove timestamps if present (format: [00:00:00] or (00:00:00))
    cleaned = cleaned.replace(/\[\d{1,2}:\d{2}(?::\d{2})?\]/g, '');
    cleaned = cleaned.replace(/\(\d{1,2}:\d{2}(?::\d{2})?\)/g, '');

    // 5. Normalize punctuation spacing
    // Add space after periods, commas, etc. if missing
    cleaned = cleaned.replace(/\.([A-Za-z])/g, '. $1');
    cleaned = cleaned.replace(/,([A-Za-z])/g, ', $1');
    cleaned = cleaned.replace(/!([A-Za-z])/g, '! $1');
    cleaned = cleaned.replace(/\?([A-Za-z])/g, '? $1');
    cleaned = cleaned.replace(/;([A-Za-z])/g, '; $1');
    cleaned = cleaned.replace(/:([A-Za-z])/g, ': $1');

    // 6. Remove multiple consecutive punctuation marks
    cleaned = cleaned.replace(/[.!?]{2,}/g, (match) => match[0]);

    // 7. Trim whitespace from start and end
    cleaned = cleaned.trim();

    // 8. Remove any remaining double spaces (from filler word removal)
    cleaned = cleaned.replace(/\s+/g, ' ');

    // 9. Capitalize first letter of sentences
    cleaned = cleaned.replace(/(^|\.\s+)([a-z])/g, (match, p1, p2) => {
        return p1 + p2.toUpperCase();
    });

    return cleaned;
};

module.exports = cleanTranscript;

