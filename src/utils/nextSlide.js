const nextSlide = (setCurrentValue, array) => {

    setCurrentValue((currentValue) => {

        const result = (currentValue + 1) % array.length;
        return result;

    });

};

export default nextSlide;