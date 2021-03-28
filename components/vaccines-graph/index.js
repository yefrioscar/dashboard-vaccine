import { Line, defaults } from 'react-chartjs-2'
import dayjs from 'dayjs'
import 'dayjs/locale/es'


dayjs.locale('es')
defaults.global.defaultFontFamily = "'Noto Sans JP', sans-serif";
defaults.global.defaultFontSize = 12
defaults.global.elements.line.borderWidth = 5

const VaccinesGraph = ({ vaccines }) => {
  const data = {
    labels: vaccines.map(item => dayjs(item.date).format('MMM D')),
    // labels: vaccines.map(item => item.date),
    datasets: [
      {
        label: 'Personas vacunadas con al menos 1 dosis.',
        data: vaccines.map(item => item.people_vaccinated),
        fill: false,
        borderColor: '#F9A8D4',
        pointBackgroundColor: '#EC4899',
        yAxisID: 'A',
        pointBorderWidth: 2,
        pointBorderColor: '#EC4899'
      },
      {
        label: 'Personas totalmente vacunadas.',
        data: vaccines.map(item => item.people_fully_vaccinated),
        fill: false,
        borderColor: '#A78BFA',
        pointBackgroundColor: '#7C3AED',
        yAxisID: 'B',
        pointBorderWidth: 2,
        pointBorderColor: '#7C3AED'
      }
    ]
  }

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            callback: function (value, index, values) {
              return new Intl.NumberFormat('en-US').format(+value)
            }
          },
          id: 'A',
          type: 'linear',
          position: 'left'
        },
        {
          gridLines: false,
          id: 'B',
          type: 'linear',
          position: 'right'
        }
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
            offsetGridLines: false,
            
          }
        }
      ]
    },
    legend: {
      labels: {
        usePointStyle: true,
        fontSize: 14
      }
      // display: false
    },
    title: {
      display: true,
      text: 'Total de personas con vacunas.'
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          console.log('====================================')
          console.log(tooltipItem, data)
          console.log('====================================')

          let amount = new Intl.NumberFormat('en-US').format(tooltipItem.yLabel)

          let message =
            tooltipItem.datasetIndex === 0
              ? `${amount} personas vacunadas con al menos 1 dosis.`
              : `${amount} personas totalmente vacunadas.`
          return message
        }
      }
    }
  }

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  )
}

export default VaccinesGraph
