import baseIteratee from '../internal/baseIteratee';
import baseUniqBy from '../internal/baseUniqBy';

/**
 * This method is like `_.uniq` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * uniqueness is computed. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function|Object|string} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniqBy([1, 2.5, 1.5, 2], Math.floor);
 * // => [1, 2.5]
 *
 * // using the `_.property` callback shorthand
 * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 1 }, { 'x': 2 }]
 */
function uniqBy(array, iteratee) {
  return (array && array.length)
    ? baseUniqBy(array, baseIteratee(iteratee))
    : [];
}

export default uniqBy;
