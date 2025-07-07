export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90, icon: '⚛️' },
        { name: 'Next.js', level: 85, icon: '▲' },
        { name: 'TypeScript', level: 85, icon: '🔷' },
        { name: 'Tailwind CSS', level: 90, icon: '🎨' },
        { name: 'JavaScript', level: 95, icon: '🟨' },
        { name: 'HTML/CSS', level: 95, icon: '🌐' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 80, icon: '🟢' },
        { name: 'Python', level: 75, icon: '🐍' },
        { name: 'Express.js', level: 80, icon: '🚀' },
        { name: 'Django', level: 70, icon: '🎸' },
        { name: 'REST APIs', level: 85, icon: '🔌' },
        { name: 'GraphQL', level: 65, icon: '🔺' }
      ]
    },
    {
      title: 'Database & DevOps',
      skills: [
        { name: 'PostgreSQL', level: 80, icon: '🐘' },
        { name: 'MongoDB', level: 75, icon: '🍃' },
        { name: 'Redis', level: 70, icon: '🔴' },
        { name: 'Docker', level: 75, icon: '🐳' },
        { name: 'AWS', level: 65, icon: '☁️' },
        { name: 'Git', level: 90, icon: '📦' }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Figma', level: 75, icon: '🎨' },
        { name: 'VS Code', level: 95, icon: '💻' },
        { name: 'Postman', level: 85, icon: '📮' },
        { name: 'Jest', level: 70, icon: '🃏' },
        { name: 'Webpack', level: 65, icon: '📦' },
        { name: 'Linux', level: 75, icon: '🐧' }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Skills & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                      </div>
                      <span className="text-gray-400 text-xs">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full transition-all duration-1000 ease-out group-hover:from-purple-300 group-hover:to-pink-300"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 0.1 + 0.5}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            Other Competencies
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Responsive Design', 'SEO Optimization', 'Performance Optimization', 
              'Accessibility', 'Agile Methodology', 'Code Review', 'Technical Writing',
              'UI/UX Design', 'Problem Solving', 'Team Collaboration'
            ].map((competency) => (
              <span
                key={competency}
                className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-400/30 text-purple-300 rounded-full text-sm font-medium hover:from-purple-600/30 hover:to-pink-600/30 transition-all duration-300"
              >
                {competency}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}