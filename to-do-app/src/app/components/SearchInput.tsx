//src/app/components/SearchInput.tsx
import { FaSearch } from 'react-icons/fa'; 

export default function SearchInput() {
  return (
    <div className="mt-24 mx-auto  flex items-center border border-gray-300 rounded-md shadow-sm focus-within:ring focus-within:ring-blue-400 lg: w-96">
    
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search..."
        className="flex-1 px-2 py-2 outline-none text-gray-700"
      />
        {/* Search Icon */}
        <div className="px-3 text-gray-500 ">
        <FaSearch />
      </div>
    </div>
  );
}
