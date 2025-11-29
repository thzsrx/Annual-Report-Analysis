import React, { useState } from "react";
import { useData } from "../../Context/DataContext.jsx";

const Interest_Coverage_Ratio = () => {

    const { setInterestCoverageRatioData } = useData();
    const [value1, setvalue1] = useState();
    const [value2, setvalue2] = useState();
    const [result, setresult] = useState();

    const handlecal = () => {
        const total = value1 / value2;
        setresult(total);
        setInterestCoverageRatioData(total);
    };

    return (
        <>
            <div>
                <h2>Interest Coverage Ratio: {result}</h2>
                <div>
                    <lable> Earning before Interest and tax:
                        <input type="number" value={value1} onChange={(e) => setvalue1(Number(e.target.value))} />
                    </lable>
                    <lable> Interest payment:
                        <input type="number" value={value2} onChange={(e) => setvalue2(Number(e.target.value))} />
                    </lable>
                    <button onClick={handlecal}>Result</button>
                </div>
            </div>
        </>
    );
};

export default Interest_Coverage_Ratio;
