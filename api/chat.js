module.exports = async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const message = (body.message || '').trim().toLowerCase();

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    let reply = "I'm Vedanshi's AI portfolio assistant! You can ask me about Vedanshi's background, projects, skills, education, or contact details.";

    if (/^(hi|hello|hey|greetings|hola)/i.test(message)) {
      reply = "Hello! 👋 I'm Vedanshi Agrawal's AI Assistant. How can I assist you with exploring her portfolio today?";
    } else if (message.includes('who') || message.includes('about') || message.includes('name')) {
      reply = "Vedanshi Agrawal is a passionate 2nd-year B.Tech Computer Science and Engineering student at JECRC University, Jaipur. She focuses on web development, problem solving, and software engineering.";
    } else if (message.includes('skill') || message.includes('tech') || message.includes('language') || message.includes('stack')) {
      reply = "Vedanshi's technical skills include Python, HTML5, CSS3, JavaScript (ES6+), C++, C, Git, GitHub, Cursor AI, and responsive web design.";
    } else if (message.includes('project') || message.includes('work') || message.includes('built')) {
      reply = "Vedanshi has built several projects: a Python Programs Collection, Messy Python Code Improvement using AI, Bug Fixing with Cursor AI, an Interactive Quiz Application, and a Book Reading List Application.";
    } else if (message.includes('college') || message.includes('university') || message.includes('study') || message.includes('degree') || message.includes('education') || message.includes('cgpa')) {
      reply = "Vedanshi is pursuing B.Tech in CSE at JECRC University, Jaipur (currently in second year, expected 2029) with a strong academic CGPA of 8.0.";
    } else if (message.includes('contact') || message.includes('email') || message.includes('mail') || message.includes('hire') || message.includes('reach')) {
      reply = "You can reach Vedanshi directly via email at vedanshiagrawal85@gmail.com, or check out her code on GitHub at https://github.com/vedanshiagrawal85-droid.";
    } else if (message.includes('github') || message.includes('repo')) {
      reply = "Vedanshi's GitHub profile and portfolio repository can be found at: https://github.com/vedanshiagrawal85-droid";
    }

    return res.status(200).json({ reply });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to process message' });
  }
};
