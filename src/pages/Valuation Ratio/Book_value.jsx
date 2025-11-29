import React, { useState } from "react";
import { useData } from "../../Context/DataContext.jsx";

const Book_value = () => {

    const { setBookValueData } = useData();
    const [value1, setvalue1] = useState();
    const [value2, setvalue2] = useState();
    const [value3, setvalue3] = useState();
    const [result, setresult] = useState();

    const handlecal = () => {
        const total = value1 + value2 / value3;
        setresult(total);
        setBookValueData(total);
    };

    return (
        <>
            <div>
                <h2>Book Value: {result}</h2>
                <div>
                    <lable>Share Capital:
                        <input type="number" value={value1} onChange={(e) => setvalue1(Number(e.target.value))} />
                    </lable>
                    <lable>Reserves (excluding revaluation reserves):
                        <input type="number" value={value2} onChange={(e) => setvalue2(Number(e.target.value))} />
                    </lable>
                    <lable>Book Value:
                        <input type="number" value={value3} onChange={(e) => setvalue3(Number(e.target.value))} />
                    </lable>
                    <button onClick={handlecal}>Result</button>
                </div>
            </div>
        </>
    );
};

export default Book_value;
