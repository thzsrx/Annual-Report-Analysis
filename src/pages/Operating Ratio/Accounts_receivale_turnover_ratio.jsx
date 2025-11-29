import React, { useState } from "react";
import { useData } from "../../Context/DataContext.jsx";

const Accounts_receivale_turnover_ratio = () => {

    const { setAccountsReceivaleTurnoverRatioData } = useData();
    const [value1, setvalue1] = useState();
    const [value2, setvalue2] = useState();
    const [result, setresult] = useState();

    const handlecal = () => {
        const total = value1 / value2;
        setresult(total);
        setAccountsReceivaleTurnoverRatioData(total);
    };

    return (
        <>
            <div>
                <h2>Accounts Receivale Turnover Ratio: {result}</h2>
                <div>
                    <lable>Revenue:
                        <input type="number" value={value1} onChange={(e) => setvalue1(Number(e.target.value))} />
                    </lable>
                    <lable>Average Receivale:
                        <input type="number" value={value2} onChange={(e) => setvalue2(Number(e.target.value))} />
                    </lable>
                    <button onClick={handlecal}>Result</button>
                </div>
            </div>
        </>
    );
};

export default Accounts_receivale_turnover_ratio;
