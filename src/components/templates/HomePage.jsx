import { useEffect, useState } from "react";

//api
import { getCoinsList } from "../../services/cryptoApi";

//components
import TableCoin from "../modules/TableCoin";
import Pagination from "../modules/Pagination";
import Search from "../modules/Search";
import Chart from "../modules/Chart";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");
  const [chart, setChart] = useState(null);

  // console.log(chart);

  useEffect(() => {
    try {
      const getData = async () => {
        const res = await fetch(getCoinsList(page, currency));
        const json = await res.json();
        setCoins(json);
        setIsLoading(false);
      };
      getData();
    } catch (error) {
      console.log(error.message);
    }
    setIsLoading(true);
  }, [page, currency]);

  return (
    <div>
      <Search currency={currency} setCurrency={setCurrency} />
      <TableCoin
        coins={coins}
        isLoading={isLoading}
        currency={currency}
        setChart={setChart}
      />
      <Pagination page={page} setPage={setPage} />
      {!!chart && <Chart chart={chart} setChart={setChart} />}
    </div>
  );
}

export default HomePage;
