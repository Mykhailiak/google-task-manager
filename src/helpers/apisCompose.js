/**
 * Compose load api`s functions
 * 
 * @param {Object} {
 *   apis = [],
 *   load,
 *   resolve,
 * } 
 * @returns {Function}
 */
export const compose = ({
  apis = [],
  load,
  resolve,
}) => {
  return apis.reduceRight((result, current) => {
    return () => load(current.api, current.version, result);
  }, () => resolve());
};
