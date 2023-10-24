import { useState } from "react";

// { items: [], header : string }
interface Props {
  items: string[];
  header: string;
}

function ListGroup({ items, header }: Props) {
  //Hook (REALLY IMPORTANT)
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //arr[0] => variable (selectedIndex)
  //arr[1] => updater function

  return (
    <>
      <h1>{header}</h1>
      {items.length === 0 && <p>No items found.</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
