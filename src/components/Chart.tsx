import { ResponsiveLine } from '@nivo/line'

const x = [
  {
    id: 'japan',
    color: 'hsl(327, 70%, 50%)',
    data: [
      {
        x: 0,
        y: 48,
      },
      {
        x: 1,
        y: 39,
      },
      {
        x: 2,
        y: 134,
      },
    ],
  },
]

export const Chart = () => (
  <ResponsiveLine
    data={x}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: 'point' }}
    yScale={{
      type: 'linear',
      min: 'auto',
      max: 'auto',
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    pointSize={10}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={-12}
    useMesh={true}
  />
)
