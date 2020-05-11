import React from 'react';

import { T, Init } from './lib';

// start parameters definition
const columns:string[] = ["one", "two", "three", "four", "five", "six", "seven"];

const report1:T.Report = {
  id: 'dataFeed',
  alias: 'dataFeedAlias',
  url: '/data.json',
  method: 'GET',
  columns
};

const reports:T.Report[] = [report1];
const config:T.Config = {name: 'My Data Feed', reports};
// end parameters defintion

export default () => <Init config={config}/>
