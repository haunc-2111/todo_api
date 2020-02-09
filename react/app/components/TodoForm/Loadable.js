/**
 *
 * Asynchronously loads the component for TodoForm
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
