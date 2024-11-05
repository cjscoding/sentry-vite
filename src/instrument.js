import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: 'https://90a1cac82e85cfcc1eca3cd7442e542f@o4508199426129920.ingest.us.sentry.io/4508199471284224',
  release: 'sentry-react-vite@0.0.0',
  debug: true,
  initialScope: {
    tags: { 'my-tag': 'my value' },
    user: { id: 42, email: 'john.doe@example.com' },
  },
  beforeSend(event) {
    console.log('beforeSend: ', event);
    return event;
  },
});
