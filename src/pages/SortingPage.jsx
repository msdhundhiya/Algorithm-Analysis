import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useSorting } from '../hooks/useSorting';
import { codeExamples } from '../data/codeExamples';
import DataInput from '../components/DataInput';
import Results from '../components/Results';
import { PlayIcon, ResetIcon } from '../components/Icons';

const SortingPage = () => { 
    
  const {algorithm} = useParams();
  if (!codeExamples[algorithm]){
    return <Navigate to="/" replace/>
  }
  const{
        currentData,
        sortingStats,
        manualInput,
        setManualInput,
        handleManualLoad,
        handleFileLoad,
        resetData,
        startSorting,
  } = useSorting(algorithm);

  const algoInfo =codeExamples[algorithm];

  return <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-800 tracking-tight">{algoInfo.name}</h2>
            <DataInput 
                manualInput={manualInput}
                setManualInput={setManualInput}
                handleManualLoad={handleManualLoad}
                handleFileLoad={handleFileLoad}
                currentData={currentData}
            />
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                 <h3 className="text-xl font-semibold mb-4 text-gray-700">2. Run Algorithm</h3>
                 <div className="flex space-x-4">
                    <button 
                        onClick={startSorting} 
                        className="flex-1 bg-green-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-600 transition flex items-center justify-center gap-2 text-lg shadow-sm disabled:bg-gray-400 disabled:cursor-not-allowed" 
                        disabled={currentData.length === 0}
                    >
                        <PlayIcon />
                        Sort!
                    </button>
                    <button 
                        onClick={resetData} 
                        className="flex-1 bg-red-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-red-600 transition flex items-center justify-center gap-2 text-lg shadow-sm"
                    >
                        <ResetIcon />
                        Reset
                    </button>
                 </div>
            </div>
            {sortingStats && <Results stats={sortingStats} data={currentData} />}
        </div>
};

export default SortingPage;