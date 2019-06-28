import app from './app';

import config from '../config';

app.listen(config.PORT, () => {
  console.log(`App listening to ${config.PORT}....`);
  console.log('Press Ctrl+C to quit.');
});
