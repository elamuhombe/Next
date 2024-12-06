//src/app/components/buttons/AddItemButton.tsx
import { ButtonProps } from '@/app/types';
import React from 'react';


const AddItemButton: React.FC<ButtonProps> = ({ onClick, label="AddItem", className }) => {
  return (
    <button
    
      onClick={onClick}
      className={`add-item-btn ${className}`} 
    >{label}</button>
  );
};

export default AddItemButton;
