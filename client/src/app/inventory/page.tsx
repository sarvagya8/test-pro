"use client";

import { useGetProductsQuery } from "@/state/api";
import Header from "@/app/(components)/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { products } from "@/state/sample";
import { formatNumber } from "@/utils/formatAmount";

const columns: GridColDef[] = [
  // { field: "productId", headerName: "ID", width: 90 },
  { field: "name", headerName: "Product Name", width: 200 },
  {
    field: "cost",
    headerName: "Cost",
    width: 110,
    type: "number",
    valueGetter: (value, row) => Number(row.cost),
  },
  {
    field: "mrp",
    headerName: "MRP",
    width: 110,
    type: "number",
    valueGetter: (value, row) => Number(row.mrp),
  },
  {
    field: "",
    headerName: "Margin",
    width: 110,
    type: "number",
    valueGetter: (value, row) => Number(row.mrp) - Number(row.cost),
  },
  // {
  //   field: "rating",
  //   headerName: "Rating",
  //   width: 110,
  //   type: "number",
  //   valueGetter: (value, row) => (row.rating ? row.rating : "N/A"),
  // },
  {
    field: "quantity",
    headerName: "Stock Quantity",
    width: 150,
    type: "number",
    valueGetter: (value, row) => formatNumber(Math.round(Number(row.quantity) * 1000))
  },
  {
    field: "date",
    headerName: "Date",
    // width: 150,
    type: "number",
  },
  {
    field: "supplierName",
    headerName: "Provider Name",
    // width: 150,
    // type: "number",
  },
];

const Inventory = () => {
  // const { data: products, isError, isLoading } = useGetProductsQuery();

  // if (isLoading) {
  //   return <div className="py-4">Loading...</div>;
  // }

  // if (isError || !products) {
  //   return (
  //     <div className="text-center text-red-500 py-4">
  //       Failed to fetch products
  //     </div>
  //   );
  // }

  return (
    <div className="flex flex-col">
      <Header name="Inventory" />
      <DataGrid
        rows={products}
        columns={columns}
        getRowId={(row) => row.name}
        // checkboxSelection
        className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
      />
    </div>
  );
};

export default Inventory;
