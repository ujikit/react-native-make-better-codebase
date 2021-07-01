import { combineReducers } from 'redux';

//please short from a to z if adding new reducer
import account from './account';
import complaint from './complaint';
import feed from './feed';
import global from './global';
import dashboard from './dashboard';
import handover from './handover';
import maintenance from './maintenance';
import notification from './notification';
import persist from './persist';
import version from './version';
import water from './water';

export default combineReducers({
  account,
  complaint,
  feed,
  global,
  dashboard,
  handover,
  maintenance,
  notification,
  persist,
  version,
  water,
});
