/* 
  【Filterコンポーネント】
　・該当するTodoをステータス毎にで分けてリスト表示する
　・タブで表示する
　・サポートするステータスは「すべて」「未完了」「完了済み」
*/
import { useState } from 'react';

function Filter({ handleFilterChange}) {
  const [tabs, setTabs] = useState([
    {text : '全て', active : true}, 
    {text : '未完了', active : false}, 
    {text : '完了済み', active : false},
  ])

  const handleSetTabs = (text) => {
    handleFilterChange(text)

    setTabs((prevState) => {
      return prevState.map(value => {
        if(value.text === text) {
          value.active = true;
        }else{
          value.active = false;
        }

        return value;
      })
    })
  }

  return (
    <div className="panel-tabs">
      <ul>
        {tabs.map((tab, index) => (
          <li 
            onClick={() => handleSetTabs(tab.text)} 
            key={index} 
            className={tab.active ? 'is-active' : ''}
          >
            {tab.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filter