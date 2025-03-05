import { useEffect, useState } from 'react';


function useIntersectionObserver({ ref, options }) {
    const [isIntersecting, setIsIntersecting] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, options);

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [ref, options]);


    return isIntersecting;
}

export { useIntersectionObserver };
