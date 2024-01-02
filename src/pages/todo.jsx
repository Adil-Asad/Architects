import styles from "@/styles/todo.module.css";
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

function Todo() {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [isToggleBtn, setIsToggleBtn] = useState(true);
  const [isEditBtn, setIsEditBtn] = useState(null);

  // add items function
  function addItem() {
    // e.stopPropagation();
    if (inputData.trim() === "") {
      alert("Please enter the data first!");
    } else {
      const currentDate = new Date();
      const currentTime = currentDate.toLocaleTimeString();
      const newItem = `${inputData} - ${currentTime}`;
      setItems([...items, newItem]);
      setInputData("");
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
    console.log(editItem);
    setIsToggleBtn(false);
    setInputData(editItem);
    setIsEditBtn(id);
  }

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
  // const currentDate = new Date();
  // const currentTime = currentDate.toLocaleTimeString();

  return (
    <div className={styles.container}>
      <div className={styles.container__child}>
        <p className={styles.container__heading}>Todos</p>
        <div className={styles.item__add}>
          <textarea
            className={styles.item__input}
            type="text"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add Items"
          />
          {isToggleBtn ? (
            <CiCirclePlus className={styles.btn__add} onClick={addItem} />
          ) : (
            <FaRegEdit
              className={styles.btn__update}
              onClick={() => updateItem()}
            />
          )}
        </div>
        <div className={styles.showItem}>
          {items.map((item, ind) => {
            return (
              <>
                <div className={styles.item__all} key={ind}>
                  <div className={styles.text__wrap}>
                    <p>{item}</p>
                  </div>

                  <div className={styles.btn__group}>
                    <FaRegEdit
                      className={styles.btn__edit}
                      onClick={() => editItem(ind)}
                    />
                    <MdDeleteForever
                      className={styles.btn__del}
                      onClick={() => delItem(ind)}
                    />
                  </div>
                </div>
                <div className={styles.item__box}>
                  {/* <small className={styles.small}>{currentTime}</small> */}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Todo;
