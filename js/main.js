import {onUploadButtonClick} from './form.js';
import {getData} from './api.js';
import { showSuccess, showFail } from './message.js';
import {initAlertOpen} from './sending_data.js';

getData();
onUploadButtonClick();

initAlertOpen(showSuccess, showFail);
