import React, { useState } from 'react';

/* 
  【Todoのデータ構成】
　・key：Todoを特定するID（String）
　・text：Todoの内容（String）
　・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
import useStorage from '../hooks/storage';

/* ライブラリ */
import {getKey} from "../lib/util";

function Todo() {
  const [items, putItems] = React.useState([
      /* テストコード 開始 */
    { key: getKey(), text: '日本語の宿題', done: false },
    { key: getKey(), text: 'reactを勉強する', done: false },
    { key: getKey(), text: '明日の準備をする', done: false },
    /* テストコード 終了 */
  ]);

  const changeClick =(e) => {
    e.target.classList.toggle('has-text-grey-light')
  }

  const [todo, setTodo] = useState('')
  const [tab, setTab] = useState('全て')

  const hanleKeyDown= (e) => {
    if(e.key === 'Enter'){
      putItems((items) => {
        items = [...items, { key: getKey(), text: todo, done:   false }];
        return items;
      })
      
      setTodo('')
      
    }
  }

   const handleChange = (item) => {
    const newsItems = items.map(value => {
      if (value.text === item.text) {
        value.done = !value.done;
      }
      return value;
    })

    putItems(newsItems)
  }

   const handleFilterChange = (text) => {
    setTab(text)
  }

  const displayItems = () => {
    let newItems;
    if (tab === '全て') {
      newItems = items.filter(item => {
        return true;
      });
    }

    if (tab === '未完了') {
      newItems = items.filter(item => {
        return !item.done;
      });
    }

    if (tab === '完了済み') {
      newItems = items.filter(item => {
        return item.done;
      });
    }

    return newItems;
  }
  
  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
      <input value = {todo} className="input" type="text" placeholder='Todoを入力してください' onKeyDown={e => hanleKeyDown(e)} onInput={e => setTodo(e.target.value)} />
      

      <Filter handleFilterChange={handleFilterChange} />
      {displayItems().map(item => (
        <TodoItem handleChange={handleChange} item={item} key={item.key} />
      ))}
      <div className="panel-block">
        {displayItems().length} items
      </div>

    </div>
  );
}

export default Todo;