import React from "react";
import useTodoItem from "../../hooks/useTodoItem";
import TrashIcon from "../../assets/icons/TrashIcon";

interface DeleteButtonProps {
  id: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ id }) => {
  
  const { removeItem } = useTodoItem();

  return (
    <button
      className="btn btn-danger btn-sm"
      onClick={() => {
        removeItem(id);
      }}
    >
      <TrashIcon />
    </button>
  );
};

export default DeleteButton;
