const fetchTranscript = require("../utils/fetchTranscript");
const extractVideoId = require("../utils/extractVideoid");
const buildPrompt = require("../utils/buildPrompt");

const Notes = require("../models/noteModel");
const generateNotesFromAi = require("../utils/geminiAiClient");

const generateNotes = (req, res) => {
  const { videoUrl, title, template } = req.body;

  const videoId = extractVideoId(videoUrl);

  console.log("VIDEO ID:", videoId);
  if (!videoUrl || !template?.name || !title) {
    return res.status(400).json({ message: "bruh give me this data" });
  }

  return res.status(200).json({ message: "notes are hereee" });
};

const createNotes = async (req, res) => {
  try {
    const { title, content, videoUrl, manualTranscript, templateType } =
      req.body;

    let transcript;

    if (manualTranscript) {
      transcript = manualTranscript;
    } else {
      // Case A: extract automatically
      const videoId = extractVideoId(videoUrl);

      if (!videoId) {
        return res.status(400).json({ message: "Invalid YouTube URL bruh 😭" });
      }

      transcript = await fetchTranscript(videoId);
    }

    if (!transcript) {
      return res.status(400).json({ message: "Transcript unavailable 😩" });
    }

    // TODO: send transcript → AI → create summary/notes
    // (we'll implement this next)
    console.log("FINAL TRANSCRIPT:", transcript);

    const prompt = buildPrompt({
      transcript,
      title,
      templateType,
    });

    const aiNotes = await generateNotesFromAi(prompt);
    console.log("Ai generated NOTES====", aiNotes);

    const newNote = await Notes.create({
      title,
      templateType,
      content: aiNotes,
      userId: null,
      videoUrl,
    });

    return res.status(201).json({
      message: "Notes created successfully 🚀",
      notes: newNote,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server down bruhh 😭" });
  }
};

module.exports = { generateNotes, createNotes };
