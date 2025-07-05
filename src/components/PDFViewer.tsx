"use client";
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PDFViewerProps {
  pdfPath: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfPath }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <>
      <Document
        file={pdfPath}
        onLoadSuccess={onDocumentLoadSuccess}
        className="flex justify-center"
        error="An error occurred while loading the PDF."
        noData="No PDF file specified."
        loading="Loading PDF..."
      >
        <Page 
          pageNumber={pageNumber} 
          renderTextLayer={false}
          className="overflow-hidden rounded-md"
        />
      </Document>
      
      {numPages && numPages > 1 && (
        <div className="flex justify-between items-center mt-4">
          <button 
            onClick={() => setPageNumber(prev => Math.max(prev - 1, 1))}
            disabled={pageNumber <= 1}
            className="bg-red-500 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <p className="text-white">
            Page {pageNumber} of {numPages}
          </p>
          <button 
            onClick={() => setPageNumber(prev => Math.min(prev + 1, numPages || 1))}
            disabled={pageNumber >= (numPages || 1)}
            className="bg-red-500 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default PDFViewer;
