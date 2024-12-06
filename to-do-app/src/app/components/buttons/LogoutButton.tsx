//src/app/components/buttons/LogoutButton.tsx
import { ButtonProps } from '@/app/types';
import React from 'react';


const LogoutButton: React.FC<ButtonProps> = ({ onClick, label="Logout", className }) => {
  return (
    <button
    
      onClick={onClick}
      className={`add-item-btn ${className}`} 
    >{label}</button>
  );
};

export default LogoutButton;

