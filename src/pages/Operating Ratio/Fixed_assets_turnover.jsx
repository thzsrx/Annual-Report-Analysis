import React, { useState } from "react";
import { useData } from "../../Context/DataContext.jsx";

const Fixed_assets_turnover = () => {

    const { setFixedAssetsTurnoverData } = useData();
    const [value1, setvalue1] = useState();
    const [value2, setvalue2] = useState();
    const [result, setresult] = useState();

    const handlecal = () => {
        const total = value1 / value2;
        const rounded = parseFloat(total.toFixed(3));
        setresult(rounded);
        setFixedAssetsTurnoverData(rounded);
    };

    return (
        <>
            <div>
                <h2>Fixed Assets Turnover: {result}</h2>
                <div>
                    <label>Operating Revenue:
                        <input type="number" value={value1} onChange={(e) => setvalue1(Number(e.target.value))} />
                    </label>
                    <label>Total Average Asset:
                        <input type="number" value={value2} onChange={(e) => setvalue2(Number(e.target.value))} />
                    </label>
                    <button onClick={handlecal}>Result</button>
                </div>
            </div>
        </>
    );
};

export default Fixed_assets_turnover;

