import { useState } from "react";
import { useData } from "../../Context/DataContext";

const Share_price = () => {

    const { setSharePriceData } = useData();
    const [value1, setvalue1] = useState("");
    const [value2, setvalue2] = useState("");
    const [result, setresult] = useState("");

    const handlecal = () => {
        const total = value1 / value2;
        setSharePriceData(total);
        setresult(total)
    }
    return (
        <>
            <div>
                <h3>Share Price: {result}</h3>
                <div>
                    <label>Total Present value of Future Cash Flow:
                        <input type="number" value={value1} onChange={(e) => setvalue1(Number(e.target.value))} />
                    </label>
                    <label>Total Numbers of Shares:
                        <input type="number" value={value2} onChange={(e) => setvalue2(Number(e.target.value))} />
                    </label>
                    <button onClick={handlecal}>Result</button>
                </div>
            </div>
        </>
    );
};


export default Share_price;
