import React from 'react';
import * as T from './type';
import * as U from './utils';

const init = (props: {config:T.Config}):JSX.Element => {
  const { config } = props;
  const { reports } = config;
  // Create the connector object
  const myConnector = tableau.makeConnector();

  // Define the schema
  myConnector.getSchema = function(schemaCallback:(tableInfo: tableau.TableInfo[]) => void) {
    const r:T.Schema[] = reports.map(r => U.schemaFromReport(r));

    schemaCallback(r);
  };

  // Download the data
  myConnector.getData = function(table:tableau.Table, doneCallback:tableau.DataDoneCallback) {
    reports.map(r => {
      if (table.tableInfo.id === r.id) {
        const options:RequestInit = {
          method: r.method
        };

        fetch(r.url, options).then((resp:Response) => {
          resp.json().then((jResponse:T.ServiceResponse) => {
            const tableData = U.mapArrayOntoTableauStruct(jResponse, r.columns);
            table.appendRows(tableData);
            doneCallback();
          })
        })
      }

      return true;
    })
  };

  tableau.registerConnector(myConnector);

  const exec = ():void => {
    tableau.connectionName = config.name; // This will be the data source name in Tableau
    tableau.submit(); // This sends the connector object to Tableau
  }

  // execute exec after one second
  setTimeout(function(){ exec() }, 1000);

  return (<>
    <p>This page should disappear once data is loaded, if (and only if) this does not work click on the button below</p>
    <button id="submitButton" onClick={exec}>Get data and connect</button>
  </>);
}

export default init;