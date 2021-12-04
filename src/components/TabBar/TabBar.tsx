import classnames from 'classnames';
import React, { useState } from 'react';
import AddTab from './assets/addtab.png';
import Close from './assets/close.png';
import { Tab } from '../Tab/Tab';


import './tabbar.css'

export interface TabProps {
  additionalStyles?: object;
  onClick: () => void;
  
}

export const TabBar: React.FC<TabProps> = ({
  additionalStyles = {},
  onClick,
}) => {
    const [Tabs, setTabs] = useState([<Tab/>]);
    const addTabs = () => {
        setTabs(Tabs => [...Tabs, <Tab />]);
      };
    
  return (
    <div className='tab_bar'>
        <div
        className={classnames('tab_bar_content')}
        style={additionalStyles}
        >
            <img className='tab--add_button'src={AddTab} onClick={addTabs}/>
                {Tabs.map((item, i) => (
                <div key={i} className='tab--open'>
                    {item}
                    <img className='tab--add_button'src={Close} onClick={() => {
                    let _itemState = Tabs.filter(
                    (_item, _index) => _index !== i
                    );
                    setTabs(_itemState);
                    }}/>
                </div>
                ))}
        </div>
      

    </div>
  );
};
