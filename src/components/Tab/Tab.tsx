import classnames from 'classnames';
import React,{useState} from 'react';
import { Chart } from '../Chart/Chart';
import Add from './assets/plus.png';
import './tab.css';

export interface TabProps {
  additionalStyles?: object;
  onClick?: () => void;
  label?: string;
}

export const Tab: React.FC<TabProps> = ({
  additionalStyles = {},
  onClick,
  label='Tab',
}) => {
  const [TabClick, setTabClick] = useState(false);
  const [Clicked, setClicked] = useState(false);

  return (
    <div className='tab'>
      <div
        className={classnames('tab_content')}
        style={additionalStyles}
        onClick={()=>setTabClick(true)}
      >
      {label}
      </div>
      <div>
      {
        TabClick ? 
        <div className='tab_items'>
          <div className='tab--chart'>
          <img className='tab--chart_add_button' src={Add} onClick={()=>setClicked(true)}/>
          {Clicked ? <Chart/>:<span>Please Click green '+' icon to add a chart</span>}
          </div>
        </div>: null
      }
      </div>

    </div>
  );
};
