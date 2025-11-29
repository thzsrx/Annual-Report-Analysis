import React, { useState } from "react";
import { useData } from "../../Context/DataContext.jsx";

const Price_to_earning_ratio = () => {

    const { setPriceToEarningRatioData } = useData();
    const [value1, setvalue1] = useState();
    const [value2, setvalue2] = useState();
    const [result, setresult] = useState();

    const handlecal = () => {
        const total = value1 / value2;
        setresult(total);
        setPriceToEarningRatioData(total);
    };

    return (
        <>
            <div>
                <h2>Price to Sales Ratio: {result}</h2>
                <div>
                    <lable>Current Stock Price:
                        <input type="number" value={value1} onChange={(e) => setvalue1(Number(e.target.value))} />
                    </lable>
                    <lable>Earning Per Share:
                        <input type="number" value={value2} onChange={(e) => setvalue2(Number(e.target.value))} />
                    </lable>
                    <button onClick={handlecal}>Result</button>
                </div>
            </div>
        </>
    );
};

export default Price_to_earning_ratio;
