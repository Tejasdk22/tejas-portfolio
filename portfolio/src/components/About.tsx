export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Passionate Developer & Problem Solver
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              With over 3 years of experience in web development, I specialize in creating 
              modern, scalable applications using cutting-edge technologies. I'm passionate 
              about writing clean, efficient code and delivering exceptional user experiences.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open source projects, or enjoying outdoor activities. I believe in continuous 
              learning and staying up-to-date with the latest industry trends.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-slate-800/50 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-slate-800/50 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-pink-400 mb-2">3+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8">
              <h4 className="text-xl font-semibold text-white mb-6">Core Technologies</h4>
              <div className="space-y-4">
                {[
                  { name: 'React/Next.js', level: 90 },
                  { name: 'TypeScript', level: 85 },
                  { name: 'Node.js', level: 80 },
                  { name: 'Python', level: 75 },
                  { name: 'Database Design', level: 85 },
                  { name: 'UI/UX Design', level: 70 }
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}