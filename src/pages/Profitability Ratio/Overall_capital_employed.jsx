import React, { useState } from "react";
import { useData } from "../../Context/DataContext";

const Overall_Capital_Employed = () => {

    const { setOverallCapitalEmployedData } = useData();
    const [value1, setvalue1] = useState();
    const [value2, setvalue2] = useState();
    const [value3, setvalue3] = useState();
    const [result, setresult] = useState();

    const handlecal = () => {
        const total = value1 + value2 + value3;
        setresult(total);
        setOverallCapitalEmployedData(total);
    };

    return (
        <>
            <div>
                <h2>Overall Capital Employed: {result}</h2>
                <div>
                    <label>Short term debt:
                        <input type="number" value={value1} onChange={(e) => setvalue1(Number(e.target.value))} />
                    </label>
                    <label>Long term debt:
                        <input type="number" value={value2} onChange={(e) => setvalue2(Number(e.target.value))} />
                    </label>
                    <label>Equity:
                        <input type="number" value={value3} onChange={(e) => setvalue3(Number(e.target.value))} />
                    </label>
                    <button onClick={handlecal}>Result</button>
                </div>
            </div>
        </>
    );
};

export default Overall_Capital_Employed;
