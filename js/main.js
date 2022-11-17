import './util.js';
import './data.js';
import './form.js';
import './photo-editor.js';
import './picture.js';
import './slider.js';

import {getData} from './api.js';
import { successDataSend, failDataSend } from './message.js';
import {setFormSubmit} from './sending_data.js';

getData();

setFormSubmit(successDataSend, failDataSend);
