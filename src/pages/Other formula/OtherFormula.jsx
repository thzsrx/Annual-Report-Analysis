import GrossProfitMargin from "./Gross_profit_margin.jsx";
import GrossProfit from "./Gross_profit.jsx";
import FutureValue from "./Future_value.jsx";
import PresentValue from "./Present_value.jsx";
import FutureCashFlow from "./Future_cash_flow.jsx";
import TerminalValue from "./Terminal_value.jsx";
import PresentValueOfCashFlow from "./Present_value_of_cash_flow.jsx";
import NetPresentValue from "./Net_present_value.jsx";
import NetDebt from "./Net_debt.jsx";
import TotalPresentValueOfFutureCashFlow from "./Total_present_value_of_FCF.jsx";
import SharePrice from "./Share_price.jsx"
import LowerIntrinsicValue from "./Lower_intrinsic_value.jsx";
import UpperIntrinsicValue from "./Upper_intrinsic_value.jsx";


const OtherFormula = () => {
    return (
        <>
            <GrossProfitMargin /><hr />
            <GrossProfit /><hr />
            <FutureValue /><hr />
            <PresentValue /><hr />
            <FutureCashFlow /><hr />
            <TerminalValue /><hr />
            <PresentValueOfCashFlow /><hr />
            <NetPresentValue /><hr />
            <NetDebt /><hr />
            <TotalPresentValueOfFutureCashFlow /><hr />
            <SharePrice /><hr />
            <LowerIntrinsicValue /><hr />
            <UpperIntrinsicValue /><hr />
        </>
    );
};


export default OtherFormula;

