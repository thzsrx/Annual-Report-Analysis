import React, { useState } from "react";
import { useData } from "../../Context/DataContext.jsx";

const Inventory_turnover_ratio = () => {

    const { setInventoryTurnoverRatioData } = useData();
    const [value1, setvalue1] = useState();
    const [value2, setvalue2] = useState();
    const [result, setresult] = useState();

    const handlecal = () => {
        const total = value1 / value2;
        setresult(total);
        setInventoryTurnoverRatioData(total);
    };

    return (
        <>
            <div>
                <h2>Inventory Turnover Ratio: {result}</h2>
                <div>
                    <label>Cost of Goods Sold:
                        <input type="number" value={value1} onChange={(e) => setvalue1(Number(e.target.value))} />
                    </label>
                    <label>Average Inventory:
                        <input type="number" value={value2} onChange={(e) => setvalue2(Number(e.target.value))} />
                    </label>
                    <button onClick={handlecal}>Result</button>
                </div>
            </div>
        </>
    );
};

export default Inventory_turnover_ratio;
