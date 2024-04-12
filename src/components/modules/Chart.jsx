import { useState } from "react";
import style from "./Chart.module.css";
import { convertData } from "../../helpers/convertData";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function Chart({ chart, setChart }) {
  const [type, setType] = useState("prices");

  const typeHandler = (event) => {
    if (event.target.tagName === "BUTTON") {
      const type = event.target.innerText.toLowerCase().replace(" ", "_");
      setType(type);
    }
  };

  //   console.log(convertData(chart, type));
  return (
    <div className={style.container}>
      <span className={style.cross} onClick={() => setChart(null)}>
        X
      </span>
      <div className={style.chart}>
        <div className={style.name}>
          <img src={chart.coin.image} alt={chart.coin.name} />
          <p>{chart.coin.name}</p>
        </div>
        <div className={style.graph}>
          <ChartComponent data={convertData(chart, type)} type={type} />
        </div>
        <div className={style.types} onClick={typeHandler}>
          <button className={type === "prices" ? style.selected : null}>
            Prices
          </button>
          <button className={type === "market_caps" ? style.selected : null}>
            Market Caps
          </button>
          <button className={type === "total_volumes" ? style.selected : null}>
            Total Volumes
          </button>
        </div>
        <div className={style.details}>
          <div>
            <p>Prices:</p>
            <span>${chart.coin.current_price}</span>
          </div>
          <div>
            <p>ATH:</p>
            <span>${chart.coin.ath}</span>
          </div>
          <div>
            <p>Market Cap:</p>
            <span>{chart.coin.market_cap}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;

const ChartComponent = ({ data, type }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} height={400} width={400}>
        <Line
          type="monotone"
          dataKey={type}
          stroke="#3874ff"
          strokeWidth="2px"
        />
        <CartesianGrid stroke="#404042" />
        <YAxis dataKey={type} domain={["auto, auto"]} />
        <XAxis dataKey="date" />
        <Tooltip />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );
};
