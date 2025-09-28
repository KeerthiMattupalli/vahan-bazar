function SearchFilters({ setFilter }) {
  return (
    <div className="flex gap-4 mb-4">
      <select onChange={(e) => setFilter(e.target.value)} className="border p-2 rounded">
        <option value="">All Brands</option>
        <option value="Hero">Hero</option>
        <option value="Honda">Honda</option>
        <option value="Bajaj">Bajaj</option>
      </select>
    </div>
  );
}

export default SearchFilters;
