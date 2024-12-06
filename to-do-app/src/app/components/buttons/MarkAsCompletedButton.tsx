//src/app/components/buttons/MarkAsCompletedButton.tsx
import { ButtonProps } from "@/app/types";
import React from "react";

const MarkAsCompletedButton: React.FC<ButtonProps> = ({
  onClick,
  label = "MarkAsCompleted",
  className,
}) => {
  return (
    <button onClick={onClick} className={`add-item-btn ${className}`}>
      {label}
    </button>
  );
};

export default MarkAsCompletedButton;
