/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem({item, changeClick}  ) {
  return (
    <label onClick={changeClick} className="panel-block">
            <input type="checkbox" />
            {item.text}
    </label>
  );
}

export default TodoItem;