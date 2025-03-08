import { useState, useEffect } from 'react';

import './style.css';


function SceneStarsUniverse() {
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

    const starComponents = stars.map(star => {
        const style = {
            top: `${star.y}rem`,
            left: `${star.x}rem`,
            animationDelay: star.delay,
        };

        return (
            <div
                key={star.id}
                className='scene-stars-universe__star'
                style={style}
            />
        );
    });

    return (
        <div className='scene-stars-universe'>
            {starComponents}
        </div>
    );
}

export { SceneStarsUniverse };
