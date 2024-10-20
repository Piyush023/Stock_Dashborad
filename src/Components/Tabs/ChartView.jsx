/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import Card from '../Dashboard/Card';
import ChartFilter from './ChartFilter';
import { chartConfig } from '../../constants/config';
import { StockContext } from '../contexts/StockContextProvider';
import { getChartData } from '../../stock-api';
import Chart from 'react-apexcharts';
import EmptyView from '../EmptyView/EmptyView';

const ChartView = () => {
  const { stockSymbol } = useContext(StockContext);
  const [result, setResult] = useState();
  const [filter, setFilter] = useState('1m');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getSymbolChart = async (filter) => {
    setLoading(true);
    try {
      let res;
      if (stockSymbol) {
        res = await getChartData('tcs', filter ? filter : 'max');
        setResult(res);
      }
    } catch (e) {
      setResult(null);
      setError('Failed To Get Any Data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (stockSymbol) {
      getSymbolChart(filter);
    }
  }, [stockSymbol, filter]);

  const formData = (result) => {
    if (result) {
      return result?.datasets?.[0]?.values.map(([date, value]) => {
        return {
          date: date,
          value: value,
        };
      });
    }
    return [];
  };

  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: 'area',
      zoom: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2,
      curve: 'straight',
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.3,
        gradientToColors: ['#A9C5FF'],
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0.5,
        stops: [0, 100],
      },
    },
    xaxis: {
      type: 'datetime',
      categories: formData(result).map((item) => item.date),
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy',
      },
    },
    title: {
      text: stockSymbol.toUpperCase(),
      align: 'left',
    },
  });

  const [series, setSeries] = useState([
    {
      name: 'Price',
      data: formData(result).map((item) => item.value),
    },
  ]);

  useEffect(() => {
    if (result) {
      setSeries([
        {
          name: 'Price',
          data: formData(result).map((item) => ({
            x: new Date(item.date),
            y: item.value,
          })),
        },
      ]);
    }
  }, [result]);

  return (
    <div className='flex w-full h-full'>
      <Card>
        {loading ? (
          <div className='flex flex-col flex-1 w-full h-full'>
            <EmptyView isLoading={loading} />
          </div>
        ) : (
          <>
            <ul className='absolute z-40 flex top-16 right-2'>
              {Object.keys(chartConfig).map((item, index) => {
                return (
                  <li key={index}>
                    <ChartFilter
                      filter={item}
                      active={filter === item}
                      onClick={() => {
                        setFilter(item);
                      }}
                    />
                  </li>
                );
              })}
            </ul>
            <Chart
              options={chartOptions}
              series={series}
              type={'area'}
              height={550}
            />
          </>
        )}
      </Card>
    </div>
  );
};

export default ChartView;
