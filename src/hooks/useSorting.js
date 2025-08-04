import { useCallback, useState, useEffect } from "react"

export const useSorting = (algorithm) => {
  const [manualInput, setManualInput] = useState('98, 45, 7, 3, 4, 5, 4, 31');
  const [originalData, setOriginalData] = useState([]);
  const [sortingStats, setSortingStats] = useState(null);
  const [currentData, setCurrentData] = useState([]);

  useEffect(()=>{
    const numbers = manualInput.split(/[,\s]+/).map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
    loadDataArray(numbers);
  },[algorithm]);
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
    let stats = { comparisons: 0, swaps: 0, time: 0 };
    const startTime = performance.now();

    // --- Bubble Sort Logic ---
    switch (algorithm) {
      case 'bubble':
        for (let i = 0; i < arr.length - 1; i++) {
          for (let j = 0; j < arr.length - i - 1; j++) {
            stats.comparisons++;
            if (arr[j] > arr[j + 1]) {
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
              stats.swaps++;
            }
          }
        }
        break;
      case 'selection':
        for (let i = 0; i < arr.length - 1; i++) {
          let minIdx = i;
          for (let j = i + 1; j < arr.length; j++) {
            stats.comparisons++;
            if (arr[j] < arr[minIdx]) {
              minIdx = j;
            }
          }
          if (minIdx !== i) {
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
            stats.swaps++;
          }
        }
        break;
      case 'insertion':
        for (let i = 1; i < arr.length; i++) {
          let key = arr[i];
          let j = i - 1;
          while (j >= 0 && (stats.comparisons++, arr[j] > key)) {
            arr[j + 1] = arr[j];
            stats.swaps++;
            j--;
          }
          arr[j + 1] = key;
        }
        break;
      case 'merge':
        const merge = (arr, left, mid, right) => {
          const n1 = mid - left + 1;
          const n2 = right - mid;
          const leftArr = new Array(n1);
          const rightArr = new Array(n2);
          for (let i = 0; i < n1; i++) leftArr[i] = arr[left + i];
          for (let j = 0; j < n2; j++) rightArr[j] = arr[mid + 1 + j];
          let i = 0, j = 0, k = left;
          while (i < n1 && j < n2) {
            stats.comparisons++;
            if (leftArr[i] <= rightArr[j]) {
              arr[k] = leftArr[i++];
            } else {
              arr[k] = rightArr[j++];
            }
            stats.swaps++;
            k++;
          }
          while (i < n1) { arr[k++] = leftArr[i++]; stats.swaps++; }
          while (j < n2) { arr[k++] = rightArr[j++]; stats.swaps++; }
        };
        const mergeSort = (arr, left, right) => {
          if (left >= right) return;
          const mid = Math.floor(left + (right - left) / 2);
          mergeSort(arr, left, mid);
          mergeSort(arr, mid + 1, right);
          merge(arr, left, mid, right);
        };
        mergeSort(arr, 0, arr.length - 1);
        break;
      case 'quick':
        const partition = (arr, low, high) => {
          const pivot = arr[high];
          let i = low - 1;
          for (let j = low; j < high; j++) {
            stats.comparisons++;
            if (arr[j] < pivot) {
              i++;
              [arr[i], arr[j]] = [arr[j], arr[i]];
              stats.swaps++;
            }
          }
          [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
          stats.swaps++;
          return i + 1;
        };
        const quickSort = (arr, low, high) => {
          if (low < high) {
            let pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
          }
        };
        quickSort(arr, 0, arr.length - 1);
        break;
      case 'heap':
        const heapify = (arr, n, i) => {
          let largest = i;
          const left = 2 * i + 1;
          const right = 2 * i + 2;
          if (left < n) {
            stats.comparisons++;
            if (arr[left] > arr[largest]) largest = left;
          }
          if (right < n) {
            stats.comparisons++;
            if (arr[right] > arr[largest]) largest = right;
          }
          if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            stats.swaps++;
            heapify(arr, n, largest);
          }
        };
        const n = arr.length;
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(arr, n, i);
        for (let i = n - 1; i > 0; i--) {
          [arr[0], arr[i]] = [arr[i], arr[0]];
          stats.swaps++;
          heapify(arr, i, 0);
        }
        break;
      default:
        console.warn(`Unknown algorithm: ${algorithm}`);
        break;
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
        startSorting
  }
}