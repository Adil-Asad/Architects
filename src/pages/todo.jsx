import styles from "@/styles/todo.module.css";
import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

function Todo() {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [isToggleBtn, setIsToggleBtn] = useState(true);
  const [isEditBtn, setIsEditBtn] = useState(null);
  const [isMsg, setIsMsg] = useState(false);

  useEffect(() => {
    const storedItems = localStorage.getItem("todoItems");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  // add items function
  function addItem() {
    if (inputData.trim() === "") {
      setIsMsg(true);
    } else {
      const currentDate = new Date();
      const currentTime = currentDate.toLocaleTimeString();
      const newItem = `${inputData} - ${currentTime}`;
      setItems([newItem, ...items]);
      setInputData("");
      setIsMsg(false);
      updateLocalStorage([newItem, ...items]);
    }
  }

  // delete items function
  function delItem(id) {
    const updatedItem = items.filter((item, ind) => ind !== id);
    setItems(updatedItem);
    updateLocalStorage(updatedItem);
  }

  // edit items function
  function editItem(id) {
    const editItem = items.find((item, ind) => ind === id);

    setIsToggleBtn(false);
    // extracting content only
    const textPart = editItem.split("-")[0].trim();
    setInputData(textPart);
    setIsEditBtn(id);
  }

  // update item function
  function updateItem() {
    const newItems = [...items];
    const currentDate = new Date();
    const currentTime = currentDate.toLocaleTimeString();
    newItems[isEditBtn] = `${inputData} - ${currentTime}`;
    setItems(newItems);
    setIsToggleBtn(true);
    setInputData("");
    updateLocalStorage(newItems);

    // const newItems = [...items];
    // newItems[isEditBtn] = inputData;
    // setItems(newItems);
    // setIsToggleBtn(true);
    // setInputData("");
  }

  // todoItems is the name of my local stroage Variables List.
  //in local stroage data is onl stored in string form.
  function updateLocalStorage(items) {
    localStorage.setItem("todoItems", JSON.stringify(items));
  }

  //  enter key logic
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      {
        isToggleBtn ? addItem() : updateItem();
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__child}>
        <p className={styles.container__heading}>Todo App</p>
        <div className={styles.item__add}>
          <textarea
            className={styles.item__input}
            type="text"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add Your New Todo"
          />
          {isToggleBtn ? (
            <FaPlus className={styles.btn__add} onClick={addItem} />
          ) : (
            <MdEdit
              className={styles.btn__update}
              onClick={() => updateItem()}
            />
          )}
        </div>
        {isMsg ? (
          <p className={styles.error__color}>Please Enter Some Text!</p>
        ) : (
          ""
        )}
        <div className={styles.showItem}>
          {items.map((item, ind) => {
            const [content, time] = item.split("-").map((part) => part.trim());
            return (
              <>
                <div className={styles.item__all} key={ind}>
                  <div className={styles.text__wrap}>
                    <p>{content}</p>
                    <p className={styles.item__time}>{time}</p>
                  </div>

                  <div className={styles.btn__group}>
                    <MdEdit
                      className={styles.btn__edit}
                      onClick={() => editItem(ind)}
                    />
                    <MdDelete
                      className={styles.btn__del}
                      onClick={() => delItem(ind)}
                    />
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className={styles.item__clear}>
          <p>You have {items.length} pending tasks</p>
          <button className={styles.clear__btn} onClick={() => setItems([])}>
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
