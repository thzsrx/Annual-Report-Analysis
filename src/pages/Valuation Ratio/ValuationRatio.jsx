import PriceToSalesRatio from "./Price_to_sales_ratio.jsx";
import SalesPerShare from "./Sales_per_share.jsx";
import PriceToEarningRatio from "./Price_to_earning_ratio.jsx";
import BookValue from "./Book_value.jsx";
import PriceToBookValueRatio from "./Price_to_book_value_ratio.jsx";

const ValuationRatio = () => {
  return (
    <>
      <PriceToSalesRatio /><hr />
      <SalesPerShare /><hr />
      <PriceToBookValueRatio /><hr /> 
      <BookValue /><hr />
      <PriceToEarningRatio /><hr />
    </>
  );
};

export default ValuationRatio;
