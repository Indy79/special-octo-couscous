import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';

import Spinner from './components/Spinner';

const Application = lazy(() => import('./components/Application'));

ReactDOM.unstable_createRoot(document.getElementById('root')).render(
    <Suspense fallback={<Spinner />}>
        <Application />
    </Suspense>
);
