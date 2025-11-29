import { React, useState } from "react";
import { useData } from "../../Context/DataContext.jsx";

const Operating_revenue = () => {

    const { setORData } = useData();
    const [result, setresult] = useState();
    const [value1, setvalue1] = useState();
    const [value2, setvalue2] = useState();

    const handlecal = () => {
        const total = value1 - value2;
        setresult(total);
        setORData(total);
    };

    return (
        <>
            <div>
                <h1>Operating Revenue: {result}</h1>
                <div>
                    <lable> Total revenue:
                        <input type="number" value={value1} onChange={(e) => setvalue1(e.target.value)} />
                    </lable>
                    <lable> Other income:
                        <input type="number" value={value2} onChange={(e) => setvalue2(e.target.value)} />
                    </lable>
                    <button onClick={handlecal}>Result</button>
                </div>
            </div>
        </>
    );
};

export default Operating_revenue;
