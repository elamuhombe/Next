//src/app/components/buttons/EditButton.tsx
import { ButtonProps } from '@/app/types';
import React from 'react';


const EditItemButton: React.FC<ButtonProps> = ({ onClick, label="EditItem", className }) => {
  return (
    <button
    
      onClick={onClick}
      className={`add-item-btn ${className}`} 
    >{label}</button>
  );
};

export default EditItemButton;
