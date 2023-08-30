import { useEffect, useState } from 'react';
import { shortList, list, longList } from '../data.js';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import prevSlide from '../utils/prevSlide.js';
import nextSlide from '../utils/nextSlide.js';

const Carousel = () => {

    const [people, setPeople] = useState(list);
    const [currentPerson, setCurrentPerson] = useState(0);

    // Autoplay Functionality
    useEffect(() => {

        let intervalId = setInterval(() => {

            nextSlide(setCurrentPerson, people);

        }, 3000);

        // Cleanup Function
        return () => {
            clearInterval(intervalId);
        };

    }, [currentPerson]);

    return (
        <section className='slider-container'>
            {
                people.map((person, personIndex) => {

                    const { id, image, name, title, quote } = person;

                    return (
                        <article key={id} className='slide' style={{ transform: `translateX(${100 * (personIndex - currentPerson)}%)`, opacity: personIndex === currentPerson ? 1 : 0, visibility: personIndex === currentPerson ? 'visible' : 'hidden' }}>
                            <img className='person-img' src={image} alt={name} />
                            <h5 className='name'>{name}</h5>
                            <p className="title">{title}</p>
                            <p className="text">{quote}</p>
                            <FaQuoteRight className='icon' />
                        </article>
                    )
                })
            }

            <button type='button' className='prev' onClick={() => {
                prevSlide(setCurrentPerson, people);
            }}>
                <FiChevronLeft />
            </button>

            <button type='button' className='next' onClick={() => {
                nextSlide(setCurrentPerson, people);
            }}>
                <FiChevronRight />
            </button>

        </section>
    );
}

export default Carousel;