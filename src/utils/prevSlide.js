const prevSlide = (setCurrentValue, array) => {

    setCurrentValue((currentValue) => {

        const result = (currentValue - 1 + array.length) % array.length;
        return result;

    });

};

export default prevSlide;