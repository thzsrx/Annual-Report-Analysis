import { useState } from "react";
import { useData } from "../../Context/DataContext";

const Upper_intrinsic_value = () => {

    const { setUpperIntrinsicValueData } = useData();
    const [value1, setvalue1] = useState("");
    const [result, setresult] = useState("");

    const handlecal = () => {
        const total = value1 * (1 + 0.10);
        setUpperIntrinsicValueData(total);
        setresult(total)
    }
    return (
        <>
            <div>
                <h3>Upper Intrinsic Value: {result}</h3>
                <div>
                    <label>Share Price:
                        <input type="number" value={value1} onChange={(e) => setvalue1(Number(e.target.value))} />
                    </label>
                    <button onClick={handlecal}>Result</button>
                </div>
            </div>
        </>
    );
};


export default Upper_intrinsic_value;
