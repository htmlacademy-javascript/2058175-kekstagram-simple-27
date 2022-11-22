import {onUploadButtonClick} from './form.js';
import {getData} from './api.js';
import { showSuccess, showFail } from './message.js';
import {initListenerAlertOpen} from './init-listener.js';

getData();
onUploadButtonClick();

initListenerAlertOpen(showSuccess, showFail);
