import React, { useState } from "react";
import { useData } from "../../Context/DataContext";

const Ebitda = () => {

    const { setEbitdaData } = useData();
    const [value1, setvalue1] = useState();
    const [value2, setvalue2] = useState();
    const [result, setresult] = useState();

    const handlecal = () => {
        const total = value1 - value2;
        setresult(total);
        setEbitdaData(total);
    };

    return (
        <>
            <div>
                <h2>Ebitda: {result}</h2>
                <div>
                    <label>Operating Revenues:
                        <input type="number" value={value1} onChange={(e) => setvalue1(Number(e.target.value))} />
                    </label>
                    <label>Operating Expenses:
                        <input type="number" value={value2} onChange={(e) => setvalue2(Number(e.target.value))} />
                    </label>
                    <button onClick={handlecal}>Result</button>
                </div>
            </div>
        </>
    );
};

export default Ebitda;
