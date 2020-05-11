// index.ts
import * as T from './type';
//import tableau from './tableau.d';

// Read a page's GET URL variables and return them as an associative array.
export const getParameterByName = (name:string, url?:string):string |null => {
  if (!url) url = window.location.href;
  name = name.replace(/[[]]/g, '\\$&');//name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// tableau needs "well-formatted" object keys. This function helps turn any key/string into a tableau-ok object key
export const strSanitize = (s:string, i?:number | string):string => {
  if (s !== ' ' && s !== '') {
    return s.replace(/[^\w\d_]/g, '_');
    //.replace(/ /g, '_').replace('/test', '_').replace('?', '_').replace('\'', '_').replace('(', '_').replace(')', '_');
  }

  return 'undefined_' + i;
}

// map the output of the array strcuture onto a tableau compatible structure
// param resp: response of the ajax call (which is an array of arrays)
// pararm colLabel: the headers pre defined (note that this is also the first row of the rerponse)
export const mapArrayOntoTableauStruct = ([_, content]:T.ServiceResponse, colLabel:string[]):T.Value[][] => {
  // init output table
  const tableData:T.Value[][] = [];

  // Iterate over the array
  content.map(row => {
    const c:{[k:string]:T.Value} = {};

    colLabel.map((headerKey:string, j:number) => {
      const v:T.Value = row[j];
      c[strSanitize(headerKey, j)] = v;
      return true;
    })

    tableData.push(c as unknown as T.Value[]); // casting here otherwise does not work with TS definitions
    return true;
  });

  return tableData;
}

export const tableauColumnsFromArrayHeaders = (colLabel:string[]):T.SchemaColumn[] => colLabel.map((n:string, i:number) => {
  return {
    id: strSanitize(n, i),
    alias: n,
    dataType: tableau.dataTypeEnum.string
  }
});

export const schemaFromReport = (report:T.Report):T.Schema => ({
  id: report.id,
  alias: report.alias,
  columns: tableauColumnsFromArrayHeaders(report.columns)
});
