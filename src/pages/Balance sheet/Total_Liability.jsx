import { useState } from "react";
import { useData } from "../../Context/DataContext.jsx";

const Total_Liability = () => {
    const { setTLData } = useData();
    const [value1, setvalue1] = useState("");
    const [value2, setvalue2] = useState("");
    const [value3, setvalue3] = useState("");
    const [result, setResult] = useState("");

    const handleAddition = () => {
        const total = value1 + value2 + value3;
        const rounded = parseFloat(total.toFixed(3));
        setResult(rounded);
        setTLData(rounded);
    };

    return (
        <div>
            <div>
                <h3>Total Liability: {result}</h3>
                <label>
                    Shareholder’s funds:
                    <input
                        type="number"
                        value={value1}
                        onChange={(e) => setvalue1(Number(e.target.value))}
                    />
                </label>
                <br />
                <label>
                    Non-current Liabilities:
                    <input
                        type="number"
                        value={value2}
                        onChange={(e) => setvalue2(Number(e.target.value))}
                    />
                </label>
                <br />
                <label>
                    Current Liabilities:
                    <input
                        type="number"
                        value={value3}
                        onChange={(e) => setvalue3(Number(e.target.value))}
                    />
                </label>
                <br />
                <button onClick={handleAddition}>Result</button>
            </div>
            <br />
        </div>
    );
};

export default Total_Liability;
