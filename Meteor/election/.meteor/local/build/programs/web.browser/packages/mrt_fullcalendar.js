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

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/mrt_fullcalendar/packages/mrt_fullcalendar.js                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
(function () {                                                                                                        // 1
                                                                                                                      // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/mrt:fullcalendar/lib/fullcalendar.js                                                                   //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
/*!                                                                                                                // 1
 * FullCalendar v1.6.1                                                                                             // 2
 * Docs & License: http://arshaw.com/fullcalendar/                                                                 // 3
 * (c) 2013 Adam Shaw                                                                                              // 4
 */                                                                                                                // 5
                                                                                                                   // 6
/*                                                                                                                 // 7
 * Use fullcalendar.css for basic styling.                                                                         // 8
 * For event drag & drop, requires jQuery UI draggable.                                                            // 9
 * For event resizing, requires jQuery UI resizable.                                                               // 10
 */                                                                                                                // 11
                                                                                                                   // 12
(function($, undefined) {                                                                                          // 13
                                                                                                                   // 14
                                                                                                                   // 15
;;                                                                                                                 // 16
                                                                                                                   // 17
var defaults = {                                                                                                   // 18
                                                                                                                   // 19
	// display                                                                                                        // 20
	defaultView: 'month',                                                                                             // 21
	aspectRatio: 1.35,                                                                                                // 22
	header: {                                                                                                         // 23
		left: 'title',                                                                                                   // 24
		center: '',                                                                                                      // 25
		right: 'today prev,next'                                                                                         // 26
	},                                                                                                                // 27
	weekends: true,                                                                                                   // 28
	weekNumbers: false,                                                                                               // 29
	weekNumberCalculation: 'iso',                                                                                     // 30
	weekNumberTitle: 'W',                                                                                             // 31
	                                                                                                                  // 32
	// editing                                                                                                        // 33
	//editable: false,                                                                                                // 34
	//disableDragging: false,                                                                                         // 35
	//disableResizing: false,                                                                                         // 36
	                                                                                                                  // 37
	allDayDefault: true,                                                                                              // 38
	ignoreTimezone: true,                                                                                             // 39
	                                                                                                                  // 40
	// event ajax                                                                                                     // 41
	lazyFetching: true,                                                                                               // 42
	startParam: 'start',                                                                                              // 43
	endParam: 'end',                                                                                                  // 44
	                                                                                                                  // 45
	// time formats                                                                                                   // 46
	titleFormat: {                                                                                                    // 47
		month: 'MMMM yyyy',                                                                                              // 48
		week: "MMM d[ yyyy]{ '&#8212;'[ MMM] d yyyy}",                                                                   // 49
		day: 'dddd, MMM d, yyyy'                                                                                         // 50
	},                                                                                                                // 51
	columnFormat: {                                                                                                   // 52
		month: 'ddd',                                                                                                    // 53
		week: 'ddd M/d',                                                                                                 // 54
		day: 'dddd M/d'                                                                                                  // 55
	},                                                                                                                // 56
	timeFormat: { // for event elements                                                                               // 57
		'': 'h(:mm)t' // default                                                                                         // 58
	},                                                                                                                // 59
	                                                                                                                  // 60
	// locale                                                                                                         // 61
	isRTL: false,                                                                                                     // 62
	firstDay: 0,                                                                                                      // 63
	monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
	monthNamesShort: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],                       // 65
	dayNames: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],                               // 66
	dayNamesShort: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],                                                       // 67
	buttonText: {                                                                                                     // 68
		prev: "<span class='fc-text-arrow'>&lsaquo;</span>",                                                             // 69
		next: "<span class='fc-text-arrow'>&rsaquo;</span>",                                                             // 70
		prevYear: "<span class='fc-text-arrow'>&laquo;</span>",                                                          // 71
		nextYear: "<span class='fc-text-arrow'>&raquo;</span>",                                                          // 72
		today: 'today',                                                                                                  // 73
		month: 'month',                                                                                                  // 74
		week: 'week',                                                                                                    // 75
		day: 'day'                                                                                                       // 76
	},                                                                                                                // 77
	                                                                                                                  // 78
	// jquery-ui theming                                                                                              // 79
	theme: false,                                                                                                     // 80
	buttonIcons: {                                                                                                    // 81
		prev: 'circle-triangle-w',                                                                                       // 82
		next: 'circle-triangle-e'                                                                                        // 83
	},                                                                                                                // 84
	                                                                                                                  // 85
	//selectable: false,                                                                                              // 86
	unselectAuto: true,                                                                                               // 87
	                                                                                                                  // 88
	dropAccept: '*'                                                                                                   // 89
	                                                                                                                  // 90
};                                                                                                                 // 91
                                                                                                                   // 92
// right-to-left defaults                                                                                          // 93
var rtlDefaults = {                                                                                                // 94
	header: {                                                                                                         // 95
		left: 'next,prev today',                                                                                         // 96
		center: '',                                                                                                      // 97
		right: 'title'                                                                                                   // 98
	},                                                                                                                // 99
	buttonText: {                                                                                                     // 100
		prev: "<span class='fc-text-arrow'>&rsaquo;</span>",                                                             // 101
		next: "<span class='fc-text-arrow'>&lsaquo;</span>",                                                             // 102
		prevYear: "<span class='fc-text-arrow'>&raquo;</span>",                                                          // 103
		nextYear: "<span class='fc-text-arrow'>&laquo;</span>"                                                           // 104
	},                                                                                                                // 105
	buttonIcons: {                                                                                                    // 106
		prev: 'circle-triangle-e',                                                                                       // 107
		next: 'circle-triangle-w'                                                                                        // 108
	}                                                                                                                 // 109
};                                                                                                                 // 110
                                                                                                                   // 111
                                                                                                                   // 112
                                                                                                                   // 113
;;                                                                                                                 // 114
                                                                                                                   // 115
var fc = $.fullCalendar = { version: "1.6.1" };                                                                    // 116
var fcViews = fc.views = {};                                                                                       // 117
                                                                                                                   // 118
                                                                                                                   // 119
$.fn.fullCalendar = function(options) {                                                                            // 120
                                                                                                                   // 121
                                                                                                                   // 122
	// method calling                                                                                                 // 123
	if (typeof options == 'string') {                                                                                 // 124
		var args = Array.prototype.slice.call(arguments, 1);                                                             // 125
		var res;                                                                                                         // 126
		this.each(function() {                                                                                           // 127
			var calendar = $.data(this, 'fullCalendar');                                                                    // 128
			if (calendar && $.isFunction(calendar[options])) {                                                              // 129
				var r = calendar[options].apply(calendar, args);                                                               // 130
				if (res === undefined) {                                                                                       // 131
					res = r;                                                                                                      // 132
				}                                                                                                              // 133
				if (options == 'destroy') {                                                                                    // 134
					$.removeData(this, 'fullCalendar');                                                                           // 135
				}                                                                                                              // 136
			}                                                                                                               // 137
		});                                                                                                              // 138
		if (res !== undefined) {                                                                                         // 139
			return res;                                                                                                     // 140
		}                                                                                                                // 141
		return this;                                                                                                     // 142
	}                                                                                                                 // 143
	                                                                                                                  // 144
	                                                                                                                  // 145
	// would like to have this logic in EventManager, but needs to happen before options are recursively extended     // 146
	var eventSources = options.eventSources || [];                                                                    // 147
	delete options.eventSources;                                                                                      // 148
	if (options.events) {                                                                                             // 149
		eventSources.push(options.events);                                                                               // 150
		delete options.events;                                                                                           // 151
	}                                                                                                                 // 152
	                                                                                                                  // 153
                                                                                                                   // 154
	options = $.extend(true, {},                                                                                      // 155
		defaults,                                                                                                        // 156
		(options.isRTL || options.isRTL===undefined && defaults.isRTL) ? rtlDefaults : {},                               // 157
		options                                                                                                          // 158
	);                                                                                                                // 159
	                                                                                                                  // 160
	                                                                                                                  // 161
	this.each(function(i, _element) {                                                                                 // 162
		var element = $(_element);                                                                                       // 163
		var calendar = new Calendar(element, options, eventSources);                                                     // 164
		element.data('fullCalendar', calendar); // TODO: look into memory leak implications                              // 165
		calendar.render();                                                                                               // 166
	});                                                                                                               // 167
	                                                                                                                  // 168
	                                                                                                                  // 169
	return this;                                                                                                      // 170
	                                                                                                                  // 171
};                                                                                                                 // 172
                                                                                                                   // 173
                                                                                                                   // 174
// function for adding/overriding defaults                                                                         // 175
function setDefaults(d) {                                                                                          // 176
	$.extend(true, defaults, d);                                                                                      // 177
}                                                                                                                  // 178
                                                                                                                   // 179
                                                                                                                   // 180
                                                                                                                   // 181
;;                                                                                                                 // 182
                                                                                                                   // 183
                                                                                                                   // 184
function Calendar(element, options, eventSources) {                                                                // 185
	var t = this;                                                                                                     // 186
	                                                                                                                  // 187
	                                                                                                                  // 188
	// exports                                                                                                        // 189
	t.options = options;                                                                                              // 190
	t.render = render;                                                                                                // 191
	t.destroy = destroy;                                                                                              // 192
	t.refetchEvents = refetchEvents;                                                                                  // 193
	t.reportEvents = reportEvents;                                                                                    // 194
	t.reportEventChange = reportEventChange;                                                                          // 195
	t.rerenderEvents = rerenderEvents;                                                                                // 196
	t.changeView = changeView;                                                                                        // 197
	t.select = select;                                                                                                // 198
	t.unselect = unselect;                                                                                            // 199
	t.prev = prev;                                                                                                    // 200
	t.next = next;                                                                                                    // 201
	t.prevYear = prevYear;                                                                                            // 202
	t.nextYear = nextYear;                                                                                            // 203
	t.today = today;                                                                                                  // 204
	t.gotoDate = gotoDate;                                                                                            // 205
	t.incrementDate = incrementDate;                                                                                  // 206
	t.formatDate = function(format, date) { return formatDate(format, date, options) };                               // 207
	t.formatDates = function(format, date1, date2) { return formatDates(format, date1, date2, options) };             // 208
	t.getDate = getDate;                                                                                              // 209
	t.getView = getView;                                                                                              // 210
	t.option = option;                                                                                                // 211
	t.trigger = trigger;                                                                                              // 212
	                                                                                                                  // 213
	                                                                                                                  // 214
	// imports                                                                                                        // 215
	EventManager.call(t, options, eventSources);                                                                      // 216
	var isFetchNeeded = t.isFetchNeeded;                                                                              // 217
	var fetchEvents = t.fetchEvents;                                                                                  // 218
	                                                                                                                  // 219
	                                                                                                                  // 220
	// locals                                                                                                         // 221
	var _element = element[0];                                                                                        // 222
	var header;                                                                                                       // 223
	var headerElement;                                                                                                // 224
	var content;                                                                                                      // 225
	var tm; // for making theme classes                                                                               // 226
	var currentView;                                                                                                  // 227
	var viewInstances = {};                                                                                           // 228
	var elementOuterWidth;                                                                                            // 229
	var suggestedViewHeight;                                                                                          // 230
	var absoluteViewElement;                                                                                          // 231
	var resizeUID = 0;                                                                                                // 232
	var ignoreWindowResize = 0;                                                                                       // 233
	var date = new Date();                                                                                            // 234
	var events = [];                                                                                                  // 235
	var _dragElement;                                                                                                 // 236
	                                                                                                                  // 237
	                                                                                                                  // 238
	                                                                                                                  // 239
	/* Main Rendering                                                                                                 // 240
	-----------------------------------------------------------------------------*/                                   // 241
	                                                                                                                  // 242
	                                                                                                                  // 243
	setYMD(date, options.year, options.month, options.date);                                                          // 244
	                                                                                                                  // 245
	                                                                                                                  // 246
	function render(inc) {                                                                                            // 247
		if (!content) {                                                                                                  // 248
			initialRender();                                                                                                // 249
		}else{                                                                                                           // 250
			calcSize();                                                                                                     // 251
			markSizesDirty();                                                                                               // 252
			markEventsDirty();                                                                                              // 253
			renderView(inc);                                                                                                // 254
		}                                                                                                                // 255
	}                                                                                                                 // 256
	                                                                                                                  // 257
	                                                                                                                  // 258
	function initialRender() {                                                                                        // 259
		tm = options.theme ? 'ui' : 'fc';                                                                                // 260
		element.addClass('fc');                                                                                          // 261
		if (options.isRTL) {                                                                                             // 262
			element.addClass('fc-rtl');                                                                                     // 263
		}                                                                                                                // 264
		else {                                                                                                           // 265
			element.addClass('fc-ltr');                                                                                     // 266
		}                                                                                                                // 267
		if (options.theme) {                                                                                             // 268
			element.addClass('ui-widget');                                                                                  // 269
		}                                                                                                                // 270
		content = $("<div class='fc-content' style='position:relative'/>")                                               // 271
			.prependTo(element);                                                                                            // 272
		header = new Header(t, options);                                                                                 // 273
		headerElement = header.render();                                                                                 // 274
		if (headerElement) {                                                                                             // 275
			element.prepend(headerElement);                                                                                 // 276
		}                                                                                                                // 277
		changeView(options.defaultView);                                                                                 // 278
		$(window).resize(windowResize);                                                                                  // 279
		// needed for IE in a 0x0 iframe, b/c when it is resized, never triggers a windowResize                          // 280
		if (!bodyVisible()) {                                                                                            // 281
			lateRender();                                                                                                   // 282
		}                                                                                                                // 283
	}                                                                                                                 // 284
	                                                                                                                  // 285
	                                                                                                                  // 286
	// called when we know the calendar couldn't be rendered when it was initialized,                                 // 287
	// but we think it's ready now                                                                                    // 288
	function lateRender() {                                                                                           // 289
		setTimeout(function() { // IE7 needs this so dimensions are calculated correctly                                 // 290
			if (!currentView.start && bodyVisible()) { // !currentView.start makes sure this never happens more than once   // 291
				renderView();                                                                                                  // 292
			}                                                                                                               // 293
		},0);                                                                                                            // 294
	}                                                                                                                 // 295
	                                                                                                                  // 296
	                                                                                                                  // 297
	function destroy() {                                                                                              // 298
		$(window).unbind('resize', windowResize);                                                                        // 299
		header.destroy();                                                                                                // 300
		content.remove();                                                                                                // 301
		element.removeClass('fc fc-rtl ui-widget');                                                                      // 302
	}                                                                                                                 // 303
	                                                                                                                  // 304
	                                                                                                                  // 305
	                                                                                                                  // 306
	function elementVisible() {                                                                                       // 307
		return _element.offsetWidth !== 0;                                                                               // 308
	}                                                                                                                 // 309
	                                                                                                                  // 310
	                                                                                                                  // 311
	function bodyVisible() {                                                                                          // 312
		return $('body')[0].offsetWidth !== 0;                                                                           // 313
	}                                                                                                                 // 314
	                                                                                                                  // 315
	                                                                                                                  // 316
	                                                                                                                  // 317
	/* View Rendering                                                                                                 // 318
	-----------------------------------------------------------------------------*/                                   // 319
	                                                                                                                  // 320
	// TODO: improve view switching (still weird transition in IE, and FF has whiteout problem)                       // 321
	                                                                                                                  // 322
	function changeView(newViewName) {                                                                                // 323
		if (!currentView || newViewName != currentView.name) {                                                           // 324
			ignoreWindowResize++; // because setMinHeight might change the height before render (and subsequently setSize) is reached
                                                                                                                   // 326
			unselect();                                                                                                     // 327
			                                                                                                                // 328
			var oldView = currentView;                                                                                      // 329
			var newViewElement;                                                                                             // 330
				                                                                                                               // 331
			if (oldView) {                                                                                                  // 332
				(oldView.beforeHide || noop)(); // called before changing min-height. if called after, scroll state is reset (in Opera)
				setMinHeight(content, content.height());                                                                       // 334
				oldView.element.hide();                                                                                        // 335
			}else{                                                                                                          // 336
				setMinHeight(content, 1); // needs to be 1 (not 0) for IE7, or else view dimensions miscalculated              // 337
			}                                                                                                               // 338
			content.css('overflow', 'hidden');                                                                              // 339
			                                                                                                                // 340
			currentView = viewInstances[newViewName];                                                                       // 341
			if (currentView) {                                                                                              // 342
				currentView.element.show();                                                                                    // 343
			}else{                                                                                                          // 344
				currentView = viewInstances[newViewName] = new fcViews[newViewName](                                           // 345
					newViewElement = absoluteViewElement =                                                                        // 346
						$("<div class='fc-view fc-view-" + newViewName + "' style='position:absolute'/>")                            // 347
							.appendTo(content),                                                                                         // 348
					t // the calendar object                                                                                      // 349
				);                                                                                                             // 350
			}                                                                                                               // 351
			                                                                                                                // 352
			if (oldView) {                                                                                                  // 353
				header.deactivateButton(oldView.name);                                                                         // 354
			}                                                                                                               // 355
			header.activateButton(newViewName);                                                                             // 356
			                                                                                                                // 357
			renderView(); // after height has been set, will make absoluteViewElement's position=relative, then set to null // 358
			                                                                                                                // 359
			content.css('overflow', '');                                                                                    // 360
			if (oldView) {                                                                                                  // 361
				setMinHeight(content, 1);                                                                                      // 362
			}                                                                                                               // 363
			                                                                                                                // 364
			if (!newViewElement) {                                                                                          // 365
				(currentView.afterShow || noop)(); // called after setting min-height/overflow, so in final scroll state (for Opera)
			}                                                                                                               // 367
			                                                                                                                // 368
			ignoreWindowResize--;                                                                                           // 369
		}                                                                                                                // 370
	}                                                                                                                 // 371
	                                                                                                                  // 372
	                                                                                                                  // 373
	                                                                                                                  // 374
	function renderView(inc) {                                                                                        // 375
		if (elementVisible()) {                                                                                          // 376
			ignoreWindowResize++; // because renderEvents might temporarily change the height before setSize is reached     // 377
                                                                                                                   // 378
			unselect();                                                                                                     // 379
			                                                                                                                // 380
			if (suggestedViewHeight === undefined) {                                                                        // 381
				calcSize();                                                                                                    // 382
			}                                                                                                               // 383
			                                                                                                                // 384
			var forceEventRender = false;                                                                                   // 385
			if (!currentView.start || inc || date < currentView.start || date >= currentView.end) {                         // 386
				// view must render an entire new date range (and refetch/render events)                                       // 387
				currentView.render(date, inc || 0); // responsible for clearing events                                         // 388
				setSize(true);                                                                                                 // 389
				forceEventRender = true;                                                                                       // 390
			}                                                                                                               // 391
			else if (currentView.sizeDirty) {                                                                               // 392
				// view must resize (and rerender events)                                                                      // 393
				currentView.clearEvents();                                                                                     // 394
				setSize();                                                                                                     // 395
				forceEventRender = true;                                                                                       // 396
			}                                                                                                               // 397
			else if (currentView.eventsDirty) {                                                                             // 398
				currentView.clearEvents();                                                                                     // 399
				forceEventRender = true;                                                                                       // 400
			}                                                                                                               // 401
			currentView.sizeDirty = false;                                                                                  // 402
			currentView.eventsDirty = false;                                                                                // 403
			updateEvents(forceEventRender);                                                                                 // 404
			                                                                                                                // 405
			elementOuterWidth = element.outerWidth();                                                                       // 406
			                                                                                                                // 407
			header.updateTitle(currentView.title);                                                                          // 408
			var today = new Date();                                                                                         // 409
			if (today >= currentView.start && today < currentView.end) {                                                    // 410
				header.disableButton('today');                                                                                 // 411
			}else{                                                                                                          // 412
				header.enableButton('today');                                                                                  // 413
			}                                                                                                               // 414
			                                                                                                                // 415
			ignoreWindowResize--;                                                                                           // 416
			currentView.trigger('viewDisplay', _element);                                                                   // 417
		}                                                                                                                // 418
	}                                                                                                                 // 419
	                                                                                                                  // 420
	                                                                                                                  // 421
	                                                                                                                  // 422
	/* Resizing                                                                                                       // 423
	-----------------------------------------------------------------------------*/                                   // 424
	                                                                                                                  // 425
	                                                                                                                  // 426
	function updateSize() {                                                                                           // 427
		markSizesDirty();                                                                                                // 428
		if (elementVisible()) {                                                                                          // 429
			calcSize();                                                                                                     // 430
			setSize();                                                                                                      // 431
			unselect();                                                                                                     // 432
			currentView.clearEvents();                                                                                      // 433
			currentView.renderEvents(events);                                                                               // 434
			currentView.sizeDirty = false;                                                                                  // 435
		}                                                                                                                // 436
	}                                                                                                                 // 437
	                                                                                                                  // 438
	                                                                                                                  // 439
	function markSizesDirty() {                                                                                       // 440
		$.each(viewInstances, function(i, inst) {                                                                        // 441
			inst.sizeDirty = true;                                                                                          // 442
		});                                                                                                              // 443
	}                                                                                                                 // 444
	                                                                                                                  // 445
	                                                                                                                  // 446
	function calcSize() {                                                                                             // 447
		if (options.contentHeight) {                                                                                     // 448
			suggestedViewHeight = options.contentHeight;                                                                    // 449
		}                                                                                                                // 450
		else if (options.height) {                                                                                       // 451
			suggestedViewHeight = options.height - (headerElement ? headerElement.height() : 0) - vsides(content);          // 452
		}                                                                                                                // 453
		else {                                                                                                           // 454
			suggestedViewHeight = Math.round(content.width() / Math.max(options.aspectRatio, .5));                          // 455
		}                                                                                                                // 456
	}                                                                                                                 // 457
	                                                                                                                  // 458
	                                                                                                                  // 459
	function setSize(dateChanged) { // todo: dateChanged?                                                             // 460
		ignoreWindowResize++;                                                                                            // 461
		currentView.setHeight(suggestedViewHeight, dateChanged);                                                         // 462
		if (absoluteViewElement) {                                                                                       // 463
			absoluteViewElement.css('position', 'relative');                                                                // 464
			absoluteViewElement = null;                                                                                     // 465
		}                                                                                                                // 466
		currentView.setWidth(content.width(), dateChanged);                                                              // 467
		ignoreWindowResize--;                                                                                            // 468
	}                                                                                                                 // 469
	                                                                                                                  // 470
	                                                                                                                  // 471
	function windowResize() {                                                                                         // 472
		if (!ignoreWindowResize) {                                                                                       // 473
			if (currentView.start) { // view has already been rendered                                                      // 474
				var uid = ++resizeUID;                                                                                         // 475
				setTimeout(function() { // add a delay                                                                         // 476
					if (uid == resizeUID && !ignoreWindowResize && elementVisible()) {                                            // 477
						if (elementOuterWidth != (elementOuterWidth = element.outerWidth())) {                                       // 478
							ignoreWindowResize++; // in case the windowResize callback changes the height                               // 479
							updateSize();                                                                                               // 480
							currentView.trigger('windowResize', _element);                                                              // 481
							ignoreWindowResize--;                                                                                       // 482
						}                                                                                                            // 483
					}                                                                                                             // 484
				}, 200);                                                                                                       // 485
			}else{                                                                                                          // 486
				// calendar must have been initialized in a 0x0 iframe that has just been resized                              // 487
				lateRender();                                                                                                  // 488
			}                                                                                                               // 489
		}                                                                                                                // 490
	}                                                                                                                 // 491
	                                                                                                                  // 492
	                                                                                                                  // 493
	                                                                                                                  // 494
	/* Event Fetching/Rendering                                                                                       // 495
	-----------------------------------------------------------------------------*/                                   // 496
	                                                                                                                  // 497
	                                                                                                                  // 498
	// fetches events if necessary, rerenders events if necessary (or if forced)                                      // 499
	function updateEvents(forceRender) {                                                                              // 500
		if (!options.lazyFetching || isFetchNeeded(currentView.visStart, currentView.visEnd)) {                          // 501
			refetchEvents();                                                                                                // 502
		}                                                                                                                // 503
		else if (forceRender) {                                                                                          // 504
			rerenderEvents();                                                                                               // 505
		}                                                                                                                // 506
	}                                                                                                                 // 507
	                                                                                                                  // 508
	                                                                                                                  // 509
	function refetchEvents() {                                                                                        // 510
		fetchEvents(currentView.visStart, currentView.visEnd); // will call reportEvents                                 // 511
	}                                                                                                                 // 512
	                                                                                                                  // 513
	                                                                                                                  // 514
	// called when event data arrives                                                                                 // 515
	function reportEvents(_events) {                                                                                  // 516
		events = _events;                                                                                                // 517
		rerenderEvents();                                                                                                // 518
	}                                                                                                                 // 519
	                                                                                                                  // 520
	                                                                                                                  // 521
	// called when a single event's data has been changed                                                             // 522
	function reportEventChange(eventID) {                                                                             // 523
		rerenderEvents(eventID);                                                                                         // 524
	}                                                                                                                 // 525
	                                                                                                                  // 526
	                                                                                                                  // 527
	// attempts to rerenderEvents                                                                                     // 528
	function rerenderEvents(modifiedEventID) {                                                                        // 529
		markEventsDirty();                                                                                               // 530
		if (elementVisible()) {                                                                                          // 531
			currentView.clearEvents();                                                                                      // 532
			currentView.renderEvents(events, modifiedEventID);                                                              // 533
			currentView.eventsDirty = false;                                                                                // 534
		}                                                                                                                // 535
	}                                                                                                                 // 536
	                                                                                                                  // 537
	                                                                                                                  // 538
	function markEventsDirty() {                                                                                      // 539
		$.each(viewInstances, function(i, inst) {                                                                        // 540
			inst.eventsDirty = true;                                                                                        // 541
		});                                                                                                              // 542
	}                                                                                                                 // 543
	                                                                                                                  // 544
                                                                                                                   // 545
                                                                                                                   // 546
	/* Selection                                                                                                      // 547
	-----------------------------------------------------------------------------*/                                   // 548
	                                                                                                                  // 549
                                                                                                                   // 550
	function select(start, end, allDay) {                                                                             // 551
		currentView.select(start, end, allDay===undefined ? true : allDay);                                              // 552
	}                                                                                                                 // 553
	                                                                                                                  // 554
                                                                                                                   // 555
	function unselect() { // safe to be called before renderView                                                      // 556
		if (currentView) {                                                                                               // 557
			currentView.unselect();                                                                                         // 558
		}                                                                                                                // 559
	}                                                                                                                 // 560
	                                                                                                                  // 561
	                                                                                                                  // 562
	                                                                                                                  // 563
	/* Date                                                                                                           // 564
	-----------------------------------------------------------------------------*/                                   // 565
	                                                                                                                  // 566
	                                                                                                                  // 567
	function prev() {                                                                                                 // 568
		renderView(-1);                                                                                                  // 569
	}                                                                                                                 // 570
	                                                                                                                  // 571
	                                                                                                                  // 572
	function next() {                                                                                                 // 573
		renderView(1);                                                                                                   // 574
	}                                                                                                                 // 575
	                                                                                                                  // 576
	                                                                                                                  // 577
	function prevYear() {                                                                                             // 578
		addYears(date, -1);                                                                                              // 579
		renderView();                                                                                                    // 580
	}                                                                                                                 // 581
	                                                                                                                  // 582
	                                                                                                                  // 583
	function nextYear() {                                                                                             // 584
		addYears(date, 1);                                                                                               // 585
		renderView();                                                                                                    // 586
	}                                                                                                                 // 587
	                                                                                                                  // 588
	                                                                                                                  // 589
	function today() {                                                                                                // 590
		date = new Date();                                                                                               // 591
		renderView();                                                                                                    // 592
	}                                                                                                                 // 593
	                                                                                                                  // 594
	                                                                                                                  // 595
	function gotoDate(year, month, dateOfMonth) {                                                                     // 596
		if (year instanceof Date) {                                                                                      // 597
			date = cloneDate(year); // provided 1 argument, a Date                                                          // 598
		}else{                                                                                                           // 599
			setYMD(date, year, month, dateOfMonth);                                                                         // 600
		}                                                                                                                // 601
		renderView();                                                                                                    // 602
	}                                                                                                                 // 603
	                                                                                                                  // 604
	                                                                                                                  // 605
	function incrementDate(years, months, days) {                                                                     // 606
		if (years !== undefined) {                                                                                       // 607
			addYears(date, years);                                                                                          // 608
		}                                                                                                                // 609
		if (months !== undefined) {                                                                                      // 610
			addMonths(date, months);                                                                                        // 611
		}                                                                                                                // 612
		if (days !== undefined) {                                                                                        // 613
			addDays(date, days);                                                                                            // 614
		}                                                                                                                // 615
		renderView();                                                                                                    // 616
	}                                                                                                                 // 617
	                                                                                                                  // 618
	                                                                                                                  // 619
	function getDate() {                                                                                              // 620
		return cloneDate(date);                                                                                          // 621
	}                                                                                                                 // 622
	                                                                                                                  // 623
	                                                                                                                  // 624
	                                                                                                                  // 625
	/* Misc                                                                                                           // 626
	-----------------------------------------------------------------------------*/                                   // 627
	                                                                                                                  // 628
	                                                                                                                  // 629
	function getView() {                                                                                              // 630
		return currentView;                                                                                              // 631
	}                                                                                                                 // 632
	                                                                                                                  // 633
	                                                                                                                  // 634
	function option(name, value) {                                                                                    // 635
		if (value === undefined) {                                                                                       // 636
			return options[name];                                                                                           // 637
		}                                                                                                                // 638
		if (name == 'height' || name == 'contentHeight' || name == 'aspectRatio') {                                      // 639
			options[name] = value;                                                                                          // 640
			updateSize();                                                                                                   // 641
		}                                                                                                                // 642
	}                                                                                                                 // 643
	                                                                                                                  // 644
	                                                                                                                  // 645
	function trigger(name, thisObj) {                                                                                 // 646
		if (options[name]) {                                                                                             // 647
			return options[name].apply(                                                                                     // 648
				thisObj || _element,                                                                                           // 649
				Array.prototype.slice.call(arguments, 2)                                                                       // 650
			);                                                                                                              // 651
		}                                                                                                                // 652
	}                                                                                                                 // 653
	                                                                                                                  // 654
	                                                                                                                  // 655
	                                                                                                                  // 656
	/* External Dragging                                                                                              // 657
	------------------------------------------------------------------------*/                                        // 658
	                                                                                                                  // 659
	if (options.droppable) {                                                                                          // 660
		$(document)                                                                                                      // 661
			.bind('dragstart', function(ev, ui) {                                                                           // 662
				var _e = ev.target;                                                                                            // 663
				var e = $(_e);                                                                                                 // 664
				if (!e.parents('.fc').length) { // not already inside a calendar                                               // 665
					var accept = options.dropAccept;                                                                              // 666
					if ($.isFunction(accept) ? accept.call(_e, e) : e.is(accept)) {                                               // 667
						_dragElement = _e;                                                                                           // 668
						currentView.dragStart(_dragElement, ev, ui);                                                                 // 669
					}                                                                                                             // 670
				}                                                                                                              // 671
			})                                                                                                              // 672
			.bind('dragstop', function(ev, ui) {                                                                            // 673
				if (_dragElement) {                                                                                            // 674
					currentView.dragStop(_dragElement, ev, ui);                                                                   // 675
					_dragElement = null;                                                                                          // 676
				}                                                                                                              // 677
			});                                                                                                             // 678
	}                                                                                                                 // 679
	                                                                                                                  // 680
                                                                                                                   // 681
}                                                                                                                  // 682
                                                                                                                   // 683
;;                                                                                                                 // 684
                                                                                                                   // 685
function Header(calendar, options) {                                                                               // 686
	var t = this;                                                                                                     // 687
	                                                                                                                  // 688
	                                                                                                                  // 689
	// exports                                                                                                        // 690
	t.render = render;                                                                                                // 691
	t.destroy = destroy;                                                                                              // 692
	t.updateTitle = updateTitle;                                                                                      // 693
	t.activateButton = activateButton;                                                                                // 694
	t.deactivateButton = deactivateButton;                                                                            // 695
	t.disableButton = disableButton;                                                                                  // 696
	t.enableButton = enableButton;                                                                                    // 697
	                                                                                                                  // 698
	                                                                                                                  // 699
	// locals                                                                                                         // 700
	var element = $([]);                                                                                              // 701
	var tm;                                                                                                           // 702
	                                                                                                                  // 703
                                                                                                                   // 704
                                                                                                                   // 705
	function render() {                                                                                               // 706
		tm = options.theme ? 'ui' : 'fc';                                                                                // 707
		var sections = options.header;                                                                                   // 708
		if (sections) {                                                                                                  // 709
			element = $("<table class='fc-header' style='width:100%'/>")                                                    // 710
				.append(                                                                                                       // 711
					$("<tr/>")                                                                                                    // 712
						.append(renderSection('left'))                                                                               // 713
						.append(renderSection('center'))                                                                             // 714
						.append(renderSection('right'))                                                                              // 715
				);                                                                                                             // 716
			return element;                                                                                                 // 717
		}                                                                                                                // 718
	}                                                                                                                 // 719
	                                                                                                                  // 720
	                                                                                                                  // 721
	function destroy() {                                                                                              // 722
		element.remove();                                                                                                // 723
	}                                                                                                                 // 724
	                                                                                                                  // 725
	                                                                                                                  // 726
	function renderSection(position) {                                                                                // 727
		var e = $("<td class='fc-header-" + position + "'/>");                                                           // 728
		var buttonStr = options.header[position];                                                                        // 729
		if (buttonStr) {                                                                                                 // 730
			$.each(buttonStr.split(' '), function(i) {                                                                      // 731
				if (i > 0) {                                                                                                   // 732
					e.append("<span class='fc-header-space'/>");                                                                  // 733
				}                                                                                                              // 734
				var prevButton;                                                                                                // 735
				$.each(this.split(','), function(j, buttonName) {                                                              // 736
					if (buttonName == 'title') {                                                                                  // 737
						e.append("<span class='fc-header-title'><h2>&nbsp;</h2></span>");                                            // 738
						if (prevButton) {                                                                                            // 739
							prevButton.addClass(tm + '-corner-right');                                                                  // 740
						}                                                                                                            // 741
						prevButton = null;                                                                                           // 742
					}else{                                                                                                        // 743
						var buttonClick;                                                                                             // 744
						if (calendar[buttonName]) {                                                                                  // 745
							buttonClick = calendar[buttonName]; // calendar method                                                      // 746
						}                                                                                                            // 747
						else if (fcViews[buttonName]) {                                                                              // 748
							buttonClick = function() {                                                                                  // 749
								button.removeClass(tm + '-state-hover'); // forget why                                                     // 750
								calendar.changeView(buttonName);                                                                           // 751
							};                                                                                                          // 752
						}                                                                                                            // 753
						if (buttonClick) {                                                                                           // 754
							var icon = options.theme ? smartProperty(options.buttonIcons, buttonName) : null; // why are we using smartProperty here?
							var text = smartProperty(options.buttonText, buttonName); // why are we using smartProperty here?           // 756
							var button = $(                                                                                             // 757
								"<span class='fc-button fc-button-" + buttonName + " " + tm + "-state-default'>" +                         // 758
									(icon ?                                                                                                   // 759
										"<span class='fc-icon-wrap'>" +                                                                          // 760
											"<span class='ui-icon ui-icon-" + icon + "'/>" +                                                        // 761
										"</span>" :                                                                                              // 762
										text                                                                                                     // 763
										) +                                                                                                      // 764
								"</span>"                                                                                                  // 765
								)                                                                                                          // 766
								.click(function() {                                                                                        // 767
									if (!button.hasClass(tm + '-state-disabled')) {                                                           // 768
										buttonClick();                                                                                           // 769
									}                                                                                                         // 770
								})                                                                                                         // 771
								.mousedown(function() {                                                                                    // 772
									button                                                                                                    // 773
										.not('.' + tm + '-state-active')                                                                         // 774
										.not('.' + tm + '-state-disabled')                                                                       // 775
										.addClass(tm + '-state-down');                                                                           // 776
								})                                                                                                         // 777
								.mouseup(function() {                                                                                      // 778
									button.removeClass(tm + '-state-down');                                                                   // 779
								})                                                                                                         // 780
								.hover(                                                                                                    // 781
									function() {                                                                                              // 782
										button                                                                                                   // 783
											.not('.' + tm + '-state-active')                                                                        // 784
											.not('.' + tm + '-state-disabled')                                                                      // 785
											.addClass(tm + '-state-hover');                                                                         // 786
									},                                                                                                        // 787
									function() {                                                                                              // 788
										button                                                                                                   // 789
											.removeClass(tm + '-state-hover')                                                                       // 790
											.removeClass(tm + '-state-down');                                                                       // 791
									}                                                                                                         // 792
								)                                                                                                          // 793
								.appendTo(e);                                                                                              // 794
							disableTextSelection(button);                                                                               // 795
							if (!prevButton) {                                                                                          // 796
								button.addClass(tm + '-corner-left');                                                                      // 797
							}                                                                                                           // 798
							prevButton = button;                                                                                        // 799
						}                                                                                                            // 800
					}                                                                                                             // 801
				});                                                                                                            // 802
				if (prevButton) {                                                                                              // 803
					prevButton.addClass(tm + '-corner-right');                                                                    // 804
				}                                                                                                              // 805
			});                                                                                                             // 806
		}                                                                                                                // 807
		return e;                                                                                                        // 808
	}                                                                                                                 // 809
	                                                                                                                  // 810
	                                                                                                                  // 811
	function updateTitle(html) {                                                                                      // 812
		element.find('h2')                                                                                               // 813
			.html(html);                                                                                                    // 814
	}                                                                                                                 // 815
	                                                                                                                  // 816
	                                                                                                                  // 817
	function activateButton(buttonName) {                                                                             // 818
		element.find('span.fc-button-' + buttonName)                                                                     // 819
			.addClass(tm + '-state-active');                                                                                // 820
	}                                                                                                                 // 821
	                                                                                                                  // 822
	                                                                                                                  // 823
	function deactivateButton(buttonName) {                                                                           // 824
		element.find('span.fc-button-' + buttonName)                                                                     // 825
			.removeClass(tm + '-state-active');                                                                             // 826
	}                                                                                                                 // 827
	                                                                                                                  // 828
	                                                                                                                  // 829
	function disableButton(buttonName) {                                                                              // 830
		element.find('span.fc-button-' + buttonName)                                                                     // 831
			.addClass(tm + '-state-disabled');                                                                              // 832
	}                                                                                                                 // 833
	                                                                                                                  // 834
	                                                                                                                  // 835
	function enableButton(buttonName) {                                                                               // 836
		element.find('span.fc-button-' + buttonName)                                                                     // 837
			.removeClass(tm + '-state-disabled');                                                                           // 838
	}                                                                                                                 // 839
                                                                                                                   // 840
                                                                                                                   // 841
}                                                                                                                  // 842
                                                                                                                   // 843
;;                                                                                                                 // 844
                                                                                                                   // 845
fc.sourceNormalizers = [];                                                                                         // 846
fc.sourceFetchers = [];                                                                                            // 847
                                                                                                                   // 848
var ajaxDefaults = {                                                                                               // 849
	dataType: 'json',                                                                                                 // 850
	cache: false                                                                                                      // 851
};                                                                                                                 // 852
                                                                                                                   // 853
var eventGUID = 1;                                                                                                 // 854
                                                                                                                   // 855
                                                                                                                   // 856
function EventManager(options, _sources) {                                                                         // 857
	var t = this;                                                                                                     // 858
	                                                                                                                  // 859
	                                                                                                                  // 860
	// exports                                                                                                        // 861
	t.isFetchNeeded = isFetchNeeded;                                                                                  // 862
	t.fetchEvents = fetchEvents;                                                                                      // 863
	t.addEventSource = addEventSource;                                                                                // 864
	t.removeEventSource = removeEventSource;                                                                          // 865
	t.updateEvent = updateEvent;                                                                                      // 866
	t.renderEvent = renderEvent;                                                                                      // 867
	t.removeEvents = removeEvents;                                                                                    // 868
	t.clientEvents = clientEvents;                                                                                    // 869
	t.normalizeEvent = normalizeEvent;                                                                                // 870
	                                                                                                                  // 871
	                                                                                                                  // 872
	// imports                                                                                                        // 873
	var trigger = t.trigger;                                                                                          // 874
	var getView = t.getView;                                                                                          // 875
	var reportEvents = t.reportEvents;                                                                                // 876
	                                                                                                                  // 877
	                                                                                                                  // 878
	// locals                                                                                                         // 879
	var stickySource = { events: [] };                                                                                // 880
	var sources = [ stickySource ];                                                                                   // 881
	var rangeStart, rangeEnd;                                                                                         // 882
	var currentFetchID = 0;                                                                                           // 883
	var pendingSourceCnt = 0;                                                                                         // 884
	var loadingLevel = 0;                                                                                             // 885
	var cache = [];                                                                                                   // 886
	                                                                                                                  // 887
	                                                                                                                  // 888
	for (var i=0; i<_sources.length; i++) {                                                                           // 889
		_addEventSource(_sources[i]);                                                                                    // 890
	}                                                                                                                 // 891
	                                                                                                                  // 892
	                                                                                                                  // 893
	                                                                                                                  // 894
	/* Fetching                                                                                                       // 895
	-----------------------------------------------------------------------------*/                                   // 896
	                                                                                                                  // 897
	                                                                                                                  // 898
	function isFetchNeeded(start, end) {                                                                              // 899
		return !rangeStart || start < rangeStart || end > rangeEnd;                                                      // 900
	}                                                                                                                 // 901
	                                                                                                                  // 902
	                                                                                                                  // 903
	function fetchEvents(start, end) {                                                                                // 904
		rangeStart = start;                                                                                              // 905
		rangeEnd = end;                                                                                                  // 906
		cache = [];                                                                                                      // 907
		var fetchID = ++currentFetchID;                                                                                  // 908
		var len = sources.length;                                                                                        // 909
		pendingSourceCnt = len;                                                                                          // 910
		for (var i=0; i<len; i++) {                                                                                      // 911
			fetchEventSource(sources[i], fetchID);                                                                          // 912
		}                                                                                                                // 913
	}                                                                                                                 // 914
	                                                                                                                  // 915
	                                                                                                                  // 916
	function fetchEventSource(source, fetchID) {                                                                      // 917
		_fetchEventSource(source, function(events) {                                                                     // 918
			if (fetchID == currentFetchID) {                                                                                // 919
				if (events) {                                                                                                  // 920
                                                                                                                   // 921
					if (options.eventDataTransform) {                                                                             // 922
						events = $.map(events, options.eventDataTransform);                                                          // 923
					}                                                                                                             // 924
					if (source.eventDataTransform) {                                                                              // 925
						events = $.map(events, source.eventDataTransform);                                                           // 926
					}                                                                                                             // 927
					// TODO: this technique is not ideal for static array event sources.                                          // 928
					//  For arrays, we'll want to process all events right in the beginning, then never again.                    // 929
				                                                                                                               // 930
					for (var i=0; i<events.length; i++) {                                                                         // 931
						events[i].source = source;                                                                                   // 932
						normalizeEvent(events[i]);                                                                                   // 933
					}                                                                                                             // 934
					cache = cache.concat(events);                                                                                 // 935
				}                                                                                                              // 936
				pendingSourceCnt--;                                                                                            // 937
				if (!pendingSourceCnt) {                                                                                       // 938
					reportEvents(cache);                                                                                          // 939
				}                                                                                                              // 940
			}                                                                                                               // 941
		});                                                                                                              // 942
	}                                                                                                                 // 943
	                                                                                                                  // 944
	                                                                                                                  // 945
	function _fetchEventSource(source, callback) {                                                                    // 946
		var i;                                                                                                           // 947
		var fetchers = fc.sourceFetchers;                                                                                // 948
		var res;                                                                                                         // 949
		for (i=0; i<fetchers.length; i++) {                                                                              // 950
			res = fetchers[i](source, rangeStart, rangeEnd, callback);                                                      // 951
			if (res === true) {                                                                                             // 952
				// the fetcher is in charge. made its own async request                                                        // 953
				return;                                                                                                        // 954
			}                                                                                                               // 955
			else if (typeof res == 'object') {                                                                              // 956
				// the fetcher returned a new source. process it                                                               // 957
				_fetchEventSource(res, callback);                                                                              // 958
				return;                                                                                                        // 959
			}                                                                                                               // 960
		}                                                                                                                // 961
		var events = source.events;                                                                                      // 962
		if (events) {                                                                                                    // 963
			if ($.isFunction(events)) {                                                                                     // 964
				pushLoading();                                                                                                 // 965
				events(cloneDate(rangeStart), cloneDate(rangeEnd), function(events) {                                          // 966
					callback(events);                                                                                             // 967
					popLoading();                                                                                                 // 968
				});                                                                                                            // 969
			}                                                                                                               // 970
			else if ($.isArray(events)) {                                                                                   // 971
				callback(events);                                                                                              // 972
			}                                                                                                               // 973
			else {                                                                                                          // 974
				callback();                                                                                                    // 975
			}                                                                                                               // 976
		}else{                                                                                                           // 977
			var url = source.url;                                                                                           // 978
			if (url) {                                                                                                      // 979
				var success = source.success;                                                                                  // 980
				var error = source.error;                                                                                      // 981
				var complete = source.complete;                                                                                // 982
				var data = $.extend({}, source.data || {});                                                                    // 983
				var startParam = firstDefined(source.startParam, options.startParam);                                          // 984
				var endParam = firstDefined(source.endParam, options.endParam);                                                // 985
				if (startParam) {                                                                                              // 986
					data[startParam] = Math.round(+rangeStart / 1000);                                                            // 987
				}                                                                                                              // 988
				if (endParam) {                                                                                                // 989
					data[endParam] = Math.round(+rangeEnd / 1000);                                                                // 990
				}                                                                                                              // 991
				pushLoading();                                                                                                 // 992
				$.ajax($.extend({}, ajaxDefaults, source, {                                                                    // 993
					data: data,                                                                                                   // 994
					success: function(events) {                                                                                   // 995
						events = events || [];                                                                                       // 996
						var res = applyAll(success, this, arguments);                                                                // 997
						if ($.isArray(res)) {                                                                                        // 998
							events = res;                                                                                               // 999
						}                                                                                                            // 1000
						callback(events);                                                                                            // 1001
					},                                                                                                            // 1002
					error: function() {                                                                                           // 1003
						applyAll(error, this, arguments);                                                                            // 1004
						callback();                                                                                                  // 1005
					},                                                                                                            // 1006
					complete: function() {                                                                                        // 1007
						applyAll(complete, this, arguments);                                                                         // 1008
						popLoading();                                                                                                // 1009
					}                                                                                                             // 1010
				}));                                                                                                           // 1011
			}else{                                                                                                          // 1012
				callback();                                                                                                    // 1013
			}                                                                                                               // 1014
		}                                                                                                                // 1015
	}                                                                                                                 // 1016
	                                                                                                                  // 1017
	                                                                                                                  // 1018
	                                                                                                                  // 1019
	/* Sources                                                                                                        // 1020
	-----------------------------------------------------------------------------*/                                   // 1021
	                                                                                                                  // 1022
                                                                                                                   // 1023
	function addEventSource(source) {                                                                                 // 1024
		source = _addEventSource(source);                                                                                // 1025
		if (source) {                                                                                                    // 1026
			pendingSourceCnt++;                                                                                             // 1027
			fetchEventSource(source, currentFetchID); // will eventually call reportEvents                                  // 1028
		}                                                                                                                // 1029
	}                                                                                                                 // 1030
	                                                                                                                  // 1031
	                                                                                                                  // 1032
	function _addEventSource(source) {                                                                                // 1033
		if ($.isFunction(source) || $.isArray(source)) {                                                                 // 1034
			source = { events: source };                                                                                    // 1035
		}                                                                                                                // 1036
		else if (typeof source == 'string') {                                                                            // 1037
			source = { url: source };                                                                                       // 1038
		}                                                                                                                // 1039
		if (typeof source == 'object') {                                                                                 // 1040
			normalizeSource(source);                                                                                        // 1041
			sources.push(source);                                                                                           // 1042
			return source;                                                                                                  // 1043
		}                                                                                                                // 1044
	}                                                                                                                 // 1045
	                                                                                                                  // 1046
                                                                                                                   // 1047
	function removeEventSource(source) {                                                                              // 1048
		sources = $.grep(sources, function(src) {                                                                        // 1049
			return !isSourcesEqual(src, source);                                                                            // 1050
		});                                                                                                              // 1051
		// remove all client events from that source                                                                     // 1052
		cache = $.grep(cache, function(e) {                                                                              // 1053
			return !isSourcesEqual(e.source, source);                                                                       // 1054
		});                                                                                                              // 1055
		reportEvents(cache);                                                                                             // 1056
	}                                                                                                                 // 1057
	                                                                                                                  // 1058
	                                                                                                                  // 1059
	                                                                                                                  // 1060
	/* Manipulation                                                                                                   // 1061
	-----------------------------------------------------------------------------*/                                   // 1062
	                                                                                                                  // 1063
	                                                                                                                  // 1064
	function updateEvent(event) { // update an existing event                                                         // 1065
		var i, len = cache.length, e,                                                                                    // 1066
			defaultEventEnd = getView().defaultEventEnd, // getView???                                                      // 1067
			startDelta = event.start - event._start,                                                                        // 1068
			endDelta = event.end ?                                                                                          // 1069
				(event.end - (event._end || defaultEventEnd(event))) // event._end would be null if event.end                  // 1070
				: 0;                                                      // was null and event was just resized               // 1071
		for (i=0; i<len; i++) {                                                                                          // 1072
			e = cache[i];                                                                                                   // 1073
			if (e._id == event._id && e != event) {                                                                         // 1074
				e.start = new Date(+e.start + startDelta);                                                                     // 1075
				if (event.end) {                                                                                               // 1076
					if (e.end) {                                                                                                  // 1077
						e.end = new Date(+e.end + endDelta);                                                                         // 1078
					}else{                                                                                                        // 1079
						e.end = new Date(+defaultEventEnd(e) + endDelta);                                                            // 1080
					}                                                                                                             // 1081
				}else{                                                                                                         // 1082
					e.end = null;                                                                                                 // 1083
				}                                                                                                              // 1084
				e.title = event.title;                                                                                         // 1085
				e.url = event.url;                                                                                             // 1086
				e.allDay = event.allDay;                                                                                       // 1087
				e.className = event.className;                                                                                 // 1088
				e.editable = event.editable;                                                                                   // 1089
				e.color = event.color;                                                                                         // 1090
				e.backgroudColor = event.backgroudColor;                                                                       // 1091
				e.borderColor = event.borderColor;                                                                             // 1092
				e.textColor = event.textColor;                                                                                 // 1093
				normalizeEvent(e);                                                                                             // 1094
			}                                                                                                               // 1095
		}                                                                                                                // 1096
		normalizeEvent(event);                                                                                           // 1097
		reportEvents(cache);                                                                                             // 1098
	}                                                                                                                 // 1099
	                                                                                                                  // 1100
	                                                                                                                  // 1101
	function renderEvent(event, stick) {                                                                              // 1102
		normalizeEvent(event);                                                                                           // 1103
		if (!event.source) {                                                                                             // 1104
			if (stick) {                                                                                                    // 1105
				stickySource.events.push(event);                                                                               // 1106
				event.source = stickySource;                                                                                   // 1107
			}                                                                                                               // 1108
			cache.push(event);                                                                                              // 1109
		}                                                                                                                // 1110
		reportEvents(cache);                                                                                             // 1111
	}                                                                                                                 // 1112
	                                                                                                                  // 1113
	                                                                                                                  // 1114
	function removeEvents(filter) {                                                                                   // 1115
		if (!filter) { // remove all                                                                                     // 1116
			cache = [];                                                                                                     // 1117
			// clear all array sources                                                                                      // 1118
			for (var i=0; i<sources.length; i++) {                                                                          // 1119
				if ($.isArray(sources[i].events)) {                                                                            // 1120
					sources[i].events = [];                                                                                       // 1121
				}                                                                                                              // 1122
			}                                                                                                               // 1123
		}else{                                                                                                           // 1124
			if (!$.isFunction(filter)) { // an event ID                                                                     // 1125
				var id = filter + '';                                                                                          // 1126
				filter = function(e) {                                                                                         // 1127
					return e._id == id;                                                                                           // 1128
				};                                                                                                             // 1129
			}                                                                                                               // 1130
			cache = $.grep(cache, filter, true);                                                                            // 1131
			// remove events from array sources                                                                             // 1132
			for (var i=0; i<sources.length; i++) {                                                                          // 1133
				if ($.isArray(sources[i].events)) {                                                                            // 1134
					sources[i].events = $.grep(sources[i].events, filter, true);                                                  // 1135
				}                                                                                                              // 1136
			}                                                                                                               // 1137
		}                                                                                                                // 1138
		reportEvents(cache);                                                                                             // 1139
	}                                                                                                                 // 1140
	                                                                                                                  // 1141
	                                                                                                                  // 1142
	function clientEvents(filter) {                                                                                   // 1143
		if ($.isFunction(filter)) {                                                                                      // 1144
			return $.grep(cache, filter);                                                                                   // 1145
		}                                                                                                                // 1146
		else if (filter) { // an event ID                                                                                // 1147
			filter += '';                                                                                                   // 1148
			return $.grep(cache, function(e) {                                                                              // 1149
				return e._id == filter;                                                                                        // 1150
			});                                                                                                             // 1151
		}                                                                                                                // 1152
		return cache; // else, return all                                                                                // 1153
	}                                                                                                                 // 1154
	                                                                                                                  // 1155
	                                                                                                                  // 1156
	                                                                                                                  // 1157
	/* Loading State                                                                                                  // 1158
	-----------------------------------------------------------------------------*/                                   // 1159
	                                                                                                                  // 1160
	                                                                                                                  // 1161
	function pushLoading() {                                                                                          // 1162
		if (!loadingLevel++) {                                                                                           // 1163
			trigger('loading', null, true);                                                                                 // 1164
		}                                                                                                                // 1165
	}                                                                                                                 // 1166
	                                                                                                                  // 1167
	                                                                                                                  // 1168
	function popLoading() {                                                                                           // 1169
		if (!--loadingLevel) {                                                                                           // 1170
			trigger('loading', null, false);                                                                                // 1171
		}                                                                                                                // 1172
	}                                                                                                                 // 1173
	                                                                                                                  // 1174
	                                                                                                                  // 1175
	                                                                                                                  // 1176
	/* Event Normalization                                                                                            // 1177
	-----------------------------------------------------------------------------*/                                   // 1178
	                                                                                                                  // 1179
	                                                                                                                  // 1180
	function normalizeEvent(event) {                                                                                  // 1181
		var source = event.source || {};                                                                                 // 1182
		var ignoreTimezone = firstDefined(source.ignoreTimezone, options.ignoreTimezone);                                // 1183
		event._id = event._id || (event.id === undefined ? '_fc' + eventGUID++ : event.id + '');                         // 1184
		if (event.date) {                                                                                                // 1185
			if (!event.start) {                                                                                             // 1186
				event.start = event.date;                                                                                      // 1187
			}                                                                                                               // 1188
			delete event.date;                                                                                              // 1189
		}                                                                                                                // 1190
		event._start = cloneDate(event.start = parseDate(event.start, ignoreTimezone));                                  // 1191
		event.end = parseDate(event.end, ignoreTimezone);                                                                // 1192
		if (event.end && event.end <= event.start) {                                                                     // 1193
			event.end = null;                                                                                               // 1194
		}                                                                                                                // 1195
		event._end = event.end ? cloneDate(event.end) : null;                                                            // 1196
		if (event.allDay === undefined) {                                                                                // 1197
			event.allDay = firstDefined(source.allDayDefault, options.allDayDefault);                                       // 1198
		}                                                                                                                // 1199
		if (event.className) {                                                                                           // 1200
			if (typeof event.className == 'string') {                                                                       // 1201
				event.className = event.className.split(/\s+/);                                                                // 1202
			}                                                                                                               // 1203
		}else{                                                                                                           // 1204
			event.className = [];                                                                                           // 1205
		}                                                                                                                // 1206
		// TODO: if there is no start date, return false to indicate an invalid event                                    // 1207
	}                                                                                                                 // 1208
	                                                                                                                  // 1209
	                                                                                                                  // 1210
	                                                                                                                  // 1211
	/* Utils                                                                                                          // 1212
	------------------------------------------------------------------------------*/                                  // 1213
	                                                                                                                  // 1214
	                                                                                                                  // 1215
	function normalizeSource(source) {                                                                                // 1216
		if (source.className) {                                                                                          // 1217
			// TODO: repeat code, same code for event classNames                                                            // 1218
			if (typeof source.className == 'string') {                                                                      // 1219
				source.className = source.className.split(/\s+/);                                                              // 1220
			}                                                                                                               // 1221
		}else{                                                                                                           // 1222
			source.className = [];                                                                                          // 1223
		}                                                                                                                // 1224
		var normalizers = fc.sourceNormalizers;                                                                          // 1225
		for (var i=0; i<normalizers.length; i++) {                                                                       // 1226
			normalizers[i](source);                                                                                         // 1227
		}                                                                                                                // 1228
	}                                                                                                                 // 1229
	                                                                                                                  // 1230
	                                                                                                                  // 1231
	function isSourcesEqual(source1, source2) {                                                                       // 1232
		return source1 && source2 && getSourcePrimitive(source1) == getSourcePrimitive(source2);                         // 1233
	}                                                                                                                 // 1234
	                                                                                                                  // 1235
	                                                                                                                  // 1236
	function getSourcePrimitive(source) {                                                                             // 1237
		return ((typeof source == 'object') ? (source.events || source.url) : '') || source;                             // 1238
	}                                                                                                                 // 1239
                                                                                                                   // 1240
                                                                                                                   // 1241
}                                                                                                                  // 1242
                                                                                                                   // 1243
;;                                                                                                                 // 1244
                                                                                                                   // 1245
                                                                                                                   // 1246
fc.addDays = addDays;                                                                                              // 1247
fc.cloneDate = cloneDate;                                                                                          // 1248
fc.parseDate = parseDate;                                                                                          // 1249
fc.parseISO8601 = parseISO8601;                                                                                    // 1250
fc.parseTime = parseTime;                                                                                          // 1251
fc.formatDate = formatDate;                                                                                        // 1252
fc.formatDates = formatDates;                                                                                      // 1253
                                                                                                                   // 1254
                                                                                                                   // 1255
                                                                                                                   // 1256
/* Date Math                                                                                                       // 1257
-----------------------------------------------------------------------------*/                                    // 1258
                                                                                                                   // 1259
var dayIDs = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],                                                    // 1260
	DAY_MS = 86400000,                                                                                                // 1261
	HOUR_MS = 3600000,                                                                                                // 1262
	MINUTE_MS = 60000;                                                                                                // 1263
	                                                                                                                  // 1264
                                                                                                                   // 1265
function addYears(d, n, keepTime) {                                                                                // 1266
	d.setFullYear(d.getFullYear() + n);                                                                               // 1267
	if (!keepTime) {                                                                                                  // 1268
		clearTime(d);                                                                                                    // 1269
	}                                                                                                                 // 1270
	return d;                                                                                                         // 1271
}                                                                                                                  // 1272
                                                                                                                   // 1273
                                                                                                                   // 1274
function addMonths(d, n, keepTime) { // prevents day overflow/underflow                                            // 1275
	if (+d) { // prevent infinite looping on invalid dates                                                            // 1276
		var m = d.getMonth() + n,                                                                                        // 1277
			check = cloneDate(d);                                                                                           // 1278
		check.setDate(1);                                                                                                // 1279
		check.setMonth(m);                                                                                               // 1280
		d.setMonth(m);                                                                                                   // 1281
		if (!keepTime) {                                                                                                 // 1282
			clearTime(d);                                                                                                   // 1283
		}                                                                                                                // 1284
		while (d.getMonth() != check.getMonth()) {                                                                       // 1285
			d.setDate(d.getDate() + (d < check ? 1 : -1));                                                                  // 1286
		}                                                                                                                // 1287
	}                                                                                                                 // 1288
	return d;                                                                                                         // 1289
}                                                                                                                  // 1290
                                                                                                                   // 1291
                                                                                                                   // 1292
function addDays(d, n, keepTime) { // deals with daylight savings                                                  // 1293
	if (+d) {                                                                                                         // 1294
		var dd = d.getDate() + n,                                                                                        // 1295
			check = cloneDate(d);                                                                                           // 1296
		check.setHours(9); // set to middle of day                                                                       // 1297
		check.setDate(dd);                                                                                               // 1298
		d.setDate(dd);                                                                                                   // 1299
		if (!keepTime) {                                                                                                 // 1300
			clearTime(d);                                                                                                   // 1301
		}                                                                                                                // 1302
		fixDate(d, check);                                                                                               // 1303
	}                                                                                                                 // 1304
	return d;                                                                                                         // 1305
}                                                                                                                  // 1306
                                                                                                                   // 1307
                                                                                                                   // 1308
function fixDate(d, check) { // force d to be on check's YMD, for daylight savings purposes                        // 1309
	if (+d) { // prevent infinite looping on invalid dates                                                            // 1310
		while (d.getDate() != check.getDate()) {                                                                         // 1311
			d.setTime(+d + (d < check ? 1 : -1) * HOUR_MS);                                                                 // 1312
		}                                                                                                                // 1313
	}                                                                                                                 // 1314
}                                                                                                                  // 1315
                                                                                                                   // 1316
                                                                                                                   // 1317
function addMinutes(d, n) {                                                                                        // 1318
	d.setMinutes(d.getMinutes() + n);                                                                                 // 1319
	return d;                                                                                                         // 1320
}                                                                                                                  // 1321
                                                                                                                   // 1322
                                                                                                                   // 1323
function clearTime(d) {                                                                                            // 1324
	d.setHours(0);                                                                                                    // 1325
	d.setMinutes(0);                                                                                                  // 1326
	d.setSeconds(0);                                                                                                  // 1327
	d.setMilliseconds(0);                                                                                             // 1328
	return d;                                                                                                         // 1329
}                                                                                                                  // 1330
                                                                                                                   // 1331
                                                                                                                   // 1332
function cloneDate(d, dontKeepTime) {                                                                              // 1333
	if (dontKeepTime) {                                                                                               // 1334
		return clearTime(new Date(+d));                                                                                  // 1335
	}                                                                                                                 // 1336
	return new Date(+d);                                                                                              // 1337
}                                                                                                                  // 1338
                                                                                                                   // 1339
                                                                                                                   // 1340
function zeroDate() { // returns a Date with time 00:00:00 and dateOfMonth=1                                       // 1341
	var i=0, d;                                                                                                       // 1342
	do {                                                                                                              // 1343
		d = new Date(1970, i++, 1);                                                                                      // 1344
	} while (d.getHours()); // != 0                                                                                   // 1345
	return d;                                                                                                         // 1346
}                                                                                                                  // 1347
                                                                                                                   // 1348
                                                                                                                   // 1349
function skipWeekend(date, inc, excl) {                                                                            // 1350
	inc = inc || 1;                                                                                                   // 1351
	while (!date.getDay() || (excl && date.getDay()==1 || !excl && date.getDay()==6)) {                               // 1352
		addDays(date, inc);                                                                                              // 1353
	}                                                                                                                 // 1354
	return date;                                                                                                      // 1355
}                                                                                                                  // 1356
                                                                                                                   // 1357
                                                                                                                   // 1358
function dayDiff(d1, d2) { // d1 - d2                                                                              // 1359
	return Math.round((cloneDate(d1, true) - cloneDate(d2, true)) / DAY_MS);                                          // 1360
}                                                                                                                  // 1361
                                                                                                                   // 1362
                                                                                                                   // 1363
function setYMD(date, y, m, d) {                                                                                   // 1364
	if (y !== undefined && y != date.getFullYear()) {                                                                 // 1365
		date.setDate(1);                                                                                                 // 1366
		date.setMonth(0);                                                                                                // 1367
		date.setFullYear(y);                                                                                             // 1368
	}                                                                                                                 // 1369
	if (m !== undefined && m != date.getMonth()) {                                                                    // 1370
		date.setDate(1);                                                                                                 // 1371
		date.setMonth(m);                                                                                                // 1372
	}                                                                                                                 // 1373
	if (d !== undefined) {                                                                                            // 1374
		date.setDate(d);                                                                                                 // 1375
	}                                                                                                                 // 1376
}                                                                                                                  // 1377
                                                                                                                   // 1378
                                                                                                                   // 1379
                                                                                                                   // 1380
/* Date Parsing                                                                                                    // 1381
-----------------------------------------------------------------------------*/                                    // 1382
                                                                                                                   // 1383
                                                                                                                   // 1384
function parseDate(s, ignoreTimezone) { // ignoreTimezone defaults to true                                         // 1385
	if (typeof s == 'object') { // already a Date object                                                              // 1386
		return s;                                                                                                        // 1387
	}                                                                                                                 // 1388
	if (typeof s == 'number') { // a UNIX timestamp                                                                   // 1389
		return new Date(s * 1000);                                                                                       // 1390
	}                                                                                                                 // 1391
	if (typeof s == 'string') {                                                                                       // 1392
		if (s.match(/^\d+(\.\d+)?$/)) { // a UNIX timestamp                                                              // 1393
			return new Date(parseFloat(s) * 1000);                                                                          // 1394
		}                                                                                                                // 1395
		if (ignoreTimezone === undefined) {                                                                              // 1396
			ignoreTimezone = true;                                                                                          // 1397
		}                                                                                                                // 1398
		return parseISO8601(s, ignoreTimezone) || (s ? new Date(s) : null);                                              // 1399
	}                                                                                                                 // 1400
	// TODO: never return invalid dates (like from new Date(<string>)), return null instead                           // 1401
	return null;                                                                                                      // 1402
}                                                                                                                  // 1403
                                                                                                                   // 1404
                                                                                                                   // 1405
function parseISO8601(s, ignoreTimezone) { // ignoreTimezone defaults to false                                     // 1406
	// derived from http://delete.me.uk/2005/03/iso8601.html                                                          // 1407
	// TODO: for a know glitch/feature, read tests/issue_206_parseDate_dst.html                                       // 1408
	var m = s.match(/^([0-9]{4})(-([0-9]{2})(-([0-9]{2})([T ]([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?(Z|(([-+])([0-9]{2})(:?([0-9]{2}))?))?)?)?)?$/);
	if (!m) {                                                                                                         // 1410
		return null;                                                                                                     // 1411
	}                                                                                                                 // 1412
	var date = new Date(m[1], 0, 1);                                                                                  // 1413
	if (ignoreTimezone || !m[13]) {                                                                                   // 1414
		var check = new Date(m[1], 0, 1, 9, 0);                                                                          // 1415
		if (m[3]) {                                                                                                      // 1416
			date.setMonth(m[3] - 1);                                                                                        // 1417
			check.setMonth(m[3] - 1);                                                                                       // 1418
		}                                                                                                                // 1419
		if (m[5]) {                                                                                                      // 1420
			date.setDate(m[5]);                                                                                             // 1421
			check.setDate(m[5]);                                                                                            // 1422
		}                                                                                                                // 1423
		fixDate(date, check);                                                                                            // 1424
		if (m[7]) {                                                                                                      // 1425
			date.setHours(m[7]);                                                                                            // 1426
		}                                                                                                                // 1427
		if (m[8]) {                                                                                                      // 1428
			date.setMinutes(m[8]);                                                                                          // 1429
		}                                                                                                                // 1430
		if (m[10]) {                                                                                                     // 1431
			date.setSeconds(m[10]);                                                                                         // 1432
		}                                                                                                                // 1433
		if (m[12]) {                                                                                                     // 1434
			date.setMilliseconds(Number("0." + m[12]) * 1000);                                                              // 1435
		}                                                                                                                // 1436
		fixDate(date, check);                                                                                            // 1437
	}else{                                                                                                            // 1438
		date.setUTCFullYear(                                                                                             // 1439
			m[1],                                                                                                           // 1440
			m[3] ? m[3] - 1 : 0,                                                                                            // 1441
			m[5] || 1                                                                                                       // 1442
		);                                                                                                               // 1443
		date.setUTCHours(                                                                                                // 1444
			m[7] || 0,                                                                                                      // 1445
			m[8] || 0,                                                                                                      // 1446
			m[10] || 0,                                                                                                     // 1447
			m[12] ? Number("0." + m[12]) * 1000 : 0                                                                         // 1448
		);                                                                                                               // 1449
		if (m[14]) {                                                                                                     // 1450
			var offset = Number(m[16]) * 60 + (m[18] ? Number(m[18]) : 0);                                                  // 1451
			offset *= m[15] == '-' ? 1 : -1;                                                                                // 1452
			date = new Date(+date + (offset * 60 * 1000));                                                                  // 1453
		}                                                                                                                // 1454
	}                                                                                                                 // 1455
	return date;                                                                                                      // 1456
}                                                                                                                  // 1457
                                                                                                                   // 1458
                                                                                                                   // 1459
function parseTime(s) { // returns minutes since start of day                                                      // 1460
	if (typeof s == 'number') { // an hour                                                                            // 1461
		return s * 60;                                                                                                   // 1462
	}                                                                                                                 // 1463
	if (typeof s == 'object') { // a Date object                                                                      // 1464
		return s.getHours() * 60 + s.getMinutes();                                                                       // 1465
	}                                                                                                                 // 1466
	var m = s.match(/(\d+)(?::(\d+))?\s*(\w+)?/);                                                                     // 1467
	if (m) {                                                                                                          // 1468
		var h = parseInt(m[1], 10);                                                                                      // 1469
		if (m[3]) {                                                                                                      // 1470
			h %= 12;                                                                                                        // 1471
			if (m[3].toLowerCase().charAt(0) == 'p') {                                                                      // 1472
				h += 12;                                                                                                       // 1473
			}                                                                                                               // 1474
		}                                                                                                                // 1475
		return h * 60 + (m[2] ? parseInt(m[2], 10) : 0);                                                                 // 1476
	}                                                                                                                 // 1477
}                                                                                                                  // 1478
                                                                                                                   // 1479
                                                                                                                   // 1480
                                                                                                                   // 1481
/* Date Formatting                                                                                                 // 1482
-----------------------------------------------------------------------------*/                                    // 1483
// TODO: use same function formatDate(date, [date2], format, [options])                                            // 1484
                                                                                                                   // 1485
                                                                                                                   // 1486
function formatDate(date, format, options) {                                                                       // 1487
	return formatDates(date, null, format, options);                                                                  // 1488
}                                                                                                                  // 1489
                                                                                                                   // 1490
                                                                                                                   // 1491
function formatDates(date1, date2, format, options) {                                                              // 1492
	options = options || defaults;                                                                                    // 1493
	var date = date1,                                                                                                 // 1494
		otherDate = date2,                                                                                               // 1495
		i, len = format.length, c,                                                                                       // 1496
		i2, formatter,                                                                                                   // 1497
		res = '';                                                                                                        // 1498
	for (i=0; i<len; i++) {                                                                                           // 1499
		c = format.charAt(i);                                                                                            // 1500
		if (c == "'") {                                                                                                  // 1501
			for (i2=i+1; i2<len; i2++) {                                                                                    // 1502
				if (format.charAt(i2) == "'") {                                                                                // 1503
					if (date) {                                                                                                   // 1504
						if (i2 == i+1) {                                                                                             // 1505
							res += "'";                                                                                                 // 1506
						}else{                                                                                                       // 1507
							res += format.substring(i+1, i2);                                                                           // 1508
						}                                                                                                            // 1509
						i = i2;                                                                                                      // 1510
					}                                                                                                             // 1511
					break;                                                                                                        // 1512
				}                                                                                                              // 1513
			}                                                                                                               // 1514
		}                                                                                                                // 1515
		else if (c == '(') {                                                                                             // 1516
			for (i2=i+1; i2<len; i2++) {                                                                                    // 1517
				if (format.charAt(i2) == ')') {                                                                                // 1518
					var subres = formatDate(date, format.substring(i+1, i2), options);                                            // 1519
					if (parseInt(subres.replace(/\D/, ''), 10)) {                                                                 // 1520
						res += subres;                                                                                               // 1521
					}                                                                                                             // 1522
					i = i2;                                                                                                       // 1523
					break;                                                                                                        // 1524
				}                                                                                                              // 1525
			}                                                                                                               // 1526
		}                                                                                                                // 1527
		else if (c == '[') {                                                                                             // 1528
			for (i2=i+1; i2<len; i2++) {                                                                                    // 1529
				if (format.charAt(i2) == ']') {                                                                                // 1530
					var subformat = format.substring(i+1, i2);                                                                    // 1531
					var subres = formatDate(date, subformat, options);                                                            // 1532
					if (subres != formatDate(otherDate, subformat, options)) {                                                    // 1533
						res += subres;                                                                                               // 1534
					}                                                                                                             // 1535
					i = i2;                                                                                                       // 1536
					break;                                                                                                        // 1537
				}                                                                                                              // 1538
			}                                                                                                               // 1539
		}                                                                                                                // 1540
		else if (c == '{') {                                                                                             // 1541
			date = date2;                                                                                                   // 1542
			otherDate = date1;                                                                                              // 1543
		}                                                                                                                // 1544
		else if (c == '}') {                                                                                             // 1545
			date = date1;                                                                                                   // 1546
			otherDate = date2;                                                                                              // 1547
		}                                                                                                                // 1548
		else {                                                                                                           // 1549
			for (i2=len; i2>i; i2--) {                                                                                      // 1550
				if (formatter = dateFormatters[format.substring(i, i2)]) {                                                     // 1551
					if (date) {                                                                                                   // 1552
						res += formatter(date, options);                                                                             // 1553
					}                                                                                                             // 1554
					i = i2 - 1;                                                                                                   // 1555
					break;                                                                                                        // 1556
				}                                                                                                              // 1557
			}                                                                                                               // 1558
			if (i2 == i) {                                                                                                  // 1559
				if (date) {                                                                                                    // 1560
					res += c;                                                                                                     // 1561
				}                                                                                                              // 1562
			}                                                                                                               // 1563
		}                                                                                                                // 1564
	}                                                                                                                 // 1565
	return res;                                                                                                       // 1566
};                                                                                                                 // 1567
                                                                                                                   // 1568
                                                                                                                   // 1569
var dateFormatters = {                                                                                             // 1570
	s	: function(d)	{ return d.getSeconds() },                                                                        // 1571
	ss	: function(d)	{ return zeroPad(d.getSeconds()) },                                                              // 1572
	m	: function(d)	{ return d.getMinutes() },                                                                        // 1573
	mm	: function(d)	{ return zeroPad(d.getMinutes()) },                                                              // 1574
	h	: function(d)	{ return d.getHours() % 12 || 12 },                                                               // 1575
	hh	: function(d)	{ return zeroPad(d.getHours() % 12 || 12) },                                                     // 1576
	H	: function(d)	{ return d.getHours() },                                                                          // 1577
	HH	: function(d)	{ return zeroPad(d.getHours()) },                                                                // 1578
	d	: function(d)	{ return d.getDate() },                                                                           // 1579
	dd	: function(d)	{ return zeroPad(d.getDate()) },                                                                 // 1580
	ddd	: function(d,o)	{ return o.dayNamesShort[d.getDay()] },                                                       // 1581
	dddd: function(d,o)	{ return o.dayNames[d.getDay()] },                                                            // 1582
	M	: function(d)	{ return d.getMonth() + 1 },                                                                      // 1583
	MM	: function(d)	{ return zeroPad(d.getMonth() + 1) },                                                            // 1584
	MMM	: function(d,o)	{ return o.monthNamesShort[d.getMonth()] },                                                   // 1585
	MMMM: function(d,o)	{ return o.monthNames[d.getMonth()] },                                                        // 1586
	yy	: function(d)	{ return (d.getFullYear()+'').substring(2) },                                                    // 1587
	yyyy: function(d)	{ return d.getFullYear() },                                                                     // 1588
	t	: function(d)	{ return d.getHours() < 12 ? 'a' : 'p' },                                                         // 1589
	tt	: function(d)	{ return d.getHours() < 12 ? 'am' : 'pm' },                                                      // 1590
	T	: function(d)	{ return d.getHours() < 12 ? 'A' : 'P' },                                                         // 1591
	TT	: function(d)	{ return d.getHours() < 12 ? 'AM' : 'PM' },                                                      // 1592
	u	: function(d)	{ return formatDate(d, "yyyy-MM-dd'T'HH:mm:ss'Z'") },                                             // 1593
	S	: function(d)	{                                                                                                 // 1594
		var date = d.getDate();                                                                                          // 1595
		if (date > 10 && date < 20) {                                                                                    // 1596
			return 'th';                                                                                                    // 1597
		}                                                                                                                // 1598
		return ['st', 'nd', 'rd'][date%10-1] || 'th';                                                                    // 1599
	},                                                                                                                // 1600
	w   : function(d, o) { // local                                                                                   // 1601
		return o.weekNumberCalculation(d);                                                                               // 1602
	},                                                                                                                // 1603
	W   : function(d) { // ISO                                                                                        // 1604
		return iso8601Week(d);                                                                                           // 1605
	}                                                                                                                 // 1606
};                                                                                                                 // 1607
fc.dateFormatters = dateFormatters;                                                                                // 1608
                                                                                                                   // 1609
                                                                                                                   // 1610
/* thanks jQuery UI (https://github.com/jquery/jquery-ui/blob/master/ui/jquery.ui.datepicker.js)                   // 1611
 *                                                                                                                 // 1612
 * Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.                        // 1613
 * @param  date  Date - the date to get the week for                                                               // 1614
 * @return  number - the number of the week within the year that contains this date                                // 1615
 */                                                                                                                // 1616
function iso8601Week(date) {                                                                                       // 1617
	var time;                                                                                                         // 1618
	var checkDate = new Date(date.getTime());                                                                         // 1619
                                                                                                                   // 1620
	// Find Thursday of this week starting on Monday                                                                  // 1621
	checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));                                           // 1622
                                                                                                                   // 1623
	time = checkDate.getTime();                                                                                       // 1624
	checkDate.setMonth(0); // Compare with Jan 1                                                                      // 1625
	checkDate.setDate(1);                                                                                             // 1626
	return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;                                             // 1627
}                                                                                                                  // 1628
                                                                                                                   // 1629
                                                                                                                   // 1630
;;                                                                                                                 // 1631
                                                                                                                   // 1632
fc.applyAll = applyAll;                                                                                            // 1633
                                                                                                                   // 1634
                                                                                                                   // 1635
/* Event Date Math                                                                                                 // 1636
-----------------------------------------------------------------------------*/                                    // 1637
                                                                                                                   // 1638
                                                                                                                   // 1639
function exclEndDay(event) {                                                                                       // 1640
	if (event.end) {                                                                                                  // 1641
		return _exclEndDay(event.end, event.allDay);                                                                     // 1642
	}else{                                                                                                            // 1643
		return addDays(cloneDate(event.start), 1);                                                                       // 1644
	}                                                                                                                 // 1645
}                                                                                                                  // 1646
                                                                                                                   // 1647
                                                                                                                   // 1648
function _exclEndDay(end, allDay) {                                                                                // 1649
	end = cloneDate(end);                                                                                             // 1650
	return allDay || end.getHours() || end.getMinutes() ? addDays(end, 1) : clearTime(end);                           // 1651
}                                                                                                                  // 1652
                                                                                                                   // 1653
                                                                                                                   // 1654
function segCmp(a, b) {                                                                                            // 1655
	return (b.msLength - a.msLength) * 100 + (a.event.start - b.event.start);                                         // 1656
}                                                                                                                  // 1657
                                                                                                                   // 1658
                                                                                                                   // 1659
function segsCollide(seg1, seg2) {                                                                                 // 1660
	return seg1.end > seg2.start && seg1.start < seg2.end;                                                            // 1661
}                                                                                                                  // 1662
                                                                                                                   // 1663
                                                                                                                   // 1664
                                                                                                                   // 1665
/* Event Sorting                                                                                                   // 1666
-----------------------------------------------------------------------------*/                                    // 1667
                                                                                                                   // 1668
                                                                                                                   // 1669
// event rendering utilities                                                                                       // 1670
function sliceSegs(events, visEventEnds, start, end) {                                                             // 1671
	var segs = [],                                                                                                    // 1672
		i, len=events.length, event,                                                                                     // 1673
		eventStart, eventEnd,                                                                                            // 1674
		segStart, segEnd,                                                                                                // 1675
		isStart, isEnd;                                                                                                  // 1676
	for (i=0; i<len; i++) {                                                                                           // 1677
		event = events[i];                                                                                               // 1678
		eventStart = event.start;                                                                                        // 1679
		eventEnd = visEventEnds[i];                                                                                      // 1680
		if (eventEnd > start && eventStart < end) {                                                                      // 1681
			if (eventStart < start) {                                                                                       // 1682
				segStart = cloneDate(start);                                                                                   // 1683
				isStart = false;                                                                                               // 1684
			}else{                                                                                                          // 1685
				segStart = eventStart;                                                                                         // 1686
				isStart = true;                                                                                                // 1687
			}                                                                                                               // 1688
			if (eventEnd > end) {                                                                                           // 1689
				segEnd = cloneDate(end);                                                                                       // 1690
				isEnd = false;                                                                                                 // 1691
			}else{                                                                                                          // 1692
				segEnd = eventEnd;                                                                                             // 1693
				isEnd = true;                                                                                                  // 1694
			}                                                                                                               // 1695
			segs.push({                                                                                                     // 1696
				event: event,                                                                                                  // 1697
				start: segStart,                                                                                               // 1698
				end: segEnd,                                                                                                   // 1699
				isStart: isStart,                                                                                              // 1700
				isEnd: isEnd,                                                                                                  // 1701
				msLength: segEnd - segStart                                                                                    // 1702
			});                                                                                                             // 1703
		}                                                                                                                // 1704
	}                                                                                                                 // 1705
	return segs.sort(segCmp);                                                                                         // 1706
}                                                                                                                  // 1707
                                                                                                                   // 1708
                                                                                                                   // 1709
// event rendering calculation utilities                                                                           // 1710
function stackSegs(segs) {                                                                                         // 1711
	var levels = [],                                                                                                  // 1712
		i, len = segs.length, seg,                                                                                       // 1713
		j, collide, k;                                                                                                   // 1714
	for (i=0; i<len; i++) {                                                                                           // 1715
		seg = segs[i];                                                                                                   // 1716
		j = 0; // the level index where seg should belong                                                                // 1717
		while (true) {                                                                                                   // 1718
			collide = false;                                                                                                // 1719
			if (levels[j]) {                                                                                                // 1720
				for (k=0; k<levels[j].length; k++) {                                                                           // 1721
					if (segsCollide(levels[j][k], seg)) {                                                                         // 1722
						collide = true;                                                                                              // 1723
						break;                                                                                                       // 1724
					}                                                                                                             // 1725
				}                                                                                                              // 1726
			}                                                                                                               // 1727
			if (collide) {                                                                                                  // 1728
				j++;                                                                                                           // 1729
			}else{                                                                                                          // 1730
				break;                                                                                                         // 1731
			}                                                                                                               // 1732
		}                                                                                                                // 1733
		if (levels[j]) {                                                                                                 // 1734
			levels[j].push(seg);                                                                                            // 1735
		}else{                                                                                                           // 1736
			levels[j] = [seg];                                                                                              // 1737
		}                                                                                                                // 1738
	}                                                                                                                 // 1739
	return levels;                                                                                                    // 1740
}                                                                                                                  // 1741
                                                                                                                   // 1742
                                                                                                                   // 1743
                                                                                                                   // 1744
/* Event Element Binding                                                                                           // 1745
-----------------------------------------------------------------------------*/                                    // 1746
                                                                                                                   // 1747
                                                                                                                   // 1748
function lazySegBind(container, segs, bindHandlers) {                                                              // 1749
	container.unbind('mouseover').mouseover(function(ev) {                                                            // 1750
		var parent=ev.target, e,                                                                                         // 1751
			i, seg;                                                                                                         // 1752
		while (parent != this) {                                                                                         // 1753
			e = parent;                                                                                                     // 1754
			parent = parent.parentNode;                                                                                     // 1755
		}                                                                                                                // 1756
		if ((i = e._fci) !== undefined) {                                                                                // 1757
			e._fci = undefined;                                                                                             // 1758
			seg = segs[i];                                                                                                  // 1759
			bindHandlers(seg.event, seg.element, seg);                                                                      // 1760
			$(ev.target).trigger(ev);                                                                                       // 1761
		}                                                                                                                // 1762
		ev.stopPropagation();                                                                                            // 1763
	});                                                                                                               // 1764
}                                                                                                                  // 1765
                                                                                                                   // 1766
                                                                                                                   // 1767
                                                                                                                   // 1768
/* Element Dimensions                                                                                              // 1769
-----------------------------------------------------------------------------*/                                    // 1770
                                                                                                                   // 1771
                                                                                                                   // 1772
function setOuterWidth(element, width, includeMargins) {                                                           // 1773
	for (var i=0, e; i<element.length; i++) {                                                                         // 1774
		e = $(element[i]);                                                                                               // 1775
		e.width(Math.max(0, width - hsides(e, includeMargins)));                                                         // 1776
	}                                                                                                                 // 1777
}                                                                                                                  // 1778
                                                                                                                   // 1779
                                                                                                                   // 1780
function setOuterHeight(element, height, includeMargins) {                                                         // 1781
	for (var i=0, e; i<element.length; i++) {                                                                         // 1782
		e = $(element[i]);                                                                                               // 1783
		e.height(Math.max(0, height - vsides(e, includeMargins)));                                                       // 1784
	}                                                                                                                 // 1785
}                                                                                                                  // 1786
                                                                                                                   // 1787
                                                                                                                   // 1788
function hsides(element, includeMargins) {                                                                         // 1789
	return hpadding(element) + hborders(element) + (includeMargins ? hmargins(element) : 0);                          // 1790
}                                                                                                                  // 1791
                                                                                                                   // 1792
                                                                                                                   // 1793
function hpadding(element) {                                                                                       // 1794
	return (parseFloat($.css(element[0], 'paddingLeft', true)) || 0) +                                                // 1795
	       (parseFloat($.css(element[0], 'paddingRight', true)) || 0);                                                // 1796
}                                                                                                                  // 1797
                                                                                                                   // 1798
                                                                                                                   // 1799
function hmargins(element) {                                                                                       // 1800
	return (parseFloat($.css(element[0], 'marginLeft', true)) || 0) +                                                 // 1801
	       (parseFloat($.css(element[0], 'marginRight', true)) || 0);                                                 // 1802
}                                                                                                                  // 1803
                                                                                                                   // 1804
                                                                                                                   // 1805
function hborders(element) {                                                                                       // 1806
	return (parseFloat($.css(element[0], 'borderLeftWidth', true)) || 0) +                                            // 1807
	       (parseFloat($.css(element[0], 'borderRightWidth', true)) || 0);                                            // 1808
}                                                                                                                  // 1809
                                                                                                                   // 1810
                                                                                                                   // 1811
function vsides(element, includeMargins) {                                                                         // 1812
	return vpadding(element) +  vborders(element) + (includeMargins ? vmargins(element) : 0);                         // 1813
}                                                                                                                  // 1814
                                                                                                                   // 1815
                                                                                                                   // 1816
function vpadding(element) {                                                                                       // 1817
	return (parseFloat($.css(element[0], 'paddingTop', true)) || 0) +                                                 // 1818
	       (parseFloat($.css(element[0], 'paddingBottom', true)) || 0);                                               // 1819
}                                                                                                                  // 1820
                                                                                                                   // 1821
                                                                                                                   // 1822
function vmargins(element) {                                                                                       // 1823
	return (parseFloat($.css(element[0], 'marginTop', true)) || 0) +                                                  // 1824
	       (parseFloat($.css(element[0], 'marginBottom', true)) || 0);                                                // 1825
}                                                                                                                  // 1826
                                                                                                                   // 1827
                                                                                                                   // 1828
function vborders(element) {                                                                                       // 1829
	return (parseFloat($.css(element[0], 'borderTopWidth', true)) || 0) +                                             // 1830
	       (parseFloat($.css(element[0], 'borderBottomWidth', true)) || 0);                                           // 1831
}                                                                                                                  // 1832
                                                                                                                   // 1833
                                                                                                                   // 1834
function setMinHeight(element, height) {                                                                           // 1835
	height = (typeof height == 'number' ? height + 'px' : height);                                                    // 1836
	element.each(function(i, _element) {                                                                              // 1837
		_element.style.cssText += ';min-height:' + height + ';_height:' + height;                                        // 1838
		// why can't we just use .css() ? i forget                                                                       // 1839
	});                                                                                                               // 1840
}                                                                                                                  // 1841
                                                                                                                   // 1842
                                                                                                                   // 1843
                                                                                                                   // 1844
/* Misc Utils                                                                                                      // 1845
-----------------------------------------------------------------------------*/                                    // 1846
                                                                                                                   // 1847
                                                                                                                   // 1848
//TODO: arraySlice                                                                                                 // 1849
//TODO: isFunction, grep ?                                                                                         // 1850
                                                                                                                   // 1851
                                                                                                                   // 1852
function noop() { }                                                                                                // 1853
                                                                                                                   // 1854
                                                                                                                   // 1855
function cmp(a, b) {                                                                                               // 1856
	return a - b;                                                                                                     // 1857
}                                                                                                                  // 1858
                                                                                                                   // 1859
                                                                                                                   // 1860
function arrayMax(a) {                                                                                             // 1861
	return Math.max.apply(Math, a);                                                                                   // 1862
}                                                                                                                  // 1863
                                                                                                                   // 1864
                                                                                                                   // 1865
function zeroPad(n) {                                                                                              // 1866
	return (n < 10 ? '0' : '') + n;                                                                                   // 1867
}                                                                                                                  // 1868
                                                                                                                   // 1869
                                                                                                                   // 1870
function smartProperty(obj, name) { // get a camel-cased/namespaced property of an object                          // 1871
	if (obj[name] !== undefined) {                                                                                    // 1872
		return obj[name];                                                                                                // 1873
	}                                                                                                                 // 1874
	var parts = name.split(/(?=[A-Z])/),                                                                              // 1875
		i=parts.length-1, res;                                                                                           // 1876
	for (; i>=0; i--) {                                                                                               // 1877
		res = obj[parts[i].toLowerCase()];                                                                               // 1878
		if (res !== undefined) {                                                                                         // 1879
			return res;                                                                                                     // 1880
		}                                                                                                                // 1881
	}                                                                                                                 // 1882
	return obj[''];                                                                                                   // 1883
}                                                                                                                  // 1884
                                                                                                                   // 1885
                                                                                                                   // 1886
function htmlEscape(s) {                                                                                           // 1887
	return s.replace(/&/g, '&amp;')                                                                                   // 1888
		.replace(/</g, '&lt;')                                                                                           // 1889
		.replace(/>/g, '&gt;')                                                                                           // 1890
		.replace(/'/g, '&#039;')                                                                                         // 1891
		.replace(/"/g, '&quot;')                                                                                         // 1892
		.replace(/\n/g, '<br />');                                                                                       // 1893
}                                                                                                                  // 1894
                                                                                                                   // 1895
                                                                                                                   // 1896
function cssKey(_element) {                                                                                        // 1897
	return _element.id + '/' + _element.className + '/' + _element.style.cssText.replace(/(^|;)\s*(top|left|width|height)\s*:[^;]*/ig, '');
}                                                                                                                  // 1899
                                                                                                                   // 1900
                                                                                                                   // 1901
function disableTextSelection(element) {                                                                           // 1902
	element                                                                                                           // 1903
		.attr('unselectable', 'on')                                                                                      // 1904
		.css('MozUserSelect', 'none')                                                                                    // 1905
		.bind('selectstart.ui', function() { return false; });                                                           // 1906
}                                                                                                                  // 1907
                                                                                                                   // 1908
                                                                                                                   // 1909
/*                                                                                                                 // 1910
function enableTextSelection(element) {                                                                            // 1911
	element                                                                                                           // 1912
		.attr('unselectable', 'off')                                                                                     // 1913
		.css('MozUserSelect', '')                                                                                        // 1914
		.unbind('selectstart.ui');                                                                                       // 1915
}                                                                                                                  // 1916
*/                                                                                                                 // 1917
                                                                                                                   // 1918
                                                                                                                   // 1919
function markFirstLast(e) {                                                                                        // 1920
	e.children()                                                                                                      // 1921
		.removeClass('fc-first fc-last')                                                                                 // 1922
		.filter(':first-child')                                                                                          // 1923
			.addClass('fc-first')                                                                                           // 1924
		.end()                                                                                                           // 1925
		.filter(':last-child')                                                                                           // 1926
			.addClass('fc-last');                                                                                           // 1927
}                                                                                                                  // 1928
                                                                                                                   // 1929
                                                                                                                   // 1930
function setDayID(cell, date) {                                                                                    // 1931
	cell.each(function(i, _cell) {                                                                                    // 1932
		_cell.className = _cell.className.replace(/^fc-\w*/, 'fc-' + dayIDs[date.getDay()]);                             // 1933
		// TODO: make a way that doesn't rely on order of classes                                                        // 1934
	});                                                                                                               // 1935
}                                                                                                                  // 1936
                                                                                                                   // 1937
                                                                                                                   // 1938
function getSkinCss(event, opt) {                                                                                  // 1939
	var source = event.source || {};                                                                                  // 1940
	var eventColor = event.color;                                                                                     // 1941
	var sourceColor = source.color;                                                                                   // 1942
	var optionColor = opt('eventColor');                                                                              // 1943
	var backgroundColor =                                                                                             // 1944
		event.backgroundColor ||                                                                                         // 1945
		eventColor ||                                                                                                    // 1946
		source.backgroundColor ||                                                                                        // 1947
		sourceColor ||                                                                                                   // 1948
		opt('eventBackgroundColor') ||                                                                                   // 1949
		optionColor;                                                                                                     // 1950
	var borderColor =                                                                                                 // 1951
		event.borderColor ||                                                                                             // 1952
		eventColor ||                                                                                                    // 1953
		source.borderColor ||                                                                                            // 1954
		sourceColor ||                                                                                                   // 1955
		opt('eventBorderColor') ||                                                                                       // 1956
		optionColor;                                                                                                     // 1957
	var textColor =                                                                                                   // 1958
		event.textColor ||                                                                                               // 1959
		source.textColor ||                                                                                              // 1960
		opt('eventTextColor');                                                                                           // 1961
	var statements = [];                                                                                              // 1962
	if (backgroundColor) {                                                                                            // 1963
		statements.push('background-color:' + backgroundColor);                                                          // 1964
	}                                                                                                                 // 1965
	if (borderColor) {                                                                                                // 1966
		statements.push('border-color:' + borderColor);                                                                  // 1967
	}                                                                                                                 // 1968
	if (textColor) {                                                                                                  // 1969
		statements.push('color:' + textColor);                                                                           // 1970
	}                                                                                                                 // 1971
	return statements.join(';');                                                                                      // 1972
}                                                                                                                  // 1973
                                                                                                                   // 1974
                                                                                                                   // 1975
function applyAll(functions, thisObj, args) {                                                                      // 1976
	if ($.isFunction(functions)) {                                                                                    // 1977
		functions = [ functions ];                                                                                       // 1978
	}                                                                                                                 // 1979
	if (functions) {                                                                                                  // 1980
		var i;                                                                                                           // 1981
		var ret;                                                                                                         // 1982
		for (i=0; i<functions.length; i++) {                                                                             // 1983
			ret = functions[i].apply(thisObj, args) || ret;                                                                 // 1984
		}                                                                                                                // 1985
		return ret;                                                                                                      // 1986
	}                                                                                                                 // 1987
}                                                                                                                  // 1988
                                                                                                                   // 1989
                                                                                                                   // 1990
function firstDefined() {                                                                                          // 1991
	for (var i=0; i<arguments.length; i++) {                                                                          // 1992
		if (arguments[i] !== undefined) {                                                                                // 1993
			return arguments[i];                                                                                            // 1994
		}                                                                                                                // 1995
	}                                                                                                                 // 1996
}                                                                                                                  // 1997
                                                                                                                   // 1998
                                                                                                                   // 1999
;;                                                                                                                 // 2000
                                                                                                                   // 2001
fcViews.month = MonthView;                                                                                         // 2002
                                                                                                                   // 2003
function MonthView(element, calendar) {                                                                            // 2004
	var t = this;                                                                                                     // 2005
	                                                                                                                  // 2006
	                                                                                                                  // 2007
	// exports                                                                                                        // 2008
	t.render = render;                                                                                                // 2009
	                                                                                                                  // 2010
	                                                                                                                  // 2011
	// imports                                                                                                        // 2012
	BasicView.call(t, element, calendar, 'month');                                                                    // 2013
	var opt = t.opt;                                                                                                  // 2014
	var renderBasic = t.renderBasic;                                                                                  // 2015
	var formatDate = calendar.formatDate;                                                                             // 2016
	                                                                                                                  // 2017
	                                                                                                                  // 2018
	                                                                                                                  // 2019
	function render(date, delta) {                                                                                    // 2020
		if (delta) {                                                                                                     // 2021
			addMonths(date, delta);                                                                                         // 2022
			date.setDate(1);                                                                                                // 2023
		}                                                                                                                // 2024
		var start = cloneDate(date, true);                                                                               // 2025
		start.setDate(1);                                                                                                // 2026
		var end = addMonths(cloneDate(start), 1);                                                                        // 2027
		var visStart = cloneDate(start);                                                                                 // 2028
		var visEnd = cloneDate(end);                                                                                     // 2029
		var firstDay = opt('firstDay');                                                                                  // 2030
		var nwe = opt('weekends') ? 0 : 1;                                                                               // 2031
		if (nwe) {                                                                                                       // 2032
			skipWeekend(visStart);                                                                                          // 2033
			skipWeekend(visEnd, -1, true);                                                                                  // 2034
		}                                                                                                                // 2035
		addDays(visStart, -((visStart.getDay() - Math.max(firstDay, nwe) + 7) % 7));                                     // 2036
		addDays(visEnd, (7 - visEnd.getDay() + Math.max(firstDay, nwe)) % 7);                                            // 2037
		var rowCnt = Math.round((visEnd - visStart) / (DAY_MS * 7));                                                     // 2038
		if (opt('weekMode') == 'fixed') {                                                                                // 2039
			addDays(visEnd, (6 - rowCnt) * 7);                                                                              // 2040
			rowCnt = 6;                                                                                                     // 2041
		}                                                                                                                // 2042
		t.title = formatDate(start, opt('titleFormat'));                                                                 // 2043
		t.start = start;                                                                                                 // 2044
		t.end = end;                                                                                                     // 2045
		t.visStart = visStart;                                                                                           // 2046
		t.visEnd = visEnd;                                                                                               // 2047
		renderBasic(rowCnt, nwe ? 5 : 7, true);                                                                          // 2048
	}                                                                                                                 // 2049
	                                                                                                                  // 2050
	                                                                                                                  // 2051
}                                                                                                                  // 2052
                                                                                                                   // 2053
;;                                                                                                                 // 2054
                                                                                                                   // 2055
fcViews.basicWeek = BasicWeekView;                                                                                 // 2056
                                                                                                                   // 2057
function BasicWeekView(element, calendar) {                                                                        // 2058
	var t = this;                                                                                                     // 2059
	                                                                                                                  // 2060
	                                                                                                                  // 2061
	// exports                                                                                                        // 2062
	t.render = render;                                                                                                // 2063
	                                                                                                                  // 2064
	                                                                                                                  // 2065
	// imports                                                                                                        // 2066
	BasicView.call(t, element, calendar, 'basicWeek');                                                                // 2067
	var opt = t.opt;                                                                                                  // 2068
	var renderBasic = t.renderBasic;                                                                                  // 2069
	var formatDates = calendar.formatDates;                                                                           // 2070
	                                                                                                                  // 2071
	                                                                                                                  // 2072
	                                                                                                                  // 2073
	function render(date, delta) {                                                                                    // 2074
		if (delta) {                                                                                                     // 2075
			addDays(date, delta * 7);                                                                                       // 2076
		}                                                                                                                // 2077
		var start = addDays(cloneDate(date), -((date.getDay() - opt('firstDay') + 7) % 7));                              // 2078
		var end = addDays(cloneDate(start), 7);                                                                          // 2079
		var visStart = cloneDate(start);                                                                                 // 2080
		var visEnd = cloneDate(end);                                                                                     // 2081
		var weekends = opt('weekends');                                                                                  // 2082
		if (!weekends) {                                                                                                 // 2083
			skipWeekend(visStart);                                                                                          // 2084
			skipWeekend(visEnd, -1, true);                                                                                  // 2085
		}                                                                                                                // 2086
		t.title = formatDates(                                                                                           // 2087
			visStart,                                                                                                       // 2088
			addDays(cloneDate(visEnd), -1),                                                                                 // 2089
			opt('titleFormat')                                                                                              // 2090
		);                                                                                                               // 2091
		t.start = start;                                                                                                 // 2092
		t.end = end;                                                                                                     // 2093
		t.visStart = visStart;                                                                                           // 2094
		t.visEnd = visEnd;                                                                                               // 2095
		renderBasic(1, weekends ? 7 : 5, false);                                                                         // 2096
	}                                                                                                                 // 2097
	                                                                                                                  // 2098
	                                                                                                                  // 2099
}                                                                                                                  // 2100
                                                                                                                   // 2101
;;                                                                                                                 // 2102
                                                                                                                   // 2103
fcViews.basicDay = BasicDayView;                                                                                   // 2104
                                                                                                                   // 2105
//TODO: when calendar's date starts out on a weekend, shouldn't happen                                             // 2106
                                                                                                                   // 2107
                                                                                                                   // 2108
function BasicDayView(element, calendar) {                                                                         // 2109
	var t = this;                                                                                                     // 2110
	                                                                                                                  // 2111
	                                                                                                                  // 2112
	// exports                                                                                                        // 2113
	t.render = render;                                                                                                // 2114
	                                                                                                                  // 2115
	                                                                                                                  // 2116
	// imports                                                                                                        // 2117
	BasicView.call(t, element, calendar, 'basicDay');                                                                 // 2118
	var opt = t.opt;                                                                                                  // 2119
	var renderBasic = t.renderBasic;                                                                                  // 2120
	var formatDate = calendar.formatDate;                                                                             // 2121
	                                                                                                                  // 2122
	                                                                                                                  // 2123
	                                                                                                                  // 2124
	function render(date, delta) {                                                                                    // 2125
		if (delta) {                                                                                                     // 2126
			addDays(date, delta);                                                                                           // 2127
			if (!opt('weekends')) {                                                                                         // 2128
				skipWeekend(date, delta < 0 ? -1 : 1);                                                                         // 2129
			}                                                                                                               // 2130
		}                                                                                                                // 2131
		t.title = formatDate(date, opt('titleFormat'));                                                                  // 2132
		t.start = t.visStart = cloneDate(date, true);                                                                    // 2133
		t.end = t.visEnd = addDays(cloneDate(t.start), 1);                                                               // 2134
		renderBasic(1, 1, false);                                                                                        // 2135
	}                                                                                                                 // 2136
	                                                                                                                  // 2137
	                                                                                                                  // 2138
}                                                                                                                  // 2139
                                                                                                                   // 2140
;;                                                                                                                 // 2141
                                                                                                                   // 2142
setDefaults({                                                                                                      // 2143
	weekMode: 'fixed'                                                                                                 // 2144
});                                                                                                                // 2145
                                                                                                                   // 2146
                                                                                                                   // 2147
function BasicView(element, calendar, viewName) {                                                                  // 2148
	var t = this;                                                                                                     // 2149
	                                                                                                                  // 2150
	                                                                                                                  // 2151
	// exports                                                                                                        // 2152
	t.renderBasic = renderBasic;                                                                                      // 2153
	t.setHeight = setHeight;                                                                                          // 2154
	t.setWidth = setWidth;                                                                                            // 2155
	t.renderDayOverlay = renderDayOverlay;                                                                            // 2156
	t.defaultSelectionEnd = defaultSelectionEnd;                                                                      // 2157
	t.renderSelection = renderSelection;                                                                              // 2158
	t.clearSelection = clearSelection;                                                                                // 2159
	t.reportDayClick = reportDayClick; // for selection (kinda hacky)                                                 // 2160
	t.dragStart = dragStart;                                                                                          // 2161
	t.dragStop = dragStop;                                                                                            // 2162
	t.defaultEventEnd = defaultEventEnd;                                                                              // 2163
	t.getHoverListener = function() { return hoverListener };                                                         // 2164
	t.colContentLeft = colContentLeft;                                                                                // 2165
	t.colContentRight = colContentRight;                                                                              // 2166
	t.dayOfWeekCol = dayOfWeekCol;                                                                                    // 2167
	t.dateCell = dateCell;                                                                                            // 2168
	t.cellDate = cellDate;                                                                                            // 2169
	t.cellIsAllDay = function() { return true };                                                                      // 2170
	t.allDayRow = allDayRow;                                                                                          // 2171
	t.allDayBounds = allDayBounds;                                                                                    // 2172
	t.getRowCnt = function() { return rowCnt };                                                                       // 2173
	t.getColCnt = function() { return colCnt };                                                                       // 2174
	t.getColWidth = function() { return colWidth };                                                                   // 2175
	t.getDaySegmentContainer = function() { return daySegmentContainer };                                             // 2176
	                                                                                                                  // 2177
	                                                                                                                  // 2178
	// imports                                                                                                        // 2179
	View.call(t, element, calendar, viewName);                                                                        // 2180
	OverlayManager.call(t);                                                                                           // 2181
	SelectionManager.call(t);                                                                                         // 2182
	BasicEventRenderer.call(t);                                                                                       // 2183
	var opt = t.opt;                                                                                                  // 2184
	var trigger = t.trigger;                                                                                          // 2185
	var clearEvents = t.clearEvents;                                                                                  // 2186
	var renderOverlay = t.renderOverlay;                                                                              // 2187
	var clearOverlays = t.clearOverlays;                                                                              // 2188
	var daySelectionMousedown = t.daySelectionMousedown;                                                              // 2189
	var formatDate = calendar.formatDate;                                                                             // 2190
	                                                                                                                  // 2191
	                                                                                                                  // 2192
	// locals                                                                                                         // 2193
	                                                                                                                  // 2194
	var table;                                                                                                        // 2195
	var head;                                                                                                         // 2196
	var headCells;                                                                                                    // 2197
	var body;                                                                                                         // 2198
	var bodyRows;                                                                                                     // 2199
	var bodyCells;                                                                                                    // 2200
	var bodyFirstCells;                                                                                               // 2201
	var bodyCellTopInners;                                                                                            // 2202
	var daySegmentContainer;                                                                                          // 2203
	                                                                                                                  // 2204
	var viewWidth;                                                                                                    // 2205
	var viewHeight;                                                                                                   // 2206
	var colWidth;                                                                                                     // 2207
	var weekNumberWidth;                                                                                              // 2208
	                                                                                                                  // 2209
	var rowCnt, colCnt;                                                                                               // 2210
	var coordinateGrid;                                                                                               // 2211
	var hoverListener;                                                                                                // 2212
	var colContentPositions;                                                                                          // 2213
	                                                                                                                  // 2214
	var rtl, dis, dit;                                                                                                // 2215
	var firstDay;                                                                                                     // 2216
	var nwe; // no weekends? a 0 or 1 for easy computations                                                           // 2217
	var tm;                                                                                                           // 2218
	var colFormat;                                                                                                    // 2219
	var showWeekNumbers;                                                                                              // 2220
	var weekNumberTitle;                                                                                              // 2221
	var weekNumberFormat;                                                                                             // 2222
	                                                                                                                  // 2223
	                                                                                                                  // 2224
	                                                                                                                  // 2225
	/* Rendering                                                                                                      // 2226
	------------------------------------------------------------*/                                                    // 2227
	                                                                                                                  // 2228
	                                                                                                                  // 2229
	disableTextSelection(element.addClass('fc-grid'));                                                                // 2230
	                                                                                                                  // 2231
	                                                                                                                  // 2232
	function renderBasic(r, c, showNumbers) {                                                                         // 2233
		rowCnt = r;                                                                                                      // 2234
		colCnt = c;                                                                                                      // 2235
		updateOptions();                                                                                                 // 2236
		var firstTime = !body;                                                                                           // 2237
		if (firstTime) {                                                                                                 // 2238
			buildEventContainer();                                                                                          // 2239
		}else{                                                                                                           // 2240
			clearEvents();                                                                                                  // 2241
		}                                                                                                                // 2242
		buildTable(showNumbers);                                                                                         // 2243
	}                                                                                                                 // 2244
	                                                                                                                  // 2245
	                                                                                                                  // 2246
	                                                                                                                  // 2247
	function updateOptions() {                                                                                        // 2248
		rtl = opt('isRTL');                                                                                              // 2249
		if (rtl) {                                                                                                       // 2250
			dis = -1;                                                                                                       // 2251
			dit = colCnt - 1;                                                                                               // 2252
		}else{                                                                                                           // 2253
			dis = 1;                                                                                                        // 2254
			dit = 0;                                                                                                        // 2255
		}                                                                                                                // 2256
		firstDay = opt('firstDay');                                                                                      // 2257
		nwe = opt('weekends') ? 0 : 1;                                                                                   // 2258
		tm = opt('theme') ? 'ui' : 'fc';                                                                                 // 2259
		colFormat = opt('columnFormat');                                                                                 // 2260
                                                                                                                   // 2261
		// week # options. (TODO: bad, logic also in other views)                                                        // 2262
		showWeekNumbers = opt('weekNumbers');                                                                            // 2263
		weekNumberTitle = opt('weekNumberTitle');                                                                        // 2264
		if (opt('weekNumberCalculation') != 'iso') {                                                                     // 2265
			weekNumberFormat = "w";                                                                                         // 2266
		}                                                                                                                // 2267
		else {                                                                                                           // 2268
			weekNumberFormat = "W";                                                                                         // 2269
		}                                                                                                                // 2270
	}                                                                                                                 // 2271
	                                                                                                                  // 2272
	                                                                                                                  // 2273
	                                                                                                                  // 2274
	function buildEventContainer() {                                                                                  // 2275
		daySegmentContainer =                                                                                            // 2276
			$("<div style='position:absolute;z-index:8;top:0;left:0'/>")                                                    // 2277
				.appendTo(element);                                                                                            // 2278
	}                                                                                                                 // 2279
	                                                                                                                  // 2280
	                                                                                                                  // 2281
	                                                                                                                  // 2282
	function buildTable(showNumbers) {                                                                                // 2283
		var html = '';                                                                                                   // 2284
		var i, j;                                                                                                        // 2285
		var headerClass = tm + "-widget-header";                                                                         // 2286
		var contentClass = tm + "-widget-content";                                                                       // 2287
		var month = t.start.getMonth();                                                                                  // 2288
		var today = clearTime(new Date());                                                                               // 2289
		var cellDate; // not to be confused with local function. TODO: better names                                      // 2290
		var cellClasses;                                                                                                 // 2291
		var cell;                                                                                                        // 2292
                                                                                                                   // 2293
		html += "<table class='fc-border-separate' style='width:100%' cellspacing='0'>" +                                // 2294
		        "<thead>" +                                                                                              // 2295
		        "<tr>";                                                                                                  // 2296
                                                                                                                   // 2297
		if (showWeekNumbers) {                                                                                           // 2298
			html += "<th class='fc-week-number " + headerClass + "'/>";                                                     // 2299
		}                                                                                                                // 2300
                                                                                                                   // 2301
		for (i=0; i<colCnt; i++) {                                                                                       // 2302
			cellDate = _cellDate(0, i); // a little confusing. cellDate is local variable. _cellDate is private function    // 2303
			html += "<th class='fc-day-header fc-" + dayIDs[cellDate.getDay()] + " " + headerClass + "'/>";                 // 2304
		}                                                                                                                // 2305
                                                                                                                   // 2306
		html += "</tr>" +                                                                                                // 2307
		        "</thead>" +                                                                                             // 2308
		        "<tbody>";                                                                                               // 2309
                                                                                                                   // 2310
		for (i=0; i<rowCnt; i++) {                                                                                       // 2311
			html += "<tr class='fc-week'>";                                                                                 // 2312
                                                                                                                   // 2313
			if (showWeekNumbers) {                                                                                          // 2314
				html += "<td class='fc-week-number " + contentClass + "'>" +                                                   // 2315
				        "<div/>" +                                                                                             // 2316
				        "</td>";                                                                                               // 2317
			}                                                                                                               // 2318
                                                                                                                   // 2319
			for (j=0; j<colCnt; j++) {                                                                                      // 2320
				cellDate = _cellDate(i, j); // a little confusing. cellDate is local variable. _cellDate is private function   // 2321
                                                                                                                   // 2322
				cellClasses = [                                                                                                // 2323
					'fc-day',                                                                                                     // 2324
					'fc-' + dayIDs[cellDate.getDay()],                                                                            // 2325
					contentClass                                                                                                  // 2326
				];                                                                                                             // 2327
				if (cellDate.getMonth() != month) {                                                                            // 2328
					cellClasses.push('fc-other-month');                                                                           // 2329
				}                                                                                                              // 2330
				if (+cellDate == +today) {                                                                                     // 2331
					cellClasses.push('fc-today');                                                                                 // 2332
					cellClasses.push(tm + '-state-highlight');                                                                    // 2333
				}                                                                                                              // 2334
                                                                                                                   // 2335
				html += "<td" +                                                                                                // 2336
				        " class='" + cellClasses.join(' ') + "'" +                                                             // 2337
				        " data-date='" + formatDate(cellDate, 'yyyy-MM-dd') + "'" +                                            // 2338
				        ">" +                                                                                                  // 2339
				        "<div>";                                                                                               // 2340
				if (showNumbers) {                                                                                             // 2341
					html += "<div class='fc-day-number'>" + cellDate.getDate() + "</div>";                                        // 2342
				}                                                                                                              // 2343
				html += "<div class='fc-day-content'>" +                                                                       // 2344
				        "<div style='position:relative'>&nbsp;</div>" +                                                        // 2345
				        "</div>" +                                                                                             // 2346
				        "</div>" +                                                                                             // 2347
				        "</td>";                                                                                               // 2348
			}                                                                                                               // 2349
                                                                                                                   // 2350
			html += "</tr>";                                                                                                // 2351
		}                                                                                                                // 2352
		html += "</tbody>" +                                                                                             // 2353
		        "</table>";                                                                                              // 2354
                                                                                                                   // 2355
		lockHeight(); // the unlock happens later, in setHeight()...                                                     // 2356
		if (table) {                                                                                                     // 2357
			table.remove();                                                                                                 // 2358
		}                                                                                                                // 2359
		table = $(html).appendTo(element);                                                                               // 2360
                                                                                                                   // 2361
		head = table.find('thead');                                                                                      // 2362
		headCells = head.find('.fc-day-header');                                                                         // 2363
		body = table.find('tbody');                                                                                      // 2364
		bodyRows = body.find('tr');                                                                                      // 2365
		bodyCells = body.find('.fc-day');                                                                                // 2366
		bodyFirstCells = bodyRows.find('td:first-child');                                                                // 2367
		bodyCellTopInners = bodyRows.eq(0).find('.fc-day-content > div');                                                // 2368
		                                                                                                                 // 2369
		markFirstLast(head.add(head.find('tr'))); // marks first+last tr/th's                                            // 2370
		markFirstLast(bodyRows); // marks first+last td's                                                                // 2371
		bodyRows.eq(0).addClass('fc-first');                                                                             // 2372
		bodyRows.filter(':last').addClass('fc-last');                                                                    // 2373
	                                                                                                                  // 2374
		if (showWeekNumbers) {                                                                                           // 2375
			head.find('.fc-week-number').text(weekNumberTitle);                                                             // 2376
		}                                                                                                                // 2377
                                                                                                                   // 2378
		headCells.each(function(i, _cell) {                                                                              // 2379
			var date = indexDate(i);                                                                                        // 2380
			$(_cell).text(formatDate(date, colFormat));                                                                     // 2381
		});                                                                                                              // 2382
                                                                                                                   // 2383
		if (showWeekNumbers) {                                                                                           // 2384
			body.find('.fc-week-number > div').each(function(i, _cell) {                                                    // 2385
				var weekStart = _cellDate(i, 0);                                                                               // 2386
				$(_cell).text(formatDate(weekStart, weekNumberFormat));                                                        // 2387
			});                                                                                                             // 2388
		}                                                                                                                // 2389
		                                                                                                                 // 2390
		bodyCells.each(function(i, _cell) {                                                                              // 2391
			var date = indexDate(i);                                                                                        // 2392
			trigger('dayRender', t, date, $(_cell));                                                                        // 2393
		});                                                                                                              // 2394
                                                                                                                   // 2395
		dayBind(bodyCells);                                                                                              // 2396
	}                                                                                                                 // 2397
	                                                                                                                  // 2398
	                                                                                                                  // 2399
	                                                                                                                  // 2400
	function setHeight(height) {                                                                                      // 2401
		viewHeight = height;                                                                                             // 2402
		                                                                                                                 // 2403
		var bodyHeight = viewHeight - head.height();                                                                     // 2404
		var rowHeight;                                                                                                   // 2405
		var rowHeightLast;                                                                                               // 2406
		var cell;                                                                                                        // 2407
			                                                                                                                // 2408
		if (opt('weekMode') == 'variable') {                                                                             // 2409
			rowHeight = rowHeightLast = Math.floor(bodyHeight / (rowCnt==1 ? 2 : 6));                                       // 2410
		}else{                                                                                                           // 2411
			rowHeight = Math.floor(bodyHeight / rowCnt);                                                                    // 2412
			rowHeightLast = bodyHeight - rowHeight * (rowCnt-1);                                                            // 2413
		}                                                                                                                // 2414
		                                                                                                                 // 2415
		bodyFirstCells.each(function(i, _cell) {                                                                         // 2416
			if (i < rowCnt) {                                                                                               // 2417
				cell = $(_cell);                                                                                               // 2418
				setMinHeight(                                                                                                  // 2419
					cell.find('> div'),                                                                                           // 2420
					(i==rowCnt-1 ? rowHeightLast : rowHeight) - vsides(cell)                                                      // 2421
				);                                                                                                             // 2422
			}                                                                                                               // 2423
		});                                                                                                              // 2424
		                                                                                                                 // 2425
		unlockHeight();                                                                                                  // 2426
	}                                                                                                                 // 2427
	                                                                                                                  // 2428
	                                                                                                                  // 2429
	function setWidth(width) {                                                                                        // 2430
		viewWidth = width;                                                                                               // 2431
		colContentPositions.clear();                                                                                     // 2432
                                                                                                                   // 2433
		weekNumberWidth = 0;                                                                                             // 2434
		if (showWeekNumbers) {                                                                                           // 2435
			weekNumberWidth = head.find('th.fc-week-number').outerWidth();                                                  // 2436
		}                                                                                                                // 2437
                                                                                                                   // 2438
		colWidth = Math.floor((viewWidth - weekNumberWidth) / colCnt);                                                   // 2439
		setOuterWidth(headCells.slice(0, -1), colWidth);                                                                 // 2440
	}                                                                                                                 // 2441
	                                                                                                                  // 2442
	                                                                                                                  // 2443
	                                                                                                                  // 2444
	/* Day clicking and binding                                                                                       // 2445
	-----------------------------------------------------------*/                                                     // 2446
	                                                                                                                  // 2447
	                                                                                                                  // 2448
	function dayBind(days) {                                                                                          // 2449
		days.click(dayClick)                                                                                             // 2450
			.mousedown(daySelectionMousedown);                                                                              // 2451
	}                                                                                                                 // 2452
	                                                                                                                  // 2453
	                                                                                                                  // 2454
	function dayClick(ev) {                                                                                           // 2455
		if (!opt('selectable')) { // if selectable, SelectionManager will worry about dayClick                           // 2456
			var date = parseISO8601($(this).data('date'));                                                                  // 2457
			trigger('dayClick', this, date, true, ev);                                                                      // 2458
		}                                                                                                                // 2459
	}                                                                                                                 // 2460
	                                                                                                                  // 2461
	                                                                                                                  // 2462
	                                                                                                                  // 2463
	/* Semi-transparent Overlay Helpers                                                                               // 2464
	------------------------------------------------------*/                                                          // 2465
	                                                                                                                  // 2466
	                                                                                                                  // 2467
	function renderDayOverlay(overlayStart, overlayEnd, refreshCoordinateGrid) { // overlayEnd is exclusive           // 2468
		if (refreshCoordinateGrid) {                                                                                     // 2469
			coordinateGrid.build();                                                                                         // 2470
		}                                                                                                                // 2471
		var rowStart = cloneDate(t.visStart);                                                                            // 2472
		var rowEnd = addDays(cloneDate(rowStart), colCnt);                                                               // 2473
		for (var i=0; i<rowCnt; i++) {                                                                                   // 2474
			var stretchStart = new Date(Math.max(rowStart, overlayStart));                                                  // 2475
			var stretchEnd = new Date(Math.min(rowEnd, overlayEnd));                                                        // 2476
			if (stretchStart < stretchEnd) {                                                                                // 2477
				var colStart, colEnd;                                                                                          // 2478
				if (rtl) {                                                                                                     // 2479
					colStart = dayDiff(stretchEnd, rowStart)*dis+dit+1;                                                           // 2480
					colEnd = dayDiff(stretchStart, rowStart)*dis+dit+1;                                                           // 2481
				}else{                                                                                                         // 2482
					colStart = dayDiff(stretchStart, rowStart);                                                                   // 2483
					colEnd = dayDiff(stretchEnd, rowStart);                                                                       // 2484
				}                                                                                                              // 2485
				dayBind(                                                                                                       // 2486
					renderCellOverlay(i, colStart, i, colEnd-1)                                                                   // 2487
				);                                                                                                             // 2488
			}                                                                                                               // 2489
			addDays(rowStart, 7);                                                                                           // 2490
			addDays(rowEnd, 7);                                                                                             // 2491
		}                                                                                                                // 2492
	}                                                                                                                 // 2493
	                                                                                                                  // 2494
	                                                                                                                  // 2495
	function renderCellOverlay(row0, col0, row1, col1) { // row1,col1 is inclusive                                    // 2496
		var rect = coordinateGrid.rect(row0, col0, row1, col1, element);                                                 // 2497
		return renderOverlay(rect, element);                                                                             // 2498
	}                                                                                                                 // 2499
	                                                                                                                  // 2500
	                                                                                                                  // 2501
	                                                                                                                  // 2502
	/* Selection                                                                                                      // 2503
	-----------------------------------------------------------------------*/                                         // 2504
	                                                                                                                  // 2505
	                                                                                                                  // 2506
	function defaultSelectionEnd(startDate, allDay) {                                                                 // 2507
		return cloneDate(startDate);                                                                                     // 2508
	}                                                                                                                 // 2509
	                                                                                                                  // 2510
	                                                                                                                  // 2511
	function renderSelection(startDate, endDate, allDay) {                                                            // 2512
		renderDayOverlay(startDate, addDays(cloneDate(endDate), 1), true); // rebuild every time???                      // 2513
	}                                                                                                                 // 2514
	                                                                                                                  // 2515
	                                                                                                                  // 2516
	function clearSelection() {                                                                                       // 2517
		clearOverlays();                                                                                                 // 2518
	}                                                                                                                 // 2519
	                                                                                                                  // 2520
	                                                                                                                  // 2521
	function reportDayClick(date, allDay, ev) {                                                                       // 2522
		var cell = dateCell(date);                                                                                       // 2523
		var _element = bodyCells[cell.row*colCnt + cell.col];                                                            // 2524
		trigger('dayClick', _element, date, allDay, ev);                                                                 // 2525
	}                                                                                                                 // 2526
	                                                                                                                  // 2527
	                                                                                                                  // 2528
	                                                                                                                  // 2529
	/* External Dragging                                                                                              // 2530
	-----------------------------------------------------------------------*/                                         // 2531
	                                                                                                                  // 2532
	                                                                                                                  // 2533
	function dragStart(_dragElement, ev, ui) {                                                                        // 2534
		hoverListener.start(function(cell) {                                                                             // 2535
			clearOverlays();                                                                                                // 2536
			if (cell) {                                                                                                     // 2537
				renderCellOverlay(cell.row, cell.col, cell.row, cell.col);                                                     // 2538
			}                                                                                                               // 2539
		}, ev);                                                                                                          // 2540
	}                                                                                                                 // 2541
	                                                                                                                  // 2542
	                                                                                                                  // 2543
	function dragStop(_dragElement, ev, ui) {                                                                         // 2544
		var cell = hoverListener.stop();                                                                                 // 2545
		clearOverlays();                                                                                                 // 2546
		if (cell) {                                                                                                      // 2547
			var d = cellDate(cell);                                                                                         // 2548
			trigger('drop', _dragElement, d, true, ev, ui);                                                                 // 2549
		}                                                                                                                // 2550
	}                                                                                                                 // 2551
	                                                                                                                  // 2552
	                                                                                                                  // 2553
	                                                                                                                  // 2554
	/* Utilities                                                                                                      // 2555
	--------------------------------------------------------*/                                                        // 2556
	                                                                                                                  // 2557
	                                                                                                                  // 2558
	function defaultEventEnd(event) {                                                                                 // 2559
		return cloneDate(event.start);                                                                                   // 2560
	}                                                                                                                 // 2561
	                                                                                                                  // 2562
	                                                                                                                  // 2563
	coordinateGrid = new CoordinateGrid(function(rows, cols) {                                                        // 2564
		var e, n, p;                                                                                                     // 2565
		headCells.each(function(i, _e) {                                                                                 // 2566
			e = $(_e);                                                                                                      // 2567
			n = e.offset().left;                                                                                            // 2568
			if (i) {                                                                                                        // 2569
				p[1] = n;                                                                                                      // 2570
			}                                                                                                               // 2571
			p = [n];                                                                                                        // 2572
			cols[i] = p;                                                                                                    // 2573
		});                                                                                                              // 2574
		p[1] = n + e.outerWidth();                                                                                       // 2575
		bodyRows.each(function(i, _e) {                                                                                  // 2576
			if (i < rowCnt) {                                                                                               // 2577
				e = $(_e);                                                                                                     // 2578
				n = e.offset().top;                                                                                            // 2579
				if (i) {                                                                                                       // 2580
					p[1] = n;                                                                                                     // 2581
				}                                                                                                              // 2582
				p = [n];                                                                                                       // 2583
				rows[i] = p;                                                                                                   // 2584
			}                                                                                                               // 2585
		});                                                                                                              // 2586
		p[1] = n + e.outerHeight();                                                                                      // 2587
	});                                                                                                               // 2588
	                                                                                                                  // 2589
	                                                                                                                  // 2590
	hoverListener = new HoverListener(coordinateGrid);                                                                // 2591
	                                                                                                                  // 2592
	                                                                                                                  // 2593
	colContentPositions = new HorizontalPositionCache(function(col) {                                                 // 2594
		return bodyCellTopInners.eq(col);                                                                                // 2595
	});                                                                                                               // 2596
	                                                                                                                  // 2597
	                                                                                                                  // 2598
	function colContentLeft(col) {                                                                                    // 2599
		return colContentPositions.left(col);                                                                            // 2600
	}                                                                                                                 // 2601
	                                                                                                                  // 2602
	                                                                                                                  // 2603
	function colContentRight(col) {                                                                                   // 2604
		return colContentPositions.right(col);                                                                           // 2605
	}                                                                                                                 // 2606
	                                                                                                                  // 2607
	                                                                                                                  // 2608
	                                                                                                                  // 2609
	                                                                                                                  // 2610
	function dateCell(date) {                                                                                         // 2611
		return {                                                                                                         // 2612
			row: Math.floor(dayDiff(date, t.visStart) / 7),                                                                 // 2613
			col: dayOfWeekCol(date.getDay())                                                                                // 2614
		};                                                                                                               // 2615
	}                                                                                                                 // 2616
	                                                                                                                  // 2617
	                                                                                                                  // 2618
	function cellDate(cell) {                                                                                         // 2619
		return _cellDate(cell.row, cell.col);                                                                            // 2620
	}                                                                                                                 // 2621
	                                                                                                                  // 2622
	                                                                                                                  // 2623
	function _cellDate(row, col) {                                                                                    // 2624
		return addDays(cloneDate(t.visStart), row*7 + col*dis+dit);                                                      // 2625
		// what about weekends in middle of week?                                                                        // 2626
	}                                                                                                                 // 2627
	                                                                                                                  // 2628
	                                                                                                                  // 2629
	function indexDate(index) {                                                                                       // 2630
		return _cellDate(Math.floor(index/colCnt), index%colCnt);                                                        // 2631
	}                                                                                                                 // 2632
	                                                                                                                  // 2633
	                                                                                                                  // 2634
	function dayOfWeekCol(dayOfWeek) {                                                                                // 2635
		return ((dayOfWeek - Math.max(firstDay, nwe) + colCnt) % colCnt) * dis + dit;                                    // 2636
	}                                                                                                                 // 2637
	                                                                                                                  // 2638
	                                                                                                                  // 2639
	                                                                                                                  // 2640
	                                                                                                                  // 2641
	function allDayRow(i) {                                                                                           // 2642
		return bodyRows.eq(i);                                                                                           // 2643
	}                                                                                                                 // 2644
	                                                                                                                  // 2645
	                                                                                                                  // 2646
	function allDayBounds(i) {                                                                                        // 2647
		var left = 0;                                                                                                    // 2648
		if (showWeekNumbers) {                                                                                           // 2649
			left += weekNumberWidth;                                                                                        // 2650
		}                                                                                                                // 2651
		return {                                                                                                         // 2652
			left: left,                                                                                                     // 2653
			right: viewWidth                                                                                                // 2654
		};                                                                                                               // 2655
	}                                                                                                                 // 2656
                                                                                                                   // 2657
                                                                                                                   // 2658
                                                                                                                   // 2659
	// makes sure height doesn't collapse while we destroy/render new cells                                           // 2660
	// (this causes a bad end-user scrollbar jump)                                                                    // 2661
	// TODO: generalize this for all view rendering. (also in Calendar.js)                                            // 2662
                                                                                                                   // 2663
	function lockHeight() {                                                                                           // 2664
		setMinHeight(element, element.height());                                                                         // 2665
	}                                                                                                                 // 2666
                                                                                                                   // 2667
	function unlockHeight() {                                                                                         // 2668
		setMinHeight(element, 1);                                                                                        // 2669
	}                                                                                                                 // 2670
	                                                                                                                  // 2671
}                                                                                                                  // 2672
                                                                                                                   // 2673
;;                                                                                                                 // 2674
                                                                                                                   // 2675
function BasicEventRenderer() {                                                                                    // 2676
	var t = this;                                                                                                     // 2677
	                                                                                                                  // 2678
	                                                                                                                  // 2679
	// exports                                                                                                        // 2680
	t.renderEvents = renderEvents;                                                                                    // 2681
	t.compileDaySegs = compileSegs; // for DayEventRenderer                                                           // 2682
	t.clearEvents = clearEvents;                                                                                      // 2683
	t.bindDaySeg = bindDaySeg;                                                                                        // 2684
	                                                                                                                  // 2685
	                                                                                                                  // 2686
	// imports                                                                                                        // 2687
	DayEventRenderer.call(t);                                                                                         // 2688
	var opt = t.opt;                                                                                                  // 2689
	var trigger = t.trigger;                                                                                          // 2690
	//var setOverflowHidden = t.setOverflowHidden;                                                                    // 2691
	var isEventDraggable = t.isEventDraggable;                                                                        // 2692
	var isEventResizable = t.isEventResizable;                                                                        // 2693
	var reportEvents = t.reportEvents;                                                                                // 2694
	var reportEventClear = t.reportEventClear;                                                                        // 2695
	var eventElementHandlers = t.eventElementHandlers;                                                                // 2696
	var showEvents = t.showEvents;                                                                                    // 2697
	var hideEvents = t.hideEvents;                                                                                    // 2698
	var eventDrop = t.eventDrop;                                                                                      // 2699
	var getDaySegmentContainer = t.getDaySegmentContainer;                                                            // 2700
	var getHoverListener = t.getHoverListener;                                                                        // 2701
	var renderDayOverlay = t.renderDayOverlay;                                                                        // 2702
	var clearOverlays = t.clearOverlays;                                                                              // 2703
	var getRowCnt = t.getRowCnt;                                                                                      // 2704
	var getColCnt = t.getColCnt;                                                                                      // 2705
	var renderDaySegs = t.renderDaySegs;                                                                              // 2706
	var resizableDayEvent = t.resizableDayEvent;                                                                      // 2707
	                                                                                                                  // 2708
	                                                                                                                  // 2709
	                                                                                                                  // 2710
	/* Rendering                                                                                                      // 2711
	--------------------------------------------------------------------*/                                            // 2712
	                                                                                                                  // 2713
	                                                                                                                  // 2714
	function renderEvents(events, modifiedEventId) {                                                                  // 2715
		reportEvents(events);                                                                                            // 2716
		renderDaySegs(compileSegs(events), modifiedEventId);                                                             // 2717
		trigger('eventAfterAllRender');                                                                                  // 2718
	}                                                                                                                 // 2719
	                                                                                                                  // 2720
	                                                                                                                  // 2721
	function clearEvents() {                                                                                          // 2722
		reportEventClear();                                                                                              // 2723
		getDaySegmentContainer().empty();                                                                                // 2724
	}                                                                                                                 // 2725
	                                                                                                                  // 2726
	                                                                                                                  // 2727
	function compileSegs(events) {                                                                                    // 2728
		var rowCnt = getRowCnt(),                                                                                        // 2729
			colCnt = getColCnt(),                                                                                           // 2730
			d1 = cloneDate(t.visStart),                                                                                     // 2731
			d2 = addDays(cloneDate(d1), colCnt),                                                                            // 2732
			visEventsEnds = $.map(events, exclEndDay),                                                                      // 2733
			i, row,                                                                                                         // 2734
			j, level,                                                                                                       // 2735
			k, seg,                                                                                                         // 2736
			segs=[];                                                                                                        // 2737
		for (i=0; i<rowCnt; i++) {                                                                                       // 2738
			row = stackSegs(sliceSegs(events, visEventsEnds, d1, d2));                                                      // 2739
			for (j=0; j<row.length; j++) {                                                                                  // 2740
				level = row[j];                                                                                                // 2741
				for (k=0; k<level.length; k++) {                                                                               // 2742
					seg = level[k];                                                                                               // 2743
					seg.row = i;                                                                                                  // 2744
					seg.level = j; // not needed anymore                                                                          // 2745
					segs.push(seg);                                                                                               // 2746
				}                                                                                                              // 2747
			}                                                                                                               // 2748
			addDays(d1, 7);                                                                                                 // 2749
			addDays(d2, 7);                                                                                                 // 2750
		}                                                                                                                // 2751
		return segs;                                                                                                     // 2752
	}                                                                                                                 // 2753
	                                                                                                                  // 2754
	                                                                                                                  // 2755
	function bindDaySeg(event, eventElement, seg) {                                                                   // 2756
		if (isEventDraggable(event)) {                                                                                   // 2757
			draggableDayEvent(event, eventElement);                                                                         // 2758
		}                                                                                                                // 2759
		if (seg.isEnd && isEventResizable(event)) {                                                                      // 2760
			resizableDayEvent(event, eventElement, seg);                                                                    // 2761
		}                                                                                                                // 2762
		eventElementHandlers(event, eventElement);                                                                       // 2763
			// needs to be after, because resizableDayEvent might stopImmediatePropagation on click                         // 2764
	}                                                                                                                 // 2765
	                                                                                                                  // 2766
	                                                                                                                  // 2767
	                                                                                                                  // 2768
	/* Dragging                                                                                                       // 2769
	----------------------------------------------------------------------------*/                                    // 2770
	                                                                                                                  // 2771
	                                                                                                                  // 2772
	function draggableDayEvent(event, eventElement) {                                                                 // 2773
		var hoverListener = getHoverListener();                                                                          // 2774
		var dayDelta;                                                                                                    // 2775
		eventElement.draggable({                                                                                         // 2776
			zIndex: 9,                                                                                                      // 2777
			delay: 50,                                                                                                      // 2778
			opacity: opt('dragOpacity'),                                                                                    // 2779
			revertDuration: opt('dragRevertDuration'),                                                                      // 2780
			start: function(ev, ui) {                                                                                       // 2781
				trigger('eventDragStart', eventElement, event, ev, ui);                                                        // 2782
				hideEvents(event, eventElement);                                                                               // 2783
				hoverListener.start(function(cell, origCell, rowDelta, colDelta) {                                             // 2784
					eventElement.draggable('option', 'revert', !cell || !rowDelta && !colDelta);                                  // 2785
					clearOverlays();                                                                                              // 2786
					if (cell) {                                                                                                   // 2787
						//setOverflowHidden(true);                                                                                   // 2788
						dayDelta = rowDelta*7 + colDelta * (opt('isRTL') ? -1 : 1);                                                  // 2789
						renderDayOverlay(                                                                                            // 2790
							addDays(cloneDate(event.start), dayDelta),                                                                  // 2791
							addDays(exclEndDay(event), dayDelta)                                                                        // 2792
						);                                                                                                           // 2793
					}else{                                                                                                        // 2794
						//setOverflowHidden(false);                                                                                  // 2795
						dayDelta = 0;                                                                                                // 2796
					}                                                                                                             // 2797
				}, ev, 'drag');                                                                                                // 2798
			},                                                                                                              // 2799
			stop: function(ev, ui) {                                                                                        // 2800
				hoverListener.stop();                                                                                          // 2801
				clearOverlays();                                                                                               // 2802
				trigger('eventDragStop', eventElement, event, ev, ui);                                                         // 2803
				if (dayDelta) {                                                                                                // 2804
					eventDrop(this, event, dayDelta, 0, event.allDay, ev, ui);                                                    // 2805
				}else{                                                                                                         // 2806
					eventElement.css('filter', ''); // clear IE opacity side-effects                                              // 2807
					showEvents(event, eventElement);                                                                              // 2808
				}                                                                                                              // 2809
				//setOverflowHidden(false);                                                                                    // 2810
			}                                                                                                               // 2811
		});                                                                                                              // 2812
	}                                                                                                                 // 2813
                                                                                                                   // 2814
                                                                                                                   // 2815
}                                                                                                                  // 2816
                                                                                                                   // 2817
;;                                                                                                                 // 2818
                                                                                                                   // 2819
fcViews.agendaWeek = AgendaWeekView;                                                                               // 2820
                                                                                                                   // 2821
function AgendaWeekView(element, calendar) {                                                                       // 2822
	var t = this;                                                                                                     // 2823
	                                                                                                                  // 2824
	                                                                                                                  // 2825
	// exports                                                                                                        // 2826
	t.render = render;                                                                                                // 2827
	                                                                                                                  // 2828
	                                                                                                                  // 2829
	// imports                                                                                                        // 2830
	AgendaView.call(t, element, calendar, 'agendaWeek');                                                              // 2831
	var opt = t.opt;                                                                                                  // 2832
	var renderAgenda = t.renderAgenda;                                                                                // 2833
	var formatDates = calendar.formatDates;                                                                           // 2834
	                                                                                                                  // 2835
	                                                                                                                  // 2836
	                                                                                                                  // 2837
	function render(date, delta) {                                                                                    // 2838
		if (delta) {                                                                                                     // 2839
			addDays(date, delta * 7);                                                                                       // 2840
		}                                                                                                                // 2841
		var start = addDays(cloneDate(date), -((date.getDay() - opt('firstDay') + 7) % 7));                              // 2842
		var end = addDays(cloneDate(start), 7);                                                                          // 2843
		var visStart = cloneDate(start);                                                                                 // 2844
		var visEnd = cloneDate(end);                                                                                     // 2845
		var weekends = opt('weekends');                                                                                  // 2846
		if (!weekends) {                                                                                                 // 2847
			skipWeekend(visStart);                                                                                          // 2848
			skipWeekend(visEnd, -1, true);                                                                                  // 2849
		}                                                                                                                // 2850
		t.title = formatDates(                                                                                           // 2851
			visStart,                                                                                                       // 2852
			addDays(cloneDate(visEnd), -1),                                                                                 // 2853
			opt('titleFormat')                                                                                              // 2854
		);                                                                                                               // 2855
		t.start = start;                                                                                                 // 2856
		t.end = end;                                                                                                     // 2857
		t.visStart = visStart;                                                                                           // 2858
		t.visEnd = visEnd;                                                                                               // 2859
		renderAgenda(weekends ? 7 : 5);                                                                                  // 2860
	}                                                                                                                 // 2861
	                                                                                                                  // 2862
                                                                                                                   // 2863
}                                                                                                                  // 2864
                                                                                                                   // 2865
;;                                                                                                                 // 2866
                                                                                                                   // 2867
fcViews.agendaDay = AgendaDayView;                                                                                 // 2868
                                                                                                                   // 2869
function AgendaDayView(element, calendar) {                                                                        // 2870
	var t = this;                                                                                                     // 2871
	                                                                                                                  // 2872
	                                                                                                                  // 2873
	// exports                                                                                                        // 2874
	t.render = render;                                                                                                // 2875
	                                                                                                                  // 2876
	                                                                                                                  // 2877
	// imports                                                                                                        // 2878
	AgendaView.call(t, element, calendar, 'agendaDay');                                                               // 2879
	var opt = t.opt;                                                                                                  // 2880
	var renderAgenda = t.renderAgenda;                                                                                // 2881
	var formatDate = calendar.formatDate;                                                                             // 2882
	                                                                                                                  // 2883
	                                                                                                                  // 2884
	                                                                                                                  // 2885
	function render(date, delta) {                                                                                    // 2886
		if (delta) {                                                                                                     // 2887
			addDays(date, delta);                                                                                           // 2888
			if (!opt('weekends')) {                                                                                         // 2889
				skipWeekend(date, delta < 0 ? -1 : 1);                                                                         // 2890
			}                                                                                                               // 2891
		}                                                                                                                // 2892
		var start = cloneDate(date, true);                                                                               // 2893
		var end = addDays(cloneDate(start), 1);                                                                          // 2894
		t.title = formatDate(date, opt('titleFormat'));                                                                  // 2895
		t.start = t.visStart = start;                                                                                    // 2896
		t.end = t.visEnd = end;                                                                                          // 2897
		renderAgenda(1);                                                                                                 // 2898
	}                                                                                                                 // 2899
	                                                                                                                  // 2900
                                                                                                                   // 2901
}                                                                                                                  // 2902
                                                                                                                   // 2903
;;                                                                                                                 // 2904
                                                                                                                   // 2905
setDefaults({                                                                                                      // 2906
	allDaySlot: true,                                                                                                 // 2907
	allDayText: 'all-day',                                                                                            // 2908
	firstHour: 6,                                                                                                     // 2909
	slotMinutes: 30,                                                                                                  // 2910
	defaultEventMinutes: 120,                                                                                         // 2911
	axisFormat: 'h(:mm)tt',                                                                                           // 2912
	timeFormat: {                                                                                                     // 2913
		agenda: 'h:mm{ - h:mm}'                                                                                          // 2914
	},                                                                                                                // 2915
	dragOpacity: {                                                                                                    // 2916
		agenda: .5                                                                                                       // 2917
	},                                                                                                                // 2918
	minTime: 0,                                                                                                       // 2919
	maxTime: 24                                                                                                       // 2920
});                                                                                                                // 2921
                                                                                                                   // 2922
                                                                                                                   // 2923
// TODO: make it work in quirks mode (event corners, all-day height)                                               // 2924
// TODO: test liquid width, especially in IE6                                                                      // 2925
                                                                                                                   // 2926
                                                                                                                   // 2927
function AgendaView(element, calendar, viewName) {                                                                 // 2928
	var t = this;                                                                                                     // 2929
	                                                                                                                  // 2930
	                                                                                                                  // 2931
	// exports                                                                                                        // 2932
	t.renderAgenda = renderAgenda;                                                                                    // 2933
	t.setWidth = setWidth;                                                                                            // 2934
	t.setHeight = setHeight;                                                                                          // 2935
	t.beforeHide = beforeHide;                                                                                        // 2936
	t.afterShow = afterShow;                                                                                          // 2937
	t.defaultEventEnd = defaultEventEnd;                                                                              // 2938
	t.timePosition = timePosition;                                                                                    // 2939
	t.dayOfWeekCol = dayOfWeekCol;                                                                                    // 2940
	t.dateCell = dateCell;                                                                                            // 2941
	t.cellDate = cellDate;                                                                                            // 2942
	t.cellIsAllDay = cellIsAllDay;                                                                                    // 2943
	t.allDayRow = getAllDayRow;                                                                                       // 2944
	t.allDayBounds = allDayBounds;                                                                                    // 2945
	t.getHoverListener = function() { return hoverListener };                                                         // 2946
	t.colContentLeft = colContentLeft;                                                                                // 2947
	t.colContentRight = colContentRight;                                                                              // 2948
	t.getDaySegmentContainer = function() { return daySegmentContainer };                                             // 2949
	t.getSlotSegmentContainer = function() { return slotSegmentContainer };                                           // 2950
	t.getMinMinute = function() { return minMinute };                                                                 // 2951
	t.getMaxMinute = function() { return maxMinute };                                                                 // 2952
	t.getBodyContent = function() { return slotContent }; // !!??                                                     // 2953
	t.getRowCnt = function() { return 1 };                                                                            // 2954
	t.getColCnt = function() { return colCnt };                                                                       // 2955
	t.getColWidth = function() { return colWidth };                                                                   // 2956
	t.getSnapHeight = function() { return snapHeight };                                                               // 2957
	t.getSnapMinutes = function() { return snapMinutes };                                                             // 2958
	t.defaultSelectionEnd = defaultSelectionEnd;                                                                      // 2959
	t.renderDayOverlay = renderDayOverlay;                                                                            // 2960
	t.renderSelection = renderSelection;                                                                              // 2961
	t.clearSelection = clearSelection;                                                                                // 2962
	t.reportDayClick = reportDayClick; // selection mousedown hack                                                    // 2963
	t.dragStart = dragStart;                                                                                          // 2964
	t.dragStop = dragStop;                                                                                            // 2965
	                                                                                                                  // 2966
	                                                                                                                  // 2967
	// imports                                                                                                        // 2968
	View.call(t, element, calendar, viewName);                                                                        // 2969
	OverlayManager.call(t);                                                                                           // 2970
	SelectionManager.call(t);                                                                                         // 2971
	AgendaEventRenderer.call(t);                                                                                      // 2972
	var opt = t.opt;                                                                                                  // 2973
	var trigger = t.trigger;                                                                                          // 2974
	var clearEvents = t.clearEvents;                                                                                  // 2975
	var renderOverlay = t.renderOverlay;                                                                              // 2976
	var clearOverlays = t.clearOverlays;                                                                              // 2977
	var reportSelection = t.reportSelection;                                                                          // 2978
	var unselect = t.unselect;                                                                                        // 2979
	var daySelectionMousedown = t.daySelectionMousedown;                                                              // 2980
	var slotSegHtml = t.slotSegHtml;                                                                                  // 2981
	var formatDate = calendar.formatDate;                                                                             // 2982
	                                                                                                                  // 2983
	                                                                                                                  // 2984
	// locals                                                                                                         // 2985
	                                                                                                                  // 2986
	var dayTable;                                                                                                     // 2987
	var dayHead;                                                                                                      // 2988
	var dayHeadCells;                                                                                                 // 2989
	var dayBody;                                                                                                      // 2990
	var dayBodyCells;                                                                                                 // 2991
	var dayBodyCellInners;                                                                                            // 2992
	var dayBodyFirstCell;                                                                                             // 2993
	var dayBodyFirstCellStretcher;                                                                                    // 2994
	var slotLayer;                                                                                                    // 2995
	var daySegmentContainer;                                                                                          // 2996
	var allDayTable;                                                                                                  // 2997
	var allDayRow;                                                                                                    // 2998
	var slotScroller;                                                                                                 // 2999
	var slotContent;                                                                                                  // 3000
	var slotSegmentContainer;                                                                                         // 3001
	var slotTable;                                                                                                    // 3002
	var slotTableFirstInner;                                                                                          // 3003
	var axisFirstCells;                                                                                               // 3004
	var gutterCells;                                                                                                  // 3005
	var selectionHelper;                                                                                              // 3006
	                                                                                                                  // 3007
	var viewWidth;                                                                                                    // 3008
	var viewHeight;                                                                                                   // 3009
	var axisWidth;                                                                                                    // 3010
	var colWidth;                                                                                                     // 3011
	var gutterWidth;                                                                                                  // 3012
	var slotHeight; // TODO: what if slotHeight changes? (see issue 650)                                              // 3013
                                                                                                                   // 3014
	var snapMinutes;                                                                                                  // 3015
	var snapRatio; // ratio of number of "selection" slots to normal slots. (ex: 1, 2, 4)                             // 3016
	var snapHeight; // holds the pixel hight of a "selection" slot                                                    // 3017
	                                                                                                                  // 3018
	var colCnt;                                                                                                       // 3019
	var slotCnt;                                                                                                      // 3020
	var coordinateGrid;                                                                                               // 3021
	var hoverListener;                                                                                                // 3022
	var colContentPositions;                                                                                          // 3023
	var slotTopCache = {};                                                                                            // 3024
	var savedScrollTop;                                                                                               // 3025
	                                                                                                                  // 3026
	var tm;                                                                                                           // 3027
	var firstDay;                                                                                                     // 3028
	var nwe;            // no weekends (int)                                                                          // 3029
	var rtl, dis, dit;  // day index sign / translate                                                                 // 3030
	var minMinute, maxMinute;                                                                                         // 3031
	var colFormat;                                                                                                    // 3032
	var showWeekNumbers;                                                                                              // 3033
	var weekNumberTitle;                                                                                              // 3034
	var weekNumberFormat;                                                                                             // 3035
	                                                                                                                  // 3036
                                                                                                                   // 3037
	                                                                                                                  // 3038
	/* Rendering                                                                                                      // 3039
	-----------------------------------------------------------------------------*/                                   // 3040
	                                                                                                                  // 3041
	                                                                                                                  // 3042
	disableTextSelection(element.addClass('fc-agenda'));                                                              // 3043
	                                                                                                                  // 3044
	                                                                                                                  // 3045
	function renderAgenda(c) {                                                                                        // 3046
		colCnt = c;                                                                                                      // 3047
		updateOptions();                                                                                                 // 3048
		if (!dayTable) {                                                                                                 // 3049
			buildSkeleton();                                                                                                // 3050
		}else{                                                                                                           // 3051
			clearEvents();                                                                                                  // 3052
		}                                                                                                                // 3053
		updateCells();                                                                                                   // 3054
	}                                                                                                                 // 3055
	                                                                                                                  // 3056
	                                                                                                                  // 3057
	                                                                                                                  // 3058
	function updateOptions() {                                                                                        // 3059
		tm = opt('theme') ? 'ui' : 'fc';                                                                                 // 3060
		nwe = opt('weekends') ? 0 : 1;                                                                                   // 3061
		firstDay = opt('firstDay');                                                                                      // 3062
		if (rtl = opt('isRTL')) {                                                                                        // 3063
			dis = -1;                                                                                                       // 3064
			dit = colCnt - 1;                                                                                               // 3065
		}else{                                                                                                           // 3066
			dis = 1;                                                                                                        // 3067
			dit = 0;                                                                                                        // 3068
		}                                                                                                                // 3069
		minMinute = parseTime(opt('minTime'));                                                                           // 3070
		maxMinute = parseTime(opt('maxTime'));                                                                           // 3071
		colFormat = opt('columnFormat');                                                                                 // 3072
                                                                                                                   // 3073
		// week # options. (TODO: bad, logic also in other views)                                                        // 3074
		showWeekNumbers = opt('weekNumbers');                                                                            // 3075
		weekNumberTitle = opt('weekNumberTitle');                                                                        // 3076
		if (opt('weekNumberCalculation') != 'iso') {                                                                     // 3077
			weekNumberFormat = "w";                                                                                         // 3078
		}                                                                                                                // 3079
		else {                                                                                                           // 3080
			weekNumberFormat = "W";                                                                                         // 3081
		}                                                                                                                // 3082
                                                                                                                   // 3083
		snapMinutes = opt('snapMinutes') || opt('slotMinutes');                                                          // 3084
	}                                                                                                                 // 3085
	                                                                                                                  // 3086
	                                                                                                                  // 3087
	                                                                                                                  // 3088
	function buildSkeleton() {                                                                                        // 3089
		var headerClass = tm + "-widget-header";                                                                         // 3090
		var contentClass = tm + "-widget-content";                                                                       // 3091
		var s;                                                                                                           // 3092
		var i;                                                                                                           // 3093
		var d;                                                                                                           // 3094
		var maxd;                                                                                                        // 3095
		var minutes;                                                                                                     // 3096
		var slotNormal = opt('slotMinutes') % 15 == 0;                                                                   // 3097
		                                                                                                                 // 3098
		s =                                                                                                              // 3099
			"<table style='width:100%' class='fc-agenda-days fc-border-separate' cellspacing='0'>" +                        // 3100
			"<thead>" +                                                                                                     // 3101
			"<tr>";                                                                                                         // 3102
                                                                                                                   // 3103
		if (showWeekNumbers) {                                                                                           // 3104
			s += "<th class='fc-agenda-axis fc-week-number " + headerClass + "'/>";                                         // 3105
		}                                                                                                                // 3106
		else {                                                                                                           // 3107
			s += "<th class='fc-agenda-axis " + headerClass + "'>&nbsp;</th>";                                              // 3108
		}                                                                                                                // 3109
                                                                                                                   // 3110
		for (i=0; i<colCnt; i++) {                                                                                       // 3111
			s +=                                                                                                            // 3112
				"<th class='fc- fc-col" + i + ' ' + headerClass + "'/>"; // fc- needed for setDayID                            // 3113
		}                                                                                                                // 3114
		s +=                                                                                                             // 3115
			"<th class='fc-agenda-gutter " + headerClass + "'>&nbsp;</th>" +                                                // 3116
			"</tr>" +                                                                                                       // 3117
			"</thead>" +                                                                                                    // 3118
			"<tbody>" +                                                                                                     // 3119
			"<tr>" +                                                                                                        // 3120
			"<th class='fc-agenda-axis " + headerClass + "'>&nbsp;</th>";                                                   // 3121
		for (i=0; i<colCnt; i++) {                                                                                       // 3122
			s +=                                                                                                            // 3123
				"<td class='fc- fc-col" + i + ' ' + contentClass + "'>" + // fc- needed for setDayID                           // 3124
				"<div>" +                                                                                                      // 3125
				"<div class='fc-day-content'>" +                                                                               // 3126
				"<div style='position:relative'>&nbsp;</div>" +                                                                // 3127
				"</div>" +                                                                                                     // 3128
				"</div>" +                                                                                                     // 3129
				"</td>";                                                                                                       // 3130
		}                                                                                                                // 3131
		s +=                                                                                                             // 3132
			"<td class='fc-agenda-gutter " + contentClass + "'>&nbsp;</td>" +                                               // 3133
			"</tr>" +                                                                                                       // 3134
			"</tbody>" +                                                                                                    // 3135
			"</table>";                                                                                                     // 3136
		dayTable = $(s).appendTo(element);                                                                               // 3137
		dayHead = dayTable.find('thead');                                                                                // 3138
		dayHeadCells = dayHead.find('th').slice(1, -1);                                                                  // 3139
		dayBody = dayTable.find('tbody');                                                                                // 3140
		dayBodyCells = dayBody.find('td').slice(0, -1);                                                                  // 3141
		dayBodyCellInners = dayBodyCells.find('div.fc-day-content div');                                                 // 3142
		dayBodyFirstCell = dayBodyCells.eq(0);                                                                           // 3143
		dayBodyFirstCellStretcher = dayBodyFirstCell.find('> div');                                                      // 3144
		                                                                                                                 // 3145
		markFirstLast(dayHead.add(dayHead.find('tr')));                                                                  // 3146
		markFirstLast(dayBody.add(dayBody.find('tr')));                                                                  // 3147
		                                                                                                                 // 3148
		axisFirstCells = dayHead.find('th:first');                                                                       // 3149
		gutterCells = dayTable.find('.fc-agenda-gutter');                                                                // 3150
		                                                                                                                 // 3151
		slotLayer =                                                                                                      // 3152
			$("<div style='position:absolute;z-index:2;left:0;width:100%'/>")                                               // 3153
				.appendTo(element);                                                                                            // 3154
				                                                                                                               // 3155
		if (opt('allDaySlot')) {                                                                                         // 3156
		                                                                                                                 // 3157
			daySegmentContainer =                                                                                           // 3158
				$("<div style='position:absolute;z-index:8;top:0;left:0'/>")                                                   // 3159
					.appendTo(slotLayer);                                                                                         // 3160
		                                                                                                                 // 3161
			s =                                                                                                             // 3162
				"<table style='width:100%' class='fc-agenda-allday' cellspacing='0'>" +                                        // 3163
				"<tr>" +                                                                                                       // 3164
				"<th class='" + headerClass + " fc-agenda-axis'>" + opt('allDayText') + "</th>" +                              // 3165
				"<td>" +                                                                                                       // 3166
				"<div class='fc-day-content'><div style='position:relative'/></div>" +                                         // 3167
				"</td>" +                                                                                                      // 3168
				"<th class='" + headerClass + " fc-agenda-gutter'>&nbsp;</th>" +                                               // 3169
				"</tr>" +                                                                                                      // 3170
				"</table>";                                                                                                    // 3171
			allDayTable = $(s).appendTo(slotLayer);                                                                         // 3172
			allDayRow = allDayTable.find('tr');                                                                             // 3173
			                                                                                                                // 3174
			dayBind(allDayRow.find('td'));                                                                                  // 3175
			                                                                                                                // 3176
			axisFirstCells = axisFirstCells.add(allDayTable.find('th:first'));                                              // 3177
			gutterCells = gutterCells.add(allDayTable.find('th.fc-agenda-gutter'));                                         // 3178
			                                                                                                                // 3179
			slotLayer.append(                                                                                               // 3180
				"<div class='fc-agenda-divider " + headerClass + "'>" +                                                        // 3181
				"<div class='fc-agenda-divider-inner'/>" +                                                                     // 3182
				"</div>"                                                                                                       // 3183
			);                                                                                                              // 3184
			                                                                                                                // 3185
		}else{                                                                                                           // 3186
		                                                                                                                 // 3187
			daySegmentContainer = $([]); // in jQuery 1.4, we can just do $()                                               // 3188
		                                                                                                                 // 3189
		}                                                                                                                // 3190
		                                                                                                                 // 3191
		slotScroller =                                                                                                   // 3192
			$("<div style='position:absolute;width:100%;overflow-x:hidden;overflow-y:auto'/>")                              // 3193
				.appendTo(slotLayer);                                                                                          // 3194
				                                                                                                               // 3195
		slotContent =                                                                                                    // 3196
			$("<div style='position:relative;width:100%;overflow:hidden'/>")                                                // 3197
				.appendTo(slotScroller);                                                                                       // 3198
				                                                                                                               // 3199
		slotSegmentContainer =                                                                                           // 3200
			$("<div style='position:absolute;z-index:8;top:0;left:0'/>")                                                    // 3201
				.appendTo(slotContent);                                                                                        // 3202
		                                                                                                                 // 3203
		s =                                                                                                              // 3204
			"<table class='fc-agenda-slots' style='width:100%' cellspacing='0'>" +                                          // 3205
			"<tbody>";                                                                                                      // 3206
		d = zeroDate();                                                                                                  // 3207
		maxd = addMinutes(cloneDate(d), maxMinute);                                                                      // 3208
		addMinutes(d, minMinute);                                                                                        // 3209
		slotCnt = 0;                                                                                                     // 3210
		for (i=0; d < maxd; i++) {                                                                                       // 3211
			minutes = d.getMinutes();                                                                                       // 3212
			s +=                                                                                                            // 3213
				"<tr class='fc-slot" + i + ' ' + (!minutes ? '' : 'fc-minor') + "'>" +                                         // 3214
				"<th class='fc-agenda-axis " + headerClass + "'>" +                                                            // 3215
				((!slotNormal || !minutes) ? formatDate(d, opt('axisFormat')) : '&nbsp;') +                                    // 3216
				"</th>" +                                                                                                      // 3217
				"<td class='" + contentClass + "'>" +                                                                          // 3218
				"<div style='position:relative'>&nbsp;</div>" +                                                                // 3219
				"</td>" +                                                                                                      // 3220
				"</tr>";                                                                                                       // 3221
			addMinutes(d, opt('slotMinutes'));                                                                              // 3222
			slotCnt++;                                                                                                      // 3223
		}                                                                                                                // 3224
		s +=                                                                                                             // 3225
			"</tbody>" +                                                                                                    // 3226
			"</table>";                                                                                                     // 3227
		slotTable = $(s).appendTo(slotContent);                                                                          // 3228
		slotTableFirstInner = slotTable.find('div:first');                                                               // 3229
		                                                                                                                 // 3230
		slotBind(slotTable.find('td'));                                                                                  // 3231
		                                                                                                                 // 3232
		axisFirstCells = axisFirstCells.add(slotTable.find('th:first'));                                                 // 3233
	}                                                                                                                 // 3234
	                                                                                                                  // 3235
	                                                                                                                  // 3236
	                                                                                                                  // 3237
	function updateCells() {                                                                                          // 3238
		var i;                                                                                                           // 3239
		var headCell;                                                                                                    // 3240
		var bodyCell;                                                                                                    // 3241
		var date;                                                                                                        // 3242
		var today = clearTime(new Date());                                                                               // 3243
                                                                                                                   // 3244
		if (showWeekNumbers) {                                                                                           // 3245
			var weekText = formatDate(colDate(0), weekNumberFormat);                                                        // 3246
			if (rtl) {                                                                                                      // 3247
				weekText = weekText + weekNumberTitle;                                                                         // 3248
			}                                                                                                               // 3249
			else {                                                                                                          // 3250
				weekText = weekNumberTitle + weekText;                                                                         // 3251
			}                                                                                                               // 3252
			dayHead.find('.fc-week-number').text(weekText);                                                                 // 3253
		}                                                                                                                // 3254
                                                                                                                   // 3255
		for (i=0; i<colCnt; i++) {                                                                                       // 3256
			date = colDate(i);                                                                                              // 3257
			headCell = dayHeadCells.eq(i);                                                                                  // 3258
			headCell.html(formatDate(date, colFormat));                                                                     // 3259
			bodyCell = dayBodyCells.eq(i);                                                                                  // 3260
			if (+date == +today) {                                                                                          // 3261
				bodyCell.addClass(tm + '-state-highlight fc-today');                                                           // 3262
			}else{                                                                                                          // 3263
				bodyCell.removeClass(tm + '-state-highlight fc-today');                                                        // 3264
			}                                                                                                               // 3265
			setDayID(headCell.add(bodyCell), date);                                                                         // 3266
		}                                                                                                                // 3267
	}                                                                                                                 // 3268
	                                                                                                                  // 3269
	                                                                                                                  // 3270
	                                                                                                                  // 3271
	function setHeight(height, dateChanged) {                                                                         // 3272
		if (height === undefined) {                                                                                      // 3273
			height = viewHeight;                                                                                            // 3274
		}                                                                                                                // 3275
		viewHeight = height;                                                                                             // 3276
		slotTopCache = {};                                                                                               // 3277
	                                                                                                                  // 3278
		var headHeight = dayBody.position().top;                                                                         // 3279
		var allDayHeight = slotScroller.position().top; // including divider                                             // 3280
		var bodyHeight = Math.min( // total body height, including borders                                               // 3281
			height - headHeight,   // when scrollbars                                                                       // 3282
			slotTable.height() + allDayHeight + 1 // when no scrollbars. +1 for bottom border                               // 3283
		);                                                                                                               // 3284
		                                                                                                                 // 3285
		dayBodyFirstCellStretcher                                                                                        // 3286
			.height(bodyHeight - vsides(dayBodyFirstCell));                                                                 // 3287
		                                                                                                                 // 3288
		slotLayer.css('top', headHeight);                                                                                // 3289
		                                                                                                                 // 3290
		slotScroller.height(bodyHeight - allDayHeight - 1);                                                              // 3291
		                                                                                                                 // 3292
		slotHeight = slotTableFirstInner.height() + 1; // +1 for border                                                  // 3293
                                                                                                                   // 3294
		snapRatio = opt('slotMinutes') / snapMinutes;                                                                    // 3295
		snapHeight = slotHeight / snapRatio;                                                                             // 3296
		                                                                                                                 // 3297
		if (dateChanged) {                                                                                               // 3298
			resetScroll();                                                                                                  // 3299
		}                                                                                                                // 3300
	}                                                                                                                 // 3301
	                                                                                                                  // 3302
	                                                                                                                  // 3303
	                                                                                                                  // 3304
	function setWidth(width) {                                                                                        // 3305
		viewWidth = width;                                                                                               // 3306
		colContentPositions.clear();                                                                                     // 3307
		                                                                                                                 // 3308
		axisWidth = 0;                                                                                                   // 3309
		setOuterWidth(                                                                                                   // 3310
			axisFirstCells                                                                                                  // 3311
				.width('')                                                                                                     // 3312
				.each(function(i, _cell) {                                                                                     // 3313
					axisWidth = Math.max(axisWidth, $(_cell).outerWidth());                                                       // 3314
				}),                                                                                                            // 3315
			axisWidth                                                                                                       // 3316
		);                                                                                                               // 3317
		                                                                                                                 // 3318
		var slotTableWidth = slotScroller[0].clientWidth; // needs to be done after axisWidth (for IE7)                  // 3319
		//slotTable.width(slotTableWidth);                                                                               // 3320
		                                                                                                                 // 3321
		gutterWidth = slotScroller.width() - slotTableWidth;                                                             // 3322
		if (gutterWidth) {                                                                                               // 3323
			setOuterWidth(gutterCells, gutterWidth);                                                                        // 3324
			gutterCells                                                                                                     // 3325
				.show()                                                                                                        // 3326
				.prev()                                                                                                        // 3327
				.removeClass('fc-last');                                                                                       // 3328
		}else{                                                                                                           // 3329
			gutterCells                                                                                                     // 3330
				.hide()                                                                                                        // 3331
				.prev()                                                                                                        // 3332
				.addClass('fc-last');                                                                                          // 3333
		}                                                                                                                // 3334
		                                                                                                                 // 3335
		colWidth = Math.floor((slotTableWidth - axisWidth) / colCnt);                                                    // 3336
		setOuterWidth(dayHeadCells.slice(0, -1), colWidth);                                                              // 3337
	}                                                                                                                 // 3338
	                                                                                                                  // 3339
                                                                                                                   // 3340
                                                                                                                   // 3341
	function resetScroll() {                                                                                          // 3342
		var d0 = zeroDate();                                                                                             // 3343
		var scrollDate = cloneDate(d0);                                                                                  // 3344
		scrollDate.setHours(opt('firstHour'));                                                                           // 3345
		var top = timePosition(d0, scrollDate) + 1; // +1 for the border                                                 // 3346
		function scroll() {                                                                                              // 3347
			slotScroller.scrollTop(top);                                                                                    // 3348
		}                                                                                                                // 3349
		scroll();                                                                                                        // 3350
		setTimeout(scroll, 0); // overrides any previous scroll state made by the browser                                // 3351
	}                                                                                                                 // 3352
	                                                                                                                  // 3353
	                                                                                                                  // 3354
	function beforeHide() {                                                                                           // 3355
		savedScrollTop = slotScroller.scrollTop();                                                                       // 3356
	}                                                                                                                 // 3357
	                                                                                                                  // 3358
	                                                                                                                  // 3359
	function afterShow() {                                                                                            // 3360
		slotScroller.scrollTop(savedScrollTop);                                                                          // 3361
	}                                                                                                                 // 3362
	                                                                                                                  // 3363
	                                                                                                                  // 3364
	                                                                                                                  // 3365
	/* Slot/Day clicking and binding                                                                                  // 3366
	-----------------------------------------------------------------------*/                                         // 3367
	                                                                                                                  // 3368
                                                                                                                   // 3369
	function dayBind(cells) {                                                                                         // 3370
		cells.click(slotClick)                                                                                           // 3371
			.mousedown(daySelectionMousedown);                                                                              // 3372
	}                                                                                                                 // 3373
                                                                                                                   // 3374
                                                                                                                   // 3375
	function slotBind(cells) {                                                                                        // 3376
		cells.click(slotClick)                                                                                           // 3377
			.mousedown(slotSelectionMousedown);                                                                             // 3378
	}                                                                                                                 // 3379
	                                                                                                                  // 3380
	                                                                                                                  // 3381
	function slotClick(ev) {                                                                                          // 3382
		if (!opt('selectable')) { // if selectable, SelectionManager will worry about dayClick                           // 3383
			var col = Math.min(colCnt-1, Math.floor((ev.pageX - dayTable.offset().left - axisWidth) / colWidth));           // 3384
			var date = colDate(col);                                                                                        // 3385
			var rowMatch = this.parentNode.className.match(/fc-slot(\d+)/); // TODO: maybe use data                         // 3386
			if (rowMatch) {                                                                                                 // 3387
				var mins = parseInt(rowMatch[1]) * opt('slotMinutes');                                                         // 3388
				var hours = Math.floor(mins/60);                                                                               // 3389
				date.setHours(hours);                                                                                          // 3390
				date.setMinutes(mins%60 + minMinute);                                                                          // 3391
				trigger('dayClick', dayBodyCells[col], date, false, ev);                                                       // 3392
			}else{                                                                                                          // 3393
				trigger('dayClick', dayBodyCells[col], date, true, ev);                                                        // 3394
			}                                                                                                               // 3395
		}                                                                                                                // 3396
	}                                                                                                                 // 3397
	                                                                                                                  // 3398
	                                                                                                                  // 3399
	                                                                                                                  // 3400
	/* Semi-transparent Overlay Helpers                                                                               // 3401
	-----------------------------------------------------*/                                                           // 3402
	                                                                                                                  // 3403
                                                                                                                   // 3404
	function renderDayOverlay(startDate, endDate, refreshCoordinateGrid) { // endDate is exclusive                    // 3405
		if (refreshCoordinateGrid) {                                                                                     // 3406
			coordinateGrid.build();                                                                                         // 3407
		}                                                                                                                // 3408
		var visStart = cloneDate(t.visStart);                                                                            // 3409
		var startCol, endCol;                                                                                            // 3410
		if (rtl) {                                                                                                       // 3411
			startCol = dayDiff(endDate, visStart)*dis+dit+1;                                                                // 3412
			endCol = dayDiff(startDate, visStart)*dis+dit+1;                                                                // 3413
		}else{                                                                                                           // 3414
			startCol = dayDiff(startDate, visStart);                                                                        // 3415
			endCol = dayDiff(endDate, visStart);                                                                            // 3416
		}                                                                                                                // 3417
		startCol = Math.max(0, startCol);                                                                                // 3418
		endCol = Math.min(colCnt, endCol);                                                                               // 3419
		if (startCol < endCol) {                                                                                         // 3420
			dayBind(                                                                                                        // 3421
				renderCellOverlay(0, startCol, 0, endCol-1)                                                                    // 3422
			);                                                                                                              // 3423
		}                                                                                                                // 3424
	}                                                                                                                 // 3425
	                                                                                                                  // 3426
	                                                                                                                  // 3427
	function renderCellOverlay(row0, col0, row1, col1) { // only for all-day?                                         // 3428
		var rect = coordinateGrid.rect(row0, col0, row1, col1, slotLayer);                                               // 3429
		return renderOverlay(rect, slotLayer);                                                                           // 3430
	}                                                                                                                 // 3431
	                                                                                                                  // 3432
                                                                                                                   // 3433
	function renderSlotOverlay(overlayStart, overlayEnd) {                                                            // 3434
		var dayStart = cloneDate(t.visStart);                                                                            // 3435
		var dayEnd = addDays(cloneDate(dayStart), 1);                                                                    // 3436
		for (var i=0; i<colCnt; i++) {                                                                                   // 3437
			var stretchStart = new Date(Math.max(dayStart, overlayStart));                                                  // 3438
			var stretchEnd = new Date(Math.min(dayEnd, overlayEnd));                                                        // 3439
			if (stretchStart < stretchEnd) {                                                                                // 3440
				var col = i*dis+dit;                                                                                           // 3441
				var rect = coordinateGrid.rect(0, col, 0, col, slotContent); // only use it for horizontal coords              // 3442
				var top = timePosition(dayStart, stretchStart);                                                                // 3443
				var bottom = timePosition(dayStart, stretchEnd);                                                               // 3444
				rect.top = top;                                                                                                // 3445
				rect.height = bottom - top;                                                                                    // 3446
				slotBind(                                                                                                      // 3447
					renderOverlay(rect, slotContent)                                                                              // 3448
				);                                                                                                             // 3449
			}                                                                                                               // 3450
			addDays(dayStart, 1);                                                                                           // 3451
			addDays(dayEnd, 1);                                                                                             // 3452
		}                                                                                                                // 3453
	}                                                                                                                 // 3454
	                                                                                                                  // 3455
	                                                                                                                  // 3456
	                                                                                                                  // 3457
	/* Coordinate Utilities                                                                                           // 3458
	-----------------------------------------------------------------------------*/                                   // 3459
	                                                                                                                  // 3460
	                                                                                                                  // 3461
	coordinateGrid = new CoordinateGrid(function(rows, cols) {                                                        // 3462
		var e, n, p;                                                                                                     // 3463
		dayHeadCells.each(function(i, _e) {                                                                              // 3464
			e = $(_e);                                                                                                      // 3465
			n = e.offset().left;                                                                                            // 3466
			if (i) {                                                                                                        // 3467
				p[1] = n;                                                                                                      // 3468
			}                                                                                                               // 3469
			p = [n];                                                                                                        // 3470
			cols[i] = p;                                                                                                    // 3471
		});                                                                                                              // 3472
		p[1] = n + e.outerWidth();                                                                                       // 3473
		if (opt('allDaySlot')) {                                                                                         // 3474
			e = allDayRow;                                                                                                  // 3475
			n = e.offset().top;                                                                                             // 3476
			rows[0] = [n, n+e.outerHeight()];                                                                               // 3477
		}                                                                                                                // 3478
		var slotTableTop = slotContent.offset().top;                                                                     // 3479
		var slotScrollerTop = slotScroller.offset().top;                                                                 // 3480
		var slotScrollerBottom = slotScrollerTop + slotScroller.outerHeight();                                           // 3481
		function constrain(n) {                                                                                          // 3482
			return Math.max(slotScrollerTop, Math.min(slotScrollerBottom, n));                                              // 3483
		}                                                                                                                // 3484
		for (var i=0; i<slotCnt*snapRatio; i++) { // adapt slot count to increased/decreased selection slot count        // 3485
			rows.push([                                                                                                     // 3486
				constrain(slotTableTop + snapHeight*i),                                                                        // 3487
				constrain(slotTableTop + snapHeight*(i+1))                                                                     // 3488
			]);                                                                                                             // 3489
		}                                                                                                                // 3490
	});                                                                                                               // 3491
	                                                                                                                  // 3492
	                                                                                                                  // 3493
	hoverListener = new HoverListener(coordinateGrid);                                                                // 3494
	                                                                                                                  // 3495
	                                                                                                                  // 3496
	colContentPositions = new HorizontalPositionCache(function(col) {                                                 // 3497
		return dayBodyCellInners.eq(col);                                                                                // 3498
	});                                                                                                               // 3499
	                                                                                                                  // 3500
	                                                                                                                  // 3501
	function colContentLeft(col) {                                                                                    // 3502
		return colContentPositions.left(col);                                                                            // 3503
	}                                                                                                                 // 3504
	                                                                                                                  // 3505
	                                                                                                                  // 3506
	function colContentRight(col) {                                                                                   // 3507
		return colContentPositions.right(col);                                                                           // 3508
	}                                                                                                                 // 3509
	                                                                                                                  // 3510
	                                                                                                                  // 3511
	                                                                                                                  // 3512
	                                                                                                                  // 3513
	function dateCell(date) { // "cell" terminology is now confusing                                                  // 3514
		return {                                                                                                         // 3515
			row: Math.floor(dayDiff(date, t.visStart) / 7),                                                                 // 3516
			col: dayOfWeekCol(date.getDay())                                                                                // 3517
		};                                                                                                               // 3518
	}                                                                                                                 // 3519
	                                                                                                                  // 3520
	                                                                                                                  // 3521
	function cellDate(cell) {                                                                                         // 3522
		var d = colDate(cell.col);                                                                                       // 3523
		var slotIndex = cell.row;                                                                                        // 3524
		if (opt('allDaySlot')) {                                                                                         // 3525
			slotIndex--;                                                                                                    // 3526
		}                                                                                                                // 3527
		if (slotIndex >= 0) {                                                                                            // 3528
			addMinutes(d, minMinute + slotIndex * snapMinutes);                                                             // 3529
		}                                                                                                                // 3530
		return d;                                                                                                        // 3531
	}                                                                                                                 // 3532
	                                                                                                                  // 3533
	                                                                                                                  // 3534
	function colDate(col) { // returns dates with 00:00:00                                                            // 3535
		return addDays(cloneDate(t.visStart), col*dis+dit);                                                              // 3536
	}                                                                                                                 // 3537
	                                                                                                                  // 3538
	                                                                                                                  // 3539
	function cellIsAllDay(cell) {                                                                                     // 3540
		return opt('allDaySlot') && !cell.row;                                                                           // 3541
	}                                                                                                                 // 3542
	                                                                                                                  // 3543
	                                                                                                                  // 3544
	function dayOfWeekCol(dayOfWeek) {                                                                                // 3545
		return ((dayOfWeek - Math.max(firstDay, nwe) + colCnt) % colCnt)*dis+dit;                                        // 3546
	}                                                                                                                 // 3547
	                                                                                                                  // 3548
	                                                                                                                  // 3549
	                                                                                                                  // 3550
	                                                                                                                  // 3551
	// get the Y coordinate of the given time on the given day (both Date objects)                                    // 3552
	function timePosition(day, time) { // both date objects. day holds 00:00 of current day                           // 3553
		day = cloneDate(day, true);                                                                                      // 3554
		if (time < addMinutes(cloneDate(day), minMinute)) {                                                              // 3555
			return 0;                                                                                                       // 3556
		}                                                                                                                // 3557
		if (time >= addMinutes(cloneDate(day), maxMinute)) {                                                             // 3558
			return slotTable.height();                                                                                      // 3559
		}                                                                                                                // 3560
		var slotMinutes = opt('slotMinutes'),                                                                            // 3561
			minutes = time.getHours()*60 + time.getMinutes() - minMinute,                                                   // 3562
			slotI = Math.floor(minutes / slotMinutes),                                                                      // 3563
			slotTop = slotTopCache[slotI];                                                                                  // 3564
		if (slotTop === undefined) {                                                                                     // 3565
			slotTop = slotTopCache[slotI] = slotTable.find('tr:eq(' + slotI + ') td div')[0].offsetTop; //.position().top; // need this optimization???
		}                                                                                                                // 3567
		return Math.max(0, Math.round(                                                                                   // 3568
			slotTop - 1 + slotHeight * ((minutes % slotMinutes) / slotMinutes)                                              // 3569
		));                                                                                                              // 3570
	}                                                                                                                 // 3571
	                                                                                                                  // 3572
	                                                                                                                  // 3573
	function allDayBounds() {                                                                                         // 3574
		return {                                                                                                         // 3575
			left: axisWidth,                                                                                                // 3576
			right: viewWidth - gutterWidth                                                                                  // 3577
		}                                                                                                                // 3578
	}                                                                                                                 // 3579
	                                                                                                                  // 3580
	                                                                                                                  // 3581
	function getAllDayRow(index) {                                                                                    // 3582
		return allDayRow;                                                                                                // 3583
	}                                                                                                                 // 3584
	                                                                                                                  // 3585
	                                                                                                                  // 3586
	function defaultEventEnd(event) {                                                                                 // 3587
		var start = cloneDate(event.start);                                                                              // 3588
		if (event.allDay) {                                                                                              // 3589
			return start;                                                                                                   // 3590
		}                                                                                                                // 3591
		return addMinutes(start, opt('defaultEventMinutes'));                                                            // 3592
	}                                                                                                                 // 3593
	                                                                                                                  // 3594
	                                                                                                                  // 3595
	                                                                                                                  // 3596
	/* Selection                                                                                                      // 3597
	---------------------------------------------------------------------------------*/                               // 3598
	                                                                                                                  // 3599
	                                                                                                                  // 3600
	function defaultSelectionEnd(startDate, allDay) {                                                                 // 3601
		if (allDay) {                                                                                                    // 3602
			return cloneDate(startDate);                                                                                    // 3603
		}                                                                                                                // 3604
		return addMinutes(cloneDate(startDate), opt('slotMinutes'));                                                     // 3605
	}                                                                                                                 // 3606
	                                                                                                                  // 3607
	                                                                                                                  // 3608
	function renderSelection(startDate, endDate, allDay) { // only for all-day                                        // 3609
		if (allDay) {                                                                                                    // 3610
			if (opt('allDaySlot')) {                                                                                        // 3611
				renderDayOverlay(startDate, addDays(cloneDate(endDate), 1), true);                                             // 3612
			}                                                                                                               // 3613
		}else{                                                                                                           // 3614
			renderSlotSelection(startDate, endDate);                                                                        // 3615
		}                                                                                                                // 3616
	}                                                                                                                 // 3617
	                                                                                                                  // 3618
	                                                                                                                  // 3619
	function renderSlotSelection(startDate, endDate) {                                                                // 3620
		var helperOption = opt('selectHelper');                                                                          // 3621
		coordinateGrid.build();                                                                                          // 3622
		if (helperOption) {                                                                                              // 3623
			var col = dayDiff(startDate, t.visStart) * dis + dit;                                                           // 3624
			if (col >= 0 && col < colCnt) { // only works when times are on same day                                        // 3625
				var rect = coordinateGrid.rect(0, col, 0, col, slotContent); // only for horizontal coords                     // 3626
				var top = timePosition(startDate, startDate);                                                                  // 3627
				var bottom = timePosition(startDate, endDate);                                                                 // 3628
				if (bottom > top) { // protect against selections that are entirely before or after visible range              // 3629
					rect.top = top;                                                                                               // 3630
					rect.height = bottom - top;                                                                                   // 3631
					rect.left += 2;                                                                                               // 3632
					rect.width -= 5;                                                                                              // 3633
					if ($.isFunction(helperOption)) {                                                                             // 3634
						var helperRes = helperOption(startDate, endDate);                                                            // 3635
						if (helperRes) {                                                                                             // 3636
							rect.position = 'absolute';                                                                                 // 3637
							rect.zIndex = 8;                                                                                            // 3638
							selectionHelper = $(helperRes)                                                                              // 3639
								.css(rect)                                                                                                 // 3640
								.appendTo(slotContent);                                                                                    // 3641
						}                                                                                                            // 3642
					}else{                                                                                                        // 3643
						rect.isStart = true; // conside rect a "seg" now                                                             // 3644
						rect.isEnd = true;   //                                                                                      // 3645
						selectionHelper = $(slotSegHtml(                                                                             // 3646
							{                                                                                                           // 3647
								title: '',                                                                                                 // 3648
								start: startDate,                                                                                          // 3649
								end: endDate,                                                                                              // 3650
								className: ['fc-select-helper'],                                                                           // 3651
								editable: false                                                                                            // 3652
							},                                                                                                          // 3653
							rect                                                                                                        // 3654
						));                                                                                                          // 3655
						selectionHelper.css('opacity', opt('dragOpacity'));                                                          // 3656
					}                                                                                                             // 3657
					if (selectionHelper) {                                                                                        // 3658
						slotBind(selectionHelper);                                                                                   // 3659
						slotContent.append(selectionHelper);                                                                         // 3660
						setOuterWidth(selectionHelper, rect.width, true); // needs to be after appended                              // 3661
						setOuterHeight(selectionHelper, rect.height, true);                                                          // 3662
					}                                                                                                             // 3663
				}                                                                                                              // 3664
			}                                                                                                               // 3665
		}else{                                                                                                           // 3666
			renderSlotOverlay(startDate, endDate);                                                                          // 3667
		}                                                                                                                // 3668
	}                                                                                                                 // 3669
	                                                                                                                  // 3670
	                                                                                                                  // 3671
	function clearSelection() {                                                                                       // 3672
		clearOverlays();                                                                                                 // 3673
		if (selectionHelper) {                                                                                           // 3674
			selectionHelper.remove();                                                                                       // 3675
			selectionHelper = null;                                                                                         // 3676
		}                                                                                                                // 3677
	}                                                                                                                 // 3678
	                                                                                                                  // 3679
	                                                                                                                  // 3680
	function slotSelectionMousedown(ev) {                                                                             // 3681
		if (ev.which == 1 && opt('selectable')) { // ev.which==1 means left mouse button                                 // 3682
			unselect(ev);                                                                                                   // 3683
			var dates;                                                                                                      // 3684
			hoverListener.start(function(cell, origCell) {                                                                  // 3685
				clearSelection();                                                                                              // 3686
				if (cell && cell.col == origCell.col && !cellIsAllDay(cell)) {                                                 // 3687
					var d1 = cellDate(origCell);                                                                                  // 3688
					var d2 = cellDate(cell);                                                                                      // 3689
					dates = [                                                                                                     // 3690
						d1,                                                                                                          // 3691
						addMinutes(cloneDate(d1), snapMinutes), // calculate minutes depending on selection slot minutes             // 3692
						d2,                                                                                                          // 3693
						addMinutes(cloneDate(d2), snapMinutes)                                                                       // 3694
					].sort(cmp);                                                                                                  // 3695
					renderSlotSelection(dates[0], dates[3]);                                                                      // 3696
				}else{                                                                                                         // 3697
					dates = null;                                                                                                 // 3698
				}                                                                                                              // 3699
			}, ev);                                                                                                         // 3700
			$(document).one('mouseup', function(ev) {                                                                       // 3701
				hoverListener.stop();                                                                                          // 3702
				if (dates) {                                                                                                   // 3703
					if (+dates[0] == +dates[1]) {                                                                                 // 3704
						reportDayClick(dates[0], false, ev);                                                                         // 3705
					}                                                                                                             // 3706
					reportSelection(dates[0], dates[3], false, ev);                                                               // 3707
				}                                                                                                              // 3708
			});                                                                                                             // 3709
		}                                                                                                                // 3710
	}                                                                                                                 // 3711
	                                                                                                                  // 3712
	                                                                                                                  // 3713
	function reportDayClick(date, allDay, ev) {                                                                       // 3714
		trigger('dayClick', dayBodyCells[dayOfWeekCol(date.getDay())], date, allDay, ev);                                // 3715
	}                                                                                                                 // 3716
	                                                                                                                  // 3717
	                                                                                                                  // 3718
	                                                                                                                  // 3719
	/* External Dragging                                                                                              // 3720
	--------------------------------------------------------------------------------*/                                // 3721
	                                                                                                                  // 3722
	                                                                                                                  // 3723
	function dragStart(_dragElement, ev, ui) {                                                                        // 3724
		hoverListener.start(function(cell) {                                                                             // 3725
			clearOverlays();                                                                                                // 3726
			if (cell) {                                                                                                     // 3727
				if (cellIsAllDay(cell)) {                                                                                      // 3728
					renderCellOverlay(cell.row, cell.col, cell.row, cell.col);                                                    // 3729
				}else{                                                                                                         // 3730
					var d1 = cellDate(cell);                                                                                      // 3731
					var d2 = addMinutes(cloneDate(d1), opt('defaultEventMinutes'));                                               // 3732
					renderSlotOverlay(d1, d2);                                                                                    // 3733
				}                                                                                                              // 3734
			}                                                                                                               // 3735
		}, ev);                                                                                                          // 3736
	}                                                                                                                 // 3737
	                                                                                                                  // 3738
	                                                                                                                  // 3739
	function dragStop(_dragElement, ev, ui) {                                                                         // 3740
		var cell = hoverListener.stop();                                                                                 // 3741
		clearOverlays();                                                                                                 // 3742
		if (cell) {                                                                                                      // 3743
			trigger('drop', _dragElement, cellDate(cell), cellIsAllDay(cell), ev, ui);                                      // 3744
		}                                                                                                                // 3745
	}                                                                                                                 // 3746
                                                                                                                   // 3747
                                                                                                                   // 3748
}                                                                                                                  // 3749
                                                                                                                   // 3750
;;                                                                                                                 // 3751
                                                                                                                   // 3752
function AgendaEventRenderer() {                                                                                   // 3753
	var t = this;                                                                                                     // 3754
	                                                                                                                  // 3755
	                                                                                                                  // 3756
	// exports                                                                                                        // 3757
	t.renderEvents = renderEvents;                                                                                    // 3758
	t.compileDaySegs = compileDaySegs; // for DayEventRenderer                                                        // 3759
	t.clearEvents = clearEvents;                                                                                      // 3760
	t.slotSegHtml = slotSegHtml;                                                                                      // 3761
	t.bindDaySeg = bindDaySeg;                                                                                        // 3762
	                                                                                                                  // 3763
	                                                                                                                  // 3764
	// imports                                                                                                        // 3765
	DayEventRenderer.call(t);                                                                                         // 3766
	var opt = t.opt;                                                                                                  // 3767
	var trigger = t.trigger;                                                                                          // 3768
	//var setOverflowHidden = t.setOverflowHidden;                                                                    // 3769
	var isEventDraggable = t.isEventDraggable;                                                                        // 3770
	var isEventResizable = t.isEventResizable;                                                                        // 3771
	var eventEnd = t.eventEnd;                                                                                        // 3772
	var reportEvents = t.reportEvents;                                                                                // 3773
	var reportEventClear = t.reportEventClear;                                                                        // 3774
	var eventElementHandlers = t.eventElementHandlers;                                                                // 3775
	var setHeight = t.setHeight;                                                                                      // 3776
	var getDaySegmentContainer = t.getDaySegmentContainer;                                                            // 3777
	var getSlotSegmentContainer = t.getSlotSegmentContainer;                                                          // 3778
	var getHoverListener = t.getHoverListener;                                                                        // 3779
	var getMaxMinute = t.getMaxMinute;                                                                                // 3780
	var getMinMinute = t.getMinMinute;                                                                                // 3781
	var timePosition = t.timePosition;                                                                                // 3782
	var colContentLeft = t.colContentLeft;                                                                            // 3783
	var colContentRight = t.colContentRight;                                                                          // 3784
	var renderDaySegs = t.renderDaySegs;                                                                              // 3785
	var resizableDayEvent = t.resizableDayEvent; // TODO: streamline binding architecture                             // 3786
	var getColCnt = t.getColCnt;                                                                                      // 3787
	var getColWidth = t.getColWidth;                                                                                  // 3788
	var getSnapHeight = t.getSnapHeight;                                                                              // 3789
	var getSnapMinutes = t.getSnapMinutes;                                                                            // 3790
	var getBodyContent = t.getBodyContent;                                                                            // 3791
	var reportEventElement = t.reportEventElement;                                                                    // 3792
	var showEvents = t.showEvents;                                                                                    // 3793
	var hideEvents = t.hideEvents;                                                                                    // 3794
	var eventDrop = t.eventDrop;                                                                                      // 3795
	var eventResize = t.eventResize;                                                                                  // 3796
	var renderDayOverlay = t.renderDayOverlay;                                                                        // 3797
	var clearOverlays = t.clearOverlays;                                                                              // 3798
	var calendar = t.calendar;                                                                                        // 3799
	var formatDate = calendar.formatDate;                                                                             // 3800
	var formatDates = calendar.formatDates;                                                                           // 3801
	                                                                                                                  // 3802
	                                                                                                                  // 3803
	                                                                                                                  // 3804
	/* Rendering                                                                                                      // 3805
	----------------------------------------------------------------------------*/                                    // 3806
	                                                                                                                  // 3807
                                                                                                                   // 3808
	function renderEvents(events, modifiedEventId) {                                                                  // 3809
		reportEvents(events);                                                                                            // 3810
		var i, len=events.length,                                                                                        // 3811
			dayEvents=[],                                                                                                   // 3812
			slotEvents=[];                                                                                                  // 3813
		for (i=0; i<len; i++) {                                                                                          // 3814
			if (events[i].allDay) {                                                                                         // 3815
				dayEvents.push(events[i]);                                                                                     // 3816
			}else{                                                                                                          // 3817
				slotEvents.push(events[i]);                                                                                    // 3818
			}                                                                                                               // 3819
		}                                                                                                                // 3820
		if (opt('allDaySlot')) {                                                                                         // 3821
			renderDaySegs(compileDaySegs(dayEvents), modifiedEventId);                                                      // 3822
			setHeight(); // no params means set to viewHeight                                                               // 3823
		}                                                                                                                // 3824
		renderSlotSegs(compileSlotSegs(slotEvents), modifiedEventId);                                                    // 3825
		trigger('eventAfterAllRender');                                                                                  // 3826
	}                                                                                                                 // 3827
	                                                                                                                  // 3828
	                                                                                                                  // 3829
	function clearEvents() {                                                                                          // 3830
		reportEventClear();                                                                                              // 3831
		getDaySegmentContainer().empty();                                                                                // 3832
		getSlotSegmentContainer().empty();                                                                               // 3833
	}                                                                                                                 // 3834
	                                                                                                                  // 3835
	                                                                                                                  // 3836
	function compileDaySegs(events) {                                                                                 // 3837
		var levels = stackSegs(sliceSegs(events, $.map(events, exclEndDay), t.visStart, t.visEnd)),                      // 3838
			i, levelCnt=levels.length, level,                                                                               // 3839
			j, seg,                                                                                                         // 3840
			segs=[];                                                                                                        // 3841
		for (i=0; i<levelCnt; i++) {                                                                                     // 3842
			level = levels[i];                                                                                              // 3843
			for (j=0; j<level.length; j++) {                                                                                // 3844
				seg = level[j];                                                                                                // 3845
				seg.row = 0;                                                                                                   // 3846
				seg.level = i; // not needed anymore                                                                           // 3847
				segs.push(seg);                                                                                                // 3848
			}                                                                                                               // 3849
		}                                                                                                                // 3850
		return segs;                                                                                                     // 3851
	}                                                                                                                 // 3852
	                                                                                                                  // 3853
	                                                                                                                  // 3854
	function compileSlotSegs(events) {                                                                                // 3855
		var colCnt = getColCnt(),                                                                                        // 3856
			minMinute = getMinMinute(),                                                                                     // 3857
			maxMinute = getMaxMinute(),                                                                                     // 3858
			d = addMinutes(cloneDate(t.visStart), minMinute),                                                               // 3859
			visEventEnds = $.map(events, slotEventEnd),                                                                     // 3860
			i, col,                                                                                                         // 3861
			j, level,                                                                                                       // 3862
			k, seg,                                                                                                         // 3863
			segs=[];                                                                                                        // 3864
		for (i=0; i<colCnt; i++) {                                                                                       // 3865
			col = stackSegs(sliceSegs(events, visEventEnds, d, addMinutes(cloneDate(d), maxMinute-minMinute)));             // 3866
			countForwardSegs(col);                                                                                          // 3867
			for (j=0; j<col.length; j++) {                                                                                  // 3868
				level = col[j];                                                                                                // 3869
				for (k=0; k<level.length; k++) {                                                                               // 3870
					seg = level[k];                                                                                               // 3871
					seg.col = i;                                                                                                  // 3872
					seg.level = j;                                                                                                // 3873
					segs.push(seg);                                                                                               // 3874
				}                                                                                                              // 3875
			}                                                                                                               // 3876
			addDays(d, 1, true);                                                                                            // 3877
		}                                                                                                                // 3878
		return segs;                                                                                                     // 3879
	}                                                                                                                 // 3880
	                                                                                                                  // 3881
	                                                                                                                  // 3882
	function slotEventEnd(event) {                                                                                    // 3883
		if (event.end) {                                                                                                 // 3884
			return cloneDate(event.end);                                                                                    // 3885
		}else{                                                                                                           // 3886
			return addMinutes(cloneDate(event.start), opt('defaultEventMinutes'));                                          // 3887
		}                                                                                                                // 3888
	}                                                                                                                 // 3889
	                                                                                                                  // 3890
	                                                                                                                  // 3891
	// renders events in the 'time slots' at the bottom                                                               // 3892
	                                                                                                                  // 3893
	function renderSlotSegs(segs, modifiedEventId) {                                                                  // 3894
	                                                                                                                  // 3895
		var i, segCnt=segs.length, seg,                                                                                  // 3896
			event,                                                                                                          // 3897
			classes,                                                                                                        // 3898
			top, bottom,                                                                                                    // 3899
			colI, levelI, forward,                                                                                          // 3900
			leftmost,                                                                                                       // 3901
			availWidth,                                                                                                     // 3902
			outerWidth,                                                                                                     // 3903
			left,                                                                                                           // 3904
			html='',                                                                                                        // 3905
			eventElements,                                                                                                  // 3906
			eventElement,                                                                                                   // 3907
			triggerRes,                                                                                                     // 3908
			vsideCache={},                                                                                                  // 3909
			hsideCache={},                                                                                                  // 3910
			key, val,                                                                                                       // 3911
			titleElement,                                                                                                   // 3912
			height,                                                                                                         // 3913
			slotSegmentContainer = getSlotSegmentContainer(),                                                               // 3914
			rtl, dis, dit,                                                                                                  // 3915
			colCnt = getColCnt();                                                                                           // 3916
			                                                                                                                // 3917
		if (rtl = opt('isRTL')) {                                                                                        // 3918
			dis = -1;                                                                                                       // 3919
			dit = colCnt - 1;                                                                                               // 3920
		}else{                                                                                                           // 3921
			dis = 1;                                                                                                        // 3922
			dit = 0;                                                                                                        // 3923
		}                                                                                                                // 3924
			                                                                                                                // 3925
		// calculate position/dimensions, create html                                                                    // 3926
		for (i=0; i<segCnt; i++) {                                                                                       // 3927
			seg = segs[i];                                                                                                  // 3928
			event = seg.event;                                                                                              // 3929
			top = timePosition(seg.start, seg.start);                                                                       // 3930
			bottom = timePosition(seg.start, seg.end);                                                                      // 3931
			colI = seg.col;                                                                                                 // 3932
			levelI = seg.level;                                                                                             // 3933
			forward = seg.forward || 0;                                                                                     // 3934
			leftmost = colContentLeft(colI*dis + dit);                                                                      // 3935
			availWidth = colContentRight(colI*dis + dit) - leftmost;                                                        // 3936
			availWidth = Math.min(availWidth-6, availWidth*.95); // TODO: move this to CSS                                  // 3937
			if (levelI) {                                                                                                   // 3938
				// indented and thin                                                                                           // 3939
				outerWidth = availWidth / (levelI + forward + 1);                                                              // 3940
			}else{                                                                                                          // 3941
				if (forward) {                                                                                                 // 3942
					// moderately wide, aligned left still                                                                        // 3943
					outerWidth = ((availWidth / (forward + 1)) - (12/2)) * 2; // 12 is the predicted width of resizer =           // 3944
				}else{                                                                                                         // 3945
					// can be entire width, aligned left                                                                          // 3946
					outerWidth = availWidth;                                                                                      // 3947
				}                                                                                                              // 3948
			}                                                                                                               // 3949
			left = leftmost +                                  // leftmost possible                                         // 3950
				(availWidth / (levelI + forward + 1) * levelI) // indentation                                                  // 3951
				* dis + (rtl ? availWidth - outerWidth : 0);   // rtl                                                          // 3952
			seg.top = top;                                                                                                  // 3953
			seg.left = left;                                                                                                // 3954
			seg.outerWidth = outerWidth;                                                                                    // 3955
			seg.outerHeight = bottom - top;                                                                                 // 3956
			html += slotSegHtml(event, seg);                                                                                // 3957
		}                                                                                                                // 3958
		slotSegmentContainer[0].innerHTML = html; // faster than html()                                                  // 3959
		eventElements = slotSegmentContainer.children();                                                                 // 3960
		                                                                                                                 // 3961
		// retrieve elements, run through eventRender callback, bind event handlers                                      // 3962
		for (i=0; i<segCnt; i++) {                                                                                       // 3963
			seg = segs[i];                                                                                                  // 3964
			event = seg.event;                                                                                              // 3965
			eventElement = $(eventElements[i]); // faster than eq()                                                         // 3966
			triggerRes = trigger('eventRender', event, event, eventElement);                                                // 3967
			if (triggerRes === false) {                                                                                     // 3968
				eventElement.remove();                                                                                         // 3969
			}else{                                                                                                          // 3970
				if (triggerRes && triggerRes !== true) {                                                                       // 3971
					eventElement.remove();                                                                                        // 3972
					eventElement = $(triggerRes)                                                                                  // 3973
						.css({                                                                                                       // 3974
							position: 'absolute',                                                                                       // 3975
							top: seg.top,                                                                                               // 3976
							left: seg.left                                                                                              // 3977
						})                                                                                                           // 3978
						.appendTo(slotSegmentContainer);                                                                             // 3979
				}                                                                                                              // 3980
				seg.element = eventElement;                                                                                    // 3981
				if (event._id === modifiedEventId) {                                                                           // 3982
					bindSlotSeg(event, eventElement, seg);                                                                        // 3983
				}else{                                                                                                         // 3984
					eventElement[0]._fci = i; // for lazySegBind                                                                  // 3985
				}                                                                                                              // 3986
				reportEventElement(event, eventElement);                                                                       // 3987
			}                                                                                                               // 3988
		}                                                                                                                // 3989
		                                                                                                                 // 3990
		lazySegBind(slotSegmentContainer, segs, bindSlotSeg);                                                            // 3991
		                                                                                                                 // 3992
		// record event sides and title positions                                                                        // 3993
		for (i=0; i<segCnt; i++) {                                                                                       // 3994
			seg = segs[i];                                                                                                  // 3995
			if (eventElement = seg.element) {                                                                               // 3996
				val = vsideCache[key = seg.key = cssKey(eventElement[0])];                                                     // 3997
				seg.vsides = val === undefined ? (vsideCache[key] = vsides(eventElement, true)) : val;                         // 3998
				val = hsideCache[key];                                                                                         // 3999
				seg.hsides = val === undefined ? (hsideCache[key] = hsides(eventElement, true)) : val;                         // 4000
				titleElement = eventElement.find('.fc-event-title');                                                           // 4001
				if (titleElement.length) {                                                                                     // 4002
					seg.contentTop = titleElement[0].offsetTop;                                                                   // 4003
				}                                                                                                              // 4004
			}                                                                                                               // 4005
		}                                                                                                                // 4006
		                                                                                                                 // 4007
		// set all positions/dimensions at once                                                                          // 4008
		for (i=0; i<segCnt; i++) {                                                                                       // 4009
			seg = segs[i];                                                                                                  // 4010
			if (eventElement = seg.element) {                                                                               // 4011
				eventElement[0].style.width = Math.max(0, seg.outerWidth - seg.hsides) + 'px';                                 // 4012
				height = Math.max(0, seg.outerHeight - seg.vsides);                                                            // 4013
				eventElement[0].style.height = height + 'px';                                                                  // 4014
				event = seg.event;                                                                                             // 4015
				if (seg.contentTop !== undefined && height - seg.contentTop < 10) {                                            // 4016
					// not enough room for title, put it in the time (TODO: maybe make both display:inline instead)               // 4017
					eventElement.find('div.fc-event-time')                                                                        // 4018
						.text(formatDate(event.start, opt('timeFormat')) + ' - ' + event.title);                                     // 4019
					eventElement.find('div.fc-event-title')                                                                       // 4020
						.remove();                                                                                                   // 4021
				}                                                                                                              // 4022
				trigger('eventAfterRender', event, event, eventElement);                                                       // 4023
			}                                                                                                               // 4024
		}                                                                                                                // 4025
					                                                                                                              // 4026
	}                                                                                                                 // 4027
	                                                                                                                  // 4028
	                                                                                                                  // 4029
	function slotSegHtml(event, seg) {                                                                                // 4030
		var html = "<";                                                                                                  // 4031
		var url = event.url;                                                                                             // 4032
		var skinCss = getSkinCss(event, opt);                                                                            // 4033
		var classes = ['fc-event', 'fc-event-vert'];                                                                     // 4034
		if (isEventDraggable(event)) {                                                                                   // 4035
			classes.push('fc-event-draggable');                                                                             // 4036
		}                                                                                                                // 4037
		if (seg.isStart) {                                                                                               // 4038
			classes.push('fc-event-start');                                                                                 // 4039
		}                                                                                                                // 4040
		if (seg.isEnd) {                                                                                                 // 4041
			classes.push('fc-event-end');                                                                                   // 4042
		}                                                                                                                // 4043
		classes = classes.concat(event.className);                                                                       // 4044
		if (event.source) {                                                                                              // 4045
			classes = classes.concat(event.source.className || []);                                                         // 4046
		}                                                                                                                // 4047
		if (url) {                                                                                                       // 4048
			html += "a href='" + htmlEscape(event.url) + "'";                                                               // 4049
		}else{                                                                                                           // 4050
			html += "div";                                                                                                  // 4051
		}                                                                                                                // 4052
		html +=                                                                                                          // 4053
			" class='" + classes.join(' ') + "'" +                                                                          // 4054
			" style='position:absolute;z-index:8;top:" + seg.top + "px;left:" + seg.left + "px;" + skinCss + "'" +          // 4055
			">" +                                                                                                           // 4056
			"<div class='fc-event-inner'>" +                                                                                // 4057
			"<div class='fc-event-time'>" +                                                                                 // 4058
			htmlEscape(formatDates(event.start, event.end, opt('timeFormat'))) +                                            // 4059
			"</div>" +                                                                                                      // 4060
			"<div class='fc-event-title'>" +                                                                                // 4061
			htmlEscape(event.title) +                                                                                       // 4062
			"</div>" +                                                                                                      // 4063
			"</div>" +                                                                                                      // 4064
			"<div class='fc-event-bg'></div>";                                                                              // 4065
		if (seg.isEnd && isEventResizable(event)) {                                                                      // 4066
			html +=                                                                                                         // 4067
				"<div class='ui-resizable-handle ui-resizable-s'>=</div>";                                                     // 4068
		}                                                                                                                // 4069
		html +=                                                                                                          // 4070
			"</" + (url ? "a" : "div") + ">";                                                                               // 4071
		return html;                                                                                                     // 4072
	}                                                                                                                 // 4073
	                                                                                                                  // 4074
	                                                                                                                  // 4075
	function bindDaySeg(event, eventElement, seg) {                                                                   // 4076
		if (isEventDraggable(event)) {                                                                                   // 4077
			draggableDayEvent(event, eventElement, seg.isStart);                                                            // 4078
		}                                                                                                                // 4079
		if (seg.isEnd && isEventResizable(event)) {                                                                      // 4080
			resizableDayEvent(event, eventElement, seg);                                                                    // 4081
		}                                                                                                                // 4082
		eventElementHandlers(event, eventElement);                                                                       // 4083
			// needs to be after, because resizableDayEvent might stopImmediatePropagation on click                         // 4084
	}                                                                                                                 // 4085
	                                                                                                                  // 4086
	                                                                                                                  // 4087
	function bindSlotSeg(event, eventElement, seg) {                                                                  // 4088
		var timeElement = eventElement.find('div.fc-event-time');                                                        // 4089
		if (isEventDraggable(event)) {                                                                                   // 4090
			draggableSlotEvent(event, eventElement, timeElement);                                                           // 4091
		}                                                                                                                // 4092
		if (seg.isEnd && isEventResizable(event)) {                                                                      // 4093
			resizableSlotEvent(event, eventElement, timeElement);                                                           // 4094
		}                                                                                                                // 4095
		eventElementHandlers(event, eventElement);                                                                       // 4096
	}                                                                                                                 // 4097
	                                                                                                                  // 4098
	                                                                                                                  // 4099
	                                                                                                                  // 4100
	/* Dragging                                                                                                       // 4101
	-----------------------------------------------------------------------------------*/                             // 4102
	                                                                                                                  // 4103
	                                                                                                                  // 4104
	// when event starts out FULL-DAY                                                                                 // 4105
	                                                                                                                  // 4106
	function draggableDayEvent(event, eventElement, isStart) {                                                        // 4107
		var origWidth;                                                                                                   // 4108
		var revert;                                                                                                      // 4109
		var allDay=true;                                                                                                 // 4110
		var dayDelta;                                                                                                    // 4111
		var dis = opt('isRTL') ? -1 : 1;                                                                                 // 4112
		var hoverListener = getHoverListener();                                                                          // 4113
		var colWidth = getColWidth();                                                                                    // 4114
		var snapHeight = getSnapHeight();                                                                                // 4115
		var snapMinutes = getSnapMinutes();                                                                              // 4116
		var minMinute = getMinMinute();                                                                                  // 4117
		eventElement.draggable({                                                                                         // 4118
			zIndex: 9,                                                                                                      // 4119
			opacity: opt('dragOpacity', 'month'), // use whatever the month view was using                                  // 4120
			revertDuration: opt('dragRevertDuration'),                                                                      // 4121
			start: function(ev, ui) {                                                                                       // 4122
				trigger('eventDragStart', eventElement, event, ev, ui);                                                        // 4123
				hideEvents(event, eventElement);                                                                               // 4124
				origWidth = eventElement.width();                                                                              // 4125
				hoverListener.start(function(cell, origCell, rowDelta, colDelta) {                                             // 4126
					clearOverlays();                                                                                              // 4127
					if (cell) {                                                                                                   // 4128
						//setOverflowHidden(true);                                                                                   // 4129
						revert = false;                                                                                              // 4130
						dayDelta = colDelta * dis;                                                                                   // 4131
						if (!cell.row) {                                                                                             // 4132
							// on full-days                                                                                             // 4133
							renderDayOverlay(                                                                                           // 4134
								addDays(cloneDate(event.start), dayDelta),                                                                 // 4135
								addDays(exclEndDay(event), dayDelta)                                                                       // 4136
							);                                                                                                          // 4137
							resetElement();                                                                                             // 4138
						}else{                                                                                                       // 4139
							// mouse is over bottom slots                                                                               // 4140
							if (isStart) {                                                                                              // 4141
								if (allDay) {                                                                                              // 4142
									// convert event to temporary slot-event                                                                  // 4143
									eventElement.width(colWidth - 10); // don't use entire width                                              // 4144
									setOuterHeight(                                                                                           // 4145
										eventElement,                                                                                            // 4146
										snapHeight * Math.round(                                                                                 // 4147
											(event.end ? ((event.end - event.start) / MINUTE_MS) : opt('defaultEventMinutes')) /                    // 4148
												snapMinutes                                                                                            // 4149
										)                                                                                                        // 4150
									);                                                                                                        // 4151
									eventElement.draggable('option', 'grid', [colWidth, 1]);                                                  // 4152
									allDay = false;                                                                                           // 4153
								}                                                                                                          // 4154
							}else{                                                                                                      // 4155
								revert = true;                                                                                             // 4156
							}                                                                                                           // 4157
						}                                                                                                            // 4158
						revert = revert || (allDay && !dayDelta);                                                                    // 4159
					}else{                                                                                                        // 4160
						resetElement();                                                                                              // 4161
						//setOverflowHidden(false);                                                                                  // 4162
						revert = true;                                                                                               // 4163
					}                                                                                                             // 4164
					eventElement.draggable('option', 'revert', revert);                                                           // 4165
				}, ev, 'drag');                                                                                                // 4166
			},                                                                                                              // 4167
			stop: function(ev, ui) {                                                                                        // 4168
				hoverListener.stop();                                                                                          // 4169
				clearOverlays();                                                                                               // 4170
				trigger('eventDragStop', eventElement, event, ev, ui);                                                         // 4171
				if (revert) {                                                                                                  // 4172
					// hasn't moved or is out of bounds (draggable has already reverted)                                          // 4173
					resetElement();                                                                                               // 4174
					eventElement.css('filter', ''); // clear IE opacity side-effects                                              // 4175
					showEvents(event, eventElement);                                                                              // 4176
				}else{                                                                                                         // 4177
					// changed!                                                                                                   // 4178
					var minuteDelta = 0;                                                                                          // 4179
					if (!allDay) {                                                                                                // 4180
						minuteDelta = Math.round((eventElement.offset().top - getBodyContent().offset().top) / snapHeight)           // 4181
							* snapMinutes                                                                                               // 4182
							+ minMinute                                                                                                 // 4183
							- (event.start.getHours() * 60 + event.start.getMinutes());                                                 // 4184
					}                                                                                                             // 4185
					eventDrop(this, event, dayDelta, minuteDelta, allDay, ev, ui);                                                // 4186
				}                                                                                                              // 4187
				//setOverflowHidden(false);                                                                                    // 4188
			}                                                                                                               // 4189
		});                                                                                                              // 4190
		function resetElement() {                                                                                        // 4191
			if (!allDay) {                                                                                                  // 4192
				eventElement                                                                                                   // 4193
					.width(origWidth)                                                                                             // 4194
					.height('')                                                                                                   // 4195
					.draggable('option', 'grid', null);                                                                           // 4196
				allDay = true;                                                                                                 // 4197
			}                                                                                                               // 4198
		}                                                                                                                // 4199
	}                                                                                                                 // 4200
	                                                                                                                  // 4201
	                                                                                                                  // 4202
	// when event starts out IN TIMESLOTS                                                                             // 4203
	                                                                                                                  // 4204
	function draggableSlotEvent(event, eventElement, timeElement) {                                                   // 4205
		var origPosition;                                                                                                // 4206
		var allDay=false;                                                                                                // 4207
		var dayDelta;                                                                                                    // 4208
		var minuteDelta;                                                                                                 // 4209
		var prevMinuteDelta;                                                                                             // 4210
		var dis = opt('isRTL') ? -1 : 1;                                                                                 // 4211
		var hoverListener = getHoverListener();                                                                          // 4212
		var colCnt = getColCnt();                                                                                        // 4213
		var colWidth = getColWidth();                                                                                    // 4214
		var snapHeight = getSnapHeight();                                                                                // 4215
		var snapMinutes = getSnapMinutes();                                                                              // 4216
		eventElement.draggable({                                                                                         // 4217
			zIndex: 9,                                                                                                      // 4218
			scroll: false,                                                                                                  // 4219
			grid: [colWidth, snapHeight],                                                                                   // 4220
			axis: colCnt==1 ? 'y' : false,                                                                                  // 4221
			opacity: opt('dragOpacity'),                                                                                    // 4222
			revertDuration: opt('dragRevertDuration'),                                                                      // 4223
			start: function(ev, ui) {                                                                                       // 4224
				trigger('eventDragStart', eventElement, event, ev, ui);                                                        // 4225
				hideEvents(event, eventElement);                                                                               // 4226
				origPosition = eventElement.position();                                                                        // 4227
				minuteDelta = prevMinuteDelta = 0;                                                                             // 4228
				hoverListener.start(function(cell, origCell, rowDelta, colDelta) {                                             // 4229
					eventElement.draggable('option', 'revert', !cell);                                                            // 4230
					clearOverlays();                                                                                              // 4231
					if (cell) {                                                                                                   // 4232
						dayDelta = colDelta * dis;                                                                                   // 4233
						if (opt('allDaySlot') && !cell.row) {                                                                        // 4234
							// over full days                                                                                           // 4235
							if (!allDay) {                                                                                              // 4236
								// convert to temporary all-day event                                                                      // 4237
								allDay = true;                                                                                             // 4238
								timeElement.hide();                                                                                        // 4239
								eventElement.draggable('option', 'grid', null);                                                            // 4240
							}                                                                                                           // 4241
							renderDayOverlay(                                                                                           // 4242
								addDays(cloneDate(event.start), dayDelta),                                                                 // 4243
								addDays(exclEndDay(event), dayDelta)                                                                       // 4244
							);                                                                                                          // 4245
						}else{                                                                                                       // 4246
							// on slots                                                                                                 // 4247
							resetElement();                                                                                             // 4248
						}                                                                                                            // 4249
					}                                                                                                             // 4250
				}, ev, 'drag');                                                                                                // 4251
			},                                                                                                              // 4252
			drag: function(ev, ui) {                                                                                        // 4253
				minuteDelta = Math.round((ui.position.top - origPosition.top) / snapHeight) * snapMinutes;                     // 4254
				if (minuteDelta != prevMinuteDelta) {                                                                          // 4255
					if (!allDay) {                                                                                                // 4256
						updateTimeText(minuteDelta);                                                                                 // 4257
					}                                                                                                             // 4258
					prevMinuteDelta = minuteDelta;                                                                                // 4259
				}                                                                                                              // 4260
			},                                                                                                              // 4261
			stop: function(ev, ui) {                                                                                        // 4262
				var cell = hoverListener.stop();                                                                               // 4263
				clearOverlays();                                                                                               // 4264
				trigger('eventDragStop', eventElement, event, ev, ui);                                                         // 4265
				if (cell && (dayDelta || minuteDelta || allDay)) {                                                             // 4266
					// changed!                                                                                                   // 4267
					eventDrop(this, event, dayDelta, allDay ? 0 : minuteDelta, allDay, ev, ui);                                   // 4268
				}else{                                                                                                         // 4269
					// either no change or out-of-bounds (draggable has already reverted)                                         // 4270
					resetElement();                                                                                               // 4271
					eventElement.css('filter', ''); // clear IE opacity side-effects                                              // 4272
					eventElement.css(origPosition); // sometimes fast drags make event revert to wrong position                   // 4273
					updateTimeText(0);                                                                                            // 4274
					showEvents(event, eventElement);                                                                              // 4275
				}                                                                                                              // 4276
			}                                                                                                               // 4277
		});                                                                                                              // 4278
		function updateTimeText(minuteDelta) {                                                                           // 4279
			var newStart = addMinutes(cloneDate(event.start), minuteDelta);                                                 // 4280
			var newEnd;                                                                                                     // 4281
			if (event.end) {                                                                                                // 4282
				newEnd = addMinutes(cloneDate(event.end), minuteDelta);                                                        // 4283
			}                                                                                                               // 4284
			timeElement.text(formatDates(newStart, newEnd, opt('timeFormat')));                                             // 4285
		}                                                                                                                // 4286
		function resetElement() {                                                                                        // 4287
			// convert back to original slot-event                                                                          // 4288
			if (allDay) {                                                                                                   // 4289
				timeElement.css('display', ''); // show() was causing display=inline                                           // 4290
				eventElement.draggable('option', 'grid', [colWidth, snapHeight]);                                              // 4291
				allDay = false;                                                                                                // 4292
			}                                                                                                               // 4293
		}                                                                                                                // 4294
	}                                                                                                                 // 4295
	                                                                                                                  // 4296
	                                                                                                                  // 4297
	                                                                                                                  // 4298
	/* Resizing                                                                                                       // 4299
	--------------------------------------------------------------------------------------*/                          // 4300
	                                                                                                                  // 4301
	                                                                                                                  // 4302
	function resizableSlotEvent(event, eventElement, timeElement) {                                                   // 4303
		var snapDelta, prevSnapDelta;                                                                                    // 4304
		var snapHeight = getSnapHeight();                                                                                // 4305
		var snapMinutes = getSnapMinutes();                                                                              // 4306
		eventElement.resizable({                                                                                         // 4307
			handles: {                                                                                                      // 4308
				s: '.ui-resizable-handle'                                                                                      // 4309
			},                                                                                                              // 4310
			grid: snapHeight,                                                                                               // 4311
			start: function(ev, ui) {                                                                                       // 4312
				snapDelta = prevSnapDelta = 0;                                                                                 // 4313
				hideEvents(event, eventElement);                                                                               // 4314
				eventElement.css('z-index', 9);                                                                                // 4315
				trigger('eventResizeStart', this, event, ev, ui);                                                              // 4316
			},                                                                                                              // 4317
			resize: function(ev, ui) {                                                                                      // 4318
				// don't rely on ui.size.height, doesn't take grid into account                                                // 4319
				snapDelta = Math.round((Math.max(snapHeight, eventElement.height()) - ui.originalSize.height) / snapHeight);   // 4320
				if (snapDelta != prevSnapDelta) {                                                                              // 4321
					timeElement.text(                                                                                             // 4322
						formatDates(                                                                                                 // 4323
							event.start,                                                                                                // 4324
							(!snapDelta && !event.end) ? null : // no change, so don't display time range                               // 4325
								addMinutes(eventEnd(event), snapMinutes*snapDelta),                                                        // 4326
							opt('timeFormat')                                                                                           // 4327
						)                                                                                                            // 4328
					);                                                                                                            // 4329
					prevSnapDelta = snapDelta;                                                                                    // 4330
				}                                                                                                              // 4331
			},                                                                                                              // 4332
			stop: function(ev, ui) {                                                                                        // 4333
				trigger('eventResizeStop', this, event, ev, ui);                                                               // 4334
				if (snapDelta) {                                                                                               // 4335
					eventResize(this, event, 0, snapMinutes*snapDelta, ev, ui);                                                   // 4336
				}else{                                                                                                         // 4337
					eventElement.css('z-index', 8);                                                                               // 4338
					showEvents(event, eventElement);                                                                              // 4339
					// BUG: if event was really short, need to put title back in span                                             // 4340
				}                                                                                                              // 4341
			}                                                                                                               // 4342
		});                                                                                                              // 4343
	}                                                                                                                 // 4344
	                                                                                                                  // 4345
                                                                                                                   // 4346
}                                                                                                                  // 4347
                                                                                                                   // 4348
                                                                                                                   // 4349
function countForwardSegs(levels) {                                                                                // 4350
	var i, j, k, level, segForward, segBack;                                                                          // 4351
	for (i=levels.length-1; i>0; i--) {                                                                               // 4352
		level = levels[i];                                                                                               // 4353
		for (j=0; j<level.length; j++) {                                                                                 // 4354
			segForward = level[j];                                                                                          // 4355
			for (k=0; k<levels[i-1].length; k++) {                                                                          // 4356
				segBack = levels[i-1][k];                                                                                      // 4357
				if (segsCollide(segForward, segBack)) {                                                                        // 4358
					segBack.forward = Math.max(segBack.forward||0, (segForward.forward||0)+1);                                    // 4359
				}                                                                                                              // 4360
			}                                                                                                               // 4361
		}                                                                                                                // 4362
	}                                                                                                                 // 4363
}                                                                                                                  // 4364
                                                                                                                   // 4365
                                                                                                                   // 4366
                                                                                                                   // 4367
;;                                                                                                                 // 4368
                                                                                                                   // 4369
                                                                                                                   // 4370
function View(element, calendar, viewName) {                                                                       // 4371
	var t = this;                                                                                                     // 4372
	                                                                                                                  // 4373
	                                                                                                                  // 4374
	// exports                                                                                                        // 4375
	t.element = element;                                                                                              // 4376
	t.calendar = calendar;                                                                                            // 4377
	t.name = viewName;                                                                                                // 4378
	t.opt = opt;                                                                                                      // 4379
	t.trigger = trigger;                                                                                              // 4380
	//t.setOverflowHidden = setOverflowHidden;                                                                        // 4381
	t.isEventDraggable = isEventDraggable;                                                                            // 4382
	t.isEventResizable = isEventResizable;                                                                            // 4383
	t.reportEvents = reportEvents;                                                                                    // 4384
	t.eventEnd = eventEnd;                                                                                            // 4385
	t.reportEventElement = reportEventElement;                                                                        // 4386
	t.reportEventClear = reportEventClear;                                                                            // 4387
	t.eventElementHandlers = eventElementHandlers;                                                                    // 4388
	t.showEvents = showEvents;                                                                                        // 4389
	t.hideEvents = hideEvents;                                                                                        // 4390
	t.eventDrop = eventDrop;                                                                                          // 4391
	t.eventResize = eventResize;                                                                                      // 4392
	// t.title                                                                                                        // 4393
	// t.start, t.end                                                                                                 // 4394
	// t.visStart, t.visEnd                                                                                           // 4395
	                                                                                                                  // 4396
	                                                                                                                  // 4397
	// imports                                                                                                        // 4398
	var defaultEventEnd = t.defaultEventEnd;                                                                          // 4399
	var normalizeEvent = calendar.normalizeEvent; // in EventManager                                                  // 4400
	var reportEventChange = calendar.reportEventChange;                                                               // 4401
	                                                                                                                  // 4402
	                                                                                                                  // 4403
	// locals                                                                                                         // 4404
	var eventsByID = {};                                                                                              // 4405
	var eventElements = [];                                                                                           // 4406
	var eventElementsByID = {};                                                                                       // 4407
	var options = calendar.options;                                                                                   // 4408
	                                                                                                                  // 4409
	                                                                                                                  // 4410
	                                                                                                                  // 4411
	function opt(name, viewNameOverride) {                                                                            // 4412
		var v = options[name];                                                                                           // 4413
		if (typeof v == 'object') {                                                                                      // 4414
			return smartProperty(v, viewNameOverride || viewName);                                                          // 4415
		}                                                                                                                // 4416
		return v;                                                                                                        // 4417
	}                                                                                                                 // 4418
                                                                                                                   // 4419
	                                                                                                                  // 4420
	function trigger(name, thisObj) {                                                                                 // 4421
		return calendar.trigger.apply(                                                                                   // 4422
			calendar,                                                                                                       // 4423
			[name, thisObj || t].concat(Array.prototype.slice.call(arguments, 2), [t])                                      // 4424
		);                                                                                                               // 4425
	}                                                                                                                 // 4426
	                                                                                                                  // 4427
	                                                                                                                  // 4428
	/*                                                                                                                // 4429
	function setOverflowHidden(bool) {                                                                                // 4430
		element.css('overflow', bool ? 'hidden' : '');                                                                   // 4431
	}                                                                                                                 // 4432
	*/                                                                                                                // 4433
	                                                                                                                  // 4434
	                                                                                                                  // 4435
	function isEventDraggable(event) {                                                                                // 4436
		return isEventEditable(event) && !opt('disableDragging');                                                        // 4437
	}                                                                                                                 // 4438
	                                                                                                                  // 4439
	                                                                                                                  // 4440
	function isEventResizable(event) { // but also need to make sure the seg.isEnd == true                            // 4441
		return isEventEditable(event) && !opt('disableResizing');                                                        // 4442
	}                                                                                                                 // 4443
	                                                                                                                  // 4444
	                                                                                                                  // 4445
	function isEventEditable(event) {                                                                                 // 4446
		return firstDefined(event.editable, (event.source || {}).editable, opt('editable'));                             // 4447
	}                                                                                                                 // 4448
	                                                                                                                  // 4449
	                                                                                                                  // 4450
	                                                                                                                  // 4451
	/* Event Data                                                                                                     // 4452
	------------------------------------------------------------------------------*/                                  // 4453
	                                                                                                                  // 4454
	                                                                                                                  // 4455
	// report when view receives new events                                                                           // 4456
	function reportEvents(events) { // events are already normalized at this point                                    // 4457
		eventsByID = {};                                                                                                 // 4458
		var i, len=events.length, event;                                                                                 // 4459
		for (i=0; i<len; i++) {                                                                                          // 4460
			event = events[i];                                                                                              // 4461
			if (eventsByID[event._id]) {                                                                                    // 4462
				eventsByID[event._id].push(event);                                                                             // 4463
			}else{                                                                                                          // 4464
				eventsByID[event._id] = [event];                                                                               // 4465
			}                                                                                                               // 4466
		}                                                                                                                // 4467
	}                                                                                                                 // 4468
	                                                                                                                  // 4469
	                                                                                                                  // 4470
	// returns a Date object for an event's end                                                                       // 4471
	function eventEnd(event) {                                                                                        // 4472
		return event.end ? cloneDate(event.end) : defaultEventEnd(event);                                                // 4473
	}                                                                                                                 // 4474
	                                                                                                                  // 4475
	                                                                                                                  // 4476
	                                                                                                                  // 4477
	/* Event Elements                                                                                                 // 4478
	------------------------------------------------------------------------------*/                                  // 4479
	                                                                                                                  // 4480
	                                                                                                                  // 4481
	// report when view creates an element for an event                                                               // 4482
	function reportEventElement(event, element) {                                                                     // 4483
		eventElements.push(element);                                                                                     // 4484
		if (eventElementsByID[event._id]) {                                                                              // 4485
			eventElementsByID[event._id].push(element);                                                                     // 4486
		}else{                                                                                                           // 4487
			eventElementsByID[event._id] = [element];                                                                       // 4488
		}                                                                                                                // 4489
	}                                                                                                                 // 4490
	                                                                                                                  // 4491
	                                                                                                                  // 4492
	function reportEventClear() {                                                                                     // 4493
		eventElements = [];                                                                                              // 4494
		eventElementsByID = {};                                                                                          // 4495
	}                                                                                                                 // 4496
	                                                                                                                  // 4497
	                                                                                                                  // 4498
	// attaches eventClick, eventMouseover, eventMouseout                                                             // 4499
	function eventElementHandlers(event, eventElement) {                                                              // 4500
		eventElement                                                                                                     // 4501
			.click(function(ev) {                                                                                           // 4502
				if (!eventElement.hasClass('ui-draggable-dragging') &&                                                         // 4503
					!eventElement.hasClass('ui-resizable-resizing')) {                                                            // 4504
						return trigger('eventClick', this, event, ev);                                                               // 4505
					}                                                                                                             // 4506
			})                                                                                                              // 4507
			.hover(                                                                                                         // 4508
				function(ev) {                                                                                                 // 4509
					trigger('eventMouseover', this, event, ev);                                                                   // 4510
				},                                                                                                             // 4511
				function(ev) {                                                                                                 // 4512
					trigger('eventMouseout', this, event, ev);                                                                    // 4513
				}                                                                                                              // 4514
			);                                                                                                              // 4515
		// TODO: don't fire eventMouseover/eventMouseout *while* dragging is occuring (on subject element)               // 4516
		// TODO: same for resizing                                                                                       // 4517
	}                                                                                                                 // 4518
	                                                                                                                  // 4519
	                                                                                                                  // 4520
	function showEvents(event, exceptElement) {                                                                       // 4521
		eachEventElement(event, exceptElement, 'show');                                                                  // 4522
	}                                                                                                                 // 4523
	                                                                                                                  // 4524
	                                                                                                                  // 4525
	function hideEvents(event, exceptElement) {                                                                       // 4526
		eachEventElement(event, exceptElement, 'hide');                                                                  // 4527
	}                                                                                                                 // 4528
	                                                                                                                  // 4529
	                                                                                                                  // 4530
	function eachEventElement(event, exceptElement, funcName) {                                                       // 4531
		var elements = eventElementsByID[event._id],                                                                     // 4532
			i, len = elements.length;                                                                                       // 4533
		for (i=0; i<len; i++) {                                                                                          // 4534
			if (!exceptElement || elements[i][0] != exceptElement[0]) {                                                     // 4535
				elements[i][funcName]();                                                                                       // 4536
			}                                                                                                               // 4537
		}                                                                                                                // 4538
	}                                                                                                                 // 4539
	                                                                                                                  // 4540
	                                                                                                                  // 4541
	                                                                                                                  // 4542
	/* Event Modification Reporting                                                                                   // 4543
	---------------------------------------------------------------------------------*/                               // 4544
	                                                                                                                  // 4545
	                                                                                                                  // 4546
	function eventDrop(e, event, dayDelta, minuteDelta, allDay, ev, ui) {                                             // 4547
		var oldAllDay = event.allDay;                                                                                    // 4548
		var eventId = event._id;                                                                                         // 4549
		moveEvents(eventsByID[eventId], dayDelta, minuteDelta, allDay);                                                  // 4550
		trigger(                                                                                                         // 4551
			'eventDrop',                                                                                                    // 4552
			e,                                                                                                              // 4553
			event,                                                                                                          // 4554
			dayDelta,                                                                                                       // 4555
			minuteDelta,                                                                                                    // 4556
			allDay,                                                                                                         // 4557
			function() {                                                                                                    // 4558
				// TODO: investigate cases where this inverse technique might not work                                         // 4559
				moveEvents(eventsByID[eventId], -dayDelta, -minuteDelta, oldAllDay);                                           // 4560
				reportEventChange(eventId);                                                                                    // 4561
			},                                                                                                              // 4562
			ev,                                                                                                             // 4563
			ui                                                                                                              // 4564
		);                                                                                                               // 4565
		reportEventChange(eventId);                                                                                      // 4566
	}                                                                                                                 // 4567
	                                                                                                                  // 4568
	                                                                                                                  // 4569
	function eventResize(e, event, dayDelta, minuteDelta, ev, ui) {                                                   // 4570
		var eventId = event._id;                                                                                         // 4571
		elongateEvents(eventsByID[eventId], dayDelta, minuteDelta);                                                      // 4572
		trigger(                                                                                                         // 4573
			'eventResize',                                                                                                  // 4574
			e,                                                                                                              // 4575
			event,                                                                                                          // 4576
			dayDelta,                                                                                                       // 4577
			minuteDelta,                                                                                                    // 4578
			function() {                                                                                                    // 4579
				// TODO: investigate cases where this inverse technique might not work                                         // 4580
				elongateEvents(eventsByID[eventId], -dayDelta, -minuteDelta);                                                  // 4581
				reportEventChange(eventId);                                                                                    // 4582
			},                                                                                                              // 4583
			ev,                                                                                                             // 4584
			ui                                                                                                              // 4585
		);                                                                                                               // 4586
		reportEventChange(eventId);                                                                                      // 4587
	}                                                                                                                 // 4588
	                                                                                                                  // 4589
	                                                                                                                  // 4590
	                                                                                                                  // 4591
	/* Event Modification Math                                                                                        // 4592
	---------------------------------------------------------------------------------*/                               // 4593
	                                                                                                                  // 4594
	                                                                                                                  // 4595
	function moveEvents(events, dayDelta, minuteDelta, allDay) {                                                      // 4596
		minuteDelta = minuteDelta || 0;                                                                                  // 4597
		for (var e, len=events.length, i=0; i<len; i++) {                                                                // 4598
			e = events[i];                                                                                                  // 4599
			if (allDay !== undefined) {                                                                                     // 4600
				e.allDay = allDay;                                                                                             // 4601
			}                                                                                                               // 4602
			addMinutes(addDays(e.start, dayDelta, true), minuteDelta);                                                      // 4603
			if (e.end) {                                                                                                    // 4604
				e.end = addMinutes(addDays(e.end, dayDelta, true), minuteDelta);                                               // 4605
			}                                                                                                               // 4606
			normalizeEvent(e, options);                                                                                     // 4607
		}                                                                                                                // 4608
	}                                                                                                                 // 4609
	                                                                                                                  // 4610
	                                                                                                                  // 4611
	function elongateEvents(events, dayDelta, minuteDelta) {                                                          // 4612
		minuteDelta = minuteDelta || 0;                                                                                  // 4613
		for (var e, len=events.length, i=0; i<len; i++) {                                                                // 4614
			e = events[i];                                                                                                  // 4615
			e.end = addMinutes(addDays(eventEnd(e), dayDelta, true), minuteDelta);                                          // 4616
			normalizeEvent(e, options);                                                                                     // 4617
		}                                                                                                                // 4618
	}                                                                                                                 // 4619
	                                                                                                                  // 4620
                                                                                                                   // 4621
}                                                                                                                  // 4622
                                                                                                                   // 4623
;;                                                                                                                 // 4624
                                                                                                                   // 4625
function DayEventRenderer() {                                                                                      // 4626
	var t = this;                                                                                                     // 4627
                                                                                                                   // 4628
	                                                                                                                  // 4629
	// exports                                                                                                        // 4630
	t.renderDaySegs = renderDaySegs;                                                                                  // 4631
	t.resizableDayEvent = resizableDayEvent;                                                                          // 4632
	                                                                                                                  // 4633
	                                                                                                                  // 4634
	// imports                                                                                                        // 4635
	var opt = t.opt;                                                                                                  // 4636
	var trigger = t.trigger;                                                                                          // 4637
	var isEventDraggable = t.isEventDraggable;                                                                        // 4638
	var isEventResizable = t.isEventResizable;                                                                        // 4639
	var eventEnd = t.eventEnd;                                                                                        // 4640
	var reportEventElement = t.reportEventElement;                                                                    // 4641
	var showEvents = t.showEvents;                                                                                    // 4642
	var hideEvents = t.hideEvents;                                                                                    // 4643
	var eventResize = t.eventResize;                                                                                  // 4644
	var getRowCnt = t.getRowCnt;                                                                                      // 4645
	var getColCnt = t.getColCnt;                                                                                      // 4646
	var getColWidth = t.getColWidth;                                                                                  // 4647
	var allDayRow = t.allDayRow;                                                                                      // 4648
	var allDayBounds = t.allDayBounds;                                                                                // 4649
	var colContentLeft = t.colContentLeft;                                                                            // 4650
	var colContentRight = t.colContentRight;                                                                          // 4651
	var dayOfWeekCol = t.dayOfWeekCol;                                                                                // 4652
	var dateCell = t.dateCell;                                                                                        // 4653
	var compileDaySegs = t.compileDaySegs;                                                                            // 4654
	var getDaySegmentContainer = t.getDaySegmentContainer;                                                            // 4655
	var bindDaySeg = t.bindDaySeg; //TODO: streamline this                                                            // 4656
	var formatDates = t.calendar.formatDates;                                                                         // 4657
	var renderDayOverlay = t.renderDayOverlay;                                                                        // 4658
	var clearOverlays = t.clearOverlays;                                                                              // 4659
	var clearSelection = t.clearSelection;                                                                            // 4660
	                                                                                                                  // 4661
	                                                                                                                  // 4662
	                                                                                                                  // 4663
	/* Rendering                                                                                                      // 4664
	-----------------------------------------------------------------------------*/                                   // 4665
	                                                                                                                  // 4666
	                                                                                                                  // 4667
	function renderDaySegs(segs, modifiedEventId) {                                                                   // 4668
		var segmentContainer = getDaySegmentContainer();                                                                 // 4669
		var rowDivs;                                                                                                     // 4670
		var rowCnt = getRowCnt();                                                                                        // 4671
		var colCnt = getColCnt();                                                                                        // 4672
		var i = 0;                                                                                                       // 4673
		var rowI;                                                                                                        // 4674
		var levelI;                                                                                                      // 4675
		var colHeights;                                                                                                  // 4676
		var j;                                                                                                           // 4677
		var segCnt = segs.length;                                                                                        // 4678
		var seg;                                                                                                         // 4679
		var top;                                                                                                         // 4680
		var k;                                                                                                           // 4681
		segmentContainer[0].innerHTML = daySegHTML(segs); // faster than .html()                                         // 4682
		daySegElementResolve(segs, segmentContainer.children());                                                         // 4683
		daySegElementReport(segs);                                                                                       // 4684
		daySegHandlers(segs, segmentContainer, modifiedEventId);                                                         // 4685
		daySegCalcHSides(segs);                                                                                          // 4686
		daySegSetWidths(segs);                                                                                           // 4687
		daySegCalcHeights(segs);                                                                                         // 4688
		rowDivs = getRowDivs();                                                                                          // 4689
		// set row heights, calculate event tops (in relation to row top)                                                // 4690
		for (rowI=0; rowI<rowCnt; rowI++) {                                                                              // 4691
			levelI = 0;                                                                                                     // 4692
			colHeights = [];                                                                                                // 4693
			for (j=0; j<colCnt; j++) {                                                                                      // 4694
				colHeights[j] = 0;                                                                                             // 4695
			}                                                                                                               // 4696
			while (i<segCnt && (seg = segs[i]).row == rowI) {                                                               // 4697
				// loop through segs in a row                                                                                  // 4698
				top = arrayMax(colHeights.slice(seg.startCol, seg.endCol));                                                    // 4699
				seg.top = top;                                                                                                 // 4700
				top += seg.outerHeight;                                                                                        // 4701
				for (k=seg.startCol; k<seg.endCol; k++) {                                                                      // 4702
					colHeights[k] = top;                                                                                          // 4703
				}                                                                                                              // 4704
				i++;                                                                                                           // 4705
			}                                                                                                               // 4706
			rowDivs[rowI].height(arrayMax(colHeights));                                                                     // 4707
		}                                                                                                                // 4708
		daySegSetTops(segs, getRowTops(rowDivs));                                                                        // 4709
	}                                                                                                                 // 4710
	                                                                                                                  // 4711
	                                                                                                                  // 4712
	function renderTempDaySegs(segs, adjustRow, adjustTop) {                                                          // 4713
		var tempContainer = $("<div/>");                                                                                 // 4714
		var elements;                                                                                                    // 4715
		var segmentContainer = getDaySegmentContainer();                                                                 // 4716
		var i;                                                                                                           // 4717
		var segCnt = segs.length;                                                                                        // 4718
		var element;                                                                                                     // 4719
		tempContainer[0].innerHTML = daySegHTML(segs); // faster than .html()                                            // 4720
		elements = tempContainer.children();                                                                             // 4721
		segmentContainer.append(elements);                                                                               // 4722
		daySegElementResolve(segs, elements);                                                                            // 4723
		daySegCalcHSides(segs);                                                                                          // 4724
		daySegSetWidths(segs);                                                                                           // 4725
		daySegCalcHeights(segs);                                                                                         // 4726
		daySegSetTops(segs, getRowTops(getRowDivs()));                                                                   // 4727
		elements = [];                                                                                                   // 4728
		for (i=0; i<segCnt; i++) {                                                                                       // 4729
			element = segs[i].element;                                                                                      // 4730
			if (element) {                                                                                                  // 4731
				if (segs[i].row === adjustRow) {                                                                               // 4732
					element.css('top', adjustTop);                                                                                // 4733
				}                                                                                                              // 4734
				elements.push(element[0]);                                                                                     // 4735
			}                                                                                                               // 4736
		}                                                                                                                // 4737
		return $(elements);                                                                                              // 4738
	}                                                                                                                 // 4739
	                                                                                                                  // 4740
	                                                                                                                  // 4741
	function daySegHTML(segs) { // also sets seg.left and seg.outerWidth                                              // 4742
		var rtl = opt('isRTL');                                                                                          // 4743
		var i;                                                                                                           // 4744
		var segCnt=segs.length;                                                                                          // 4745
		var seg;                                                                                                         // 4746
		var event;                                                                                                       // 4747
		var url;                                                                                                         // 4748
		var classes;                                                                                                     // 4749
		var bounds = allDayBounds();                                                                                     // 4750
		var minLeft = bounds.left;                                                                                       // 4751
		var maxLeft = bounds.right;                                                                                      // 4752
		var leftCol;                                                                                                     // 4753
		var rightCol;                                                                                                    // 4754
		var left;                                                                                                        // 4755
		var right;                                                                                                       // 4756
		var skinCss;                                                                                                     // 4757
		var html = '';                                                                                                   // 4758
		// calculate desired position/dimensions, create html                                                            // 4759
		for (i=0; i<segCnt; i++) {                                                                                       // 4760
			seg = segs[i];                                                                                                  // 4761
			event = seg.event;                                                                                              // 4762
			classes = ['fc-event', 'fc-event-hori'];                                                                        // 4763
			if (isEventDraggable(event)) {                                                                                  // 4764
				classes.push('fc-event-draggable');                                                                            // 4765
			}                                                                                                               // 4766
			if (seg.isStart) {                                                                                              // 4767
				classes.push('fc-event-start');                                                                                // 4768
			}                                                                                                               // 4769
			if (seg.isEnd) {                                                                                                // 4770
				classes.push('fc-event-end');                                                                                  // 4771
			}                                                                                                               // 4772
			if (rtl) {                                                                                                      // 4773
				leftCol = dayOfWeekCol(seg.end.getDay()-1);                                                                    // 4774
				rightCol = dayOfWeekCol(seg.start.getDay());                                                                   // 4775
				left = seg.isEnd ? colContentLeft(leftCol) : minLeft;                                                          // 4776
				right = seg.isStart ? colContentRight(rightCol) : maxLeft;                                                     // 4777
			}else{                                                                                                          // 4778
				leftCol = dayOfWeekCol(seg.start.getDay());                                                                    // 4779
				rightCol = dayOfWeekCol(seg.end.getDay()-1);                                                                   // 4780
				left = seg.isStart ? colContentLeft(leftCol) : minLeft;                                                        // 4781
				right = seg.isEnd ? colContentRight(rightCol) : maxLeft;                                                       // 4782
			}                                                                                                               // 4783
			classes = classes.concat(event.className);                                                                      // 4784
			if (event.source) {                                                                                             // 4785
				classes = classes.concat(event.source.className || []);                                                        // 4786
			}                                                                                                               // 4787
			url = event.url;                                                                                                // 4788
			skinCss = getSkinCss(event, opt);                                                                               // 4789
			if (url) {                                                                                                      // 4790
				html += "<a href='" + htmlEscape(url) + "'";                                                                   // 4791
			}else{                                                                                                          // 4792
				html += "<div";                                                                                                // 4793
			}                                                                                                               // 4794
			html +=                                                                                                         // 4795
				" class='" + classes.join(' ') + "'" +                                                                         // 4796
				" style='position:absolute;z-index:8;left:"+left+"px;" + skinCss + "'" +                                       // 4797
				">" +                                                                                                          // 4798
				"<div class='fc-event-inner'>";                                                                                // 4799
			if (!event.allDay && seg.isStart) {                                                                             // 4800
				html +=                                                                                                        // 4801
					"<span class='fc-event-time'>" +                                                                              // 4802
					htmlEscape(formatDates(event.start, event.end, opt('timeFormat'))) +                                          // 4803
					"</span>";                                                                                                    // 4804
			}                                                                                                               // 4805
			html +=                                                                                                         // 4806
				"<span class='fc-event-title'>" + htmlEscape(event.title) + "</span>" +                                        // 4807
				"</div>";                                                                                                      // 4808
			if (seg.isEnd && isEventResizable(event)) {                                                                     // 4809
				html +=                                                                                                        // 4810
					"<div class='ui-resizable-handle ui-resizable-" + (rtl ? 'w' : 'e') + "'>" +                                  // 4811
					"&nbsp;&nbsp;&nbsp;" + // makes hit area a lot better for IE6/7                                               // 4812
					"</div>";                                                                                                     // 4813
			}                                                                                                               // 4814
			html +=                                                                                                         // 4815
				"</" + (url ? "a" : "div" ) + ">";                                                                             // 4816
			seg.left = left;                                                                                                // 4817
			seg.outerWidth = right - left;                                                                                  // 4818
			seg.startCol = leftCol;                                                                                         // 4819
			seg.endCol = rightCol + 1; // needs to be exclusive                                                             // 4820
		}                                                                                                                // 4821
		return html;                                                                                                     // 4822
	}                                                                                                                 // 4823
	                                                                                                                  // 4824
	                                                                                                                  // 4825
	function daySegElementResolve(segs, elements) { // sets seg.element                                               // 4826
		var i;                                                                                                           // 4827
		var segCnt = segs.length;                                                                                        // 4828
		var seg;                                                                                                         // 4829
		var event;                                                                                                       // 4830
		var element;                                                                                                     // 4831
		var triggerRes;                                                                                                  // 4832
		for (i=0; i<segCnt; i++) {                                                                                       // 4833
			seg = segs[i];                                                                                                  // 4834
			event = seg.event;                                                                                              // 4835
			element = $(elements[i]); // faster than .eq()                                                                  // 4836
			triggerRes = trigger('eventRender', event, event, element);                                                     // 4837
			if (triggerRes === false) {                                                                                     // 4838
				element.remove();                                                                                              // 4839
			}else{                                                                                                          // 4840
				if (triggerRes && triggerRes !== true) {                                                                       // 4841
					triggerRes = $(triggerRes)                                                                                    // 4842
						.css({                                                                                                       // 4843
							position: 'absolute',                                                                                       // 4844
							left: seg.left                                                                                              // 4845
						});                                                                                                          // 4846
					element.replaceWith(triggerRes);                                                                              // 4847
					element = triggerRes;                                                                                         // 4848
				}                                                                                                              // 4849
				seg.element = element;                                                                                         // 4850
			}                                                                                                               // 4851
		}                                                                                                                // 4852
	}                                                                                                                 // 4853
	                                                                                                                  // 4854
	                                                                                                                  // 4855
	function daySegElementReport(segs) {                                                                              // 4856
		var i;                                                                                                           // 4857
		var segCnt = segs.length;                                                                                        // 4858
		var seg;                                                                                                         // 4859
		var element;                                                                                                     // 4860
		for (i=0; i<segCnt; i++) {                                                                                       // 4861
			seg = segs[i];                                                                                                  // 4862
			element = seg.element;                                                                                          // 4863
			if (element) {                                                                                                  // 4864
				reportEventElement(seg.event, element);                                                                        // 4865
			}                                                                                                               // 4866
		}                                                                                                                // 4867
	}                                                                                                                 // 4868
	                                                                                                                  // 4869
	                                                                                                                  // 4870
	function daySegHandlers(segs, segmentContainer, modifiedEventId) {                                                // 4871
		var i;                                                                                                           // 4872
		var segCnt = segs.length;                                                                                        // 4873
		var seg;                                                                                                         // 4874
		var element;                                                                                                     // 4875
		var event;                                                                                                       // 4876
		// retrieve elements, run through eventRender callback, bind handlers                                            // 4877
		for (i=0; i<segCnt; i++) {                                                                                       // 4878
			seg = segs[i];                                                                                                  // 4879
			element = seg.element;                                                                                          // 4880
			if (element) {                                                                                                  // 4881
				event = seg.event;                                                                                             // 4882
				if (event._id === modifiedEventId) {                                                                           // 4883
					bindDaySeg(event, element, seg);                                                                              // 4884
				}else{                                                                                                         // 4885
					element[0]._fci = i; // for lazySegBind                                                                       // 4886
				}                                                                                                              // 4887
			}                                                                                                               // 4888
		}                                                                                                                // 4889
		lazySegBind(segmentContainer, segs, bindDaySeg);                                                                 // 4890
	}                                                                                                                 // 4891
	                                                                                                                  // 4892
	                                                                                                                  // 4893
	function daySegCalcHSides(segs) { // also sets seg.key                                                            // 4894
		var i;                                                                                                           // 4895
		var segCnt = segs.length;                                                                                        // 4896
		var seg;                                                                                                         // 4897
		var element;                                                                                                     // 4898
		var key, val;                                                                                                    // 4899
		var hsideCache = {};                                                                                             // 4900
		// record event horizontal sides                                                                                 // 4901
		for (i=0; i<segCnt; i++) {                                                                                       // 4902
			seg = segs[i];                                                                                                  // 4903
			element = seg.element;                                                                                          // 4904
			if (element) {                                                                                                  // 4905
				key = seg.key = cssKey(element[0]);                                                                            // 4906
				val = hsideCache[key];                                                                                         // 4907
				if (val === undefined) {                                                                                       // 4908
					val = hsideCache[key] = hsides(element, true);                                                                // 4909
				}                                                                                                              // 4910
				seg.hsides = val;                                                                                              // 4911
			}                                                                                                               // 4912
		}                                                                                                                // 4913
	}                                                                                                                 // 4914
	                                                                                                                  // 4915
	                                                                                                                  // 4916
	function daySegSetWidths(segs) {                                                                                  // 4917
		var i;                                                                                                           // 4918
		var segCnt = segs.length;                                                                                        // 4919
		var seg;                                                                                                         // 4920
		var element;                                                                                                     // 4921
		for (i=0; i<segCnt; i++) {                                                                                       // 4922
			seg = segs[i];                                                                                                  // 4923
			element = seg.element;                                                                                          // 4924
			if (element) {                                                                                                  // 4925
				element[0].style.width = Math.max(0, seg.outerWidth - seg.hsides) + 'px';                                      // 4926
			}                                                                                                               // 4927
		}                                                                                                                // 4928
	}                                                                                                                 // 4929
	                                                                                                                  // 4930
	                                                                                                                  // 4931
	function daySegCalcHeights(segs) {                                                                                // 4932
		var i;                                                                                                           // 4933
		var segCnt = segs.length;                                                                                        // 4934
		var seg;                                                                                                         // 4935
		var element;                                                                                                     // 4936
		var key, val;                                                                                                    // 4937
		var vmarginCache = {};                                                                                           // 4938
		// record event heights                                                                                          // 4939
		for (i=0; i<segCnt; i++) {                                                                                       // 4940
			seg = segs[i];                                                                                                  // 4941
			element = seg.element;                                                                                          // 4942
			if (element) {                                                                                                  // 4943
				key = seg.key; // created in daySegCalcHSides                                                                  // 4944
				val = vmarginCache[key];                                                                                       // 4945
				if (val === undefined) {                                                                                       // 4946
					val = vmarginCache[key] = vmargins(element);                                                                  // 4947
				}                                                                                                              // 4948
				seg.outerHeight = element[0].offsetHeight + val;                                                               // 4949
			}                                                                                                               // 4950
		}                                                                                                                // 4951
	}                                                                                                                 // 4952
	                                                                                                                  // 4953
	                                                                                                                  // 4954
	function getRowDivs() {                                                                                           // 4955
		var i;                                                                                                           // 4956
		var rowCnt = getRowCnt();                                                                                        // 4957
		var rowDivs = [];                                                                                                // 4958
		for (i=0; i<rowCnt; i++) {                                                                                       // 4959
			rowDivs[i] = allDayRow(i)                                                                                       // 4960
				.find('div.fc-day-content > div'); // optimal selector?                                                        // 4961
		}                                                                                                                // 4962
		return rowDivs;                                                                                                  // 4963
	}                                                                                                                 // 4964
	                                                                                                                  // 4965
	                                                                                                                  // 4966
	function getRowTops(rowDivs) {                                                                                    // 4967
		var i;                                                                                                           // 4968
		var rowCnt = rowDivs.length;                                                                                     // 4969
		var tops = [];                                                                                                   // 4970
		for (i=0; i<rowCnt; i++) {                                                                                       // 4971
			tops[i] = rowDivs[i][0].offsetTop; // !!?? but this means the element needs position:relative if in a table cell!!!!
		}                                                                                                                // 4973
		return tops;                                                                                                     // 4974
	}                                                                                                                 // 4975
	                                                                                                                  // 4976
	                                                                                                                  // 4977
	function daySegSetTops(segs, rowTops) { // also triggers eventAfterRender                                         // 4978
		var i;                                                                                                           // 4979
		var segCnt = segs.length;                                                                                        // 4980
		var seg;                                                                                                         // 4981
		var element;                                                                                                     // 4982
		var event;                                                                                                       // 4983
		for (i=0; i<segCnt; i++) {                                                                                       // 4984
			seg = segs[i];                                                                                                  // 4985
			element = seg.element;                                                                                          // 4986
			if (element) {                                                                                                  // 4987
				element[0].style.top = rowTops[seg.row] + (seg.top||0) + 'px';                                                 // 4988
				event = seg.event;                                                                                             // 4989
				trigger('eventAfterRender', event, event, element);                                                            // 4990
			}                                                                                                               // 4991
		}                                                                                                                // 4992
	}                                                                                                                 // 4993
	                                                                                                                  // 4994
	                                                                                                                  // 4995
	                                                                                                                  // 4996
	/* Resizing                                                                                                       // 4997
	-----------------------------------------------------------------------------------*/                             // 4998
	                                                                                                                  // 4999
	                                                                                                                  // 5000
	function resizableDayEvent(event, element, seg) {                                                                 // 5001
		var rtl = opt('isRTL');                                                                                          // 5002
		var direction = rtl ? 'w' : 'e';                                                                                 // 5003
		var handle = element.find('.ui-resizable-' + direction); // TODO: stop using this class because we aren't using jqui for this
		var isResizing = false;                                                                                          // 5005
		                                                                                                                 // 5006
		// TODO: look into using jquery-ui mouse widget for this stuff                                                   // 5007
		disableTextSelection(element); // prevent native <a> selection for IE                                            // 5008
		element                                                                                                          // 5009
			.mousedown(function(ev) { // prevent native <a> selection for others                                            // 5010
				ev.preventDefault();                                                                                           // 5011
			})                                                                                                              // 5012
			.click(function(ev) {                                                                                           // 5013
				if (isResizing) {                                                                                              // 5014
					ev.preventDefault(); // prevent link from being visited (only method that worked in IE6)                      // 5015
					ev.stopImmediatePropagation(); // prevent fullcalendar eventClick handler from being called                   // 5016
					                               // (eventElementHandlers needs to be bound after resizableDayEvent)            // 5017
				}                                                                                                              // 5018
			});                                                                                                             // 5019
		                                                                                                                 // 5020
		handle.mousedown(function(ev) {                                                                                  // 5021
			if (ev.which != 1) {                                                                                            // 5022
				return; // needs to be left mouse button                                                                       // 5023
			}                                                                                                               // 5024
			isResizing = true;                                                                                              // 5025
			var hoverListener = t.getHoverListener();                                                                       // 5026
			var rowCnt = getRowCnt();                                                                                       // 5027
			var colCnt = getColCnt();                                                                                       // 5028
			var dis = rtl ? -1 : 1;                                                                                         // 5029
			var dit = rtl ? colCnt-1 : 0;                                                                                   // 5030
			var elementTop = element.css('top');                                                                            // 5031
			var dayDelta;                                                                                                   // 5032
			var helpers;                                                                                                    // 5033
			var eventCopy = $.extend({}, event);                                                                            // 5034
			var minCell = dateCell(event.start);                                                                            // 5035
			clearSelection();                                                                                               // 5036
			$('body')                                                                                                       // 5037
				.css('cursor', direction + '-resize')                                                                          // 5038
				.one('mouseup', mouseup);                                                                                      // 5039
			trigger('eventResizeStart', this, event, ev);                                                                   // 5040
			hoverListener.start(function(cell, origCell) {                                                                  // 5041
				if (cell) {                                                                                                    // 5042
					var r = Math.max(minCell.row, cell.row);                                                                      // 5043
					var c = cell.col;                                                                                             // 5044
					if (rowCnt == 1) {                                                                                            // 5045
						r = 0; // hack for all-day area in agenda views                                                              // 5046
					}                                                                                                             // 5047
					if (r == minCell.row) {                                                                                       // 5048
						if (rtl) {                                                                                                   // 5049
							c = Math.min(minCell.col, c);                                                                               // 5050
						}else{                                                                                                       // 5051
							c = Math.max(minCell.col, c);                                                                               // 5052
						}                                                                                                            // 5053
					}                                                                                                             // 5054
					dayDelta = (r*7 + c*dis+dit) - (origCell.row*7 + origCell.col*dis+dit);                                       // 5055
					var newEnd = addDays(eventEnd(event), dayDelta, true);                                                        // 5056
					if (dayDelta) {                                                                                               // 5057
						eventCopy.end = newEnd;                                                                                      // 5058
						var oldHelpers = helpers;                                                                                    // 5059
						helpers = renderTempDaySegs(compileDaySegs([eventCopy]), seg.row, elementTop);                               // 5060
						helpers.find('*').css('cursor', direction + '-resize');                                                      // 5061
						if (oldHelpers) {                                                                                            // 5062
							oldHelpers.remove();                                                                                        // 5063
						}                                                                                                            // 5064
						hideEvents(event);                                                                                           // 5065
					}else{                                                                                                        // 5066
						if (helpers) {                                                                                               // 5067
							showEvents(event);                                                                                          // 5068
							helpers.remove();                                                                                           // 5069
							helpers = null;                                                                                             // 5070
						}                                                                                                            // 5071
					}                                                                                                             // 5072
					clearOverlays();                                                                                              // 5073
					renderDayOverlay(event.start, addDays(cloneDate(newEnd), 1)); // coordinate grid already rebuild at hoverListener.start
				}                                                                                                              // 5075
			}, ev);                                                                                                         // 5076
			                                                                                                                // 5077
			function mouseup(ev) {                                                                                          // 5078
				trigger('eventResizeStop', this, event, ev);                                                                   // 5079
				$('body').css('cursor', '');                                                                                   // 5080
				hoverListener.stop();                                                                                          // 5081
				clearOverlays();                                                                                               // 5082
				if (dayDelta) {                                                                                                // 5083
					eventResize(this, event, dayDelta, 0, ev);                                                                    // 5084
					// event redraw will clear helpers                                                                            // 5085
				}                                                                                                              // 5086
				// otherwise, the drag handler already restored the old events                                                 // 5087
				                                                                                                               // 5088
				setTimeout(function() { // make this happen after the element's click event                                    // 5089
					isResizing = false;                                                                                           // 5090
				},0);                                                                                                          // 5091
			}                                                                                                               // 5092
			                                                                                                                // 5093
		});                                                                                                              // 5094
	}                                                                                                                 // 5095
	                                                                                                                  // 5096
                                                                                                                   // 5097
}                                                                                                                  // 5098
                                                                                                                   // 5099
;;                                                                                                                 // 5100
                                                                                                                   // 5101
//BUG: unselect needs to be triggered when events are dragged+dropped                                              // 5102
                                                                                                                   // 5103
function SelectionManager() {                                                                                      // 5104
	var t = this;                                                                                                     // 5105
	                                                                                                                  // 5106
	                                                                                                                  // 5107
	// exports                                                                                                        // 5108
	t.select = select;                                                                                                // 5109
	t.unselect = unselect;                                                                                            // 5110
	t.reportSelection = reportSelection;                                                                              // 5111
	t.daySelectionMousedown = daySelectionMousedown;                                                                  // 5112
	                                                                                                                  // 5113
	                                                                                                                  // 5114
	// imports                                                                                                        // 5115
	var opt = t.opt;                                                                                                  // 5116
	var trigger = t.trigger;                                                                                          // 5117
	var defaultSelectionEnd = t.defaultSelectionEnd;                                                                  // 5118
	var renderSelection = t.renderSelection;                                                                          // 5119
	var clearSelection = t.clearSelection;                                                                            // 5120
	                                                                                                                  // 5121
	                                                                                                                  // 5122
	// locals                                                                                                         // 5123
	var selected = false;                                                                                             // 5124
                                                                                                                   // 5125
                                                                                                                   // 5126
                                                                                                                   // 5127
	// unselectAuto                                                                                                   // 5128
	if (opt('selectable') && opt('unselectAuto')) {                                                                   // 5129
		$(document).mousedown(function(ev) {                                                                             // 5130
			var ignore = opt('unselectCancel');                                                                             // 5131
			if (ignore) {                                                                                                   // 5132
				if ($(ev.target).parents(ignore).length) { // could be optimized to stop after first match                     // 5133
					return;                                                                                                       // 5134
				}                                                                                                              // 5135
			}                                                                                                               // 5136
			unselect(ev);                                                                                                   // 5137
		});                                                                                                              // 5138
	}                                                                                                                 // 5139
	                                                                                                                  // 5140
                                                                                                                   // 5141
	function select(startDate, endDate, allDay) {                                                                     // 5142
		unselect();                                                                                                      // 5143
		if (!endDate) {                                                                                                  // 5144
			endDate = defaultSelectionEnd(startDate, allDay);                                                               // 5145
		}                                                                                                                // 5146
		renderSelection(startDate, endDate, allDay);                                                                     // 5147
		reportSelection(startDate, endDate, allDay);                                                                     // 5148
	}                                                                                                                 // 5149
	                                                                                                                  // 5150
	                                                                                                                  // 5151
	function unselect(ev) {                                                                                           // 5152
		if (selected) {                                                                                                  // 5153
			selected = false;                                                                                               // 5154
			clearSelection();                                                                                               // 5155
			trigger('unselect', null, ev);                                                                                  // 5156
		}                                                                                                                // 5157
	}                                                                                                                 // 5158
	                                                                                                                  // 5159
	                                                                                                                  // 5160
	function reportSelection(startDate, endDate, allDay, ev) {                                                        // 5161
		selected = true;                                                                                                 // 5162
		trigger('select', null, startDate, endDate, allDay, ev);                                                         // 5163
	}                                                                                                                 // 5164
	                                                                                                                  // 5165
	                                                                                                                  // 5166
	function daySelectionMousedown(ev) { // not really a generic manager method, oh well                              // 5167
		var cellDate = t.cellDate;                                                                                       // 5168
		var cellIsAllDay = t.cellIsAllDay;                                                                               // 5169
		var hoverListener = t.getHoverListener();                                                                        // 5170
		var reportDayClick = t.reportDayClick; // this is hacky and sort of weird                                        // 5171
		if (ev.which == 1 && opt('selectable')) { // which==1 means left mouse button                                    // 5172
			unselect(ev);                                                                                                   // 5173
			var _mousedownElement = this;                                                                                   // 5174
			var dates;                                                                                                      // 5175
			hoverListener.start(function(cell, origCell) { // TODO: maybe put cellDate/cellIsAllDay info in cell            // 5176
				clearSelection();                                                                                              // 5177
				if (cell && cellIsAllDay(cell)) {                                                                              // 5178
					dates = [ cellDate(origCell), cellDate(cell) ].sort(cmp);                                                     // 5179
					renderSelection(dates[0], dates[1], true);                                                                    // 5180
				}else{                                                                                                         // 5181
					dates = null;                                                                                                 // 5182
				}                                                                                                              // 5183
			}, ev);                                                                                                         // 5184
			$(document).one('mouseup', function(ev) {                                                                       // 5185
				hoverListener.stop();                                                                                          // 5186
				if (dates) {                                                                                                   // 5187
					if (+dates[0] == +dates[1]) {                                                                                 // 5188
						reportDayClick(dates[0], true, ev);                                                                          // 5189
					}                                                                                                             // 5190
					reportSelection(dates[0], dates[1], true, ev);                                                                // 5191
				}                                                                                                              // 5192
			});                                                                                                             // 5193
		}                                                                                                                // 5194
	}                                                                                                                 // 5195
                                                                                                                   // 5196
                                                                                                                   // 5197
}                                                                                                                  // 5198
                                                                                                                   // 5199
;;                                                                                                                 // 5200
                                                                                                                   // 5201
function OverlayManager() {                                                                                        // 5202
	var t = this;                                                                                                     // 5203
	                                                                                                                  // 5204
	                                                                                                                  // 5205
	// exports                                                                                                        // 5206
	t.renderOverlay = renderOverlay;                                                                                  // 5207
	t.clearOverlays = clearOverlays;                                                                                  // 5208
	                                                                                                                  // 5209
	                                                                                                                  // 5210
	// locals                                                                                                         // 5211
	var usedOverlays = [];                                                                                            // 5212
	var unusedOverlays = [];                                                                                          // 5213
	                                                                                                                  // 5214
	                                                                                                                  // 5215
	function renderOverlay(rect, parent) {                                                                            // 5216
		var e = unusedOverlays.shift();                                                                                  // 5217
		if (!e) {                                                                                                        // 5218
			e = $("<div class='fc-cell-overlay' style='position:absolute;z-index:3'/>");                                    // 5219
		}                                                                                                                // 5220
		if (e[0].parentNode != parent[0]) {                                                                              // 5221
			e.appendTo(parent);                                                                                             // 5222
		}                                                                                                                // 5223
		usedOverlays.push(e.css(rect).show());                                                                           // 5224
		return e;                                                                                                        // 5225
	}                                                                                                                 // 5226
	                                                                                                                  // 5227
                                                                                                                   // 5228
	function clearOverlays() {                                                                                        // 5229
		var e;                                                                                                           // 5230
		while (e = usedOverlays.shift()) {                                                                               // 5231
			unusedOverlays.push(e.hide().unbind());                                                                         // 5232
		}                                                                                                                // 5233
	}                                                                                                                 // 5234
                                                                                                                   // 5235
                                                                                                                   // 5236
}                                                                                                                  // 5237
                                                                                                                   // 5238
;;                                                                                                                 // 5239
                                                                                                                   // 5240
function CoordinateGrid(buildFunc) {                                                                               // 5241
                                                                                                                   // 5242
	var t = this;                                                                                                     // 5243
	var rows;                                                                                                         // 5244
	var cols;                                                                                                         // 5245
	                                                                                                                  // 5246
	                                                                                                                  // 5247
	t.build = function() {                                                                                            // 5248
		rows = [];                                                                                                       // 5249
		cols = [];                                                                                                       // 5250
		buildFunc(rows, cols);                                                                                           // 5251
	};                                                                                                                // 5252
	                                                                                                                  // 5253
	                                                                                                                  // 5254
	t.cell = function(x, y) {                                                                                         // 5255
		var rowCnt = rows.length;                                                                                        // 5256
		var colCnt = cols.length;                                                                                        // 5257
		var i, r=-1, c=-1;                                                                                               // 5258
		for (i=0; i<rowCnt; i++) {                                                                                       // 5259
			if (y >= rows[i][0] && y < rows[i][1]) {                                                                        // 5260
				r = i;                                                                                                         // 5261
				break;                                                                                                         // 5262
			}                                                                                                               // 5263
		}                                                                                                                // 5264
		for (i=0; i<colCnt; i++) {                                                                                       // 5265
			if (x >= cols[i][0] && x < cols[i][1]) {                                                                        // 5266
				c = i;                                                                                                         // 5267
				break;                                                                                                         // 5268
			}                                                                                                               // 5269
		}                                                                                                                // 5270
		return (r>=0 && c>=0) ? { row:r, col:c } : null;                                                                 // 5271
	};                                                                                                                // 5272
	                                                                                                                  // 5273
	                                                                                                                  // 5274
	t.rect = function(row0, col0, row1, col1, originElement) { // row1,col1 is inclusive                              // 5275
		var origin = originElement.offset();                                                                             // 5276
		return {                                                                                                         // 5277
			top: rows[row0][0] - origin.top,                                                                                // 5278
			left: cols[col0][0] - origin.left,                                                                              // 5279
			width: cols[col1][1] - cols[col0][0],                                                                           // 5280
			height: rows[row1][1] - rows[row0][0]                                                                           // 5281
		};                                                                                                               // 5282
	};                                                                                                                // 5283
                                                                                                                   // 5284
}                                                                                                                  // 5285
                                                                                                                   // 5286
;;                                                                                                                 // 5287
                                                                                                                   // 5288
function HoverListener(coordinateGrid) {                                                                           // 5289
                                                                                                                   // 5290
                                                                                                                   // 5291
	var t = this;                                                                                                     // 5292
	var bindType;                                                                                                     // 5293
	var change;                                                                                                       // 5294
	var firstCell;                                                                                                    // 5295
	var cell;                                                                                                         // 5296
	                                                                                                                  // 5297
	                                                                                                                  // 5298
	t.start = function(_change, ev, _bindType) {                                                                      // 5299
		change = _change;                                                                                                // 5300
		firstCell = cell = null;                                                                                         // 5301
		coordinateGrid.build();                                                                                          // 5302
		mouse(ev);                                                                                                       // 5303
		bindType = _bindType || 'mousemove';                                                                             // 5304
		$(document).bind(bindType, mouse);                                                                               // 5305
	};                                                                                                                // 5306
	                                                                                                                  // 5307
	                                                                                                                  // 5308
	function mouse(ev) {                                                                                              // 5309
		_fixUIEvent(ev); // see below                                                                                    // 5310
		var newCell = coordinateGrid.cell(ev.pageX, ev.pageY);                                                           // 5311
		if (!newCell != !cell || newCell && (newCell.row != cell.row || newCell.col != cell.col)) {                      // 5312
			if (newCell) {                                                                                                  // 5313
				if (!firstCell) {                                                                                              // 5314
					firstCell = newCell;                                                                                          // 5315
				}                                                                                                              // 5316
				change(newCell, firstCell, newCell.row-firstCell.row, newCell.col-firstCell.col);                              // 5317
			}else{                                                                                                          // 5318
				change(newCell, firstCell);                                                                                    // 5319
			}                                                                                                               // 5320
			cell = newCell;                                                                                                 // 5321
		}                                                                                                                // 5322
	}                                                                                                                 // 5323
	                                                                                                                  // 5324
	                                                                                                                  // 5325
	t.stop = function() {                                                                                             // 5326
		$(document).unbind(bindType, mouse);                                                                             // 5327
		return cell;                                                                                                     // 5328
	};                                                                                                                // 5329
	                                                                                                                  // 5330
	                                                                                                                  // 5331
}                                                                                                                  // 5332
                                                                                                                   // 5333
                                                                                                                   // 5334
                                                                                                                   // 5335
// this fix was only necessary for jQuery UI 1.8.16 (and jQuery 1.7 or 1.7.1)                                      // 5336
// upgrading to jQuery UI 1.8.17 (and using either jQuery 1.7 or 1.7.1) fixed the problem                          // 5337
// but keep this in here for 1.8.16 users                                                                          // 5338
// and maybe remove it down the line                                                                               // 5339
                                                                                                                   // 5340
function _fixUIEvent(event) { // for issue 1168                                                                    // 5341
	if (event.pageX === undefined) {                                                                                  // 5342
		event.pageX = event.originalEvent.pageX;                                                                         // 5343
		event.pageY = event.originalEvent.pageY;                                                                         // 5344
	}                                                                                                                 // 5345
}                                                                                                                  // 5346
;;                                                                                                                 // 5347
                                                                                                                   // 5348
function HorizontalPositionCache(getElement) {                                                                     // 5349
                                                                                                                   // 5350
	var t = this,                                                                                                     // 5351
		elements = {},                                                                                                   // 5352
		lefts = {},                                                                                                      // 5353
		rights = {};                                                                                                     // 5354
		                                                                                                                 // 5355
	function e(i) {                                                                                                   // 5356
		return elements[i] = elements[i] || getElement(i);                                                               // 5357
	}                                                                                                                 // 5358
	                                                                                                                  // 5359
	t.left = function(i) {                                                                                            // 5360
		return lefts[i] = lefts[i] === undefined ? e(i).position().left : lefts[i];                                      // 5361
	};                                                                                                                // 5362
	                                                                                                                  // 5363
	t.right = function(i) {                                                                                           // 5364
		return rights[i] = rights[i] === undefined ? t.left(i) + e(i).width() : rights[i];                               // 5365
	};                                                                                                                // 5366
	                                                                                                                  // 5367
	t.clear = function() {                                                                                            // 5368
		elements = {};                                                                                                   // 5369
		lefts = {};                                                                                                      // 5370
		rights = {};                                                                                                     // 5371
	};                                                                                                                // 5372
	                                                                                                                  // 5373
}                                                                                                                  // 5374
                                                                                                                   // 5375
;;                                                                                                                 // 5376
                                                                                                                   // 5377
})(jQuery);                                                                                                        // 5378
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      // 5388
}).call(this);                                                                                                        // 5389
                                                                                                                      // 5390
                                                                                                                      // 5391
                                                                                                                      // 5392
                                                                                                                      // 5393
                                                                                                                      // 5394
                                                                                                                      // 5395
(function () {                                                                                                        // 5396
                                                                                                                      // 5397
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/mrt:fullcalendar/lib/gcal.js                                                                           //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
/*!                                                                                                                // 1
 * FullCalendar v1.6.1 Google Calendar Plugin                                                                      // 2
 * Docs & License: http://arshaw.com/fullcalendar/                                                                 // 3
 * (c) 2013 Adam Shaw                                                                                              // 4
 */                                                                                                                // 5
                                                                                                                   // 6
(function($) {                                                                                                     // 7
                                                                                                                   // 8
                                                                                                                   // 9
var fc = $.fullCalendar;                                                                                           // 10
var formatDate = fc.formatDate;                                                                                    // 11
var parseISO8601 = fc.parseISO8601;                                                                                // 12
var addDays = fc.addDays;                                                                                          // 13
var applyAll = fc.applyAll;                                                                                        // 14
                                                                                                                   // 15
                                                                                                                   // 16
fc.sourceNormalizers.push(function(sourceOptions) {                                                                // 17
	if (sourceOptions.dataType == 'gcal' ||                                                                           // 18
		sourceOptions.dataType === undefined &&                                                                          // 19
		(sourceOptions.url || '').match(/^(http|https):\/\/www.google.com\/calendar\/feeds\//)) {                        // 20
			sourceOptions.dataType = 'gcal';                                                                                // 21
			if (sourceOptions.editable === undefined) {                                                                     // 22
				sourceOptions.editable = false;                                                                                // 23
			}                                                                                                               // 24
		}                                                                                                                // 25
});                                                                                                                // 26
                                                                                                                   // 27
                                                                                                                   // 28
fc.sourceFetchers.push(function(sourceOptions, start, end) {                                                       // 29
	if (sourceOptions.dataType == 'gcal') {                                                                           // 30
		return transformOptions(sourceOptions, start, end);                                                              // 31
	}                                                                                                                 // 32
});                                                                                                                // 33
                                                                                                                   // 34
                                                                                                                   // 35
function transformOptions(sourceOptions, start, end) {                                                             // 36
                                                                                                                   // 37
	var success = sourceOptions.success;                                                                              // 38
	var data = $.extend({}, sourceOptions.data || {}, {                                                               // 39
		'start-min': formatDate(start, 'u'),                                                                             // 40
		'start-max': formatDate(end, 'u'),                                                                               // 41
		'singleevents': true,                                                                                            // 42
		'max-results': 9999                                                                                              // 43
	});                                                                                                               // 44
	                                                                                                                  // 45
	var ctz = sourceOptions.currentTimezone;                                                                          // 46
	if (ctz) {                                                                                                        // 47
		data.ctz = ctz = ctz.replace(' ', '_');                                                                          // 48
	}                                                                                                                 // 49
                                                                                                                   // 50
	return $.extend({}, sourceOptions, {                                                                              // 51
		url: sourceOptions.url.replace(/\/basic$/, '/full') + '?alt=json-in-script&callback=?',                          // 52
		dataType: 'jsonp',                                                                                               // 53
		data: data,                                                                                                      // 54
		startParam: false,                                                                                               // 55
		endParam: false,                                                                                                 // 56
		success: function(data) {                                                                                        // 57
			var events = [];                                                                                                // 58
			if (data.feed.entry) {                                                                                          // 59
				$.each(data.feed.entry, function(i, entry) {                                                                   // 60
					var startStr = entry['gd$when'][0]['startTime'];                                                              // 61
					var start = parseISO8601(startStr, true);                                                                     // 62
					var end = parseISO8601(entry['gd$when'][0]['endTime'], true);                                                 // 63
					var allDay = startStr.indexOf('T') == -1;                                                                     // 64
					var url;                                                                                                      // 65
					$.each(entry.link, function(i, link) {                                                                        // 66
						if (link.type == 'text/html') {                                                                              // 67
							url = link.href;                                                                                            // 68
							if (ctz) {                                                                                                  // 69
								url += (url.indexOf('?') == -1 ? '?' : '&') + 'ctz=' + ctz;                                                // 70
							}                                                                                                           // 71
						}                                                                                                            // 72
					});                                                                                                           // 73
					if (allDay) {                                                                                                 // 74
						addDays(end, -1); // make inclusive                                                                          // 75
					}                                                                                                             // 76
					events.push({                                                                                                 // 77
						id: entry['gCal$uid']['value'],                                                                              // 78
						title: entry['title']['$t'],                                                                                 // 79
						url: url,                                                                                                    // 80
						start: start,                                                                                                // 81
						end: end,                                                                                                    // 82
						allDay: allDay,                                                                                              // 83
						location: entry['gd$where'][0]['valueString'],                                                               // 84
						description: entry['content']['$t']                                                                          // 85
					});                                                                                                           // 86
				});                                                                                                            // 87
			}                                                                                                               // 88
			var args = [events].concat(Array.prototype.slice.call(arguments, 1));                                           // 89
			var res = applyAll(success, this, args);                                                                        // 90
			if ($.isArray(res)) {                                                                                           // 91
				return res;                                                                                                    // 92
			}                                                                                                               // 93
			return events;                                                                                                  // 94
		}                                                                                                                // 95
	});                                                                                                               // 96
	                                                                                                                  // 97
}                                                                                                                  // 98
                                                                                                                   // 99
                                                                                                                   // 100
// legacy                                                                                                          // 101
fc.gcalFeed = function(url, sourceOptions) {                                                                       // 102
	return $.extend({}, sourceOptions, { url: url, dataType: 'gcal' });                                               // 103
};                                                                                                                 // 104
                                                                                                                   // 105
                                                                                                                   // 106
})(jQuery);                                                                                                        // 107
                                                                                                                   // 108
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      // 5513
}).call(this);                                                                                                        // 5514
                                                                                                                      // 5515
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['mrt:fullcalendar'] = {};

})();
