import React, { useState, createContext, useContext } from "react";

const DataContext = createContext({});
export const questionData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {

    const [Question1Data, setQuestion1Data] = useState();
    const [Question2Data, setQuestion2Data] = useState();
    const [Question3Data, setQuestion3Data] = useState();
    const [Question4Data, setQuestion4Data] = useState();
    const [Question5Data, setQuestion5Data] = useState();
    const [Question6Data, setQuestion6Data] = useState();
    const [Question7Data, setQuestion7Data] = useState();
    const [Question8Data, setQuestion8Data] = useState();
    const [Question9Data, setQuestion9Data] = useState();
    const [Question10Data, setQuestion10Data] = useState();
    const [Question11Data, setQuestion11Data] = useState();
    const [Question12Data, setQuestion12Data] = useState();
    const [Question13Data, setQuestion13Data] = useState();
    const [Question14Data, setQuestion14Data] = useState();
    const [Question15Data, setQuestion15Data] = useState();
    const [Question16Data, setQuestion16Data] = useState();
    const [Question17Data, setQuestion17Data] = useState();
    const [Question18Data, setQuestion18Data] = useState();
    const [Question19Data, setQuestion19Data] = useState();

    return (
        <DataContext.Provider value={{
            Question1Data, setQuestion1Data,
            Question2Data, setQuestion2Data,
            Question3Data, setQuestion3Data,
            Question4Data, setQuestion4Data,
            Question5Data, setQuestion5Data,
            Question6Data, setQuestion6Data,
            Question7Data, setQuestion7Data,
            Question8Data, setQuestion8Data,
            Question9Data, setQuestion9Data,
            Question10Data, setQuestion10Data,
            Question11Data, setQuestion11Data,
            Question12Data, setQuestion12Data,
            Question13Data, setQuestion13Data,
            Question14Data, setQuestion14Data,
            Question15Data, setQuestion15Data,
            Question16Data, setQuestion16Data,
            Question17Data, setQuestion17Data,
            Question18Data, setQuestion18Data,
            Question19Data, setQuestion19Data,
        }}>
            {children}
        </DataContext.Provider>
    );
};

