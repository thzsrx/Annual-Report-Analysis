import React from "react";
import { useData } from "./Context/DataContext.jsx";
import YearSelect from "./YearSelect";

const Home = () => {
    const { divData } = useData();
    const { PBTData } = useData();
    const { PATData } = useData();
    const { EPSData } = useData();
    const { SEData } = useData();
    const { SCData } = useData();
    const { NOSData } = useData();
    const { TLData } = useData();
    const { AData } = useData();
    const { TAData } = useData();
    const { SEEData } = useData();
    const { GBData } = useData();
    const { TDData } = useData();
    const { NBData } = useData();
    const { CFData } = useData();
    const { ORData } = useData();
    const { OEData } = useData();
    const { EbitdaData } = useData();
    const { EbitdaMarginData } = useData();
    const { CAGRData } = useData();
    const { PatMarginData } = useData();
    const { ReturnOnEquityData } = useData();
    const { NetProfitMarginData } = useData();
    const { AssetTurnoverData } = useData();
    const { FinanicalLeverageData } = useData();
    const { ReturnOnEquity2Data } = useData();
    const { ReturnOnAssetData } = useData();
    const { ReturnOnCapitalEmployedData } = useData();
    const { OverallCapitalEmployedData } = useData();
    const { EbitData } = useData();
    const { InterestCoverageRatioData } = useData();
    const { EarningBeforeInterestAndTaxData } = useData();
    const { Ebitda2Data } = useData();
    const { DebtToEquityRatioData } = useData();
    const { TotalDebtData } = useData();
    const { DebtToAssetsRatioData } = useData();
    const { FinancialLeverageRatioData } = useData();
    const { FixedAssetsTurnoverData } = useData();
    const { WorkingCapitalData } = useData();
    const { WorkingCapitalTurnoverData } = useData();
    const { TotalAssetsTurnoverData } = useData();
    const { InventoryTurnoverRatioData } = useData();
    const { InventoryNumberOfDaysData } = useData();
    const { AccountsReceivaleTurnoverRatioData } = useData();
    const { DaysSalesOutstandingData } = useData();
    const { PriceToSalesRatioData } = useData();
    const { SalesPerShareData } = useData();
    const { PriceToBookValueRatioData } = useData();
    const { BookValueData } = useData();
    const { PriceToEarningRatioData } = useData();

    const handleYearChange = (year) => {
        console.log("Received year:", year);
    };
    return (
        <div>
            <h1>🏠 Home Component</h1>
            <div>
                <div>
                    <h2>Year Selector</h2>
                    <YearSelect onYearChange={handleYearChange} />
                </div>
                <strong>Data from Total operating revenue:</strong> {divData || "No data yet"}
                <br /> <strong>Data from Profit before tax:</strong> {PBTData || "No data yet"}
                <br /> <strong>Data from Profit after tax:</strong> {PATData || "No data yet"}
                <br /> <strong>Data from Earning per shares:</strong> {EPSData || "No data yet"}

                {/* Balance Sheet */}
                <br /> <strong>Data from Shareholder Equity:</strong> {SEData || "No data yet"}
                <br /> <strong>Data from Shareholder Capital:</strong> {SCData || "No data yet"}
                <br /> <strong>Data from Numbers of Shares:</strong> {NOSData || "No data yet"}
                <br /> <strong>Data from Total Liability:</strong> {TLData || "No data yet"}
                <br /> <strong>Data from Assets:</strong> {AData || "No data yet"}
                <br /> <strong>Data from Total Assets:</strong> {TAData || "No data yet"}
                <br /> <strong>Data from Shareholder Equity:</strong> {SEEData || "No data yet"}
                <br /> <strong>Data from Shareholder Equity:</strong> {SEEData || "No data yet"}
                <br /> <strong>Data from Gross Block:</strong> {GBData || "No data yet"}
                <br /> <strong>Data from Total Depreciation:</strong> {TDData || "No data yet"}
                <br /> <strong>Data from Net Block:</strong> {NBData || "No data yet"}

                {/* Cash Flow */}
                <br /> <strong>Data from Cash Flow:</strong> {CFData || "No data yet"}

                {/* Profitability Ratio */}
                <br /> <strong>Data from Operating Revenue:</strong> {ORData || "No data yet"}
                <br /> <strong>Data from Operating Expenses:</strong> {OEData || "No data yet"}
                <br /> <strong>Data from Ebitda:</strong> {EbitdaData || "No data yet"}
                <br /> <strong>Data from Ebitda Margin:</strong> {EbitdaMarginData || "No data yet"}
                <br /> <strong>Data from CAGR:</strong> {CAGRData || "No data yet"}
                <br /> <strong>Data from Pat Margin:</strong> {PatMarginData || "No data yet"}
                <br /> <strong>Data from Return On Equity:</strong> {ReturnOnEquityData || "No data yet"}
                <br /> <strong>Data from Net Profit Margin:</strong> {NetProfitMarginData || "No data yet"}
                <br /> <strong>Data from Asset Turnover:</strong> {AssetTurnoverData || "No data yet"}
                <br /> <strong>Data from Finanical Leverage:</strong> {FinanicalLeverageData || "No data yet"}
                <br /> <strong>Data from Return On Equity:</strong> {ReturnOnEquity2Data || "No data yet"}
                <br /> <strong>Data from Return On Asset:</strong> {ReturnOnAssetData || "No data yet"}
                <br /> <strong>Data from Return On Capital Employed:</strong> {ReturnOnCapitalEmployedData || "No data yet"}
                <br /> <strong>Data from Overall Capital Employed:</strong> {OverallCapitalEmployedData || "No data yet"}
                <br /> <strong>Data from Ebit:</strong> {EbitData || "No data yet"}

                {/* Leverage Ratio */}
                <br /> <strong>Data from Interest Coverage Ratio:</strong> {InterestCoverageRatioData || "No data yet"}
                <br /> <strong>Data from Earning Before Interest And Tax:</strong> {EarningBeforeInterestAndTaxData || "No data yet"}
                <br /> <strong>Data from Ebitda2:</strong> {Ebitda2Data || "No data yet"}
                <br /> <strong>Data from Debt To Equity Ratio:</strong> {DebtToEquityRatioData || "No data yet"}
                <br /> <strong>Data from Total Debt:</strong> {TotalDebtData || "No data yet"}
                <br /> <strong>Data from Debt To Assets Ratio:</strong> {DebtToAssetsRatioData || "No data yet"}
                <br /> <strong>Data from Finanical Leverage Ratio:</strong> {FinancialLeverageRatioData || "No data yet"}

                {/* Operating Ratio */}
                <br /> <strong>Data from Fixed Assets Turnover:</strong> {FixedAssetsTurnoverData || "No data yet"}
                <br /> <strong>Data from Working Capital:</strong> {WorkingCapitalData || "No data yet"}
                <br /> <strong>Data from Working Capital Turnover:</strong> {WorkingCapitalTurnoverData || "No data yet"}
                <br /> <strong>Data from Total Assets Turnover:</strong> {TotalAssetsTurnoverData || "No data yet"}
                <br /> <strong>Data from Inventory Turnover Ratio:</strong> {InventoryTurnoverRatioData || "No data yet"}
                <br /> <strong>Data from Inventory Number of Days:</strong> {InventoryNumberOfDaysData || "No data yet"}
                <br /> <strong>Data from Accounts Receivale Turnover Ratio:</strong> {AccountsReceivaleTurnoverRatioData || "No data yet"}
                <br /> <strong>Data from Days Sales Outstanding:</strong> {DaysSalesOutstandingData || "No data yet"}

                {/* Valuation Ratio */}
                <br /> <strong>Data from Price To Sales Ratio:</strong> {PriceToSalesRatioData || "No data yet"}
                <br /> <strong>Data from Sales Per Share:</strong> {SalesPerShareData || "No data yet"}
                <br /> <strong>Data from Price To BookValue Ratio:</strong> {PriceToBookValueRatioData || "No data yet"}
                <br /> <strong>Data from BookValue:</strong> {BookValueData || "No data yet"}
                <br /> <strong>Data from Price To Earning Ratio:</strong> {PriceToEarningRatioData || "No data yet"}
            </div>
            <hr />
        </div>
    );
};

export default Home;
