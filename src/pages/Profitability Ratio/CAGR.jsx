import React, { useState } from "react";
import { useData } from "../../Context/DataContext";

const CAGR = () => {

    const { setCAGRData } = useData();
    const [value1, setvalue1] = useState();
    const [value2, setvalue2] = useState();
    const [value3, setvalue3] = useState();
    const [result, setresult] = useState();

    const handlecal = () => {
        const total = (value1 / value2) ^ 1 / value3 - 1;
        setresult(total);
        setCAGRData(total);
    };

    return (
        <>
            <div>
                <h2>Compound annual growth rate: {result}</h2>
                <div>
                    <lable>Ending Value:
                        <input type="number" value={value1} onChange={(e) => setvalue1(Number(e.target.value))} />
                    </lable>
                    <lable>Beginning Value:
                        <input type="number" value={value2} onChange={(e) => setvalue2(Number(e.target.value))} />
                    </lable>
                    <lable>Number of Years:
                        <input type="number" value={value3} onChange={(e) => setvalue3(Number(e.target.value))} />
                    </lable>
                    <button onClick={handlecal}>result</button>
                </div>
            </div>
        </>
    );
};

export default CAGR;
