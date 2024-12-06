//src/app/components/buttons/AddItemButton.tsx
import React from "react";

interface AddItemButtonProps {
  label: string;
  onClick: () => void;
}

const AddItemButton: React.FC<AddItemButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
    >
      {label}
    </button>
  );
};

export default AddItemButton;
