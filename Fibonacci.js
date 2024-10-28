
const Fibs = (num) => {
    if (num === 0){
        return [];
    }else if (num === 1) {
        return [0];
    }else if (num === 2){
        return [0,1];
    }

    const fibSequence = [0,1];

    for(let i=2; i<num; i++) {
        const nextNumber = fibSequence[i-1] + fibSequence[i-2];
        fibSequence.push(nextNumber);
    }
    return fibSequence;
}

console.log("Fib sequence of 8 numbers: ",Fibs(8));



const FibsRec = (num) => {
    console.log("Recursion call with the number : ", num);
    if (num === 2){
        return [0,1];
    }else if (num === 1) {
        return [0];
    }else if (num === 0){
        return [];
    }

    const fibSequence = FibsRec(num-1);
    const nextNumber = fibSequence[num-3] + fibSequence[num-2];
    fibSequence.push(nextNumber);
    return fibSequence;
}

console.log("Fib sequence of 8 numbers with recursion: ",FibsRec(8));