
import { Application } from 'egg';

/**
 * @param {Egg.Application} app - egg application
 */
export default (application: Application) => {
  const { router, controller } = application;
  router.get('(/.+)?', controller.app.app.index);
};