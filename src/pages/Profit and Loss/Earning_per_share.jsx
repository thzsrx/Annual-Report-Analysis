import { React, useState } from "react";
import { useData } from "../../Context/DataContext.jsx";

const Earning_per_share = () => {
    const { setEPSData } = useData();
    const [value1, setvalue1] = useState();
    const [value2, setvalue2] = useState();
    const [result, setresult] = useState();

    const handleresult = () => {
        const total = value1 / value2;
        setEPSData(`${total}`);
        setresult(total);
    }

    return (
        <>
            <div>
                <h3>Earning Per Share: {result}</h3>
                <lable>Profit after tax:
                    <input type="number" value={value1} onChange={(e) => setvalue1(Number(e.target.value))} />
                </lable>
                <br />
                <lable>Total number of outstanding ordinary shares:
                    <input type="number" value={value2} onChange={(e) => setvalue2(Number(e.target.value))} />
                </lable>
                <br />
                <button onClick={handleresult}>Result</button>
            </div>
            <br />
        </>
    );
};

export default Earning_per_share;
