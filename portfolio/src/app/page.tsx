export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-8 font-sans">
      <header className="max-w-4xl mx-auto py-12">
        <h1 className="text-4xl font-bold mb-2">Tejas Deshkulkarni</h1>
        <p className="text-lg text-gray-600">
          Data Engineer | Cloud & ETL Specialist | Python • Snowflake • Azure
        </p>
        <div className="mt-4 flex gap-4 flex-wrap">
          <a
            href="/Tejas_Deshkulkarni_Resume_DE.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            View Resume
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="bg-gray-100 px-4 py-2 rounded hover:bg-gray-200"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tejas-deshkulkarni"
            target="_blank"
            className="bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200"
          >
            LinkedIn
          </a>
          <a
            href="mailto:tejasdeshus11@gmail.com"
            className="bg-green-100 text-green-800 px-4 py-2 rounded hover:bg-green-200"
          >
            Contact Me
          </a>
        </div>
      </header>

      {/* About Me Section */}
      <section className="max-w-4xl mx-auto mt-16">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          I'm a data engineer with strong experience in building scalable ETL pipelines, cloud data architectures, and analytical workflows.
          At Cognizant, I optimized data handling for over 5 million records, developed robust PySpark pipelines, and automated key business processes — achieving up to 60% performance gains.
          Currently pursuing my MS in Business Analytics and AI at UT Dallas, I specialize in turning complex data into actionable insights across domains like supply chain, healthcare, and finance.
          I'm passionate about cloud-native tools like Snowflake, Azure Data Factory, and Databricks.
        </p>
      </section>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto mt-16">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white shadow rounded">
            <h3 className="text-xl font-bold">Big Data ETL Pipeline</h3>
            <p className="text-gray-700 mt-2">
              Built an end-to-end ETL pipeline using Azure Data Factory and Snowflake to process and transform healthcare data.
            </p>
            <a
              href="https://github.com/yourusername/etl-pipeline"
              className="inline-block mt-3 text-blue-600 underline"
              target="_blank"
            >
              View Project
            </a>
          </div>
          <div className="p-6 bg-white shadow rounded">
            <h3 className="text-xl font-bold">Warehouse Cost Analyzer</h3>
            <p className="text-gray-700 mt-2">
              Analyzed Snowflake warehouse credits and query performance to optimize resource allocation and reduce costs.
            </p>
            <a
              href="https://github.com/yourusername/snowflake-finops"
              className="inline-block mt-3 text-blue-600 underline"
              target="_blank"
            >
              View Project
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Tejas Deshkulkarni. All rights reserved.
      </footer>
    </main>
  );
}
