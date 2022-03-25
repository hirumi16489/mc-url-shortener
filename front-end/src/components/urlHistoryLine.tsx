import React, { useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import addHostname from '../utils/addHostname';
import { Url } from '../graphql';
import {
  useGetUrlQuery,
} from '../graphql/url.generated';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Shorter url click count(7 last days)',
    },
  },
};

function UrlhistoryLine({ url }: { url: Url }) {
  const { data, refetch } = useGetUrlQuery({ variables: { shortUrl: url.shortUrl } });
  const chartRef = useRef<HTMLDivElement>(null);
  const chartButtonRef = useRef<HTMLButtonElement>(null);
  let count = 0;
  let chartData = null;

  const showChart = () => {
    if (chartRef.current) {
      chartRef.current.classList.toggle('hidden');

      if (chartButtonRef.current) {
        chartButtonRef.current.classList.toggle('bg-red-500');
        chartButtonRef.current.classList.toggle('bg-green-500');
      }
    }
  };

  if (data) {
    const lastWeekDates: {[k: number]: number} = {};
    const today = new Date();
    const day = new Date();
    const labels: string[] = [];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    for (let i = 6; i >= 0; i -= 1) {
      day.setDate(today.getDate() - i);
      const dayName = days[day.getDay()];
      labels.push(dayName);
      lastWeekDates[day.getDate()] = 0;
    }

    const chartDataSet = Object.values(data.url.clicks.reduce((acc, value) => {
      const date = new Date(value.date);
      const dayDate = date.getDate();
      const startLimit = new Date();
      startLimit.setDate(today.getDate() - 6);

      if (date < startLimit) {
        return acc;
      }

      lastWeekDates[dayDate] += 1;

      return acc;
    }, lastWeekDates));

    count = data.url.clicks.length;

    chartData = {
      labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: chartDataSet,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    };
  }

  return (
    <li>
      <div className="px-8 py-4 content-center justify-between flex">
        <span>{url.url}</span>
        <span>
          <a
            className="text-blue-600 pr-3"
            href={addHostname(url.shortUrl)}
            target="_blank"
            rel="noreferrer"
            onClick={() => {
              setTimeout(() => {
                refetch();
              }, 1000);
            }}
            onMouseDown={(e) => {
              if (e.button === 1) {
                setTimeout(() => {
                  refetch();
                }, 1000);
              }
            }}
          >
            {addHostname(url.shortUrl)}
          </a>
          <span className="py-2 px-6 bg-blue-500 text-center rounded-2xl text-white">{count}</span>
          {chartData && <span className="pl-3"><button ref={chartButtonRef} className="bg-red-500 rounded-2xl py-2 px-8 text-center text-white" onClick={showChart} type="button">Chart</button></span>}
        </span>
      </div>
      {chartData && <div ref={chartRef} className="hidden bg-slate-100"><Line options={options} data={chartData} /></div>}
    </li>
  );
}

export default UrlhistoryLine;
