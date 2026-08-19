import React from 'react';

// A lightweight, purely CSS/HTML representation of code architecture for project cards
// Much faster than rendering 3D inside cards
const CodeVisual = ({ projectType }) => {
  
  const snippets = {
    'ReszuPro': `// MERN AI Route
app.post('/api/resume', async (req, res) => {
  const { userData } = req.body;
  const prompt = buildPrompt(userData);
  
  const aiResponse = await openai.createCompletion({
    model: "gpt-4",
    prompt: prompt,
  });
  
  await ResumeModel.create({
    user: req.user.id,
    content: aiResponse.data
  });
  
  res.json({ success: true, aiResponse });
});`,
    'ThumbBunny': `// GSAP Animation Controller
export const animateHero = (element) => {
  gsap.fromTo(element, 
    { opacity: 0, y: 50, scale: 0.9 },
    { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      duration: 1.2, 
      ease: "power4.out",
      stagger: 0.1 
    }
  );
};`,
    'Shake Smith Co.': `// Technical SEO & Schema
const generateSchema = (product) => ({
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": product.name,
  "image": product.imageUrl,
  "description": product.desc,
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": product.price,
    "availability": "InStock"
  }
});`
  };

  const code = snippets[projectType] || snippets['ReszuPro'];

  return (
    <div className="w-full h-full bg-[#0d1117] rounded-lg border border-surfaceBorder font-mono text-[9px] p-4 text-slate-300 overflow-hidden relative shadow-inner">
      <div className="flex gap-1.5 mb-3">
        <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
        <div className="w-2 h-2 rounded-full bg-yellow-500/80"></div>
        <div className="w-2 h-2 rounded-full bg-green-500/80"></div>
      </div>
      <pre className="text-left whitespace-pre-wrap leading-relaxed opacity-80">
        <code className="text-green-400/90">{code}</code>
      </pre>
    </div>
  );
};

export default CodeVisual;