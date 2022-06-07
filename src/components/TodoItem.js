/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem({handleChange, item}  ) {
  return (
   <label className="panel-block">
      <input defaultChecked={item.done} onChange={() => handleChange(item)} type="checkbox" />
      <span className={item.done ? 'has-text-grey-light' : ''}>{item.text}</span>
    </label>
  );
}

export default TodoItem;