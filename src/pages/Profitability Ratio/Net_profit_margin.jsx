import React, { useState } from "react";
import { useData } from "../../Context/DataContext";

const Net_Profit_Margin = () => {

    const { setNetProfitMarginData } = useData();
    const [value1, setvalue1] = useState();
    const [value2, setvalue2] = useState();
    const [result, setresult] = useState();

    const handlecal = () => {
        const total = value1 / value2 * 100;
        setresult(total);
        setNetProfitMarginData(total);
    };

    return (
        <>
            <div>
                <h2>Net Profit Margin: {result}</h2>
                <div>
                    <label>Net Profit:
                        <input type="number" value={value1} onChange={(e) => setvalue1(Number(e.target.value))} />
                    </label>
                    <label>Net Sales:
                        <input type="number" value={value2} onChange={(e) => setvalue2(Number(e.target.value))} />
                    </label>
                    <button onClick={handlecal}>Result</button>
                </div>
            </div>
        </>
    );
};

export default Net_Profit_Margin;
