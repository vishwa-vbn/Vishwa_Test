import React from 'react';
import './DataTable.css';

const DataTable = ({ data }) => {
  return (
    <div className="table-container">
      <div className="table-header">
        <div className="header-cell">Problem/Diagnosis</div>
        <div className="header-cell">Description</div>
        <div className="header-cell">Status</div>
      </div>
      <div className="table-body">
        {data?.map((row, index) => (
          <div key={index} className="table-row">
            <div className="table-cell">{row.name}</div>
            <div className="table-cell">{row.description}</div>
            <div className="table-cell">{row.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataTable;
