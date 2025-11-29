import { useState } from "react";
import { useData } from "../../Context/DataContext";

const Total_present_value_of_FCF = () => {

    const { setTotalPresentValueOfFutureCashFlowData } = useData();
    const [value1, setvalue1] = useState("");
    const [value2, setvalue2] = useState("");
    const [result, setresult] = useState("");

    const handlecal = () => {
        const total = value1 - value2;
        setTotalPresentValueOfFutureCashFlowData(total);
        setresult(total)
    }
    return (
        <>
            <div>
                <h3>Total Present Value Of Future Cash Flow: {result}</h3>
                <div>
                    <label>Present value of Cash Flow:
                        <input type="number" value={value1} onChange={(e) => setvalue1(Number(e.target.value))} />
                    </label>
                    <label>Net Debt:
                        <input type="number" value={value2} onChange={(e) => setvalue2(Number(e.target.value))} />
                    </label>
                    <button onClick={handlecal}>Result</button>
                </div>
            </div>
        </>
    );
};


export default Total_present_value_of_FCF;
