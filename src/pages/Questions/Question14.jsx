import React, { useState } from "react";
import { questionData } from "../../Context/QuestionContext.jsx";

const Question14 = () => {

    const { setQuestion14Data } = questionData();
    const [value1, setvalue1] = useState();
    const [result, setresult] = useState();

    const handleSubmit = () => {
        setresult(value1);
        setQuestion14Data(value1);
    };

    return (
        <>
            <div>
                <label>Do they operate under a heavy regulatory environment ?
                    <textarea rows="8" cols="100" value={value1} onChange={(e) => setvalue1(e.target.value)} />
                </label>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            {result}
        </>
    );
};

export default Question14;
