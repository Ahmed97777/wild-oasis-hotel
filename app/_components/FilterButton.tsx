export default function FilterButton({
  filter,
  handleFilter,
  activeFilter,
  children,
}: {
  filter: string;
  handleFilter: (filter: string) => void;
  activeFilter: string;
  children: string;
}) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 cursor-pointer ${
        filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
      }`}
      onClick={() => {
        handleFilter(filter);
      }}
    >
      {children}
    </button>
  );
}
