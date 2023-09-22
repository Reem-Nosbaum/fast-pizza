import { useState } from "react";

function SearchOrder() {
  const [query, setQuery] = useState("");
  function handelSubmit(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handelSubmit}>
      <input
        placeholder="Search order#"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}
export default SearchOrder;
