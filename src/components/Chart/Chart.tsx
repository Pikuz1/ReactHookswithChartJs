import {Bar} from 'react-chartjs-2';
import { Range } from 'react-range';
import { useState } from 'react';
import './chart.css';

export interface ChartProps {
    additionalStyles?: object;      //for react storybook testing
  }
export const Chart: React.FC<ChartProps> = ({
    additionalStyles = {},
  }) => {
    const [myState,setState] = useState({ values: [10] });
    const state = {
      labels: ['January', 'February', 'March',
               'April', 'May','june','july','august','september','October'],
      datasets: [
        {
          label: 'Data',
          backgroundColor: [myState.values[0]===1 ? 'blue' : 'grey',
          myState.values[0]===2 ? 'blue' : 'grey',
          myState.values[0]===3 ? 'blue' : 'grey',
          myState.values[0]===4 ? 'blue' : 'grey',
          myState.values[0]===5 ? 'blue' : 'grey',
          myState.values[0]===6 ? 'blue' : 'grey',
          myState.values[0]===7 ? 'blue' : 'grey',
          myState.values[0]===8 ? 'blue' : 'grey',
          myState.values[0]===9 ? 'blue' : 'grey',
          myState.values[0]===10 ? 'blue' : 'grey',],
          
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [84, 14, 234, 37, 64, 42, 197,11,94,50]
        }
      ]
    }
    return (
      <div className='chart'>
        <Range
        step={1}
        min={1}
        max={10}
        values={myState.values}
        onChange={(values) => setState({ values })}
        renderTrack={({ props, children}) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '6px',
              width: '100%',
              backgroundColor: '#ccc',
            }}
          >
            {children}
          </div>
          )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '20px',
              width: '20px',
              backgroundColor: '#999'
            }}
          />
        )}
        />
        <Bar data={state}/>
      </div>
    );
}