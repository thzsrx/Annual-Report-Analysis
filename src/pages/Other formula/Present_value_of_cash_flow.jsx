import { useState } from "react";
import { useData } from "../../Context/DataContext";

const Present_value_of_cash_flow = () => {

    const { setPresentValueOfCashFlowData } = useData();
    const [value1, setvalue1] = useState("");
    const [value2, setvalue2] = useState("");
    const [result, setresult] = useState("");

    const handlecal = () => {
        const total = value1 + value2;
        setPresentValueOfCashFlowData(total);
        setresult(total)
    }
    return (
        <>
            <div>
                <h3>Present Value of Cash Flow: {result}</h3>
                <div>
                    <label>Net Present value of Future Cash Flow:
                        <input type="number" value={value1} onChange={(e) => setvalue1(Number(e.target.value))} />
                    </label>
                    <label>Present value of terminal value:
                        <input type="number" value={value2} onChange={(e) => setvalue2(Number(e.target.value))} />
                    </label>
                    <button onClick={handlecal}>Result</button>
                </div>
            </div>
        </>
    );
};


export default Present_value_of_cash_flow;
