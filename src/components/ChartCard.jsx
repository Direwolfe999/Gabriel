import React from 'react'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Filler } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

const ChartCard = ({ title = 'Performance' }) => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Revenue',
                data: [120, 190, 300, 500, 400, 600],
                fill: true,
                backgroundColor: 'rgba(0,217,255,0.12)',
                borderColor: 'rgba(0,217,255,1)'
            }
        ]
    }

    const options = { responsive: true, maintainAspectRatio: false }

    return (
        <div className="card-premium" style={{ height: 220 }}>
            <h4 className="text-sm text-gray-300 mb-2">{title}</h4>
            <div style={{ height: 160 }}>
                <Line data={data} options={options} />
            </div>
        </div>
    )
}

export default ChartCard
