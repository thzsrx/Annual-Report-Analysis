import React, { useState } from "react";
import { useData } from "../../Context/DataContext";

const Return_on_Asset = () => {

    const { setReturnOnAssetData } = useData();
    const [value1, setvalue1] = useState();
    const [value2, setvalue2] = useState();
    const [value3, setvalue3] = useState();
    const [value4, setvalue4] = useState();
    const [result, setresult] = useState();

    const handlecal = () => {
        const total = value1 + value2 * (1 - value3) / value4;
        setresult(total);
        setReturnOnAssetData(total);
    };

    return (
        <>
            <div>
                <h2>Return On Asset: {result}</h2>
                <div>
                    <label>Net Income:
                        <input type="number" value={value1} onChange={(e) => setvalue1(Number(e.target.value))} />
                    </label>
                    <label>Interest:
                        <input type="number" value={value2} onChange={(e) => setvalue2(Number(e.target.value))} />
                    </label>
                    <label>Tax Rate:
                        <input type="number" value={value3} onChange={(e) => setvalue3(Number(e.target.value))} />
                    </label>
                    <label>Total Average Assets:
                        <input type="number" value={value4} onChange={(e) => setvalue4(Number(e.target.value))} />
                    </label>
                    <button onClick={handlecal}>Result</button>
                </div>
            </div>
        </>
    );
};

export default Return_on_Asset;
