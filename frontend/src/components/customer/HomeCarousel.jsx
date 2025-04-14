import React from 'react';
import './styles.css';

function HomeCarousel({data}) {
    return (
        // Use map when connected to backend
        <>
        <div className="carouselContainer">
            <div className="carousel">

                {data.map((item) => (
                    <div key={item.id} className="carouselItem">
                        <div>
                            <img
                            className="carouselImage"
                            src={item.imgurl}
                            alt={item.productName}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}

export default HomeCarousel;



