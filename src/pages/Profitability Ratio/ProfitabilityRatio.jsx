import OperatingRevenue from "./Operating_revenue";
import OperatingExpenses from "./Operating_expenses";
import Ebitda from "./Ebitda";
import EbitdaMargin from "./Ebitda_margin";
import CAGR from "./CAGR";
import PATMargin from "./PAT_margin";
import ReturnOnEquity from "./Return_on_Equity";
import NetProfitMargin from "./Net_profit_margin";
import AssetTurnover from "./Asset_turnover";
import FinanicalLeverage from "./Financial_Leverage";
import ReturnOnEquity2 from "./Return_on_Equity2";
import ReturnOnAsset from "./Return_on_Assets";
import ReturnOnCapitalEmployed from "./Return_on_capital_employed";
import OverallCapitalEmployed from "./Overall_capital_employed";


const ProfitabilityRatio = () => {
    return (
        <>
            <OperatingRevenue /><hr />
            <OperatingExpenses /><hr />
            <Ebitda /><hr />
            <EbitdaMargin /><hr />
            <CAGR /><hr />
            <PATMargin /><hr />
            <ReturnOnEquity /><hr />
            <NetProfitMargin /><hr />
            <AssetTurnover /><hr />
            <FinanicalLeverage /><hr />
            <ReturnOnEquity2 /><hr />
            <ReturnOnAsset /><hr />
            <ReturnOnCapitalEmployed /><hr />
            <OverallCapitalEmployed /><hr />
        </>
    );
};

export default ProfitabilityRatio;
