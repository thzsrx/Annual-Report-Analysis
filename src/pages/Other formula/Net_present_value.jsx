import { useState } from "react";
import { useData } from "../../Context/DataContext";

const Net_present_value = () => {

    const { setNetPresentValueData } = useData();
    const [value1, setvalue1] = useState("");
    const [value2, setvalue2] = useState("");
    const [value3, setvalue3] = useState("");
    const [result, setresult] = useState("");

    const handlecal = () => {
        const total = value1 / (1 + value2) ^ value3;
        setNetPresentValueData(total);
        setresult(total)
    }
    return (
        <>
            <div>
                <h3>Net Present Value: {result}</h3>
                <div>
                    <label>Terminal Value:
                        <input type="number" value={value1} onChange={(e) => setvalue1(Number(e.target.value))} />
                    </label>
                    <label>Discount Rate:
                        <input type="number" value={value2} onChange={(e) => setvalue2(Number(e.target.value))} />
                    </label>
                    <label>Numbers  Of Years:
                        <input type="number" value={value3} onChange={(e) => setvalue3(Number(e.target.value))} />
                    </label>
                    <button onClick={handlecal}>Result</button>
                </div>
            </div>
        </>
    );
};


export default Net_present_value;
