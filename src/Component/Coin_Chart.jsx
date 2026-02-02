import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'

export default function Coin_Chart({ historicalData }) {

    const [data, setData] = useState([["Data", "Prices"]])

    useEffect(() => {
        let dataCopy = [["Date", "Prices"]];
        if (historicalData.prices) {
            historicalData.prices.map((item) => {
                dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0, -5)}`, item[1]]) //data , price
            })
            setData(dataCopy);
        }
    }, [historicalData])

    const options = {
        backgroundColor: "#151927",
        colors: ["#22c55e"],
        areaOpacity: 0.25, 
        lineWidth: 2,
        legend:{
            textStyle:{color:"#ffffff"}
        },
        hAxis: {
            textStyle: { color: "#ffffff" },
            gridlines: { color: "#1f2937" },
            baselineColor: "#1f2937",
        },

        vAxis: {
            textStyle: { color: "#ffffff" },
            gridlines: { color: "#1f2937" },
            baselineColor: "#1f2937",
        },

        tooltip: {
            textStyle: { color: "#000000" },
        },
    }


    return (
        <Chart
            chartType='AreaChart'
            data={data}
            height="100%"
            legendToggle
            options={options}

        />
    )
}
