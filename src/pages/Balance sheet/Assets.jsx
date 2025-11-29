import { useState } from "react";
import { useData } from "../../Context/DataContext.jsx";

const Assets = () => {
    const { setAData } = useData();
    const [value1, setvalue1] = useState("");
    const [value2, setvalue2] = useState("");
    const [result, setResult] = useState("");

    const handleAddition = () => {
        const total = value1 + value2;
        setResult(total);
        setAData(total);
    };

    return (
        <div>
            <h1>👤 Profile Component</h1>
            <div>
                <h3>Assets: {result}</h3>

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
                    Liabilities:
                    <input
                        type="number"
                        value={value2}
                        onChange={(e) => setvalue2(Number(e.target.value))}
                    />
                </label>
                <br />
                <button onClick={handleAddition}>Result</button>
            </div>
            <br />
        </div>
    );
};

export default Assets;
