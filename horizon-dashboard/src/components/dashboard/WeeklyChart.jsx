import { BarChart, Bar, XAxis } from 'recharts';

const WeeklyChart = () => {

    // Sample data
    const data = [
        { name: '17', x: 12, y: 23, z: 54 },
        { name: '18', x: 22, y: 3, z: 24 },
        { name: '19', x: 13, y: 15, z: 32 },
        { name: '20', x: 44, y: 35, z: 23 },
        { name: '21', x: 35, y: 45, z: 20 },
        { name: '22', x: 62, y: 25, z: 29 },
        { name: '23', x: 37, y: 17, z: 61 },
        { name: '24', x: 28, y: 32, z: 45 },
    ];

    return (
        <BarChart width={500} height={250} data={data} barGap={10}  >
            
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <Bar barSize={16} dataKey="y" stackId="a" fill="#6AD2FF" />
            <Bar barSize={16} dataKey="z" stackId="a" fill="#775FFC" />
            <Bar radius={[10,10,0,0]} barSize={16} dataKey="x" stackId="a" fill="#E6EDF9" />
            
            
        </BarChart>
    );
}

export default WeeklyChart;