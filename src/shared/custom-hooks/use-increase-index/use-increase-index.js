import { useState } from 'react';


function useIncreaseIndex({
    resetLength = 0
}) {
    const [index, setIndex] = useState(0);

    const handleSetIndex = () => setIndex(prev => prev < resetLength - 1 ? prev + 1 : 0);


    return {
        index,
        increaseIndex: handleSetIndex
    };
}

export { useIncreaseIndex };
