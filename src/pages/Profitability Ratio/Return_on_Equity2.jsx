import React, { useState } from "react";
import { useData } from "../../Context/DataContext";

const Return_on_Equity2 = () => {

    const { setReturnOnEquity2Data } = useData();
    const [value1, setvalue1] = useState();
    const [value2, setvalue2] = useState();
    const [result, setresult] = useState();

    const handlecal = () => {
        const total = value1 / value2 * 100;
        setresult(total);
        setReturnOnEquity2Data(total);
    };

    return (
        <>
            <div>
                <h2>Return On Equity: {result}</h2>
                <div>
                    <label>Net Profit:
                        <input type="number" value={value1} onChange={(e) => setvalue1(Number(e.target.value))} />
                    </label>
                    <label>Average Shareholder Equity:
                        <input type="number" value={value2} onChange={(e) => setvalue2(Number(e.target.value))} />
                    </label>
                    <button onClick={handlecal}>Result</button>
                </div>
            </div>
        </>
    );
};

export default Return_on_Equity2;
