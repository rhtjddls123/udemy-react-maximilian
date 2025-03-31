import { ChangeEvent, Key, ReactNode, useRef, useState } from "react";

interface SearchableListProps<T> {
  items: T[];
  children: (item: T) => ReactNode;
  itemKeyFn: (item: T) => Key;
}

const SearchableList = <T,>({ items, itemKeyFn, children }: SearchableListProps<T>) => {
  const [searchTerm, setSearchTerm] = useState("");
  const laseChange = useRef<number>(null);

  const searchResults = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (laseChange.current) {
      clearTimeout(laseChange.current);
    }

    laseChange.current = setTimeout(() => {
      laseChange.current = null;
      setSearchTerm(e.target.value);
    }, 500);
  };

  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search" onChange={handleChange} />
      <ul>
        {searchResults.map((item) => (
          <li key={itemKeyFn(item)}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchableList;
