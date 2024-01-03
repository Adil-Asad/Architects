import styles from "@/styles/todo.module.css";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

function Todo() {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [isToggleBtn, setIsToggleBtn] = useState(true);
  const [isEditBtn, setIsEditBtn] = useState(null);
  const [isMsg, setIsMsg] = useState(false);

  // add items function
  function addItem() {
    if (inputData.trim() === "") {
      setIsMsg(true);
    } else {
      const currentDate = new Date();
      const currentTime = currentDate.toLocaleTimeString();
      const newItem = `${inputData} - ${currentTime}`;
      setItems([...items, newItem]);
      setInputData("");
      setIsMsg(false);
    }
  }

  // delete items function
  function delItem(id) {
    const updatedItem = items.filter((item, ind) => {
      return ind !== id;
    });
    setItems(updatedItem);
  }

  // edit items function
  function editItem(id) {
    const editItem = items.find((item, ind) => {
      return ind === id;
    });

    setIsToggleBtn(false);
    // Extracting the text part of the existing item
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

    // const newItems = [...items];
    // newItems[isEditBtn] = inputData;
    // setItems(newItems);
    // setIsToggleBtn(true);
    // setInputData("");
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
          <p className={styles.text__color}>Please Enter Some Text!</p>
        ) : (
          ""
        )}
        <div className={styles.showItem}>
          {items.map((item, ind) => {
            return (
              <>
                <div className={styles.item__all} key={ind}>
                  <div className={styles.text__wrap}>
                    <p>{item}</p>
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
