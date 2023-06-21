import EventBus from './event-bus';

export function initVueErrorHandler(app) {
  app.config.errorHandler = function (error) {
      // eslint-disable-next-line no-console
    console.error('Vue.config.errorHandler', error);
    EventBus.$emit('unhandledError', error);
  }
}

window.addEventListener('error', function (message, source, lineno, colno, error) {
  if (message instanceof ErrorEvent) {
    error = message;
  }

  if (handleKnownError(error)) {
    return true;
  }

  // eslint-disable-next-line no-console
  console.error('window.error', error);
  EventBus.$emit('unhandledError', error);
});

window.addEventListener('unhandledrejection', function (promiseRejectionEvent) {  
  const error = promiseRejectionEvent;
  // eslint-disable-next-line no-console
  console.error('window.unhandledrejection', error.reason);
  EventBus.$emit('unhandledError', error.reason) ;
});


export async function getErrorMessage(error) {
  if (typeof (error) == 'string') {
    return error;
  }

  return error.message;
}