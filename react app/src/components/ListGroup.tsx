import { useState } from "react";

interface Props {
  items: string[];
  header: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, header, onSelectItem }: Props) {
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
              onSelectItem(item);
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
