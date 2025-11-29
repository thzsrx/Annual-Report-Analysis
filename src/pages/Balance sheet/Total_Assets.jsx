import { useState } from "react";
import { useData } from "../../Context/DataContext.jsx";

const Total_assets = () => {

    const { setTAData } = useData();
    const [value1, setvalue1] = useState("");
    const [value2, setvalue2] = useState("");
    const [result, setresult] = useState("");

    const handlecal = () => {
        const total = value1 + value2;
        setresult(total);
        setTAData(total);

    }
    return (
        <>
            <div>
                <h1>Total Assets</h1>
                <div>
                    <h3>Assets: {result}</h3>

                    <label>
                        Fixed Assets:
                        <input
                            type="number"
                            value={value1}
                            onChange={(e) => setvalue1(Number(e.target.value))}
                        />
                    </label>
                    <br />
                    <label>
                        Current Assets:
                        <input
                            type="number"
                            value={value2}
                            onChange={(e) => setvalue2(Number(e.target.value))}
                        />
                    </label>
                    <br />
                    <button onClick={handlecal}>Result</button>
                </div>
                <br />
            </div>
        </>
    );
}

export default Total_assets;
