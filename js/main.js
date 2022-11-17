import './util.js';
import './data.js';
import './form.js';
import './photo-editor.js';
import './picture.js';
import './slider.js';
import './server.js';

import {getData} from './server.js';
import { successDataSend, failDataSend } from './message.js';
import {setFormSubmit} from './form.js';

getData();

setFormSubmit(successDataSend, failDataSend);
