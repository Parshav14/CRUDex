import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { getItems, createItem, updateItem, deleteItem } from "@/services/api";


const ItemTable = () => {
  const [data, setData] = useState([]); 


  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    const result = await getItems(); 
    setData(result.data);
  };

 
  const handleRowAdd = async (newData, resolve) => {
    await createItem(newData); 
    fetchData();
    resolve();
  };


  const handleRowUpdate = async (newData, oldData, resolve) => {
    await updateItem(oldData._id, newData);
    fetchData();
    resolve();
  };

  
  const handleRowDelete = async (oldData, resolve) => {
    await deleteItem(oldData._id);
    fetchData();
    resolve(); 
  };

 
  return (
    <MaterialTable
      title="Items" 
      columns={[
        { title: "Name", field: "name" },
        { title: "Description", field: "description" }, 
      ]}
      data={data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => handleRowAdd(newData, resolve)),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => handleRowUpdate(newData, oldData, resolve)),
        onRowDelete: (oldData) =>
          new Promise((resolve) => handleRowDelete(oldData, resolve)),
      }}
      options={{
        paging: true, 
        pageSize: 10,
      }}
    />
  );
};

export default ItemTable; 
