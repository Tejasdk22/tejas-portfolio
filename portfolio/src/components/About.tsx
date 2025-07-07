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
              Data Engineer & Analytics Specialist
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              With expertise in designing and implementing scalable data architectures, I specialize in building 
              robust ETL/ELT pipelines, optimizing data warehouses, and creating efficient data processing systems. 
              I'm passionate about turning complex data challenges into streamlined, automated solutions.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              My experience spans across cloud platforms, big data technologies, and real-time data processing. 
              I believe in creating data systems that are not only powerful but also maintainable and scalable, 
              enabling organizations to make data-driven decisions with confidence.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-slate-800/50 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-purple-400 mb-2">25+</div>
                <div className="text-gray-300">Data Pipelines Built</div>
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
                  { name: 'Python/SQL', level: 95 },
                  { name: 'Apache Spark', level: 85 },
                  { name: 'AWS/Azure', level: 80 },
                  { name: 'Apache Kafka', level: 75 },
                  { name: 'Docker/Kubernetes', level: 80 },
                  { name: 'Data Warehousing', level: 90 }
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