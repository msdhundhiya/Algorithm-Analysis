import React from 'react';
import { useSorting } from '../hooks/useSorting';

const SortingPage = () => {
    
  const{
    currentData,
    sortingStats,
    loadDataArray,
    startSorting
  } = useSorting();

  return <>
  <h2>This is the Sorting Page</h2>;
  <div>
    <strong>Data: </strong>
    <span>[{currentData.join(', ')}]</span>
  </div>
  <div>
    <button onClick={startSorting}> Sort Now! </button>
    <hr />
    {sortingStats && (
      <div>
        <h3>Rsults</h3>
        <p> Time: {sortingStats.time}</p>
        <p> Comparisons: {sortingStats.comparisons}</p>
        <p> Swaps: {sortingStats.swaps}</p>
      </div>
    )}
  </div>
  </>
};

export default SortingPage;