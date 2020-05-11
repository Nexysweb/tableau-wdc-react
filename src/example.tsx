import React from 'react';

import { T, Init } from './lib';

// start parameters definition
const columns:string[] = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];

const prefix = '/tableau-wdc-react'; // note this is required for GH pages
const url = prefix + '/data.json'

const report1:T.Report = {
  id: 'dataFeed',
  alias: 'dataFeedAlias',
  url,
  method: 'GET',
  columns
};

const reports:T.Report[] = [report1];
const config:T.Config = {name: 'My Data Feed', reports};
// end parameters defintion

export default () => <Init config={config}/>
