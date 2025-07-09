// src/app/page.tsx
'use client'

import { useEffect, useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const fullText = "Hi, I'm Tejas Deshkulkarni and I am a Data Engineer.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index++));
      if (index > fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-indigo-100 font-sans">
      {/* Navigation Bar */}
      <nav className="w-full flex justify-between items-center px-8 py-4 bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="text-xl font-bold text-gray-900">Tejas Deshkulkarni</div>
        <div className="flex gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            className="text-sm text-gray-700 hover:text-blue-600 transition"
          >
            Resume
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="text-sm text-gray-700 hover:text-blue-600 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/tejas-deshkulkarni"
            target="_blank"
            className="text-sm text-gray-700 hover:text-blue-600 transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:tejasdeshus11@gmail.com"
            className="text-sm text-gray-700 hover:text-blue-600 transition"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center h-screen px-4 bg-gradient-to-tr from-indigo-500 to-blue-400 text-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-blue-500 opacity-30 blur-xl z-0"></div>
        <div className="z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold animate-fade-in mb-4 drop-shadow-md">
            {text}
          </h1>
          <p className="text-lg md:text-xl animate-fade-in-slow mb-6">Scroll down to learn more ↓</p>
        </div>
      </section>

      {/* About Me Section */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-gray-900">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
          <img src="https://media.licdn.com/dms/image/D4D03AQHc5Z0RrEXSDA/profile-displayphoto-shrink_400_400/0/1713655390715?e=1721865600&v=beta&t=FXOCQkGMtZAC2zX-zYM8nYfC9Ln9FMOEFe9BSfxyGP0" alt="Tejas Deshkulkarni" className="w-32 h-32 rounded-full object-cover shadow-lg" />
        </div>
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-blue-300 inline-block">About Me</h2>
        <p className="leading-relaxed text-lg">
          I'm a data engineer with experience in building cloud-native ETL pipelines, automating data workflows,
          and optimizing analytical performance. With a background at Cognizant and an MS in Business Analytics & AI
          from UT Dallas, I specialize in Python, Snowflake, Azure, and PySpark. I'm passionate about transforming
          raw data into structured insights that drive business decisions.
        </p>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto px-4 mb-20 text-gray-900">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold border-b-2 border-blue-300 inline-block">Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition duration-300">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-blue-700">Big Data ETL Pipeline</h3>
              <p className="mb-4 text-gray-700">
                Built a scalable ETL pipeline using Azure Data Factory and Snowflake to process healthcare data.
              </p>
              <a
                href="https://github.com/yourusername/etl-pipeline"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                View Project →
              </a>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition duration-300">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-blue-700">Warehouse Cost Analyzer</h3>
              <p className="mb-4 text-gray-700">
                Analyzed Snowflake warehouse performance and credit usage to optimize cost efficiency.
              </p>
              <a
                href="https://github.com/yourusername/snowflake-finops"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-600 py-8 border-t">
        © {new Date().getFullYear()} Tejas Deshkulkarni. All rights reserved.
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1.5s ease-out forwards;
        }
        .animate-fade-in-slow {
          animation: fadeIn 2.5s ease-out forwards;
        }
      `}</style>
    </main>
  );
}
