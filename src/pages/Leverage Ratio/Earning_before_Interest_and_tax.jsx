import React, { useState } from "react";
import { useData } from "../../Context/DataContext.jsx";

const Earning_before_Interest_and_tax = () => {

    const { setEarningBeforeInterestAndTaxData } = useData();
    const [value1, setvalue1] = useState();
    const [value2, setvalue2] = useState();
    const [result, setresult] = useState();

    const handlecal = () => {
        const total = value1 - value2;
        setresult(total);
        setEarningBeforeInterestAndTaxData(total);
    };

    return (
        <>
            <div>
                <h2>Earning Before Interest And Tax: {result}</h2>
                <div>
                    <lable> Ebitda:
                        <input type="number" value={value1} onChange={(e) => setvalue1(Number(e.target.value))} />
                    </lable>
                    <lable> Depreciation and Amortization:
                        <input type="number" value={value2} onChange={(e) => setvalue2(Number(e.target.value))} />
                    </lable>
                    <button onClick={handlecal}>Result</button>
                </div>
            </div>
        </>
    );
};

export default Earning_before_Interest_and_tax;
