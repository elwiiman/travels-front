import React, { useContext } from "react";
import { AppContext } from "../../AppContext";

const AssistantTable = () => {
  const { assistants } = useContext(AppContext);
  let headersInRow = assistants.map((assistant, index) => {
    if (index === 0) return "Responsable";
    else return `Acompañante ${index}`;
  });
  let data = assistants.map((assistant, index) => {
    return { roleOfAssistant: headersInRow[index], name: assistant };
  });

  let treatedData = Object.values(data).map(aData => {
    let insideData = Object.values(aData);
    return insideData.map(deepData => {
      return deepData;
    });
  });

  return (
    <table className="uk-table uk-table-striped uk-table-justify">
      <thead>
        <tr>
          <th>Asistente</th>
          <th>Nombre</th>
        </tr>
      </thead>
      <tbody>
        {treatedData.map((data, index) => {
          return (
            <tr key={index}>
              {data.map((aData, index) => {
                return <td key={index}>{aData}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default AssistantTable;
