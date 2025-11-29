import React, { useState } from "react";
import { useData } from "../../Context/DataContext.jsx";

const Sales_per_share = () => {

    const { setSalesPerShareData } = useData();
    const [value1, setvalue1] = useState();
    const [value2, setvalue2] = useState();
    const [result, setresult] = useState();

    const handlecal = () => {
        const total = value1 / value2;
        setresult(total);
        setSalesPerShareData(total);
    };

    return (
        <>
            <div>
                <h2>Sales Per Share: {result}</h2>
                <div>
                    <lable>Total Revenue:
                        <input type="number" value={value1} onChange={(e) => setvalue1(Number(e.target.value))} />
                    </lable>
                    <lable>Total Number of Shares:
                        <input type="number" value={value2} onChange={(e) => setvalue2(Number(e.target.value))} />
                    </lable>
                    <button onClick={handlecal}>Result</button>
                </div>
            </div>
        </>
    );
};

export default Sales_per_share;
