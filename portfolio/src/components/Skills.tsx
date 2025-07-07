export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming & Query Languages',
      skills: [
        { name: 'Python', level: 95, icon: '🐍' },
        { name: 'SQL', level: 95, icon: '🔍' },
        { name: 'Scala', level: 75, icon: '�' },
        { name: 'R', level: 70, icon: '📊' },
        { name: 'Shell Scripting', level: 85, icon: '�' },
        { name: 'Java', level: 70, icon: '☕' }
      ]
    },
    {
      title: 'Big Data & Processing',
      skills: [
        { name: 'Apache Spark', level: 90, icon: '⚡' },
        { name: 'Apache Kafka', level: 80, icon: '�' },
        { name: 'Apache Airflow', level: 85, icon: '🌊' },
        { name: 'Hadoop', level: 75, icon: '🐘' },
        { name: 'Databricks', level: 80, icon: '🧱' },
        { name: 'Apache Beam', level: 70, icon: '�' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      skills: [
        { name: 'AWS', level: 85, icon: '☁️' },
        { name: 'Azure', level: 80, icon: '�' },
        { name: 'GCP', level: 75, icon: '🌟' },
        { name: 'Docker', level: 85, icon: '🐳' },
        { name: 'Kubernetes', level: 75, icon: '⚙️' },
        { name: 'Terraform', level: 70, icon: '🏗️' }
      ]
    },
    {
      title: 'Databases & Storage',
      skills: [
        { name: 'PostgreSQL', level: 90, icon: '🐘' },
        { name: 'MongoDB', level: 80, icon: '🍃' },
        { name: 'Redis', level: 75, icon: '�' },
        { name: 'Snowflake', level: 85, icon: '❄️' },
        { name: 'BigQuery', level: 80, icon: '�' },
        { name: 'Cassandra', level: 70, icon: '�' }
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
            Here are the technologies and tools I use to build robust data solutions and analytics platforms.
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
            Data Engineering Competencies
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'ETL/ELT Pipeline Design', 'Data Warehousing', 'Real-time Data Processing', 
              'Data Modeling', 'Performance Optimization', 'Data Quality & Governance', 'Stream Processing',
              'Data Lake Architecture', 'API Development', 'Monitoring & Alerting', 'Data Security', 'MLOps'
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