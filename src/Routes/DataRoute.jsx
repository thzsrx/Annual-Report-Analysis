import { Routes, Route } from "react-router-dom";
import { DataProvider } from "../Context/DataContext.jsx";

import Home from "../../src/Home.jsx";
import ProfitAndLoss from "../pages/Profit and Loss/ProfitAndLoss";
import BalanceSheet from "../pages/Balance sheet/BalanceSheet.jsx";
import CashFlow from "../pages/Cashflow/Cashflow.jsx";
import ProfitabilityRatio from "../pages/Profitability Ratio/ProfitabilityRatio.jsx";
import LeverageRatio from "../pages/Leverage Ratio/LeverageRatio.jsx";
import OperatingRatio from "../pages/Operating Ratio/OperatingRatio.jsx";
import ValuationRatio from "../pages/Valuation Ratio/ValuationRatio.jsx";
import OtherFormula from "../pages/Other formula/OtherFormula.jsx";

const DataRoute = () => {
    return (
        <DataProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ProfitAndLoss" element={<ProfitAndLoss />} />
                <Route path="/BalanceSheet" element={<BalanceSheet />} />
                <Route path="/CashFlow" element={<CashFlow />} />
                <Route path="/ProfitabilityRatio" element={<ProfitabilityRatio />} />
                <Route path="/LeverageRatio" element={<LeverageRatio />} />
                <Route path="/OperatingRatio" element={<OperatingRatio />} />
                <Route path="/ValuationRatio" element={<ValuationRatio />} />
                <Route path="/OtherFormula" element={<OtherFormula />} />
            </Routes>
        </DataProvider>
    );
};

export default DataRoute;
