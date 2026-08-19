import React from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    color: 'bg-blue-500',
    skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'GSAP']
  },
  {
    title: 'Backend & Database',
    color: 'bg-green-500',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'MongoDB Atlas', 'Mongoose', 'REST APIs']
  },
  {
    title: 'AI & Architecture',
    color: 'bg-purple-500',
    skills: ['OpenAI API', 'Gemini API', 'Prompt Engineering', 'RAG Architecture']
  },
  {
    title: 'Tools & Deployment',
    color: 'bg-orange-500',
    skills: ['Git & GitHub', 'Netlify', 'Render', 'Vercel', 'Postman', 'Technical SEO']
  },
  {
    title: 'Languages',
    color: 'bg-pink-500',
    skills: ['JavaScript', 'Java', 'C/C++']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-surface/30 border-y border-surfaceBorder relative reveal-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Technologies <span className="text-slate-400 font-light">I Work With</span></h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="glass-panel p-6 hover:border-white/20 transition-all duration-300">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                <span className={`w-2 h-2 rounded-full ${category.color} shadow-[0_0_10px_currentColor]`} />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 text-sm bg-navy border border-white/5 rounded-md text-slate-300 hover:text-white hover:border-white/20 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;