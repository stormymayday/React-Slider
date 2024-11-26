"use client";

import { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { shortList, list, longList } from "@/data";
import { SlideType } from "@/types";
import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Carousel() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [slides, setSlides] = useState<SlideType[]>(shortList);

    const prevSlide = () => {};
    const nextSlide = () => {};

    return (
        <section className="slider-container">
            {slides.length > 0 &&
                slides.map((slide) => {
                    const { id, image, name, title, quote } = slide;
                    return (
                        <article className="slide" key={id}>
                            <Image
                                src={image}
                                alt={name}
                                width={200}
                                height={200}
                                className="person-img"
                            />
                            <h5 className="name">{name}</h5>
                            <p className="title">{title}</p>
                            <p className="text">{quote}</p>
                            <FaQuoteRight className="icon" />
                        </article>
                    );
                })}
            <button onClick={prevSlide} type="button" className="prev">
                <FiChevronLeft />
            </button>
            <button onClick={nextSlide} type="button" className="next">
                <FiChevronRight />
            </button>
        </section>
    );
}
export default Carousel;
