import { questionData } from "../Context/QuestionContext.jsx";
import YearSelect from "./YearSelect.jsx";

const Home = () => {
    const { Question1Data } = questionData();
    const { Question2Data } = questionData();
    const { Question3Data } = questionData();
    const { Question4Data } = questionData();
    const { Question5Data } = questionData();
    const { Question6Data } = questionData();
    const { Question7Data } = questionData();
    const { Question8Data } = questionData();
    const { Question9Data } = questionData();
    const { Question10Data } = questionData();
    const { Question11Data } = questionData();
    const { Question12Data } = questionData();
    const { Question13Data } = questionData();
    const { Question14Data } = questionData();
    const { Question15Data } = questionData();
    const { Question16Data } = questionData();
    const { Question17Data } = questionData();
    const { Question18Data } = questionData();
    const { Question19Data } = questionData();



    const handleYearChange = (year) => {
        console.log("Received year:", year);
    };
    return (
        <div>
            <h1>Question Component</h1>
            <div>
                <div>
                    <h2>Year Selector</h2>
                    <YearSelect onYearChange={handleYearChange} />
                </div>
                <br /> <strong>Question1:</strong> {Question1Data || "No data yet"}
                <br /> <strong>Qusetion2:</strong> {Question2Data || "No data yet"}
                <br /> <strong>Qusetion3:</strong> {Question3Data || "No data yet"}
                <br /> <strong>Qusetion4:</strong> {Question4Data || "No data yet"}
                <br /> <strong>Qusetion5:</strong> {Question5Data || "No data yet"}
                <br /> <strong>Qusetion6:</strong> {Question6Data || "No data yet"}
                <br /> <strong>Qusetion7:</strong> {Question7Data || "No data yet"}
                <br /> <strong>Qusetion8:</strong> {Question8Data || "No data yet"}
                <br /> <strong>Qusetion9:</strong> {Question9Data || "No data yet"}
                <br /> <strong>Qusetion10:</strong> {Question10Data || "No data yet"}
                <br /> <strong>Qusetion11:</strong> {Question11Data || "No data yet"}
                <br /> <strong>Qusetion12:</strong> {Question12Data || "No data yet"}
                <br /> <strong>Qusetion13:</strong> {Question13Data || "No data yet"}
                <br /> <strong>Qusetion14:</strong> {Question14Data || "No data yet"}
                <br /> <strong>Qusetion15:</strong> {Question15Data || "No data yet"}
                <br /> <strong>Qusetion16:</strong> {Question16Data || "No data yet"}
                <br /> <strong>Qusetion17:</strong> {Question17Data || "No data yet"}
                <br /> <strong>Qusetion18:</strong> {Question18Data || "No data yet"}
                <br /> <strong>Qusetion19:</strong> {Question19Data || "No data yet"}
            </div>
            <hr />
        </div>
    );
};

export default Home;
