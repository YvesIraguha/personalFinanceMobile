import React from 'react'
import { PieChart } from 'react-native-svg-charts'

class PieChartExample extends React.PureComponent {
    render() {
        const data =  [{
            key: 1,
            value: 50,
            svg: { fill: 'rgba(227,45,32,0.45)' },
        },
        {
            key: 2,
            value: 30,
            svg: { fill: 'rgba(40,182,170,0.45)' }
        }]

       

        return <PieChart style={{ height: 150 }} data={data} padAngle={0}/>
    }
}

export default PieChartExample;