export /**
 * Compose load api`s functions
 * 
 * @param {Object} {
 *   apis = [],
 *   load,
 *   resolve,
 * } 
 * @returns {Function}
 */
const compose = ({
  apis = [],
  load,
  resolve,
}) => {
  return apis.reduceRight((result, current) => {
    return () => load(current.api, current.version, result);
  }, () => resolve());
};
