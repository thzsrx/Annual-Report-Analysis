import React, { useState } from "react";
import { useData } from "../../Context/DataContext.jsx";

const Price_to_book_value_ratio = () => {

    const { setPriceToBookValueRatioData } = useData();
    const [value1, setvalue1] = useState();
    const [value2, setvalue2] = useState();
    const [result, setresult] = useState();

    const handlecal = () => {
        const total = value1 / value2;
        setresult(total);
        setPriceToBookValueRatioData(total);
    };

    return (
        <>
            <div>
                <h2>Price To Book Value Ratio: {result}</h2>
                <div>
                    <lable>Current Share Price:
                        <input type="number" value={value1} onChange={(e) => setvalue1(Number(e.target.value))} />
                    </lable>
                    <lable>Book Value:
                        <input type="number" value={value2} onChange={(e) => setvalue2(Number(e.target.value))} />
                    </lable>
                    <button onClick={handlecal}>Result</button>
                </div>
            </div>
        </>
    );
};

export default Price_to_book_value_ratio;
