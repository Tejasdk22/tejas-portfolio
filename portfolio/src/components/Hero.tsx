'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const fullText = "Data Engineer"
  
  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)
    
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Tejas Deshkulkarni
            </span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 mb-8 min-h-[3rem]">
            <span className="border-r-2 border-purple-400 animate-pulse">
              {displayText}
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I design and build robust data pipelines, optimize data infrastructure, and transform raw data into actionable insights. 
            Passionate about scalable data solutions, ETL processes, and enabling data-driven decision making.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:from-purple-700 hover:to-pink-700 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              View My Work
            </button>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-purple-400 hover:text-white hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
        
        {/* Floating Animation Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-75"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </section>
  )
}