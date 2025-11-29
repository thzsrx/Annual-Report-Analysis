import React, { useState } from "react";
import { useData } from "../../Context/DataContext.jsx";

const Days_sales_outstanding = () => {

    const { setDaysSalesOutstandingData } = useData();
    const [value1, setvalue1] = useState();
    const [result, setresult] = useState();

    const handlecal = () => {
        const total = 365 / value1;
        setresult(total);
        setDaysSalesOutstandingData(total);
    };

    return (
        <>
            <div>
                <h2>Days Sales Outstanding: {result}</h2>
                <div>
                    <lable>Receivale Turnover Ratio:
                        <input type="number" value={value1} onChange={(e) => setvalue1(Number(e.target.value))} />
                    </lable>
                    <button onClick={handlecal}>Result</button>
                </div>
            </div>
        </>
    );
};

export default Days_sales_outstanding;
