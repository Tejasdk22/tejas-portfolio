'use client'

import { useState } from 'react'

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const projects = [
    {
      id: 1,
      title: 'Real-time Analytics Pipeline',
      description: 'Built a scalable real-time data pipeline using Apache Kafka and Spark Streaming to process millions of events per hour, providing instant analytics for business decision making.',
      image: '/api/placeholder/400/250',
      technologies: ['Apache Kafka', 'Spark Streaming', 'AWS Kinesis', 'Redis'],
      category: 'Real-time Processing',
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'Data Lake Architecture',
      description: 'Designed and implemented a data lake on AWS S3 with automated ETL pipelines using Apache Airflow, supporting both batch and streaming data ingestion from multiple sources.',
      image: '/api/placeholder/400/250',
      technologies: ['AWS S3', 'Apache Airflow', 'Spark', 'Parquet'],
      category: 'Data Architecture',
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Customer Analytics Platform',
      description: 'Developed a comprehensive analytics platform processing customer behavior data, featuring automated data quality checks and ML-ready feature engineering pipelines.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'dbt', 'Snowflake', 'Tableau'],
      category: 'Analytics',
      github: '#',
      demo: '#'
    },
    {
      id: 4,
      title: 'ETL Data Warehouse',
      description: 'Built a robust ETL system migrating legacy data to a modern cloud data warehouse, implementing data validation, monitoring, and automated failure recovery mechanisms.',
      image: '/api/placeholder/400/250',
      technologies: ['PostgreSQL', 'Apache Airflow', 'BigQuery', 'Python'],
      category: 'ETL/ELT',
      github: '#',
      demo: '#'
    },
    {
      id: 5,
      title: 'IoT Data Processing System',
      description: 'Created a scalable IoT data processing system handling sensor data from thousands of devices, with real-time anomaly detection and automated alerting capabilities.',
      image: '/api/placeholder/400/250',
      technologies: ['Apache Kafka', 'Databricks', 'Azure IoT', 'Machine Learning'],
      category: 'Real-time Processing',
      github: '#',
      demo: '#'
    },
    {
      id: 6,
      title: 'Financial Data Pipeline',
      description: 'Designed high-frequency financial data processing pipeline with strict SLA requirements, ensuring data accuracy and compliance for regulatory reporting.',
      image: '/api/placeholder/400/250',
      technologies: ['Apache Flink', 'TimescaleDB', 'Docker', 'Kubernetes'],
      category: 'ETL/ELT',
      github: '#',
      demo: '#'
    }
  ]

  const categories = ['All', 'Real-time Processing', 'ETL/ELT', 'Data Architecture', 'Analytics']

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of my recent data engineering projects that showcase my expertise in building scalable data solutions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-pink-900/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-purple-600/30 text-purple-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}