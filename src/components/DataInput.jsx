import React from 'react';
import { UploadIcon } from './Icons';

const DataInput = ({ manualInput, setManualInput, handleManualLoad, handleFileLoad, currentData }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">1. Load Data</h3>
            <div className="grid md:grid-cols-2 gap-6">
                
                {/* Manual Data Input Section */}
                <div>
                    <label htmlFor="manual-input" className="block text-sm font-medium text-gray-600 mb-1">
                        Enter comma-separated numbers
                    </label>
                    <textarea
                        id="manual-input"
                        value={manualInput}
                        onChange={(e) => setManualInput(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        rows="3"
                        placeholder="e.g., 8, 3, 5, 1, 9"
                    />
                    <button 
                        onClick={handleManualLoad} 
                        className="mt-2 w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition flex items-center justify-center gap-2"
                    >
                        Load Manual Data
                    </button>
                </div>

                {/* File Upload Section */}
                <div className="flex flex-col justify-center">
                     <label 
                        htmlFor="file-upload" 
                        className="w-full bg-gray-100 text-gray-700 font-semibold py-2 px-4 rounded-md hover:bg-gray-200 transition flex items-center justify-center gap-2 cursor-pointer border border-dashed border-gray-400"
                    >
                        <UploadIcon />
                        Load From File (.txt, .csv, .json)
                    </label>
                    <input 
                        id="file-upload" 
                        type="file" 
                        onChange={handleFileLoad} 
                        className="hidden" 
                        accept=".txt,.csv,.json" 
                    />
                    <p className="text-sm text-gray-500 mt-4">
                        <strong>Current Data:</strong>
                        <span className="font-mono bg-gray-100 p-1 rounded ml-1">
                            [{currentData.length > 20 ? currentData.slice(0, 20).join(', ') + '...' : currentData.join(', ')}]
                        </span>
                        <span className="ml-2">({currentData.length} elements)</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DataInput;