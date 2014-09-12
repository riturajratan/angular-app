'use strict';
/**
 * Truncate Filter
 * @Param text
 * @Param length, default is 50
 * @Param end, default is "..."
 * @return string
 */
 angular.module('angularAppApp', []).
 filter('truncate', function () {
        return function (text, length, end) {
            if (isNaN(length))
               {
                length = 50;
               }
            if (end === undefined)
               {
                end = '...';
               }
            if (text.length <= length || text.length - end.length <= length) {
                return text;
            }
            else {
                return String(text).substring(0, length-end.length) + end;
            }

        };
    });