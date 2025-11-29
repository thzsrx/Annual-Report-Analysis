import { useState } from "react";
import { useData } from "../../Context/DataContext.jsx";

const Number_of_shares = () => {

    const { setNOSData } = useData();
    const [value1, setvalue1] = useState();
    const [value2, setvalue2] = useState();
    const [result, setresult] = useState();

    const handleResult = () => {
        const total = value1 / value2;
        setresult(total);
        setNOSData(total);
    };
    return (
        <>
            <div>
                <h1>Numbers of Shares: {result}</h1>
                <div>
                    <label> Share Capital:
                        <input type="number" value={value1} onChange={(e) => setvalue1(Number(e.target.value))} />
                    </label>
                    <label> Face Value:
                        <input type="number" value={value2} onChange={(e) => setvalue2(Number(e.target.value))} />
                    </label>
                    <button onClick={handleResult}>Result</button>
                </div>
            </div>
        </>
    );

};

export default Number_of_shares;
