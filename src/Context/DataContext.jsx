import { createContext, useState, useContext } from "react";

const DataContext = createContext();
export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const [divData, setDivData] = useState("");
    const [PBTData, setPBTData] = useState("");
    const [PATData, setPATData] = useState("");
    const [EPSData, setEPSData] = useState("");

    // Balance Sheet 
    const [SEData, setSEData] = useState("");
    const [SCData, setSCData] = useState("");
    const [NOSData, setNOSData] = useState("");
    const [TLData, setTLData] = useState("");
    const [AData, setAData] = useState("");
    const [TAData, setTAData] = useState("");
    const [SEEData, setSEEData] = useState("");
    const [GBData, setGBData] = useState("");
    const [TDData, setTDData] = useState("");
    const [NBData, setNBData] = useState("");

    // Cashflow 
    const [CFData, setCFData] = useState("");

    // Profitability Ratio 
    const [ORData, setORData] = useState("");
    const [OEData, setOEData] = useState("");
    const [EbitdaData, setEbitdaData] = useState("");
    const [EbitdaMarginData, setEbitdaMarginData] = useState("");
    const [CAGRData, setCAGRData] = useState("");
    const [PatMarginData, setPatMarginData] = useState("");
    const [ReturnOnEquityData, setReturnOnEquityData] = useState("");
    const [NetProfitMarginData, setNetProfitMarginData] = useState("");
    const [AssetTurnoverData, setAssetTurnoverData] = useState("");
    const [FinancialLeverage, setFinanicalLeverage] = useState("");
    const [ReturnOnEquity2Data, setReturnOnEquity2Data] = useState("");
    const [ReturnOnAssetData, setReturnOnAssetData] = useState("");
    const [ReturnOnCapitalEmployedData, setReturnOnCapitalEmployedData] = useState("");
    const [OverallCapitalEmployedData, setOverallCapitalEmployedData] = useState("");
    const [EbitData, setEbitData] = useState("");

    // Leverage Ratio 
    const [InterestCoverageRatioData, setInterestCoverageRatioData] = useState("");
    const [EarningBeforeInterestAndTaxData, setEarningBeforeInterestAndTaxData] = useState("");
    const [Ebitda2Data, setEbitda2Data] = useState("");
    const [DebtToEquityRatioData, setDebtToEquityRatioData] = useState("");
    const [TotalDebtData, setTotalDebtData] = useState("");
    const [DebtToAssetsRatioData, setDebtToAssetsRatioData] = useState("");
    const [FinancialLeverageRatioData, setFinancialLeverageRatioData] = useState("");

    // Operating Ratio 
    const [FixedAssetsTurnoverData, setFixedAssetsTurnoverData] = useState("");
    const [WorkingCapitalData, setWorkingCapitalData] = useState("");
    const [WorkingCapitalTurnoverData, setWorkingCapitalTurnoverData] = useState("");
    const [TotalAssetsTurnoverData, setTotalAssetsTurnoverData] = useState("");
    const [InventoryTurnoverRatioData, setInventoryTurnoverRatioData] = useState("");
    const [InventoryNumberOfDaysData, setInventoryNumberOfDaysData] = useState("");
    const [AccountsReceivaleTurnoverRatioData, setAccountsReceivaleTurnoverRatioData] = useState("");
    const [DaysSalesOutstandingData, setDaysSalesOutstandingData] = useState("");

    // Valuation Ratio 
    const [PriceToSalesRatioData, setPriceToSalesRatioData] = useState("");
    const [SalesPerShareData, setSalesPerShareData] = useState("");
    const [PriceToBookValueRatioData, setPriceToBookValueRatioData] = useState("");
    const [BookValueData, setBookValueData] = useState("");
    const [PriceToEarningRatioData, setPriceToEarningRatioData] = useState("");

    // Other Formula
    const [GrossProfitMarginData, setGrossProfitMarginData] = useState("");
    const [GrossProfitData, setGrossProfitData] = useState("");
    const [FutureValueData, setFutureValueData] = useState("");
    const [PresentValueData, setPresentValueData] = useState("");
    const [FutureCashFlowData, setFutureCashFlowData] = useState("");
    const [TerminalValueData, setTerminalValueData] = useState("");
    const [PresentValueOfCashFlowData, setPresentValueOfCashFlowData] = useState("");
    const [NetPresentValueData, setNetPresentValueData] = useState("");
    const [NetDebtData, setNetDebtData] = useState("");
    const [TotalPresentValueOfFutureCashFlowData, setTotalPresentValueOfFutureCashFlowData] = useState("");
    const [SharePriceData, setSharePriceData] = useState("");
    const [LowerIntrinsicValueData, setLowerIntrinsicValueData] = useState("");
    const [UpperIntrinsicValueData, setUpperIntrinsicValueData] = useState("");


    return (
        <DataContext.Provider value={{
            divData, setDivData,
            PBTData, setPBTData,
            PATData, setPATData,
            EPSData, setEPSData,
            SEData, setSEData,
            SCData, setSCData,
            NOSData, setNOSData,
            TLData, setTLData,
            AData, setAData,
            TAData, setTAData,
            SEEData, setSEEData,
            GBData, setGBData,
            TDData, setTDData,
            NBData, setNBData,
            CFData, setCFData,
            ORData, setORData,
            OEData, setOEData,
            EbitdaData, setEbitdaData,
            EbitdaMarginData, setEbitdaMarginData,
            CAGRData, setCAGRData,
            PatMarginData, setPatMarginData,
            ReturnOnEquityData, setReturnOnEquityData,
            NetProfitMarginData, setNetProfitMarginData,
            AssetTurnoverData, setAssetTurnoverData,
            FinancialLeverage, setFinanicalLeverage,
            ReturnOnEquity2Data, setReturnOnEquity2Data,
            ReturnOnAssetData, setReturnOnAssetData,
            ReturnOnCapitalEmployedData, setReturnOnCapitalEmployedData,
            OverallCapitalEmployedData, setOverallCapitalEmployedData,
            EbitData, setEbitData,
            InterestCoverageRatioData, setInterestCoverageRatioData,
            EarningBeforeInterestAndTaxData, setEarningBeforeInterestAndTaxData,
            Ebitda2Data, setEbitda2Data,
            DebtToEquityRatioData, setDebtToEquityRatioData,
            TotalDebtData, setTotalDebtData,
            DebtToAssetsRatioData, setDebtToAssetsRatioData,
            FinancialLeverageRatioData, setFinancialLeverageRatioData,
            FixedAssetsTurnoverData, setFixedAssetsTurnoverData,
            WorkingCapitalData, setWorkingCapitalData,
            WorkingCapitalTurnoverData, setWorkingCapitalTurnoverData,
            TotalAssetsTurnoverData, setTotalAssetsTurnoverData,
            InventoryTurnoverRatioData, setInventoryTurnoverRatioData,
            InventoryNumberOfDaysData, setInventoryNumberOfDaysData,
            AccountsReceivaleTurnoverRatioData, setAccountsReceivaleTurnoverRatioData,
            DaysSalesOutstandingData, setDaysSalesOutstandingData,
            PriceToSalesRatioData, setPriceToSalesRatioData,
            SalesPerShareData, setSalesPerShareData,
            PriceToBookValueRatioData, setPriceToBookValueRatioData,
            BookValueData, setBookValueData,
            PriceToEarningRatioData, setPriceToEarningRatioData,
            GrossProfitMarginData, setGrossProfitMarginData,
            GrossProfitData, setGrossProfitData,
            FutureValueData, setFutureValueData,
            PresentValueData, setPresentValueData,
            FutureCashFlowData, setFutureCashFlowData,
            TerminalValueData, setTerminalValueData,
            PresentValueOfCashFlowData, setPresentValueOfCashFlowData,
            NetPresentValueData, setNetPresentValueData,
            NetDebtData, setNetDebtData,
            TotalPresentValueOfFutureCashFlowData, setTotalPresentValueOfFutureCashFlowData,
            SharePriceData, setSharePriceData,
            LowerIntrinsicValueData, setLowerIntrinsicValueData,
            UpperIntrinsicValueData, setUpperIntrinsicValueData,
        }}>
            {children}
        </DataContext.Provider>
    );
};
