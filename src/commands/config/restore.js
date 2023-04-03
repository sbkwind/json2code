import { restoreConfig } from '../../configStore/index.js';

const name = 'restore';

function action() {
  restoreConfig();
}

export default {
  name,
  action,
};
