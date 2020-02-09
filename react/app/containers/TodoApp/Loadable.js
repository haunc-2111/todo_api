/**
 *
 * Asynchronously loads the component for TodoApp
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
