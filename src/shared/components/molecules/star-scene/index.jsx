import { useState, useEffect } from 'react';

import './style.css';

function StarScene() {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const createStars = () => {
            const stars = Array.from({ length: 200 }, (_, i) => ({
                id: i,
                x: Math.random() * 10,
                y: Math.random() * 10,
                delay: `${Math.random() * 1.5}s`,
            }));

            return stars;
        };

        setStars(createStars());
    }, []);

    const divs = stars.map(star => {
        const style = {
            top: `${star.y}rem`,
            left: `${star.x}rem`,
            animationDelay: star.delay,
        };

        return (
            <div
                key={star.id}
                className='star-scene__div'
                style={style}
            />
        );
    });

    return (
        <div className='star-scene'>
            {divs}
        </div>
    );
}

export { StarScene };
