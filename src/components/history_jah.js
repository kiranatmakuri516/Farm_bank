import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
const colors = scaleOrdinal(schemeCategory10).range();
const data = [
    {
        name: "Pesticides",
        uv: 6000,

    },
    {
        name: "Labour",
        uv: 8000,
    },
    {
        name: "Seeds",
        uv: 3000,
    },
    {
        name: "Ploughing",
        uv: 5780,
    },

];

const getPath = (x: number, y: number, width: number, height: number) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3
        } 
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width
        }, ${y + height}
  Z`;
};

const TriangleBar: FunctionComponent<any> = (props: any) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
export default function Chart3() {
    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Money Spent  In Different Areas (In Rs)</h2>
            <BarChart
                width={600}
                height={300}
                data={data}
                style={{ margin: "auto" }}
            >
                <XAxis dataKey="name" />
                <YAxis />
                <Bar
                    dataKey="uv"
                    fill="#8884d8"
                    shape={<TriangleBar />}
                    label={{ position: "top" }}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    )
}