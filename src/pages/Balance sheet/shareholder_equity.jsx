import { React, useState } from "react";
import { useData } from "../../Context/DataContext.jsx";
import { Link } from "react-router-dom";

const shareholder_equity = () => {

    const { setSEData } = useData();
    const [value1, setvalue1] = useState();
    const [value2, setvalue2] = useState();
    const [result, setresult] = useState();

    const handleresult = () => {
        const total = value1 - value2;
        setresult(total);
        setSEData(total);
    }

    return (
        <>
            <div>
                <h1>Shareholder Equity: {result}</h1>
                <lable>Assets:
                    <input type="number" value={value1} onChange={(e) => setvalue1(Number(e.target.value))} />
                </lable>
                <lable>Assets:
                    <input type="number" value={value2} onChange={(e) => setvalue2(Number(e.target.value))} />
                </lable>
                <button onClick={handleresult}>Result</button>
            </div>
            <Link to="/">Go to Home</Link>
        </>
    );
};

export default shareholder_equity;
