import React from 'react';

const Results = ({ stats, data }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">3. Results</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-500 font-semibold">Time</p>
                    <p className="text-2xl font-bold text-blue-800">{stats.time} ms</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-sm text-yellow-500 font-semibold">Comparisons</p>
                    <p className="text-2xl font-bold text-yellow-800">{stats.comparisons.toLocaleString()}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-sm text-purple-500 font-semibold">Swaps / Writes</p>
                    <p className="text-2xl font-bold text-purple-800">{stats.swaps.toLocaleString()}</p>
                </div>
            </div>
            
            <div>
                <p className="font-semibold text-gray-600">Sorted Array:</p>
                <p className="font-mono text-sm bg-gray-100 p-3 rounded-md mt-1 break-all">
                    {`[${data.join(', ')}]`}
                </p>
            </div>
        </div>
    );
};

export default Results;