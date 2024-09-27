'use client';

import React from 'react';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';
import { GraphContainer, GraphItem } from './styled';
import type { StatsDataType } from '@/actions/get-stats';

type GraphDataType = {
  x: string;
  y: number;
};

export default function UserStatsGraphs({ data }: { data: StatsDataType[] }) {
  const [graph, setGraph] = React.useState<GraphDataType[]>([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });

    setTotal(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0),
    );
    setGraph(graphData);
  }, [data]);

  return (
    <GraphContainer className="animeLeft">
      <GraphItem className="total">
        <p>Acessos: {total}</p>
      </GraphItem>
      <GraphItem>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#fff',
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: '#333',
            },
          }}
        />
      </GraphItem>
      <GraphItem>
        <VictoryChart>
          <VictoryBar alignment="start" data={graph}></VictoryBar>
        </VictoryChart>
      </GraphItem>
    </GraphContainer>
  );
}
