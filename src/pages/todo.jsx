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
    if (inputData === "") {
      alert("Please enter the data first!");
    } else {
      setItems([...items, inputData]);
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

  return (
    <div className={styles.mainContainer}>
      <div className={styles.childContainer}>
        <p className={styles.containerHeading}>Todos</p>
        <div className={styles.addItem}>
          <input
            className={styles.inputItem}
            type="text"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            placeholder="Add Items"
          />
          {isToggleBtn ? (
            <CiCirclePlus className={styles.addBtn} onClick={addItem} />
          ) : (
            <FaRegEdit
              className={styles.editBtn}
              onClick={() => editItem(ind)}
            />
          )}
        </div>
        <div className={styles.showItem}>
          {items.map((item, ind) => {
            return (
              <div className={styles.eachItem} key={ind}>
                <p>{item}</p>
                <div>
                  <FaRegEdit
                    className={styles.editBtn}
                    onClick={() => editItem(ind)}
                  />
                  <MdDeleteForever
                    className={styles.delBtn}
                    onClick={() => delItem(ind)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Todo;
