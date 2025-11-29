import { React, useState } from "react";
import { useData } from "../../Context/DataContext.jsx";

const Profit_after_tax = () => {

    const { setPATData } = useData("");
    const [value1, setvalue1] = useState("");
    const [value2, setvalue2] = useState("");
    const [result, setresult] = useState("");

    const handleCal = () => {
        const total = value1 - value2;
        setresult(total);
        setPATData(`${total}`);

    };
    return (
        <>
            <div>
                <h3>Profit after tax: {result}</h3>
                <label> Profit before tax:
                    <input
                        type="number"
                        value={value1}
                        onChange={(e) => setvalue1(Number(e.target.value))}
                    />
                </label>
                <br />
                <label> Tax Expenses:
                    <input type="number" value={value2} onChange={(e) => setvalue2(Number(e.target.value))} />
                </label>
                <br />
                <button onClick={handleCal}>Result</button>
            </div>
            <br />
        </>
    );
};

export default Profit_after_tax;
