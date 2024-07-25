import { setupWorker } from 'msw/browser';
import { getUserAPIMock } from './api/users.msw';

const worker = setupWorker(...getUserAPIMock());

worker.start();
