//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var moment = Package['momentjs:moment'].moment;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/tsega_bootstrap3-datetimepicker/lib/js/bootstrap-datetimepicker.js                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*! version : 4.17.37                                                                                                  // 1
 =========================================================                                                             // 2
 bootstrap-datetimejs                                                                                                  // 3
 https://github.com/Eonasdan/bootstrap-datetimepicker                                                                  // 4
 Copyright (c) 2015 Jonathan Peterson                                                                                  // 5
 =========================================================                                                             // 6
 */                                                                                                                    // 7
/*                                                                                                                     // 8
 The MIT License (MIT)                                                                                                 // 9
                                                                                                                       // 10
 Copyright (c) 2015 Jonathan Peterson                                                                                  // 11
                                                                                                                       // 12
 Permission is hereby granted, free of charge, to any person obtaining a copy                                          // 13
 of this software and associated documentation files (the "Software"), to deal                                         // 14
 in the Software without restriction, including without limitation the rights                                          // 15
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell                                             // 16
 copies of the Software, and to permit persons to whom the Software is                                                 // 17
 furnished to do so, subject to the following conditions:                                                              // 18
                                                                                                                       // 19
 The above copyright notice and this permission notice shall be included in                                            // 20
 all copies or substantial portions of the Software.                                                                   // 21
                                                                                                                       // 22
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR                                            // 23
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,                                              // 24
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE                                           // 25
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER                                                // 26
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,                                         // 27
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN                                             // 28
 THE SOFTWARE.                                                                                                         // 29
 */                                                                                                                    // 30
/*global define:false */                                                                                               // 31
/*global exports:false */                                                                                              // 32
/*global require:false */                                                                                              // 33
/*global jQuery:false */                                                                                               // 34
/*global moment:false */                                                                                               // 35
(function (factory) {                                                                                                  // 36
    'use strict';                                                                                                      // 37
    if (typeof define === 'function' && define.amd) {                                                                  // 38
        // AMD is used - Register as an anonymous module.                                                              // 39
        define(['jquery', 'moment'], factory);                                                                         // 40
    } else if (typeof exports === 'object') {                                                                          // 41
        factory(require('jquery'), require('moment'));                                                                 // 42
    } else {                                                                                                           // 43
        // Neither AMD nor CommonJS used. Use global variables.                                                        // 44
        if (typeof jQuery === 'undefined') {                                                                           // 45
            throw 'bootstrap-datetimepicker requires jQuery to be loaded first';                                       // 46
        }                                                                                                              // 47
        if (typeof moment === 'undefined') {                                                                           // 48
            throw 'bootstrap-datetimepicker requires Moment.js to be loaded first';                                    // 49
        }                                                                                                              // 50
        factory(jQuery, moment);                                                                                       // 51
    }                                                                                                                  // 52
}(function ($, moment) {                                                                                               // 53
    'use strict';                                                                                                      // 54
    if (!moment) {                                                                                                     // 55
        throw new Error('bootstrap-datetimepicker requires Moment.js to be loaded first');                             // 56
    }                                                                                                                  // 57
                                                                                                                       // 58
    var dateTimePicker = function (element, options) {                                                                 // 59
        var picker = {},                                                                                               // 60
            date,                                                                                                      // 61
            viewDate,                                                                                                  // 62
            unset = true,                                                                                              // 63
            input,                                                                                                     // 64
            component = false,                                                                                         // 65
            widget = false,                                                                                            // 66
            use24Hours,                                                                                                // 67
            minViewModeNumber = 0,                                                                                     // 68
            actualFormat,                                                                                              // 69
            parseFormats,                                                                                              // 70
            currentViewMode,                                                                                           // 71
            datePickerModes = [                                                                                        // 72
                {                                                                                                      // 73
                    clsName: 'days',                                                                                   // 74
                    navFnc: 'M',                                                                                       // 75
                    navStep: 1                                                                                         // 76
                },                                                                                                     // 77
                {                                                                                                      // 78
                    clsName: 'months',                                                                                 // 79
                    navFnc: 'y',                                                                                       // 80
                    navStep: 1                                                                                         // 81
                },                                                                                                     // 82
                {                                                                                                      // 83
                    clsName: 'years',                                                                                  // 84
                    navFnc: 'y',                                                                                       // 85
                    navStep: 10                                                                                        // 86
                },                                                                                                     // 87
                {                                                                                                      // 88
                    clsName: 'decades',                                                                                // 89
                    navFnc: 'y',                                                                                       // 90
                    navStep: 100                                                                                       // 91
                }                                                                                                      // 92
            ],                                                                                                         // 93
            viewModes = ['days', 'months', 'years', 'decades'],                                                        // 94
            verticalModes = ['top', 'bottom', 'auto'],                                                                 // 95
            horizontalModes = ['left', 'right', 'auto'],                                                               // 96
            toolbarPlacements = ['default', 'top', 'bottom'],                                                          // 97
            keyMap = {                                                                                                 // 98
                'up': 38,                                                                                              // 99
                38: 'up',                                                                                              // 100
                'down': 40,                                                                                            // 101
                40: 'down',                                                                                            // 102
                'left': 37,                                                                                            // 103
                37: 'left',                                                                                            // 104
                'right': 39,                                                                                           // 105
                39: 'right',                                                                                           // 106
                'tab': 9,                                                                                              // 107
                9: 'tab',                                                                                              // 108
                'escape': 27,                                                                                          // 109
                27: 'escape',                                                                                          // 110
                'enter': 13,                                                                                           // 111
                13: 'enter',                                                                                           // 112
                'pageUp': 33,                                                                                          // 113
                33: 'pageUp',                                                                                          // 114
                'pageDown': 34,                                                                                        // 115
                34: 'pageDown',                                                                                        // 116
                'shift': 16,                                                                                           // 117
                16: 'shift',                                                                                           // 118
                'control': 17,                                                                                         // 119
                17: 'control',                                                                                         // 120
                'space': 32,                                                                                           // 121
                32: 'space',                                                                                           // 122
                't': 84,                                                                                               // 123
                84: 't',                                                                                               // 124
                'delete': 46,                                                                                          // 125
                46: 'delete'                                                                                           // 126
            },                                                                                                         // 127
            keyState = {},                                                                                             // 128
                                                                                                                       // 129
            /********************************************************************************                          // 130
             *                                                                                                         // 131
             * Private functions                                                                                       // 132
             *                                                                                                         // 133
             ********************************************************************************/                         // 134
            getMoment = function (d) {                                                                                 // 135
                var tzEnabled = false,                                                                                 // 136
                    returnMoment,                                                                                      // 137
                    currentZoneOffset,                                                                                 // 138
                    incomingZoneOffset,                                                                                // 139
                    timeZoneIndicator,                                                                                 // 140
                    dateWithTimeZoneInfo;                                                                              // 141
                                                                                                                       // 142
                if (moment.tz !== undefined && options.timeZone !== undefined && options.timeZone !== null && options.timeZone !== '') {
                    tzEnabled = true;                                                                                  // 144
                }                                                                                                      // 145
                if (d === undefined || d === null) {                                                                   // 146
                    if (tzEnabled) {                                                                                   // 147
                        returnMoment = moment().tz(options.timeZone).startOf('d');                                     // 148
                    } else {                                                                                           // 149
                        returnMoment = moment().startOf('d');                                                          // 150
                    }                                                                                                  // 151
                } else {                                                                                               // 152
                    if (tzEnabled) {                                                                                   // 153
                        currentZoneOffset = moment().tz(options.timeZone).utcOffset();                                 // 154
                        incomingZoneOffset = moment(d, parseFormats, options.useStrict).utcOffset();                   // 155
                        if (incomingZoneOffset !== currentZoneOffset) {                                                // 156
                            timeZoneIndicator = moment().tz(options.timeZone).format('Z');                             // 157
                            dateWithTimeZoneInfo = moment(d, parseFormats, options.useStrict).format('YYYY-MM-DD[T]HH:mm:ss') + timeZoneIndicator;
                            returnMoment = moment(dateWithTimeZoneInfo, parseFormats, options.useStrict).tz(options.timeZone);
                        } else {                                                                                       // 160
                            returnMoment = moment(d, parseFormats, options.useStrict).tz(options.timeZone);            // 161
                        }                                                                                              // 162
                    } else {                                                                                           // 163
                        returnMoment = moment(d, parseFormats, options.useStrict);                                     // 164
                    }                                                                                                  // 165
                }                                                                                                      // 166
                return returnMoment;                                                                                   // 167
            },                                                                                                         // 168
            isEnabled = function (granularity) {                                                                       // 169
                if (typeof granularity !== 'string' || granularity.length > 1) {                                       // 170
                    throw new TypeError('isEnabled expects a single character string parameter');                      // 171
                }                                                                                                      // 172
                switch (granularity) {                                                                                 // 173
                    case 'y':                                                                                          // 174
                        return actualFormat.indexOf('Y') !== -1;                                                       // 175
                    case 'M':                                                                                          // 176
                        return actualFormat.indexOf('M') !== -1;                                                       // 177
                    case 'd':                                                                                          // 178
                        return actualFormat.toLowerCase().indexOf('d') !== -1;                                         // 179
                    case 'h':                                                                                          // 180
                    case 'H':                                                                                          // 181
                        return actualFormat.toLowerCase().indexOf('h') !== -1;                                         // 182
                    case 'm':                                                                                          // 183
                        return actualFormat.indexOf('m') !== -1;                                                       // 184
                    case 's':                                                                                          // 185
                        return actualFormat.indexOf('s') !== -1;                                                       // 186
                    default:                                                                                           // 187
                        return false;                                                                                  // 188
                }                                                                                                      // 189
            },                                                                                                         // 190
            hasTime = function () {                                                                                    // 191
                return (isEnabled('h') || isEnabled('m') || isEnabled('s'));                                           // 192
            },                                                                                                         // 193
                                                                                                                       // 194
            hasDate = function () {                                                                                    // 195
                return (isEnabled('y') || isEnabled('M') || isEnabled('d'));                                           // 196
            },                                                                                                         // 197
                                                                                                                       // 198
            getDatePickerTemplate = function () {                                                                      // 199
                var headTemplate = $('<thead>')                                                                        // 200
                        .append($('<tr>')                                                                              // 201
                            .append($('<th>').addClass('prev').attr('data-action', 'previous')                         // 202
                                .append($('<span>').addClass(options.icons.previous))                                  // 203
                                )                                                                                      // 204
                            .append($('<th>').addClass('picker-switch').attr('data-action', 'pickerSwitch').attr('colspan', (options.calendarWeeks ? '6' : '5')))
                            .append($('<th>').addClass('next').attr('data-action', 'next')                             // 206
                                .append($('<span>').addClass(options.icons.next))                                      // 207
                                )                                                                                      // 208
                            ),                                                                                         // 209
                    contTemplate = $('<tbody>')                                                                        // 210
                        .append($('<tr>')                                                                              // 211
                            .append($('<td>').attr('colspan', (options.calendarWeeks ? '8' : '7')))                    // 212
                            );                                                                                         // 213
                                                                                                                       // 214
                return [                                                                                               // 215
                    $('<div>').addClass('datepicker-days')                                                             // 216
                        .append($('<table>').addClass('table-condensed')                                               // 217
                            .append(headTemplate)                                                                      // 218
                            .append($('<tbody>'))                                                                      // 219
                            ),                                                                                         // 220
                    $('<div>').addClass('datepicker-months')                                                           // 221
                        .append($('<table>').addClass('table-condensed')                                               // 222
                            .append(headTemplate.clone())                                                              // 223
                            .append(contTemplate.clone())                                                              // 224
                            ),                                                                                         // 225
                    $('<div>').addClass('datepicker-years')                                                            // 226
                        .append($('<table>').addClass('table-condensed')                                               // 227
                            .append(headTemplate.clone())                                                              // 228
                            .append(contTemplate.clone())                                                              // 229
                            ),                                                                                         // 230
                    $('<div>').addClass('datepicker-decades')                                                          // 231
                        .append($('<table>').addClass('table-condensed')                                               // 232
                            .append(headTemplate.clone())                                                              // 233
                            .append(contTemplate.clone())                                                              // 234
                            )                                                                                          // 235
                ];                                                                                                     // 236
            },                                                                                                         // 237
                                                                                                                       // 238
            getTimePickerMainTemplate = function () {                                                                  // 239
                var topRow = $('<tr>'),                                                                                // 240
                    middleRow = $('<tr>'),                                                                             // 241
                    bottomRow = $('<tr>');                                                                             // 242
                                                                                                                       // 243
                if (isEnabled('h')) {                                                                                  // 244
                    topRow.append($('<td>')                                                                            // 245
                        .append($('<a>').attr({href: '#', tabindex: '-1', 'title': options.tooltips.incrementHour}).addClass('btn').attr('data-action', 'incrementHours')
                            .append($('<span>').addClass(options.icons.up))));                                         // 247
                    middleRow.append($('<td>')                                                                         // 248
                        .append($('<span>').addClass('timepicker-hour').attr({'data-time-component':'hours', 'title': options.tooltips.pickHour}).attr('data-action', 'showHours')));
                    bottomRow.append($('<td>')                                                                         // 250
                        .append($('<a>').attr({href: '#', tabindex: '-1', 'title': options.tooltips.decrementHour}).addClass('btn').attr('data-action', 'decrementHours')
                            .append($('<span>').addClass(options.icons.down))));                                       // 252
                }                                                                                                      // 253
                if (isEnabled('m')) {                                                                                  // 254
                    if (isEnabled('h')) {                                                                              // 255
                        topRow.append($('<td>').addClass('separator'));                                                // 256
                        middleRow.append($('<td>').addClass('separator').html(':'));                                   // 257
                        bottomRow.append($('<td>').addClass('separator'));                                             // 258
                    }                                                                                                  // 259
                    topRow.append($('<td>')                                                                            // 260
                        .append($('<a>').attr({href: '#', tabindex: '-1', 'title': options.tooltips.incrementMinute}).addClass('btn').attr('data-action', 'incrementMinutes')
                            .append($('<span>').addClass(options.icons.up))));                                         // 262
                    middleRow.append($('<td>')                                                                         // 263
                        .append($('<span>').addClass('timepicker-minute').attr({'data-time-component': 'minutes', 'title': options.tooltips.pickMinute}).attr('data-action', 'showMinutes')));
                    bottomRow.append($('<td>')                                                                         // 265
                        .append($('<a>').attr({href: '#', tabindex: '-1', 'title': options.tooltips.decrementMinute}).addClass('btn').attr('data-action', 'decrementMinutes')
                            .append($('<span>').addClass(options.icons.down))));                                       // 267
                }                                                                                                      // 268
                if (isEnabled('s')) {                                                                                  // 269
                    if (isEnabled('m')) {                                                                              // 270
                        topRow.append($('<td>').addClass('separator'));                                                // 271
                        middleRow.append($('<td>').addClass('separator').html(':'));                                   // 272
                        bottomRow.append($('<td>').addClass('separator'));                                             // 273
                    }                                                                                                  // 274
                    topRow.append($('<td>')                                                                            // 275
                        .append($('<a>').attr({href: '#', tabindex: '-1', 'title': options.tooltips.incrementSecond}).addClass('btn').attr('data-action', 'incrementSeconds')
                            .append($('<span>').addClass(options.icons.up))));                                         // 277
                    middleRow.append($('<td>')                                                                         // 278
                        .append($('<span>').addClass('timepicker-second').attr({'data-time-component': 'seconds', 'title': options.tooltips.pickSecond}).attr('data-action', 'showSeconds')));
                    bottomRow.append($('<td>')                                                                         // 280
                        .append($('<a>').attr({href: '#', tabindex: '-1', 'title': options.tooltips.decrementSecond}).addClass('btn').attr('data-action', 'decrementSeconds')
                            .append($('<span>').addClass(options.icons.down))));                                       // 282
                }                                                                                                      // 283
                                                                                                                       // 284
                if (!use24Hours) {                                                                                     // 285
                    topRow.append($('<td>').addClass('separator'));                                                    // 286
                    middleRow.append($('<td>')                                                                         // 287
                        .append($('<button>').addClass('btn btn-primary').attr({'data-action': 'togglePeriod', tabindex: '-1', 'title': options.tooltips.togglePeriod})));
                    bottomRow.append($('<td>').addClass('separator'));                                                 // 289
                }                                                                                                      // 290
                                                                                                                       // 291
                return $('<div>').addClass('timepicker-picker')                                                        // 292
                    .append($('<table>').addClass('table-condensed')                                                   // 293
                        .append([topRow, middleRow, bottomRow]));                                                      // 294
            },                                                                                                         // 295
                                                                                                                       // 296
            getTimePickerTemplate = function () {                                                                      // 297
                var hoursView = $('<div>').addClass('timepicker-hours')                                                // 298
                        .append($('<table>').addClass('table-condensed')),                                             // 299
                    minutesView = $('<div>').addClass('timepicker-minutes')                                            // 300
                        .append($('<table>').addClass('table-condensed')),                                             // 301
                    secondsView = $('<div>').addClass('timepicker-seconds')                                            // 302
                        .append($('<table>').addClass('table-condensed')),                                             // 303
                    ret = [getTimePickerMainTemplate()];                                                               // 304
                                                                                                                       // 305
                if (isEnabled('h')) {                                                                                  // 306
                    ret.push(hoursView);                                                                               // 307
                }                                                                                                      // 308
                if (isEnabled('m')) {                                                                                  // 309
                    ret.push(minutesView);                                                                             // 310
                }                                                                                                      // 311
                if (isEnabled('s')) {                                                                                  // 312
                    ret.push(secondsView);                                                                             // 313
                }                                                                                                      // 314
                                                                                                                       // 315
                return ret;                                                                                            // 316
            },                                                                                                         // 317
                                                                                                                       // 318
            getToolbar = function () {                                                                                 // 319
                var row = [];                                                                                          // 320
                if (options.showTodayButton) {                                                                         // 321
                    row.push($('<td>').append($('<a>').attr({'data-action':'today', 'title': options.tooltips.today}).append($('<span>').addClass(options.icons.today))));
                }                                                                                                      // 323
                if (!options.sideBySide && hasDate() && hasTime()) {                                                   // 324
                    row.push($('<td>').append($('<a>').attr({'data-action':'togglePicker', 'title': options.tooltips.selectTime}).append($('<span>').addClass(options.icons.time))));
                }                                                                                                      // 326
                if (options.showClear) {                                                                               // 327
                    row.push($('<td>').append($('<a>').attr({'data-action':'clear', 'title': options.tooltips.clear}).append($('<span>').addClass(options.icons.clear))));
                }                                                                                                      // 329
                if (options.showClose) {                                                                               // 330
                    row.push($('<td>').append($('<a>').attr({'data-action':'close', 'title': options.tooltips.close}).append($('<span>').addClass(options.icons.close))));
                }                                                                                                      // 332
                return $('<table>').addClass('table-condensed').append($('<tbody>').append($('<tr>').append(row)));    // 333
            },                                                                                                         // 334
                                                                                                                       // 335
            getTemplate = function () {                                                                                // 336
                var template = $('<div>').addClass('bootstrap-datetimepicker-widget dropdown-menu'),                   // 337
                    dateView = $('<div>').addClass('datepicker').append(getDatePickerTemplate()),                      // 338
                    timeView = $('<div>').addClass('timepicker').append(getTimePickerTemplate()),                      // 339
                    content = $('<ul>').addClass('list-unstyled'),                                                     // 340
                    toolbar = $('<li>').addClass('picker-switch' + (options.collapse ? ' accordion-toggle' : '')).append(getToolbar());
                                                                                                                       // 342
                if (options.inline) {                                                                                  // 343
                    template.removeClass('dropdown-menu');                                                             // 344
                }                                                                                                      // 345
                                                                                                                       // 346
                if (use24Hours) {                                                                                      // 347
                    template.addClass('usetwentyfour');                                                                // 348
                }                                                                                                      // 349
                if (isEnabled('s') && !use24Hours) {                                                                   // 350
                    template.addClass('wider');                                                                        // 351
                }                                                                                                      // 352
                                                                                                                       // 353
                if (options.sideBySide && hasDate() && hasTime()) {                                                    // 354
                    template.addClass('timepicker-sbs');                                                               // 355
                    if (options.toolbarPlacement === 'top') {                                                          // 356
                        template.append(toolbar);                                                                      // 357
                    }                                                                                                  // 358
                    template.append(                                                                                   // 359
                        $('<div>').addClass('row')                                                                     // 360
                            .append(dateView.addClass('col-md-6'))                                                     // 361
                            .append(timeView.addClass('col-md-6'))                                                     // 362
                    );                                                                                                 // 363
                    if (options.toolbarPlacement === 'bottom') {                                                       // 364
                        template.append(toolbar);                                                                      // 365
                    }                                                                                                  // 366
                    return template;                                                                                   // 367
                }                                                                                                      // 368
                                                                                                                       // 369
                if (options.toolbarPlacement === 'top') {                                                              // 370
                    content.append(toolbar);                                                                           // 371
                }                                                                                                      // 372
                if (hasDate()) {                                                                                       // 373
                    content.append($('<li>').addClass((options.collapse && hasTime() ? 'collapse in' : '')).append(dateView));
                }                                                                                                      // 375
                if (options.toolbarPlacement === 'default') {                                                          // 376
                    content.append(toolbar);                                                                           // 377
                }                                                                                                      // 378
                if (hasTime()) {                                                                                       // 379
                    content.append($('<li>').addClass((options.collapse && hasDate() ? 'collapse' : '')).append(timeView));
                }                                                                                                      // 381
                if (options.toolbarPlacement === 'bottom') {                                                           // 382
                    content.append(toolbar);                                                                           // 383
                }                                                                                                      // 384
                return template.append(content);                                                                       // 385
            },                                                                                                         // 386
                                                                                                                       // 387
            dataToOptions = function () {                                                                              // 388
                var eData,                                                                                             // 389
                    dataOptions = {};                                                                                  // 390
                                                                                                                       // 391
                if (element.is('input') || options.inline) {                                                           // 392
                    eData = element.data();                                                                            // 393
                } else {                                                                                               // 394
                    eData = element.find('input').data();                                                              // 395
                }                                                                                                      // 396
                                                                                                                       // 397
                if (eData.dateOptions && eData.dateOptions instanceof Object) {                                        // 398
                    dataOptions = $.extend(true, dataOptions, eData.dateOptions);                                      // 399
                }                                                                                                      // 400
                                                                                                                       // 401
                $.each(options, function (key) {                                                                       // 402
                    var attributeName = 'date' + key.charAt(0).toUpperCase() + key.slice(1);                           // 403
                    if (eData[attributeName] !== undefined) {                                                          // 404
                        dataOptions[key] = eData[attributeName];                                                       // 405
                    }                                                                                                  // 406
                });                                                                                                    // 407
                return dataOptions;                                                                                    // 408
            },                                                                                                         // 409
                                                                                                                       // 410
            place = function () {                                                                                      // 411
                var position = (component || element).position(),                                                      // 412
                    offset = (component || element).offset(),                                                          // 413
                    vertical = options.widgetPositioning.vertical,                                                     // 414
                    horizontal = options.widgetPositioning.horizontal,                                                 // 415
                    parent;                                                                                            // 416
                                                                                                                       // 417
                if (options.widgetParent) {                                                                            // 418
                    parent = options.widgetParent.append(widget);                                                      // 419
                } else if (element.is('input')) {                                                                      // 420
                    parent = element.after(widget).parent();                                                           // 421
                } else if (options.inline) {                                                                           // 422
                    parent = element.append(widget);                                                                   // 423
                    return;                                                                                            // 424
                } else {                                                                                               // 425
                    parent = element;                                                                                  // 426
                    element.children().first().after(widget);                                                          // 427
                }                                                                                                      // 428
                                                                                                                       // 429
                // Top and bottom logic                                                                                // 430
                if (vertical === 'auto') {                                                                             // 431
                    if (offset.top + widget.height() * 1.5 >= $(window).height() + $(window).scrollTop() &&            // 432
                        widget.height() + element.outerHeight() < offset.top) {                                        // 433
                        vertical = 'top';                                                                              // 434
                    } else {                                                                                           // 435
                        vertical = 'bottom';                                                                           // 436
                    }                                                                                                  // 437
                }                                                                                                      // 438
                                                                                                                       // 439
                // Left and right logic                                                                                // 440
                if (horizontal === 'auto') {                                                                           // 441
                    if (parent.width() < offset.left + widget.outerWidth() / 2 &&                                      // 442
                        offset.left + widget.outerWidth() > $(window).width()) {                                       // 443
                        horizontal = 'right';                                                                          // 444
                    } else {                                                                                           // 445
                        horizontal = 'left';                                                                           // 446
                    }                                                                                                  // 447
                }                                                                                                      // 448
                                                                                                                       // 449
                if (vertical === 'top') {                                                                              // 450
                    widget.addClass('top').removeClass('bottom');                                                      // 451
                } else {                                                                                               // 452
                    widget.addClass('bottom').removeClass('top');                                                      // 453
                }                                                                                                      // 454
                                                                                                                       // 455
                if (horizontal === 'right') {                                                                          // 456
                    widget.addClass('pull-right');                                                                     // 457
                } else {                                                                                               // 458
                    widget.removeClass('pull-right');                                                                  // 459
                }                                                                                                      // 460
                                                                                                                       // 461
                // find the first parent element that has a relative css positioning                                   // 462
                if (parent.css('position') !== 'relative') {                                                           // 463
                    parent = parent.parents().filter(function () {                                                     // 464
                        return $(this).css('position') === 'relative';                                                 // 465
                    }).first();                                                                                        // 466
                }                                                                                                      // 467
                                                                                                                       // 468
                if (parent.length === 0) {                                                                             // 469
                    throw new Error('datetimepicker component should be placed within a relative positioned container');
                }                                                                                                      // 471
                                                                                                                       // 472
                widget.css({                                                                                           // 473
                    top: vertical === 'top' ? 'auto' : position.top + element.outerHeight(),                           // 474
                    bottom: vertical === 'top' ? position.top + element.outerHeight() : 'auto',                        // 475
                    left: horizontal === 'left' ? (parent === element ? 0 : position.left) : 'auto',                   // 476
                    right: horizontal === 'left' ? 'auto' : parent.outerWidth() - element.outerWidth() - (parent === element ? 0 : position.left)
                });                                                                                                    // 478
            },                                                                                                         // 479
                                                                                                                       // 480
            notifyEvent = function (e) {                                                                               // 481
                if (e.type === 'dp.change' && ((e.date && e.date.isSame(e.oldDate)) || (!e.date && !e.oldDate))) {     // 482
                    return;                                                                                            // 483
                }                                                                                                      // 484
                element.trigger(e);                                                                                    // 485
            },                                                                                                         // 486
                                                                                                                       // 487
            viewUpdate = function (e) {                                                                                // 488
                if (e === 'y') {                                                                                       // 489
                    e = 'YYYY';                                                                                        // 490
                }                                                                                                      // 491
                notifyEvent({                                                                                          // 492
                    type: 'dp.update',                                                                                 // 493
                    change: e,                                                                                         // 494
                    viewDate: viewDate.clone()                                                                         // 495
                });                                                                                                    // 496
            },                                                                                                         // 497
                                                                                                                       // 498
            showMode = function (dir) {                                                                                // 499
                if (!widget) {                                                                                         // 500
                    return;                                                                                            // 501
                }                                                                                                      // 502
                if (dir) {                                                                                             // 503
                    currentViewMode = Math.max(minViewModeNumber, Math.min(3, currentViewMode + dir));                 // 504
                }                                                                                                      // 505
                widget.find('.datepicker > div').hide().filter('.datepicker-' + datePickerModes[currentViewMode].clsName).show();
            },                                                                                                         // 507
                                                                                                                       // 508
            fillDow = function () {                                                                                    // 509
                var row = $('<tr>'),                                                                                   // 510
                    currentDate = viewDate.clone().startOf('w').startOf('d');                                          // 511
                                                                                                                       // 512
                if (options.calendarWeeks === true) {                                                                  // 513
                    row.append($('<th>').addClass('cw').text('#'));                                                    // 514
                }                                                                                                      // 515
                                                                                                                       // 516
                while (currentDate.isBefore(viewDate.clone().endOf('w'))) {                                            // 517
                    row.append($('<th>').addClass('dow').text(currentDate.format('dd')));                              // 518
                    currentDate.add(1, 'd');                                                                           // 519
                }                                                                                                      // 520
                widget.find('.datepicker-days thead').append(row);                                                     // 521
            },                                                                                                         // 522
                                                                                                                       // 523
            isInDisabledDates = function (testDate) {                                                                  // 524
                return options.disabledDates[testDate.format('YYYY-MM-DD')] === true;                                  // 525
            },                                                                                                         // 526
                                                                                                                       // 527
            isInEnabledDates = function (testDate) {                                                                   // 528
                return options.enabledDates[testDate.format('YYYY-MM-DD')] === true;                                   // 529
            },                                                                                                         // 530
                                                                                                                       // 531
            isInDisabledHours = function (testDate) {                                                                  // 532
                return options.disabledHours[testDate.format('H')] === true;                                           // 533
            },                                                                                                         // 534
                                                                                                                       // 535
            isInEnabledHours = function (testDate) {                                                                   // 536
                return options.enabledHours[testDate.format('H')] === true;                                            // 537
            },                                                                                                         // 538
                                                                                                                       // 539
            isValid = function (targetMoment, granularity) {                                                           // 540
                if (!targetMoment.isValid()) {                                                                         // 541
                    return false;                                                                                      // 542
                }                                                                                                      // 543
                if (options.disabledDates && granularity === 'd' && isInDisabledDates(targetMoment)) {                 // 544
                    return false;                                                                                      // 545
                }                                                                                                      // 546
                if (options.enabledDates && granularity === 'd' && !isInEnabledDates(targetMoment)) {                  // 547
                    return false;                                                                                      // 548
                }                                                                                                      // 549
                if (options.minDate && targetMoment.isBefore(options.minDate, granularity)) {                          // 550
                    return false;                                                                                      // 551
                }                                                                                                      // 552
                if (options.maxDate && targetMoment.isAfter(options.maxDate, granularity)) {                           // 553
                    return false;                                                                                      // 554
                }                                                                                                      // 555
                if (options.daysOfWeekDisabled && granularity === 'd' && options.daysOfWeekDisabled.indexOf(targetMoment.day()) !== -1) {
                    return false;                                                                                      // 557
                }                                                                                                      // 558
                if (options.disabledHours && (granularity === 'h' || granularity === 'm' || granularity === 's') && isInDisabledHours(targetMoment)) {
                    return false;                                                                                      // 560
                }                                                                                                      // 561
                if (options.enabledHours && (granularity === 'h' || granularity === 'm' || granularity === 's') && !isInEnabledHours(targetMoment)) {
                    return false;                                                                                      // 563
                }                                                                                                      // 564
                if (options.disabledTimeIntervals && (granularity === 'h' || granularity === 'm' || granularity === 's')) {
                    var found = false;                                                                                 // 566
                    $.each(options.disabledTimeIntervals, function () {                                                // 567
                        if (targetMoment.isBetween(this[0], this[1])) {                                                // 568
                            found = true;                                                                              // 569
                            return false;                                                                              // 570
                        }                                                                                              // 571
                    });                                                                                                // 572
                    if (found) {                                                                                       // 573
                        return false;                                                                                  // 574
                    }                                                                                                  // 575
                }                                                                                                      // 576
                return true;                                                                                           // 577
            },                                                                                                         // 578
                                                                                                                       // 579
            fillMonths = function () {                                                                                 // 580
                var spans = [],                                                                                        // 581
                    monthsShort = viewDate.clone().startOf('y').startOf('d');                                          // 582
                while (monthsShort.isSame(viewDate, 'y')) {                                                            // 583
                    spans.push($('<span>').attr('data-action', 'selectMonth').addClass('month').text(monthsShort.format('MMM')));
                    monthsShort.add(1, 'M');                                                                           // 585
                }                                                                                                      // 586
                widget.find('.datepicker-months td').empty().append(spans);                                            // 587
            },                                                                                                         // 588
                                                                                                                       // 589
            updateMonths = function () {                                                                               // 590
                var monthsView = widget.find('.datepicker-months'),                                                    // 591
                    monthsViewHeader = monthsView.find('th'),                                                          // 592
                    months = monthsView.find('tbody').find('span');                                                    // 593
                                                                                                                       // 594
                monthsViewHeader.eq(0).find('span').attr('title', options.tooltips.prevYear);                          // 595
                monthsViewHeader.eq(1).attr('title', options.tooltips.selectYear);                                     // 596
                monthsViewHeader.eq(2).find('span').attr('title', options.tooltips.nextYear);                          // 597
                                                                                                                       // 598
                monthsView.find('.disabled').removeClass('disabled');                                                  // 599
                                                                                                                       // 600
                if (!isValid(viewDate.clone().subtract(1, 'y'), 'y')) {                                                // 601
                    monthsViewHeader.eq(0).addClass('disabled');                                                       // 602
                }                                                                                                      // 603
                                                                                                                       // 604
                monthsViewHeader.eq(1).text(viewDate.year());                                                          // 605
                                                                                                                       // 606
                if (!isValid(viewDate.clone().add(1, 'y'), 'y')) {                                                     // 607
                    monthsViewHeader.eq(2).addClass('disabled');                                                       // 608
                }                                                                                                      // 609
                                                                                                                       // 610
                months.removeClass('active');                                                                          // 611
                if (date.isSame(viewDate, 'y') && !unset) {                                                            // 612
                    months.eq(date.month()).addClass('active');                                                        // 613
                }                                                                                                      // 614
                                                                                                                       // 615
                months.each(function (index) {                                                                         // 616
                    if (!isValid(viewDate.clone().month(index), 'M')) {                                                // 617
                        $(this).addClass('disabled');                                                                  // 618
                    }                                                                                                  // 619
                });                                                                                                    // 620
            },                                                                                                         // 621
                                                                                                                       // 622
            updateYears = function () {                                                                                // 623
                var yearsView = widget.find('.datepicker-years'),                                                      // 624
                    yearsViewHeader = yearsView.find('th'),                                                            // 625
                    startYear = viewDate.clone().subtract(5, 'y'),                                                     // 626
                    endYear = viewDate.clone().add(6, 'y'),                                                            // 627
                    html = '';                                                                                         // 628
                                                                                                                       // 629
                yearsViewHeader.eq(0).find('span').attr('title', options.tooltips.prevDecade);                         // 630
                yearsViewHeader.eq(1).attr('title', options.tooltips.selectDecade);                                    // 631
                yearsViewHeader.eq(2).find('span').attr('title', options.tooltips.nextDecade);                         // 632
                                                                                                                       // 633
                yearsView.find('.disabled').removeClass('disabled');                                                   // 634
                                                                                                                       // 635
                if (options.minDate && options.minDate.isAfter(startYear, 'y')) {                                      // 636
                    yearsViewHeader.eq(0).addClass('disabled');                                                        // 637
                }                                                                                                      // 638
                                                                                                                       // 639
                yearsViewHeader.eq(1).text(startYear.year() + '-' + endYear.year());                                   // 640
                                                                                                                       // 641
                if (options.maxDate && options.maxDate.isBefore(endYear, 'y')) {                                       // 642
                    yearsViewHeader.eq(2).addClass('disabled');                                                        // 643
                }                                                                                                      // 644
                                                                                                                       // 645
                while (!startYear.isAfter(endYear, 'y')) {                                                             // 646
                    html += '<span data-action="selectYear" class="year' + (startYear.isSame(date, 'y') && !unset ? ' active' : '') + (!isValid(startYear, 'y') ? ' disabled' : '') + '">' + startYear.year() + '</span>';
                    startYear.add(1, 'y');                                                                             // 648
                }                                                                                                      // 649
                                                                                                                       // 650
                yearsView.find('td').html(html);                                                                       // 651
            },                                                                                                         // 652
                                                                                                                       // 653
            updateDecades = function () {                                                                              // 654
                var decadesView = widget.find('.datepicker-decades'),                                                  // 655
                    decadesViewHeader = decadesView.find('th'),                                                        // 656
                    startDecade = moment({y: viewDate.year() - (viewDate.year() % 100) - 1}),                          // 657
                    endDecade = startDecade.clone().add(100, 'y'),                                                     // 658
                    startedAt = startDecade.clone(),                                                                   // 659
                    html = '';                                                                                         // 660
                                                                                                                       // 661
                decadesViewHeader.eq(0).find('span').attr('title', options.tooltips.prevCentury);                      // 662
                decadesViewHeader.eq(2).find('span').attr('title', options.tooltips.nextCentury);                      // 663
                                                                                                                       // 664
                decadesView.find('.disabled').removeClass('disabled');                                                 // 665
                                                                                                                       // 666
                if (startDecade.isSame(moment({y: 1900})) || (options.minDate && options.minDate.isAfter(startDecade, 'y'))) {
                    decadesViewHeader.eq(0).addClass('disabled');                                                      // 668
                }                                                                                                      // 669
                                                                                                                       // 670
                decadesViewHeader.eq(1).text(startDecade.year() + '-' + endDecade.year());                             // 671
                                                                                                                       // 672
                if (startDecade.isSame(moment({y: 2000})) || (options.maxDate && options.maxDate.isBefore(endDecade, 'y'))) {
                    decadesViewHeader.eq(2).addClass('disabled');                                                      // 674
                }                                                                                                      // 675
                                                                                                                       // 676
                while (!startDecade.isAfter(endDecade, 'y')) {                                                         // 677
                    html += '<span data-action="selectDecade" class="decade' + (startDecade.isSame(date, 'y') ? ' active' : '') +
                        (!isValid(startDecade, 'y') ? ' disabled' : '') + '" data-selection="' + (startDecade.year() + 6) + '">' + (startDecade.year() + 1) + ' - ' + (startDecade.year() + 12) + '</span>';
                    startDecade.add(12, 'y');                                                                          // 680
                }                                                                                                      // 681
                html += '<span></span><span></span><span></span>'; //push the dangling block over, at least this way it's even
                                                                                                                       // 683
                decadesView.find('td').html(html);                                                                     // 684
                decadesViewHeader.eq(1).text((startedAt.year() + 1) + '-' + (startDecade.year()));                     // 685
            },                                                                                                         // 686
                                                                                                                       // 687
            fillDate = function () {                                                                                   // 688
                var daysView = widget.find('.datepicker-days'),                                                        // 689
                    daysViewHeader = daysView.find('th'),                                                              // 690
                    currentDate,                                                                                       // 691
                    html = [],                                                                                         // 692
                    row,                                                                                               // 693
                    clsName,                                                                                           // 694
                    i;                                                                                                 // 695
                                                                                                                       // 696
                if (!hasDate()) {                                                                                      // 697
                    return;                                                                                            // 698
                }                                                                                                      // 699
                                                                                                                       // 700
                daysViewHeader.eq(0).find('span').attr('title', options.tooltips.prevMonth);                           // 701
                daysViewHeader.eq(1).attr('title', options.tooltips.selectMonth);                                      // 702
                daysViewHeader.eq(2).find('span').attr('title', options.tooltips.nextMonth);                           // 703
                                                                                                                       // 704
                daysView.find('.disabled').removeClass('disabled');                                                    // 705
                daysViewHeader.eq(1).text(viewDate.format(options.dayViewHeaderFormat));                               // 706
                                                                                                                       // 707
                if (!isValid(viewDate.clone().subtract(1, 'M'), 'M')) {                                                // 708
                    daysViewHeader.eq(0).addClass('disabled');                                                         // 709
                }                                                                                                      // 710
                if (!isValid(viewDate.clone().add(1, 'M'), 'M')) {                                                     // 711
                    daysViewHeader.eq(2).addClass('disabled');                                                         // 712
                }                                                                                                      // 713
                                                                                                                       // 714
                currentDate = viewDate.clone().startOf('M').startOf('w').startOf('d');                                 // 715
                                                                                                                       // 716
                for (i = 0; i < 42; i++) { //always display 42 days (should show 6 weeks)                              // 717
                    if (currentDate.weekday() === 0) {                                                                 // 718
                        row = $('<tr>');                                                                               // 719
                        if (options.calendarWeeks) {                                                                   // 720
                            row.append('<td class="cw">' + currentDate.week() + '</td>');                              // 721
                        }                                                                                              // 722
                        html.push(row);                                                                                // 723
                    }                                                                                                  // 724
                    clsName = '';                                                                                      // 725
                    if (currentDate.isBefore(viewDate, 'M')) {                                                         // 726
                        clsName += ' old';                                                                             // 727
                    }                                                                                                  // 728
                    if (currentDate.isAfter(viewDate, 'M')) {                                                          // 729
                        clsName += ' new';                                                                             // 730
                    }                                                                                                  // 731
                    if (currentDate.isSame(date, 'd') && !unset) {                                                     // 732
                        clsName += ' active';                                                                          // 733
                    }                                                                                                  // 734
                    if (!isValid(currentDate, 'd')) {                                                                  // 735
                        clsName += ' disabled';                                                                        // 736
                    }                                                                                                  // 737
                    if (currentDate.isSame(getMoment(), 'd')) {                                                        // 738
                        clsName += ' today';                                                                           // 739
                    }                                                                                                  // 740
                    if (currentDate.day() === 0 || currentDate.day() === 6) {                                          // 741
                        clsName += ' weekend';                                                                         // 742
                    }                                                                                                  // 743
                    row.append('<td data-action="selectDay" data-day="' + currentDate.format('L') + '" class="day' + clsName + '">' + currentDate.date() + '</td>');
                    currentDate.add(1, 'd');                                                                           // 745
                }                                                                                                      // 746
                                                                                                                       // 747
                daysView.find('tbody').empty().append(html);                                                           // 748
                                                                                                                       // 749
                updateMonths();                                                                                        // 750
                                                                                                                       // 751
                updateYears();                                                                                         // 752
                                                                                                                       // 753
                updateDecades();                                                                                       // 754
            },                                                                                                         // 755
                                                                                                                       // 756
            fillHours = function () {                                                                                  // 757
                var table = widget.find('.timepicker-hours table'),                                                    // 758
                    currentHour = viewDate.clone().startOf('d'),                                                       // 759
                    html = [],                                                                                         // 760
                    row = $('<tr>');                                                                                   // 761
                                                                                                                       // 762
                if (viewDate.hour() > 11 && !use24Hours) {                                                             // 763
                    currentHour.hour(12);                                                                              // 764
                }                                                                                                      // 765
                while (currentHour.isSame(viewDate, 'd') && (use24Hours || (viewDate.hour() < 12 && currentHour.hour() < 12) || viewDate.hour() > 11)) {
                    if (currentHour.hour() % 4 === 0) {                                                                // 767
                        row = $('<tr>');                                                                               // 768
                        html.push(row);                                                                                // 769
                    }                                                                                                  // 770
                    row.append('<td data-action="selectHour" class="hour' + (!isValid(currentHour, 'h') ? ' disabled' : '') + '">' + currentHour.format(use24Hours ? 'HH' : 'hh') + '</td>');
                    currentHour.add(1, 'h');                                                                           // 772
                }                                                                                                      // 773
                table.empty().append(html);                                                                            // 774
            },                                                                                                         // 775
                                                                                                                       // 776
            fillMinutes = function () {                                                                                // 777
                var table = widget.find('.timepicker-minutes table'),                                                  // 778
                    currentMinute = viewDate.clone().startOf('h'),                                                     // 779
                    html = [],                                                                                         // 780
                    row = $('<tr>'),                                                                                   // 781
                    step = options.stepping === 1 ? 5 : options.stepping;                                              // 782
                                                                                                                       // 783
                while (viewDate.isSame(currentMinute, 'h')) {                                                          // 784
                    if (currentMinute.minute() % (step * 4) === 0) {                                                   // 785
                        row = $('<tr>');                                                                               // 786
                        html.push(row);                                                                                // 787
                    }                                                                                                  // 788
                    row.append('<td data-action="selectMinute" class="minute' + (!isValid(currentMinute, 'm') ? ' disabled' : '') + '">' + currentMinute.format('mm') + '</td>');
                    currentMinute.add(step, 'm');                                                                      // 790
                }                                                                                                      // 791
                table.empty().append(html);                                                                            // 792
            },                                                                                                         // 793
                                                                                                                       // 794
            fillSeconds = function () {                                                                                // 795
                var table = widget.find('.timepicker-seconds table'),                                                  // 796
                    currentSecond = viewDate.clone().startOf('m'),                                                     // 797
                    html = [],                                                                                         // 798
                    row = $('<tr>');                                                                                   // 799
                                                                                                                       // 800
                while (viewDate.isSame(currentSecond, 'm')) {                                                          // 801
                    if (currentSecond.second() % 20 === 0) {                                                           // 802
                        row = $('<tr>');                                                                               // 803
                        html.push(row);                                                                                // 804
                    }                                                                                                  // 805
                    row.append('<td data-action="selectSecond" class="second' + (!isValid(currentSecond, 's') ? ' disabled' : '') + '">' + currentSecond.format('ss') + '</td>');
                    currentSecond.add(5, 's');                                                                         // 807
                }                                                                                                      // 808
                                                                                                                       // 809
                table.empty().append(html);                                                                            // 810
            },                                                                                                         // 811
                                                                                                                       // 812
            fillTime = function () {                                                                                   // 813
                var toggle, newDate, timeComponents = widget.find('.timepicker span[data-time-component]');            // 814
                                                                                                                       // 815
                if (!use24Hours) {                                                                                     // 816
                    toggle = widget.find('.timepicker [data-action=togglePeriod]');                                    // 817
                    newDate = date.clone().add((date.hours() >= 12) ? -12 : 12, 'h');                                  // 818
                                                                                                                       // 819
                    toggle.text(date.format('A'));                                                                     // 820
                                                                                                                       // 821
                    if (isValid(newDate, 'h')) {                                                                       // 822
                        toggle.removeClass('disabled');                                                                // 823
                    } else {                                                                                           // 824
                        toggle.addClass('disabled');                                                                   // 825
                    }                                                                                                  // 826
                }                                                                                                      // 827
                timeComponents.filter('[data-time-component=hours]').text(date.format(use24Hours ? 'HH' : 'hh'));      // 828
                timeComponents.filter('[data-time-component=minutes]').text(date.format('mm'));                        // 829
                timeComponents.filter('[data-time-component=seconds]').text(date.format('ss'));                        // 830
                                                                                                                       // 831
                fillHours();                                                                                           // 832
                fillMinutes();                                                                                         // 833
                fillSeconds();                                                                                         // 834
            },                                                                                                         // 835
                                                                                                                       // 836
            update = function () {                                                                                     // 837
                if (!widget) {                                                                                         // 838
                    return;                                                                                            // 839
                }                                                                                                      // 840
                fillDate();                                                                                            // 841
                fillTime();                                                                                            // 842
            },                                                                                                         // 843
                                                                                                                       // 844
            setValue = function (targetMoment) {                                                                       // 845
                var oldDate = unset ? null : date;                                                                     // 846
                                                                                                                       // 847
                // case of calling setValue(null or false)                                                             // 848
                if (!targetMoment) {                                                                                   // 849
                    unset = true;                                                                                      // 850
                    input.val('');                                                                                     // 851
                    element.data('date', '');                                                                          // 852
                    notifyEvent({                                                                                      // 853
                        type: 'dp.change',                                                                             // 854
                        date: false,                                                                                   // 855
                        oldDate: oldDate                                                                               // 856
                    });                                                                                                // 857
                    update();                                                                                          // 858
                    return;                                                                                            // 859
                }                                                                                                      // 860
                                                                                                                       // 861
                targetMoment = targetMoment.clone().locale(options.locale);                                            // 862
                                                                                                                       // 863
                if (options.stepping !== 1) {                                                                          // 864
                    targetMoment.minutes((Math.round(targetMoment.minutes() / options.stepping) * options.stepping) % 60).seconds(0);
                }                                                                                                      // 866
                                                                                                                       // 867
                if (isValid(targetMoment)) {                                                                           // 868
                    date = targetMoment;                                                                               // 869
                    viewDate = date.clone();                                                                           // 870
                    input.val(date.format(actualFormat));                                                              // 871
                    element.data('date', date.format(actualFormat));                                                   // 872
                    unset = false;                                                                                     // 873
                    update();                                                                                          // 874
                    notifyEvent({                                                                                      // 875
                        type: 'dp.change',                                                                             // 876
                        date: date.clone(),                                                                            // 877
                        oldDate: oldDate                                                                               // 878
                    });                                                                                                // 879
                } else {                                                                                               // 880
                    if (!options.keepInvalid) {                                                                        // 881
                        input.val(unset ? '' : date.format(actualFormat));                                             // 882
                    }                                                                                                  // 883
                    notifyEvent({                                                                                      // 884
                        type: 'dp.error',                                                                              // 885
                        date: targetMoment                                                                             // 886
                    });                                                                                                // 887
                }                                                                                                      // 888
            },                                                                                                         // 889
                                                                                                                       // 890
            hide = function () {                                                                                       // 891
                ///<summary>Hides the widget. Possibly will emit dp.hide</summary>                                     // 892
                var transitioning = false;                                                                             // 893
                if (!widget) {                                                                                         // 894
                    return picker;                                                                                     // 895
                }                                                                                                      // 896
                // Ignore event if in the middle of a picker transition                                                // 897
                widget.find('.collapse').each(function () {                                                            // 898
                    var collapseData = $(this).data('collapse');                                                       // 899
                    if (collapseData && collapseData.transitioning) {                                                  // 900
                        transitioning = true;                                                                          // 901
                        return false;                                                                                  // 902
                    }                                                                                                  // 903
                    return true;                                                                                       // 904
                });                                                                                                    // 905
                if (transitioning) {                                                                                   // 906
                    return picker;                                                                                     // 907
                }                                                                                                      // 908
                if (component && component.hasClass('btn')) {                                                          // 909
                    component.toggleClass('active');                                                                   // 910
                }                                                                                                      // 911
                widget.hide();                                                                                         // 912
                                                                                                                       // 913
                $(window).off('resize', place);                                                                        // 914
                widget.off('click', '[data-action]');                                                                  // 915
                widget.off('mousedown', false);                                                                        // 916
                                                                                                                       // 917
                widget.remove();                                                                                       // 918
                widget = false;                                                                                        // 919
                                                                                                                       // 920
                notifyEvent({                                                                                          // 921
                    type: 'dp.hide',                                                                                   // 922
                    date: date.clone()                                                                                 // 923
                });                                                                                                    // 924
                                                                                                                       // 925
                input.blur();                                                                                          // 926
                                                                                                                       // 927
                return picker;                                                                                         // 928
            },                                                                                                         // 929
                                                                                                                       // 930
            clear = function () {                                                                                      // 931
                setValue(null);                                                                                        // 932
            },                                                                                                         // 933
                                                                                                                       // 934
            /********************************************************************************                          // 935
             *                                                                                                         // 936
             * Widget UI interaction functions                                                                         // 937
             *                                                                                                         // 938
             ********************************************************************************/                         // 939
            actions = {                                                                                                // 940
                next: function () {                                                                                    // 941
                    var navFnc = datePickerModes[currentViewMode].navFnc;                                              // 942
                    viewDate.add(datePickerModes[currentViewMode].navStep, navFnc);                                    // 943
                    fillDate();                                                                                        // 944
                    viewUpdate(navFnc);                                                                                // 945
                },                                                                                                     // 946
                                                                                                                       // 947
                previous: function () {                                                                                // 948
                    var navFnc = datePickerModes[currentViewMode].navFnc;                                              // 949
                    viewDate.subtract(datePickerModes[currentViewMode].navStep, navFnc);                               // 950
                    fillDate();                                                                                        // 951
                    viewUpdate(navFnc);                                                                                // 952
                },                                                                                                     // 953
                                                                                                                       // 954
                pickerSwitch: function () {                                                                            // 955
                    showMode(1);                                                                                       // 956
                },                                                                                                     // 957
                                                                                                                       // 958
                selectMonth: function (e) {                                                                            // 959
                    var month = $(e.target).closest('tbody').find('span').index($(e.target));                          // 960
                    viewDate.month(month);                                                                             // 961
                    if (currentViewMode === minViewModeNumber) {                                                       // 962
                        setValue(date.clone().year(viewDate.year()).month(viewDate.month()));                          // 963
                        if (!options.inline) {                                                                         // 964
                            hide();                                                                                    // 965
                        }                                                                                              // 966
                    } else {                                                                                           // 967
                        showMode(-1);                                                                                  // 968
                        fillDate();                                                                                    // 969
                    }                                                                                                  // 970
                    viewUpdate('M');                                                                                   // 971
                },                                                                                                     // 972
                                                                                                                       // 973
                selectYear: function (e) {                                                                             // 974
                    var year = parseInt($(e.target).text(), 10) || 0;                                                  // 975
                    viewDate.year(year);                                                                               // 976
                    if (currentViewMode === minViewModeNumber) {                                                       // 977
                        setValue(date.clone().year(viewDate.year()));                                                  // 978
                        if (!options.inline) {                                                                         // 979
                            hide();                                                                                    // 980
                        }                                                                                              // 981
                    } else {                                                                                           // 982
                        showMode(-1);                                                                                  // 983
                        fillDate();                                                                                    // 984
                    }                                                                                                  // 985
                    viewUpdate('YYYY');                                                                                // 986
                },                                                                                                     // 987
                                                                                                                       // 988
                selectDecade: function (e) {                                                                           // 989
                    var year = parseInt($(e.target).data('selection'), 10) || 0;                                       // 990
                    viewDate.year(year);                                                                               // 991
                    if (currentViewMode === minViewModeNumber) {                                                       // 992
                        setValue(date.clone().year(viewDate.year()));                                                  // 993
                        if (!options.inline) {                                                                         // 994
                            hide();                                                                                    // 995
                        }                                                                                              // 996
                    } else {                                                                                           // 997
                        showMode(-1);                                                                                  // 998
                        fillDate();                                                                                    // 999
                    }                                                                                                  // 1000
                    viewUpdate('YYYY');                                                                                // 1001
                },                                                                                                     // 1002
                                                                                                                       // 1003
                selectDay: function (e) {                                                                              // 1004
                    var day = viewDate.clone();                                                                        // 1005
                    if ($(e.target).is('.old')) {                                                                      // 1006
                        day.subtract(1, 'M');                                                                          // 1007
                    }                                                                                                  // 1008
                    if ($(e.target).is('.new')) {                                                                      // 1009
                        day.add(1, 'M');                                                                               // 1010
                    }                                                                                                  // 1011
                    setValue(day.date(parseInt($(e.target).text(), 10)));                                              // 1012
                    if (!hasTime() && !options.keepOpen && !options.inline) {                                          // 1013
                        hide();                                                                                        // 1014
                    }                                                                                                  // 1015
                },                                                                                                     // 1016
                                                                                                                       // 1017
                incrementHours: function () {                                                                          // 1018
                    var newDate = date.clone().add(1, 'h');                                                            // 1019
                    if (isValid(newDate, 'h')) {                                                                       // 1020
                        setValue(newDate);                                                                             // 1021
                    }                                                                                                  // 1022
                },                                                                                                     // 1023
                                                                                                                       // 1024
                incrementMinutes: function () {                                                                        // 1025
                    var newDate = date.clone().add(options.stepping, 'm');                                             // 1026
                    if (isValid(newDate, 'm')) {                                                                       // 1027
                        setValue(newDate);                                                                             // 1028
                    }                                                                                                  // 1029
                },                                                                                                     // 1030
                                                                                                                       // 1031
                incrementSeconds: function () {                                                                        // 1032
                    var newDate = date.clone().add(1, 's');                                                            // 1033
                    if (isValid(newDate, 's')) {                                                                       // 1034
                        setValue(newDate);                                                                             // 1035
                    }                                                                                                  // 1036
                },                                                                                                     // 1037
                                                                                                                       // 1038
                decrementHours: function () {                                                                          // 1039
                    var newDate = date.clone().subtract(1, 'h');                                                       // 1040
                    if (isValid(newDate, 'h')) {                                                                       // 1041
                        setValue(newDate);                                                                             // 1042
                    }                                                                                                  // 1043
                },                                                                                                     // 1044
                                                                                                                       // 1045
                decrementMinutes: function () {                                                                        // 1046
                    var newDate = date.clone().subtract(options.stepping, 'm');                                        // 1047
                    if (isValid(newDate, 'm')) {                                                                       // 1048
                        setValue(newDate);                                                                             // 1049
                    }                                                                                                  // 1050
                },                                                                                                     // 1051
                                                                                                                       // 1052
                decrementSeconds: function () {                                                                        // 1053
                    var newDate = date.clone().subtract(1, 's');                                                       // 1054
                    if (isValid(newDate, 's')) {                                                                       // 1055
                        setValue(newDate);                                                                             // 1056
                    }                                                                                                  // 1057
                },                                                                                                     // 1058
                                                                                                                       // 1059
                togglePeriod: function () {                                                                            // 1060
                    setValue(date.clone().add((date.hours() >= 12) ? -12 : 12, 'h'));                                  // 1061
                },                                                                                                     // 1062
                                                                                                                       // 1063
                togglePicker: function (e) {                                                                           // 1064
                    var $this = $(e.target),                                                                           // 1065
                        $parent = $this.closest('ul'),                                                                 // 1066
                        expanded = $parent.find('.in'),                                                                // 1067
                        closed = $parent.find('.collapse:not(.in)'),                                                   // 1068
                        collapseData;                                                                                  // 1069
                                                                                                                       // 1070
                    if (expanded && expanded.length) {                                                                 // 1071
                        collapseData = expanded.data('collapse');                                                      // 1072
                        if (collapseData && collapseData.transitioning) {                                              // 1073
                            return;                                                                                    // 1074
                        }                                                                                              // 1075
                        if (expanded.collapse) { // if collapse plugin is available through bootstrap.js then use it   // 1076
                            expanded.collapse('hide');                                                                 // 1077
                            closed.collapse('show');                                                                   // 1078
                        } else { // otherwise just toggle in class on the two views                                    // 1079
                            expanded.removeClass('in');                                                                // 1080
                            closed.addClass('in');                                                                     // 1081
                        }                                                                                              // 1082
                        if ($this.is('span')) {                                                                        // 1083
                            $this.toggleClass(options.icons.time + ' ' + options.icons.date);                          // 1084
                        } else {                                                                                       // 1085
                            $this.find('span').toggleClass(options.icons.time + ' ' + options.icons.date);             // 1086
                        }                                                                                              // 1087
                                                                                                                       // 1088
                        // NOTE: uncomment if toggled state will be restored in show()                                 // 1089
                        //if (component) {                                                                             // 1090
                        //    component.find('span').toggleClass(options.icons.time + ' ' + options.icons.date);       // 1091
                        //}                                                                                            // 1092
                    }                                                                                                  // 1093
                },                                                                                                     // 1094
                                                                                                                       // 1095
                showPicker: function () {                                                                              // 1096
                    widget.find('.timepicker > div:not(.timepicker-picker)').hide();                                   // 1097
                    widget.find('.timepicker .timepicker-picker').show();                                              // 1098
                },                                                                                                     // 1099
                                                                                                                       // 1100
                showHours: function () {                                                                               // 1101
                    widget.find('.timepicker .timepicker-picker').hide();                                              // 1102
                    widget.find('.timepicker .timepicker-hours').show();                                               // 1103
                },                                                                                                     // 1104
                                                                                                                       // 1105
                showMinutes: function () {                                                                             // 1106
                    widget.find('.timepicker .timepicker-picker').hide();                                              // 1107
                    widget.find('.timepicker .timepicker-minutes').show();                                             // 1108
                },                                                                                                     // 1109
                                                                                                                       // 1110
                showSeconds: function () {                                                                             // 1111
                    widget.find('.timepicker .timepicker-picker').hide();                                              // 1112
                    widget.find('.timepicker .timepicker-seconds').show();                                             // 1113
                },                                                                                                     // 1114
                                                                                                                       // 1115
                selectHour: function (e) {                                                                             // 1116
                    var hour = parseInt($(e.target).text(), 10);                                                       // 1117
                                                                                                                       // 1118
                    if (!use24Hours) {                                                                                 // 1119
                        if (date.hours() >= 12) {                                                                      // 1120
                            if (hour !== 12) {                                                                         // 1121
                                hour += 12;                                                                            // 1122
                            }                                                                                          // 1123
                        } else {                                                                                       // 1124
                            if (hour === 12) {                                                                         // 1125
                                hour = 0;                                                                              // 1126
                            }                                                                                          // 1127
                        }                                                                                              // 1128
                    }                                                                                                  // 1129
                    setValue(date.clone().hours(hour));                                                                // 1130
                    actions.showPicker.call(picker);                                                                   // 1131
                },                                                                                                     // 1132
                                                                                                                       // 1133
                selectMinute: function (e) {                                                                           // 1134
                    setValue(date.clone().minutes(parseInt($(e.target).text(), 10)));                                  // 1135
                    actions.showPicker.call(picker);                                                                   // 1136
                },                                                                                                     // 1137
                                                                                                                       // 1138
                selectSecond: function (e) {                                                                           // 1139
                    setValue(date.clone().seconds(parseInt($(e.target).text(), 10)));                                  // 1140
                    actions.showPicker.call(picker);                                                                   // 1141
                },                                                                                                     // 1142
                                                                                                                       // 1143
                clear: clear,                                                                                          // 1144
                                                                                                                       // 1145
                today: function () {                                                                                   // 1146
                    var todaysDate = getMoment();                                                                      // 1147
                    if (isValid(todaysDate, 'd')) {                                                                    // 1148
                        setValue(todaysDate);                                                                          // 1149
                    }                                                                                                  // 1150
                },                                                                                                     // 1151
                                                                                                                       // 1152
                close: hide                                                                                            // 1153
            },                                                                                                         // 1154
                                                                                                                       // 1155
            doAction = function (e) {                                                                                  // 1156
                if ($(e.currentTarget).is('.disabled')) {                                                              // 1157
                    return false;                                                                                      // 1158
                }                                                                                                      // 1159
                actions[$(e.currentTarget).data('action')].apply(picker, arguments);                                   // 1160
                return false;                                                                                          // 1161
            },                                                                                                         // 1162
                                                                                                                       // 1163
            show = function () {                                                                                       // 1164
                ///<summary>Shows the widget. Possibly will emit dp.show and dp.change</summary>                       // 1165
                var currentMoment,                                                                                     // 1166
                    useCurrentGranularity = {                                                                          // 1167
                        'year': function (m) {                                                                         // 1168
                            return m.month(0).date(1).hours(0).seconds(0).minutes(0);                                  // 1169
                        },                                                                                             // 1170
                        'month': function (m) {                                                                        // 1171
                            return m.date(1).hours(0).seconds(0).minutes(0);                                           // 1172
                        },                                                                                             // 1173
                        'day': function (m) {                                                                          // 1174
                            return m.hours(0).seconds(0).minutes(0);                                                   // 1175
                        },                                                                                             // 1176
                        'hour': function (m) {                                                                         // 1177
                            return m.seconds(0).minutes(0);                                                            // 1178
                        },                                                                                             // 1179
                        'minute': function (m) {                                                                       // 1180
                            return m.seconds(0);                                                                       // 1181
                        }                                                                                              // 1182
                    };                                                                                                 // 1183
                                                                                                                       // 1184
                if (input.prop('disabled') || (!options.ignoreReadonly && input.prop('readonly')) || widget) {         // 1185
                    return picker;                                                                                     // 1186
                }                                                                                                      // 1187
                if (input.val() !== undefined && input.val().trim().length !== 0) {                                    // 1188
                    setValue(parseInputDate(input.val().trim()));                                                      // 1189
                } else if (options.useCurrent && unset && ((input.is('input') && input.val().trim().length === 0) || options.inline)) {
                    currentMoment = getMoment();                                                                       // 1191
                    if (typeof options.useCurrent === 'string') {                                                      // 1192
                        currentMoment = useCurrentGranularity[options.useCurrent](currentMoment);                      // 1193
                    }                                                                                                  // 1194
                    setValue(currentMoment);                                                                           // 1195
                }                                                                                                      // 1196
                                                                                                                       // 1197
                widget = getTemplate();                                                                                // 1198
                                                                                                                       // 1199
                fillDow();                                                                                             // 1200
                fillMonths();                                                                                          // 1201
                                                                                                                       // 1202
                widget.find('.timepicker-hours').hide();                                                               // 1203
                widget.find('.timepicker-minutes').hide();                                                             // 1204
                widget.find('.timepicker-seconds').hide();                                                             // 1205
                                                                                                                       // 1206
                update();                                                                                              // 1207
                showMode();                                                                                            // 1208
                                                                                                                       // 1209
                $(window).on('resize', place);                                                                         // 1210
                widget.on('click', '[data-action]', doAction); // this handles clicks on the widget                    // 1211
                widget.on('mousedown', false);                                                                         // 1212
                                                                                                                       // 1213
                if (component && component.hasClass('btn')) {                                                          // 1214
                    component.toggleClass('active');                                                                   // 1215
                }                                                                                                      // 1216
                widget.show();                                                                                         // 1217
                place();                                                                                               // 1218
                                                                                                                       // 1219
                if (options.focusOnShow && !input.is(':focus')) {                                                      // 1220
                    input.focus();                                                                                     // 1221
                }                                                                                                      // 1222
                                                                                                                       // 1223
                notifyEvent({                                                                                          // 1224
                    type: 'dp.show'                                                                                    // 1225
                });                                                                                                    // 1226
                return picker;                                                                                         // 1227
            },                                                                                                         // 1228
                                                                                                                       // 1229
            toggle = function () {                                                                                     // 1230
                /// <summary>Shows or hides the widget</summary>                                                       // 1231
                return (widget ? hide() : show());                                                                     // 1232
            },                                                                                                         // 1233
                                                                                                                       // 1234
            parseInputDate = function (inputDate) {                                                                    // 1235
                if (options.parseInputDate === undefined) {                                                            // 1236
                    if (moment.isMoment(inputDate) || inputDate instanceof Date) {                                     // 1237
                        inputDate = moment(inputDate);                                                                 // 1238
                    } else {                                                                                           // 1239
                        inputDate = getMoment(inputDate);                                                              // 1240
                    }                                                                                                  // 1241
                } else {                                                                                               // 1242
                    inputDate = options.parseInputDate(inputDate);                                                     // 1243
                }                                                                                                      // 1244
                inputDate.locale(options.locale);                                                                      // 1245
                return inputDate;                                                                                      // 1246
            },                                                                                                         // 1247
                                                                                                                       // 1248
            keydown = function (e) {                                                                                   // 1249
                var handler = null,                                                                                    // 1250
                    index,                                                                                             // 1251
                    index2,                                                                                            // 1252
                    pressedKeys = [],                                                                                  // 1253
                    pressedModifiers = {},                                                                             // 1254
                    currentKey = e.which,                                                                              // 1255
                    keyBindKeys,                                                                                       // 1256
                    allModifiersPressed,                                                                               // 1257
                    pressed = 'p';                                                                                     // 1258
                                                                                                                       // 1259
                keyState[currentKey] = pressed;                                                                        // 1260
                                                                                                                       // 1261
                for (index in keyState) {                                                                              // 1262
                    if (keyState.hasOwnProperty(index) && keyState[index] === pressed) {                               // 1263
                        pressedKeys.push(index);                                                                       // 1264
                        if (parseInt(index, 10) !== currentKey) {                                                      // 1265
                            pressedModifiers[index] = true;                                                            // 1266
                        }                                                                                              // 1267
                    }                                                                                                  // 1268
                }                                                                                                      // 1269
                                                                                                                       // 1270
                for (index in options.keyBinds) {                                                                      // 1271
                    if (options.keyBinds.hasOwnProperty(index) && typeof (options.keyBinds[index]) === 'function') {   // 1272
                        keyBindKeys = index.split(' ');                                                                // 1273
                        if (keyBindKeys.length === pressedKeys.length && keyMap[currentKey] === keyBindKeys[keyBindKeys.length - 1]) {
                            allModifiersPressed = true;                                                                // 1275
                            for (index2 = keyBindKeys.length - 2; index2 >= 0; index2--) {                             // 1276
                                if (!(keyMap[keyBindKeys[index2]] in pressedModifiers)) {                              // 1277
                                    allModifiersPressed = false;                                                       // 1278
                                    break;                                                                             // 1279
                                }                                                                                      // 1280
                            }                                                                                          // 1281
                            if (allModifiersPressed) {                                                                 // 1282
                                handler = options.keyBinds[index];                                                     // 1283
                                break;                                                                                 // 1284
                            }                                                                                          // 1285
                        }                                                                                              // 1286
                    }                                                                                                  // 1287
                }                                                                                                      // 1288
                                                                                                                       // 1289
                if (handler) {                                                                                         // 1290
                    handler.call(picker, widget);                                                                      // 1291
                    e.stopPropagation();                                                                               // 1292
                    e.preventDefault();                                                                                // 1293
                }                                                                                                      // 1294
            },                                                                                                         // 1295
                                                                                                                       // 1296
            keyup = function (e) {                                                                                     // 1297
                keyState[e.which] = 'r';                                                                               // 1298
                e.stopPropagation();                                                                                   // 1299
                e.preventDefault();                                                                                    // 1300
            },                                                                                                         // 1301
                                                                                                                       // 1302
            change = function (e) {                                                                                    // 1303
                var val = $(e.target).val().trim(),                                                                    // 1304
                    parsedDate = val ? parseInputDate(val) : null;                                                     // 1305
                setValue(parsedDate);                                                                                  // 1306
                e.stopImmediatePropagation();                                                                          // 1307
                return false;                                                                                          // 1308
            },                                                                                                         // 1309
                                                                                                                       // 1310
            attachDatePickerElementEvents = function () {                                                              // 1311
                input.on({                                                                                             // 1312
                    'change': change,                                                                                  // 1313
                    'blur': options.debug ? '' : hide,                                                                 // 1314
                    'keydown': keydown,                                                                                // 1315
                    'keyup': keyup,                                                                                    // 1316
                    'focus': options.allowInputToggle ? show : ''                                                      // 1317
                });                                                                                                    // 1318
                                                                                                                       // 1319
                if (element.is('input')) {                                                                             // 1320
                    input.on({                                                                                         // 1321
                        'focus': show                                                                                  // 1322
                    });                                                                                                // 1323
                } else if (component) {                                                                                // 1324
                    component.on('click', toggle);                                                                     // 1325
                    component.on('mousedown', false);                                                                  // 1326
                }                                                                                                      // 1327
            },                                                                                                         // 1328
                                                                                                                       // 1329
            detachDatePickerElementEvents = function () {                                                              // 1330
                input.off({                                                                                            // 1331
                    'change': change,                                                                                  // 1332
                    'blur': blur,                                                                                      // 1333
                    'keydown': keydown,                                                                                // 1334
                    'keyup': keyup,                                                                                    // 1335
                    'focus': options.allowInputToggle ? hide : ''                                                      // 1336
                });                                                                                                    // 1337
                                                                                                                       // 1338
                if (element.is('input')) {                                                                             // 1339
                    input.off({                                                                                        // 1340
                        'focus': show                                                                                  // 1341
                    });                                                                                                // 1342
                } else if (component) {                                                                                // 1343
                    component.off('click', toggle);                                                                    // 1344
                    component.off('mousedown', false);                                                                 // 1345
                }                                                                                                      // 1346
            },                                                                                                         // 1347
                                                                                                                       // 1348
            indexGivenDates = function (givenDatesArray) {                                                             // 1349
                // Store given enabledDates and disabledDates as keys.                                                 // 1350
                // This way we can check their existence in O(1) time instead of looping through whole array.          // 1351
                // (for example: options.enabledDates['2014-02-27'] === true)                                          // 1352
                var givenDatesIndexed = {};                                                                            // 1353
                $.each(givenDatesArray, function () {                                                                  // 1354
                    var dDate = parseInputDate(this);                                                                  // 1355
                    if (dDate.isValid()) {                                                                             // 1356
                        givenDatesIndexed[dDate.format('YYYY-MM-DD')] = true;                                          // 1357
                    }                                                                                                  // 1358
                });                                                                                                    // 1359
                return (Object.keys(givenDatesIndexed).length) ? givenDatesIndexed : false;                            // 1360
            },                                                                                                         // 1361
                                                                                                                       // 1362
            indexGivenHours = function (givenHoursArray) {                                                             // 1363
                // Store given enabledHours and disabledHours as keys.                                                 // 1364
                // This way we can check their existence in O(1) time instead of looping through whole array.          // 1365
                // (for example: options.enabledHours['2014-02-27'] === true)                                          // 1366
                var givenHoursIndexed = {};                                                                            // 1367
                $.each(givenHoursArray, function () {                                                                  // 1368
                    givenHoursIndexed[this] = true;                                                                    // 1369
                });                                                                                                    // 1370
                return (Object.keys(givenHoursIndexed).length) ? givenHoursIndexed : false;                            // 1371
            },                                                                                                         // 1372
                                                                                                                       // 1373
            initFormatting = function () {                                                                             // 1374
                var format = options.format || 'L LT';                                                                 // 1375
                                                                                                                       // 1376
                actualFormat = format.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function (formatInput) {   // 1377
                    var newinput = date.localeData().longDateFormat(formatInput) || formatInput;                       // 1378
                    return newinput.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function (formatInput2) { //temp fix for #740
                        return date.localeData().longDateFormat(formatInput2) || formatInput2;                         // 1380
                    });                                                                                                // 1381
                });                                                                                                    // 1382
                                                                                                                       // 1383
                                                                                                                       // 1384
                parseFormats = options.extraFormats ? options.extraFormats.slice() : [];                               // 1385
                if (parseFormats.indexOf(format) < 0 && parseFormats.indexOf(actualFormat) < 0) {                      // 1386
                    parseFormats.push(actualFormat);                                                                   // 1387
                }                                                                                                      // 1388
                                                                                                                       // 1389
                use24Hours = (actualFormat.toLowerCase().indexOf('a') < 1 && actualFormat.replace(/\[.*?\]/g, '').indexOf('h') < 1);
                                                                                                                       // 1391
                if (isEnabled('y')) {                                                                                  // 1392
                    minViewModeNumber = 2;                                                                             // 1393
                }                                                                                                      // 1394
                if (isEnabled('M')) {                                                                                  // 1395
                    minViewModeNumber = 1;                                                                             // 1396
                }                                                                                                      // 1397
                if (isEnabled('d')) {                                                                                  // 1398
                    minViewModeNumber = 0;                                                                             // 1399
                }                                                                                                      // 1400
                                                                                                                       // 1401
                currentViewMode = Math.max(minViewModeNumber, currentViewMode);                                        // 1402
                                                                                                                       // 1403
                if (!unset) {                                                                                          // 1404
                    setValue(date);                                                                                    // 1405
                }                                                                                                      // 1406
            };                                                                                                         // 1407
                                                                                                                       // 1408
        /********************************************************************************                              // 1409
         *                                                                                                             // 1410
         * Public API functions                                                                                        // 1411
         * =====================                                                                                       // 1412
         *                                                                                                             // 1413
         * Important: Do not expose direct references to private objects or the options                                // 1414
         * object to the outer world. Always return a clone when returning values or make                              // 1415
         * a clone when setting a private variable.                                                                    // 1416
         *                                                                                                             // 1417
         ********************************************************************************/                             // 1418
        picker.destroy = function () {                                                                                 // 1419
            ///<summary>Destroys the widget and removes all attached event listeners</summary>                         // 1420
            hide();                                                                                                    // 1421
            detachDatePickerElementEvents();                                                                           // 1422
            element.removeData('DateTimePicker');                                                                      // 1423
            element.removeData('date');                                                                                // 1424
        };                                                                                                             // 1425
                                                                                                                       // 1426
        picker.toggle = toggle;                                                                                        // 1427
                                                                                                                       // 1428
        picker.show = show;                                                                                            // 1429
                                                                                                                       // 1430
        picker.hide = hide;                                                                                            // 1431
                                                                                                                       // 1432
        picker.disable = function () {                                                                                 // 1433
            ///<summary>Disables the input element, the component is attached to, by adding a disabled="true" attribute to it.
            ///If the widget was visible before that call it is hidden. Possibly emits dp.hide</summary>               // 1435
            hide();                                                                                                    // 1436
            if (component && component.hasClass('btn')) {                                                              // 1437
                component.addClass('disabled');                                                                        // 1438
            }                                                                                                          // 1439
            input.prop('disabled', true);                                                                              // 1440
            return picker;                                                                                             // 1441
        };                                                                                                             // 1442
                                                                                                                       // 1443
        picker.enable = function () {                                                                                  // 1444
            ///<summary>Enables the input element, the component is attached to, by removing disabled attribute from it.</summary>
            if (component && component.hasClass('btn')) {                                                              // 1446
                component.removeClass('disabled');                                                                     // 1447
            }                                                                                                          // 1448
            input.prop('disabled', false);                                                                             // 1449
            return picker;                                                                                             // 1450
        };                                                                                                             // 1451
                                                                                                                       // 1452
        picker.ignoreReadonly = function (ignoreReadonly) {                                                            // 1453
            if (arguments.length === 0) {                                                                              // 1454
                return options.ignoreReadonly;                                                                         // 1455
            }                                                                                                          // 1456
            if (typeof ignoreReadonly !== 'boolean') {                                                                 // 1457
                throw new TypeError('ignoreReadonly () expects a boolean parameter');                                  // 1458
            }                                                                                                          // 1459
            options.ignoreReadonly = ignoreReadonly;                                                                   // 1460
            return picker;                                                                                             // 1461
        };                                                                                                             // 1462
                                                                                                                       // 1463
        picker.options = function (newOptions) {                                                                       // 1464
            if (arguments.length === 0) {                                                                              // 1465
                return $.extend(true, {}, options);                                                                    // 1466
            }                                                                                                          // 1467
                                                                                                                       // 1468
            if (!(newOptions instanceof Object)) {                                                                     // 1469
                throw new TypeError('options() options parameter should be an object');                                // 1470
            }                                                                                                          // 1471
            $.extend(true, options, newOptions);                                                                       // 1472
            $.each(options, function (key, value) {                                                                    // 1473
                if (picker[key] !== undefined) {                                                                       // 1474
                    picker[key](value);                                                                                // 1475
                } else {                                                                                               // 1476
                    throw new TypeError('option ' + key + ' is not recognized!');                                      // 1477
                }                                                                                                      // 1478
            });                                                                                                        // 1479
            return picker;                                                                                             // 1480
        };                                                                                                             // 1481
                                                                                                                       // 1482
        picker.date = function (newDate) {                                                                             // 1483
            ///<signature helpKeyword="$.fn.datetimepicker.date">                                                      // 1484
            ///<summary>Returns the component's model current date, a moment object or null if not set.</summary>      // 1485
            ///<returns type="Moment">date.clone()</returns>                                                           // 1486
            ///</signature>                                                                                            // 1487
            ///<signature>                                                                                             // 1488
            ///<summary>Sets the components model current moment to it. Passing a null value unsets the components model current moment. Parsing of the newDate parameter is made using moment library with the options.format and options.useStrict components configuration.</summary>
            ///<param name="newDate" locid="$.fn.datetimepicker.date_p:newDate">Takes string, Date, moment, null parameter.</param>
            ///</signature>                                                                                            // 1491
            if (arguments.length === 0) {                                                                              // 1492
                if (unset) {                                                                                           // 1493
                    return null;                                                                                       // 1494
                }                                                                                                      // 1495
                return date.clone();                                                                                   // 1496
            }                                                                                                          // 1497
                                                                                                                       // 1498
            if (newDate !== null && typeof newDate !== 'string' && !moment.isMoment(newDate) && !(newDate instanceof Date)) {
                throw new TypeError('date() parameter must be one of [null, string, moment or Date]');                 // 1500
            }                                                                                                          // 1501
                                                                                                                       // 1502
            setValue(newDate === null ? null : parseInputDate(newDate));                                               // 1503
            return picker;                                                                                             // 1504
        };                                                                                                             // 1505
                                                                                                                       // 1506
        picker.format = function (newFormat) {                                                                         // 1507
            ///<summary>test su</summary>                                                                              // 1508
            ///<param name="newFormat">info about para</param>                                                         // 1509
            ///<returns type="string|boolean">returns foo</returns>                                                    // 1510
            if (arguments.length === 0) {                                                                              // 1511
                return options.format;                                                                                 // 1512
            }                                                                                                          // 1513
                                                                                                                       // 1514
            if ((typeof newFormat !== 'string') && ((typeof newFormat !== 'boolean') || (newFormat !== false))) {      // 1515
                throw new TypeError('format() expects a sting or boolean:false parameter ' + newFormat);               // 1516
            }                                                                                                          // 1517
                                                                                                                       // 1518
            options.format = newFormat;                                                                                // 1519
            if (actualFormat) {                                                                                        // 1520
                initFormatting(); // reinit formatting                                                                 // 1521
            }                                                                                                          // 1522
            return picker;                                                                                             // 1523
        };                                                                                                             // 1524
                                                                                                                       // 1525
        picker.timeZone = function (newZone) {                                                                         // 1526
            if (arguments.length === 0) {                                                                              // 1527
                return options.timeZone;                                                                               // 1528
            }                                                                                                          // 1529
                                                                                                                       // 1530
            options.timeZone = newZone;                                                                                // 1531
                                                                                                                       // 1532
            return picker;                                                                                             // 1533
        };                                                                                                             // 1534
                                                                                                                       // 1535
        picker.dayViewHeaderFormat = function (newFormat) {                                                            // 1536
            if (arguments.length === 0) {                                                                              // 1537
                return options.dayViewHeaderFormat;                                                                    // 1538
            }                                                                                                          // 1539
                                                                                                                       // 1540
            if (typeof newFormat !== 'string') {                                                                       // 1541
                throw new TypeError('dayViewHeaderFormat() expects a string parameter');                               // 1542
            }                                                                                                          // 1543
                                                                                                                       // 1544
            options.dayViewHeaderFormat = newFormat;                                                                   // 1545
            return picker;                                                                                             // 1546
        };                                                                                                             // 1547
                                                                                                                       // 1548
        picker.extraFormats = function (formats) {                                                                     // 1549
            if (arguments.length === 0) {                                                                              // 1550
                return options.extraFormats;                                                                           // 1551
            }                                                                                                          // 1552
                                                                                                                       // 1553
            if (formats !== false && !(formats instanceof Array)) {                                                    // 1554
                throw new TypeError('extraFormats() expects an array or false parameter');                             // 1555
            }                                                                                                          // 1556
                                                                                                                       // 1557
            options.extraFormats = formats;                                                                            // 1558
            if (parseFormats) {                                                                                        // 1559
                initFormatting(); // reinit formatting                                                                 // 1560
            }                                                                                                          // 1561
            return picker;                                                                                             // 1562
        };                                                                                                             // 1563
                                                                                                                       // 1564
        picker.disabledDates = function (dates) {                                                                      // 1565
            ///<signature helpKeyword="$.fn.datetimepicker.disabledDates">                                             // 1566
            ///<summary>Returns an array with the currently set disabled dates on the component.</summary>             // 1567
            ///<returns type="array">options.disabledDates</returns>                                                   // 1568
            ///</signature>                                                                                            // 1569
            ///<signature>                                                                                             // 1570
            ///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of
            ///options.enabledDates if such exist.</summary>                                                           // 1572
            ///<param name="dates" locid="$.fn.datetimepicker.disabledDates_p:dates">Takes an [ string or Date or moment ] of values and allows the user to select only from those days.</param>
            ///</signature>                                                                                            // 1574
            if (arguments.length === 0) {                                                                              // 1575
                return (options.disabledDates ? $.extend({}, options.disabledDates) : options.disabledDates);          // 1576
            }                                                                                                          // 1577
                                                                                                                       // 1578
            if (!dates) {                                                                                              // 1579
                options.disabledDates = false;                                                                         // 1580
                update();                                                                                              // 1581
                return picker;                                                                                         // 1582
            }                                                                                                          // 1583
            if (!(dates instanceof Array)) {                                                                           // 1584
                throw new TypeError('disabledDates() expects an array parameter');                                     // 1585
            }                                                                                                          // 1586
            options.disabledDates = indexGivenDates(dates);                                                            // 1587
            options.enabledDates = false;                                                                              // 1588
            update();                                                                                                  // 1589
            return picker;                                                                                             // 1590
        };                                                                                                             // 1591
                                                                                                                       // 1592
        picker.enabledDates = function (dates) {                                                                       // 1593
            ///<signature helpKeyword="$.fn.datetimepicker.enabledDates">                                              // 1594
            ///<summary>Returns an array with the currently set enabled dates on the component.</summary>              // 1595
            ///<returns type="array">options.enabledDates</returns>                                                    // 1596
            ///</signature>                                                                                            // 1597
            ///<signature>                                                                                             // 1598
            ///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of options.disabledDates if such exist.</summary>
            ///<param name="dates" locid="$.fn.datetimepicker.enabledDates_p:dates">Takes an [ string or Date or moment ] of values and allows the user to select only from those days.</param>
            ///</signature>                                                                                            // 1601
            if (arguments.length === 0) {                                                                              // 1602
                return (options.enabledDates ? $.extend({}, options.enabledDates) : options.enabledDates);             // 1603
            }                                                                                                          // 1604
                                                                                                                       // 1605
            if (!dates) {                                                                                              // 1606
                options.enabledDates = false;                                                                          // 1607
                update();                                                                                              // 1608
                return picker;                                                                                         // 1609
            }                                                                                                          // 1610
            if (!(dates instanceof Array)) {                                                                           // 1611
                throw new TypeError('enabledDates() expects an array parameter');                                      // 1612
            }                                                                                                          // 1613
            options.enabledDates = indexGivenDates(dates);                                                             // 1614
            options.disabledDates = false;                                                                             // 1615
            update();                                                                                                  // 1616
            return picker;                                                                                             // 1617
        };                                                                                                             // 1618
                                                                                                                       // 1619
        picker.daysOfWeekDisabled = function (daysOfWeekDisabled) {                                                    // 1620
            if (arguments.length === 0) {                                                                              // 1621
                return options.daysOfWeekDisabled.splice(0);                                                           // 1622
            }                                                                                                          // 1623
                                                                                                                       // 1624
            if ((typeof daysOfWeekDisabled === 'boolean') && !daysOfWeekDisabled) {                                    // 1625
                options.daysOfWeekDisabled = false;                                                                    // 1626
                update();                                                                                              // 1627
                return picker;                                                                                         // 1628
            }                                                                                                          // 1629
                                                                                                                       // 1630
            if (!(daysOfWeekDisabled instanceof Array)) {                                                              // 1631
                throw new TypeError('daysOfWeekDisabled() expects an array parameter');                                // 1632
            }                                                                                                          // 1633
            options.daysOfWeekDisabled = daysOfWeekDisabled.reduce(function (previousValue, currentValue) {            // 1634
                currentValue = parseInt(currentValue, 10);                                                             // 1635
                if (currentValue > 6 || currentValue < 0 || isNaN(currentValue)) {                                     // 1636
                    return previousValue;                                                                              // 1637
                }                                                                                                      // 1638
                if (previousValue.indexOf(currentValue) === -1) {                                                      // 1639
                    previousValue.push(currentValue);                                                                  // 1640
                }                                                                                                      // 1641
                return previousValue;                                                                                  // 1642
            }, []).sort();                                                                                             // 1643
            if (options.useCurrent && !options.keepInvalid) {                                                          // 1644
                var tries = 0;                                                                                         // 1645
                while (!isValid(date, 'd')) {                                                                          // 1646
                    date.add(1, 'd');                                                                                  // 1647
                    if (tries === 7) {                                                                                 // 1648
                        throw 'Tried 7 times to find a valid date';                                                    // 1649
                    }                                                                                                  // 1650
                    tries++;                                                                                           // 1651
                }                                                                                                      // 1652
                setValue(date);                                                                                        // 1653
            }                                                                                                          // 1654
            update();                                                                                                  // 1655
            return picker;                                                                                             // 1656
        };                                                                                                             // 1657
                                                                                                                       // 1658
        picker.maxDate = function (maxDate) {                                                                          // 1659
            if (arguments.length === 0) {                                                                              // 1660
                return options.maxDate ? options.maxDate.clone() : options.maxDate;                                    // 1661
            }                                                                                                          // 1662
                                                                                                                       // 1663
            if ((typeof maxDate === 'boolean') && maxDate === false) {                                                 // 1664
                options.maxDate = false;                                                                               // 1665
                update();                                                                                              // 1666
                return picker;                                                                                         // 1667
            }                                                                                                          // 1668
                                                                                                                       // 1669
            if (typeof maxDate === 'string') {                                                                         // 1670
                if (maxDate === 'now' || maxDate === 'moment') {                                                       // 1671
                    maxDate = getMoment();                                                                             // 1672
                }                                                                                                      // 1673
            }                                                                                                          // 1674
                                                                                                                       // 1675
            var parsedDate = parseInputDate(maxDate);                                                                  // 1676
                                                                                                                       // 1677
            if (!parsedDate.isValid()) {                                                                               // 1678
                throw new TypeError('maxDate() Could not parse date parameter: ' + maxDate);                           // 1679
            }                                                                                                          // 1680
            if (options.minDate && parsedDate.isBefore(options.minDate)) {                                             // 1681
                throw new TypeError('maxDate() date parameter is before options.minDate: ' + parsedDate.format(actualFormat));
            }                                                                                                          // 1683
            options.maxDate = parsedDate;                                                                              // 1684
            if (options.useCurrent && !options.keepInvalid && date.isAfter(maxDate)) {                                 // 1685
                setValue(options.maxDate);                                                                             // 1686
            }                                                                                                          // 1687
            if (viewDate.isAfter(parsedDate)) {                                                                        // 1688
                viewDate = parsedDate.clone().subtract(options.stepping, 'm');                                         // 1689
            }                                                                                                          // 1690
            update();                                                                                                  // 1691
            return picker;                                                                                             // 1692
        };                                                                                                             // 1693
                                                                                                                       // 1694
        picker.minDate = function (minDate) {                                                                          // 1695
            if (arguments.length === 0) {                                                                              // 1696
                return options.minDate ? options.minDate.clone() : options.minDate;                                    // 1697
            }                                                                                                          // 1698
                                                                                                                       // 1699
            if ((typeof minDate === 'boolean') && minDate === false) {                                                 // 1700
                options.minDate = false;                                                                               // 1701
                update();                                                                                              // 1702
                return picker;                                                                                         // 1703
            }                                                                                                          // 1704
                                                                                                                       // 1705
            if (typeof minDate === 'string') {                                                                         // 1706
                if (minDate === 'now' || minDate === 'moment') {                                                       // 1707
                    minDate = getMoment();                                                                             // 1708
                }                                                                                                      // 1709
            }                                                                                                          // 1710
                                                                                                                       // 1711
            var parsedDate = parseInputDate(minDate);                                                                  // 1712
                                                                                                                       // 1713
            if (!parsedDate.isValid()) {                                                                               // 1714
                throw new TypeError('minDate() Could not parse date parameter: ' + minDate);                           // 1715
            }                                                                                                          // 1716
            if (options.maxDate && parsedDate.isAfter(options.maxDate)) {                                              // 1717
                throw new TypeError('minDate() date parameter is after options.maxDate: ' + parsedDate.format(actualFormat));
            }                                                                                                          // 1719
            options.minDate = parsedDate;                                                                              // 1720
            if (options.useCurrent && !options.keepInvalid && date.isBefore(minDate)) {                                // 1721
                setValue(options.minDate);                                                                             // 1722
            }                                                                                                          // 1723
            if (viewDate.isBefore(parsedDate)) {                                                                       // 1724
                viewDate = parsedDate.clone().add(options.stepping, 'm');                                              // 1725
            }                                                                                                          // 1726
            update();                                                                                                  // 1727
            return picker;                                                                                             // 1728
        };                                                                                                             // 1729
                                                                                                                       // 1730
        picker.defaultDate = function (defaultDate) {                                                                  // 1731
            ///<signature helpKeyword="$.fn.datetimepicker.defaultDate">                                               // 1732
            ///<summary>Returns a moment with the options.defaultDate option configuration or false if not set</summary>
            ///<returns type="Moment">date.clone()</returns>                                                           // 1734
            ///</signature>                                                                                            // 1735
            ///<signature>                                                                                             // 1736
            ///<summary>Will set the picker's inital date. If a boolean:false value is passed the options.defaultDate parameter is cleared.</summary>
            ///<param name="defaultDate" locid="$.fn.datetimepicker.defaultDate_p:defaultDate">Takes a string, Date, moment, boolean:false</param>
            ///</signature>                                                                                            // 1739
            if (arguments.length === 0) {                                                                              // 1740
                return options.defaultDate ? options.defaultDate.clone() : options.defaultDate;                        // 1741
            }                                                                                                          // 1742
            if (!defaultDate) {                                                                                        // 1743
                options.defaultDate = false;                                                                           // 1744
                return picker;                                                                                         // 1745
            }                                                                                                          // 1746
                                                                                                                       // 1747
            if (typeof defaultDate === 'string') {                                                                     // 1748
                if (defaultDate === 'now' || defaultDate === 'moment') {                                               // 1749
                    defaultDate = getMoment();                                                                         // 1750
                }                                                                                                      // 1751
            }                                                                                                          // 1752
                                                                                                                       // 1753
            var parsedDate = parseInputDate(defaultDate);                                                              // 1754
            if (!parsedDate.isValid()) {                                                                               // 1755
                throw new TypeError('defaultDate() Could not parse date parameter: ' + defaultDate);                   // 1756
            }                                                                                                          // 1757
            if (!isValid(parsedDate)) {                                                                                // 1758
                throw new TypeError('defaultDate() date passed is invalid according to component setup validations');  // 1759
            }                                                                                                          // 1760
                                                                                                                       // 1761
            options.defaultDate = parsedDate;                                                                          // 1762
                                                                                                                       // 1763
            if ((options.defaultDate && options.inline) || input.val().trim() === '') {                                // 1764
                setValue(options.defaultDate);                                                                         // 1765
            }                                                                                                          // 1766
            return picker;                                                                                             // 1767
        };                                                                                                             // 1768
                                                                                                                       // 1769
        picker.locale = function (locale) {                                                                            // 1770
            if (arguments.length === 0) {                                                                              // 1771
                return options.locale;                                                                                 // 1772
            }                                                                                                          // 1773
                                                                                                                       // 1774
            if (!moment.localeData(locale)) {                                                                          // 1775
                throw new TypeError('locale() locale ' + locale + ' is not loaded from moment locales!');              // 1776
            }                                                                                                          // 1777
                                                                                                                       // 1778
            options.locale = locale;                                                                                   // 1779
            date.locale(options.locale);                                                                               // 1780
            viewDate.locale(options.locale);                                                                           // 1781
                                                                                                                       // 1782
            if (actualFormat) {                                                                                        // 1783
                initFormatting(); // reinit formatting                                                                 // 1784
            }                                                                                                          // 1785
            if (widget) {                                                                                              // 1786
                hide();                                                                                                // 1787
                show();                                                                                                // 1788
            }                                                                                                          // 1789
            return picker;                                                                                             // 1790
        };                                                                                                             // 1791
                                                                                                                       // 1792
        picker.stepping = function (stepping) {                                                                        // 1793
            if (arguments.length === 0) {                                                                              // 1794
                return options.stepping;                                                                               // 1795
            }                                                                                                          // 1796
                                                                                                                       // 1797
            stepping = parseInt(stepping, 10);                                                                         // 1798
            if (isNaN(stepping) || stepping < 1) {                                                                     // 1799
                stepping = 1;                                                                                          // 1800
            }                                                                                                          // 1801
            options.stepping = stepping;                                                                               // 1802
            return picker;                                                                                             // 1803
        };                                                                                                             // 1804
                                                                                                                       // 1805
        picker.useCurrent = function (useCurrent) {                                                                    // 1806
            var useCurrentOptions = ['year', 'month', 'day', 'hour', 'minute'];                                        // 1807
            if (arguments.length === 0) {                                                                              // 1808
                return options.useCurrent;                                                                             // 1809
            }                                                                                                          // 1810
                                                                                                                       // 1811
            if ((typeof useCurrent !== 'boolean') && (typeof useCurrent !== 'string')) {                               // 1812
                throw new TypeError('useCurrent() expects a boolean or string parameter');                             // 1813
            }                                                                                                          // 1814
            if (typeof useCurrent === 'string' && useCurrentOptions.indexOf(useCurrent.toLowerCase()) === -1) {        // 1815
                throw new TypeError('useCurrent() expects a string parameter of ' + useCurrentOptions.join(', '));     // 1816
            }                                                                                                          // 1817
            options.useCurrent = useCurrent;                                                                           // 1818
            return picker;                                                                                             // 1819
        };                                                                                                             // 1820
                                                                                                                       // 1821
        picker.collapse = function (collapse) {                                                                        // 1822
            if (arguments.length === 0) {                                                                              // 1823
                return options.collapse;                                                                               // 1824
            }                                                                                                          // 1825
                                                                                                                       // 1826
            if (typeof collapse !== 'boolean') {                                                                       // 1827
                throw new TypeError('collapse() expects a boolean parameter');                                         // 1828
            }                                                                                                          // 1829
            if (options.collapse === collapse) {                                                                       // 1830
                return picker;                                                                                         // 1831
            }                                                                                                          // 1832
            options.collapse = collapse;                                                                               // 1833
            if (widget) {                                                                                              // 1834
                hide();                                                                                                // 1835
                show();                                                                                                // 1836
            }                                                                                                          // 1837
            return picker;                                                                                             // 1838
        };                                                                                                             // 1839
                                                                                                                       // 1840
        picker.icons = function (icons) {                                                                              // 1841
            if (arguments.length === 0) {                                                                              // 1842
                return $.extend({}, options.icons);                                                                    // 1843
            }                                                                                                          // 1844
                                                                                                                       // 1845
            if (!(icons instanceof Object)) {                                                                          // 1846
                throw new TypeError('icons() expects parameter to be an Object');                                      // 1847
            }                                                                                                          // 1848
            $.extend(options.icons, icons);                                                                            // 1849
            if (widget) {                                                                                              // 1850
                hide();                                                                                                // 1851
                show();                                                                                                // 1852
            }                                                                                                          // 1853
            return picker;                                                                                             // 1854
        };                                                                                                             // 1855
                                                                                                                       // 1856
        picker.tooltips = function (tooltips) {                                                                        // 1857
            if (arguments.length === 0) {                                                                              // 1858
                return $.extend({}, options.tooltips);                                                                 // 1859
            }                                                                                                          // 1860
                                                                                                                       // 1861
            if (!(tooltips instanceof Object)) {                                                                       // 1862
                throw new TypeError('tooltips() expects parameter to be an Object');                                   // 1863
            }                                                                                                          // 1864
            $.extend(options.tooltips, tooltips);                                                                      // 1865
            if (widget) {                                                                                              // 1866
                hide();                                                                                                // 1867
                show();                                                                                                // 1868
            }                                                                                                          // 1869
            return picker;                                                                                             // 1870
        };                                                                                                             // 1871
                                                                                                                       // 1872
        picker.useStrict = function (useStrict) {                                                                      // 1873
            if (arguments.length === 0) {                                                                              // 1874
                return options.useStrict;                                                                              // 1875
            }                                                                                                          // 1876
                                                                                                                       // 1877
            if (typeof useStrict !== 'boolean') {                                                                      // 1878
                throw new TypeError('useStrict() expects a boolean parameter');                                        // 1879
            }                                                                                                          // 1880
            options.useStrict = useStrict;                                                                             // 1881
            return picker;                                                                                             // 1882
        };                                                                                                             // 1883
                                                                                                                       // 1884
        picker.sideBySide = function (sideBySide) {                                                                    // 1885
            if (arguments.length === 0) {                                                                              // 1886
                return options.sideBySide;                                                                             // 1887
            }                                                                                                          // 1888
                                                                                                                       // 1889
            if (typeof sideBySide !== 'boolean') {                                                                     // 1890
                throw new TypeError('sideBySide() expects a boolean parameter');                                       // 1891
            }                                                                                                          // 1892
            options.sideBySide = sideBySide;                                                                           // 1893
            if (widget) {                                                                                              // 1894
                hide();                                                                                                // 1895
                show();                                                                                                // 1896
            }                                                                                                          // 1897
            return picker;                                                                                             // 1898
        };                                                                                                             // 1899
                                                                                                                       // 1900
        picker.viewMode = function (viewMode) {                                                                        // 1901
            if (arguments.length === 0) {                                                                              // 1902
                return options.viewMode;                                                                               // 1903
            }                                                                                                          // 1904
                                                                                                                       // 1905
            if (typeof viewMode !== 'string') {                                                                        // 1906
                throw new TypeError('viewMode() expects a string parameter');                                          // 1907
            }                                                                                                          // 1908
                                                                                                                       // 1909
            if (viewModes.indexOf(viewMode) === -1) {                                                                  // 1910
                throw new TypeError('viewMode() parameter must be one of (' + viewModes.join(', ') + ') value');       // 1911
            }                                                                                                          // 1912
                                                                                                                       // 1913
            options.viewMode = viewMode;                                                                               // 1914
            currentViewMode = Math.max(viewModes.indexOf(viewMode), minViewModeNumber);                                // 1915
                                                                                                                       // 1916
            showMode();                                                                                                // 1917
            return picker;                                                                                             // 1918
        };                                                                                                             // 1919
                                                                                                                       // 1920
        picker.toolbarPlacement = function (toolbarPlacement) {                                                        // 1921
            if (arguments.length === 0) {                                                                              // 1922
                return options.toolbarPlacement;                                                                       // 1923
            }                                                                                                          // 1924
                                                                                                                       // 1925
            if (typeof toolbarPlacement !== 'string') {                                                                // 1926
                throw new TypeError('toolbarPlacement() expects a string parameter');                                  // 1927
            }                                                                                                          // 1928
            if (toolbarPlacements.indexOf(toolbarPlacement) === -1) {                                                  // 1929
                throw new TypeError('toolbarPlacement() parameter must be one of (' + toolbarPlacements.join(', ') + ') value');
            }                                                                                                          // 1931
            options.toolbarPlacement = toolbarPlacement;                                                               // 1932
                                                                                                                       // 1933
            if (widget) {                                                                                              // 1934
                hide();                                                                                                // 1935
                show();                                                                                                // 1936
            }                                                                                                          // 1937
            return picker;                                                                                             // 1938
        };                                                                                                             // 1939
                                                                                                                       // 1940
        picker.widgetPositioning = function (widgetPositioning) {                                                      // 1941
            if (arguments.length === 0) {                                                                              // 1942
                return $.extend({}, options.widgetPositioning);                                                        // 1943
            }                                                                                                          // 1944
                                                                                                                       // 1945
            if (({}).toString.call(widgetPositioning) !== '[object Object]') {                                         // 1946
                throw new TypeError('widgetPositioning() expects an object variable');                                 // 1947
            }                                                                                                          // 1948
            if (widgetPositioning.horizontal) {                                                                        // 1949
                if (typeof widgetPositioning.horizontal !== 'string') {                                                // 1950
                    throw new TypeError('widgetPositioning() horizontal variable must be a string');                   // 1951
                }                                                                                                      // 1952
                widgetPositioning.horizontal = widgetPositioning.horizontal.toLowerCase();                             // 1953
                if (horizontalModes.indexOf(widgetPositioning.horizontal) === -1) {                                    // 1954
                    throw new TypeError('widgetPositioning() expects horizontal parameter to be one of (' + horizontalModes.join(', ') + ')');
                }                                                                                                      // 1956
                options.widgetPositioning.horizontal = widgetPositioning.horizontal;                                   // 1957
            }                                                                                                          // 1958
            if (widgetPositioning.vertical) {                                                                          // 1959
                if (typeof widgetPositioning.vertical !== 'string') {                                                  // 1960
                    throw new TypeError('widgetPositioning() vertical variable must be a string');                     // 1961
                }                                                                                                      // 1962
                widgetPositioning.vertical = widgetPositioning.vertical.toLowerCase();                                 // 1963
                if (verticalModes.indexOf(widgetPositioning.vertical) === -1) {                                        // 1964
                    throw new TypeError('widgetPositioning() expects vertical parameter to be one of (' + verticalModes.join(', ') + ')');
                }                                                                                                      // 1966
                options.widgetPositioning.vertical = widgetPositioning.vertical;                                       // 1967
            }                                                                                                          // 1968
            update();                                                                                                  // 1969
            return picker;                                                                                             // 1970
        };                                                                                                             // 1971
                                                                                                                       // 1972
        picker.calendarWeeks = function (calendarWeeks) {                                                              // 1973
            if (arguments.length === 0) {                                                                              // 1974
                return options.calendarWeeks;                                                                          // 1975
            }                                                                                                          // 1976
                                                                                                                       // 1977
            if (typeof calendarWeeks !== 'boolean') {                                                                  // 1978
                throw new TypeError('calendarWeeks() expects parameter to be a boolean value');                        // 1979
            }                                                                                                          // 1980
                                                                                                                       // 1981
            options.calendarWeeks = calendarWeeks;                                                                     // 1982
            update();                                                                                                  // 1983
            return picker;                                                                                             // 1984
        };                                                                                                             // 1985
                                                                                                                       // 1986
        picker.showTodayButton = function (showTodayButton) {                                                          // 1987
            if (arguments.length === 0) {                                                                              // 1988
                return options.showTodayButton;                                                                        // 1989
            }                                                                                                          // 1990
                                                                                                                       // 1991
            if (typeof showTodayButton !== 'boolean') {                                                                // 1992
                throw new TypeError('showTodayButton() expects a boolean parameter');                                  // 1993
            }                                                                                                          // 1994
                                                                                                                       // 1995
            options.showTodayButton = showTodayButton;                                                                 // 1996
            if (widget) {                                                                                              // 1997
                hide();                                                                                                // 1998
                show();                                                                                                // 1999
            }                                                                                                          // 2000
            return picker;                                                                                             // 2001
        };                                                                                                             // 2002
                                                                                                                       // 2003
        picker.showClear = function (showClear) {                                                                      // 2004
            if (arguments.length === 0) {                                                                              // 2005
                return options.showClear;                                                                              // 2006
            }                                                                                                          // 2007
                                                                                                                       // 2008
            if (typeof showClear !== 'boolean') {                                                                      // 2009
                throw new TypeError('showClear() expects a boolean parameter');                                        // 2010
            }                                                                                                          // 2011
                                                                                                                       // 2012
            options.showClear = showClear;                                                                             // 2013
            if (widget) {                                                                                              // 2014
                hide();                                                                                                // 2015
                show();                                                                                                // 2016
            }                                                                                                          // 2017
            return picker;                                                                                             // 2018
        };                                                                                                             // 2019
                                                                                                                       // 2020
        picker.widgetParent = function (widgetParent) {                                                                // 2021
            if (arguments.length === 0) {                                                                              // 2022
                return options.widgetParent;                                                                           // 2023
            }                                                                                                          // 2024
                                                                                                                       // 2025
            if (typeof widgetParent === 'string') {                                                                    // 2026
                widgetParent = $(widgetParent);                                                                        // 2027
            }                                                                                                          // 2028
                                                                                                                       // 2029
            if (widgetParent !== null && (typeof widgetParent !== 'string' && !(widgetParent instanceof $))) {         // 2030
                throw new TypeError('widgetParent() expects a string or a jQuery object parameter');                   // 2031
            }                                                                                                          // 2032
                                                                                                                       // 2033
            options.widgetParent = widgetParent;                                                                       // 2034
            if (widget) {                                                                                              // 2035
                hide();                                                                                                // 2036
                show();                                                                                                // 2037
            }                                                                                                          // 2038
            return picker;                                                                                             // 2039
        };                                                                                                             // 2040
                                                                                                                       // 2041
        picker.keepOpen = function (keepOpen) {                                                                        // 2042
            if (arguments.length === 0) {                                                                              // 2043
                return options.keepOpen;                                                                               // 2044
            }                                                                                                          // 2045
                                                                                                                       // 2046
            if (typeof keepOpen !== 'boolean') {                                                                       // 2047
                throw new TypeError('keepOpen() expects a boolean parameter');                                         // 2048
            }                                                                                                          // 2049
                                                                                                                       // 2050
            options.keepOpen = keepOpen;                                                                               // 2051
            return picker;                                                                                             // 2052
        };                                                                                                             // 2053
                                                                                                                       // 2054
        picker.focusOnShow = function (focusOnShow) {                                                                  // 2055
            if (arguments.length === 0) {                                                                              // 2056
                return options.focusOnShow;                                                                            // 2057
            }                                                                                                          // 2058
                                                                                                                       // 2059
            if (typeof focusOnShow !== 'boolean') {                                                                    // 2060
                throw new TypeError('focusOnShow() expects a boolean parameter');                                      // 2061
            }                                                                                                          // 2062
                                                                                                                       // 2063
            options.focusOnShow = focusOnShow;                                                                         // 2064
            return picker;                                                                                             // 2065
        };                                                                                                             // 2066
                                                                                                                       // 2067
        picker.inline = function (inline) {                                                                            // 2068
            if (arguments.length === 0) {                                                                              // 2069
                return options.inline;                                                                                 // 2070
            }                                                                                                          // 2071
                                                                                                                       // 2072
            if (typeof inline !== 'boolean') {                                                                         // 2073
                throw new TypeError('inline() expects a boolean parameter');                                           // 2074
            }                                                                                                          // 2075
                                                                                                                       // 2076
            options.inline = inline;                                                                                   // 2077
            return picker;                                                                                             // 2078
        };                                                                                                             // 2079
                                                                                                                       // 2080
        picker.clear = function () {                                                                                   // 2081
            clear();                                                                                                   // 2082
            return picker;                                                                                             // 2083
        };                                                                                                             // 2084
                                                                                                                       // 2085
        picker.keyBinds = function (keyBinds) {                                                                        // 2086
            options.keyBinds = keyBinds;                                                                               // 2087
            return picker;                                                                                             // 2088
        };                                                                                                             // 2089
                                                                                                                       // 2090
        picker.getMoment = function (d) {                                                                              // 2091
            return getMoment(d);                                                                                       // 2092
        };                                                                                                             // 2093
                                                                                                                       // 2094
        picker.debug = function (debug) {                                                                              // 2095
            if (typeof debug !== 'boolean') {                                                                          // 2096
                throw new TypeError('debug() expects a boolean parameter');                                            // 2097
            }                                                                                                          // 2098
                                                                                                                       // 2099
            options.debug = debug;                                                                                     // 2100
            return picker;                                                                                             // 2101
        };                                                                                                             // 2102
                                                                                                                       // 2103
        picker.allowInputToggle = function (allowInputToggle) {                                                        // 2104
            if (arguments.length === 0) {                                                                              // 2105
                return options.allowInputToggle;                                                                       // 2106
            }                                                                                                          // 2107
                                                                                                                       // 2108
            if (typeof allowInputToggle !== 'boolean') {                                                               // 2109
                throw new TypeError('allowInputToggle() expects a boolean parameter');                                 // 2110
            }                                                                                                          // 2111
                                                                                                                       // 2112
            options.allowInputToggle = allowInputToggle;                                                               // 2113
            return picker;                                                                                             // 2114
        };                                                                                                             // 2115
                                                                                                                       // 2116
        picker.showClose = function (showClose) {                                                                      // 2117
            if (arguments.length === 0) {                                                                              // 2118
                return options.showClose;                                                                              // 2119
            }                                                                                                          // 2120
                                                                                                                       // 2121
            if (typeof showClose !== 'boolean') {                                                                      // 2122
                throw new TypeError('showClose() expects a boolean parameter');                                        // 2123
            }                                                                                                          // 2124
                                                                                                                       // 2125
            options.showClose = showClose;                                                                             // 2126
            return picker;                                                                                             // 2127
        };                                                                                                             // 2128
                                                                                                                       // 2129
        picker.keepInvalid = function (keepInvalid) {                                                                  // 2130
            if (arguments.length === 0) {                                                                              // 2131
                return options.keepInvalid;                                                                            // 2132
            }                                                                                                          // 2133
                                                                                                                       // 2134
            if (typeof keepInvalid !== 'boolean') {                                                                    // 2135
                throw new TypeError('keepInvalid() expects a boolean parameter');                                      // 2136
            }                                                                                                          // 2137
            options.keepInvalid = keepInvalid;                                                                         // 2138
            return picker;                                                                                             // 2139
        };                                                                                                             // 2140
                                                                                                                       // 2141
        picker.datepickerInput = function (datepickerInput) {                                                          // 2142
            if (arguments.length === 0) {                                                                              // 2143
                return options.datepickerInput;                                                                        // 2144
            }                                                                                                          // 2145
                                                                                                                       // 2146
            if (typeof datepickerInput !== 'string') {                                                                 // 2147
                throw new TypeError('datepickerInput() expects a string parameter');                                   // 2148
            }                                                                                                          // 2149
                                                                                                                       // 2150
            options.datepickerInput = datepickerInput;                                                                 // 2151
            return picker;                                                                                             // 2152
        };                                                                                                             // 2153
                                                                                                                       // 2154
        picker.parseInputDate = function (parseInputDate) {                                                            // 2155
            if (arguments.length === 0) {                                                                              // 2156
                return options.parseInputDate;                                                                         // 2157
            }                                                                                                          // 2158
                                                                                                                       // 2159
            if (typeof parseInputDate !== 'function') {                                                                // 2160
                throw new TypeError('parseInputDate() sholud be as function');                                         // 2161
            }                                                                                                          // 2162
                                                                                                                       // 2163
            options.parseInputDate = parseInputDate;                                                                   // 2164
                                                                                                                       // 2165
            return picker;                                                                                             // 2166
        };                                                                                                             // 2167
                                                                                                                       // 2168
        picker.disabledTimeIntervals = function (disabledTimeIntervals) {                                              // 2169
            ///<signature helpKeyword="$.fn.datetimepicker.disabledTimeIntervals">                                     // 2170
            ///<summary>Returns an array with the currently set disabled dates on the component.</summary>             // 2171
            ///<returns type="array">options.disabledTimeIntervals</returns>                                           // 2172
            ///</signature>                                                                                            // 2173
            ///<signature>                                                                                             // 2174
            ///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of
            ///options.enabledDates if such exist.</summary>                                                           // 2176
            ///<param name="dates" locid="$.fn.datetimepicker.disabledTimeIntervals_p:dates">Takes an [ string or Date or moment ] of values and allows the user to select only from those days.</param>
            ///</signature>                                                                                            // 2178
            if (arguments.length === 0) {                                                                              // 2179
                return (options.disabledTimeIntervals ? $.extend({}, options.disabledTimeIntervals) : options.disabledTimeIntervals);
            }                                                                                                          // 2181
                                                                                                                       // 2182
            if (!disabledTimeIntervals) {                                                                              // 2183
                options.disabledTimeIntervals = false;                                                                 // 2184
                update();                                                                                              // 2185
                return picker;                                                                                         // 2186
            }                                                                                                          // 2187
            if (!(disabledTimeIntervals instanceof Array)) {                                                           // 2188
                throw new TypeError('disabledTimeIntervals() expects an array parameter');                             // 2189
            }                                                                                                          // 2190
            options.disabledTimeIntervals = disabledTimeIntervals;                                                     // 2191
            update();                                                                                                  // 2192
            return picker;                                                                                             // 2193
        };                                                                                                             // 2194
                                                                                                                       // 2195
        picker.disabledHours = function (hours) {                                                                      // 2196
            ///<signature helpKeyword="$.fn.datetimepicker.disabledHours">                                             // 2197
            ///<summary>Returns an array with the currently set disabled hours on the component.</summary>             // 2198
            ///<returns type="array">options.disabledHours</returns>                                                   // 2199
            ///</signature>                                                                                            // 2200
            ///<signature>                                                                                             // 2201
            ///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of
            ///options.enabledHours if such exist.</summary>                                                           // 2203
            ///<param name="hours" locid="$.fn.datetimepicker.disabledHours_p:hours">Takes an [ int ] of values and disallows the user to select only from those hours.</param>
            ///</signature>                                                                                            // 2205
            if (arguments.length === 0) {                                                                              // 2206
                return (options.disabledHours ? $.extend({}, options.disabledHours) : options.disabledHours);          // 2207
            }                                                                                                          // 2208
                                                                                                                       // 2209
            if (!hours) {                                                                                              // 2210
                options.disabledHours = false;                                                                         // 2211
                update();                                                                                              // 2212
                return picker;                                                                                         // 2213
            }                                                                                                          // 2214
            if (!(hours instanceof Array)) {                                                                           // 2215
                throw new TypeError('disabledHours() expects an array parameter');                                     // 2216
            }                                                                                                          // 2217
            options.disabledHours = indexGivenHours(hours);                                                            // 2218
            options.enabledHours = false;                                                                              // 2219
            if (options.useCurrent && !options.keepInvalid) {                                                          // 2220
                var tries = 0;                                                                                         // 2221
                while (!isValid(date, 'h')) {                                                                          // 2222
                    date.add(1, 'h');                                                                                  // 2223
                    if (tries === 24) {                                                                                // 2224
                        throw 'Tried 24 times to find a valid date';                                                   // 2225
                    }                                                                                                  // 2226
                    tries++;                                                                                           // 2227
                }                                                                                                      // 2228
                setValue(date);                                                                                        // 2229
            }                                                                                                          // 2230
            update();                                                                                                  // 2231
            return picker;                                                                                             // 2232
        };                                                                                                             // 2233
                                                                                                                       // 2234
        picker.enabledHours = function (hours) {                                                                       // 2235
            ///<signature helpKeyword="$.fn.datetimepicker.enabledHours">                                              // 2236
            ///<summary>Returns an array with the currently set enabled hours on the component.</summary>              // 2237
            ///<returns type="array">options.enabledHours</returns>                                                    // 2238
            ///</signature>                                                                                            // 2239
            ///<signature>                                                                                             // 2240
            ///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of options.disabledHours if such exist.</summary>
            ///<param name="hours" locid="$.fn.datetimepicker.enabledHours_p:hours">Takes an [ int ] of values and allows the user to select only from those hours.</param>
            ///</signature>                                                                                            // 2243
            if (arguments.length === 0) {                                                                              // 2244
                return (options.enabledHours ? $.extend({}, options.enabledHours) : options.enabledHours);             // 2245
            }                                                                                                          // 2246
                                                                                                                       // 2247
            if (!hours) {                                                                                              // 2248
                options.enabledHours = false;                                                                          // 2249
                update();                                                                                              // 2250
                return picker;                                                                                         // 2251
            }                                                                                                          // 2252
            if (!(hours instanceof Array)) {                                                                           // 2253
                throw new TypeError('enabledHours() expects an array parameter');                                      // 2254
            }                                                                                                          // 2255
            options.enabledHours = indexGivenHours(hours);                                                             // 2256
            options.disabledHours = false;                                                                             // 2257
            if (options.useCurrent && !options.keepInvalid) {                                                          // 2258
                var tries = 0;                                                                                         // 2259
                while (!isValid(date, 'h')) {                                                                          // 2260
                    date.add(1, 'h');                                                                                  // 2261
                    if (tries === 24) {                                                                                // 2262
                        throw 'Tried 24 times to find a valid date';                                                   // 2263
                    }                                                                                                  // 2264
                    tries++;                                                                                           // 2265
                }                                                                                                      // 2266
                setValue(date);                                                                                        // 2267
            }                                                                                                          // 2268
            update();                                                                                                  // 2269
            return picker;                                                                                             // 2270
        };                                                                                                             // 2271
                                                                                                                       // 2272
        picker.viewDate = function (newDate) {                                                                         // 2273
            ///<signature helpKeyword="$.fn.datetimepicker.viewDate">                                                  // 2274
            ///<summary>Returns the component's model current viewDate, a moment object or null if not set.</summary>  // 2275
            ///<returns type="Moment">viewDate.clone()</returns>                                                       // 2276
            ///</signature>                                                                                            // 2277
            ///<signature>                                                                                             // 2278
            ///<summary>Sets the components model current moment to it. Passing a null value unsets the components model current moment. Parsing of the newDate parameter is made using moment library with the options.format and options.useStrict components configuration.</summary>
            ///<param name="newDate" locid="$.fn.datetimepicker.date_p:newDate">Takes string, viewDate, moment, null parameter.</param>
            ///</signature>                                                                                            // 2281
            if (arguments.length === 0) {                                                                              // 2282
                return viewDate.clone();                                                                               // 2283
            }                                                                                                          // 2284
                                                                                                                       // 2285
            if (!newDate) {                                                                                            // 2286
                viewDate = date.clone();                                                                               // 2287
                return picker;                                                                                         // 2288
            }                                                                                                          // 2289
                                                                                                                       // 2290
            if (typeof newDate !== 'string' && !moment.isMoment(newDate) && !(newDate instanceof Date)) {              // 2291
                throw new TypeError('viewDate() parameter must be one of [string, moment or Date]');                   // 2292
            }                                                                                                          // 2293
                                                                                                                       // 2294
            viewDate = parseInputDate(newDate);                                                                        // 2295
            viewUpdate();                                                                                              // 2296
            return picker;                                                                                             // 2297
        };                                                                                                             // 2298
                                                                                                                       // 2299
        // initializing element and component attributes                                                               // 2300
        if (element.is('input')) {                                                                                     // 2301
            input = element;                                                                                           // 2302
        } else {                                                                                                       // 2303
            input = element.find(options.datepickerInput);                                                             // 2304
            if (input.size() === 0) {                                                                                  // 2305
                input = element.find('input');                                                                         // 2306
            } else if (!input.is('input')) {                                                                           // 2307
                throw new Error('CSS class "' + options.datepickerInput + '" cannot be applied to non input element');
            }                                                                                                          // 2309
        }                                                                                                              // 2310
                                                                                                                       // 2311
        if (element.hasClass('input-group')) {                                                                         // 2312
            // in case there is more then one 'input-group-addon' Issue #48                                            // 2313
            if (element.find('.datepickerbutton').size() === 0) {                                                      // 2314
                component = element.find('.input-group-addon');                                                        // 2315
            } else {                                                                                                   // 2316
                component = element.find('.datepickerbutton');                                                         // 2317
            }                                                                                                          // 2318
        }                                                                                                              // 2319
                                                                                                                       // 2320
        if (!options.inline && !input.is('input')) {                                                                   // 2321
            throw new Error('Could not initialize DateTimePicker without an input element');                           // 2322
        }                                                                                                              // 2323
                                                                                                                       // 2324
        // Set defaults for date here now instead of in var declaration                                                // 2325
        date = getMoment();                                                                                            // 2326
        viewDate = date.clone();                                                                                       // 2327
                                                                                                                       // 2328
        $.extend(true, options, dataToOptions());                                                                      // 2329
                                                                                                                       // 2330
        picker.options(options);                                                                                       // 2331
                                                                                                                       // 2332
        initFormatting();                                                                                              // 2333
                                                                                                                       // 2334
        attachDatePickerElementEvents();                                                                               // 2335
                                                                                                                       // 2336
        if (input.prop('disabled')) {                                                                                  // 2337
            picker.disable();                                                                                          // 2338
        }                                                                                                              // 2339
        if (input.is('input') && input.val().trim().length !== 0) {                                                    // 2340
            setValue(parseInputDate(input.val().trim()));                                                              // 2341
        }                                                                                                              // 2342
        else if (options.defaultDate && input.attr('placeholder') === undefined) {                                     // 2343
            setValue(options.defaultDate);                                                                             // 2344
        }                                                                                                              // 2345
        if (options.inline) {                                                                                          // 2346
            show();                                                                                                    // 2347
        }                                                                                                              // 2348
        return picker;                                                                                                 // 2349
    };                                                                                                                 // 2350
                                                                                                                       // 2351
    /********************************************************************************                                  // 2352
     *                                                                                                                 // 2353
     * jQuery plugin constructor and defaults object                                                                   // 2354
     *                                                                                                                 // 2355
     ********************************************************************************/                                 // 2356
                                                                                                                       // 2357
    $.fn.datetimepicker = function (options) {                                                                         // 2358
        return this.each(function () {                                                                                 // 2359
            var $this = $(this);                                                                                       // 2360
            if (!$this.data('DateTimePicker')) {                                                                       // 2361
                // create a private copy of the defaults object                                                        // 2362
                options = $.extend(true, {}, $.fn.datetimepicker.defaults, options);                                   // 2363
                $this.data('DateTimePicker', dateTimePicker($this, options));                                          // 2364
            }                                                                                                          // 2365
        });                                                                                                            // 2366
    };                                                                                                                 // 2367
                                                                                                                       // 2368
    $.fn.datetimepicker.defaults = {                                                                                   // 2369
        timeZone: 'Etc/UTC',                                                                                           // 2370
        format: false,                                                                                                 // 2371
        dayViewHeaderFormat: 'MMMM YYYY',                                                                              // 2372
        extraFormats: false,                                                                                           // 2373
        stepping: 1,                                                                                                   // 2374
        minDate: false,                                                                                                // 2375
        maxDate: false,                                                                                                // 2376
        useCurrent: true,                                                                                              // 2377
        collapse: true,                                                                                                // 2378
        locale: moment.locale(),                                                                                       // 2379
        defaultDate: false,                                                                                            // 2380
        disabledDates: false,                                                                                          // 2381
        enabledDates: false,                                                                                           // 2382
        icons: {                                                                                                       // 2383
            time: 'glyphicon glyphicon-time',                                                                          // 2384
            date: 'glyphicon glyphicon-calendar',                                                                      // 2385
            up: 'glyphicon glyphicon-chevron-up',                                                                      // 2386
            down: 'glyphicon glyphicon-chevron-down',                                                                  // 2387
            previous: 'glyphicon glyphicon-chevron-left',                                                              // 2388
            next: 'glyphicon glyphicon-chevron-right',                                                                 // 2389
            today: 'glyphicon glyphicon-screenshot',                                                                   // 2390
            clear: 'glyphicon glyphicon-trash',                                                                        // 2391
            close: 'glyphicon glyphicon-remove'                                                                        // 2392
        },                                                                                                             // 2393
        tooltips: {                                                                                                    // 2394
            today: 'Go to today',                                                                                      // 2395
            clear: 'Clear selection',                                                                                  // 2396
            close: 'Close the picker',                                                                                 // 2397
            selectMonth: 'Select Month',                                                                               // 2398
            prevMonth: 'Previous Month',                                                                               // 2399
            nextMonth: 'Next Month',                                                                                   // 2400
            selectYear: 'Select Year',                                                                                 // 2401
            prevYear: 'Previous Year',                                                                                 // 2402
            nextYear: 'Next Year',                                                                                     // 2403
            selectDecade: 'Select Decade',                                                                             // 2404
            prevDecade: 'Previous Decade',                                                                             // 2405
            nextDecade: 'Next Decade',                                                                                 // 2406
            prevCentury: 'Previous Century',                                                                           // 2407
            nextCentury: 'Next Century',                                                                               // 2408
            pickHour: 'Pick Hour',                                                                                     // 2409
            incrementHour: 'Increment Hour',                                                                           // 2410
            decrementHour: 'Decrement Hour',                                                                           // 2411
            pickMinute: 'Pick Minute',                                                                                 // 2412
            incrementMinute: 'Increment Minute',                                                                       // 2413
            decrementMinute: 'Decrement Minute',                                                                       // 2414
            pickSecond: 'Pick Second',                                                                                 // 2415
            incrementSecond: 'Increment Second',                                                                       // 2416
            decrementSecond: 'Decrement Second',                                                                       // 2417
            togglePeriod: 'Toggle Period',                                                                             // 2418
            selectTime: 'Select Time'                                                                                  // 2419
        },                                                                                                             // 2420
        useStrict: false,                                                                                              // 2421
        sideBySide: false,                                                                                             // 2422
        daysOfWeekDisabled: false,                                                                                     // 2423
        calendarWeeks: false,                                                                                          // 2424
        viewMode: 'days',                                                                                              // 2425
        toolbarPlacement: 'default',                                                                                   // 2426
        showTodayButton: false,                                                                                        // 2427
        showClear: false,                                                                                              // 2428
        showClose: false,                                                                                              // 2429
        widgetPositioning: {                                                                                           // 2430
            horizontal: 'auto',                                                                                        // 2431
            vertical: 'auto'                                                                                           // 2432
        },                                                                                                             // 2433
        widgetParent: null,                                                                                            // 2434
        ignoreReadonly: false,                                                                                         // 2435
        keepOpen: false,                                                                                               // 2436
        focusOnShow: true,                                                                                             // 2437
        inline: false,                                                                                                 // 2438
        keepInvalid: false,                                                                                            // 2439
        datepickerInput: '.datepickerinput',                                                                           // 2440
        keyBinds: {                                                                                                    // 2441
            up: function (widget) {                                                                                    // 2442
                if (!widget) {                                                                                         // 2443
                    return;                                                                                            // 2444
                }                                                                                                      // 2445
                var d = this.date() || this.getMoment();                                                               // 2446
                if (widget.find('.datepicker').is(':visible')) {                                                       // 2447
                    this.date(d.clone().subtract(7, 'd'));                                                             // 2448
                } else {                                                                                               // 2449
                    this.date(d.clone().add(this.stepping(), 'm'));                                                    // 2450
                }                                                                                                      // 2451
            },                                                                                                         // 2452
            down: function (widget) {                                                                                  // 2453
                if (!widget) {                                                                                         // 2454
                    this.show();                                                                                       // 2455
                    return;                                                                                            // 2456
                }                                                                                                      // 2457
                var d = this.date() || this.getMoment();                                                               // 2458
                if (widget.find('.datepicker').is(':visible')) {                                                       // 2459
                    this.date(d.clone().add(7, 'd'));                                                                  // 2460
                } else {                                                                                               // 2461
                    this.date(d.clone().subtract(this.stepping(), 'm'));                                               // 2462
                }                                                                                                      // 2463
            },                                                                                                         // 2464
            'control up': function (widget) {                                                                          // 2465
                if (!widget) {                                                                                         // 2466
                    return;                                                                                            // 2467
                }                                                                                                      // 2468
                var d = this.date() || this.getMoment();                                                               // 2469
                if (widget.find('.datepicker').is(':visible')) {                                                       // 2470
                    this.date(d.clone().subtract(1, 'y'));                                                             // 2471
                } else {                                                                                               // 2472
                    this.date(d.clone().add(1, 'h'));                                                                  // 2473
                }                                                                                                      // 2474
            },                                                                                                         // 2475
            'control down': function (widget) {                                                                        // 2476
                if (!widget) {                                                                                         // 2477
                    return;                                                                                            // 2478
                }                                                                                                      // 2479
                var d = this.date() || this.getMoment();                                                               // 2480
                if (widget.find('.datepicker').is(':visible')) {                                                       // 2481
                    this.date(d.clone().add(1, 'y'));                                                                  // 2482
                } else {                                                                                               // 2483
                    this.date(d.clone().subtract(1, 'h'));                                                             // 2484
                }                                                                                                      // 2485
            },                                                                                                         // 2486
            left: function (widget) {                                                                                  // 2487
                if (!widget) {                                                                                         // 2488
                    return;                                                                                            // 2489
                }                                                                                                      // 2490
                var d = this.date() || this.getMoment();                                                               // 2491
                if (widget.find('.datepicker').is(':visible')) {                                                       // 2492
                    this.date(d.clone().subtract(1, 'd'));                                                             // 2493
                }                                                                                                      // 2494
            },                                                                                                         // 2495
            right: function (widget) {                                                                                 // 2496
                if (!widget) {                                                                                         // 2497
                    return;                                                                                            // 2498
                }                                                                                                      // 2499
                var d = this.date() || this.getMoment();                                                               // 2500
                if (widget.find('.datepicker').is(':visible')) {                                                       // 2501
                    this.date(d.clone().add(1, 'd'));                                                                  // 2502
                }                                                                                                      // 2503
            },                                                                                                         // 2504
            pageUp: function (widget) {                                                                                // 2505
                if (!widget) {                                                                                         // 2506
                    return;                                                                                            // 2507
                }                                                                                                      // 2508
                var d = this.date() || this.getMoment();                                                               // 2509
                if (widget.find('.datepicker').is(':visible')) {                                                       // 2510
                    this.date(d.clone().subtract(1, 'M'));                                                             // 2511
                }                                                                                                      // 2512
            },                                                                                                         // 2513
            pageDown: function (widget) {                                                                              // 2514
                if (!widget) {                                                                                         // 2515
                    return;                                                                                            // 2516
                }                                                                                                      // 2517
                var d = this.date() || this.getMoment();                                                               // 2518
                if (widget.find('.datepicker').is(':visible')) {                                                       // 2519
                    this.date(d.clone().add(1, 'M'));                                                                  // 2520
                }                                                                                                      // 2521
            },                                                                                                         // 2522
            enter: function () {                                                                                       // 2523
                this.hide();                                                                                           // 2524
            },                                                                                                         // 2525
            escape: function () {                                                                                      // 2526
                this.hide();                                                                                           // 2527
            },                                                                                                         // 2528
            //tab: function (widget) { //this break the flow of the form. disabling for now                            // 2529
            //    var toggle = widget.find('.picker-switch a[data-action="togglePicker"]');                            // 2530
            //    if(toggle.length > 0) toggle.click();                                                                // 2531
            //},                                                                                                       // 2532
            'control space': function (widget) {                                                                       // 2533
                if (widget.find('.timepicker').is(':visible')) {                                                       // 2534
                    widget.find('.btn[data-action="togglePeriod"]').click();                                           // 2535
                }                                                                                                      // 2536
            },                                                                                                         // 2537
            t: function () {                                                                                           // 2538
                this.date(this.getMoment());                                                                           // 2539
            },                                                                                                         // 2540
            'delete': function () {                                                                                    // 2541
                this.clear();                                                                                          // 2542
            }                                                                                                          // 2543
        },                                                                                                             // 2544
        debug: false,                                                                                                  // 2545
        allowInputToggle: false,                                                                                       // 2546
        disabledTimeIntervals: false,                                                                                  // 2547
        disabledHours: false,                                                                                          // 2548
        enabledHours: false,                                                                                           // 2549
        viewDate: false                                                                                                // 2550
    };                                                                                                                 // 2551
}));                                                                                                                   // 2552
                                                                                                                       // 2553
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['tsega:bootstrap3-datetimepicker'] = {};

})();
