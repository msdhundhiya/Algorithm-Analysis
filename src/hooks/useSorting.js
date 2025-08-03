import { useCallback, useState, useEffect } from "react"

export const useSorting = () => {
  const [manualInput, setManualInput] = useState([98, 45, 7, 3, 4, 5, 4, 31]);
  const [originalData, setOriginalData] = useState([]);
  const [sortingStats, setSortingStats] = useState(null);
  const [currentData, setCurrentData] = useState([]);

  const loadDataArray = useCallback((numbers) => {
    if (numbers.length === 0) {
      alert("No valid no.s found.");
      return
    }
    setOriginalData([...numbers])
    setCurrentData(numbers);
    setSortingStats(null);
  }, []);

  const handleManualLoad = () => {
    const numbers = manualInput.split(/[,\s]+/).map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
    loadDataArray(numbers);
  };
  const handleFileLoad = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const content = event.target.result;
        const numbers = content.split(/[,\s\n]+/).map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
        loadDataArray(numbers);
        setManualInput(numbers.join(', ')); // Also update the textarea
      } catch (error) {
        alert('Error reading file.');
      }
    };
    reader.readAsText(file);
  };

  const resetData = () => {
    setCurrentData([...originalData]);
    setSortingStats(null);
  };
  const startSorting = () => {
    let arr = [...currentData];
    let stats = { comparisions: 0, swaps: 0, time: 0 };
    const startTime = performance.now();

    // --- Bubble Sort Logic ---
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        stats.comparisions++;
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          stats.swaps++;
        }
      }
    }
    const endTime = performance.now();
    stats.time = (endTime - startTime).toFixed(3);
    setCurrentData(arr);
    setSortingStats(stats);
  }
  return {
    currentData,
        sortingStats,
        manualInput,
        setManualInput,
        handleManualLoad,
        handleFileLoad,
        resetData,
        startSorting,
  }
}