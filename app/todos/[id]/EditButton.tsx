"use client";

function EditButton() {
  const handleEdit = () => {
    alert("Edit");
  };

  return <button onClick={handleEdit}>Edit</button>;
}

export default EditButton;
