import React, { useRef, useMemo, useEffect } from "react";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { AgGridReact } from "@ag-grid-community/react";
import "./styles.css";
import "@ag-grid-community/core/dist/styles/ag-grid.css";
import "@ag-grid-community/core/dist/styles/ag-theme-alpine.css";

const data = require("./data.json");

export default function App() {
  const gridRef = useRef();

  const columnDefs = useMemo(
    () => [
      { field: "athlete", tooltipField: "athlete" },
      { field: "age", tooltipField: "athlete" },
      { field: "country", tooltipField: "athlete" },
      { field: "year" }
    ],
    []
  );

  const defaultColDef = useMemo(
    () => ({
      resizable: true,
      sortable: true,
      filter: true,
      flex: 1
    }),
    []
  );

  useEffect(() => {
    console.log(gridRef.current.api);
  }, []);

  return (
    <div className="top-level">
      <AgGridReact
        reactUI={true}
        ref={gridRef}
        className="ag-theme-alpine"
        animateRows="true"
        modules={[ClientSideRowModelModule]}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowData={data}
      />
    </div>
  );
}
