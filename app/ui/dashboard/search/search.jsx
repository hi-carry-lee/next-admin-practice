"use client";

import styles from "./search.module.css";
import { MdSearch } from "react-icons/md";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

/**
 * this is a common component
 */
function Search({ placeholder }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // useDebounceCallback delays executing the search function until 500ms have passed since the last input,
  // preventing excessive calls during rapid typing.
  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);
    const inputValue = e.target.value.trim();
    if (inputValue) {
      inputValue.length > 2 && params.set("search", e.target.value.trim());
      params.set("page", 1);
    } else {
      params.delete("search");
    }
    // the scroll property is set to false to prevent the page from scrolling to the top
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 1000);

  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
