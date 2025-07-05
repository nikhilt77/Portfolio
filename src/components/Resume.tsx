"use client";
import React from 'react';
import dynamic from 'next/dynamic';

const PDFViewer = dynamic(
  () => import('./PDFViewer'),
  { ssr: false }
);

const Resume = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col p-8 mb-20">
      <div className="container mx-auto pt-20">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-red-500">My Resume</h2>
          <p className="text-gray-400 text-lg mt-4">
            Download my resume or view it online below.
          </p>
          <a 
            href="/NIKHIL TOMY-Resume.pdf" 
            download="NIKHIL TOMY-Resume.pdf"
            className="inline-block bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors mt-4"
          >
            Download PDF
          </a>
        </div>

        <div className="flex justify-center mt-10">
          <div className="resume-container w-full max-w-4xl bg-gray-900 p-6 rounded-lg shadow-xl">
            <iframe 
              src="/NIKHIL TOMY-Resume.pdf" 
              className="w-full h-[600px] rounded-md border-none"
              title="NIKHIL TOMY-Resume.pdf"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
