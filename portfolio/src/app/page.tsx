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
    <>
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
      
      <main className="min-h-screen bg-gradient-to-br from-slate-800 via-gray-900 to-blue-900 font-sans text-white">
        {/* Navigation Bar */}
        <nav className="w-full flex justify-between items-center px-8 py-4 bg-black/50 backdrop-blur-sm">
          <div className="text-xl font-bold text-white">Tejas Deshkulkarni</div>
          <div className="flex gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              className="text-sm text-white hover:text-blue-300 transition"
            >
              Resume
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="text-sm text-white hover:text-blue-300 transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/tejas-deshkulkarni"
              target="_blank"
              className="text-sm text-white hover:text-blue-300 transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:tejasdeshus11@gmail.com"
              className="text-sm text-white hover:text-blue-300 transition"
            >
              Contact
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center min-h-[80vh] px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold animate-fade-in">
            {text}<span className="animate-pulse">|</span>
          </h1>
          <p className="mt-8 text-lg animate-fade-in-slow">Scroll down to learn more ↓</p>
        </section>

        {/* About Me Section */}
        <section className="max-w-3xl mx-auto px-4 mb-20 bg-white/10 backdrop-blur-sm rounded-lg p-8 text-white">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="leading-relaxed">
            I'm a data engineer with experience in building cloud-native ETL pipelines, automating data workflows,
            and optimizing analytical performance. With a background at Cognizant and an MS in Business Analytics & AI
            from UT Dallas, I specialize in Python, Snowflake, Azure, and PySpark. I'm passionate about transforming
            raw data into structured insights that drive business decisions.
          </p>
        </section>

        {/* Projects Section */}
        <section className="max-w-5xl mx-auto px-4 mb-20">
          <h2 className="text-2xl font-semibold mb-6 text-center text-white">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border border-white/20 rounded hover:shadow-lg transition bg-white/10 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2 text-white">Big Data ETL Pipeline</h3>
              <p className="mb-2 text-gray-200">
                Built a scalable ETL pipeline using Azure Data Factory and Snowflake to process healthcare data.
              </p>
              <a
                href="https://github.com/yourusername/etl-pipeline"
                target="_blank"
                className="text-blue-300 hover:underline"
              >
                View Project
              </a>
            </div>
            <div className="p-6 border border-white/20 rounded hover:shadow-lg transition bg-white/10 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2 text-white">Warehouse Cost Analyzer</h3>
              <p className="mb-2 text-gray-200">
                Analyzed Snowflake warehouse performance and credit usage to optimize cost efficiency.
              </p>
              <a
                href="https://github.com/yourusername/snowflake-finops"
                target="_blank"
                className="text-blue-300 hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-white py-8 bg-black/60 backdrop-blur">
          © {new Date().getFullYear()} Tejas Deshkulkarni. All rights reserved.
        </footer>
      </main>
    </>
  );
}
