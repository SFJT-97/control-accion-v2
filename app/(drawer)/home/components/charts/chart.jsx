import { View } from "react-native"
import { Bar, CartesianChart } from "victory-native"
import {  useFont } from "@shopify/react-native-skia"

import { accidents } from './data'

export default function Chart() {

    const font = useFont()

  return (

    <View style={{ width: 300, height: 300 }}>
        <CartesianChart
        data={accidents}
        xKey="type"
        yKeys={["amount"]}
        domainPadding={{ left: 50, right: 50, top: 30 }}
        axisOptions={{ 
            font,
        }}
        >
        {({ points, chartBounds }) => (
            <Bar
            chartBounds={chartBounds}
            points={points.amount}
            roundedCorners={{
                topLeft: 5,
                topRight: 5,
            }}
            >
            </Bar>
        )}
        </CartesianChart>
    </View>
  )
}