function alternatingWordOrder(array) {
    const sortedArray = array.sort((a, b) => b.length - a.length);

    const result = sortedArray.reduce((acc, word, index) => {
        const isEven = acc.length % 2 === 0;
        const position = isEven
            ? sortedArray.length - 1 - Math.floor(index / 2)
            : Math.floor(index / 2);

        acc.push(sortedArray[position]);

        return acc;
    }, []);

    return result;
}

export { alternatingWordOrder };
