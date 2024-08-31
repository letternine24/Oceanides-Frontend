import React from "react";
import "./History.css";

const History: React.FC = () => {
  return (
    <div className="history card">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">History</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={3}>No History</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default History;
