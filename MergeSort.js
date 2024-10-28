
const merge = (left, right) => {
    const sortedArray = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            sortedArray.push(left[i]);
            i++;
        }else {
            sortedArray.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {
        sortedArray.push(left[i]);
        i++;
    }

    while (j < right.length) {
        sortedArray.push(right[j]);
        j++;
    }

    return sortedArray;
}

const mergeSort = (array) => {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    const leftArray = mergeSort(left);
    const rightArray = mergeSort(right);
    console.log("left array: ",leftArray);
    console.log("right array: ", rightArray);
    return merge(leftArray,rightArray);
}

const Arr = [3, 2, 1, 13, 8, 5, 0, 1];

console.log("unsorted array: ", Arr)
console.log("sorted array: ", mergeSort(Arr));