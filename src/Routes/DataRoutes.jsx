import { Routes, Route } from "react-router-dom";
import { DataProvider } from "../Context/DataContext.jsx";

import Home from "../../src/All_Data.jsx";

// Profit and Loss 
import TotalOperatingRevenue from "../pages/Profit and Loss/Total_operating_revenue.jsx";
import ProfitBeforeTax from "../pages/Profit and Loss/Profit_before_tax.jsx";
import ProfitAfterTax from "../pages/Profit and Loss/Profit_after_tax.jsx";
import EarningPerShare from "../pages/Profit and Loss/Earning_per_share.jsx";

// Balance Sheet 
import ShareholderEquity from "../pages/Balance sheet/shareholder_equity.jsx";
import ShareCapital from "../pages/Balance sheet/Share_capital.jsx";
import NumberOfShares from "../pages/Balance sheet/Numbers_of_shares.jsx";
import TotalLiability from "../pages/Balance sheet/Total_Liability.jsx";
import Assets from "../pages/Balance sheet/Assets.jsx";
import TotalAssets from "../pages//Balance sheet/Total_Assets.jsx";
import ShareholderEquity2 from "../pages/Balance sheet/Shareholder_equity2.jsx";
import GrossBlock from "../pages/Balance sheet/Gross_block.jsx";
import TotalDepreciation from "../pages/Balance sheet/Total_depreciation.jsx";
import NetBlock from "../pages/Balance sheet/Net_block.jsx";

// CashFlow 
import CashFlow from "../pages/Cashflow/Cashflow.jsx";

// Profitability Ratio 
import OperatingRevenue from "../pages/Profitability Ratio/Operating_revenue.jsx";
import OperatingExpenses from "../pages/Profitability Ratio/Operating_expenses.jsx";
import Ebitda from "../pages/Profitability Ratio/Ebitda.jsx";
import EbitdaMargin from "../pages/Profitability Ratio/Ebitda_margin.jsx";
import CAGR from "../pages/Profitability Ratio/CAGR.jsx";
import PatMargin from "../pages/Profitability Ratio/PAT_margin.jsx";
import ReturnOnEquity from "../pages/Profitability Ratio/Return_on_Equity.jsx";
import NetProfitMargin from "../pages/Profitability Ratio/Net_profit_margin.jsx";
import AssetTurnover from "../pages/Profitability Ratio/Asset_turnover.jsx";
import FinanicalLeverage from "../pages/Profitability Ratio/Financial_Leverage.jsx";
import ReturnOnEquity2 from "../pages/Profitability Ratio/Return_on_Equity2.jsx";
import ReturnOnAsset from "../pages/Profitability Ratio/Return_on_Assets.jsx";
import ReturnOnCapitalEmployed from "../pages/Profitability Ratio/Return_on_capital_employed.jsx";
import OverallCapitalEmployed from "../pages/Profitability Ratio/Overall_capital_employed.jsx";
import Ebit from "../pages/Profitability Ratio/Ebit.jsx";

// Leverage Ratio 
import InterestCoverageRatio from "../pages/Leverage Ratio/Interest_Coverage_Ratio.jsx";
import EarningBeforeInterestAndTax from "../pages/Leverage Ratio/Earning_before_Interest_and_tax.jsx";
import Ebitda2 from "../pages/Leverage Ratio/Ebitda2.jsx";
import DebtToEquityRatio from "../pages/Leverage Ratio/Debt_to_equity_ratio.jsx";
import TotalDebt from "../pages/Leverage Ratio/Total_debt.jsx";
import DebtToAssetsRatio from "../pages/Leverage Ratio/Debt_to_assets_ratio.jsx";
import FinancialLeverageRatio from "../pages/Leverage Ratio/Financial_leverage_ratio.jsx";

// Operating Ratio 
import FixedAssetsTurnover from "../pages/Operating Ratio/Fixed_assets_turnover.jsx";
import WorkingCapital from "../pages/Operating Ratio/Working_capital.jsx";
import WorkingCapitalTurnover from "../pages/Operating Ratio/Working_capital_turnover.jsx";
import TotalAssetsTurnover from "../pages/Operating Ratio/Total_assets_turnover.jsx";
import InventoryTurnoverRatio from "../pages/Operating Ratio/Inventory_turnover_ratio.jsx";
import InventoryNumberOfDays from "../pages/Operating Ratio/Inventory_number_of_days.jsx";
import AccountsReceivaleTurnoverRatio from "../pages/Operating Ratio/Accounts_receivale_turnover_ratio.jsx";
import DaysSalesOutstanding from "../pages/Operating Ratio/Days_sales_outstanding.jsx";

// Valuation Ratio 
import PriceToSalesRatio from "../pages/Valuation Ratio/Price_to_sales_ratio.jsx";
import SalesPerShare from "../pages/Valuation Ratio/Sales_per_share.jsx";
import PriceToBookValueRatio from "../pages/Valuation Ratio/Price_to_book_value_ratio.jsx";
import BookValue from "../pages/Valuation Ratio/Book_value.jsx";
import PriceToEarningRatio from "../pages/Valuation Ratio/Price_to_earning_ratio.jsx";

const DataRoutes = () => {
    return (
        < DataProvider >
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ProfitLoss/Total-operating-revenue" element={<TotalOperatingRevenue />} />
                <Route path="/ProfitLoss/Profit-Before-Tax" element={<ProfitBeforeTax />} />
                <Route path="/ProfitLoss/Profit-After-Tax" element={<ProfitAfterTax />} />
                <Route path="/ProfitLoss/Earning-Per-Share" element={<EarningPerShare />} />
                <Route path="/BalanceSheet/Shareholder-Equity" element={<ShareholderEquity />} />
                <Route path="/BalanceSheet/Share-Capital" element={<ShareCapital />} />
                <Route path="/BalanceSheet/Number-Of-Shares" element={<NumberOfShares />} />
                <Route path="/BalanceSheet/Total-Liability" element={<TotalLiability />} />
                <Route path="/BalanceSheet/Assets" element={<Assets />} />
                <Route path="/BalanceSheet/Total-Assets" element={<TotalAssets />} />
                <Route path="/BalanceSheet/Shareholder-Equity2" element={<ShareholderEquity2 />} />
                <Route path="/BalanceSheet/Gross-Block" element={<GrossBlock />} />
                <Route path="/BalanceSheet/Total-Depreciation" element={<TotalDepreciation />} />
                <Route path="/BalanceSheet/Net-Block" element={<NetBlock />} />
                <Route path="/CashFlow" element={<CashFlow />} />
                <Route path="/ProfitabilityRatio/Operating-Revenue" element={<OperatingRevenue />} />
                <Route path="/ProfitabilityRatio/Operating-expenses" element={<OperatingExpenses />} />
                <Route path="/ProfitabilityRatio/Ebitda" element={<Ebitda />} />
                <Route path="/ProfitabilityRatio/Ebitda-Margin" element={<EbitdaMargin />} />
                <Route path="/ProfitabilityRatio/CAGR" element={<CAGR />} />
                <Route path="/ProfitabilityRatio/Pat-Margin" element={<PatMargin />} />
                <Route path="/ProfitabilityRatio/Return-On-Equity" element={<ReturnOnEquity />} />
                <Route path="/ProfitabilityRatio/Net-Profit-Margin" element={<NetProfitMargin />} />
                <Route path="/ProfitabilityRatio/Asset-Turnover" element={<AssetTurnover />} />
                <Route path="/ProfitabilityRatio/Finanical-Leverage" element={<FinanicalLeverage />} />
                <Route path="/ProfitabilityRatio/Return-On-Equity2" element={<ReturnOnEquity2 />} />
                <Route path="/ProfitabilityRatio/Return-On-Asset" element={<ReturnOnAsset />} />
                <Route path="/ProfitabilityRatio/Return-On-Capital-Employed" element={<ReturnOnCapitalEmployed />} />
                <Route path="/ProfitabilityRatio/Overall-Capital-Employed" element={<OverallCapitalEmployed />} />
                <Route path="/ProfitabilityRatio/Ebit" element={<Ebit />} />
                <Route path="/LeverageRatio/Interest-Coverage-Ratio" element={<InterestCoverageRatio />} />
                <Route path="/LeverageRatio/Earning-Before-Interest-And-Tax" element={<EarningBeforeInterestAndTax />} />
                <Route path="/LeverageRatio/Ebitda2" element={<Ebitda2 />} />
                <Route path="/LeverageRatio/Debt-To-Equity-Ratio" element={<DebtToEquityRatio />} />
                <Route path="/LeverageRatio/Total-Debt" element={<TotalDebt />} />
                <Route path="/LeverageRatio/Debt-To-Assets-Ratio" element={<DebtToAssetsRatio />} />
                <Route path="/LeverageRatio/Financial-Leverage-Ratio" element={<FinancialLeverageRatio />} />
                <Route path="/OperatingRatio/Fixed-Assets-Turnover" element={<FixedAssetsTurnover />} />
                <Route path="/OperatingRatio/Working-Capital" element={<WorkingCapital />} />
                <Route path="/OperatingRatio/Working-Capital-Turnover" element={<WorkingCapitalTurnover />} />
                <Route path="/OperatingRatio/Total-Assets-Turnover" element={<TotalAssetsTurnover />} />
                <Route path="/OperatingRatio/Inventory-Turnover-Ratio" element={<InventoryTurnoverRatio />} />
                <Route path="/OperatingRatio/Inventory-Number-Of-Days" element={<InventoryNumberOfDays />} />
                <Route path="/OperatingRatio/Accounts-Receivale-Turnover-Ratio" element={<AccountsReceivaleTurnoverRatio />} />
                <Route path="/OperatingRatio/Days-Sales-Outstanding" element={<DaysSalesOutstanding />} />
                <Route path="/ValuationRatio/Price-To-Sales-Ratio" element={<PriceToSalesRatio />} />
                <Route path="/ValuationRatio/Sales-Per-Share" element={<SalesPerShare />} />
                <Route path="/ValuationRatio/Price-To-BookValue-Ratio" element={<PriceToBookValueRatio />} />
                <Route path="/ValuationRatio/BookValue" element={<BookValue />} />
                <Route path="/ValuationRatio/Price-To-Earning-Ratio" element={<PriceToEarningRatio />} />
            </Routes>
        </DataProvider >
    );
};

export default DataRoutes;
