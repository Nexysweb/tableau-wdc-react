import * as U from './utils';

var tableau;

test('strSanitize', () => {
  expect(U.strSanitize('my attribute')).toEqual('my_attribute')
})