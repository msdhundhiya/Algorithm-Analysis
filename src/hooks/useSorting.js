import { useCallback, useState } from "react"

export const useSorting = ()=>{
  const [currentData,setCurrentData] = useState([98,45,7,3,4,5,4,31]);

  const [sortingStats,setSortingStats] = useState(null);

  const loadDataArray = useCallback((numbers)=>{
    if (numbers.length ===0 ){
        alert("No valid no.s found.");
        return
    }
    setCurrentData(numbers);
    setSortingStats(null);
  },[]);

  const startSorting = ()=>{
    let arr = [...currentData];
    let stats = {comparisions:0,swaps:0,time:0};
    const startTime =performance.now();

    // --- Bubble Sort Logic ---
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                stats.comparisons++;
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    stats.swaps++;
                }
            }
        }
        const endTime = performance.now();
        stats.time = (endTime-startTime).toFixed(3);
        setCurrentData(arr);
        setSortingStats(stats);
  }
  return {
    currentData,
    sortingStats,
    loadDataArray,
    startSorting
  }
}