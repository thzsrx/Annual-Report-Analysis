import { useState } from "react";
import { useData } from "../../Context/DataContext.jsx";

const Net_Block = () => {

    const { setNBData } = useData();
    const [value1, setvalue1] = useState();
    const [value2, setvalue2] = useState();
    const [result, setresult] = useState();

    const handleresult = () => {
        const total = value1 - value2;
        setresult(total);
        setNBData(total);
    }
    return (
        <>
            <div>
                <h1>Net Block: {result}</h1>
                <lable>Gross Block:
                    <input type="number" value={value1} onChange={(e) => setvalue1(Number(e.target.value))} />
                </lable>
                <lable>Total Depreciation:
                    <input type="number" value={value2} onChange={(e) => setvalue2(Number(e.target.value))} />
                </lable>
                <button onClick={handleresult}>Result</button>
            </div>
        </>
    );
};

export default Net_Block;
