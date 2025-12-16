const buildPrompt = ({ title, transcript, templateType }) => {
  return `
You are a professional note-taking assistant.

Convert the following transcript into clear, concise student notes.

Title: ${title}

Style:
- Theme: ${templateType.name}
- Preferred color: ${templateType.color}
- Font style: ${templateType.font}
- Layout style: ${templateType.layout}

Rules:
- Use short bullet points
- Highlight important concepts
- Keep it student-friendly
- Match the selected style

Transcript:
${transcript}
`;
};

module.exports = buildPrompt;
