import React from "react";
import './componentsStyles/slideshow-style.css';

function SlideImg({ arrayImg, indexParam }) {
    return (
        <div
            className="slideshowSlider"
            style={{ transform: `translate3d(${-indexParam * 100}%, 0, 0)` }}
        >
            {arrayImg.map((backgroundColor, index) => (
                <div
                    className="slide"
                    key={index}
                    style={{
                        backgroundImage: `url(${backgroundColor})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right',
                        backgroundSize: 'cover'
                    }}
                ></div>
            ))}
        </div>
    );
}

function Slideshow() {
    const colors = ["pubPeixe1.png", "pubPeixe2.png", "pubPeixe3.png", "pubPeixe4.png"];
    const delay = 15000;
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    //alterar divs
    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow bg-white m-0 block">
            <SlideImg arrayImg={colors} indexParam={index} />
            <div className="slideshowDots">
                {colors.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Slideshow;