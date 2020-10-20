/* eslint-disable no-console */

import Daemon from './Daemon';
import Magician from './Magician';

try {
  const magician = new Magician('mag');
  console.log(magician);
  console.log(magician.stonedAction, magician.attackAction);
  magician.stonedAction = true;
  magician.attackAction = 2;
  console.log(magician.stonedAction, magician.attackAction);
  magician.stonedAction = false;
  magician.attackAction = 2;
  console.log(magician.stonedAction, magician.attackAction);

  const daemon = new Daemon('demon');
  console.log(daemon);
  daemon.stonedAction = false;
  daemon.attackAction = 6;
  console.log(daemon.stonedAction, daemon.attackAction);
  daemon.stonedAction = true;
  daemon.attackAction = 3;
  console.log(daemon.stonedAction, daemon.attackAction);
  daemon.attackAction = -4;
} catch (error) {
  console.error(error.message);
}
