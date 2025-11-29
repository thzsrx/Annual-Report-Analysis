import ShareholderEquity from "./shareholder_equity";
import ShareCapital from "./Share_capital";
import NumberOfShares from "./Numbers_of_shares";
import TotalLiability from "./Total_Liability";
import Assets from "./Assets";
import TotalAssets from "./Total_Assets";
import ShareholderEqutity2 from "./Shareholder_equity2";
import GrossBlock from "./Gross_block";
import TotalDepreciation from "./Total_depreciation";
import NetBlock from "./Net_block";

const BalanceSheet = () => {
    return (
        <>
            <ShareholderEquity /><hr />
            <ShareCapital /><hr />
            <NumberOfShares /><hr />
            <TotalLiability /><hr />
            <Assets /><hr />
            <TotalAssets /><hr />
            <ShareholderEqutity2 /><hr />
            <GrossBlock /><hr />
            <TotalDepreciation /><hr />
            <NetBlock /><hr />
        </>
    );
};

export default BalanceSheet;
