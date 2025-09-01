console.log("Задача 6. Узагальнені типи (файл task-6.ts)");

function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

console.log(getFirstElement<number>([1, 2, 3])); // 1
console.log(getFirstElement<string>(["a", "b", "c"])); // "a"
console.log(getFirstElement<boolean>([true, false, true])); // true