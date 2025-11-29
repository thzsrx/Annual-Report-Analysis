import React, { useState } from "react";
import { useData } from "../../Context/DataContext.jsx";

const Debt_to_assets_ratio = () => {

    const { setDebtToAssetsRatioData } = useData();
    const [value1, setvalue1] = useState();
    const [value2, setvalue2] = useState();
    const [result, setresult] = useState();

    const handlecal = () => {
        const total = value1 / value2;
        setresult(total);
        setDebtToAssetsRatioData(total);
    };

    return (
        <>
            <div>
                <h2>Debt to Assets Ratio: {result}</h2>
                <div>
                    <lable> Total Debt:
                        <input type="number" value={value1} onChange={(e) => setvalue1(Number(e.target.value))} />
                    </lable>
                    <lable> Total Assets:
                        <input type="number" value={value2} onChange={(e) => setvalue2(Number(e.target.value))} />
                    </lable>
                    <button onClick={handlecal}>Result</button>
                </div>
            </div>
        </>
    );
};

export default Debt_to_assets_ratio;

