export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6 sm:p-12 font-sans">
      {/* Hero Section */}
      <header className="max-w-3xl mx-auto text-center py-16">
        <h1 className="text-5xl font-extrabold mb-4">Tejas Deshkulkarni</h1>
        <p className="text-xl text-gray-600 mb-6">
          Data Engineer | Cloud & ETL Specialist
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="/resume.pdf" target="_blank" className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-semibold transition-colors">Resume</a>
          <a href="https://github.com/yourusername" target="_blank" className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-md font-medium transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/tejas-deshkulkarni" target="_blank" className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-md font-medium transition-colors">LinkedIn</a>
          <a href="mailto:tejasdeshus11@gmail.com" className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-md font-medium transition-colors">Contact Me</a>
        </div>
      </header>

      {/* About Section */}
      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="leading-relaxed text-gray-700">
          I'm a data engineer experienced in building scalable ETL pipelines, cloud-native data systems, and analytics workflows. At Cognizant, I handled over 5M+ records, optimized PySpark and Azure Data Factory workloads for 60%+ performance gains, and developed end-to-end solutions. Currently pursuing an MS in Business Analytics & AI at UT Dallas, I specialize in tools like Python, Snowflake, Azure, and Databricks — turning complex data into clear, actionable insights.
        </p>
      </section>

      {/* Projects Section */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Card 1 */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-2xl font-bold">Big Data ETL Pipeline</h3>
            <p className="mt-2 text-gray-700">Built an end-to-end ETL pipeline with Azure Data Factory & Snowflake to process and transform healthcare data.</p>
            <a href="https://github.com/yourusername/etl-pipeline" target="_blank" className="text-blue-600 underline mt-3 block">View on GitHub</a>
          </div>
          {/* Project Card 2 */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-2xl font-bold">Warehouse Cost Analyzer</h3>
            <p className="mt-2 text-gray-700">Analyzed Snowflake warehouse credits and query performance to optimize resource allocation and reduce costs.</p>
            <a href="https://github.com/yourusername/snowflake-finops" target="_blank" className="text-blue-600 underline mt-3 block">View on GitHub</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Tejas Deshkulkarni. All rights reserved.
      </footer>
    </main>
  );
}
