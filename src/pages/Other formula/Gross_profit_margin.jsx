import { useState } from "react";
import { useData } from "../../Context/DataContext";

const Gross_profit_margin = () => {

    const { setGrossProfitMarginData } = useData();
    const [value1, setvalue1] = useState("");
    const [value2, setvalue2] = useState("");
    const [result, setresult] = useState("");

    const handlecal = () => {
        const total = value1 / value2;
        setGrossProfitMarginData(total);
        setresult(total)
    }
    return (
        <>
            <div>
                <h3>Gross Profit Margin: {result}</h3>
                <div>
                    <label>Gross profit:
                        <input type="number" value={value1} onChange={(e) => setvalue1(Number(e.target.value))} />
                    </label>
                    <label>Net Sales:
                        <input type="number" value={value2} onChange={(e) => setvalue2(Number(e.target.value))} />
                    </label>
                    <button onClick={handlecal}>Result</button>
                </div>
            </div>
        </>
    );
};


export default Gross_profit_margin;
