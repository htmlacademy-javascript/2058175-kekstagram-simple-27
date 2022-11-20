import './form.js';
import {getData} from './api.js';
import { showSuccess, showFail } from './message.js';
import {setFormSubmit} from './sending_data.js';

getData();

setFormSubmit(showSuccess, showFail);
