import React, { useState } from "react";
import { useData } from "../../Context/DataContext.jsx";

const Inventory_number_of_days = () => {

    const { setInventoryNumberOfDaysData } = useData();
    const [value1, setvalue1] = useState();
    const [result, setresult] = useState();

    const handlecal = () => {
        const total = 365 / value1;
        setresult(total);
        setInventoryNumberOfDaysData(total);
    };

    return (
        <>
            <div>
                <h2>Inventory Turnover Ratio: {result}</h2>
                <div>
                    <lable>Inventory Turnover:
                        <input type="number" value={value1} onChange={(e) => setvalue1(Number(e.target.value))} />
                    </lable>
                    <button onClick={handlecal}>Result</button>
                </div>
            </div>
        </>
    );
};

export default Inventory_number_of_days;
