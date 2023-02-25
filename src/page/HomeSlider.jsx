import React from 'react';
import '../styles/homeSlider.css';
import slide1 from '../images/slide.jpg';

const HomeSlider = () => {
    return (
        <section id='slide'>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item sliderr active">
                        <div className='imgggg'>
                            <img src={slide1} className="animate__animated animate__pulse" alt="..." />
                        </div>
                        <div className='clippp'></div>
                        <div className='slidee-text'>
                            <p> WELCOME TO OXPITAN</p>
                            <h1>Lend The Helping Hand Get Involved</h1>
                            <button>Discover more</button>
                        </div>
                    </div>
                    <div class="carousel-item sliderr">
                        <div className='imgggg'>
                            <img src={slide1} className="animate__animated animate__pulse" alt="..." />
                        </div>
                        <div className='clippp'></div>
                        <div className='slidee-text'>
                            <p> WELCOME TO OXPITAN</p>
                            <h1>Lend The Helping Hand Get Involved</h1>
                            <button>Discover more</button>
                        </div>
                    </div>
                    <div class="carousel-item sliderr">
                        <div className='imgggg'>
                            <img src={slide1} className="animate__animated animate__pulse" alt="..." />
                        </div>
                        <div className='clippp'></div>
                        <div className='slidee-text'>
                            <p> WELCOME TO OXPITAN</p>
                            <h1>Lend The Helping Hand Get Involved</h1>
                            <button>Discover more</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='slide-boxs'>
                <div data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1" className='slide-box'></div>
                <div data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" className='slide-box'></div>
                <div data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" className='slide-box'></div>
            </div>
        </section>
    )
}

export default HomeSlider