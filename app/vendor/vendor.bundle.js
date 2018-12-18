var vendor_lib =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	/*eslint-disable no-unused-vars*/
	/*!
	 * jQuery JavaScript Library v3.1.0
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2016-07-07T21:44Z
	 */
	( function( global, factory ) {

		"use strict";

		if ( typeof module === "object" && typeof module.exports === "object" ) {

			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";

	var arr = [];

	var document = window.document;

	var getProto = Object.getPrototypeOf;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var fnToString = hasOwn.toString;

	var ObjectFunctionString = fnToString.call( Object );

	var support = {};



		function DOMEval( code, doc ) {
			doc = doc || document;

			var script = doc.createElement( "script" );

			script.text = code;
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}
	/* global Symbol */
	// Defining this global in .eslintrc would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module



	var
		version = "3.1.0",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type( obj );
			return ( type === "number" || type === "string" ) &&

				// parseFloat NaNs numeric-cast false positives ("")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				!isNaN( obj - parseFloat( obj ) );
		},

		isPlainObject: function( obj ) {
			var proto, Ctor;

			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}

			proto = getProto( obj );

			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}

			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},

		isEmptyObject: function( obj ) {

			/* eslint-disable no-unused-vars */
			// See https://github.com/eslint/eslint/issues/6125
			var name;

			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android <=2.3 only (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			DOMEval( code );
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 13
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android <=4.0 only
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.0
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-01-04
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,

		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {

				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}

				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}

			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},

		disabledAncestor = addCombinator(
			function( elem ) {
				return elem.disabled === true;
			},
			{ dir: "parentNode", next: "legend" }
		);

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[i] = "#" + nid + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement("fieldset");

		try {
			return !!fn( el );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}
			// release memory in IE
			el = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {
		// Known :disabled false positives:
		// IE: *[disabled]:not(button, input, select, textarea, optgroup, option, menuitem, fieldset)
		// not IE: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {

			// Check form elements and option elements for explicit disabling
			return "label" in elem && elem.disabled === disabled ||
				"form" in elem && elem.disabled === disabled ||

				// Check non-disabled form elements for fieldset[disabled] ancestors
				"form" in elem && elem.disabled === false && (
					// Support: IE6-11+
					// Ancestry is covered for us
					elem.isDisabled === disabled ||

					// Otherwise, assume any non-<option> under fieldset[disabled] is disabled
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						("label" in elem || !disabledAncestor( elem )) !== disabled
				);
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( preferredDoc !== document &&
			(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( el ) {
			el.className = "i";
			return !el.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( el ) {
			el.appendChild( document.createComment("") );
			return !el.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( el ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";

				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll(":enabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll(":disabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( el ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.escape = function( sel ) {
		return (sel + "").replace( rcssescape, fcssescape );
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( (oldCache = uniqueCache[ key ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( el ) {
		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( el ) {
		return el.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;

	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;




	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				return !!qualifier.call( elem, i, elem ) !== not;
			} );

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			ret = this.pushStack( [] );

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						if ( elem ) {

							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );

			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :

							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {

							matched.push( cur );
							break;
						}
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}

	function adoptValue( value, resolve, reject ) {
		var method;

		try {

			// Check for promise aspect first to privilege synchronous behavior
			if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );

			// Other thenables
			} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );

			// Other non-thenables
			} else {

				// Support: Android 4.0 only
				// Strict mode functions invoked without .call/.apply get global-object context
				resolve.call( undefined, value );
			}

		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( value ) {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.call( undefined, value );
		}
	}

	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},

					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;

						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {

								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;

										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}

										returned = handler.apply( that, args );

										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}

										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&

											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;

										// Handle a returned thenable
										if ( jQuery.isFunction( then ) ) {

											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);

											// Normal processors (resolve) also hook into progress
											} else {

												// ...and disregard older resolution values
												maxDepth++;

												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}

										// Handle all other returned values
										} else {

											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}

											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},

									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {

												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}

												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {

													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}

													deferred.rejectWith( that, args );
												}
											}
										};

								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {

									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}

						return jQuery.Deferred( function( newDefer ) {

							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);

							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);

							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];

				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add(
						function() {

							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},

						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,

						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock
					);
				}

				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );

				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};

				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( singleValue ) {
			var

				// count of uncompleted subordinates
				remaining = arguments.length,

				// count of unprocessed arguments
				i = remaining,

				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),

				// the master Deferred
				master = jQuery.Deferred(),

				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							master.resolveWith( resolveContexts, resolveValues );
						}
					};
				};

			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( master.state() === "pending" ||
					jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

					return master.then();
				}
			}

			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
			}

			return master.promise();
		}
	} );


	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

	jQuery.Deferred.exceptionHook = function( error, stack ) {

		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};




	jQuery.readyException = function( error ) {
		window.setTimeout( function() {
			throw error;
		} );
	};




	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();

	jQuery.fn.ready = function( fn ) {

		readyList
			.then( fn )

			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch( function( error ) {
				jQuery.readyException( error );
			} );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );

	jQuery.ready.then = readyList.then;

	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );

	} else {

		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );

		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		cache: function( owner ) {

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ jQuery.camelCase( data ) ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ jQuery.camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :

				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
		},
		access: function( owner, key, value ) {

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				return this.get( owner, key );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key !== undefined ) {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( jQuery.camelCase );
				} else {
					key = jQuery.camelCase( key );

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnotwhite ) || [] );
				}

				i = key.length;

				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :

						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? JSON.parse( data ) :
						data;
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each( function() {

					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHiddenWithinTree = function( elem, el ) {

			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;

			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&

				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				jQuery.contains( elem.ownerDocument, elem ) &&

				jQuery.css( elem, "display" ) === "none";
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};




	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() {
					return tween.cur();
				} :
				function() {
					return jQuery.css( elem, prop, "" );
				},
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}


	var defaultDisplayMap = {};

	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];

		if ( display ) {
			return display;
		}

		temp = doc.body.appendChild( doc.createElement( nodeName ) ),
		display = jQuery.css( temp, "display" );

		temp.parentNode.removeChild( temp );

		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;

		return display;
	}

	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;

		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			display = elem.style.display;
			if ( show ) {

				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";

					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}

		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}

		return elements;
	}

	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE <=9 only
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	var documentElement = document.documentElement;



	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( nativeEvent ) {

			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix( nativeEvent );

			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;

			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}

			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Support: IE <=9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox <=42
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,

				get: jQuery.isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
								return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
								return this.originalEvent[ name ];
						}
					},

				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},

		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;

			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;

			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,

		which: function( event ) {
			var button = event.button;

			// Add which for key events
			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				return ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event.which;
		}
	}, jQuery.event.addProp );

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {

		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var

		/* eslint-disable max-len */

		// See https://github.com/eslint/eslint/issues/3229
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

		/* eslint-enable */

		// Support: IE <=10 - 11, Edge 12 - 13
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function manipulationTarget( elem, content ) {
		if ( jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

			return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
		}

		return elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};



	( function() {

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {

			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}

			div.style.cssText =
				"box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";

			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );

			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}

		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		jQuery.extend( support, {
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {
				computeStyleTests();
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// Support: IE <=9 only
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?

			// If we already have the right measurement, avoid augmentation
			4 :

			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var val,
			valueIsBorderBox = true,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Support: IE <=11 only
		// Running getBoundingClientRect on a disconnected node
		// in IE throws an error.
		if ( elem.getClientRects().length ) {
			val = elem.getBoundingClientRect()[ name ];
		}

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	function raf() {
		if ( timerId ) {
			window.requestAnimationFrame( raf );
			jQuery.fx.tick();
		}
	}

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;

					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}

		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}

		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {

			// Support: IE <=9 - 11, Edge 12 - 13
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {

					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}

			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {

					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {

			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}

				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}

				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}

				/* eslint-disable no-loop-func */

				anim.done( function() {

				/* eslint-enable no-loop-func */

					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}

			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		// Go to the end state if fx are off or if document is hidden
		if ( jQuery.fx.off || document.hidden ) {
			opt.duration = 0;

		} else {
			opt.duration = typeof opt.duration === "number" ?
				opt.duration : opt.duration in jQuery.fx.speeds ?
					jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;
		}

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.requestAnimationFrame ?
				window.requestAnimationFrame( raf ) :
				window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		if ( window.cancelAnimationFrame ) {
			window.cancelAnimationFrame( timerId );
		} else {
			window.clearInterval( timerId );
		}

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};

	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();

			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




	var rclass = /[\t\r\n\f]/g;

	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?

						// Handle most common string cases
						ret.replace( rreturn, "" ) :

						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];

						/* eslint-disable no-cond-assign */

						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}

						/* eslint-enable no-cond-assign */
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);

			jQuery.event.trigger( e, null, elem );
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {

				// If value is a function, invoke it and use its return value
				var value = jQuery.isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;

				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",

			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": JSON.parse,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// Request state (becomes false upon send and true upon completion)
				completed,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// uncached part of the url
				uncached,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {

								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR );

			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE <=8 - 11, Edge 12 - 13
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in uncached url if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rts, "" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
				}

				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;

			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}

					// Propagate others as results
					done( -1, e );
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Ignore repeat invocations
				if ( completed ) {
					return;
				}

				completed = true;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( this[ 0 ] ) {
				if ( jQuery.isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );


	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};




	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );

	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();


	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}

		var base, parsed, scripts;

		if ( !context ) {

			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );

				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}

		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {

			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win, rect, doc,
				elem = this[ 0 ];

			if ( !elem ) {
				return;
			}

			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}

			rect = elem.getBoundingClientRect();

			// Make sure element is not hidden (display: none)
			if ( rect.width || rect.height ) {
				doc = elem.ownerDocument;
				win = getWindow( doc );
				docElem = doc.documentElement;

				return {
					top: rect.top + win.pageYOffset - docElem.clientTop,
					left: rect.left + win.pageXOffset - docElem.clientLeft
				};
			}

			// Return zeros for disconnected and hidden elements (gh-2310)
			return rect;
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset = {
					top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
					left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
				};
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );

	jQuery.parseJSON = JSON.parse;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( typeof define === "function" && define.amd ) {
		define( "jquery", [], function() {
			return jQuery;
		} );
	}





	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}


	return jQuery;
	} );


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	// This file is autogenerated via the `commonjs` Grunt task. You can require() this file in a CommonJS environment.
	require('../../js/transition.js')
	require('../../js/alert.js')
	require('../../js/button.js')
	require('../../js/carousel.js')
	require('../../js/collapse.js')
	require('../../js/dropdown.js')
	require('../../js/modal.js')
	require('../../js/tooltip.js')
	require('../../js/popover.js')
	require('../../js/scrollspy.js')
	require('../../js/tab.js')
	require('../../js/affix.js')

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var $ = __webpack_require__(1);

	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);

	module.exports = function() {
	  $('.chosen-select').each(function() {
	    var $this = $(this);
	    var settings = {};
	    if (typeof $this.data('chosen-settings') == 'object') {
	      settings = $this.data('chosen-settings');
	    }

	    $(this).chosen(settings);
	  });
	};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	(function() {
	  var $, AbstractChosen, Chosen, SelectParser, _ref,
	    __hasProp = {}.hasOwnProperty,
	    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

	  SelectParser = (function() {
	    function SelectParser() {
	      this.options_index = 0;
	      this.parsed = [];
	    }

	    SelectParser.prototype.add_node = function(child) {
	      if (child.nodeName.toUpperCase() === 'OPTGROUP') {
	        return this.add_group(child);
	      } else {
	        return this.add_option(child);
	      }
	    };

	    SelectParser.prototype.add_group = function(group) {
	      var group_position, option, _i, _len, _ref, _results;
	      group_position = this.parsed.length;
	      this.parsed.push({
	        array_index: group_position,
	        group: true,
	        label: this.escapeExpression(group.label),
	        title: group.title ? group.title : void 0,
	        children: 0,
	        disabled: group.disabled,
	        classes: group.className
	      });
	      _ref = group.childNodes;
	      _results = [];
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        option = _ref[_i];
	        _results.push(this.add_option(option, group_position, group.disabled));
	      }
	      return _results;
	    };

	    SelectParser.prototype.add_option = function(option, group_position, group_disabled) {
	      if (option.nodeName.toUpperCase() === 'OPTION') {
	        if (option.text !== '') {
	          if (group_position != null) {
	            this.parsed[group_position].children += 1;
	          }
	          this.parsed.push({
	            array_index: this.parsed.length,
	            options_index: this.options_index,
	            value: option.value,
	            text: option.text,
	            html: option.innerHTML,
	            title: option.title ? option.title : void 0,
	            selected: option.selected,
	            disabled: group_disabled === true ? group_disabled : option.disabled,
	            group_array_index: group_position,
	            group_label: group_position != null ? this.parsed[group_position].label : null,
	            classes: option.className,
	            style: option.style.cssText
	          });
	        } else {
	          this.parsed.push({
	            array_index: this.parsed.length,
	            options_index: this.options_index,
	            empty: true
	          });
	        }
	        return this.options_index += 1;
	      }
	    };

	    SelectParser.prototype.escapeExpression = function(text) {
	      var map, unsafe_chars;
	      if ((text == null) || text === false) {
	        return '';
	      }
	      if (!/[\&\<\>\"\'\`]/.test(text)) {
	        return text;
	      }
	      map = {
	        '<': '&lt;',
	        '>': '&gt;',
	        '"': '&quot;',
	        "'": '&#x27;',
	        '`': '&#x60;'
	      };
	      unsafe_chars = /&(?!\w+;)|[\<\>\"\'\`]/g;
	      return text.replace(unsafe_chars, function(chr) {
	        return map[chr] || '&amp;';
	      });
	    };

	    return SelectParser;
	  })();

	  SelectParser.select_to_array = function(select) {
	    var child, parser, _i, _len, _ref;
	    parser = new SelectParser();
	    _ref = select.childNodes;
	    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	      child = _ref[_i];
	      parser.add_node(child);
	    }
	    return parser.parsed;
	  };

	  AbstractChosen = (function() {
	    function AbstractChosen(form_field, options) {
	      this.form_field = form_field;
	      this.options = options != null ? options : {};
	      if (!AbstractChosen.browser_is_supported()) {
	        return;
	      }
	      this.is_multiple = this.form_field.multiple;
	      this.set_default_text();
	      this.set_default_values();
	      this.setup();
	      this.set_up_html();
	      this.register_observers();
	      this.on_ready();
	    }

	    AbstractChosen.prototype.set_default_values = function() {
	      var _this = this;
	      this.click_test_action = function(evt) {
	        return _this.test_active_click(evt);
	      };
	      this.activate_action = function(evt) {
	        return _this.activate_field(evt);
	      };
	      this.active_field = false;
	      this.mouse_on_container = false;
	      this.results_showing = false;
	      this.result_highlighted = null;
	      this.allow_single_deselect = (this.options.allow_single_deselect != null) && (this.form_field.options[0] != null) && this.form_field.options[0].text === '' ? this.options.allow_single_deselect : false;
	      this.disable_search_threshold = this.options.disable_search_threshold || 0;
	      this.disable_search = this.options.disable_search || false;
	      this.enable_split_word_search = this.options.enable_split_word_search != null ? this.options.enable_split_word_search : true;
	      this.group_search = this.options.group_search != null ? this.options.group_search : true;
	      this.search_contains = this.options.search_contains || false;
	      this.single_backstroke_delete = this.options.single_backstroke_delete != null ? this.options.single_backstroke_delete : true;
	      this.max_selected_options = this.options.max_selected_options || Infinity;
	      this.inherit_select_classes = this.options.inherit_select_classes || false;
	      this.display_selected_options = this.options.display_selected_options != null ? this.options.display_selected_options : true;
	      this.display_disabled_options = this.options.display_disabled_options != null ? this.options.display_disabled_options : true;
	      this.include_group_label_in_selected = this.options.include_group_label_in_selected || false;
	      this.max_shown_results = this.options.max_shown_results || Number.POSITIVE_INFINITY;
	      return this.case_sensitive_search = this.options.case_sensitive_search || false;
	    };

	    AbstractChosen.prototype.set_default_text = function() {
	      if (this.form_field.getAttribute('data-placeholder')) {
	        this.default_text = this.form_field.getAttribute('data-placeholder');
	      } else if (this.is_multiple) {
	        this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || AbstractChosen.default_multiple_text;
	      } else {
	        this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || AbstractChosen.default_single_text;
	      }
	      return this.results_none_found = this.form_field.getAttribute('data-no_results_text') || this.options.no_results_text || AbstractChosen.default_no_result_text;
	    };

	    AbstractChosen.prototype.choice_label = function(item) {
	      if (this.include_group_label_in_selected && (item.group_label != null)) {
	        return "<b class='group-name'>" + item.group_label + '</b>' + item.html;
	      } else {
	        return item.html;
	      }
	    };

	    AbstractChosen.prototype.mouse_enter = function() {
	      return this.mouse_on_container = true;
	    };

	    AbstractChosen.prototype.mouse_leave = function() {
	      return this.mouse_on_container = false;
	    };

	    AbstractChosen.prototype.input_focus = function(evt) {
	      var _this = this;
	      if (this.is_multiple) {
	        if (!this.active_field) {
	          return setTimeout((function() {
	            return _this.container_mousedown();
	          }), 50);
	        }
	      } else {
	        if (!this.active_field) {
	          return this.activate_field();
	        }
	      }
	    };

	    AbstractChosen.prototype.input_blur = function(evt) {
	      var _this = this;
	      if (!this.mouse_on_container) {
	        this.active_field = false;
	        return setTimeout((function() {
	          return _this.blur_test();
	        }), 100);
	      }
	    };

	    AbstractChosen.prototype.results_option_build = function(options) {
	      var content, data, data_content, shown_results, _i, _len, _ref;
	      content = '';
	      shown_results = 0;
	      _ref = this.results_data;
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        data = _ref[_i];
	        data_content = '';
	        if (data.group) {
	          data_content = this.result_add_group(data);
	        } else {
	          data_content = this.result_add_option(data);
	        }
	        if (data_content !== '') {
	          shown_results++;
	          content += data_content;
	        }
	        if (options != null ? options.first : void 0) {
	          if (data.selected && this.is_multiple) {
	            this.choice_build(data);
	          } else if (data.selected && !this.is_multiple) {
	            this.single_set_selected_text(this.choice_label(data));
	          }
	        }
	        if (shown_results >= this.max_shown_results) {
	          break;
	        }
	      }
	      return content;
	    };

	    AbstractChosen.prototype.result_add_option = function(option) {
	      var classes, option_el;
	      if (!option.search_match) {
	        return '';
	      }
	      if (!this.include_option_in_results(option)) {
	        return '';
	      }
	      classes = [];
	      if (!option.disabled && !(option.selected && this.is_multiple)) {
	        classes.push('active-result');
	      }
	      if (option.disabled && !(option.selected && this.is_multiple)) {
	        classes.push('disabled-result');
	      }
	      if (option.selected) {
	        classes.push('result-selected');
	      }
	      if (option.group_array_index != null) {
	        classes.push('group-option');
	      }
	      if (option.classes !== '') {
	        classes.push(option.classes);
	      }
	      option_el = document.createElement('li');
	      option_el.className = classes.join(' ');
	      option_el.style.cssText = option.style;
	      option_el.setAttribute('data-option-array-index', option.array_index);
	      option_el.innerHTML = option.search_text;
	      if (option.title) {
	        option_el.title = option.title;
	      }
	      return this.outerHTML(option_el);
	    };

	    AbstractChosen.prototype.result_add_group = function(group) {
	      var classes, group_el;
	      if (!(group.search_match || group.group_match)) {
	        return '';
	      }
	      if (!(group.active_options > 0)) {
	        return '';
	      }
	      classes = [];
	      classes.push('group-result');
	      if (group.classes) {
	        classes.push(group.classes);
	      }
	      group_el = document.createElement('li');
	      group_el.className = classes.join(' ');
	      group_el.innerHTML = group.search_text;
	      if (group.title) {
	        group_el.title = group.title;
	      }
	      return this.outerHTML(group_el);
	    };

	    AbstractChosen.prototype.results_update_field = function() {
	      this.set_default_text();
	      if (!this.is_multiple) {
	        this.results_reset_cleanup();
	      }
	      this.result_clear_highlight();
	      this.results_build();
	      if (this.results_showing) {
	        return this.winnow_results();
	      }
	    };

	    AbstractChosen.prototype.reset_single_select_options = function() {
	      var result, _i, _len, _ref, _results;
	      _ref = this.results_data;
	      _results = [];
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        result = _ref[_i];
	        if (result.selected) {
	          _results.push(result.selected = false);
	        } else {
	          _results.push(void 0);
	        }
	      }
	      return _results;
	    };

	    AbstractChosen.prototype.results_toggle = function() {
	      if (this.results_showing) {
	        return this.results_hide();
	      } else {
	        return this.results_show();
	      }
	    };

	    AbstractChosen.prototype.results_search = function(evt) {
	      if (this.results_showing) {
	        return this.winnow_results();
	      } else {
	        return this.results_show();
	      }
	    };

	    AbstractChosen.prototype.winnow_results = function() {
	      var escapedSearchText, option, regex, results, results_group, searchText, startpos, text, zregex, _i, _len, _ref;
	      this.no_results_clear();
	      results = 0;
	      searchText = this.get_search_text();
	      escapedSearchText = searchText.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
	      zregex = new RegExp(escapedSearchText, 'i');
	      regex = this.get_search_regex(escapedSearchText);
	      _ref = this.results_data;
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        option = _ref[_i];
	        option.search_match = false;
	        results_group = null;
	        if (this.include_option_in_results(option)) {
	          if (option.group) {
	            option.group_match = false;
	            option.active_options = 0;
	          }
	          if ((option.group_array_index != null) && this.results_data[option.group_array_index]) {
	            results_group = this.results_data[option.group_array_index];
	            if (results_group.active_options === 0 && results_group.search_match) {
	              results += 1;
	            }
	            results_group.active_options += 1;
	          }
	          option.search_text = option.group ? option.label : option.html;
	          if (!(option.group && !this.group_search)) {
	            option.search_match = this.search_string_match(option.search_text, regex);
	            if (option.search_match && !option.group) {
	              results += 1;
	            }
	            if (option.search_match) {
	              if (searchText.length) {
	                startpos = option.search_text.search(zregex);
	                text = option.search_text.substr(0, startpos + searchText.length) + '</em>' + option.search_text.substr(startpos + searchText.length);
	                option.search_text = text.substr(0, startpos) + '<em>' + text.substr(startpos);
	              }
	              if (results_group != null) {
	                results_group.group_match = true;
	              }
	            } else if ((option.group_array_index != null) && this.results_data[option.group_array_index].search_match) {
	              option.search_match = true;
	            }
	          }
	        }
	      }
	      this.result_clear_highlight();
	      if (results < 1 && searchText.length) {
	        this.update_results_content('');
	        return this.no_results(searchText);
	      } else {
	        this.update_results_content(this.results_option_build());
	        return this.winnow_results_set_highlight();
	      }
	    };

	    AbstractChosen.prototype.get_search_regex = function(escaped_search_string) {
	      var regex_anchor, regex_flag;
	      regex_anchor = this.search_contains ? '' : '^';
	      regex_flag = this.case_sensitive_search ? '' : 'i';
	      return new RegExp(regex_anchor + escaped_search_string, regex_flag);
	    };

	    AbstractChosen.prototype.search_string_match = function(search_string, regex) {
	      var part, parts, _i, _len;
	      if (regex.test(search_string)) {
	        return true;
	      } else if (this.enable_split_word_search && (search_string.indexOf(' ') >= 0 || search_string.indexOf('[') === 0)) {
	        parts = search_string.replace(/\[|\]/g, '').split(' ');
	        if (parts.length) {
	          for (_i = 0, _len = parts.length; _i < _len; _i++) {
	            part = parts[_i];
	            if (regex.test(part)) {
	              return true;
	            }
	          }
	        }
	      }
	    };

	    AbstractChosen.prototype.choices_count = function() {
	      var option, _i, _len, _ref;
	      if (this.selected_option_count != null) {
	        return this.selected_option_count;
	      }
	      this.selected_option_count = 0;
	      _ref = this.form_field.options;
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        option = _ref[_i];
	        if (option.selected) {
	          this.selected_option_count += 1;
	        }
	      }
	      return this.selected_option_count;
	    };

	    AbstractChosen.prototype.choices_click = function(evt) {
	      evt.preventDefault();
	      if (!(this.results_showing || this.is_disabled)) {
	        return this.results_show();
	      }
	    };

	    AbstractChosen.prototype.keyup_checker = function(evt) {
	      var stroke, _ref;
	      stroke = (_ref = evt.which) != null ? _ref : evt.keyCode;
	      this.search_field_scale();
	      switch (stroke) {
	        case 8:
	          if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) {
	            return this.keydown_backstroke();
	          } else if (!this.pending_backstroke) {
	            this.result_clear_highlight();
	            return this.results_search();
	          }
	          break;
	        case 13:
	          evt.preventDefault();
	          if (this.results_showing) {
	            return this.result_select(evt);
	          }
	          break;
	        case 27:
	          if (this.results_showing) {
	            this.results_hide();
	          }
	          return true;
	        case 9:
	        case 38:
	        case 40:
	        case 16:
	        case 91:
	        case 17:
	        case 18:
	          break;
	        default:
	          return this.results_search();
	      }
	    };

	    AbstractChosen.prototype.clipboard_event_checker = function(evt) {
	      var _this = this;
	      return setTimeout((function() {
	        return _this.results_search();
	      }), 50);
	    };

	    AbstractChosen.prototype.container_width = function() {
	      if (this.options.width != null) {
	        return this.options.width;
	      } else {
	        return '' + this.form_field.offsetWidth + 'px';
	      }
	    };

	    AbstractChosen.prototype.include_option_in_results = function(option) {
	      if (this.is_multiple && (!this.display_selected_options && option.selected)) {
	        return false;
	      }
	      if (!this.display_disabled_options && option.disabled) {
	        return false;
	      }
	      if (option.empty) {
	        return false;
	      }
	      return true;
	    };

	    AbstractChosen.prototype.search_results_touchstart = function(evt) {
	      this.touch_started = true;
	      return this.search_results_mouseover(evt);
	    };

	    AbstractChosen.prototype.search_results_touchmove = function(evt) {
	      this.touch_started = false;
	      return this.search_results_mouseout(evt);
	    };

	    AbstractChosen.prototype.search_results_touchend = function(evt) {
	      if (this.touch_started) {
	        return this.search_results_mouseup(evt);
	      }
	    };

	    AbstractChosen.prototype.outerHTML = function(element) {
	      var tmp;
	      if (element.outerHTML) {
	        return element.outerHTML;
	      }
	      tmp = document.createElement('div');
	      tmp.appendChild(element);
	      return tmp.innerHTML;
	    };

	    AbstractChosen.browser_is_supported = function() {
	      if ('Microsoft Internet Explorer' === window.navigator.appName) {
	        return document.documentMode >= 8;
	      }
	      if (/iP(od|hone)/i.test(window.navigator.userAgent) || /IEMobile/i.test(window.navigator.userAgent) || /Windows Phone/i.test(window.navigator.userAgent) || /BlackBerry/i.test(window.navigator.userAgent) || /BB10/i.test(window.navigator.userAgent) || /Android.*Mobile/i.test(window.navigator.userAgent)) {
	        return false;
	      }
	      return true;
	    };

	    AbstractChosen.default_multiple_text = 'Select Some Options';

	    AbstractChosen.default_single_text = 'Select an Option';

	    AbstractChosen.default_no_result_text = 'No results match';

	    return AbstractChosen;
	  })();

	  $ = jQuery;

	  $.fn.extend({
	    chosen: function(options) {
	      if (!AbstractChosen.browser_is_supported()) {
	        return this;
	      }
	      return this.each(function(input_field) {
	        var $this, chosen;
	        $this = $(this);
	        chosen = $this.data('chosen');
	        if (options === 'destroy') {
	          if (chosen instanceof Chosen) {
	            chosen.destroy();
	          }
	          return;
	        }
	        if (!(chosen instanceof Chosen)) {
	          $this.data('chosen', new Chosen(this, options));
	        }
	      });
	    }
	  });

	  Chosen = (function(_super) {
	    __extends(Chosen, _super);

	    function Chosen() {
	      _ref = Chosen.__super__.constructor.apply(this, arguments);
	      return _ref;
	    }

	    Chosen.prototype.setup = function() {
	      this.form_field_jq = $(this.form_field);
	      this.current_selectedIndex = this.form_field.selectedIndex;
	      return this.is_rtl = this.form_field_jq.hasClass('chosen-rtl');
	    };

	    Chosen.prototype.set_up_html = function() {
	      var container_classes, container_props;
	      container_classes = ['chosen-container'];
	      container_classes.push('chosen-container-' + (this.is_multiple ? 'multi' : 'single'));
	      if (this.inherit_select_classes && this.form_field.className) {
	        container_classes.push(this.form_field.className);
	      }
	      if (this.is_rtl) {
	        container_classes.push('chosen-rtl');
	      }
	      container_props = {
	        'class': container_classes.join(' '),
	        'style': 'width: ' + (this.container_width()) + ';',
	        'title': this.form_field.title
	      };
	      if (this.form_field.id.length) {
	        container_props.id = this.form_field.id.replace(/[^\w]/g, '_') + '_chosen';
	      }
	      this.container = $('<div />', container_props);
	      if (this.is_multiple) {
	        this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>');
	      } else {
	        this.container.html('<a class="chosen-single chosen-default"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>');
	      }
	      this.form_field_jq.hide().after(this.container);
	      this.dropdown = this.container.find('div.chosen-drop').first();
	      this.search_field = this.container.find('input').first();
	      this.search_results = this.container.find('ul.chosen-results').first();
	      this.search_field_scale();
	      this.search_no_results = this.container.find('li.no-results').first();
	      if (this.is_multiple) {
	        this.search_choices = this.container.find('ul.chosen-choices').first();
	        this.search_container = this.container.find('li.search-field').first();
	      } else {
	        this.search_container = this.container.find('div.chosen-search').first();
	        this.selected_item = this.container.find('.chosen-single').first();
	      }
	      this.results_build();
	      this.set_tab_index();
	      return this.set_label_behavior();
	    };

	    Chosen.prototype.on_ready = function() {
	      return this.form_field_jq.trigger('chosen:ready', {
	        chosen: this
	      });
	    };

	    Chosen.prototype.register_observers = function() {
	      var _this = this;
	      this.container.bind('touchstart.chosen', function(evt) {
	        _this.container_mousedown(evt);
	        return evt.preventDefault();
	      });
	      this.container.bind('touchend.chosen', function(evt) {
	        _this.container_mouseup(evt);
	        return evt.preventDefault();
	      });
	      this.container.bind('mousedown.chosen', function(evt) {
	        _this.container_mousedown(evt);
	      });
	      this.container.bind('mouseup.chosen', function(evt) {
	        _this.container_mouseup(evt);
	      });
	      this.container.bind('mouseenter.chosen', function(evt) {
	        _this.mouse_enter(evt);
	      });
	      this.container.bind('mouseleave.chosen', function(evt) {
	        _this.mouse_leave(evt);
	      });
	      this.search_results.bind('mouseup.chosen', function(evt) {
	        _this.search_results_mouseup(evt);
	      });
	      this.search_results.bind('mouseover.chosen', function(evt) {
	        _this.search_results_mouseover(evt);
	      });
	      this.search_results.bind('mouseout.chosen', function(evt) {
	        _this.search_results_mouseout(evt);
	      });
	      this.search_results.bind('mousewheel.chosen DOMMouseScroll.chosen', function(evt) {
	        _this.search_results_mousewheel(evt);
	      });
	      this.search_results.bind('touchstart.chosen', function(evt) {
	        _this.search_results_touchstart(evt);
	      });
	      this.search_results.bind('touchmove.chosen', function(evt) {
	        _this.search_results_touchmove(evt);
	      });
	      this.search_results.bind('touchend.chosen', function(evt) {
	        _this.search_results_touchend(evt);
	      });
	      this.form_field_jq.bind('chosen:updated.chosen', function(evt) {
	        _this.results_update_field(evt);
	      });
	      this.form_field_jq.bind('chosen:activate.chosen', function(evt) {
	        _this.activate_field(evt);
	      });
	      this.form_field_jq.bind('chosen:open.chosen', function(evt) {
	        _this.container_mousedown(evt);
	      });
	      this.form_field_jq.bind('chosen:close.chosen', function(evt) {
	        _this.input_blur(evt);
	      });
	      this.search_field.bind('blur.chosen', function(evt) {
	        _this.input_blur(evt);
	      });
	      this.search_field.bind('keyup.chosen', function(evt) {
	        _this.keyup_checker(evt);
	      });
	      this.search_field.bind('keydown.chosen', function(evt) {
	        _this.keydown_checker(evt);
	      });
	      this.search_field.bind('focus.chosen', function(evt) {
	        _this.input_focus(evt);
	      });
	      this.search_field.bind('cut.chosen', function(evt) {
	        _this.clipboard_event_checker(evt);
	      });
	      this.search_field.bind('paste.chosen', function(evt) {
	        _this.clipboard_event_checker(evt);
	      });
	      if (this.is_multiple) {
	        return this.search_choices.bind('click.chosen', function(evt) {
	          _this.choices_click(evt);
	        });
	      } else {
	        return this.container.bind('click.chosen', function(evt) {
	          evt.preventDefault();
	        });
	      }
	    };

	    Chosen.prototype.destroy = function() {
	      $(this.container[0].ownerDocument).unbind('click.chosen', this.click_test_action);
	      if (this.search_field[0].tabIndex) {
	        this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex;
	      }
	      this.container.remove();
	      this.form_field_jq.removeData('chosen');
	      return this.form_field_jq.show();
	    };

	    Chosen.prototype.search_field_disabled = function() {
	      this.is_disabled = this.form_field_jq[0].disabled;
	      if (this.is_disabled) {
	        this.container.addClass('chosen-disabled');
	        this.search_field[0].disabled = true;
	        if (!this.is_multiple) {
	          this.selected_item.unbind('focus.chosen', this.activate_action);
	        }
	        return this.close_field();
	      } else {
	        this.container.removeClass('chosen-disabled');
	        this.search_field[0].disabled = false;
	        if (!this.is_multiple) {
	          return this.selected_item.bind('focus.chosen', this.activate_action);
	        }
	      }
	    };

	    Chosen.prototype.container_mousedown = function(evt) {
	      if (!this.is_disabled) {
	        if (evt && evt.type === 'mousedown' && !this.results_showing) {
	          evt.preventDefault();
	        }
	        if (!((evt != null) && ($(evt.target)).hasClass('search-choice-close'))) {
	          if (!this.active_field) {
	            if (this.is_multiple) {
	              this.search_field.val('');
	            }
	            $(this.container[0].ownerDocument).bind('click.chosen', this.click_test_action);
	            this.results_show();
	          } else if (!this.is_multiple && evt && (($(evt.target)[0] === this.selected_item[0]) || $(evt.target).parents('a.chosen-single').length)) {
	            evt.preventDefault();
	            this.results_toggle();
	          }
	          return this.activate_field();
	        }
	      }
	    };

	    Chosen.prototype.container_mouseup = function(evt) {
	      if (evt.target.nodeName === 'ABBR' && !this.is_disabled) {
	        return this.results_reset(evt);
	      }
	    };

	    Chosen.prototype.search_results_mousewheel = function(evt) {
	      var delta;
	      if (evt.originalEvent) {
	        delta = evt.originalEvent.deltaY || -evt.originalEvent.wheelDelta || evt.originalEvent.detail;
	      }
	      if (delta != null) {
	        evt.preventDefault();
	        if (evt.type === 'DOMMouseScroll') {
	          delta = delta * 40;
	        }
	        return this.search_results.scrollTop(delta + this.search_results.scrollTop());
	      }
	    };

	    Chosen.prototype.blur_test = function(evt) {
	      if (!this.active_field && this.container.hasClass('chosen-container-active')) {
	        return this.close_field();
	      }
	    };

	    Chosen.prototype.close_field = function() {
	      $(this.container[0].ownerDocument).unbind('click.chosen', this.click_test_action);
	      this.active_field = false;
	      this.results_hide();
	      this.container.removeClass('chosen-container-active');
	      this.clear_backstroke();
	      this.show_search_field_default();
	      return this.search_field_scale();
	    };

	    Chosen.prototype.activate_field = function() {
	      this.container.addClass('chosen-container-active');
	      this.active_field = true;
	      this.search_field.val(this.search_field.val());
	      return this.search_field.focus();
	    };

	    Chosen.prototype.test_active_click = function(evt) {
	      var active_container;
	      active_container = $(evt.target).closest('.chosen-container');
	      if (active_container.length && this.container[0] === active_container[0]) {
	        return this.active_field = true;
	      } else {
	        return this.close_field();
	      }
	    };

	    Chosen.prototype.results_build = function() {
	      this.parsing = true;
	      this.selected_option_count = null;
	      this.results_data = SelectParser.select_to_array(this.form_field);
	      if (this.is_multiple) {
	        this.search_choices.find('li.search-choice').remove();
	      } else if (!this.is_multiple) {
	        this.single_set_selected_text();
	        if (this.disable_search || this.form_field.options.length <= this.disable_search_threshold) {
	          this.search_field[0].readOnly = true;
	          this.container.addClass('chosen-container-single-nosearch');
	        } else {
	          this.search_field[0].readOnly = false;
	          this.container.removeClass('chosen-container-single-nosearch');
	        }
	      }
	      this.update_results_content(this.results_option_build({
	        first: true
	      }));
	      this.search_field_disabled();
	      this.show_search_field_default();
	      this.search_field_scale();
	      return this.parsing = false;
	    };

	    Chosen.prototype.result_do_highlight = function(el) {
	      var high_bottom, high_top, maxHeight, visible_bottom, visible_top;
	      if (el.length) {
	        this.result_clear_highlight();
	        this.result_highlight = el;
	        this.result_highlight.addClass('highlighted');
	        maxHeight = parseInt(this.search_results.css('maxHeight'), 10);
	        visible_top = this.search_results.scrollTop();
	        visible_bottom = maxHeight + visible_top;
	        high_top = this.result_highlight.position().top + this.search_results.scrollTop();
	        high_bottom = high_top + this.result_highlight.outerHeight();
	        if (high_bottom >= visible_bottom) {
	          return this.search_results.scrollTop((high_bottom - maxHeight) > 0 ? high_bottom - maxHeight : 0);
	        } else if (high_top < visible_top) {
	          return this.search_results.scrollTop(high_top);
	        }
	      }
	    };

	    Chosen.prototype.result_clear_highlight = function() {
	      if (this.result_highlight) {
	        this.result_highlight.removeClass('highlighted');
	      }
	      return this.result_highlight = null;
	    };

	    Chosen.prototype.results_show = function() {
	      if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
	        this.form_field_jq.trigger('chosen:maxselected', {
	          chosen: this
	        });
	        return false;
	      }
	      this.container.addClass('chosen-with-drop');
	      this.results_showing = true;
	      this.search_field.focus();
	      this.search_field.val(this.search_field.val());
	      this.winnow_results();
	      return this.form_field_jq.trigger('chosen:showing_dropdown', {
	        chosen: this
	      });
	    };

	    Chosen.prototype.update_results_content = function(content) {
	      return this.search_results.html(content);
	    };

	    Chosen.prototype.results_hide = function() {
	      if (this.results_showing) {
	        this.result_clear_highlight();
	        this.container.removeClass('chosen-with-drop');
	        this.form_field_jq.trigger('chosen:hiding_dropdown', {
	          chosen: this
	        });
	      }
	      return this.results_showing = false;
	    };

	    Chosen.prototype.set_tab_index = function(el) {
	      var ti;
	      if (this.form_field.tabIndex) {
	        ti = this.form_field.tabIndex;
	        this.form_field.tabIndex = -1;
	        return this.search_field[0].tabIndex = ti;
	      }
	    };

	    Chosen.prototype.set_label_behavior = function() {
	      var _this = this;
	      this.form_field_label = this.form_field_jq.parents('label');
	      if (!this.form_field_label.length && this.form_field.id.length) {
	        this.form_field_label = $("label[for='" + this.form_field.id + "']");
	      }
	      if (this.form_field_label.length > 0) {
	        return this.form_field_label.bind('click.chosen', function(evt) {
	          if (_this.is_multiple) {
	            return _this.container_mousedown(evt);
	          } else {
	            return _this.activate_field();
	          }
	        });
	      }
	    };

	    Chosen.prototype.show_search_field_default = function() {
	      if (this.is_multiple && this.choices_count() < 1 && !this.active_field) {
	        this.search_field.val(this.default_text);
	        return this.search_field.addClass('default');
	      } else {
	        this.search_field.val('');
	        return this.search_field.removeClass('default');
	      }
	    };

	    Chosen.prototype.search_results_mouseup = function(evt) {
	      var target;
	      target = $(evt.target).hasClass('active-result') ? $(evt.target) : $(evt.target).parents('.active-result').first();
	      if (target.length) {
	        this.result_highlight = target;
	        this.result_select(evt);
	        return this.search_field.focus();
	      }
	    };

	    Chosen.prototype.search_results_mouseover = function(evt) {
	      var target;
	      target = $(evt.target).hasClass('active-result') ? $(evt.target) : $(evt.target).parents('.active-result').first();
	      if (target) {
	        return this.result_do_highlight(target);
	      }
	    };

	    Chosen.prototype.search_results_mouseout = function(evt) {
	      if ($(evt.target).hasClass('active-result' || $(evt.target).parents('.active-result').first())) {
	        return this.result_clear_highlight();
	      }
	    };

	    Chosen.prototype.choice_build = function(item) {
	      var choice, close_link,
	        _this = this;
	      choice = $('<li />', {
	        'class': 'search-choice'
	      }).html('<span>' + (this.choice_label(item)) + '</span>');
	      if (item.disabled) {
	        choice.addClass('search-choice-disabled');
	      } else {
	        close_link = $('<a />', {
	          'class': 'search-choice-close',
	          'data-option-array-index': item.array_index
	        });
	        close_link.bind('click.chosen', function(evt) {
	          return _this.choice_destroy_link_click(evt);
	        });
	        choice.append(close_link);
	      }
	      return this.search_container.before(choice);
	    };

	    Chosen.prototype.choice_destroy_link_click = function(evt) {
	      evt.preventDefault();
	      evt.stopPropagation();
	      if (!this.is_disabled) {
	        return this.choice_destroy($(evt.target));
	      }
	    };

	    Chosen.prototype.choice_destroy = function(link) {
	      if (this.result_deselect(link[0].getAttribute('data-option-array-index'))) {
	        this.show_search_field_default();
	        if (this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1) {
	          this.results_hide();
	        }
	        link.parents('li').first().remove();
	        return this.search_field_scale();
	      }
	    };

	    Chosen.prototype.results_reset = function() {
	      this.reset_single_select_options();
	      this.form_field.options[0].selected = true;
	      this.single_set_selected_text();
	      this.show_search_field_default();
	      this.results_reset_cleanup();
	      this.form_field_jq.trigger('change');
	      if (this.active_field) {
	        return this.results_hide();
	      }
	    };

	    Chosen.prototype.results_reset_cleanup = function() {
	      this.current_selectedIndex = this.form_field.selectedIndex;
	      return this.selected_item.find('abbr').remove();
	    };

	    Chosen.prototype.result_select = function(evt) {
	      var high, item;
	      if (this.result_highlight) {
	        high = this.result_highlight;
	        this.result_clear_highlight();
	        if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
	          this.form_field_jq.trigger('chosen:maxselected', {
	            chosen: this
	          });
	          return false;
	        }
	        if (this.is_multiple) {
	          high.removeClass('active-result');
	        } else {
	          this.reset_single_select_options();
	        }
	        high.addClass('result-selected');
	        item = this.results_data[high[0].getAttribute('data-option-array-index')];
	        item.selected = true;
	        this.form_field.options[item.options_index].selected = true;
	        this.selected_option_count = null;
	        if (this.is_multiple) {
	          this.choice_build(item);
	        } else {
	          this.single_set_selected_text(this.choice_label(item));
	        }
	        if (!((evt.metaKey || evt.ctrlKey) && this.is_multiple)) {
	          this.results_hide();
	        }
	        this.show_search_field_default();
	        if (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) {
	          this.form_field_jq.trigger('change', {
	            'selected': this.form_field.options[item.options_index].value
	          });
	        }
	        this.current_selectedIndex = this.form_field.selectedIndex;
	        evt.preventDefault();
	        return this.search_field_scale();
	      }
	    };

	    Chosen.prototype.single_set_selected_text = function(text) {
	      if (text == null) {
	        text = this.default_text;
	      }
	      if (text === this.default_text) {
	        this.selected_item.addClass('chosen-default');
	      } else {
	        this.single_deselect_control_build();
	        this.selected_item.removeClass('chosen-default');
	      }
	      return this.selected_item.find('span').html(text);
	    };

	    Chosen.prototype.result_deselect = function(pos) {
	      var result_data;
	      result_data = this.results_data[pos];
	      if (!this.form_field.options[result_data.options_index].disabled) {
	        result_data.selected = false;
	        this.form_field.options[result_data.options_index].selected = false;
	        this.selected_option_count = null;
	        this.result_clear_highlight();
	        if (this.results_showing) {
	          this.winnow_results();
	        }
	        this.form_field_jq.trigger('change', {
	          deselected: this.form_field.options[result_data.options_index].value
	        });
	        this.search_field_scale();
	        return true;
	      } else {
	        return false;
	      }
	    };

	    Chosen.prototype.single_deselect_control_build = function() {
	      if (!this.allow_single_deselect) {
	        return;
	      }
	      if (!this.selected_item.find('abbr').length) {
	        this.selected_item.find('span').first().after('<abbr class="search-choice-close"></abbr>');
	      }
	      return this.selected_item.addClass('chosen-single-with-deselect');
	    };

	    Chosen.prototype.get_search_text = function() {
	      return $('<div/>').text($.trim(this.search_field.val())).html();
	    };

	    Chosen.prototype.winnow_results_set_highlight = function() {
	      var do_high, selected_results;
	      selected_results = !this.is_multiple ? this.search_results.find('.result-selected.active-result') : [];
	      do_high = selected_results.length ? selected_results.first() : this.search_results.find('.active-result').first();
	      if (do_high != null) {
	        return this.result_do_highlight(do_high);
	      }
	    };

	    Chosen.prototype.no_results = function(terms) {
	      var no_results_html;
	      no_results_html = $('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>');
	      no_results_html.find('span').first().html(terms);
	      this.search_results.append(no_results_html);
	      return this.form_field_jq.trigger('chosen:no_results', {
	        chosen: this
	      });
	    };

	    Chosen.prototype.no_results_clear = function() {
	      return this.search_results.find('.no-results').remove();
	    };

	    Chosen.prototype.keydown_arrow = function() {
	      var next_sib;
	      if (this.results_showing && this.result_highlight) {
	        next_sib = this.result_highlight.nextAll('li.active-result').first();
	        if (next_sib) {
	          return this.result_do_highlight(next_sib);
	        }
	      } else {
	        return this.results_show();
	      }
	    };

	    Chosen.prototype.keyup_arrow = function() {
	      var prev_sibs;
	      if (!this.results_showing && !this.is_multiple) {
	        return this.results_show();
	      } else if (this.result_highlight) {
	        prev_sibs = this.result_highlight.prevAll('li.active-result');
	        if (prev_sibs.length) {
	          return this.result_do_highlight(prev_sibs.first());
	        } else {
	          if (this.choices_count() > 0) {
	            this.results_hide();
	          }
	          return this.result_clear_highlight();
	        }
	      }
	    };

	    Chosen.prototype.keydown_backstroke = function() {
	      var next_available_destroy;
	      if (this.pending_backstroke) {
	        this.choice_destroy(this.pending_backstroke.find('a').first());
	        return this.clear_backstroke();
	      } else {
	        next_available_destroy = this.search_container.siblings('li.search-choice').last();
	        if (next_available_destroy.length && !next_available_destroy.hasClass('search-choice-disabled')) {
	          this.pending_backstroke = next_available_destroy;
	          if (this.single_backstroke_delete) {
	            return this.keydown_backstroke();
	          } else {
	            return this.pending_backstroke.addClass('search-choice-focus');
	          }
	        }
	      }
	    };

	    Chosen.prototype.clear_backstroke = function() {
	      if (this.pending_backstroke) {
	        this.pending_backstroke.removeClass('search-choice-focus');
	      }
	      return this.pending_backstroke = null;
	    };

	    Chosen.prototype.keydown_checker = function(evt) {
	      var stroke, _ref1;
	      stroke = (_ref1 = evt.which) != null ? _ref1 : evt.keyCode;
	      this.search_field_scale();
	      if (stroke !== 8 && this.pending_backstroke) {
	        this.clear_backstroke();
	      }
	      switch (stroke) {
	        case 8:
	          this.backstroke_length = this.search_field.val().length;
	          break;
	        case 9:
	          if (this.results_showing && !this.is_multiple) {
	            this.result_select(evt);
	          }
	          this.mouse_on_container = false;
	          break;
	        case 13:
	          if (this.results_showing) {
	            evt.preventDefault();
	          }
	          break;
	        case 32:
	          if (this.disable_search) {
	            evt.preventDefault();
	          }
	          break;
	        case 38:
	          evt.preventDefault();
	          this.keyup_arrow();
	          break;
	        case 40:
	          evt.preventDefault();
	          this.keydown_arrow();
	          break;
	      }
	    };

	    Chosen.prototype.search_field_scale = function() {
	      var div, f_width, h, style, style_block, styles, w, _i, _len;
	      if (this.is_multiple) {
	        h = 0;
	        w = 0;
	        style_block = 'position:absolute; left: -1000px; top: -1000px; display:none;';
	        styles = ['font-size', 'font-style', 'font-weight', 'font-family', 'line-height', 'text-transform', 'letter-spacing'];
	        for (_i = 0, _len = styles.length; _i < _len; _i++) {
	          style = styles[_i];
	          style_block += style + ':' + this.search_field.css(style) + ';';
	        }
	        div = $('<div />', {
	          'style': style_block
	        });
	        div.text(this.search_field.val());
	        $('body').append(div);
	        w = div.width() + 25;
	        div.remove();
	        f_width = this.container.outerWidth();
	        if (w > f_width - 10) {
	          w = f_width - 10;
	        }
	        return this.search_field.css({
	          'width': w + 'px'
	        });
	      }
	    };

	    return Chosen;
	  })(AbstractChosen);
	}).call(this);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = __webpack_public_path__ + "assets/static/css/chosen_ad79117811f5c0ecae58c007b862155f.css";

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js!./index.scss");
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = require("!../../../node_modules/style-loader/addStyles.js")(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(module.hot) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js!./index.scss", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js!./index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(8);

	window.jQuery = __webpack_require__(1);
	__webpack_require__(9);

	module.exports = function() {
	  $('.fancybox').fancybox();
	};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js!./jquery.fancybox.min.scss");
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = require("!../../../node_modules/style-loader/addStyles.js")(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(module.hot) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js!./jquery.fancybox.min.scss", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js!./jquery.fancybox.min.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	// ==================================================
	// fancyBox v3.0.47
	//
	// Licensed GPLv3 for open source use
	// or fancyBox Commercial License for commercial use
	//
	// http://fancyapps.com/fancybox/
	// Copyright 2017 fancyApps
	//
	// ==================================================
	!function(t, e, n, o) {'use strict'; function s(t) {var e = t.currentTarget, o = t.data ? t.data.options : {}, s = t.data ? t.data.items : [], i = '', a = 0; t.preventDefault(), t.stopPropagation(), n(e).attr('data-fancybox') && (i = n(e).data('fancybox')), i ? (s = s.length ? s.filter('[data-fancybox="' + i + '"]') : n('[data-fancybox=' + i + ']'), a = s.index(e)) : s = [e], n.fancybox.open(s, o, a);} if (!n) return o; var i = {speed: 330, loop: !0, opacity: 'auto', margin: [44, 0], gutter: 30, infobar: !0, buttons: !0, slideShow: !0, fullScreen: !0, thumbs: !0, closeBtn: !0, smallBtn: 'auto', image: {preload: 'auto', protect: !1}, ajax: {settings: {data: {fancybox: !0}}}, iframe: {tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>', preload: !0, scrolling: 'no', css: {}}, baseClass: '', slideClass: '', baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-controls"><div class="fancybox-infobar"><button data-fancybox-previous class="fancybox-button fancybox-button--left" title="Previous"></button><div class="fancybox-infobar__body"><span class="js-fancybox-index"></span>&nbsp;/&nbsp;<span class="js-fancybox-count"></span></div><button data-fancybox-next class="fancybox-button fancybox-button--right" title="Next"></button></div><div class="fancybox-buttons"><button data-fancybox-close class="fancybox-button fancybox-button--close" title="Close (Esc)"></button></div></div><div class="fancybox-slider-wrap"><div class="fancybox-slider"></div></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div>', spinnerTpl: '<div class="fancybox-loading"></div>', errorTpl: '<div class="fancybox-error"><p>The requested content cannot be loaded. <br /> Please try again later.<p></div>', closeTpl: '<button data-fancybox-close class="fancybox-close-small"></button>', parentEl: 'body', touch: !0, keyboard: !0, focus: !0, closeClickOutside: !0, beforeLoad: n.noop, afterLoad: n.noop, beforeMove: n.noop, afterMove: n.noop, onComplete: n.noop, onInit: n.noop, beforeClose: n.noop, afterClose: n.noop, onActivate: n.noop, onDeactivate: n.noop}, a = n(t), r = n(e), c = 0, l = function(t) {return t && t.hasOwnProperty && t instanceof n;}, u = function() {return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(e) {t.setTimeout(e, 1e3 / 60);};}(), d = function(o) {var s; return 'function' == typeof n && o instanceof n && (o = o[0]), s = o.getBoundingClientRect(), s.bottom > 0 && s.right > 0 && s.left < (t.innerWidth || e.documentElement.clientWidth) && s.top < (t.innerHeight || e.documentElement.clientHeight);}, p = function(t, o, s) {var a = this; a.opts = n.extend(!0, {index: s}, i, o || {}), a.id = a.opts.id || ++c, a.group = [], a.currIndex = parseInt(a.opts.index, 10) || 0, a.prevIndex = null, a.prevPos = null, a.currPos = 0, a.firstRun = null, a.createGroup(t), a.group.length && (a.$lastFocus = n(e.activeElement).blur(), a.slides = {}, a.init(t));}; n.extend(p.prototype, {init: function() {var t, e, o = this, s = !1; o.scrollTop = r.scrollTop(), o.scrollLeft = r.scrollLeft(), n.fancybox.getInstance() || (t = n('body').width(), n('html').addClass('fancybox-enabled'), n.fancybox.isTouch ? (n.each(o.group, function(t, e) {if ('image' !== e.type && 'iframe' !== e.type) return s = !0, !1;}), s && n('body').css({position: 'fixed', width: t, top: o.scrollTop * -1})) : (t = n('body').width() - t, t > 1 && n('<style id="fancybox-noscroll" type="text/css">').html('.compensate-for-scrollbar, .fancybox-enabled body { margin-right: ' + t + 'px; }').appendTo('head'))), e = n(o.opts.baseTpl).attr('id', 'fancybox-container-' + o.id).data('FancyBox', o).addClass(o.opts.baseClass).hide().prependTo(o.opts.parentEl), o.$refs = {container: e, bg: e.find('.fancybox-bg'), controls: e.find('.fancybox-controls'), buttons: e.find('.fancybox-buttons'), slider_wrap: e.find('.fancybox-slider-wrap'), slider: e.find('.fancybox-slider'), caption: e.find('.fancybox-caption')}, o.trigger('onInit'), o.activate(), o.current || o.jumpTo(o.currIndex);}, createGroup: function(t) {var e = this, s = n.makeArray(t); n.each(s, function(t, s) {var i, a, r, c, l = {}, u = {}, d = []; n.isPlainObject(s) ? (l = s, u = s.opts || {}) : 'object' === n.type(s) && n(s).length ? (i = n(s), d = i.data(), u = 'options'in d ? d.options : {}, u = 'object' === n.type(u) ? u : {}, l.type = 'type'in d ? d.type : u.type, l.src = 'src'in d ? d.src : u.src || i.attr('href'), u.width = 'width'in d ? d.width : u.width, u.height = 'height'in d ? d.height : u.height, u.thumb = 'thumb'in d ? d.thumb : u.thumb, u.selector = 'selector'in d ? d.selector : u.selector, 'srcset'in d && (u.image = {srcset: d.srcset}), u.$orig = i) : l = {type: 'html', content: s + ''}, l.opts = n.extend(!0, {}, e.opts, u), a = l.type, r = l.src || '', a || (l.content ? a = 'html' : r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? a = 'image' : r.match(/\.(pdf)((\?|#).*)?$/i) ? a = 'pdf' : '#' === r.charAt(0) && (a = 'inline'), l.type = a), l.index = e.group.length, l.opts.$orig && !l.opts.$orig.length && delete l.opts.$orig, !l.opts.$thumb && l.opts.$orig && (l.opts.$thumb = l.opts.$orig.find('img:first')), l.opts.$thumb && !l.opts.$thumb.length && delete l.opts.$thumb, 'function' === n.type(l.opts.caption) ? l.opts.caption = l.opts.caption.apply(s, [e, l]) : 'caption'in d ? l.opts.caption = d.caption : u.$orig && (l.opts.caption = i.attr('title')), l.opts.caption = l.opts.caption === o ? '' : l.opts.caption + '', 'ajax' === a && (c = r.split(/\s+/, 2), c.length > 1 && (l.src = c.shift(), l.opts.selector = c.shift())), 'auto' == l.opts.smallBtn && (n.inArray(a, ['html', 'inline', 'ajax']) > -1 ? (l.opts.buttons = !1, l.opts.smallBtn = !0) : l.opts.smallBtn = !1), 'pdf' === a && (l.type = 'iframe', l.opts.closeBtn = !0, l.opts.smallBtn = !1, l.opts.iframe.preload = !1), l.opts.modal && n.extend(!0, l.opts, {infobar: 0, buttons: 0, keyboard: 0, slideShow: 0, fullScreen: 0, closeClickOutside: 0}), e.group.push(l);});}, addEvents: function() {var e = this; e.removeEvents(), e.$refs.container.on('click.fb-close', '[data-fancybox-close]', function(t) {t.stopPropagation(), t.preventDefault(), e.close(t);}).on('click.fb-previous', '[data-fancybox-previous]', function(t) {t.stopPropagation(), t.preventDefault(), e.previous();}).on('click.fb-next', '[data-fancybox-next]', function(t) {t.stopPropagation(), t.preventDefault(), e.next();}), n(t).on('orientationchange.fb resize.fb', function(t) {u(function() {t && t.originalEvent && 'resize' === t.originalEvent.type ? e.update() : (e.$refs.slider_wrap.hide(), u(function() {e.$refs.slider_wrap.show(), e.update();}));});}), r.on('focusin.fb', function(t) {var o = n.fancybox ? n.fancybox.getInstance() : null; !o || n(t.target).hasClass('fancybox-container') || n.contains(o.$refs.container[0], t.target) || (t.stopPropagation(), o.focus(), a.scrollTop(e.scrollTop).scrollLeft(e.scrollLeft));}), r.on('keydown.fb', function(t) {var o = e.current, s = t.keyCode || t.which; if (o && o.opts.keyboard && !n(t.target).is('input') && !n(t.target).is('textarea')) {if (8 === s || 27 === s) return t.preventDefault(), void e.close(t); switch (s) {case 37:case 38:t.preventDefault(), e.previous(); break; case 39:case 40:t.preventDefault(), e.next(); break; case 80:case 32:t.preventDefault(), e.SlideShow && (t.preventDefault(), e.SlideShow.toggle()); break; case 70:e.FullScreen && (t.preventDefault(), e.FullScreen.toggle()); break; case 71:e.Thumbs && (t.preventDefault(), e.Thumbs.toggle());}}});}, removeEvents: function() {a.off('scroll.fb resize.fb orientationchange.fb'), r.off('keydown.fb focusin.fb click.fb-close'), this.$refs.container.off('click.fb-close click.fb-previous click.fb-next');}, previous: function(t) {this.jumpTo(this.currIndex - 1, t);}, next: function(t) {this.jumpTo(this.currIndex + 1, t);}, jumpTo: function(t, e) {var n, s, i, a, r = this; if (n = r.firstRun = null === r.firstRun, s = i = t = parseInt(t, 10), a = !!r.current && r.current.opts.loop, !r.isAnimating && (s != r.currIndex || n)) {if (r.group.length > 1 && a)s %= r.group.length, s = s < 0 ? r.group.length + s : s, 2 == r.group.length ? i = t - r.currIndex + r.currPos : (i = s - r.currIndex + r.currPos, Math.abs(r.currPos - (i + r.group.length)) < Math.abs(r.currPos - i) ? i += r.group.length : Math.abs(r.currPos - (i - r.group.length)) < Math.abs(r.currPos - i) && (i -= r.group.length)); else if (!r.group[s]) return void r.update(!1, !1, e); r.current && (r.current.$slide.removeClass('fancybox-slide--current fancybox-slide--complete'), r.updateSlide(r.current, !0)), r.prevIndex = r.currIndex, r.prevPos = r.currPos, r.currIndex = s, r.currPos = i, r.current = r.createSlide(i), r.group.length > 1 && ((r.opts.loop || i - 1 >= 0) && r.createSlide(i - 1), (r.opts.loop || i + 1 < r.group.length) && r.createSlide(i + 1)), r.current.isMoved = !1, r.current.isComplete = !1, e = parseInt(e === o ? 1.5 * r.current.opts.speed : e, 10), r.trigger('beforeMove'), r.updateControls(), n && (r.current.$slide.addClass('fancybox-slide--current'), r.$refs.container.show(), u(function() {r.$refs.bg.css('transition-duration', r.current.opts.speed + 'ms'), r.$refs.container.addClass('fancybox-container--ready');})), r.update(!0, !1, n ? 0 : e, function() {r.afterMove();}), r.loadSlide(r.current), n && r.current.$ghost || r.preload();}}, createSlide: function(t) {var e, o, s, i = this; if (o = t % i.group.length, o = o < 0 ? i.group.length + o : o, !i.slides[t] && i.group[o]) {if (i.opts.loop && i.group.length > 2) for (var a in i.slides) if (i.slides[a].index === o) return s = i.slides[a], s.pos = t, i.slides[t] = s, delete i.slides[a], i.updateSlide(s), s; e = n('<div class="fancybox-slide"></div>').appendTo(i.$refs.slider), i.slides[t] = n.extend(!0, {}, i.group[o], {pos: t, $slide: e, isMoved: !1, isLoaded: !1});} return i.slides[t];}, zoomInOut: function(t, e, o) {var s, i, a, r = this, c = r.current, l = c.$placeholder, u = c.opts.opacity, p = c.opts.$thumb, h = p ? p.offset() : 0, f = c.$slide.offset(); return !!(l && c.isMoved && h && d(p)) && (!('In' === t && !r.firstRun) && (n.fancybox.stop(l), r.isAnimating = !0, s = {top: h.top - f.top + parseFloat(p.css('border-top-width') || 0), left: h.left - f.left + parseFloat(p.css('border-left-width') || 0), width: p.width(), height: p.height(), scaleX: 1, scaleY: 1}, 'auto' == u && (u = Math.abs(c.width / c.height - s.width / s.height) > .1), 'In' === t ? (i = s, a = r.getFitPos(c), a.scaleX = a.width / i.width, a.scaleY = a.height / i.height, u && (i.opacity = .1, a.opacity = 1)) : (i = n.fancybox.getTranslate(l), a = s, c.$ghost && (c.$ghost.show(), c.$image && c.$image.remove()), i.scaleX = i.width / a.width, i.scaleY = i.height / a.height, i.width = a.width, i.height = a.height, u && (a.opacity = 0)), r.updateCursor(a.width, a.height), delete a.width, delete a.height, n.fancybox.setTranslate(l, i), l.show(), r.trigger('beforeZoom' + t), l.css('transition', 'all ' + e + 'ms'), n.fancybox.setTranslate(l, a), setTimeout(function() {var e; l.css('transition', 'none'), e = n.fancybox.getTranslate(l), e.scaleX = 1, e.scaleY = 1, n.fancybox.setTranslate(l, e), r.trigger('afterZoom' + t), o.apply(r), r.isAnimating = !1;}, e), !0));}, canPan: function() {var t = this, e = t.current, n = e.$placeholder, o = !1; return n && (o = t.getFitPos(e), o = Math.abs(n.width() - o.width) > 1 || Math.abs(n.height() - o.height) > 1), o;}, isScaledDown: function() {var t = this, e = t.current, o = e.$placeholder, s = !1; return o && (s = n.fancybox.getTranslate(o), s = s.width < e.width || s.height < e.height), s;}, scaleToActual: function(t, e, s) {var i, a, r, c, l, u = this, d = u.current, p = d.$placeholder, h = parseInt(d.$slide.width(), 10), f = parseInt(d.$slide.height(), 10), g = d.width, b = d.height; p && (u.isAnimating = !0, t = t === o ? .5 * h : t, e = e === o ? .5 * f : e, i = n.fancybox.getTranslate(p), c = g / i.width, l = b / i.height, a = .5 * h - .5 * g, r = .5 * f - .5 * b, g > h && (a = i.left * c - (t * c - t), a > 0 && (a = 0), a < h - g && (a = h - g)), b > f && (r = i.top * l - (e * l - e), r > 0 && (r = 0), r < f - b && (r = f - b)), u.updateCursor(g, b), n.fancybox.animate(p, null, {top: r, left: a, scaleX: c, scaleY: l}, s || d.opts.speed, function() {u.isAnimating = !1;}));}, scaleToFit: function(t) {var e, o = this, s = o.current, i = s.$placeholder; i && (o.isAnimating = !0, e = o.getFitPos(s), o.updateCursor(e.width, e.height), n.fancybox.animate(i, null, {top: e.top, left: e.left, scaleX: e.width / i.width(), scaleY: e.height / i.height()}, t || s.opts.speed, function() {o.isAnimating = !1;}));}, getFitPos: function(t) {var e, o, s, i, r, c, l, u = t.$placeholder || t.$content, d = t.width, p = t.height, h = t.opts.margin; return !(!u || !u.length || !d && !p) && ('number' === n.type(h) && (h = [h, h]), 2 == h.length && (h = [h[0], h[1], h[0], h[1]]), a.width() < 800 && (h = [0, 0, 0, 0]), e = parseInt(t.$slide.width(), 10) - (h[1] + h[3]), o = parseInt(t.$slide.height(), 10) - (h[0] + h[2]), s = Math.min(1, e / d, o / p), c = Math.floor(s * d), l = Math.floor(s * p), i = Math.floor(.5 * (o - l)) + h[0], r = Math.floor(.5 * (e - c)) + h[3], {top: i, left: r, width: c, height: l});}, update: function(t, e, o, s) {var i, a = this; a.isAnimating !== !0 && a.current && (i = a.current.pos * Math.floor(a.current.$slide.width()) * -1 - a.current.pos * a.current.opts.gutter, o = parseInt(o, 10) || 0, n.fancybox.stop(a.$refs.slider), t === !1 ? a.updateSlide(a.current, e) : n.each(a.slides, function(t, n) {a.updateSlide(n, e);}), o ? n.fancybox.animate(a.$refs.slider, null, {top: 0, left: i}, o, function() {a.current.isMoved = !0, 'function' === n.type(s) && s.apply(a);}) : (n.fancybox.setTranslate(a.$refs.slider, {top: 0, left: i}), a.current.isMoved = !0, 'function' === n.type(s) && s.apply(a)));}, updateSlide: function(t, e) {var o, s = this, i = t.$placeholder; t = t || s.current, t && !s.isClosing && (o = t.pos * Math.floor(t.$slide.width()) + t.pos * t.opts.gutter, o !== t.leftPos && (n.fancybox.setTranslate(t.$slide, {top: 0, left: o}), t.leftPos = o), e !== !1 && i && (n.fancybox.setTranslate(i, s.getFitPos(t)), t.pos === s.currPos && s.updateCursor()), t.$slide.trigger('refresh'), s.trigger('onUpdate', t));}, updateCursor: function(t, e) {var n, s = this, i = s.$refs.container.removeClass('fancybox-controls--canzoomIn fancybox-controls--canzoomOut fancybox-controls--canGrab'); !s.isClosing && s.opts.touch && (n = t !== o && e !== o ? t < s.current.width && e < s.current.height : s.isScaledDown(), n ? i.addClass('fancybox-controls--canzoomIn') : s.group.length < 2 ? i.addClass('fancybox-controls--canzoomOut') : i.addClass('fancybox-controls--canGrab'));}, loadSlide: function(t) {var e, o, s, i = this; if (t && !t.isLoaded && !t.isLoading) {switch (t.isLoading = !0, i.trigger('beforeLoad', t), e = t.type, o = t.$slide, o.off('refresh').trigger('onReset').addClass('fancybox-slide--' + (e || 'unknown')).addClass(t.opts.slideClass), e) {case 'image':i.setImage(t); break; case 'iframe':i.setIframe(t); break; case 'html':i.setContent(t, t.content); break; case 'inline':n(t.src).length ? i.setContent(t, n(t.src)) : i.setError(t); break; case 'ajax':i.showLoading(t), s = n.ajax(n.extend({}, t.opts.ajax.settings, {url: t.src, success: function(e, n) {'success' === n && i.setContent(t, e);}, error: function(e, n) {e && 'abort' !== n && i.setError(t);}})), o.one('onReset', function() {s.abort();}); break; default:i.setError(t);} return !0;}}, setImage: function(e) {var o, s, i, a, r = this, c = e.opts.image.srcset; if (e.isLoaded && !e.hasError) return void r.afterLoad(e); if (c) {i = t.devicePixelRatio || 1, a = t.innerWidth * i, s = c.split(',').map(function(t) {var e = {}; return t.trim().split(/\s+/).forEach(function(t, n) {var o = parseInt(t.substring(0, t.length - 1), 10); return 0 === n ? e.url = t : void(o && (e.value = o, e.postfix = t[t.length - 1]));}), e;}), s.sort(function(t, e) {return t.value - e.value;}); for (var l = 0; l < s.length; l++) {var u = s[l]; if ('w' === u.postfix && u.value >= a || 'x' === u.postfix && u.value >= i) {o = u; break;}}!o && s.length && (o = s[s.length - 1]), o && (e.src = o.url, e.width && e.height && 'w' == o.postfix && (e.height = e.width / e.height * o.value, e.width = o.value));}e.$placeholder = n('<div class="fancybox-placeholder"></div>').hide().appendTo(e.$slide), e.opts.preload !== !1 && e.opts.width && e.opts.height && (e.opts.thumb || e.opts.$thumb) ? (e.width = e.opts.width, e.height = e.opts.height, e.$ghost = n('<img />').one('load error', function() {r.isClosing || (n('<img/>')[0].src = e.src, r.revealImage(e, function() {r.setBigImage(e), r.firstRun && e.index === r.currIndex && r.preload();}));}).addClass('fancybox-image').appendTo(e.$placeholder).attr('src', e.opts.thumb || e.opts.$thumb.attr('src'))) : r.setBigImage(e);}, setBigImage: function(t) {var e = this, o = n('<img />'); t.$image = o.one('error', function() {e.setError(t);}).one('load', function() {clearTimeout(t.timouts), t.timouts = null, e.isClosing || (t.width = this.naturalWidth, t.height = this.naturalHeight, t.opts.image.srcset && o.attr('sizes', '100vw').attr('srcset', t.opts.image.srcset), e.afterLoad(t), t.$ghost && (t.timouts = setTimeout(function() {t.$ghost.hide();}, 350)));}).addClass('fancybox-image').attr('src', t.src).appendTo(t.$placeholder), o[0].complete ? o.trigger('load') : o[0].error ? o.trigger('error') : t.timouts = setTimeout(function() {o[0].complete || t.hasError || e.showLoading(t);}, 150), t.opts.image.protect && n('<div class="fancybox-spaceball"></div>').appendTo(t.$placeholder).on('contextmenu.fb', function(t) {return 2 == t.button && t.preventDefault(), !0;});}, revealImage: function(t, e) {var o = this; return e = e || n.noop, 'image' !== t.type || t.hasError || t.isRevealed === !0 ? void e.apply(o) : (t.isRevealed = !0, void(t.pos === o.currPos && o.zoomInOut('In', t.opts.speed, e) || (t.$ghost && !t.isLoaded && o.updateSlide(t, !0), t.pos === o.currPos ? n.fancybox.animate(t.$placeholder, {opacity: 0}, {opacity: 1}, 300, e) : t.$placeholder.show(), e.apply(o))));}, setIframe: function(t) {var e, s = this, i = t.opts.iframe, a = t.$slide; t.$content = n('<div class="fancybox-content"></div>').css(i.css).appendTo(a), e = n(i.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr('scrolling', n.fancybox.isTouch ? 'auto' : i.scrolling).appendTo(t.$content), i.preload ? (t.$content.addClass('fancybox-tmp'), s.showLoading(t), e.on('load.fb error.fb', function(e) {this.isReady = 1, t.$slide.trigger('refresh'), s.afterLoad(t);}), a.on('refresh.fb', function() {var n, s, a, r, c, l = t.$content; if (1 === e[0].isReady) {try {n = e.contents(), s = n.find('body');} catch (t) {}s && s.length && (i.css.width === o || i.css.height === o) && (a = e[0].contentWindow.document.documentElement.scrollWidth, r = Math.ceil(s.outerWidth(!0) + (l.width() - a)), c = Math.ceil(s.outerHeight(!0)), l.css({width: i.css.width === o ? r + (l.outerWidth() - l.innerWidth()) : i.css.width, height: i.css.height === o ? c + (l.outerHeight() - l.innerHeight()) : i.css.height})), l.removeClass('fancybox-tmp');}})) : this.afterLoad(t), e.attr('src', t.src), t.opts.smallBtn && t.$content.prepend(t.opts.closeTpl), a.one('onReset', function() {try {n(this).find('iframe').hide().attr('src', '//about:blank');} catch (t) {}n(this).empty(), t.isLoaded = !1;});}, setContent: function(t, e) {var o = this; o.isClosing || (o.hideLoading(t), t.$slide.empty(), l(e) && e.parent().length ? (e.data('placeholder') && e.parents('.fancybox-slide').trigger('onReset'), e.data({placeholder: n('<div></div>').hide().insertAfter(e)}).css('display', 'inline-block')) : ('string' === n.type(e) && (e = n('<div>').append(e).contents(), 3 === e[0].nodeType && (e = n('<div>').html(e))), t.opts.selector && (e = n('<div>').html(e).find(t.opts.selector))), t.$slide.one('onReset', function() {var o = l(e) ? e.data('placeholder') : 0; o && (e.hide().replaceAll(o), e.data('placeholder', null)), t.hasError || (n(this).empty(), t.isLoaded = !1);}), t.$content = n(e).appendTo(t.$slide), t.opts.smallBtn === !0 && t.$content.find('.fancybox-close-small').remove().end().eq(0).append(t.opts.closeTpl), this.afterLoad(t));}, setError: function(t) {t.hasError = !0, this.setContent(t, t.opts.errorTpl);}, showLoading: function(t) {var e = this; t = t || e.current, t && !t.$spinner && (t.$spinner = n(e.opts.spinnerTpl).appendTo(t.$slide));}, hideLoading: function(t) {var e = this; t = t || e.current, t && t.$spinner && (t.$spinner.remove(), delete t.$spinner);}, afterMove: function() {var t = this, e = t.current, o = {}; e && (e.$slide.siblings().trigger('onReset'), n.each(t.slides, function(e, n) {n.pos >= t.currPos - 1 && n.pos <= t.currPos + 1 ? o[n.pos] = n : n && n.$slide.remove();}), t.slides = o, t.trigger('afterMove'), e.isLoaded && t.complete());}, afterLoad: function(t) {var e = this; e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger('afterLoad', t), e.hideLoading(t), t.$ghost || e.updateSlide(t, !0), t.index === e.currIndex && t.isMoved ? e.complete() : t.$ghost || e.revealImage(t));}, complete: function() {var t = this, e = t.current; t.revealImage(e, function() {e.isComplete = !0, e.$slide.addClass('fancybox-slide--complete'), t.updateCursor(), t.trigger('onComplete'), e.opts.focus && 'image' !== e.type && 'iframe' !== e.type && t.focus();});}, preload: function() {var t, e, n = this; n.group.length < 2 || (t = n.slides[n.currPos + 1], e = n.slides[n.currPos - 1], t && 'image' === t.type && n.loadSlide(t), e && 'image' === e.type && n.loadSlide(e));}, focus: function() {var t, e = this.current; t = e && e.isComplete ? e.$slide.find('button,:input,[tabindex],a:not(".disabled")').filter(':visible:first') : null, t && t.length || (t = this.$refs.container), t.focus(), this.$refs.slider_wrap.scrollLeft(0), e && e.$slide.scrollTop(0);}, activate: function() {var t = this; n('.fancybox-container').each(function() {var e = n(this).data('FancyBox'); e && e.uid !== t.uid && !e.isClosing && e.trigger('onDeactivate');}), t.current && (t.$refs.container.index() > 0 && t.$refs.container.prependTo(e.body), t.updateControls()), t.trigger('onActivate'), t.addEvents();}, close: function(t) {var e = this, o = e.current, s = o.opts.speed, i = n.proxy(function() {e.cleanUp(t);}, this); return !e.isAnimating && !e.isClosing && (e.trigger('beforeClose', t) === !1 ? (n.fancybox.stop(e.$refs.slider), void u(function() {e.update(!0, !0, 150);})) : (e.isClosing = !0, o.timouts && clearTimeout(o.timouts), t !== !0 && n.fancybox.stop(e.$refs.slider), e.$refs.container.removeClass('fancybox-container--active').addClass('fancybox-container--closing'), o.$slide.removeClass('fancybox-slide--complete').siblings().remove(), o.isMoved || o.$slide.css('overflow', 'visible'), e.removeEvents(), e.hideLoading(o), e.hideControls(), e.updateCursor(), e.$refs.bg.css('transition-duration', s + 'ms'), this.$refs.container.removeClass('fancybox-container--ready'), void(t === !0 ? setTimeout(i, s) : e.zoomInOut('Out', s, i) || n.fancybox.animate(e.$refs.container, null, {opacity: 0}, s, 'easeInSine', i))));}, cleanUp: function(t) {var e, o = this; o.$refs.slider.children().trigger('onReset'), o.$refs.container.empty().remove(), o.trigger('afterClose', t), o.current = null, e = n.fancybox.getInstance(), e ? e.activate() : (n('html').removeClass('fancybox-enabled'), n('body').removeAttr('style'), a.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft), n('#fancybox-noscroll').remove()), o.$lastFocus && o.$lastFocus.focus();}, trigger: function(t, o) {var s, i = Array.prototype.slice.call(arguments, 1), a = this, r = o && o.opts ? o : a.current; return r ? i.unshift(r) : r = a, i.unshift(a), n.isFunction(r.opts[t]) && (s = r.opts[t].apply(r, i)), s === !1 ? s : void('afterClose' === t ? n(e).trigger(t + '.fb', i) : a.$refs.container.trigger(t + '.fb', i));}, toggleControls: function(t) {this.isHiddenControls ? this.updateControls(t) : this.hideControls();}, hideControls: function() {this.isHiddenControls = !0, this.$refs.container.removeClass('fancybox-show-controls'), this.$refs.container.removeClass('fancybox-show-caption');}, updateControls: function(t) {var e = this, o = e.$refs.container, s = e.$refs.caption, i = e.current, a = i.index, r = i.opts, c = r.caption; this.isHiddenControls && t !== !0 || (this.isHiddenControls = !1, o.addClass('fancybox-show-controls').toggleClass('fancybox-show-infobar', !!r.infobar && e.group.length > 1).toggleClass('fancybox-show-buttons', !!r.buttons).toggleClass('fancybox-is-modal', !!r.modal), n('.fancybox-button--left', o).toggleClass('fancybox-button--disabled', !r.loop && a <= 0), n('.fancybox-button--right', o).toggleClass('fancybox-button--disabled', !r.loop && a >= e.group.length - 1), n('.fancybox-button--play', o).toggle(!!(r.slideShow && e.group.length > 1)), n('.fancybox-button--close', o).toggle(!!r.closeBtn), n('.js-fancybox-count', o).html(e.group.length), n('.js-fancybox-index', o).html(a + 1), i.$slide.trigger('refresh'), s && s.empty(), c && c.length ? (s.html(c), this.$refs.container.addClass('fancybox-show-caption '), e.$caption = s) : this.$refs.container.removeClass('fancybox-show-caption'));}}), n.fancybox = {version: '3.0.47', defaults: i, getInstance: function(t) {var e = n('.fancybox-container:not(".fancybox-container--closing"):first').data('FancyBox'), o = Array.prototype.slice.call(arguments, 1); return e instanceof p && ('string' === n.type(t) ? e[t].apply(e, o) : 'function' === n.type(t) && t.apply(e, o), e);}, open: function(t, e, n) {return new p(t, e, n);}, close: function(t) {var e = this.getInstance(); e && (e.close(), t === !0 && this.close());}, isTouch: e.createTouch !== o && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent), use3d: function() {var n = e.createElement('div'); return t.getComputedStyle(n).getPropertyValue('transform') && !(e.documentMode && e.documentMode <= 11);}(), getTranslate: function(t) {var e, n; return !(!t || !t.length) && (e = t.get(0).getBoundingClientRect(), n = t.eq(0).css('transform'), n && n.indexOf('matrix') !== -1 ? (n = n.split('(')[1], n = n.split(')')[0], n = n.split(',')) : n = [], n.length ? (n = n.length > 10 ? [n[13], n[12], n[0], n[5]] : [n[5], n[4], n[0], n[3]], n = n.map(parseFloat)) : n = [0, 0, 1, 1], {top: n[0], left: n[1], scaleX: n[2], scaleY: n[3], opacity: parseFloat(t.css('opacity')), width: e.width, height: e.height});}, setTranslate: function(t, e) {var n = '', s = {}; if (t && e) return e.left === o && e.top === o || (n = (e.left === o ? t.position().top : e.left) + 'px, ' + (e.top === o ? t.position().top : e.top) + 'px', n = this.use3d ? 'translate3d(' + n + ', 0px)' : 'translate(' + n + ')'), e.scaleX !== o && e.scaleY !== o && (n = (n.length ? n + ' ' : '') + 'scale(' + e.scaleX + ', ' + e.scaleY + ')'), n.length && (s.transform = n), e.opacity !== o && (s.opacity = e.opacity), e.width !== o && (s.width = e.width), e.height !== o && (s.height = e.height), t.css(s);}, easing: {easeOutCubic: function(t, e, n, o) {return n * ((t = t / o - 1) * t * t + 1) + e;}, easeInCubic: function(t, e, n, o) {return n * (t /= o) * t * t + e;}, easeOutSine: function(t, e, n, o) {return n * Math.sin(t / o * (Math.PI / 2)) + e;}, easeInSine: function(t, e, n, o) {return -n * Math.cos(t / o * (Math.PI / 2)) + n + e;}}, stop: function(t) {t.removeData('animateID');}, animate: function(t, e, s, i, a, r) {var c, l, d, p = this, h = null, f = 0, g = function() {s.scaleX !== o && s.scaleY !== o && e && e.width !== o && e.height !== o && (s.width = e.width * s.scaleX, s.height = e.height * s.scaleY, s.scaleX = 1, s.scaleY = 1), p.setTranslate(t, s), r();}, b = function(n) {if (c = [], l = 0, t.length && t.data('animateID') === d) {if (n = n || Date.now(), h && (l = n - h), h = n, f += l, f >= i) return void g(); for (var r in s)s.hasOwnProperty(r) && e[r] !== o && (e[r] == s[r] ? c[r] = s[r] : c[r] = p.easing[a](f, e[r], s[r] - e[r], i)); p.setTranslate(t, c), u(b);}}; p.animateID = d = p.animateID === o ? 1 : p.animateID + 1, t.data('animateID', d), r === o && 'function' == n.type(a) && (r = a, a = o), a || (a = 'easeOutCubic'), r = r || n.noop, e ? this.setTranslate(t, e) : e = this.getTranslate(t), i ? (t.show(), u(b)) : g();}}, n.fn.fancybox = function(t) {return this.off('click.fb-start').on('click.fb-start', {items: this, options: t || {}}, s), this;}, n(e).on('click.fb-start', '[data-fancybox]', s);}(window, document, window.jQuery), function(t) {'use strict'; var e = function(e, n, o) {if (e) return o = o || '', 'object' === t.type(o) && (o = t.param(o, !0)), t.each(n, function(t, n) {e = e.replace('$' + t, n || '');}), o.length && (e += (e.indexOf('?') > 0 ? '&' : '?') + o), e;}, n = {youtube: {matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i, params: {autoplay: 1, autohide: 1, fs: 1, rel: 0, hd: 1, wmode: 'transparent', enablejsapi: 1, html5: 1}, paramPlace: 8, type: 'iframe', url: '//www.youtube.com/embed/$4', thumb: '//img.youtube.com/vi/$4/hqdefault.jpg'}, vimeo: {matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/, params: {autoplay: 1, hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1, api: 1}, paramPlace: 3, type: 'iframe', url: '//player.vimeo.com/video/$2'}, metacafe: {matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/, type: 'iframe', url: '//www.metacafe.com/embed/$1/?ap=1'}, dailymotion: {matcher: /dailymotion.com\/video\/(.*)\/?(.*)/, params: {additionalInfos: 0, autoStart: 1}, type: 'iframe', url: '//www.dailymotion.com/embed/video/$1'}, vine: {matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/, type: 'iframe', url: '//vine.co/v/$1/embed/simple'}, instagram: {matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i, type: 'image', url: '//$1/p/$2/media/?size=l'}, google_maps: {matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i, type: 'iframe', url: function(t) {return '//maps.google.' + t[2] + '/?ll=' + (t[9] ? t[9] + '&z=' + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, '&') : '') : t[12]) + '&output=' + (t[12] && t[12].indexOf('layer=c') > 0 ? 'svembed' : 'embed');}}}; t(document).on('onInit.fb', function(o, s) {t.each(s.group, function(o, s) {var i, a, r, c, l, u, d = s.src || '', p = !1; s.type || (t.each(n, function(n, o) {if (a = d.match(o.matcher), l = {}, u = n, a) {if (p = o.type, o.paramPlace && a[o.paramPlace]) {c = a[o.paramPlace], '?' == c[0] && (c = c.substring(1)), c = c.split('&'); for (var h = 0; h < c.length; ++h) {var f = c[h].split('=', 2); 2 == f.length && (l[f[0]] = decodeURIComponent(f[1].replace(/\+/g, ' ')));}} return r = t.extend(!0, {}, o.params, s.opts[n], l), d = 'function' === t.type(o.url) ? o.url.call(this, a, r, s) : e(o.url, a, r), i = 'function' === t.type(o.thumb) ? o.thumb.call(this, a, r, s) : e(o.thumb, a), 'vimeo' === u && (d = d.replace('&%23', '#')), !1;}}), p ? (s.src = d, s.type = p, s.opts.thumb || s.opts.$thumb && s.opts.$thumb.length || (s.opts.thumb = i), 'iframe' === p && (t.extend(!0, s.opts, {iframe: {preload: !1, scrolling: 'no'}, smallBtn: !1, closeBtn: !0, fullScreen: !1, slideShow: !1}), s.opts.slideClass += ' fancybox-slide--video')) : s.type = 'iframe');});});}(window.jQuery), function(t, e, n) {'use strict'; var o = function() {return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(e) {t.setTimeout(e, 1e3 / 60);};}(), s = function(e) {var n = []; e = e.originalEvent || e || t.e, e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e]; for (var o in e)e[o].pageX ? n.push({x: e[o].pageX, y: e[o].pageY}) : e[o].clientX && n.push({x: e[o].clientX, y: e[o].clientY}); return n;}, i = function(t, e, n) {return e && t ? 'x' === n ? t.x - e.x : 'y' === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0;}, a = function(t) {return t.is('a') || t.is('button') || t.is('input') || t.is('select') || t.is('textarea') || n.isFunction(t.get(0).onclick);}, r = function(e) {var n = t.getComputedStyle(e)['overflow-y'], o = t.getComputedStyle(e)['overflow-x'], s = ('scroll' === n || 'auto' === n) && e.scrollHeight > e.clientHeight, i = ('scroll' === o || 'auto' === o) && e.scrollWidth > e.clientWidth; return s || i;}, c = function(t) {for (var e = !1; ;) {if (e = r(t.get(0))) break; if (t = t.parent(), !t.length || t.hasClass('fancybox-slider') || t.is('body')) break;} return e;}, l = function(t) {var e = this; e.instance = t, e.$wrap = t.$refs.slider_wrap, e.$slider = t.$refs.slider, e.$container = t.$refs.container, e.destroy(), e.$wrap.on('touchstart.fb mousedown.fb', n.proxy(e, 'ontouchstart'));}; l.prototype.destroy = function() {this.$wrap.off('touchstart.fb mousedown.fb touchmove.fb mousemove.fb touchend.fb touchcancel.fb mouseup.fb mouseleave.fb');}, l.prototype.ontouchstart = function(e) {var o = this, r = n(e.target), l = o.instance, u = l.current, d = u.$content || u.$placeholder; return o.startPoints = s(e), o.$target = r, o.$content = d, o.canvasWidth = Math.round(u.$slide[0].clientWidth), o.canvasHeight = Math.round(u.$slide[0].clientHeight), o.startEvent = e, e.originalEvent.clientX > o.canvasWidth + u.$slide.offset().left || (a(r) || a(r.parent()) || c(r) ? void 0 : u.opts.touch ? void(e.originalEvent && 2 == e.originalEvent.button || (e.stopPropagation(), e.preventDefault(), !u || o.instance.isAnimating || o.instance.isClosing || !o.startPoints || o.startPoints.length > 1 && !u.isMoved || (o.$wrap.off('touchmove.fb mousemove.fb', n.proxy(o, 'ontouchmove')), o.$wrap.off('touchend.fb touchcancel.fb mouseup.fb mouseleave.fb', n.proxy(o, 'ontouchend')), o.$wrap.on('touchend.fb touchcancel.fb mouseup.fb mouseleave.fb', n.proxy(o, 'ontouchend')), o.$wrap.on('touchmove.fb mousemove.fb', n.proxy(o, 'ontouchmove')), o.startTime = (new Date).getTime(), o.distanceX = o.distanceY = o.distance = 0, o.canTap = !1, o.isPanning = !1, o.isSwiping = !1, o.isZooming = !1, o.sliderStartPos = n.fancybox.getTranslate(o.$slider), o.contentStartPos = n.fancybox.getTranslate(o.$content), o.contentLastPos = null, 1 !== o.startPoints.length || o.isZooming || (o.canTap = u.isMoved, 'image' === u.type && (o.contentStartPos.width > o.canvasWidth + 1 || o.contentStartPos.height > o.canvasHeight + 1) ? (n.fancybox.stop(o.$content), o.isPanning = !0) : (n.fancybox.stop(o.$slider), o.isSwiping = !0), o.$container.addClass('fancybox-controls--isGrabbing')), 2 === o.startPoints.length && u.isMoved && !u.hasError && 'image' === u.type && (u.isLoaded || u.$ghost) && (o.isZooming = !0, o.isSwiping = !1, o.isPanning = !1, n.fancybox.stop(o.$content), o.centerPointStartX = .5 * (o.startPoints[0].x + o.startPoints[1].x) - n(t).scrollLeft(), o.centerPointStartY = .5 * (o.startPoints[0].y + o.startPoints[1].y) - n(t).scrollTop(), o.percentageOfImageAtPinchPointX = (o.centerPointStartX - o.contentStartPos.left) / o.contentStartPos.width, o.percentageOfImageAtPinchPointY = (o.centerPointStartY - o.contentStartPos.top) / o.contentStartPos.height, o.startDistanceBetweenFingers = i(o.startPoints[0], o.startPoints[1]))))) : (o.endPoints = o.startPoints, o.ontap()));}, l.prototype.ontouchmove = function(t) {var e = this; t.preventDefault(), e.newPoints = s(t), e.newPoints && e.newPoints.length && (e.distanceX = i(e.newPoints[0], e.startPoints[0], 'x'), e.distanceY = i(e.newPoints[0], e.startPoints[0], 'y'), e.distance = i(e.newPoints[0], e.startPoints[0]), e.distance > 0 && (e.isSwiping ? e.onSwipe() : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()));}, l.prototype.onSwipe = function() {var e, s = this, i = s.isSwiping, a = s.sliderStartPos.left; i === !0 ? Math.abs(s.distance) > 10 && (s.instance.group.length < 2 ? s.isSwiping = 'y' : !s.instance.current.isMoved || s.instance.opts.touch.vertical === !1 || 'auto' === s.instance.opts.touch.vertical && n(t).width() > 800 ? s.isSwiping = 'x' : (e = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI),
	    s.isSwiping = e > 45 && e < 135 ? 'y' : 'x'), s.canTap = !1, s.instance.current.isMoved = !1, s.startPoints = s.newPoints) : ('x' == i && (!s.instance.current.opts.loop && 0 === s.instance.current.index && s.distanceX > 0 ? a += Math.pow(s.distanceX, .8) : !s.instance.current.opts.loop && s.instance.current.index === s.instance.group.length - 1 && s.distanceX < 0 ? a -= Math.pow(-s.distanceX, .8) : a += s.distanceX), s.sliderLastPos = {top: 'x' == i ? 0 : s.sliderStartPos.top + s.distanceY, left: a}, o(function() {n.fancybox.setTranslate(s.$slider, s.sliderLastPos);}));}, l.prototype.onPan = function() {var t, e, s, i = this; i.canTap = !1, t = i.contentStartPos.width > i.canvasWidth ? i.contentStartPos.left + i.distanceX : i.contentStartPos.left, e = i.contentStartPos.top + i.distanceY, s = i.limitMovement(t, e, i.contentStartPos.width, i.contentStartPos.height), s.scaleX = i.contentStartPos.scaleX, s.scaleY = i.contentStartPos.scaleY, i.contentLastPos = s, o(function() {n.fancybox.setTranslate(i.$content, i.contentLastPos);});}, l.prototype.limitMovement = function(t, e, n, o) {var s, i, a, r, c = this, l = c.canvasWidth, u = c.canvasHeight, d = c.contentStartPos.left, p = c.contentStartPos.top, h = c.distanceX, f = c.distanceY; return s = Math.max(0, .5 * l - .5 * n), i = Math.max(0, .5 * u - .5 * o), a = Math.min(l - n, .5 * l - .5 * n), r = Math.min(u - o, .5 * u - .5 * o), n > l && (h > 0 && t > s && (t = s - 1 + Math.pow(-s + d + h, .8) || 0), h < 0 && t < a && (t = a + 1 - Math.pow(a - d - h, .8) || 0)), o > u && (f > 0 && e > i && (e = i - 1 + Math.pow(-i + p + f, .8) || 0), f < 0 && e < r && (e = r + 1 - Math.pow(r - p - f, .8) || 0)), {top: e, left: t};}, l.prototype.limitPosition = function(t, e, n, o) {var s = this, i = s.canvasWidth, a = s.canvasHeight; return n > i ? (t = t > 0 ? 0 : t, t = t < i - n ? i - n : t) : t = Math.max(0, i / 2 - n / 2), o > a ? (e = e > 0 ? 0 : e, e = e < a - o ? a - o : e) : e = Math.max(0, a / 2 - o / 2), {top: e, left: t};}, l.prototype.onZoom = function() {var e = this, s = e.contentStartPos.width, a = e.contentStartPos.height, r = e.contentStartPos.left, c = e.contentStartPos.top, l = i(e.newPoints[0], e.newPoints[1]), u = l / e.startDistanceBetweenFingers, d = Math.floor(s * u), p = Math.floor(a * u), h = (s - d) * e.percentageOfImageAtPinchPointX, f = (a - p) * e.percentageOfImageAtPinchPointY, g = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(), b = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(), m = g - e.centerPointStartX, y = b - e.centerPointStartY, v = r + (h + m), x = c + (f + y), w = {top: x, left: v, scaleX: e.contentStartPos.scaleX * u, scaleY: e.contentStartPos.scaleY * u}; e.canTap = !1, e.newWidth = d, e.newHeight = p, e.contentLastPos = w, o(function() {n.fancybox.setTranslate(e.$content, e.contentLastPos);});}, l.prototype.ontouchend = function(t) {var e = this, o = e.instance.current, i = Math.max((new Date).getTime() - e.startTime, 1), a = e.isSwiping, r = e.isPanning, c = e.isZooming; return e.endPoints = s(t), e.$container.removeClass('fancybox-controls--isGrabbing'), e.$wrap.off('touchmove.fb mousemove.fb', n.proxy(this, 'ontouchmove')), e.$wrap.off('touchend.fb touchcancel.fb mouseup.fb mouseleave.fb', n.proxy(this, 'ontouchend')), e.isSwiping = !1, e.isPanning = !1, e.isZooming = !1, e.canTap ? e.ontap() : (e.velocityX = e.distanceX / i * .5, e.velocityY = e.distanceY / i * .5, e.speed = o.opts.speed || 330, e.speedX = Math.max(.75 * e.speed, Math.min(1.5 * e.speed, 1 / Math.abs(e.velocityX) * e.speed)), e.speedY = Math.max(.75 * e.speed, Math.min(1.5 * e.speed, 1 / Math.abs(e.velocityY) * e.speed)), void(r ? e.endPanning() : c ? e.endZooming() : e.endSwiping(a)));}, l.prototype.endSwiping = function(t) {var e = this; 'y' == t && Math.abs(e.distanceY) > 50 ? (n.fancybox.animate(e.$slider, null, {top: e.sliderStartPos.top + e.distanceY + 150 * e.velocityY, left: e.sliderStartPos.left, opacity: 0}, e.speedY), e.instance.close(!0)) : 'x' == t && e.distanceX > 50 ? e.instance.previous(e.speedX) : 'x' == t && e.distanceX < -50 ? e.instance.next(e.speedX) : e.instance.update(!1, !0, 150);}, l.prototype.endPanning = function() {var t, e, o, s = this; s.contentLastPos && (t = s.contentLastPos.left + s.velocityX * s.speed * 2, e = s.contentLastPos.top + s.velocityY * s.speed * 2, o = s.limitPosition(t, e, s.contentStartPos.width, s.contentStartPos.height), o.width = s.contentStartPos.width, o.height = s.contentStartPos.height, n.fancybox.animate(s.$content, null, o, s.speed, 'easeOutSine'));}, l.prototype.endZooming = function() {var t, e, o, s, i = this, a = i.instance.current, r = i.newWidth, c = i.newHeight; i.contentLastPos && (t = i.contentLastPos.left, e = i.contentLastPos.top, s = {top: e, left: t, width: r, height: c, scaleX: 1, scaleY: 1}, n.fancybox.setTranslate(i.$content, s), r < i.canvasWidth && c < i.canvasHeight ? i.instance.scaleToFit(150) : r > a.width || c > a.height ? i.instance.scaleToActual(i.centerPointStartX, i.centerPointStartY, 150) : (o = i.limitPosition(t, e, r, c), n.fancybox.animate(i.$content, null, o, i.speed, 'easeOutSine')));}, l.prototype.ontap = function() {var t = this, e = t.instance, o = e.current, s = t.endPoints[0].x, i = t.endPoints[0].y; if (s -= t.$wrap.offset().left, i -= t.$wrap.offset().top, e.SlideShow && e.SlideShow.isActive && e.SlideShow.stop(), !n.fancybox.isTouch) return o.opts.closeClickOutside && t.$target.is('.fancybox-slide') ? void e.close(t.startEvent) : void('image' == o.type && o.isMoved && (e.canPan() ? e.scaleToFit() : e.isScaledDown() ? e.scaleToActual(s, i) : e.group.length < 2 && e.close(t.startEvent))); if (t.tapped) {if (clearTimeout(t.tapped), t.tapped = null, Math.abs(s - t.x) > 50 || Math.abs(i - t.y) > 50 || !o.isMoved) return this; 'image' == o.type && (o.isLoaded || o.$ghost) && (e.canPan() ? e.scaleToFit() : e.isScaledDown() && e.scaleToActual(s, i));} else t.x = s, t.y = i, t.tapped = setTimeout(function() {t.tapped = null, e.toggleControls(!0);}, 300); return this;}, n(e).on('onActivate.fb', function(t, e) {e && !e.Guestures && (e.Guestures = new l(e));}), n(e).on('beforeClose.fb', function(t, e) {e && e.Guestures && e.Guestures.destroy();});}(window, document, window.jQuery), function(t, e) {'use strict'; var n = function(t) {this.instance = t, this.init();}; e.extend(n.prototype, {timer: null, isActive: !1, $button: null, speed: 3e3, init: function() {var t = this; t.$button = e('<button data-fancybox-play class="fancybox-button fancybox-button--play" title="Slideshow (P)"></button>').appendTo(t.instance.$refs.buttons), t.instance.$refs.container.on('click', '[data-fancybox-play]', function() {t.toggle();});}, set: function() {var t = this; t.instance && t.instance.current && (t.instance.current.opts.loop || t.instance.currIndex < t.instance.group.length - 1) ? t.timer = setTimeout(function() {t.instance.next();}, t.instance.current.opts.slideShow.speed || t.speed) : t.stop();}, clear: function() {var t = this; clearTimeout(t.timer), t.timer = null;}, start: function() {var t = this; t.stop(), t.instance && t.instance.current && (t.instance.current.opts.loop || t.instance.currIndex < t.instance.group.length - 1) && (t.instance.$refs.container.on({'beforeLoad.fb.player': e.proxy(t, 'clear'), 'onComplete.fb.player': e.proxy(t, 'set')}), t.isActive = !0, t.instance.current.isComplete && t.set(), t.instance.$refs.container.trigger('onPlayStart'), t.$button.addClass('fancybox-button--pause'));}, stop: function() {var t = this; t.clear(), t.instance.$refs.container.trigger('onPlayEnd').off('.player'), t.$button.removeClass('fancybox-button--pause'), t.isActive = !1;}, toggle: function() {var t = this; t.isActive ? t.stop() : t.start();}}), e(t).on('onInit.fb', function(t, e) {e && e.group.length > 1 && e.opts.slideShow && !e.SlideShow && (e.SlideShow = new n(e));}), e(t).on('beforeClose.fb onDeactivate.fb', function(t, e) {e && e.SlideShow && e.SlideShow.stop();});}(document, window.jQuery), function(t, e) {'use strict'; var n = function() {var e, n, o, s = [['requestFullscreen', 'exitFullscreen', 'fullscreenElement', 'fullscreenEnabled', 'fullscreenchange', 'fullscreenerror'], ['webkitRequestFullscreen', 'webkitExitFullscreen', 'webkitFullscreenElement', 'webkitFullscreenEnabled', 'webkitfullscreenchange', 'webkitfullscreenerror'], ['webkitRequestFullScreen', 'webkitCancelFullScreen', 'webkitCurrentFullScreenElement', 'webkitCancelFullScreen', 'webkitfullscreenchange', 'webkitfullscreenerror'], ['mozRequestFullScreen', 'mozCancelFullScreen', 'mozFullScreenElement', 'mozFullScreenEnabled', 'mozfullscreenchange', 'mozfullscreenerror'], ['msRequestFullscreen', 'msExitFullscreen', 'msFullscreenElement', 'msFullscreenEnabled', 'MSFullscreenChange', 'MSFullscreenError']], i = {}; for (n = 0; n < s.length; n++) if (e = s[n], e && e[1]in t) {for (o = 0; o < e.length; o++)i[s[0][o]] = e[o]; return i;} return !1;}(); if (n) {var o = {request: function(e) {e = e || t.documentElement, e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT);}, exit: function() {t[n.exitFullscreen]();}, toggle: function(t) {this.isFullscreen() ? this.exit() : this.request(t);}, isFullscreen: function() {return Boolean(t[n.fullscreenElement]);}, enabled: function() {return Boolean(t[n.fullscreenEnabled]);}}; e(t).on({'onInit.fb': function(t, n) {var s; n && n.opts.fullScreen && !n.FullScreen && (s = n.$refs.container, n.$refs.button_fs = e('<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="Full screen (F)"></button>').appendTo(n.$refs.buttons), s.on('click.fb-fullscreen', '[data-fancybox-fullscreen]', function(t) {t.stopPropagation(), t.preventDefault(), o.toggle(s[0]);}), n.opts.fullScreen.requestOnStart === !0 && o.request(s[0]));}, 'beforeMove.fb': function(t, e) {e && e.$refs.button_fs && e.$refs.button_fs.toggle(!!e.current.opts.fullScreen);}, 'beforeClose.fb': function() {o.exit();}}), e(t).on(n.fullscreenchange, function() {var t = e.fancybox.getInstance(), n = t ? t.current.$placeholder : null; n && (n.css('transition', 'none'), t.isAnimating = !1, t.update(!0, !0, 0));});}}(document, window.jQuery), function(t, e) {'use strict'; var n = function(t) {this.instance = t, this.init();}; e.extend(n.prototype, {$button: null, $grid: null, $list: null, isVisible: !1, init: function() {var t = this; t.$button = e('<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="Thumbnails (G)"></button>').appendTo(this.instance.$refs.buttons).on('touchend click', function(e) {e.stopPropagation(), e.preventDefault(), t.toggle();});}, create: function() {var t, n, o = this.instance; this.$grid = e('<div class="fancybox-thumbs"></div>').appendTo(o.$refs.container), t = '<ul>', e.each(o.group, function(e, o) {n = o.opts.thumb || (o.opts.$thumb ? o.opts.$thumb.attr('src') : null), n || 'image' !== o.type || (n = o.src), n && n.length && (t += '<li data-index="' + e + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + n + '" /></li>');}), t += '</ul>', this.$list = e(t).appendTo(this.$grid).on('click touchstart', 'li', function() {o.jumpTo(e(this).data('index'));}), this.$list.find('img').hide().one('load', function() {var t, n, o, s, i = e(this).parent().removeClass('fancybox-thumbs-loading'), a = i.outerWidth(), r = i.outerHeight(); t = this.naturalWidth || this.width, n = this.naturalHeight || this.height, o = t / a, s = n / r, o >= 1 && s >= 1 && (o > s ? (t /= s, n = r) : (t = a, n /= o)), e(this).css({width: Math.floor(t), height: Math.floor(n), 'margin-top': Math.min(0, Math.floor(.3 * r - .3 * n)), 'margin-left': Math.min(0, Math.floor(.5 * a - .5 * t))}).show();}).each(function() {this.src = e(this).data('src');});}, focus: function() {this.instance.current && this.$list.children().removeClass('fancybox-thumbs-active').filter('[data-index="' + this.instance.current.index + '"]').addClass('fancybox-thumbs-active').focus();}, close: function() {this.$grid.hide();}, update: function() {this.instance.$refs.container.toggleClass('fancybox-container--thumbs', this.isVisible), this.isVisible ? (this.$grid || this.create(), this.$grid.show(), this.focus()) : this.$grid && this.$grid.hide(), this.instance.update();}, hide: function() {this.isVisible = !1, this.update();}, show: function() {this.isVisible = !0, this.update();}, toggle: function() {this.isVisible ? this.hide() : this.show();}}), e(t).on('onInit.fb', function(t, e) {var o = e.group[0], s = e.group[1]; e.opts.thumbs && !e.Thumbs && e.group.length > 1 && ('image' == o.type || o.opts.thumb || o.opts.$thumb) && ('image' == s.type || s.opts.thumb || s.opts.$thumb) && (e.Thumbs = new n(e));}), e(t).on('beforeMove.fb', function(t, e, n) {var o = e && e.Thumbs; o && (n.modal ? (o.$button.hide(), o.hide()) : (e.opts.thumbs.showOnStart === !0 && e.firstRun && o.show(), o.$button.show(), o.isVisible && o.focus()));}), e(t).on('beforeClose.fb', function(t, e) {e && e.Thumbs && (e.Thumbs.isVisible && e.opts.thumbs.hideOnClosing !== !1 && e.Thumbs.close(), e.Thumbs = null);});}(document, window.jQuery), function(t, e, n) {'use strict'; function o() {var t = e.location.hash.substr(1), n = t.split('-'), o = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) ? parseInt(n.pop(-1), 10) || 1 : 1, s = n.join('-'); return o < 1 && (o = 1), {hash: t, index: o, gallery: s};} function s(t) {var e; '' !== t.gallery && (e = n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1), e.length ? e.trigger('click') : n('#' + n.escapeSelector(t.gallery)).trigger('click'));} function i(t) {var e; return !!t && (e = t.current ? t.current.opts : t.opts, e.$orig ? e.$orig.data('fancybox') : e.hash || '');}n.escapeSelector || (n.escapeSelector = function(t) {var e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, n = function(t, e) {return e ? '\0' === t ? '�' : t.slice(0, -1) + '\\' + t.charCodeAt(t.length - 1).toString(16) + ' ' : '\\' + t;}; return (t + '').replace(e, n);}); var a = null; n(function() {setTimeout(function() {n.fancybox.defaults.hash !== !1 && (n(e).on('hashchange.fb', function() {var t = o(); n.fancybox.getInstance() ? a && a !== t.gallery + '-' + t.index && (a = null, n.fancybox.close()) : '' !== t.gallery && s(t);}), n(t).on({'onInit.fb': function(t, e) {var n = o(), s = i(e); s && n.gallery && s == n.gallery && (e.currIndex = n.index - 1);}, 'beforeMove.fb': function(n, o, s) {var r = i(o); r && '' !== r && (e.location.hash.indexOf(r) < 0 && (o.opts.origHash = e.location.hash), a = r + (o.group.length > 1 ? '-' + (s.index + 1) : ''), 'pushState'in history ? history.pushState('', t.title, e.location.pathname + e.location.search + '#' + a) : e.location.hash = a);}, 'beforeClose.fb': function(n, o, s) {var r = i(o), c = o && o.opts.origHash ? o.opts.origHash : ''; r && '' !== r && ('pushState'in history ? history.pushState('', t.title, e.location.pathname + e.location.search + c) : e.location.hash = c), a = null;}}), s(o()));}, 50);});}(document, window, window.jQuery);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var $ = __webpack_require__(1);

	__webpack_require__(11);

	module.exports = function() {
	  var methods = {
	    init: function() {
	      var platform = /(iphone|ipod|ipad)/.test(navigator.userAgent.toLowerCase()) ? ' ios' : '';
	      return this.each(function(i, el) {
	        $(el).wrap('<span class="fancyselect' + platform + '" />')
	            .before('<span class="arrows" />')
	            .before('<span class="selecttext" />')
	            .fadeTo(0, 0)
	            .focus(function() { $(el).parent('span').addClass('focus'); })
	            .blur(function() { $(el).parent('span').removeClass('focus'); })
	            .on('change keydown keyup', function() { $(el).fancyselect('update'); })
	            .fancyselect('update');
	        if ($(el).attr('disabled')) $(el).fancyselect('disable');
	      });
	    },
	    destroy: function() {
	      return this.each(function(i, el) {
	        $(el).siblings('span').remove();
	        $(el).unwrap().fadeTo(0, 1).unbind('focus blur change keydown keyup');
	      });
	    },
	    enable: function() {
	      return this.each(function(i, el) {
	        $(el).removeAttr('disabled').parent().removeClass('disabled');
	      });
	    },
	    disable: function() {
	      return this.each(function(i, el) {
	        $(el).attr('disabled', 'disabled').parent().addClass('disabled');
	      });
	    },
	    update: function() {
	      return this.each(function(i, el) {
	        $(el).prev('.selecttext').text($(el).children('option:selected').text());
	      });
	    }
	  };

	  $.fn.fancyselect = function(method) {
	    if (methods[method]) {
	      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
	    }
	    else if (typeof method === 'object' || ! method) {
	      return methods.init.apply(this, arguments);
	    }
	    else {
	      $.error('Method ' + method + ' does not exist for .fancyselect()');
	    }
	  };

	  $('.sort_list').fancyselect();
	};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js!./index.scss");
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = require("!../../../node_modules/style-loader/addStyles.js")(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(module.hot) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js!./index.scss", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js!./index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	let formsClass = 'form';

	var $ = __webpack_require__(1);
	var swal = __webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);

	__webpack_require__(16);

	module.exports = function() {
	  /**
	   * Сбор данных из формы
	   *
	   * @param options
	   * @returns {*}
	   */
	  $.fn.formData = function(options) {
	    if (this === undefined) {
	      return 'error';
	    }

	    var settings = $.extend(
	      {
	        select_attr: 'name',
	        textvalue: false,
	        validator: false,
	        invalid: false,
	        valid: false,
	        callback: false
	      },
	      options
	    );

	    var send_obj = {};

	    var put = function(key, val, title, obj) {
	      if (
	        key.indexOf('[]') > -1 &&
	        key[key.length - 1] === ']' &&
	        key[key.length - 2] === '['
	      ) {
	        key = key.replace('[]', '');

	        if (
	          send_obj[key] !== undefined &&
	          Object.prototype.toString.call(send_obj[key]) === '[object Array]'
	        ) {
	          send_obj[key].push({ val: val, title: title, obj: obj });
	        } else {
	          send_obj[key] = [{ val: val, title: title, obj: obj }];
	        }
	      } else {
	        send_obj[key] = { val: val, title: title, obj: obj };
	      }
	      obj.rules = getValidateRules(obj);

	      if (settings.validator === false) settings.validator = {};

	      for (var rule in obj.rules) {
	        if (typeof settings.validator[key] == 'undefined')
	          settings.validator[key] = [];
	        settings.validator[key][settings.validator[key].length] = rule;
	      }
	    };

	    var getValidateRules = function(obj) {
	      var data = obj.data(),
	        rules = {},
	        dataKey;
	      for (dataKey in data) {
	        if (dataKey.indexOf('validate') === 0) {
	          rules[dataKey.replace('validate', '').toLowerCase()] = data[dataKey];
	        }
	      }

	      return rules;
	    };

	    // get text/hidden input and textarea
	    var txt = $(
	      'textarea:enabled, input[type=hidden]:enabled, input[type!=checkbox][type!=radio]:enabled',
	      this
	    );

	    $.each(txt, function(i, j) {
	      if (
	        $(j).attr(settings.select_attr) !== undefined &&
	        $(j).not(':disabled')
	      ) {
	        put(
	          $(j).attr(settings.select_attr),
	          $(j).val(),
	          $(j).data('title'),
	          $(j)
	        );
	      }
	    });

	    // get select
	    var select = $('select:enabled', this);

	    $.each(select, function(i, j) {
	      if (
	        $(j).attr(settings.select_attr) !== undefined &&
	        $(j).not(':disabled')
	      ) {
	        if (settings.textvalue === true) {
	          put(
	            $(j).attr(settings.select_attr),
	            $(j)
	              .children('option:selected')
	              .text(),
	            $(j).data('title'),
	            $(j)
	          );
	        } else {
	          put(
	            $(j).attr(settings.select_attr),
	            $(j).val(),
	            $(j).data('title'),
	            $(j)
	          );
	        }
	      }
	    });

	    // get checkboxes
	    var checkBox = $('input[type=checkbox]:enabled');

	    // TODO реализовать множественный выбор
	    $.each(checkBox, function(i, j) {
	      put($(j).attr('name'), $(j).attr('value'), $(j).data('title'), $(j));
	    });

	    // get radiobuttons
	    var radio = $('input[type=radio]:checked:enabled');

	    $.each(radio, function(i, j) {
	      put($(j).attr('name'), $(j).attr('value'), $(j).data('title'), $(j));
	    });

	    // validation  ==============================================
	    var checkValid = function(val, rule) {
	      var re;

	      switch (rule) {
	        case 'required':
	          return !(val === undefined || val.length < 2);

	        case 'email':
	          re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	          return re.test(val);

	        case 'phone':
	          re = /^\+?[-\(\)\d\s]{5,19}$/;
	          return re.test(val);

	        case 'uaphone':
	          re = /\+38 \(0[0-9]{2}\) [0-9]{3}-[0-9]{2}-[0-9]{2}/g;
	          return re.test(val);

	        case 'ruphone':
	          re = /\+7 \(0[0-9]{2}\) [0-9]{3}-[0-9]{2}-[0-9]{2}/g;
	          return re.test(val);

	        case 'url':
	          re = /^(https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)*?$/;
	          return re.test(val);

	        case 'alpha':
	          re = /^[a-zA-Z]+$/;
	          return re.test(val);

	        case 'alpha_num':
	          re = /^[a-zA-Z0-9]+$/;
	          return re.test(val);

	        case 'alpha_dash':
	          re = /^[-_a-zA-Z0-9]+$/;
	          return re.test(val);
	      }

	      if (rule.indexOf(':') > -1) {
	        rule = rule.split(':');

	        switch (rule[0]) {
	          case 'len':
	            return rule.slice(1, rule.length).some(function(el) {
	              return val.length == el;
	            });

	          case 'range_len':
	            return val.length >= rule[1] && val.length <= rule[2];

	          case 'max':
	            return val <= rule[1];

	          case 'min':
	            return val >= rule[1];

	          case 'range':
	            return val >= rule[1] && val <= rule[2];

	          case 'not':
	            return val != rule[1];

	          case 'is':
	            return rule.slice(1, rule.length).some(function(el) {
	              return val == send_obj[el];
	            });

	          case 'same':
	            return val == send_obj[rule[1]];

	          case 'diff':
	            return val != send_obj[rule[1]];
	        }
	      }

	      return true;
	    };

	    var inValidEl = {};

	    if (settings.validator) {
	      for (var k in settings.validator) {
	        for (var i = 0; i < settings.validator[k].length; i++) {
	          if (!checkValid(send_obj[k].val, settings.validator[k][i])) {
	            if (inValidEl[k] === undefined) inValidEl[k] = [];
	            inValidEl[k].push(settings.validator[k][i].split(':')[0]);
	          }
	        }
	      }
	    }

	    if (!$.isEmptyObject(inValidEl) && settings.invalid) {
	      settings.invalid({ errors: inValidEl, obj: send_obj });
	      return false;
	    } else if (settings.valid) {
	      settings.valid();
	    }

	    // callback function =========================================
	    if (settings.callback) {
	      inValidEl = $.isEmptyObject(inValidEl) || inValidEl;
	      settings.callback(send_obj, inValidEl);
	    }

	    return send_obj;
	  };

	  /**
	   * Валидация
	   *
	   * @param options
	   */
	  $.fn.validateTooltip = function(options) {
	    var $this = $(this);
	    var top = parseInt($this.offset().top - 34, 10);
	    var left = parseInt($this.offset().left + $this.width() / 2, 10);

	    $this.tooltip = $(
	      '<div class="validate-error" style="top:' +
	        top +
	        'px; left:' +
	        left +
	        'px">' +
	        '<div class="animated"><div><i></i>' +
	        options.text +
	        '</div></div>' +
	        '</div>'
	    );

	    $('body').append($this.tooltip);

	    $this.tooltip.find('.animated').addClass('shake');

	    $this.click(function() {
	      $this.tooltip.remove();
	    });
	  };

	  /**
	   * Отправка формы
	   */
	  $(document).on('submit', 'form.' + formsClass, function(e) {
	    e.preventDefault();
	    var form = $(this);
	    $('.validate-error').remove();
	    if (!form.hasClass('disabled')) {
	      var data = form.formData({
	        validator: {},
	        invalid: function(data) {
	          for (var name in data.errors) {
	            data.obj[name].obj.validateTooltip({
	              text: data.obj[name].obj.rules[data.errors[name][0]]
	            });
	          }
	        }
	      });

	      var files = {};
	      var isset_files = false;
	      console.log(form);
	      console.log(form.formData());
	      console.log(data);
	      if (data === false) {
	        return false;
	      } else {
	        for (var el in data) {
	          if (
	            typeof data[el].obj !== 'undefined' &&
	            data[el].obj[0].type == 'file'
	          ) {
	            isset_files = true;
	            files[el] = data[el];
	            delete data[el];
	          } else delete data[el].obj;
	        }
	      }

	      var info = getInfo();

	      $.extend(data, info);
	      var fd = new FormData();

	      if (isset_files) {
	        for (var el in files) {
	          var field = files[el].obj.get(0);
	          console.log(field.files.length);
	          for (var i = 0; i < field.files.length; i++) {
	            fd.append(el, field.files[i]);
	          }
	        }
	      }

	      fd.append('data', JSON.stringify(data));

	      var url = form.attr('action') || '/api.php';
	      console.log(url);
	      $.ajax({
	        url: url,
	        type: 'POST',
	        processData: false,
	        contentType: false,
	        data: fd,
	        dataType: 'json',
	        beforeSend: function() {
	          form.addClass('disabled');
	          form.find('button[type="submit"]').html('Отправляем...');
	        },
	        success: function(response) {
	          console.log(response);
	          if (typeof dataLayer !== 'undefined') {
	            var page = $(form)
	              .find('[name="tagmanager"]')
	              .val();
	            if (typeof page !== 'undefined') {
	              dataLayer.push({
	                event: 'VirtualPageview',
	                virtualPageURL: page,
	                virtualPageTitle: page.replace('/', '')
	              });
	            }
	          }

	          if (response.status == 'OK' || response.status == 'Form Error') {
	            form.trigger('reset');
	            form.find('button[type="submit"]').html('Отправлено');
	            form.trigger('sent', response);
	            if (
	              typeof form.data('success-title') !== 'undefined' ||
	              typeof form.data('success-message') !== 'undefined'
	            ) {
	              swal(
	                form.data('success-title'),
	                form.data('success-message'),
	                'success'
	              );
	            }
	            if (typeof form.data('success-redirect') !== 'undefined') {
	              window.location = form.data('success-redirect');
	            }
	          } else {
	            form.trigger('error', response);
	            if (
	              typeof form.data('error-title') !== 'undefined' ||
	              typeof form.data('error-message') !== 'undefined'
	            ) {
	              swal(
	                form.data('error-title'),
	                form.data('error-message'),
	                'error'
	              );
	            }
	          }
	        },
	        error: function(response) {
	          form.removeClass('disabled');
	          form.find('button[type="submit"]').html('Не вышло :(');
	          form.trigger('error', response);
	          if (
	            typeof form.data('error-title') !== 'undefined' ||
	            typeof form.data('error-message') !== 'undefined'
	          ) {
	            swal(form.data('error-title'), form.data('error-message'), 'error');
	          }
	        }
	      });
	    }

	    return true;
	  });

	  function parseGetParams() {
	    var $_GET = {};
	    var __GET = window.location.search.substring(1).split('&');
	    for (var i = 0; i < __GET.length; i++) {
	      var getVar = __GET[i].split('=');
	      $_GET[getVar[0]] = typeof getVar[1] == 'undefined' ? '' : getVar[1];
	    }
	    return $_GET;
	  }

	  function getInfo() {
	    var keys = parseGetParams();
	    var host_s = window.location.host + window.location.pathname.slice(0, -1);
	    return {
	      history: { title: '', val: history.length },
	      js_user_agent: { title: '', val: getUserAgent(navigator.userAgent) },
	      get: { title: 'Страница', val: window.location.href },
	      referer: {
	        title: 'Заявка пришла со страницы',
	        val:
	          typeof document.referrer == 'undefined' ? 'NULL' : document.referrer
	      },
	      host: { title: '', val: host_s }
	      // utm_source: {
	      //   title: 'Поисковая система',
	      //   val: typeof keys['utm_source'] == 'undefined' ? '' : keys['utm_source']
	      // },
	      // utm_campaign: {
	      //   title: 'Кампания',
	      //   val:
	      //     typeof keys['utm_campaign'] == 'undefined' ? '' : keys['utm_campaign']
	      // },
	      // utm_term: {
	      //   title: 'Ключ',
	      //   val:
	      //     typeof keys['utm_term'] == 'undefined'
	      //       ? ''
	      //       : decodeURIComponent(keys['utm_term'])
	      // }
	    };
	  }

	  function getUserAgent(u) {
	    var ua = u.toLowerCase(),
	      is = function(t) {
	        return ua.indexOf(t) > -1;
	      },
	      g = 'gecko',
	      w = 'webkit',
	      s = 'safari',
	      o = 'opera',
	      m = 'mobile',
	      h = document.documentElement,
	      b = [
	        !/opera|webtv/i.test(ua) && /msie\s(\d)/.test(ua)
	          ? 'ie ie' + RegExp.$1
	          : is('firefox/2')
	          ? g + ' ff2'
	          : is('firefox/3.5')
	          ? g + ' ff3 ff3_5'
	          : is('firefox/3.6')
	          ? g + ' ff3 ff3_6'
	          : is('firefox/3')
	          ? g + ' ff3'
	          : is('gecko/')
	          ? g
	          : is('opera')
	          ? o +
	            (/version\/(\d+)/.test(ua)
	              ? ' ' + o + RegExp.$1
	              : /opera(\s|\/)(\d+)/.test(ua)
	              ? ' ' + o + RegExp.$2
	              : '')
	          : is('konqueror')
	          ? 'konqueror'
	          : is('blackberry')
	          ? m + ' blackberry'
	          : is('android')
	          ? m + ' android'
	          : is('chrome')
	          ? w + ' chrome'
	          : is('iron')
	          ? w + ' iron'
	          : is('applewebkit/')
	          ? w + ' ' + s + (/version\/(\d+)/.test(ua) ? ' ' + s + RegExp.$1 : '')
	          : is('mozilla/')
	          ? g
	          : '',
	        is('j2me')
	          ? m + ' j2me'
	          : is('iphone')
	          ? m + ' iphone'
	          : is('ipod')
	          ? m + ' ipod'
	          : is('ipad')
	          ? m + ' ipad'
	          : is('mac')
	          ? 'mac'
	          : is('darwin')
	          ? 'mac'
	          : is('webtv')
	          ? 'webtv'
	          : is('win')
	          ? 'win' + (is('windows nt 6.0') ? ' vista' : '')
	          : is('freebsd')
	          ? 'freebsd'
	          : is('x11') || is('linux')
	          ? 'linux'
	          : '',
	        'js'
	      ];

	    var c = b.join(' ');
	    h.className += ' ' + c;
	    return c;
	  }

	  /**
	   * Удаление сообщений валидатора
	   */
	  $(document).on('click', function() {
	    $('body > .validate-error').remove();
	  });

	  /**
	   * Настройка селектов
	   */
	  $('form.' + formsClass + ' .chosen-select').each(function() {
	    var $this = $(this);
	    var settings = {};
	    if (typeof $this.data('settings') === 'object') {
	      settings = $this.data('settings');
	    }
	    $this.chosen(settings);

	    if (typeof $this.data('limit-error') !== 'undefined') {
	      $this.bind('chosen:maxselected', function() {
	        swal($this.data('limit-error'), '', 'error');
	        $('[type="submit"]').focus();
	      });
	    }
	  });

	  /**
	   * Маска телефона
	   */
	  $('form.' + formsClass + ' input[name="phone"]').each(function() {
	    var $this = $(this);
	    if (typeof $this.data('validate-uaphone') !== 'undefined')
	      $this.mask('+38 (999) 999-99-99');

	    if (typeof $this.data('validate-ruphone') !== 'undefined')
	      $this.mask('+7 (999) 999-99-99');
	  });
	};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	/*!
	 * sweetalert2 v6.11.5
	 * Released under the MIT License.
	 */
	(function (global, factory) {
		typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
		(global.Sweetalert2 = factory());
	}(this, (function () { 'use strict';

	var defaultParams = {
	  title: '',
	  titleText: '',
	  text: '',
	  html: '',
	  type: null,
	  customClass: '',
	  target: 'body',
	  animation: true,
	  allowOutsideClick: true,
	  allowEscapeKey: true,
	  allowEnterKey: true,
	  showConfirmButton: true,
	  showCancelButton: false,
	  preConfirm: null,
	  confirmButtonText: 'OK',
	  confirmButtonAriaLabel: '',
	  confirmButtonColor: '#3085d6',
	  confirmButtonClass: null,
	  cancelButtonText: 'Cancel',
	  cancelButtonAriaLabel: '',
	  cancelButtonColor: '#aaa',
	  cancelButtonClass: null,
	  buttonsStyling: true,
	  reverseButtons: false,
	  focusConfirm: true,
	  focusCancel: false,
	  showCloseButton: false,
	  closeButtonAriaLabel: 'Close this dialog',
	  showLoaderOnConfirm: false,
	  imageUrl: null,
	  imageWidth: null,
	  imageHeight: null,
	  imageAlt: '',
	  imageClass: null,
	  timer: null,
	  width: 500,
	  padding: 20,
	  background: '#fff',
	  input: null,
	  inputPlaceholder: '',
	  inputValue: '',
	  inputOptions: {},
	  inputAutoTrim: true,
	  inputClass: null,
	  inputAttributes: {},
	  inputValidator: null,
	  grow: false,
	  position: 'center',
	  progressSteps: [],
	  currentProgressStep: null,
	  progressStepsDistance: '40px',
	  onBeforeOpen: null,
	  onOpen: null,
	  onClose: null,
	  useRejections: true
	};

	var swalPrefix = 'swal2-';

	var prefix = function prefix(items) {
	  var result = {};
	  for (var i in items) {
	    result[items[i]] = swalPrefix + items[i];
	  }
	  return result;
	};

	var swalClasses = prefix(['container', 'shown', 'iosfix', 'modal', 'overlay', 'fade', 'show', 'hide', 'noanimation', 'close', 'title', 'content', 'buttonswrapper', 'confirm', 'cancel', 'icon', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea', 'inputerror', 'validationerror', 'progresssteps', 'activeprogressstep', 'progresscircle', 'progressline', 'loading', 'styled', 'top', 'top-left', 'top-right', 'center', 'center-left', 'center-right', 'bottom', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen']);

	var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

	var consolePrefix = 'SweetAlert2:';

	/*
	 * Set hover, active and focus-states for buttons (source: http://www.sitepoint.com/javascript-generate-lighter-darker-color)
	 */
	var colorLuminance = function colorLuminance(hex, lum) {
	  // Validate hex string
	  hex = String(hex).replace(/[^0-9a-f]/gi, '');
	  if (hex.length < 6) {
	    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	  }
	  lum = lum || 0;

	  // Convert to decimal and change luminosity
	  var rgb = '#';
	  for (var i = 0; i < 3; i++) {
	    var c = parseInt(hex.substr(i * 2, 2), 16);
	    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
	    rgb += ('00' + c).substr(c.length);
	  }

	  return rgb;
	};

	var uniqueArray = function uniqueArray(arr) {
	  var result = [];
	  for (var i in arr) {
	    if (result.indexOf(arr[i]) === -1) {
	      result.push(arr[i]);
	    }
	  }
	  return result;
	};

	/**
	 * Standardise console warnings
	 * @param message
	 */
	var warn = function warn(message) {
	  console.warn(consolePrefix + ' ' + message);
	};

	/**
	 * Standardise console errors
	 * @param message
	 */
	var error = function error(message) {
	  console.error(consolePrefix + ' ' + message);
	};

	// Remember state in cases where opening and handling a modal will fiddle with it.
	var states = {
	  previousWindowKeyDown: null,
	  previousActiveElement: null,
	  previousBodyPadding: null

	  /*
	   * Add modal + overlay to DOM
	   */
	};var init = function init(params) {
	  // Clean up the old modal if it exists
	  var c = getContainer();
	  if (c) {
	    c.parentNode.removeChild(c);
	  }

	  if (typeof document === 'undefined') {
	    error('SweetAlert2 requires document to initialize');
	    return;
	  }

	  var container = document.createElement('div');
	  container.className = swalClasses.container;
	  container.innerHTML = sweetHTML;

	  var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
	  targetElement.appendChild(container);

	  var modal = getModal();
	  var input = getChildByClass(modal, swalClasses.input);
	  var file = getChildByClass(modal, swalClasses.file);
	  var range = modal.querySelector('.' + swalClasses.range + ' input');
	  var rangeOutput = modal.querySelector('.' + swalClasses.range + ' output');
	  var select = getChildByClass(modal, swalClasses.select);
	  var checkbox = modal.querySelector('.' + swalClasses.checkbox + ' input');
	  var textarea = getChildByClass(modal, swalClasses.textarea);

	  input.oninput = function () {
	    sweetAlert.resetValidationError();
	  };

	  file.onchange = function () {
	    sweetAlert.resetValidationError();
	  };

	  range.oninput = function () {
	    sweetAlert.resetValidationError();
	    rangeOutput.value = range.value;
	  };

	  range.onchange = function () {
	    sweetAlert.resetValidationError();
	    range.previousSibling.value = range.value;
	  };

	  select.onchange = function () {
	    sweetAlert.resetValidationError();
	  };

	  checkbox.onchange = function () {
	    sweetAlert.resetValidationError();
	  };

	  textarea.oninput = function () {
	    sweetAlert.resetValidationError();
	  };

	  return modal;
	};

	/*
	 * Manipulate DOM
	 */

	var sweetHTML = ('\n <div role="dialog" aria-modal="true" aria-labelledby="' + swalClasses.title + '" aria-describedby="' + swalClasses.content + '" class="' + swalClasses.modal + '" tabindex="-1">\n   <ul class="' + swalClasses.progresssteps + '"></ul>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.error + '">\n     <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n   </div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.question + '">?</div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.warning + '">!</div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.info + '">i</div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.success + '">\n     <div class="swal2-success-circular-line-left"></div>\n     <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n     <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n     <div class="swal2-success-circular-line-right"></div>\n   </div>\n   <img class="' + swalClasses.image + '" />\n   <h2 class="' + swalClasses.title + '" id="' + swalClasses.title + '"></h2>\n   <div id="' + swalClasses.content + '" class="' + swalClasses.content + '"></div>\n   <input class="' + swalClasses.input + '" />\n   <input type="file" class="' + swalClasses.file + '" />\n   <div class="' + swalClasses.range + '">\n     <output></output>\n     <input type="range" />\n   </div>\n   <select class="' + swalClasses.select + '"></select>\n   <div class="' + swalClasses.radio + '"></div>\n   <label for="' + swalClasses.checkbox + '" class="' + swalClasses.checkbox + '">\n     <input type="checkbox" />\n   </label>\n   <textarea class="' + swalClasses.textarea + '"></textarea>\n   <div class="' + swalClasses.validationerror + '" id="' + swalClasses.validationerror + '"></div>\n   <div class="' + swalClasses.buttonswrapper + '">\n     <button type="button" class="' + swalClasses.confirm + '">OK</button>\n     <button type="button" class="' + swalClasses.cancel + '">Cancel</button>\n   </div>\n   <button type="button" class="' + swalClasses.close + '">\xD7</button>\n </div>\n').replace(/(^|\n)\s*/g, '');

	var getContainer = function getContainer() {
	  return document.body.querySelector('.' + swalClasses.container);
	};

	var getModal = function getModal() {
	  return getContainer() ? getContainer().querySelector('.' + swalClasses.modal) : null;
	};

	var getIcons = function getIcons() {
	  var modal = getModal();
	  return modal.querySelectorAll('.' + swalClasses.icon);
	};

	var elementByClass = function elementByClass(className) {
	  return getContainer() ? getContainer().querySelector('.' + className) : null;
	};

	var getTitle = function getTitle() {
	  return elementByClass(swalClasses.title);
	};

	var getContent = function getContent() {
	  return elementByClass(swalClasses.content);
	};

	var getImage = function getImage() {
	  return elementByClass(swalClasses.image);
	};

	var getProgressSteps = function getProgressSteps() {
	  return elementByClass(swalClasses.progresssteps);
	};

	var getValidationError = function getValidationError() {
	  return elementByClass(swalClasses.validationerror);
	};

	var getConfirmButton = function getConfirmButton() {
	  return elementByClass(swalClasses.confirm);
	};

	var getCancelButton = function getCancelButton() {
	  return elementByClass(swalClasses.cancel);
	};

	var getButtonsWrapper = function getButtonsWrapper() {
	  return elementByClass(swalClasses.buttonswrapper);
	};

	var getCloseButton = function getCloseButton() {
	  return elementByClass(swalClasses.close);
	};

	var getFocusableElements = function getFocusableElements() {
	  var focusableElementsWithTabindex = Array.from(getModal().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'))
	  // sort according to tabindex
	  .sort(function (a, b) {
	    a = parseInt(a.getAttribute('tabindex'));
	    b = parseInt(b.getAttribute('tabindex'));
	    if (a > b) {
	      return 1;
	    } else if (a < b) {
	      return -1;
	    }
	    return 0;
	  });

	  var otherFocusableElements = Array.prototype.slice.call(getModal().querySelectorAll('button, input:not([type=hidden]), textarea, select, a, [tabindex="0"]'));

	  return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements));
	};

	var hasClass = function hasClass(elem, className) {
	  if (elem.classList) {
	    return elem.classList.contains(className);
	  }
	  return false;
	};

	var focusInput = function focusInput(input) {
	  input.focus();

	  // place cursor at end of text in text input
	  if (input.type !== 'file') {
	    // http://stackoverflow.com/a/2345915/1331425
	    var val = input.value;
	    input.value = '';
	    input.value = val;
	  }
	};

	var addClass = function addClass(elem, className) {
	  if (!elem || !className) {
	    return;
	  }
	  var classes = className.split(/\s+/).filter(Boolean);
	  classes.forEach(function (className) {
	    elem.classList.add(className);
	  });
	};

	var removeClass = function removeClass(elem, className) {
	  if (!elem || !className) {
	    return;
	  }
	  var classes = className.split(/\s+/).filter(Boolean);
	  classes.forEach(function (className) {
	    elem.classList.remove(className);
	  });
	};

	var getChildByClass = function getChildByClass(elem, className) {
	  for (var i = 0; i < elem.childNodes.length; i++) {
	    if (hasClass(elem.childNodes[i], className)) {
	      return elem.childNodes[i];
	    }
	  }
	};

	var show = function show(elem, display) {
	  if (!display) {
	    display = 'block';
	  }
	  elem.style.opacity = '';
	  elem.style.display = display;
	};

	var hide = function hide(elem) {
	  elem.style.opacity = '';
	  elem.style.display = 'none';
	};

	var empty = function empty(elem) {
	  while (elem.firstChild) {
	    elem.removeChild(elem.firstChild);
	  }
	};

	// borrowed from jquery $(elem).is(':visible') implementation
	var isVisible = function isVisible(elem) {
	  return elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length;
	};

	var removeStyleProperty = function removeStyleProperty(elem, property) {
	  if (elem.style.removeProperty) {
	    elem.style.removeProperty(property);
	  } else {
	    elem.style.removeAttribute(property);
	  }
	};

	var animationEndEvent = function () {
	  var testEl = document.createElement('div');
	  var transEndEventNames = {
	    'WebkitAnimation': 'webkitAnimationEnd',
	    'OAnimation': 'oAnimationEnd oanimationend',
	    'animation': 'animationend'
	  };
	  for (var i in transEndEventNames) {
	    if (transEndEventNames.hasOwnProperty(i) && testEl.style[i] !== undefined) {
	      return transEndEventNames[i];
	    }
	  }

	  return false;
	}();

	// Reset previous window keydown handler and focued element
	var resetPrevState = function resetPrevState() {
	  window.onkeydown = states.previousWindowKeyDown;
	  if (states.previousActiveElement && states.previousActiveElement.focus) {
	    var x = window.scrollX;
	    var y = window.scrollY;
	    states.previousActiveElement.focus();
	    if (x && y) {
	      // IE has no scrollX/scrollY support
	      window.scrollTo(x, y);
	    }
	  }
	};

	// Measure width of scrollbar
	// https://github.com/twbs/bootstrap/blob/master/js/modal.js#L279-L286
	var measureScrollbar = function measureScrollbar() {
	  var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
	  if (supportsTouch) {
	    return 0;
	  }
	  var scrollDiv = document.createElement('div');
	  scrollDiv.style.width = '50px';
	  scrollDiv.style.height = '50px';
	  scrollDiv.style.overflow = 'scroll';
	  document.body.appendChild(scrollDiv);
	  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	  document.body.removeChild(scrollDiv);
	  return scrollbarWidth;
	};

	/**
	 * Inject a string of CSS into the page header
	 *
	 * @param {String} css
	 */

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};





















	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

	var modalParams = _extends({}, defaultParams);
	var queue = [];

	/*
	 * Check for the existence of Promise
	 * Hopefully to avoid many github issues
	 */
	if (typeof Promise === 'undefined') {
	  error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/limonte/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
	}

	/**
	 * Set type, text and actions on modal
	 *
	 * @param params
	 * @returns {boolean}
	 */
	var setParameters = function setParameters(params) {
	  // If a custom element is set, determine if it is valid
	  if (typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
	    warn('Target parameter is not valid, defaulting to "body"');
	    params.target = 'body';
	  }

	  var modal = void 0;
	  var oldModal = getModal();
	  var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
	  // If the model target has changed, refresh the modal
	  if (oldModal && targetElement && oldModal.parentNode !== targetElement.parentNode) {
	    modal = init(params);
	  } else {
	    modal = oldModal || init(params);
	  }

	  for (var param in params) {
	    if (!sweetAlert.isValidParameter(param)) {
	      warn('Unknown parameter "' + param + '"');
	    }
	  }

	  // Set modal width
	  modal.style.width = typeof params.width === 'number' ? params.width + 'px' : params.width;

	  modal.style.padding = params.padding + 'px';
	  modal.style.background = params.background;
	  var successIconParts = modal.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
	  for (var i = 0; i < successIconParts.length; i++) {
	    successIconParts[i].style.background = params.background;
	  }

	  var container = getContainer();
	  var title = getTitle();
	  var content = getContent();
	  var buttonsWrapper = getButtonsWrapper();
	  var confirmButton = getConfirmButton();
	  var cancelButton = getCancelButton();
	  var closeButton = getCloseButton();

	  // Title
	  if (params.titleText) {
	    title.innerText = params.titleText;
	  } else {
	    title.innerHTML = params.title.split('\n').join('<br />');
	  }

	  // Content
	  if (params.text || params.html) {
	    if (_typeof(params.html) === 'object') {
	      content.innerHTML = '';
	      if (0 in params.html) {
	        for (var _i = 0; _i in params.html; _i++) {
	          content.appendChild(params.html[_i].cloneNode(true));
	        }
	      } else {
	        content.appendChild(params.html.cloneNode(true));
	      }
	    } else if (params.html) {
	      content.innerHTML = params.html;
	    } else if (params.text) {
	      content.textContent = params.text;
	    }
	    show(content);
	  } else {
	    hide(content);
	  }

	  // Position
	  if (params.position in swalClasses) {
	    addClass(container, swalClasses[params.position]);
	  }

	  // Grow
	  if (params.grow && typeof params.grow === 'string') {
	    var growClass = 'grow-' + params.grow;
	    if (growClass in swalClasses) {
	      addClass(container, swalClasses[growClass]);
	    }
	  }

	  // Close button
	  if (params.showCloseButton) {
	    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
	    show(closeButton);
	  } else {
	    hide(closeButton);
	  }

	  // Custom Class
	  modal.className = swalClasses.modal;
	  if (params.customClass) {
	    addClass(modal, params.customClass);
	  }

	  // Progress steps
	  var progressStepsContainer = getProgressSteps();
	  var currentProgressStep = parseInt(params.currentProgressStep === null ? sweetAlert.getQueueStep() : params.currentProgressStep, 10);
	  if (params.progressSteps.length) {
	    show(progressStepsContainer);
	    empty(progressStepsContainer);
	    if (currentProgressStep >= params.progressSteps.length) {
	      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
	    }
	    params.progressSteps.forEach(function (step, index) {
	      var circle = document.createElement('li');
	      addClass(circle, swalClasses.progresscircle);
	      circle.innerHTML = step;
	      if (index === currentProgressStep) {
	        addClass(circle, swalClasses.activeprogressstep);
	      }
	      progressStepsContainer.appendChild(circle);
	      if (index !== params.progressSteps.length - 1) {
	        var line = document.createElement('li');
	        addClass(line, swalClasses.progressline);
	        line.style.width = params.progressStepsDistance;
	        progressStepsContainer.appendChild(line);
	      }
	    });
	  } else {
	    hide(progressStepsContainer);
	  }

	  // Icon
	  var icons = getIcons();
	  for (var _i2 = 0; _i2 < icons.length; _i2++) {
	    hide(icons[_i2]);
	  }
	  if (params.type) {
	    var validType = false;
	    for (var iconType in iconTypes) {
	      if (params.type === iconType) {
	        validType = true;
	        break;
	      }
	    }
	    if (!validType) {
	      error('Unknown alert type: ' + params.type);
	      return false;
	    }
	    var icon = modal.querySelector('.' + swalClasses.icon + '.' + iconTypes[params.type]);
	    show(icon);

	    // Animate icon
	    if (params.animation) {
	      switch (params.type) {
	        case 'success':
	          addClass(icon, 'swal2-animate-success-icon');
	          addClass(icon.querySelector('.swal2-success-line-tip'), 'swal2-animate-success-line-tip');
	          addClass(icon.querySelector('.swal2-success-line-long'), 'swal2-animate-success-line-long');
	          break;
	        case 'error':
	          addClass(icon, 'swal2-animate-error-icon');
	          addClass(icon.querySelector('.swal2-x-mark'), 'swal2-animate-x-mark');
	          break;
	        default:
	          break;
	      }
	    }
	  }

	  // Custom image
	  var image = getImage();
	  if (params.imageUrl) {
	    image.setAttribute('src', params.imageUrl);
	    image.setAttribute('alt', params.imageAlt);
	    show(image);

	    if (params.imageWidth) {
	      image.setAttribute('width', params.imageWidth);
	    } else {
	      image.removeAttribute('width');
	    }

	    if (params.imageHeight) {
	      image.setAttribute('height', params.imageHeight);
	    } else {
	      image.removeAttribute('height');
	    }

	    image.className = swalClasses.image;
	    if (params.imageClass) {
	      addClass(image, params.imageClass);
	    }
	  } else {
	    hide(image);
	  }

	  // Cancel button
	  if (params.showCancelButton) {
	    cancelButton.style.display = 'inline-block';
	  } else {
	    hide(cancelButton);
	  }

	  // Confirm button
	  if (params.showConfirmButton) {
	    removeStyleProperty(confirmButton, 'display');
	  } else {
	    hide(confirmButton);
	  }

	  // Buttons wrapper
	  if (!params.showConfirmButton && !params.showCancelButton) {
	    hide(buttonsWrapper);
	  } else {
	    show(buttonsWrapper);
	  }

	  // Edit text on confirm and cancel buttons
	  confirmButton.innerHTML = params.confirmButtonText;
	  cancelButton.innerHTML = params.cancelButtonText;

	  // ARIA labels for confirm and cancel buttons
	  confirmButton.setAttribute('aria-label', params.confirmButtonAriaLabel);
	  cancelButton.setAttribute('aria-label', params.cancelButtonAriaLabel);

	  // Set buttons to selected background colors
	  if (params.buttonsStyling) {
	    confirmButton.style.backgroundColor = params.confirmButtonColor;
	    cancelButton.style.backgroundColor = params.cancelButtonColor;
	  }

	  // Add buttons custom classes
	  confirmButton.className = swalClasses.confirm;
	  addClass(confirmButton, params.confirmButtonClass);
	  cancelButton.className = swalClasses.cancel;
	  addClass(cancelButton, params.cancelButtonClass);

	  // Buttons styling
	  if (params.buttonsStyling) {
	    addClass(confirmButton, swalClasses.styled);
	    addClass(cancelButton, swalClasses.styled);
	  } else {
	    removeClass(confirmButton, swalClasses.styled);
	    removeClass(cancelButton, swalClasses.styled);

	    confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
	    cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
	  }

	  // CSS animation
	  if (params.animation === true) {
	    removeClass(modal, swalClasses.noanimation);
	  } else {
	    addClass(modal, swalClasses.noanimation);
	  }

	  // showLoaderOnConfirm && preConfirm
	  if (params.showLoaderOnConfirm && !params.preConfirm) {
	    warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://limonte.github.io/sweetalert2/#ajax-request');
	  }
	};

	/**
	 * Animations
	 *
	 * @param animation
	 * @param onBeforeOpen
	 * @param onComplete
	 */
	var openModal = function openModal(animation, onBeforeOpen, onComplete) {
	  var container = getContainer();
	  var modal = getModal();

	  if (onBeforeOpen !== null && typeof onBeforeOpen === 'function') {
	    onBeforeOpen(modal);
	  }

	  if (animation) {
	    addClass(modal, swalClasses.show);
	    addClass(container, swalClasses.fade);
	    removeClass(modal, swalClasses.hide);
	  } else {
	    removeClass(modal, swalClasses.fade);
	  }
	  show(modal);

	  // scrolling is 'hidden' until animation is done, after that 'auto'
	  container.style.overflowY = 'hidden';
	  if (animationEndEvent && !hasClass(modal, swalClasses.noanimation)) {
	    modal.addEventListener(animationEndEvent, function swalCloseEventFinished() {
	      modal.removeEventListener(animationEndEvent, swalCloseEventFinished);
	      container.style.overflowY = 'auto';
	    });
	  } else {
	    container.style.overflowY = 'auto';
	  }

	  addClass(document.documentElement, swalClasses.shown);
	  addClass(document.body, swalClasses.shown);
	  addClass(container, swalClasses.shown);
	  fixScrollbar();
	  iOSfix();
	  states.previousActiveElement = document.activeElement;
	  if (onComplete !== null && typeof onComplete === 'function') {
	    setTimeout(function () {
	      onComplete(modal);
	    });
	  }
	};

	var fixScrollbar = function fixScrollbar() {
	  // for queues, do not do this more than once
	  if (states.previousBodyPadding !== null) {
	    return;
	  }
	  // if the body has overflow
	  if (document.body.scrollHeight > window.innerHeight) {
	    // add padding so the content doesn't shift after removal of scrollbar
	    states.previousBodyPadding = document.body.style.paddingRight;
	    document.body.style.paddingRight = measureScrollbar() + 'px';
	  }
	};

	var undoScrollbar = function undoScrollbar() {
	  if (states.previousBodyPadding !== null) {
	    document.body.style.paddingRight = states.previousBodyPadding;
	    states.previousBodyPadding = null;
	  }
	};

	// Fix iOS scrolling http://stackoverflow.com/q/39626302/1331425
	var iOSfix = function iOSfix() {
	  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
	  if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
	    var offset = document.body.scrollTop;
	    document.body.style.top = offset * -1 + 'px';
	    addClass(document.body, swalClasses.iosfix);
	  }
	};

	var undoIOSfix = function undoIOSfix() {
	  if (hasClass(document.body, swalClasses.iosfix)) {
	    var offset = parseInt(document.body.style.top, 10);
	    removeClass(document.body, swalClasses.iosfix);
	    document.body.style.top = '';
	    document.body.scrollTop = offset * -1;
	  }
	};

	// SweetAlert entry point
	var sweetAlert = function sweetAlert() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  if (args[0] === undefined) {
	    error('SweetAlert2 expects at least 1 attribute!');
	    return false;
	  }

	  var params = _extends({}, modalParams);

	  switch (_typeof(args[0])) {
	    case 'string':
	      params.title = args[0];
	      params.html = args[1];
	      params.type = args[2];

	      break;

	    case 'object':
	      _extends(params, args[0]);
	      params.extraParams = args[0].extraParams;

	      if (params.input === 'email' && params.inputValidator === null) {
	        params.inputValidator = function (email) {
	          return new Promise(function (resolve, reject) {
	            var emailRegex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	            if (emailRegex.test(email)) {
	              resolve();
	            } else {
	              reject('Invalid email address');
	            }
	          });
	        };
	      }

	      if (params.input === 'url' && params.inputValidator === null) {
	        params.inputValidator = function (url) {
	          return new Promise(function (resolve, reject) {
	            // taken from https://stackoverflow.com/a/3809435/1331425
	            var urlRegex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/;
	            if (urlRegex.test(url)) {
	              resolve();
	            } else {
	              reject('Invalid URL');
	            }
	          });
	        };
	      }
	      break;

	    default:
	      error('Unexpected type of argument! Expected "string" or "object", got ' + _typeof(args[0]));
	      return false;
	  }

	  setParameters(params);

	  var container = getContainer();
	  var modal = getModal();

	  return new Promise(function (resolve, reject) {
	    // Close on timer
	    if (params.timer) {
	      modal.timeout = setTimeout(function () {
	        sweetAlert.closeModal(params.onClose);
	        if (params.useRejections) {
	          reject('timer');
	        } else {
	          resolve({ dismiss: 'timer' });
	        }
	      }, params.timer);
	    }

	    // Get input element by specified type or, if type isn't specified, by params.input
	    var getInput = function getInput(inputType) {
	      inputType = inputType || params.input;
	      if (!inputType) {
	        return null;
	      }
	      switch (inputType) {
	        case 'select':
	        case 'textarea':
	        case 'file':
	          return getChildByClass(modal, swalClasses[inputType]);
	        case 'checkbox':
	          return modal.querySelector('.' + swalClasses.checkbox + ' input');
	        case 'radio':
	          return modal.querySelector('.' + swalClasses.radio + ' input:checked') || modal.querySelector('.' + swalClasses.radio + ' input:first-child');
	        case 'range':
	          return modal.querySelector('.' + swalClasses.range + ' input');
	        default:
	          return getChildByClass(modal, swalClasses.input);
	      }
	    };

	    // Get the value of the modal input
	    var getInputValue = function getInputValue() {
	      var input = getInput();
	      if (!input) {
	        return null;
	      }
	      switch (params.input) {
	        case 'checkbox':
	          return input.checked ? 1 : 0;
	        case 'radio':
	          return input.checked ? input.value : null;
	        case 'file':
	          return input.files.length ? input.files[0] : null;
	        default:
	          return params.inputAutoTrim ? input.value.trim() : input.value;
	      }
	    };

	    // input autofocus
	    if (params.input) {
	      setTimeout(function () {
	        var input = getInput();
	        if (input) {
	          focusInput(input);
	        }
	      }, 0);
	    }

	    var confirm = function confirm(value) {
	      if (params.showLoaderOnConfirm) {
	        sweetAlert.showLoading();
	      }

	      if (params.preConfirm) {
	        params.preConfirm(value, params.extraParams).then(function (preConfirmValue) {
	          sweetAlert.closeModal(params.onClose);
	          resolve(preConfirmValue || value);
	        }, function (error$$1) {
	          sweetAlert.hideLoading();
	          if (error$$1) {
	            sweetAlert.showValidationError(error$$1);
	          }
	        });
	      } else {
	        sweetAlert.closeModal(params.onClose);
	        if (params.useRejections) {
	          resolve(value);
	        } else {
	          resolve({ value: value });
	        }
	      }
	    };

	    // Mouse interactions
	    var onButtonEvent = function onButtonEvent(event) {
	      var e = event || window.event;
	      var target = e.target || e.srcElement;
	      var confirmButton = getConfirmButton();
	      var cancelButton = getCancelButton();
	      var targetedConfirm = confirmButton && (confirmButton === target || confirmButton.contains(target));
	      var targetedCancel = cancelButton && (cancelButton === target || cancelButton.contains(target));

	      switch (e.type) {
	        case 'mouseover':
	        case 'mouseup':
	          if (params.buttonsStyling) {
	            if (targetedConfirm) {
	              confirmButton.style.backgroundColor = colorLuminance(params.confirmButtonColor, -0.1);
	            } else if (targetedCancel) {
	              cancelButton.style.backgroundColor = colorLuminance(params.cancelButtonColor, -0.1);
	            }
	          }
	          break;
	        case 'mouseout':
	          if (params.buttonsStyling) {
	            if (targetedConfirm) {
	              confirmButton.style.backgroundColor = params.confirmButtonColor;
	            } else if (targetedCancel) {
	              cancelButton.style.backgroundColor = params.cancelButtonColor;
	            }
	          }
	          break;
	        case 'mousedown':
	          if (params.buttonsStyling) {
	            if (targetedConfirm) {
	              confirmButton.style.backgroundColor = colorLuminance(params.confirmButtonColor, -0.2);
	            } else if (targetedCancel) {
	              cancelButton.style.backgroundColor = colorLuminance(params.cancelButtonColor, -0.2);
	            }
	          }
	          break;
	        case 'click':
	          // Clicked 'confirm'
	          if (targetedConfirm && sweetAlert.isVisible()) {
	            sweetAlert.disableButtons();
	            if (params.input) {
	              var inputValue = getInputValue();

	              if (params.inputValidator) {
	                sweetAlert.disableInput();
	                params.inputValidator(inputValue, params.extraParams).then(function () {
	                  sweetAlert.enableButtons();
	                  sweetAlert.enableInput();
	                  confirm(inputValue);
	                }, function (error$$1) {
	                  sweetAlert.enableButtons();
	                  sweetAlert.enableInput();
	                  if (error$$1) {
	                    sweetAlert.showValidationError(error$$1);
	                  }
	                });
	              } else {
	                confirm(inputValue);
	              }
	            } else {
	              confirm(true);
	            }

	            // Clicked 'cancel'
	          } else if (targetedCancel && sweetAlert.isVisible()) {
	            sweetAlert.disableButtons();
	            sweetAlert.closeModal(params.onClose);
	            if (params.useRejections) {
	              reject('cancel');
	            } else {
	              resolve({ dismiss: 'cancel' });
	            }
	          }
	          break;
	        default:
	      }
	    };

	    var buttons = modal.querySelectorAll('button');
	    for (var i = 0; i < buttons.length; i++) {
	      buttons[i].onclick = onButtonEvent;
	      buttons[i].onmouseover = onButtonEvent;
	      buttons[i].onmouseout = onButtonEvent;
	      buttons[i].onmousedown = onButtonEvent;
	    }

	    // Closing modal by close button
	    getCloseButton().onclick = function () {
	      sweetAlert.closeModal(params.onClose);
	      if (params.useRejections) {
	        reject('close');
	      } else {
	        resolve({ dismiss: 'close' });
	      }
	    };

	    // Closing modal by overlay click
	    container.onclick = function (e) {
	      if (e.target !== container) {
	        return;
	      }
	      if (params.allowOutsideClick) {
	        sweetAlert.closeModal(params.onClose);
	        if (params.useRejections) {
	          reject('overlay');
	        } else {
	          resolve({ dismiss: 'overlay' });
	        }
	      }
	    };

	    var buttonsWrapper = getButtonsWrapper();
	    var confirmButton = getConfirmButton();
	    var cancelButton = getCancelButton();

	    // Reverse buttons (Confirm on the right side)
	    if (params.reverseButtons) {
	      confirmButton.parentNode.insertBefore(cancelButton, confirmButton);
	    } else {
	      confirmButton.parentNode.insertBefore(confirmButton, cancelButton);
	    }

	    // Focus handling
	    var setFocus = function setFocus(index, increment) {
	      var focusableElements = getFocusableElements(params.focusCancel);
	      // search for visible elements and select the next possible match
	      for (var _i3 = 0; _i3 < focusableElements.length; _i3++) {
	        index = index + increment;

	        // rollover to first item
	        if (index === focusableElements.length) {
	          index = 0;

	          // go to last item
	        } else if (index === -1) {
	          index = focusableElements.length - 1;
	        }

	        // determine if element is visible
	        var el = focusableElements[index];
	        if (isVisible(el)) {
	          return el.focus();
	        }
	      }
	    };

	    var handleKeyDown = function handleKeyDown(event) {
	      var e = event || window.event;

	      if (e.key === 'Enter') {
	        if (e.target === getInput()) {
	          if (e.target.tagName.toLowerCase() === 'textarea') {
	            return; // do not submit
	          }
	          sweetAlert.clickConfirm();
	          e.preventDefault();
	        }

	        // TAB
	      } else if (e.key === 'Tab') {
	        var targetElement = e.target || e.srcElement;

	        var focusableElements = getFocusableElements(params.focusCancel);
	        var btnIndex = -1; // Find the button - note, this is a nodelist, not an array.
	        for (var _i4 = 0; _i4 < focusableElements.length; _i4++) {
	          if (targetElement === focusableElements[_i4]) {
	            btnIndex = _i4;
	            break;
	          }
	        }

	        if (!e.shiftKey) {
	          // Cycle to the next button
	          setFocus(btnIndex, 1);
	        } else {
	          // Cycle to the prev button
	          setFocus(btnIndex, -1);
	        }
	        e.stopPropagation();
	        e.preventDefault();

	        // ARROWS - switch focus between buttons
	      } else if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'Arrowdown'].indexOf(e.key) !== -1) {
	        // focus Cancel button if Confirm button is currently focused
	        if (document.activeElement === confirmButton && isVisible(cancelButton)) {
	          cancelButton.focus();
	          // and vice versa
	        } else if (document.activeElement === cancelButton && isVisible(confirmButton)) {
	          confirmButton.focus();
	        }

	        // ESC
	      } else if ((e.key === 'Escape' || e.key === 'Esc') && params.allowEscapeKey === true) {
	        sweetAlert.closeModal(params.onClose);
	        if (params.useRejections) {
	          reject('esc');
	        } else {
	          resolve({ dismiss: 'esc' });
	        }
	      }
	    };

	    if (!window.onkeydown || window.onkeydown.toString() !== handleKeyDown.toString()) {
	      states.previousWindowKeyDown = window.onkeydown;
	      window.onkeydown = handleKeyDown;
	    }

	    // Loading state
	    if (params.buttonsStyling) {
	      confirmButton.style.borderLeftColor = params.confirmButtonColor;
	      confirmButton.style.borderRightColor = params.confirmButtonColor;
	    }

	    /**
	     * Show spinner instead of Confirm button and disable Cancel button
	     */
	    sweetAlert.hideLoading = sweetAlert.disableLoading = function () {
	      if (!params.showConfirmButton) {
	        hide(confirmButton);
	        if (!params.showCancelButton) {
	          hide(getButtonsWrapper());
	        }
	      }
	      removeClass(buttonsWrapper, swalClasses.loading);
	      removeClass(modal, swalClasses.loading);
	      modal.removeAttribute('aria-busy');
	      confirmButton.disabled = false;
	      cancelButton.disabled = false;
	    };

	    sweetAlert.getTitle = function () {
	      return getTitle();
	    };
	    sweetAlert.getContent = function () {
	      return getContent();
	    };
	    sweetAlert.getInput = function () {
	      return getInput();
	    };
	    sweetAlert.getImage = function () {
	      return getImage();
	    };
	    sweetAlert.getButtonsWrapper = function () {
	      return getButtonsWrapper();
	    };
	    sweetAlert.getConfirmButton = function () {
	      return getConfirmButton();
	    };
	    sweetAlert.getCancelButton = function () {
	      return getCancelButton();
	    };

	    sweetAlert.enableButtons = function () {
	      confirmButton.disabled = false;
	      cancelButton.disabled = false;
	    };

	    sweetAlert.disableButtons = function () {
	      confirmButton.disabled = true;
	      cancelButton.disabled = true;
	    };

	    sweetAlert.enableConfirmButton = function () {
	      confirmButton.disabled = false;
	    };

	    sweetAlert.disableConfirmButton = function () {
	      confirmButton.disabled = true;
	    };

	    sweetAlert.enableInput = function () {
	      var input = getInput();
	      if (!input) {
	        return false;
	      }
	      if (input.type === 'radio') {
	        var radiosContainer = input.parentNode.parentNode;
	        var radios = radiosContainer.querySelectorAll('input');
	        for (var _i5 = 0; _i5 < radios.length; _i5++) {
	          radios[_i5].disabled = false;
	        }
	      } else {
	        input.disabled = false;
	      }
	    };

	    sweetAlert.disableInput = function () {
	      var input = getInput();
	      if (!input) {
	        return false;
	      }
	      if (input && input.type === 'radio') {
	        var radiosContainer = input.parentNode.parentNode;
	        var radios = radiosContainer.querySelectorAll('input');
	        for (var _i6 = 0; _i6 < radios.length; _i6++) {
	          radios[_i6].disabled = true;
	        }
	      } else {
	        input.disabled = true;
	      }
	    };

	    // Show block with validation error
	    sweetAlert.showValidationError = function (error$$1) {
	      var validationError = getValidationError();
	      validationError.innerHTML = error$$1;
	      show(validationError);

	      var input = getInput();
	      if (input) {
	        input.setAttribute('aria-invalid', true);
	        input.setAttribute('aria-describedBy', swalClasses.validationerror);
	        focusInput(input);
	        addClass(input, swalClasses.inputerror);
	      }
	    };

	    // Hide block with validation error
	    sweetAlert.resetValidationError = function () {
	      var validationError = getValidationError();
	      hide(validationError);

	      var input = getInput();
	      if (input) {
	        input.removeAttribute('aria-invalid');
	        input.removeAttribute('aria-describedBy');
	        removeClass(input, swalClasses.inputerror);
	      }
	    };

	    sweetAlert.getProgressSteps = function () {
	      return params.progressSteps;
	    };

	    sweetAlert.setProgressSteps = function (progressSteps) {
	      params.progressSteps = progressSteps;
	      setParameters(params);
	    };

	    sweetAlert.showProgressSteps = function () {
	      show(getProgressSteps());
	    };

	    sweetAlert.hideProgressSteps = function () {
	      hide(getProgressSteps());
	    };

	    sweetAlert.enableButtons();
	    sweetAlert.hideLoading();
	    sweetAlert.resetValidationError();

	    // inputs
	    var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
	    var input = void 0;
	    for (var _i7 = 0; _i7 < inputTypes.length; _i7++) {
	      var inputClass = swalClasses[inputTypes[_i7]];
	      var inputContainer = getChildByClass(modal, inputClass);
	      input = getInput(inputTypes[_i7]);

	      // set attributes
	      if (input) {
	        for (var j in input.attributes) {
	          if (input.attributes.hasOwnProperty(j)) {
	            var attrName = input.attributes[j].name;
	            if (attrName !== 'type' && attrName !== 'value') {
	              input.removeAttribute(attrName);
	            }
	          }
	        }
	        for (var attr in params.inputAttributes) {
	          input.setAttribute(attr, params.inputAttributes[attr]);
	        }
	      }

	      // set class
	      inputContainer.className = inputClass;
	      if (params.inputClass) {
	        addClass(inputContainer, params.inputClass);
	      }

	      hide(inputContainer);
	    }

	    var populateInputOptions = void 0;
	    switch (params.input) {
	      case 'text':
	      case 'email':
	      case 'password':
	      case 'number':
	      case 'tel':
	      case 'url':
	        input = getChildByClass(modal, swalClasses.input);
	        input.value = params.inputValue;
	        input.placeholder = params.inputPlaceholder;
	        input.type = params.input;
	        show(input);
	        break;
	      case 'file':
	        input = getChildByClass(modal, swalClasses.file);
	        input.placeholder = params.inputPlaceholder;
	        input.type = params.input;
	        show(input);
	        break;
	      case 'range':
	        var range = getChildByClass(modal, swalClasses.range);
	        var rangeInput = range.querySelector('input');
	        var rangeOutput = range.querySelector('output');
	        rangeInput.value = params.inputValue;
	        rangeInput.type = params.input;
	        rangeOutput.value = params.inputValue;
	        show(range);
	        break;
	      case 'select':
	        var select = getChildByClass(modal, swalClasses.select);
	        select.innerHTML = '';
	        if (params.inputPlaceholder) {
	          var placeholder = document.createElement('option');
	          placeholder.innerHTML = params.inputPlaceholder;
	          placeholder.value = '';
	          placeholder.disabled = true;
	          placeholder.selected = true;
	          select.appendChild(placeholder);
	        }
	        populateInputOptions = function populateInputOptions(inputOptions) {
	          for (var optionValue in inputOptions) {
	            var option = document.createElement('option');
	            option.value = optionValue;
	            option.innerHTML = inputOptions[optionValue];
	            if (params.inputValue.toString() === optionValue) {
	              option.selected = true;
	            }
	            select.appendChild(option);
	          }
	          show(select);
	          select.focus();
	        };
	        break;
	      case 'radio':
	        var radio = getChildByClass(modal, swalClasses.radio);
	        radio.innerHTML = '';
	        populateInputOptions = function populateInputOptions(inputOptions) {
	          for (var radioValue in inputOptions) {
	            var radioInput = document.createElement('input');
	            var radioLabel = document.createElement('label');
	            var radioLabelSpan = document.createElement('span');
	            radioInput.type = 'radio';
	            radioInput.name = swalClasses.radio;
	            radioInput.value = radioValue;
	            if (params.inputValue.toString() === radioValue) {
	              radioInput.checked = true;
	            }
	            radioLabelSpan.innerHTML = inputOptions[radioValue];
	            radioLabel.appendChild(radioInput);
	            radioLabel.appendChild(radioLabelSpan);
	            radioLabel.for = radioInput.id;
	            radio.appendChild(radioLabel);
	          }
	          show(radio);
	          var radios = radio.querySelectorAll('input');
	          if (radios.length) {
	            radios[0].focus();
	          }
	        };
	        break;
	      case 'checkbox':
	        var checkbox = getChildByClass(modal, swalClasses.checkbox);
	        var checkboxInput = getInput('checkbox');
	        checkboxInput.type = 'checkbox';
	        checkboxInput.value = 1;
	        checkboxInput.id = swalClasses.checkbox;
	        checkboxInput.checked = Boolean(params.inputValue);
	        var label = checkbox.getElementsByTagName('span');
	        if (label.length) {
	          checkbox.removeChild(label[0]);
	        }
	        label = document.createElement('span');
	        label.innerHTML = params.inputPlaceholder;
	        checkbox.appendChild(label);
	        show(checkbox);
	        break;
	      case 'textarea':
	        var textarea = getChildByClass(modal, swalClasses.textarea);
	        textarea.value = params.inputValue;
	        textarea.placeholder = params.inputPlaceholder;
	        show(textarea);
	        break;
	      case null:
	        break;
	      default:
	        error('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "' + params.input + '"');
	        break;
	    }

	    if (params.input === 'select' || params.input === 'radio') {
	      if (params.inputOptions instanceof Promise) {
	        sweetAlert.showLoading();
	        params.inputOptions.then(function (inputOptions) {
	          sweetAlert.hideLoading();
	          populateInputOptions(inputOptions);
	        });
	      } else if (_typeof(params.inputOptions) === 'object') {
	        populateInputOptions(params.inputOptions);
	      } else {
	        error('Unexpected type of inputOptions! Expected object or Promise, got ' + _typeof(params.inputOptions));
	      }
	    }

	    openModal(params.animation, params.onBeforeOpen, params.onOpen);

	    if (!params.allowEnterKey) {
	      if (document.activeElement) {
	        document.activeElement.blur();
	      }
	    } else if (params.focusCancel && isVisible(cancelButton)) {
	      cancelButton.focus();
	    } else if (params.focusConfirm && isVisible(confirmButton)) {
	      confirmButton.focus();
	    } else {
	      setFocus(-1, 1);
	    }

	    // fix scroll
	    getContainer().scrollTop = 0;
	  });
	};

	/*
	 * Global function to determine if swal2 modal is shown
	 */
	sweetAlert.isVisible = function () {
	  return !!getModal();
	};

	/*
	 * Global function for chaining sweetAlert modals
	 */
	sweetAlert.queue = function (steps) {
	  queue = steps;
	  var resetQueue = function resetQueue() {
	    queue = [];
	    document.body.removeAttribute('data-swal2-queue-step');
	  };
	  var queueResult = [];
	  return new Promise(function (resolve, reject) {
	    (function step(i, callback) {
	      if (i < queue.length) {
	        document.body.setAttribute('data-swal2-queue-step', i);

	        sweetAlert(queue[i]).then(function (result) {
	          queueResult.push(result);
	          step(i + 1, callback);
	        }, function (dismiss) {
	          resetQueue();
	          reject(dismiss);
	        });
	      } else {
	        resetQueue();
	        resolve(queueResult);
	      }
	    })(0);
	  });
	};

	/*
	 * Global function for getting the index of current modal in queue
	 */
	sweetAlert.getQueueStep = function () {
	  return document.body.getAttribute('data-swal2-queue-step');
	};

	/*
	 * Global function for inserting a modal to the queue
	 */
	sweetAlert.insertQueueStep = function (step, index) {
	  if (index && index < queue.length) {
	    return queue.splice(index, 0, step);
	  }
	  return queue.push(step);
	};

	/*
	 * Global function for deleting a modal from the queue
	 */
	sweetAlert.deleteQueueStep = function (index) {
	  if (typeof queue[index] !== 'undefined') {
	    queue.splice(index, 1);
	  }
	};

	/*
	 * Global function to close sweetAlert
	 */
	sweetAlert.close = sweetAlert.closeModal = function (onComplete) {
	  var container = getContainer();
	  var modal = getModal();
	  if (!modal) {
	    return;
	  }
	  removeClass(modal, swalClasses.show);
	  addClass(modal, swalClasses.hide);
	  clearTimeout(modal.timeout);

	  resetPrevState();

	  var removeModalAndResetState = function removeModalAndResetState() {
	    if (container.parentNode) {
	      container.parentNode.removeChild(container);
	    }
	    removeClass(document.documentElement, swalClasses.shown);
	    removeClass(document.body, swalClasses.shown);
	    undoScrollbar();
	    undoIOSfix();
	  };

	  // If animation is supported, animate
	  if (animationEndEvent && !hasClass(modal, swalClasses.noanimation)) {
	    modal.addEventListener(animationEndEvent, function swalCloseEventFinished() {
	      modal.removeEventListener(animationEndEvent, swalCloseEventFinished);
	      if (hasClass(modal, swalClasses.hide)) {
	        removeModalAndResetState();
	      }
	    });
	  } else {
	    // Otherwise, remove immediately
	    removeModalAndResetState();
	  }
	  if (onComplete !== null && typeof onComplete === 'function') {
	    setTimeout(function () {
	      onComplete(modal);
	    });
	  }
	};

	/*
	 * Global function to click 'Confirm' button
	 */
	sweetAlert.clickConfirm = function () {
	  return getConfirmButton().click();
	};

	/*
	 * Global function to click 'Cancel' button
	 */
	sweetAlert.clickCancel = function () {
	  return getCancelButton().click();
	};

	/**
	 * Show spinner instead of Confirm button and disable Cancel button
	 */
	sweetAlert.showLoading = sweetAlert.enableLoading = function () {
	  var modal = getModal();
	  if (!modal) {
	    sweetAlert('');
	  }
	  modal = getModal();
	  var buttonsWrapper = getButtonsWrapper();
	  var confirmButton = getConfirmButton();
	  var cancelButton = getCancelButton();

	  show(buttonsWrapper);
	  show(confirmButton, 'inline-block');
	  addClass(buttonsWrapper, swalClasses.loading);
	  addClass(modal, swalClasses.loading);
	  confirmButton.disabled = true;
	  cancelButton.disabled = true;

	  modal.setAttribute('aria-busy', true);
	  modal.focus();
	};

	/**
	 * Is valid parameter
	 * @param {String} paramName
	 */
	sweetAlert.isValidParameter = function (paramName) {
	  return defaultParams.hasOwnProperty(paramName) || paramName === 'extraParams';
	};

	/**
	 * Set default params for each popup
	 * @param {Object} userParams
	 */
	sweetAlert.setDefaults = function (userParams) {
	  if (!userParams || (typeof userParams === 'undefined' ? 'undefined' : _typeof(userParams)) !== 'object') {
	    return error('the argument for setDefaults() is required and has to be a object');
	  }

	  for (var param in userParams) {
	    if (!sweetAlert.isValidParameter(param)) {
	      warn('Unknown parameter "' + param + '"');
	      delete userParams[param];
	    }
	  }

	  _extends(modalParams, userParams);
	};

	/**
	 * Reset default params for each popup
	 */
	sweetAlert.resetDefaults = function () {
	  modalParams = _extends({}, defaultParams);
	};

	sweetAlert.noop = function () {};

	sweetAlert.version = '6.11.5';

	sweetAlert.default = sweetAlert;

	return sweetAlert;

	})));
	if (window.Sweetalert2) window.sweetAlert = window.swal = window.Sweetalert2;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

	(function() {
	  var $, AbstractChosen, Chosen, SelectParser,
	    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
	    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    hasProp = {}.hasOwnProperty;

	  SelectParser = (function() {
	    function SelectParser() {
	      this.options_index = 0;
	      this.parsed = [];
	    }

	    SelectParser.prototype.add_node = function(child) {
	      if (child.nodeName.toUpperCase() === "OPTGROUP") {
	        return this.add_group(child);
	      } else {
	        return this.add_option(child);
	      }
	    };

	    SelectParser.prototype.add_group = function(group) {
	      var group_position, i, len, option, ref, results1;
	      group_position = this.parsed.length;
	      this.parsed.push({
	        array_index: group_position,
	        group: true,
	        label: group.label,
	        title: group.title ? group.title : void 0,
	        children: 0,
	        disabled: group.disabled,
	        classes: group.className
	      });
	      ref = group.childNodes;
	      results1 = [];
	      for (i = 0, len = ref.length; i < len; i++) {
	        option = ref[i];
	        results1.push(this.add_option(option, group_position, group.disabled));
	      }
	      return results1;
	    };

	    SelectParser.prototype.add_option = function(option, group_position, group_disabled) {
	      if (option.nodeName.toUpperCase() === "OPTION") {
	        if (option.text !== "") {
	          if (group_position != null) {
	            this.parsed[group_position].children += 1;
	          }
	          this.parsed.push({
	            array_index: this.parsed.length,
	            options_index: this.options_index,
	            value: option.value,
	            text: option.text,
	            html: option.innerHTML,
	            title: option.title ? option.title : void 0,
	            selected: option.selected,
	            disabled: group_disabled === true ? group_disabled : option.disabled,
	            group_array_index: group_position,
	            group_label: group_position != null ? this.parsed[group_position].label : null,
	            classes: option.className,
	            style: option.style.cssText
	          });
	        } else {
	          this.parsed.push({
	            array_index: this.parsed.length,
	            options_index: this.options_index,
	            empty: true
	          });
	        }
	        return this.options_index += 1;
	      }
	    };

	    return SelectParser;

	  })();

	  SelectParser.select_to_array = function(select) {
	    var child, i, len, parser, ref;
	    parser = new SelectParser();
	    ref = select.childNodes;
	    for (i = 0, len = ref.length; i < len; i++) {
	      child = ref[i];
	      parser.add_node(child);
	    }
	    return parser.parsed;
	  };

	  AbstractChosen = (function() {
	    function AbstractChosen(form_field, options1) {
	      this.form_field = form_field;
	      this.options = options1 != null ? options1 : {};
	      this.label_click_handler = bind(this.label_click_handler, this);
	      if (!AbstractChosen.browser_is_supported()) {
	        return;
	      }
	      this.is_multiple = this.form_field.multiple;
	      this.set_default_text();
	      this.set_default_values();
	      this.setup();
	      this.set_up_html();
	      this.register_observers();
	      this.on_ready();
	    }

	    AbstractChosen.prototype.set_default_values = function() {
	      this.click_test_action = (function(_this) {
	        return function(evt) {
	          return _this.test_active_click(evt);
	        };
	      })(this);
	      this.activate_action = (function(_this) {
	        return function(evt) {
	          return _this.activate_field(evt);
	        };
	      })(this);
	      this.active_field = false;
	      this.mouse_on_container = false;
	      this.results_showing = false;
	      this.result_highlighted = null;
	      this.is_rtl = this.options.rtl || /\bchosen-rtl\b/.test(this.form_field.className);
	      this.allow_single_deselect = (this.options.allow_single_deselect != null) && (this.form_field.options[0] != null) && this.form_field.options[0].text === "" ? this.options.allow_single_deselect : false;
	      this.disable_search_threshold = this.options.disable_search_threshold || 0;
	      this.disable_search = this.options.disable_search || false;
	      this.enable_split_word_search = this.options.enable_split_word_search != null ? this.options.enable_split_word_search : true;
	      this.group_search = this.options.group_search != null ? this.options.group_search : true;
	      this.search_contains = this.options.search_contains || false;
	      this.single_backstroke_delete = this.options.single_backstroke_delete != null ? this.options.single_backstroke_delete : true;
	      this.max_selected_options = this.options.max_selected_options || Infinity;
	      this.inherit_select_classes = this.options.inherit_select_classes || false;
	      this.display_selected_options = this.options.display_selected_options != null ? this.options.display_selected_options : true;
	      this.display_disabled_options = this.options.display_disabled_options != null ? this.options.display_disabled_options : true;
	      this.include_group_label_in_selected = this.options.include_group_label_in_selected || false;
	      this.max_shown_results = this.options.max_shown_results || Number.POSITIVE_INFINITY;
	      this.case_sensitive_search = this.options.case_sensitive_search || false;
	      return this.hide_results_on_select = this.options.hide_results_on_select != null ? this.options.hide_results_on_select : true;
	    };

	    AbstractChosen.prototype.set_default_text = function() {
	      if (this.form_field.getAttribute("data-placeholder")) {
	        this.default_text = this.form_field.getAttribute("data-placeholder");
	      } else if (this.is_multiple) {
	        this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || AbstractChosen.default_multiple_text;
	      } else {
	        this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || AbstractChosen.default_single_text;
	      }
	      this.default_text = this.escape_html(this.default_text);
	      return this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || AbstractChosen.default_no_result_text;
	    };

	    AbstractChosen.prototype.choice_label = function(item) {
	      if (this.include_group_label_in_selected && (item.group_label != null)) {
	        return "<b class='group-name'>" + (this.escape_html(item.group_label)) + "</b>" + item.html;
	      } else {
	        return item.html;
	      }
	    };

	    AbstractChosen.prototype.mouse_enter = function() {
	      return this.mouse_on_container = true;
	    };

	    AbstractChosen.prototype.mouse_leave = function() {
	      return this.mouse_on_container = false;
	    };

	    AbstractChosen.prototype.input_focus = function(evt) {
	      if (this.is_multiple) {
	        if (!this.active_field) {
	          return setTimeout(((function(_this) {
	            return function() {
	              return _this.container_mousedown();
	            };
	          })(this)), 50);
	        }
	      } else {
	        if (!this.active_field) {
	          return this.activate_field();
	        }
	      }
	    };

	    AbstractChosen.prototype.input_blur = function(evt) {
	      if (!this.mouse_on_container) {
	        this.active_field = false;
	        return setTimeout(((function(_this) {
	          return function() {
	            return _this.blur_test();
	          };
	        })(this)), 100);
	      }
	    };

	    AbstractChosen.prototype.label_click_handler = function(evt) {
	      if (this.is_multiple) {
	        return this.container_mousedown(evt);
	      } else {
	        return this.activate_field();
	      }
	    };

	    AbstractChosen.prototype.results_option_build = function(options) {
	      var content, data, data_content, i, len, ref, shown_results;
	      content = '';
	      shown_results = 0;
	      ref = this.results_data;
	      for (i = 0, len = ref.length; i < len; i++) {
	        data = ref[i];
	        data_content = '';
	        if (data.group) {
	          data_content = this.result_add_group(data);
	        } else {
	          data_content = this.result_add_option(data);
	        }
	        if (data_content !== '') {
	          shown_results++;
	          content += data_content;
	        }
	        if (options != null ? options.first : void 0) {
	          if (data.selected && this.is_multiple) {
	            this.choice_build(data);
	          } else if (data.selected && !this.is_multiple) {
	            this.single_set_selected_text(this.choice_label(data));
	          }
	        }
	        if (shown_results >= this.max_shown_results) {
	          break;
	        }
	      }
	      return content;
	    };

	    AbstractChosen.prototype.result_add_option = function(option) {
	      var classes, option_el;
	      if (!option.search_match) {
	        return '';
	      }
	      if (!this.include_option_in_results(option)) {
	        return '';
	      }
	      classes = [];
	      if (!option.disabled && !(option.selected && this.is_multiple)) {
	        classes.push("active-result");
	      }
	      if (option.disabled && !(option.selected && this.is_multiple)) {
	        classes.push("disabled-result");
	      }
	      if (option.selected) {
	        classes.push("result-selected");
	      }
	      if (option.group_array_index != null) {
	        classes.push("group-option");
	      }
	      if (option.classes !== "") {
	        classes.push(option.classes);
	      }
	      option_el = document.createElement("li");
	      option_el.className = classes.join(" ");
	      if (option.style) {
	        option_el.style.cssText = option.style;
	      }
	      option_el.setAttribute("data-option-array-index", option.array_index);
	      option_el.innerHTML = option.highlighted_html || option.html;
	      if (option.title) {
	        option_el.title = option.title;
	      }
	      return this.outerHTML(option_el);
	    };

	    AbstractChosen.prototype.result_add_group = function(group) {
	      var classes, group_el;
	      if (!(group.search_match || group.group_match)) {
	        return '';
	      }
	      if (!(group.active_options > 0)) {
	        return '';
	      }
	      classes = [];
	      classes.push("group-result");
	      if (group.classes) {
	        classes.push(group.classes);
	      }
	      group_el = document.createElement("li");
	      group_el.className = classes.join(" ");
	      group_el.innerHTML = group.highlighted_html || this.escape_html(group.label);
	      if (group.title) {
	        group_el.title = group.title;
	      }
	      return this.outerHTML(group_el);
	    };

	    AbstractChosen.prototype.results_update_field = function() {
	      this.set_default_text();
	      if (!this.is_multiple) {
	        this.results_reset_cleanup();
	      }
	      this.result_clear_highlight();
	      this.results_build();
	      if (this.results_showing) {
	        return this.winnow_results();
	      }
	    };

	    AbstractChosen.prototype.reset_single_select_options = function() {
	      var i, len, ref, result, results1;
	      ref = this.results_data;
	      results1 = [];
	      for (i = 0, len = ref.length; i < len; i++) {
	        result = ref[i];
	        if (result.selected) {
	          results1.push(result.selected = false);
	        } else {
	          results1.push(void 0);
	        }
	      }
	      return results1;
	    };

	    AbstractChosen.prototype.results_toggle = function() {
	      if (this.results_showing) {
	        return this.results_hide();
	      } else {
	        return this.results_show();
	      }
	    };

	    AbstractChosen.prototype.results_search = function(evt) {
	      if (this.results_showing) {
	        return this.winnow_results();
	      } else {
	        return this.results_show();
	      }
	    };

	    AbstractChosen.prototype.winnow_results = function(options) {
	      var escapedQuery, fix, i, len, option, prefix, query, ref, regex, results, results_group, search_match, startpos, suffix, text;
	      this.no_results_clear();
	      results = 0;
	      query = this.get_search_text();
	      escapedQuery = query.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
	      regex = this.get_search_regex(escapedQuery);
	      ref = this.results_data;
	      for (i = 0, len = ref.length; i < len; i++) {
	        option = ref[i];
	        option.search_match = false;
	        results_group = null;
	        search_match = null;
	        option.highlighted_html = '';
	        if (this.include_option_in_results(option)) {
	          if (option.group) {
	            option.group_match = false;
	            option.active_options = 0;
	          }
	          if ((option.group_array_index != null) && this.results_data[option.group_array_index]) {
	            results_group = this.results_data[option.group_array_index];
	            if (results_group.active_options === 0 && results_group.search_match) {
	              results += 1;
	            }
	            results_group.active_options += 1;
	          }
	          text = option.group ? option.label : option.text;
	          if (!(option.group && !this.group_search)) {
	            search_match = this.search_string_match(text, regex);
	            option.search_match = search_match != null;
	            if (option.search_match && !option.group) {
	              results += 1;
	            }
	            if (option.search_match) {
	              if (query.length) {
	                startpos = search_match.index;
	                prefix = text.slice(0, startpos);
	                fix = text.slice(startpos, startpos + query.length);
	                suffix = text.slice(startpos + query.length);
	                option.highlighted_html = (this.escape_html(prefix)) + "<em>" + (this.escape_html(fix)) + "</em>" + (this.escape_html(suffix));
	              }
	              if (results_group != null) {
	                results_group.group_match = true;
	              }
	            } else if ((option.group_array_index != null) && this.results_data[option.group_array_index].search_match) {
	              option.search_match = true;
	            }
	          }
	        }
	      }
	      this.result_clear_highlight();
	      if (results < 1 && query.length) {
	        this.update_results_content("");
	        return this.no_results(query);
	      } else {
	        this.update_results_content(this.results_option_build());
	        if (!(options != null ? options.skip_highlight : void 0)) {
	          return this.winnow_results_set_highlight();
	        }
	      }
	    };

	    AbstractChosen.prototype.get_search_regex = function(escaped_search_string) {
	      var regex_flag, regex_string;
	      regex_string = this.search_contains ? escaped_search_string : "(^|\\s|\\b)" + escaped_search_string + "[^\\s]*";
	      if (!(this.enable_split_word_search || this.search_contains)) {
	        regex_string = "^" + regex_string;
	      }
	      regex_flag = this.case_sensitive_search ? "" : "i";
	      return new RegExp(regex_string, regex_flag);
	    };

	    AbstractChosen.prototype.search_string_match = function(search_string, regex) {
	      var match;
	      match = regex.exec(search_string);
	      if (!this.search_contains && (match != null ? match[1] : void 0)) {
	        match.index += 1;
	      }
	      return match;
	    };

	    AbstractChosen.prototype.choices_count = function() {
	      var i, len, option, ref;
	      if (this.selected_option_count != null) {
	        return this.selected_option_count;
	      }
	      this.selected_option_count = 0;
	      ref = this.form_field.options;
	      for (i = 0, len = ref.length; i < len; i++) {
	        option = ref[i];
	        if (option.selected) {
	          this.selected_option_count += 1;
	        }
	      }
	      return this.selected_option_count;
	    };

	    AbstractChosen.prototype.choices_click = function(evt) {
	      evt.preventDefault();
	      this.activate_field();
	      if (!(this.results_showing || this.is_disabled)) {
	        return this.results_show();
	      }
	    };

	    AbstractChosen.prototype.keydown_checker = function(evt) {
	      var ref, stroke;
	      stroke = (ref = evt.which) != null ? ref : evt.keyCode;
	      this.search_field_scale();
	      if (stroke !== 8 && this.pending_backstroke) {
	        this.clear_backstroke();
	      }
	      switch (stroke) {
	        case 8:
	          this.backstroke_length = this.get_search_field_value().length;
	          break;
	        case 9:
	          if (this.results_showing && !this.is_multiple) {
	            this.result_select(evt);
	          }
	          this.mouse_on_container = false;
	          break;
	        case 13:
	          if (this.results_showing) {
	            evt.preventDefault();
	          }
	          break;
	        case 27:
	          if (this.results_showing) {
	            evt.preventDefault();
	          }
	          break;
	        case 32:
	          if (this.disable_search) {
	            evt.preventDefault();
	          }
	          break;
	        case 38:
	          evt.preventDefault();
	          this.keyup_arrow();
	          break;
	        case 40:
	          evt.preventDefault();
	          this.keydown_arrow();
	          break;
	      }
	    };

	    AbstractChosen.prototype.keyup_checker = function(evt) {
	      var ref, stroke;
	      stroke = (ref = evt.which) != null ? ref : evt.keyCode;
	      this.search_field_scale();
	      switch (stroke) {
	        case 8:
	          if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) {
	            this.keydown_backstroke();
	          } else if (!this.pending_backstroke) {
	            this.result_clear_highlight();
	            this.results_search();
	          }
	          break;
	        case 13:
	          evt.preventDefault();
	          if (this.results_showing) {
	            this.result_select(evt);
	          }
	          break;
	        case 27:
	          if (this.results_showing) {
	            this.results_hide();
	          }
	          break;
	        case 9:
	        case 16:
	        case 17:
	        case 18:
	        case 38:
	        case 40:
	        case 91:
	          break;
	        default:
	          this.results_search();
	          break;
	      }
	    };

	    AbstractChosen.prototype.clipboard_event_checker = function(evt) {
	      if (this.is_disabled) {
	        return;
	      }
	      return setTimeout(((function(_this) {
	        return function() {
	          return _this.results_search();
	        };
	      })(this)), 50);
	    };

	    AbstractChosen.prototype.container_width = function() {
	      if (this.options.width != null) {
	        return this.options.width;
	      } else {
	        return this.form_field.offsetWidth + "px";
	      }
	    };

	    AbstractChosen.prototype.include_option_in_results = function(option) {
	      if (this.is_multiple && (!this.display_selected_options && option.selected)) {
	        return false;
	      }
	      if (!this.display_disabled_options && option.disabled) {
	        return false;
	      }
	      if (option.empty) {
	        return false;
	      }
	      return true;
	    };

	    AbstractChosen.prototype.search_results_touchstart = function(evt) {
	      this.touch_started = true;
	      return this.search_results_mouseover(evt);
	    };

	    AbstractChosen.prototype.search_results_touchmove = function(evt) {
	      this.touch_started = false;
	      return this.search_results_mouseout(evt);
	    };

	    AbstractChosen.prototype.search_results_touchend = function(evt) {
	      if (this.touch_started) {
	        return this.search_results_mouseup(evt);
	      }
	    };

	    AbstractChosen.prototype.outerHTML = function(element) {
	      var tmp;
	      if (element.outerHTML) {
	        return element.outerHTML;
	      }
	      tmp = document.createElement("div");
	      tmp.appendChild(element);
	      return tmp.innerHTML;
	    };

	    AbstractChosen.prototype.get_single_html = function() {
	      return "<a class=\"chosen-single chosen-default\">\n  <span>" + this.default_text + "</span>\n  <div><b></b></div>\n</a>\n<div class=\"chosen-drop\">\n  <div class=\"chosen-search\">\n    <input class=\"chosen-search-input\" type=\"text\" autocomplete=\"off\" />\n  </div>\n  <ul class=\"chosen-results\"></ul>\n</div>";
	    };

	    AbstractChosen.prototype.get_multi_html = function() {
	      return "<ul class=\"chosen-choices\">\n  <li class=\"search-field\">\n    <input class=\"chosen-search-input\" type=\"text\" autocomplete=\"off\" value=\"" + this.default_text + "\" />\n  </li>\n</ul>\n<div class=\"chosen-drop\">\n  <ul class=\"chosen-results\"></ul>\n</div>";
	    };

	    AbstractChosen.prototype.get_no_results_html = function(terms) {
	      return "<li class=\"no-results\">\n  " + this.results_none_found + " <span>" + (this.escape_html(terms)) + "</span>\n</li>";
	    };

	    AbstractChosen.browser_is_supported = function() {
	      if ("Microsoft Internet Explorer" === window.navigator.appName) {
	        return document.documentMode >= 8;
	      }
	      if (/iP(od|hone)/i.test(window.navigator.userAgent) || /IEMobile/i.test(window.navigator.userAgent) || /Windows Phone/i.test(window.navigator.userAgent) || /BlackBerry/i.test(window.navigator.userAgent) || /BB10/i.test(window.navigator.userAgent) || /Android.*Mobile/i.test(window.navigator.userAgent)) {
	        return false;
	      }
	      return true;
	    };

	    AbstractChosen.default_multiple_text = "Select Some Options";

	    AbstractChosen.default_single_text = "Select an Option";

	    AbstractChosen.default_no_result_text = "No results match";

	    return AbstractChosen;

	  })();

	  $ = jQuery;

	  $.fn.extend({
	    chosen: function(options) {
	      if (!AbstractChosen.browser_is_supported()) {
	        return this;
	      }
	      return this.each(function(input_field) {
	        var $this, chosen;
	        $this = $(this);
	        chosen = $this.data('chosen');
	        if (options === 'destroy') {
	          if (chosen instanceof Chosen) {
	            chosen.destroy();
	          }
	          return;
	        }
	        if (!(chosen instanceof Chosen)) {
	          $this.data('chosen', new Chosen(this, options));
	        }
	      });
	    }
	  });

	  Chosen = (function(superClass) {
	    extend(Chosen, superClass);

	    function Chosen() {
	      return Chosen.__super__.constructor.apply(this, arguments);
	    }

	    Chosen.prototype.setup = function() {
	      this.form_field_jq = $(this.form_field);
	      return this.current_selectedIndex = this.form_field.selectedIndex;
	    };

	    Chosen.prototype.set_up_html = function() {
	      var container_classes, container_props;
	      container_classes = ["chosen-container"];
	      container_classes.push("chosen-container-" + (this.is_multiple ? "multi" : "single"));
	      if (this.inherit_select_classes && this.form_field.className) {
	        container_classes.push(this.form_field.className);
	      }
	      if (this.is_rtl) {
	        container_classes.push("chosen-rtl");
	      }
	      container_props = {
	        'class': container_classes.join(' '),
	        'title': this.form_field.title
	      };
	      if (this.form_field.id.length) {
	        container_props.id = this.form_field.id.replace(/[^\w]/g, '_') + "_chosen";
	      }
	      this.container = $("<div />", container_props);
	      this.container.width(this.container_width());
	      if (this.is_multiple) {
	        this.container.html(this.get_multi_html());
	      } else {
	        this.container.html(this.get_single_html());
	      }
	      this.form_field_jq.hide().after(this.container);
	      this.dropdown = this.container.find('div.chosen-drop').first();
	      this.search_field = this.container.find('input').first();
	      this.search_results = this.container.find('ul.chosen-results').first();
	      this.search_field_scale();
	      this.search_no_results = this.container.find('li.no-results').first();
	      if (this.is_multiple) {
	        this.search_choices = this.container.find('ul.chosen-choices').first();
	        this.search_container = this.container.find('li.search-field').first();
	      } else {
	        this.search_container = this.container.find('div.chosen-search').first();
	        this.selected_item = this.container.find('.chosen-single').first();
	      }
	      this.results_build();
	      this.set_tab_index();
	      return this.set_label_behavior();
	    };

	    Chosen.prototype.on_ready = function() {
	      return this.form_field_jq.trigger("chosen:ready", {
	        chosen: this
	      });
	    };

	    Chosen.prototype.register_observers = function() {
	      this.container.on('touchstart.chosen', (function(_this) {
	        return function(evt) {
	          _this.container_mousedown(evt);
	        };
	      })(this));
	      this.container.on('touchend.chosen', (function(_this) {
	        return function(evt) {
	          _this.container_mouseup(evt);
	        };
	      })(this));
	      this.container.on('mousedown.chosen', (function(_this) {
	        return function(evt) {
	          _this.container_mousedown(evt);
	        };
	      })(this));
	      this.container.on('mouseup.chosen', (function(_this) {
	        return function(evt) {
	          _this.container_mouseup(evt);
	        };
	      })(this));
	      this.container.on('mouseenter.chosen', (function(_this) {
	        return function(evt) {
	          _this.mouse_enter(evt);
	        };
	      })(this));
	      this.container.on('mouseleave.chosen', (function(_this) {
	        return function(evt) {
	          _this.mouse_leave(evt);
	        };
	      })(this));
	      this.search_results.on('mouseup.chosen', (function(_this) {
	        return function(evt) {
	          _this.search_results_mouseup(evt);
	        };
	      })(this));
	      this.search_results.on('mouseover.chosen', (function(_this) {
	        return function(evt) {
	          _this.search_results_mouseover(evt);
	        };
	      })(this));
	      this.search_results.on('mouseout.chosen', (function(_this) {
	        return function(evt) {
	          _this.search_results_mouseout(evt);
	        };
	      })(this));
	      this.search_results.on('mousewheel.chosen DOMMouseScroll.chosen', (function(_this) {
	        return function(evt) {
	          _this.search_results_mousewheel(evt);
	        };
	      })(this));
	      this.search_results.on('touchstart.chosen', (function(_this) {
	        return function(evt) {
	          _this.search_results_touchstart(evt);
	        };
	      })(this));
	      this.search_results.on('touchmove.chosen', (function(_this) {
	        return function(evt) {
	          _this.search_results_touchmove(evt);
	        };
	      })(this));
	      this.search_results.on('touchend.chosen', (function(_this) {
	        return function(evt) {
	          _this.search_results_touchend(evt);
	        };
	      })(this));
	      this.form_field_jq.on("chosen:updated.chosen", (function(_this) {
	        return function(evt) {
	          _this.results_update_field(evt);
	        };
	      })(this));
	      this.form_field_jq.on("chosen:activate.chosen", (function(_this) {
	        return function(evt) {
	          _this.activate_field(evt);
	        };
	      })(this));
	      this.form_field_jq.on("chosen:open.chosen", (function(_this) {
	        return function(evt) {
	          _this.container_mousedown(evt);
	        };
	      })(this));
	      this.form_field_jq.on("chosen:close.chosen", (function(_this) {
	        return function(evt) {
	          _this.close_field(evt);
	        };
	      })(this));
	      this.search_field.on('blur.chosen', (function(_this) {
	        return function(evt) {
	          _this.input_blur(evt);
	        };
	      })(this));
	      this.search_field.on('keyup.chosen', (function(_this) {
	        return function(evt) {
	          _this.keyup_checker(evt);
	        };
	      })(this));
	      this.search_field.on('keydown.chosen', (function(_this) {
	        return function(evt) {
	          _this.keydown_checker(evt);
	        };
	      })(this));
	      this.search_field.on('focus.chosen', (function(_this) {
	        return function(evt) {
	          _this.input_focus(evt);
	        };
	      })(this));
	      this.search_field.on('cut.chosen', (function(_this) {
	        return function(evt) {
	          _this.clipboard_event_checker(evt);
	        };
	      })(this));
	      this.search_field.on('paste.chosen', (function(_this) {
	        return function(evt) {
	          _this.clipboard_event_checker(evt);
	        };
	      })(this));
	      if (this.is_multiple) {
	        return this.search_choices.on('click.chosen', (function(_this) {
	          return function(evt) {
	            _this.choices_click(evt);
	          };
	        })(this));
	      } else {
	        return this.container.on('click.chosen', function(evt) {
	          evt.preventDefault();
	        });
	      }
	    };

	    Chosen.prototype.destroy = function() {
	      $(this.container[0].ownerDocument).off('click.chosen', this.click_test_action);
	      if (this.form_field_label.length > 0) {
	        this.form_field_label.off('click.chosen');
	      }
	      if (this.search_field[0].tabIndex) {
	        this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex;
	      }
	      this.container.remove();
	      this.form_field_jq.removeData('chosen');
	      return this.form_field_jq.show();
	    };

	    Chosen.prototype.search_field_disabled = function() {
	      this.is_disabled = this.form_field.disabled || this.form_field_jq.parents('fieldset').is(':disabled');
	      this.container.toggleClass('chosen-disabled', this.is_disabled);
	      this.search_field[0].disabled = this.is_disabled;
	      if (!this.is_multiple) {
	        this.selected_item.off('focus.chosen', this.activate_field);
	      }
	      if (this.is_disabled) {
	        return this.close_field();
	      } else if (!this.is_multiple) {
	        return this.selected_item.on('focus.chosen', this.activate_field);
	      }
	    };

	    Chosen.prototype.container_mousedown = function(evt) {
	      var ref;
	      if (this.is_disabled) {
	        return;
	      }
	      if (evt && ((ref = evt.type) === 'mousedown' || ref === 'touchstart') && !this.results_showing) {
	        evt.preventDefault();
	      }
	      if (!((evt != null) && ($(evt.target)).hasClass("search-choice-close"))) {
	        if (!this.active_field) {
	          if (this.is_multiple) {
	            this.search_field.val("");
	          }
	          $(this.container[0].ownerDocument).on('click.chosen', this.click_test_action);
	          this.results_show();
	        } else if (!this.is_multiple && evt && (($(evt.target)[0] === this.selected_item[0]) || $(evt.target).parents("a.chosen-single").length)) {
	          evt.preventDefault();
	          this.results_toggle();
	        }
	        return this.activate_field();
	      }
	    };

	    Chosen.prototype.container_mouseup = function(evt) {
	      if (evt.target.nodeName === "ABBR" && !this.is_disabled) {
	        return this.results_reset(evt);
	      }
	    };

	    Chosen.prototype.search_results_mousewheel = function(evt) {
	      var delta;
	      if (evt.originalEvent) {
	        delta = evt.originalEvent.deltaY || -evt.originalEvent.wheelDelta || evt.originalEvent.detail;
	      }
	      if (delta != null) {
	        evt.preventDefault();
	        if (evt.type === 'DOMMouseScroll') {
	          delta = delta * 40;
	        }
	        return this.search_results.scrollTop(delta + this.search_results.scrollTop());
	      }
	    };

	    Chosen.prototype.blur_test = function(evt) {
	      if (!this.active_field && this.container.hasClass("chosen-container-active")) {
	        return this.close_field();
	      }
	    };

	    Chosen.prototype.close_field = function() {
	      $(this.container[0].ownerDocument).off("click.chosen", this.click_test_action);
	      this.active_field = false;
	      this.results_hide();
	      this.container.removeClass("chosen-container-active");
	      this.clear_backstroke();
	      this.show_search_field_default();
	      this.search_field_scale();
	      return this.search_field.blur();
	    };

	    Chosen.prototype.activate_field = function() {
	      if (this.is_disabled) {
	        return;
	      }
	      this.container.addClass("chosen-container-active");
	      this.active_field = true;
	      this.search_field.val(this.search_field.val());
	      return this.search_field.focus();
	    };

	    Chosen.prototype.test_active_click = function(evt) {
	      var active_container;
	      active_container = $(evt.target).closest('.chosen-container');
	      if (active_container.length && this.container[0] === active_container[0]) {
	        return this.active_field = true;
	      } else {
	        return this.close_field();
	      }
	    };

	    Chosen.prototype.results_build = function() {
	      this.parsing = true;
	      this.selected_option_count = null;
	      this.results_data = SelectParser.select_to_array(this.form_field);
	      if (this.is_multiple) {
	        this.search_choices.find("li.search-choice").remove();
	      } else {
	        this.single_set_selected_text();
	        if (this.disable_search || this.form_field.options.length <= this.disable_search_threshold) {
	          this.search_field[0].readOnly = true;
	          this.container.addClass("chosen-container-single-nosearch");
	        } else {
	          this.search_field[0].readOnly = false;
	          this.container.removeClass("chosen-container-single-nosearch");
	        }
	      }
	      this.update_results_content(this.results_option_build({
	        first: true
	      }));
	      this.search_field_disabled();
	      this.show_search_field_default();
	      this.search_field_scale();
	      return this.parsing = false;
	    };

	    Chosen.prototype.result_do_highlight = function(el) {
	      var high_bottom, high_top, maxHeight, visible_bottom, visible_top;
	      if (el.length) {
	        this.result_clear_highlight();
	        this.result_highlight = el;
	        this.result_highlight.addClass("highlighted");
	        maxHeight = parseInt(this.search_results.css("maxHeight"), 10);
	        visible_top = this.search_results.scrollTop();
	        visible_bottom = maxHeight + visible_top;
	        high_top = this.result_highlight.position().top + this.search_results.scrollTop();
	        high_bottom = high_top + this.result_highlight.outerHeight();
	        if (high_bottom >= visible_bottom) {
	          return this.search_results.scrollTop((high_bottom - maxHeight) > 0 ? high_bottom - maxHeight : 0);
	        } else if (high_top < visible_top) {
	          return this.search_results.scrollTop(high_top);
	        }
	      }
	    };

	    Chosen.prototype.result_clear_highlight = function() {
	      if (this.result_highlight) {
	        this.result_highlight.removeClass("highlighted");
	      }
	      return this.result_highlight = null;
	    };

	    Chosen.prototype.results_show = function() {
	      if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
	        this.form_field_jq.trigger("chosen:maxselected", {
	          chosen: this
	        });
	        return false;
	      }
	      this.container.addClass("chosen-with-drop");
	      this.results_showing = true;
	      this.search_field.focus();
	      this.search_field.val(this.get_search_field_value());
	      this.winnow_results();
	      return this.form_field_jq.trigger("chosen:showing_dropdown", {
	        chosen: this
	      });
	    };

	    Chosen.prototype.update_results_content = function(content) {
	      return this.search_results.html(content);
	    };

	    Chosen.prototype.results_hide = function() {
	      if (this.results_showing) {
	        this.result_clear_highlight();
	        this.container.removeClass("chosen-with-drop");
	        this.form_field_jq.trigger("chosen:hiding_dropdown", {
	          chosen: this
	        });
	      }
	      return this.results_showing = false;
	    };

	    Chosen.prototype.set_tab_index = function(el) {
	      var ti;
	      if (this.form_field.tabIndex) {
	        ti = this.form_field.tabIndex;
	        this.form_field.tabIndex = -1;
	        return this.search_field[0].tabIndex = ti;
	      }
	    };

	    Chosen.prototype.set_label_behavior = function() {
	      this.form_field_label = this.form_field_jq.parents("label");
	      if (!this.form_field_label.length && this.form_field.id.length) {
	        this.form_field_label = $("label[for='" + this.form_field.id + "']");
	      }
	      if (this.form_field_label.length > 0) {
	        return this.form_field_label.on('click.chosen', this.label_click_handler);
	      }
	    };

	    Chosen.prototype.show_search_field_default = function() {
	      if (this.is_multiple && this.choices_count() < 1 && !this.active_field) {
	        this.search_field.val(this.default_text);
	        return this.search_field.addClass("default");
	      } else {
	        this.search_field.val("");
	        return this.search_field.removeClass("default");
	      }
	    };

	    Chosen.prototype.search_results_mouseup = function(evt) {
	      var target;
	      target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
	      if (target.length) {
	        this.result_highlight = target;
	        this.result_select(evt);
	        return this.search_field.focus();
	      }
	    };

	    Chosen.prototype.search_results_mouseover = function(evt) {
	      var target;
	      target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
	      if (target) {
	        return this.result_do_highlight(target);
	      }
	    };

	    Chosen.prototype.search_results_mouseout = function(evt) {
	      if ($(evt.target).hasClass("active-result") || $(evt.target).parents('.active-result').first()) {
	        return this.result_clear_highlight();
	      }
	    };

	    Chosen.prototype.choice_build = function(item) {
	      var choice, close_link;
	      choice = $('<li />', {
	        "class": "search-choice"
	      }).html("<span>" + (this.choice_label(item)) + "</span>");
	      if (item.disabled) {
	        choice.addClass('search-choice-disabled');
	      } else {
	        close_link = $('<a />', {
	          "class": 'search-choice-close',
	          'data-option-array-index': item.array_index
	        });
	        close_link.on('click.chosen', (function(_this) {
	          return function(evt) {
	            return _this.choice_destroy_link_click(evt);
	          };
	        })(this));
	        choice.append(close_link);
	      }
	      return this.search_container.before(choice);
	    };

	    Chosen.prototype.choice_destroy_link_click = function(evt) {
	      evt.preventDefault();
	      evt.stopPropagation();
	      if (!this.is_disabled) {
	        return this.choice_destroy($(evt.target));
	      }
	    };

	    Chosen.prototype.choice_destroy = function(link) {
	      if (this.result_deselect(link[0].getAttribute("data-option-array-index"))) {
	        if (this.active_field) {
	          this.search_field.focus();
	        } else {
	          this.show_search_field_default();
	        }
	        if (this.is_multiple && this.choices_count() > 0 && this.get_search_field_value().length < 1) {
	          this.results_hide();
	        }
	        link.parents('li').first().remove();
	        return this.search_field_scale();
	      }
	    };

	    Chosen.prototype.results_reset = function() {
	      this.reset_single_select_options();
	      this.form_field.options[0].selected = true;
	      this.single_set_selected_text();
	      this.show_search_field_default();
	      this.results_reset_cleanup();
	      this.trigger_form_field_change();
	      if (this.active_field) {
	        return this.results_hide();
	      }
	    };

	    Chosen.prototype.results_reset_cleanup = function() {
	      this.current_selectedIndex = this.form_field.selectedIndex;
	      return this.selected_item.find("abbr").remove();
	    };

	    Chosen.prototype.result_select = function(evt) {
	      var high, item;
	      if (this.result_highlight) {
	        high = this.result_highlight;
	        this.result_clear_highlight();
	        if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
	          this.form_field_jq.trigger("chosen:maxselected", {
	            chosen: this
	          });
	          return false;
	        }
	        if (this.is_multiple) {
	          high.removeClass("active-result");
	        } else {
	          this.reset_single_select_options();
	        }
	        high.addClass("result-selected");
	        item = this.results_data[high[0].getAttribute("data-option-array-index")];
	        item.selected = true;
	        this.form_field.options[item.options_index].selected = true;
	        this.selected_option_count = null;
	        if (this.is_multiple) {
	          this.choice_build(item);
	        } else {
	          this.single_set_selected_text(this.choice_label(item));
	        }
	        if (this.is_multiple && (!this.hide_results_on_select || (evt.metaKey || evt.ctrlKey))) {
	          if (evt.metaKey || evt.ctrlKey) {
	            this.winnow_results({
	              skip_highlight: true
	            });
	          } else {
	            this.search_field.val("");
	            this.winnow_results();
	          }
	        } else {
	          this.results_hide();
	          this.show_search_field_default();
	        }
	        if (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) {
	          this.trigger_form_field_change({
	            selected: this.form_field.options[item.options_index].value
	          });
	        }
	        this.current_selectedIndex = this.form_field.selectedIndex;
	        evt.preventDefault();
	        return this.search_field_scale();
	      }
	    };

	    Chosen.prototype.single_set_selected_text = function(text) {
	      if (text == null) {
	        text = this.default_text;
	      }
	      if (text === this.default_text) {
	        this.selected_item.addClass("chosen-default");
	      } else {
	        this.single_deselect_control_build();
	        this.selected_item.removeClass("chosen-default");
	      }
	      return this.selected_item.find("span").html(text);
	    };

	    Chosen.prototype.result_deselect = function(pos) {
	      var result_data;
	      result_data = this.results_data[pos];
	      if (!this.form_field.options[result_data.options_index].disabled) {
	        result_data.selected = false;
	        this.form_field.options[result_data.options_index].selected = false;
	        this.selected_option_count = null;
	        this.result_clear_highlight();
	        if (this.results_showing) {
	          this.winnow_results();
	        }
	        this.trigger_form_field_change({
	          deselected: this.form_field.options[result_data.options_index].value
	        });
	        this.search_field_scale();
	        return true;
	      } else {
	        return false;
	      }
	    };

	    Chosen.prototype.single_deselect_control_build = function() {
	      if (!this.allow_single_deselect) {
	        return;
	      }
	      if (!this.selected_item.find("abbr").length) {
	        this.selected_item.find("span").first().after("<abbr class=\"search-choice-close\"></abbr>");
	      }
	      return this.selected_item.addClass("chosen-single-with-deselect");
	    };

	    Chosen.prototype.get_search_field_value = function() {
	      return this.search_field.val();
	    };

	    Chosen.prototype.get_search_text = function() {
	      return $.trim(this.get_search_field_value());
	    };

	    Chosen.prototype.escape_html = function(text) {
	      return $('<div/>').text(text).html();
	    };

	    Chosen.prototype.winnow_results_set_highlight = function() {
	      var do_high, selected_results;
	      selected_results = !this.is_multiple ? this.search_results.find(".result-selected.active-result") : [];
	      do_high = selected_results.length ? selected_results.first() : this.search_results.find(".active-result").first();
	      if (do_high != null) {
	        return this.result_do_highlight(do_high);
	      }
	    };

	    Chosen.prototype.no_results = function(terms) {
	      var no_results_html;
	      no_results_html = this.get_no_results_html(terms);
	      this.search_results.append(no_results_html);
	      return this.form_field_jq.trigger("chosen:no_results", {
	        chosen: this
	      });
	    };

	    Chosen.prototype.no_results_clear = function() {
	      return this.search_results.find(".no-results").remove();
	    };

	    Chosen.prototype.keydown_arrow = function() {
	      var next_sib;
	      if (this.results_showing && this.result_highlight) {
	        next_sib = this.result_highlight.nextAll("li.active-result").first();
	        if (next_sib) {
	          return this.result_do_highlight(next_sib);
	        }
	      } else {
	        return this.results_show();
	      }
	    };

	    Chosen.prototype.keyup_arrow = function() {
	      var prev_sibs;
	      if (!this.results_showing && !this.is_multiple) {
	        return this.results_show();
	      } else if (this.result_highlight) {
	        prev_sibs = this.result_highlight.prevAll("li.active-result");
	        if (prev_sibs.length) {
	          return this.result_do_highlight(prev_sibs.first());
	        } else {
	          if (this.choices_count() > 0) {
	            this.results_hide();
	          }
	          return this.result_clear_highlight();
	        }
	      }
	    };

	    Chosen.prototype.keydown_backstroke = function() {
	      var next_available_destroy;
	      if (this.pending_backstroke) {
	        this.choice_destroy(this.pending_backstroke.find("a").first());
	        return this.clear_backstroke();
	      } else {
	        next_available_destroy = this.search_container.siblings("li.search-choice").last();
	        if (next_available_destroy.length && !next_available_destroy.hasClass("search-choice-disabled")) {
	          this.pending_backstroke = next_available_destroy;
	          if (this.single_backstroke_delete) {
	            return this.keydown_backstroke();
	          } else {
	            return this.pending_backstroke.addClass("search-choice-focus");
	          }
	        }
	      }
	    };

	    Chosen.prototype.clear_backstroke = function() {
	      if (this.pending_backstroke) {
	        this.pending_backstroke.removeClass("search-choice-focus");
	      }
	      return this.pending_backstroke = null;
	    };

	    Chosen.prototype.search_field_scale = function() {
	      var div, i, len, style, style_block, styles, width;
	      if (!this.is_multiple) {
	        return;
	      }
	      style_block = {
	        position: 'absolute',
	        left: '-1000px',
	        top: '-1000px',
	        display: 'none',
	        whiteSpace: 'pre'
	      };
	      styles = ['fontSize', 'fontStyle', 'fontWeight', 'fontFamily', 'lineHeight', 'textTransform', 'letterSpacing'];
	      for (i = 0, len = styles.length; i < len; i++) {
	        style = styles[i];
	        style_block[style] = this.search_field.css(style);
	      }
	      div = $('<div />').css(style_block);
	      div.text(this.get_search_field_value());
	      $('body').append(div);
	      width = div.width() + 25;
	      div.remove();
	      if (this.container.is(':visible')) {
	        width = Math.min(this.container.outerWidth() - 10, width);
	      }
	      return this.search_field.width(width);
	    };

	    Chosen.prototype.trigger_form_field_change = function(extra) {
	      this.form_field_jq.trigger("input", extra);
	      return this.form_field_jq.trigger("change", extra);
	    };

	    return Chosen;

	  })(AbstractChosen);

	}).call(this);


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	(function (factory) {
	    if (typeof define === 'function' && define.amd) {
	        // AMD. Register as an anonymous module.
	        define(['jquery'], factory);
	    } else if (typeof exports === 'object') {
	        // Node/CommonJS
	        factory(require('jquery'));
	    } else {
	        // Browser globals
	        factory(jQuery);
	    }
	}(function ($) {

	var ua = navigator.userAgent,
		iPhone = /iphone/i.test(ua),
		chrome = /chrome/i.test(ua),
		android = /android/i.test(ua),
		caretTimeoutId;

	$.mask = {
		//Predefined character definitions
		definitions: {
			'9': "[0-9]",
			'a': "[A-Za-z]",
			'*': "[A-Za-z0-9]"
		},
		autoclear: true,
		dataName: "rawMaskFn",
		placeholder: '_'
	};

	$.fn.extend({
		//Helper Function for Caret positioning
		caret: function(begin, end) {
			var range;

			if (this.length === 0 || this.is(":hidden") || this.get(0) !== document.activeElement) {
				return;
			}

			if (typeof begin == 'number') {
				end = (typeof end === 'number') ? end : begin;
				return this.each(function() {
					if (this.setSelectionRange) {
						this.setSelectionRange(begin, end);
					} else if (this.createTextRange) {
						range = this.createTextRange();
						range.collapse(true);
						range.moveEnd('character', end);
						range.moveStart('character', begin);
						range.select();
					}
				});
			} else {
				if (this[0].setSelectionRange) {
					begin = this[0].selectionStart;
					end = this[0].selectionEnd;
				} else if (document.selection && document.selection.createRange) {
					range = document.selection.createRange();
					begin = 0 - range.duplicate().moveStart('character', -100000);
					end = begin + range.text.length;
				}
				return { begin: begin, end: end };
			}
		},
		unmask: function() {
			return this.trigger("unmask");
		},
		mask: function(mask, settings) {
			var input,
				defs,
				tests,
				partialPosition,
				firstNonMaskPos,
	            lastRequiredNonMaskPos,
	            len,
	            oldVal;

			if (!mask && this.length > 0) {
				input = $(this[0]);
	            var fn = input.data($.mask.dataName)
				return fn?fn():undefined;
			}

			settings = $.extend({
				autoclear: $.mask.autoclear,
				placeholder: $.mask.placeholder, // Load default placeholder
				completed: null
			}, settings);


			defs = $.mask.definitions;
			tests = [];
			partialPosition = len = mask.length;
			firstNonMaskPos = null;

			mask = String(mask);

			$.each(mask.split(""), function(i, c) {
				if (c == '?') {
					len--;
					partialPosition = i;
				} else if (defs[c]) {
					tests.push(new RegExp(defs[c]));
					if (firstNonMaskPos === null) {
						firstNonMaskPos = tests.length - 1;
					}
	                if(i < partialPosition){
	                    lastRequiredNonMaskPos = tests.length - 1;
	                }
				} else {
					tests.push(null);
				}
			});

			return this.trigger("unmask").each(function() {
				var input = $(this),
					buffer = $.map(
	    				mask.split(""),
	    				function(c, i) {
	    					if (c != '?') {
	    						return defs[c] ? getPlaceholder(i) : c;
	    					}
	    				}),
					defaultBuffer = buffer.join(''),
					focusText = input.val();

	            function tryFireCompleted(){
	                if (!settings.completed) {
	                    return;
	                }

	                for (var i = firstNonMaskPos; i <= lastRequiredNonMaskPos; i++) {
	                    if (tests[i] && buffer[i] === getPlaceholder(i)) {
	                        return;
	                    }
	                }
	                settings.completed.call(input);
	            }

	            function getPlaceholder(i){
	                if(i < settings.placeholder.length)
	                    return settings.placeholder.charAt(i);
	                return settings.placeholder.charAt(0);
	            }

				function seekNext(pos) {
					while (++pos < len && !tests[pos]);
					return pos;
				}

				function seekPrev(pos) {
					while (--pos >= 0 && !tests[pos]);
					return pos;
				}

				function shiftL(begin,end) {
					var i,
						j;

					if (begin<0) {
						return;
					}

					for (i = begin, j = seekNext(end); i < len; i++) {
						if (tests[i]) {
							if (j < len && tests[i].test(buffer[j])) {
								buffer[i] = buffer[j];
								buffer[j] = getPlaceholder(j);
							} else {
								break;
							}

							j = seekNext(j);
						}
					}
					writeBuffer();
					input.caret(Math.max(firstNonMaskPos, begin));
				}

				function shiftR(pos) {
					var i,
						c,
						j,
						t;

					for (i = pos, c = getPlaceholder(pos); i < len; i++) {
						if (tests[i]) {
							j = seekNext(i);
							t = buffer[i];
							buffer[i] = c;
							if (j < len && tests[j].test(t)) {
								c = t;
							} else {
								break;
							}
						}
					}
				}

				function androidInputEvent(e) {
					var curVal = input.val();
					var pos = input.caret();
					if (oldVal && oldVal.length && oldVal.length > curVal.length ) {
						// a deletion or backspace happened
						checkVal(true);
						while (pos.begin > 0 && !tests[pos.begin-1])
							pos.begin--;
						if (pos.begin === 0)
						{
							while (pos.begin < firstNonMaskPos && !tests[pos.begin])
								pos.begin++;
						}
						input.caret(pos.begin,pos.begin);
					} else {
						var pos2 = checkVal(true);
						var lastEnteredValue = curVal.charAt(pos.begin);
						if (pos.begin < len){
							if(!tests[pos.begin]){
								pos.begin++;
								if(tests[pos.begin].test(lastEnteredValue)){
									pos.begin++;
								}
							}else{
								if(tests[pos.begin].test(lastEnteredValue)){
									pos.begin++;
								}
							}
						}
						input.caret(pos.begin,pos.begin);
					}
					tryFireCompleted();
				}


				function blurEvent(e) {
	                checkVal();

	                if (input.val() != focusText)
	                    input.change();
	            }

				function keydownEvent(e) {
	                if (input.prop("readonly")){
	                    return;
	                }

					var k = e.which || e.keyCode,
						pos,
						begin,
						end;
	                    oldVal = input.val();
					//backspace, delete, and escape get special treatment
					if (k === 8 || k === 46 || (iPhone && k === 127)) {
						pos = input.caret();
						begin = pos.begin;
						end = pos.end;

						if (end - begin === 0) {
							begin=k!==46?seekPrev(begin):(end=seekNext(begin-1));
							end=k===46?seekNext(end):end;
						}
						clearBuffer(begin, end);
						shiftL(begin, end - 1);

						e.preventDefault();
					} else if( k === 13 ) { // enter
						blurEvent.call(this, e);
					} else if (k === 27) { // escape
						input.val(focusText);
						input.caret(0, checkVal());
						e.preventDefault();
					}
				}

				function keypressEvent(e) {
	                if (input.prop("readonly")){
	                    return;
	                }

					var k = e.which || e.keyCode,
						pos = input.caret(),
						p,
						c,
						next;

					if (e.ctrlKey || e.altKey || e.metaKey || k < 32) {//Ignore
						return;
					} else if ( k && k !== 13 ) {
						if (pos.end - pos.begin !== 0){
							clearBuffer(pos.begin, pos.end);
							shiftL(pos.begin, pos.end-1);
						}

						p = seekNext(pos.begin - 1);
						if (p < len) {
							c = String.fromCharCode(k);
							if (tests[p].test(c)) {
								shiftR(p);

								buffer[p] = c;
								writeBuffer();
								next = seekNext(p);

								if(android){
									//Path for CSP Violation on FireFox OS 1.1
									var proxy = function() {
										$.proxy($.fn.caret,input,next)();
									};

									setTimeout(proxy,0);
								}else{
									input.caret(next);
								}
	                            if(pos.begin <= lastRequiredNonMaskPos){
			                         tryFireCompleted();
	                             }
							}
						}
						e.preventDefault();
					}
				}

				function clearBuffer(start, end) {
					var i;
					for (i = start; i < end && i < len; i++) {
						if (tests[i]) {
							buffer[i] = getPlaceholder(i);
						}
					}
				}

				function writeBuffer() { input.val(buffer.join('')); }

				function checkVal(allow) {
					//try to place characters where they belong
					var test = input.val(),
						lastMatch = -1,
						i,
						c,
						pos;

					for (i = 0, pos = 0; i < len; i++) {
						if (tests[i]) {
							buffer[i] = getPlaceholder(i);
							while (pos++ < test.length) {
								c = test.charAt(pos - 1);
								if (tests[i].test(c)) {
									buffer[i] = c;
									lastMatch = i;
									break;
								}
							}
							if (pos > test.length) {
								clearBuffer(i + 1, len);
								break;
							}
						} else {
	                        if (buffer[i] === test.charAt(pos)) {
	                            pos++;
	                        }
	                        if( i < partialPosition){
	                            lastMatch = i;
	                        }
						}
					}
					if (allow) {
						writeBuffer();
					} else if (lastMatch + 1 < partialPosition) {
						if (settings.autoclear || buffer.join('') === defaultBuffer) {
							// Invalid value. Remove it and replace it with the
							// mask, which is the default behavior.
							if(input.val()) input.val("");
							clearBuffer(0, len);
						} else {
							// Invalid value, but we opt to show the value to the
							// user and allow them to correct their mistake.
							writeBuffer();
						}
					} else {
						writeBuffer();
						input.val(input.val().substring(0, lastMatch + 1));
					}
					return (partialPosition ? i : firstNonMaskPos);
				}

				input.data($.mask.dataName,function(){
					return $.map(buffer, function(c, i) {
						return tests[i]&&c!=getPlaceholder(i) ? c : null;
					}).join('');
				});


				input
					.one("unmask", function() {
						input
							.off(".mask")
							.removeData($.mask.dataName);
					})
					.on("focus.mask", function() {
	                    if (input.prop("readonly")){
	                        return;
	                    }

						clearTimeout(caretTimeoutId);
						var pos;

						focusText = input.val();

						pos = checkVal();

						caretTimeoutId = setTimeout(function(){
	                        if(input.get(0) !== document.activeElement){
	                            return;
	                        }
							writeBuffer();
							if (pos == mask.replace("?","").length) {
								input.caret(0, pos);
							} else {
								input.caret(pos);
							}
						}, 10);
					})
					.on("blur.mask", blurEvent)
					.on("keydown.mask", keydownEvent)
					.on("keypress.mask", keypressEvent)
					.on("input.mask paste.mask", function() {
	                    if (input.prop("readonly")){
	                        return;
	                    }

						setTimeout(function() {
							var pos=checkVal(true);
							input.caret(pos);
	                        tryFireCompleted();
						}, 0);
					});
	                if (chrome && android)
	                {
	                    input
	                        .off('input.mask')
	                        .on('input.mask', androidInputEvent);
	                }
					checkVal(); //Perform initial check for existing values
			});
		}
	});
	}));


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js!./index.scss");
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = require("!../../../node_modules/style-loader/addStyles.js")(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(module.hot) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js!./index.scss", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js!./index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	
	var $ = __webpack_require__(1);
	__webpack_require__(18);
	__webpack_require__(19);
	__webpack_require__(20);

	module.exports = function() {
	  function initjScrollPane() {
	    setTimeout(function() {
	      $('.jScrollPane:not(.jspScrollable)').each(function() {
	        var $this = $(this);

	        if ($this.height() > 0) {
	          $this.jScrollPane();
	        }
	      });
	    }, 100);
	  }

	  $(document).click(initjScrollPane);
	  initjScrollPane();
	};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

	/*!
	 * jQuery Mousewheel 3.1.12
	 *
	 * Copyright 2014 jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 */

	(function (factory) {
	    if ( typeof define === 'function' && define.amd ) {
	        // AMD. Register as an anonymous module.
	        define(['jquery'], factory);
	    } else if (typeof exports === 'object') {
	        // Node/CommonJS style for Browserify
	        module.exports = factory;
	    } else {
	        // Browser globals
	        factory(jQuery);
	    }
	}(function ($) {

	    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
	        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
	                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
	        slice  = Array.prototype.slice,
	        nullLowestDeltaTimeout, lowestDelta;

	    if ( $.event.fixHooks ) {
	        for ( var i = toFix.length; i; ) {
	            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
	        }
	    }

	    var special = $.event.special.mousewheel = {
	        version: '3.1.12',

	        setup: function() {
	            if ( this.addEventListener ) {
	                for ( var i = toBind.length; i; ) {
	                    this.addEventListener( toBind[--i], handler, false );
	                }
	            } else {
	                this.onmousewheel = handler;
	            }
	            // Store the line height and page height for this particular element
	            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
	            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
	        },

	        teardown: function() {
	            if ( this.removeEventListener ) {
	                for ( var i = toBind.length; i; ) {
	                    this.removeEventListener( toBind[--i], handler, false );
	                }
	            } else {
	                this.onmousewheel = null;
	            }
	            // Clean up the data we added to the element
	            $.removeData(this, 'mousewheel-line-height');
	            $.removeData(this, 'mousewheel-page-height');
	        },

	        getLineHeight: function(elem) {
	            var $elem = $(elem),
	                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
	            if (!$parent.length) {
	                $parent = $('body');
	            }
	            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
	        },

	        getPageHeight: function(elem) {
	            return $(elem).height();
	        },

	        settings: {
	            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
	            normalizeOffset: true  // calls getBoundingClientRect for each event
	        }
	    };

	    $.fn.extend({
	        mousewheel: function(fn) {
	            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
	        },

	        unmousewheel: function(fn) {
	            return this.unbind('mousewheel', fn);
	        }
	    });


	    function handler(event) {
	        var orgEvent   = event || window.event,
	            args       = slice.call(arguments, 1),
	            delta      = 0,
	            deltaX     = 0,
	            deltaY     = 0,
	            absDelta   = 0,
	            offsetX    = 0,
	            offsetY    = 0;
	        event = $.event.fix(orgEvent);
	        event.type = 'mousewheel';

	        // Old school scrollwheel delta
	        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
	        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
	        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
	        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

	        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
	        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
	            deltaX = deltaY * -1;
	            deltaY = 0;
	        }

	        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
	        delta = deltaY === 0 ? deltaX : deltaY;

	        // New school wheel delta (wheel event)
	        if ( 'deltaY' in orgEvent ) {
	            deltaY = orgEvent.deltaY * -1;
	            delta  = deltaY;
	        }
	        if ( 'deltaX' in orgEvent ) {
	            deltaX = orgEvent.deltaX;
	            if ( deltaY === 0 ) { delta  = deltaX * -1; }
	        }

	        // No change actually happened, no reason to go any further
	        if ( deltaY === 0 && deltaX === 0 ) { return; }

	        // Need to convert lines and pages to pixels if we aren't already in pixels
	        // There are three delta modes:
	        //   * deltaMode 0 is by pixels, nothing to do
	        //   * deltaMode 1 is by lines
	        //   * deltaMode 2 is by pages
	        if ( orgEvent.deltaMode === 1 ) {
	            var lineHeight = $.data(this, 'mousewheel-line-height');
	            delta  *= lineHeight;
	            deltaY *= lineHeight;
	            deltaX *= lineHeight;
	        } else if ( orgEvent.deltaMode === 2 ) {
	            var pageHeight = $.data(this, 'mousewheel-page-height');
	            delta  *= pageHeight;
	            deltaY *= pageHeight;
	            deltaX *= pageHeight;
	        }

	        // Store lowest absolute delta to normalize the delta values
	        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

	        if ( !lowestDelta || absDelta < lowestDelta ) {
	            lowestDelta = absDelta;

	            // Adjust older deltas if necessary
	            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
	                lowestDelta /= 40;
	            }
	        }

	        // Adjust older deltas if necessary
	        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
	            // Divide all the things by 40!
	            delta  /= 40;
	            deltaX /= 40;
	            deltaY /= 40;
	        }

	        // Get a whole, normalized value for the deltas
	        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
	        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
	        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

	        // Normalise offsetX and offsetY properties
	        if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
	            var boundingRect = this.getBoundingClientRect();
	            offsetX = event.clientX - boundingRect.left;
	            offsetY = event.clientY - boundingRect.top;
	        }

	        // Add information to the event object
	        event.deltaX = deltaX;
	        event.deltaY = deltaY;
	        event.deltaFactor = lowestDelta;
	        event.offsetX = offsetX;
	        event.offsetY = offsetY;
	        // Go ahead and set deltaMode to 0 since we converted to pixels
	        // Although this is a little odd since we overwrite the deltaX/Y
	        // properties with normalized deltas.
	        event.deltaMode = 0;

	        // Add event and delta to the front of the arguments
	        args.unshift(event, delta, deltaX, deltaY);

	        // Clearout lowestDelta after sometime to better
	        // handle multiple device types that give different
	        // a different lowestDelta
	        // Ex: trackpad = 3 and mouse wheel = 120
	        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
	        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

	        return ($.event.dispatch || $.event.handle).apply(this, args);
	    }

	    function nullLowestDelta() {
	        lowestDelta = null;
	    }

	    function shouldAdjustOldDeltas(orgEvent, absDelta) {
	        // If this is an older event and the delta is divisable by 120,
	        // then we are assuming that the browser is treating this as an
	        // older mouse wheel event and that we should divide the deltas
	        // by 40 to try and get a more usable deltaFactor.
	        // Side note, this actually impacts the reported scroll distance
	        // in older browsers and can cause scrolling to be slower than native.
	        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
	        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
	    }

	}));


/***/ }),
/* 19 */
/***/ (function(module, exports) {

	!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(jQuery||require("jquery")):e(jQuery)}(function(be){be.fn.jScrollPane=function(o){function s(w,e){var y,b,k,T,C,S,x,D,B,H,P,z,A,W,Y,M,X,L,R,t,E,I,F,V,q,O,G,N,K,Q,U,$,J,Z,_=this,r=!0,a=!0,l=!1,c=!1,o=w.clone(!1,!1).empty(),ee=!1,te=be.fn.mwheelIntent?"mwheelIntent.jsp":"mousewheel.jsp",oe=function(){0<y.resizeSensorDelay?setTimeout(function(){se(y)},y.resizeSensorDelay):se(y)};function se(e){var t,o,s,i,n,r,a,l,c,p,u,d,f,h,g,j,v=!1,m=!1;if(y=e,void 0===b)n=w.scrollTop(),r=w.scrollLeft(),w.css({overflow:"hidden",padding:0}),k=w.innerWidth()+J,T=w.innerHeight(),w.width(k),b=be('<div class="jspPane" />').css("padding",$).append(w.children()),C=be('<div class="jspContainer" />').css({width:k+"px",height:T+"px"}).append(b).appendTo(w);else{if(w.css("width",""),C.css({width:"auto",height:"auto"}),b.css("position","static"),a=w.innerWidth()+J,l=w.innerHeight(),b.css("position","absolute"),v=y.stickToBottom&&(20<(p=x-T)&&p-we()<10),m=y.stickToRight&&(20<(c=S-k)&&c-me()<10),i=a!==k||l!==T,k=a,T=l,C.css({width:k,height:T}),!i&&Z==S&&b.outerHeight()==x)return void w.width(k);Z=S,b.css("width",""),w.width(k),C.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()}b.css("overflow","auto"),S=e.contentWidth?e.contentWidth:b[0].scrollWidth,x=b[0].scrollHeight,b.css("overflow",""),D=S/k,H=1<(B=x/T)||y.alwaysShowVScroll,(P=1<D||y.alwaysShowHScroll)||H?(w.addClass("jspScrollable"),(t=y.maintainPosition&&(W||X))&&(o=me(),s=we()),H&&(C.append(be('<div class="jspVerticalBar" />').append(be('<div class="jspCap jspCapTop" />'),be('<div class="jspTrack" />').append(be('<div class="jspDrag" />').append(be('<div class="jspDragTop" />'),be('<div class="jspDragBottom" />'))),be('<div class="jspCap jspCapBottom" />'))),L=C.find(">.jspVerticalBar"),R=L.find(">.jspTrack"),z=R.find(">.jspDrag"),y.showArrows&&(F=be('<a class="jspArrow jspArrowUp" />').on("mousedown.jsp",le(0,-1)).on("click.jsp",ye),V=be('<a class="jspArrow jspArrowDown" />').on("mousedown.jsp",le(0,1)).on("click.jsp",ye),y.arrowScrollOnHover&&(F.on("mouseover.jsp",le(0,-1,F)),V.on("mouseover.jsp",le(0,1,V))),ae(R,y.verticalArrowPositions,F,V)),E=T,C.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function(){E-=be(this).outerHeight()}),z.on("mouseenter",function(){z.addClass("jspHover")}).on("mouseleave",function(){z.removeClass("jspHover")}).on("mousedown.jsp",function(e){be("html").on("dragstart.jsp selectstart.jsp",ye),z.addClass("jspActive");var t=e.pageY-z.position().top;return be("html").on("mousemove.jsp",function(e){ue(e.pageY-t,!1)}).on("mouseup.jsp mouseleave.jsp",pe),!1}),ne()),P&&(C.append(be('<div class="jspHorizontalBar" />').append(be('<div class="jspCap jspCapLeft" />'),be('<div class="jspTrack" />').append(be('<div class="jspDrag" />').append(be('<div class="jspDragLeft" />'),be('<div class="jspDragRight" />'))),be('<div class="jspCap jspCapRight" />'))),q=C.find(">.jspHorizontalBar"),O=q.find(">.jspTrack"),Y=O.find(">.jspDrag"),y.showArrows&&(K=be('<a class="jspArrow jspArrowLeft" />').on("mousedown.jsp",le(-1,0)).on("click.jsp",ye),Q=be('<a class="jspArrow jspArrowRight" />').on("mousedown.jsp",le(1,0)).on("click.jsp",ye),y.arrowScrollOnHover&&(K.on("mouseover.jsp",le(-1,0,K)),Q.on("mouseover.jsp",le(1,0,Q))),ae(O,y.horizontalArrowPositions,K,Q)),Y.on("mouseenter",function(){Y.addClass("jspHover")}).on("mouseleave",function(){Y.removeClass("jspHover")}).on("mousedown.jsp",function(e){be("html").on("dragstart.jsp selectstart.jsp",ye),Y.addClass("jspActive");var t=e.pageX-Y.position().left;return be("html").on("mousemove.jsp",function(e){fe(e.pageX-t,!1)}).on("mouseup.jsp mouseleave.jsp",pe),!1}),G=C.innerWidth(),re()),function(){if(P&&H){var e=O.outerHeight(),t=R.outerWidth();E-=e,be(q).find(">.jspCap:visible,>.jspArrow").each(function(){G+=be(this).outerWidth()}),G-=t,T-=t,k-=e,O.parent().append(be('<div class="jspCorner" />').css("width",e+"px")),ne(),re()}P&&b.width(C.outerWidth()-J+"px");x=b.outerHeight(),B=x/T,P&&((N=Math.ceil(1/D*G))>y.horizontalDragMaxWidth?N=y.horizontalDragMaxWidth:N<y.horizontalDragMinWidth&&(N=y.horizontalDragMinWidth),Y.css("width",N+"px"),M=G-N,he(X));H&&((I=Math.ceil(1/B*E))>y.verticalDragMaxHeight?I=y.verticalDragMaxHeight:I<y.verticalDragMinHeight&&(I=y.verticalDragMinHeight),z.css("height",I+"px"),A=E-I,de(W))}(),t&&(je(m?S-k:o,!1),ge(v?x-T:s,!1)),b.find(":input,a").off("focus.jsp").on("focus.jsp",function(e){ve(e.target,!1)}),C.off(te).on(te,function(e,t,o,s){X||(X=0),W||(W=0);var i=X,n=W,r=e.deltaFactor||y.mouseWheelSpeed;return _.scrollBy(o*r,-s*r,!1),i==X&&n==W}),j=!1,C.off("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").on("touchstart.jsp",function(e){var t=e.originalEvent.touches[0];u=me(),d=we(),f=t.pageX,h=t.pageY,j=!(g=!1)}).on("touchmove.jsp",function(e){if(j){var t=e.originalEvent.touches[0],o=X,s=W;return _.scrollTo(u+f-t.pageX,d+h-t.pageY),g=g||5<Math.abs(f-t.pageX)||5<Math.abs(h-t.pageY),o==X&&s==W}}).on("touchend.jsp",function(e){j=!1}).on("click.jsp-touchclick",function(e){if(g)return g=!1}),y.enableKeyboardNavigation&&function(){var s,i,n=[];P&&n.push(q[0]);H&&n.push(L[0]);b.on("focus.jsp",function(){w.focus()}),w.attr("tabindex",0).off("keydown.jsp keypress.jsp").on("keydown.jsp",function(e){if(e.target===this||n.length&&be(e.target).closest(n).length){var t=X,o=W;switch(e.keyCode){case 40:case 38:case 34:case 32:case 33:case 39:case 37:s=e.keyCode,r();break;case 35:ge(x-T),s=null;break;case 36:ge(0),s=null}return!(i=e.keyCode==s&&t!=X||o!=W)}}).on("keypress.jsp",function(e){if(e.keyCode==s&&r(),e.target===this||n.length&&be(e.target).closest(n).length)return!i}),y.hideFocus?(w.css("outline","none"),"hideFocus"in C[0]&&w.attr("hideFocus",!0)):(w.css("outline",""),"hideFocus"in C[0]&&w.attr("hideFocus",!1));function r(){var e=X,t=W;switch(s){case 40:_.scrollByY(y.keyboardSpeed,!1);break;case 38:_.scrollByY(-y.keyboardSpeed,!1);break;case 34:case 32:_.scrollByY(T*y.scrollPagePercent,!1);break;case 33:_.scrollByY(-T*y.scrollPagePercent,!1);break;case 39:_.scrollByX(y.keyboardSpeed,!1);break;case 37:_.scrollByX(-y.keyboardSpeed,!1)}return i=e!=X||t!=W}}(),y.clickOnTrack&&function(){ce(),H&&R.on("mousedown.jsp",function(i){if(void 0===i.originalTarget||i.originalTarget==i.currentTarget){var n,r=be(this),e=r.offset(),a=i.pageY-e.top-W,l=!0,c=function(){var e=r.offset(),t=i.pageY-e.top-I/2,o=T*y.scrollPagePercent,s=A*o/(x-T);if(a<0)t<W-s?_.scrollByY(-o):ue(t);else{if(!(0<a))return void p();W+s<t?_.scrollByY(o):ue(t)}n=setTimeout(c,l?y.initialDelay:y.trackClickRepeatFreq),l=!1},p=function(){n&&clearTimeout(n),n=null,be(document).off("mouseup.jsp",p)};return c(),be(document).on("mouseup.jsp",p),!1}});P&&O.on("mousedown.jsp",function(i){if(void 0===i.originalTarget||i.originalTarget==i.currentTarget){var n,r=be(this),e=r.offset(),a=i.pageX-e.left-X,l=!0,c=function(){var e=r.offset(),t=i.pageX-e.left-N/2,o=k*y.scrollPagePercent,s=M*o/(S-k);if(a<0)t<X-s?_.scrollByX(-o):fe(t);else{if(!(0<a))return void p();X+s<t?_.scrollByX(o):fe(t)}n=setTimeout(c,l?y.initialDelay:y.trackClickRepeatFreq),l=!1},p=function(){n&&clearTimeout(n),n=null,be(document).off("mouseup.jsp",p)};return c(),be(document).on("mouseup.jsp",p),!1}})}(),function(){if(location.hash&&1<location.hash.length){var e,t,o=escape(location.hash.substr(1));try{e=be("#"+o+', a[name="'+o+'"]')}catch(e){return}e.length&&b.find(o)&&(0===C.scrollTop()?t=setInterval(function(){0<C.scrollTop()&&(ve(e,!0),be(document).scrollTop(C.position().top),clearInterval(t))},50):(ve(e,!0),be(document).scrollTop(C.position().top)))}}(),y.hijackInternalLinks&&function(){if(be(document.body).data("jspHijack"))return;be(document.body).data("jspHijack",!0),be(document.body).delegate('a[href*="#"]',"click",function(e){var t,o,s,i,n,r=this.href.substr(0,this.href.indexOf("#")),a=location.href;if(-1!==location.href.indexOf("#")&&(a=location.href.substr(0,location.href.indexOf("#"))),r===a){t=escape(this.href.substr(this.href.indexOf("#")+1));try{o=be("#"+t+', a[name="'+t+'"]')}catch(e){return}o.length&&(s=o.closest(".jspScrollable"),s.data("jsp").scrollToElement(o,!0),s[0].scrollIntoView&&(i=be(window).scrollTop(),((n=o.offset().top)<i||n>i+be(window).height())&&s[0].scrollIntoView()),e.preventDefault())}})}()):(w.removeClass("jspScrollable"),b.css({top:0,left:0,width:C.width()-J}),C.off(te),b.find(":input,a").off("focus.jsp"),w.attr("tabindex","-1").removeAttr("tabindex").off("keydown.jsp keypress.jsp"),b.off(".jsp"),ce()),y.resizeSensor||!y.autoReinitialise||U?y.resizeSensor||y.autoReinitialise||!U||clearInterval(U):U=setInterval(function(){se(y)},y.autoReinitialiseDelay),y.resizeSensor&&!ee&&(ie(b,oe),ie(w,oe),ie(w.parent(),oe),window.addEventListener("resize",oe),ee=!0),n&&w.scrollTop(0)&&ge(n,!1),r&&w.scrollLeft(0)&&je(r,!1),w.trigger("jsp-initialised",[P||H])}function ie(e,t){var o,s,i=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div"),l=document.createElement("div");i.style.cssText="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: scroll; z-index: -1; visibility: hidden;",n.style.cssText="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: scroll; z-index: -1; visibility: hidden;",a.style.cssText="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: scroll; z-index: -1; visibility: hidden;",r.style.cssText="position: absolute; left: 0; top: 0;",l.style.cssText="position: absolute; left: 0; top: 0; width: 200%; height: 200%;";var c=function(){r.style.width=n.offsetWidth+10+"px",r.style.height=n.offsetHeight+10+"px",n.scrollLeft=n.scrollWidth,n.scrollTop=n.scrollHeight,a.scrollLeft=a.scrollWidth,a.scrollTop=a.scrollHeight,o=e.width(),s=e.height()};n.addEventListener("scroll",function(){(e.width()>o||e.height()>s)&&t.apply(this,[]),c()}.bind(this)),a.addEventListener("scroll",function(){(e.width()<o||e.height()<s)&&t.apply(this,[]),c()}.bind(this)),n.appendChild(r),a.appendChild(l),i.appendChild(n),i.appendChild(a),e.append(i),"static"===window.getComputedStyle(e[0],null).getPropertyValue("position")&&(e[0].style.position="relative"),c()}function ne(){R.height(E+"px"),W=0,t=y.verticalGutter+R.outerWidth(),b.width(k-t-J);try{0===L.position().left&&b.css("margin-left",t+"px")}catch(e){}}function re(){C.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function(){G-=be(this).outerWidth()}),O.width(G+"px"),X=0}function ae(e,t,o,s){var i,n="before",r="after";"os"==t&&(t=/Mac/.test(navigator.platform)?"after":"split"),t==n?r=t:t==r&&(n=t,i=o,o=s,s=i),e[n](o)[r](s)}function le(e,t,o){return function(){return function(e,t,o,s){o=be(o).addClass("jspActive");var i,n,r=!0,a=function(){0!==e&&_.scrollByX(e*y.arrowButtonSpeed),0!==t&&_.scrollByY(t*y.arrowButtonSpeed),n=setTimeout(a,r?y.initialDelay:y.arrowRepeatFreq),r=!1};a(),i=s?"mouseout.jsp":"mouseup.jsp",(s=s||be("html")).on(i,function(){o.removeClass("jspActive"),n&&clearTimeout(n),n=null,s.off(i)})}(e,t,this,o),this.blur(),!1}}function ce(){O&&O.off("mousedown.jsp"),R&&R.off("mousedown.jsp")}function pe(){be("html").off("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"),z&&z.removeClass("jspActive"),Y&&Y.removeClass("jspActive")}function ue(e,t){if(H){e<0?e=0:A<e&&(e=A);var o=new be.Event("jsp-will-scroll-y");if(w.trigger(o,[e]),!o.isDefaultPrevented()){var s=e||0,i=0===s,n=s==A,r=-(e/A)*(x-T);void 0===t&&(t=y.animateScroll),t?_.animate(z,"top",e,de,function(){w.trigger("jsp-user-scroll-y",[-r,i,n])}):(z.css("top",e),de(e),w.trigger("jsp-user-scroll-y",[-r,i,n]))}}}function de(e){void 0===e&&(e=z.position().top),C.scrollTop(0);var t,o,s=0===(W=e||0),i=W==A,n=-(e/A)*(x-T);r==s&&l==i||(r=s,l=i,w.trigger("jsp-arrow-change",[r,l,a,c])),t=s,o=i,y.showArrows&&(F[t?"addClass":"removeClass"]("jspDisabled"),V[o?"addClass":"removeClass"]("jspDisabled")),b.css("top",n),w.trigger("jsp-scroll-y",[-n,s,i]).trigger("scroll")}function fe(e,t){if(P){e<0?e=0:M<e&&(e=M);var o=new be.Event("jsp-will-scroll-x");if(w.trigger(o,[e]),!o.isDefaultPrevented()){var s=e||0,i=0===s,n=s==M,r=-(e/M)*(S-k);void 0===t&&(t=y.animateScroll),t?_.animate(Y,"left",e,he,function(){w.trigger("jsp-user-scroll-x",[-r,i,n])}):(Y.css("left",e),he(e),w.trigger("jsp-user-scroll-x",[-r,i,n]))}}}function he(e){void 0===e&&(e=Y.position().left),C.scrollTop(0);var t,o,s=0===(X=e||0),i=X==M,n=-(e/M)*(S-k);a==s&&c==i||(a=s,c=i,w.trigger("jsp-arrow-change",[r,l,a,c])),t=s,o=i,y.showArrows&&(K[t?"addClass":"removeClass"]("jspDisabled"),Q[o?"addClass":"removeClass"]("jspDisabled")),b.css("left",n),w.trigger("jsp-scroll-x",[-n,s,i]).trigger("scroll")}function ge(e,t){ue(e/(x-T)*A,t)}function je(e,t){fe(e/(S-k)*M,t)}function ve(e,t,o){var s,i,n,r,a,l,c,p,u,d=0,f=0;try{s=be(e)}catch(e){return}for(i=s.outerHeight(),n=s.outerWidth(),C.scrollTop(0),C.scrollLeft(0);!s.is(".jspPane");)if(d+=s.position().top,f+=s.position().left,s=s.offsetParent(),/^body|html$/i.test(s[0].nodeName))return;l=(r=we())+T,d<r||t?p=d-y.horizontalGutter:l<d+i&&(p=d-T+i+y.horizontalGutter),isNaN(p)||ge(p,o),c=(a=me())+k,f<a||t?u=f-y.horizontalGutter:c<f+n&&(u=f-k+n+y.horizontalGutter),isNaN(u)||je(u,o)}function me(){return-b.position().left}function we(){return-b.position().top}function ye(){return!1}"border-box"===w.css("box-sizing")?J=$=0:($=w.css("paddingTop")+" "+w.css("paddingRight")+" "+w.css("paddingBottom")+" "+w.css("paddingLeft"),J=(parseInt(w.css("paddingLeft"),10)||0)+(parseInt(w.css("paddingRight"),10)||0)),be.extend(_,{reinitialise:function(e){se(e=be.extend({},y,e))},scrollToElement:function(e,t,o){ve(e,t,o)},scrollTo:function(e,t,o){je(e,o),ge(t,o)},scrollToX:function(e,t){je(e,t)},scrollToY:function(e,t){ge(e,t)},scrollToPercentX:function(e,t){je(e*(S-k),t)},scrollToPercentY:function(e,t){ge(e*(x-T),t)},scrollBy:function(e,t,o){_.scrollByX(e,o),_.scrollByY(t,o)},scrollByX:function(e,t){fe((me()+Math[e<0?"floor":"ceil"](e))/(S-k)*M,t)},scrollByY:function(e,t){ue((we()+Math[e<0?"floor":"ceil"](e))/(x-T)*A,t)},positionDragX:function(e,t){fe(e,t)},positionDragY:function(e,t){ue(e,t)},animate:function(e,t,o,s,i){var n={};n[t]=o,e.animate(n,{duration:y.animateDuration,easing:y.animateEase,queue:!1,step:s,complete:i})},getContentPositionX:function(){return me()},getContentPositionY:function(){return we()},getContentWidth:function(){return S},getContentHeight:function(){return x},getPercentScrolledX:function(){return me()/(S-k)},getPercentScrolledY:function(){return we()/(x-T)},getIsScrollableH:function(){return P},getIsScrollableV:function(){return H},getContentPane:function(){return b},scrollToBottom:function(e){ue(A,e)},hijackInternalLinks:be.noop,destroy:function(){var e,t;e=we(),t=me(),w.removeClass("jspScrollable").off(".jsp"),b.off(".jsp"),w.replaceWith(o.append(b.children())),o.scrollTop(e),o.scrollLeft(t),U&&clearInterval(U)}}),se(e)}return o=be.extend({},be.fn.jScrollPane.defaults,o),be.each(["arrowButtonSpeed","trackClickSpeed","keyboardSpeed"],function(){o[this]=o[this]||o.speed}),this.each(function(){var e=be(this),t=e.data("jsp");t?t.reinitialise(o):(be("script",e).filter('[type="text/javascript"],:not([type])').remove(),t=new s(e,o),e.data("jsp",t))})},be.fn.jScrollPane.defaults={showArrows:!1,maintainPosition:!0,stickToBottom:!1,stickToRight:!1,clickOnTrack:!0,autoReinitialise:!1,autoReinitialiseDelay:500,verticalDragMinHeight:0,verticalDragMaxHeight:99999,horizontalDragMinWidth:0,horizontalDragMaxWidth:99999,contentWidth:void 0,animateScroll:!1,animateDuration:300,animateEase:"linear",hijackInternalLinks:!1,verticalGutter:4,horizontalGutter:4,mouseWheelSpeed:3,arrowButtonSpeed:0,arrowRepeatFreq:50,arrowScrollOnHover:!1,trackClickSpeed:0,trackClickRepeatFreq:70,verticalArrowPositions:"split",horizontalArrowPositions:"split",enableKeyboardNavigation:!0,hideFocus:!1,keyboardSpeed:0,initialDelay:300,speed:30,scrollPagePercent:.8,alwaysShowVScroll:!1,alwaysShowHScroll:!1,resizeSensor:!1,resizeSensorDelay:0}});

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js!./index.scss");
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = require("!../../../node_modules/style-loader/addStyles.js")(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(module.hot) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js!./index.scss", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js!./index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var $ = __webpack_require__(1);

	__webpack_require__(22);

	module.exports = function() {
	  /**
	   * Copyright 2010 Tim Down.
	   *
	   * Licensed under the Apache License, Version 2.0 (the "License");
	   * you may not use this file except in compliance with the License.
	   * You may obtain a copy of the License at
	   *
	   *      http://www.apache.org/licenses/LICENSE-2.0
	   *
	   * Unless required by applicable law or agreed to in writing, software
	   * distributed under the License is distributed on an "AS IS" BASIS,
	   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	   * See the License for the specific language governing permissions and
	   * limitations under the License.
	   */

	  /**
	   * jshashtable
	   *
	   * jshashtable is a JavaScript implementation of a hash table. It creates a single constructor function called Hashtable
	   * in the global scope.
	   *
	   * Author: Tim Down <tim@timdown.co.uk>
	   * Version: 2.1
	   * Build date: 21 March 2010
	   * Website: http://www.timdown.co.uk/jshashtable
	   */

	  var Hashtable = (function() {
	    var FUNCTION = 'function';

	    var arrayRemoveAt = (typeof Array.prototype.splice == FUNCTION) ?
	        function(arr, idx) {
	          arr.splice(idx, 1);
	        } :

	        function(arr, idx) {
	          var itemsAfterDeleted, i, len;
	          if (idx === arr.length - 1) {
	            arr.length = idx;
	          } else {
	            itemsAfterDeleted = arr.slice(idx + 1);
	            arr.length = idx;
	            for (i = 0, len = itemsAfterDeleted.length; i < len; ++i) {
	              arr[idx + i] = itemsAfterDeleted[i];
	            }
	          }
	        };

	    function hashObject(obj) {
	      var hashCode;
	      if (typeof obj == 'string') {
	        return obj;
	      } else if (typeof obj.hashCode == FUNCTION) {
	        // Check the hashCode method really has returned a string
	        hashCode = obj.hashCode();
	        return (typeof hashCode == 'string') ? hashCode : hashObject(hashCode);
	      } else if (typeof obj.toString == FUNCTION) {
	        return obj.toString();
	      } else {
	        try {
	          return String(obj);
	        } catch (ex) {
	          // For host objects (such as ActiveObjects in IE) that have no toString() method and throw an error when
	          // passed to String()
	          return Object.prototype.toString.call(obj);
	        }
	      }
	    }

	    function equals_fixedValueHasEquals(fixedValue, variableValue) {
	      return fixedValue.equals(variableValue);
	    }

	    function equals_fixedValueNoEquals(fixedValue, variableValue) {
	      return (typeof variableValue.equals == FUNCTION) ?
	          variableValue.equals(fixedValue) : (fixedValue === variableValue);
	    }

	    function createKeyValCheck(kvStr) {
	      return function(kv) {
	        if (kv === null) {
	          throw new Error('null is not a valid ' + kvStr);
	        } else if (typeof kv == 'undefined') {
	          throw new Error(kvStr + ' must not be undefined');
	        }
	      };
	    }

	    var checkKey = createKeyValCheck('key'), checkValue = createKeyValCheck('value');

	    /*----------------------------------------------------------------------------------------------------------------*/

	    function Bucket(hash, firstKey, firstValue, equalityFunction) {
	      this[0] = hash;
	      this.entries = [];
	      this.addEntry(firstKey, firstValue);

	      if (equalityFunction !== null) {
	        this.getEqualityFunction = function() {
	          return equalityFunction;
	        };
	      }
	    }

	    var EXISTENCE = 0, ENTRY = 1, ENTRY_INDEX_AND_VALUE = 2;

	    function createBucketSearcher(mode) {
	      return function(key) {
	        var i = this.entries.length, entry, equals = this.getEqualityFunction(key);
	        while (i--) {
	          entry = this.entries[i];
	          if ( equals(key, entry[0]) ) {
	            switch (mode) {
	              case EXISTENCE:
	                return true;
	              case ENTRY:
	                return entry;
	              case ENTRY_INDEX_AND_VALUE:
	                return [ i, entry[1] ];
	            }
	          }
	        }
	        return false;
	      };
	    }

	    function createBucketLister(entryProperty) {
	      return function(aggregatedArr) {
	        var startIndex = aggregatedArr.length;
	        for (var i = 0, len = this.entries.length; i < len; ++i) {
	          aggregatedArr[startIndex + i] = this.entries[i][entryProperty];
	        }
	      };
	    }

	    Bucket.prototype = {
	      getEqualityFunction: function(searchValue) {
	        return (typeof searchValue.equals == FUNCTION) ? equals_fixedValueHasEquals : equals_fixedValueNoEquals;
	      },

	      getEntryForKey: createBucketSearcher(ENTRY),

	      getEntryAndIndexForKey: createBucketSearcher(ENTRY_INDEX_AND_VALUE),

	      removeEntryForKey: function(key) {
	        var result = this.getEntryAndIndexForKey(key);
	        if (result) {
	          arrayRemoveAt(this.entries, result[0]);
	          return result[1];
	        }
	        return null;
	      },

	      addEntry: function(key, value) {
	        this.entries[this.entries.length] = [key, value];
	      },

	      keys: createBucketLister(0),

	      values: createBucketLister(1),

	      getEntries: function(entries) {
	        var startIndex = entries.length;
	        for (var i = 0, len = this.entries.length; i < len; ++i) {
	          // Clone the entry stored in the bucket before adding to array
	          entries[startIndex + i] = this.entries[i].slice(0);
	        }
	      },

	      containsKey: createBucketSearcher(EXISTENCE),

	      containsValue: function(value) {
	        var i = this.entries.length;
	        while (i--) {
	          if ( value === this.entries[i][1] ) {
	            return true;
	          }
	        }
	        return false;
	      }
	    };

	    /*----------------------------------------------------------------------------------------------------------------*/

	    // Supporting functions for searching hashtable buckets

	    function searchBuckets(buckets, hash) {
	      var i = buckets.length, bucket;
	      while (i--) {
	        bucket = buckets[i];
	        if (hash === bucket[0]) {
	          return i;
	        }
	      }
	      return null;
	    }

	    function getBucketForHash(bucketsByHash, hash) {
	      var bucket = bucketsByHash[hash];

	      // Check that this is a genuine bucket and not something inherited from the bucketsByHash's prototype
	      return ( bucket && (bucket instanceof Bucket) ) ? bucket : null;
	    }

	    /*----------------------------------------------------------------------------------------------------------------*/

	    function Hashtable(hashingFunctionParam, equalityFunctionParam) {
	      var that = this;
	      var buckets = [];
	      var bucketsByHash = {};

	      var hashingFunction = (typeof hashingFunctionParam == FUNCTION) ? hashingFunctionParam : hashObject;
	      var equalityFunction = (typeof equalityFunctionParam == FUNCTION) ? equalityFunctionParam : null;

	      this.put = function(key, value) {
	        checkKey(key);
	        checkValue(value);
	        var hash = hashingFunction(key), bucket, bucketEntry, oldValue = null;

	        // Check if a bucket exists for the bucket key
	        bucket = getBucketForHash(bucketsByHash, hash);
	        if (bucket) {
	          // Check this bucket to see if it already contains this key
	          bucketEntry = bucket.getEntryForKey(key);
	          if (bucketEntry) {
	            // This bucket entry is the current mapping of key to value, so replace old value and we're done.
	            oldValue = bucketEntry[1];
	            bucketEntry[1] = value;
	          } else {
	            // The bucket does not contain an entry for this key, so add one
	            bucket.addEntry(key, value);
	          }
	        } else {
	          // No bucket exists for the key, so create one and put our key/value mapping in
	          bucket = new Bucket(hash, key, value, equalityFunction);
	          buckets[buckets.length] = bucket;
	          bucketsByHash[hash] = bucket;
	        }
	        return oldValue;
	      };

	      this.get = function(key) {
	        checkKey(key);

	        var hash = hashingFunction(key);

	        // Check if a bucket exists for the bucket key
	        var bucket = getBucketForHash(bucketsByHash, hash);
	        if (bucket) {
	          // Check this bucket to see if it contains this key
	          var bucketEntry = bucket.getEntryForKey(key);
	          if (bucketEntry) {
	            // This bucket entry is the current mapping of key to value, so return the value.
	            return bucketEntry[1];
	          }
	        }
	        return null;
	      };

	      this.containsKey = function(key) {
	        checkKey(key);
	        var bucketKey = hashingFunction(key);

	        // Check if a bucket exists for the bucket key
	        var bucket = getBucketForHash(bucketsByHash, bucketKey);

	        return bucket ? bucket.containsKey(key) : false;
	      };

	      this.containsValue = function(value) {
	        checkValue(value);
	        var i = buckets.length;
	        while (i--) {
	          if (buckets[i].containsValue(value)) {
	            return true;
	          }
	        }
	        return false;
	      };

	      this.clear = function() {
	        buckets.length = 0;
	        bucketsByHash = {};
	      };

	      this.isEmpty = function() {
	        return !buckets.length;
	      };

	      var createBucketAggregator = function(bucketFuncName) {
	        return function() {
	          var aggregated = [], i = buckets.length;
	          while (i--) {
	            buckets[i][bucketFuncName](aggregated);
	          }
	          return aggregated;
	        };
	      };

	      this.keys = createBucketAggregator('keys');
	      this.values = createBucketAggregator('values');
	      this.entries = createBucketAggregator('getEntries');

	      this.remove = function(key) {
	        checkKey(key);

	        var hash = hashingFunction(key), bucketIndex, oldValue = null;

	        // Check if a bucket exists for the bucket key
	        var bucket = getBucketForHash(bucketsByHash, hash);

	        if (bucket) {
	          // Remove entry from this bucket for this key
	          oldValue = bucket.removeEntryForKey(key);
	          if (oldValue !== null) {
	            // Entry was removed, so check if bucket is empty
	            if (!bucket.entries.length) {
	              // Bucket is empty, so remove it from the bucket collections
	              bucketIndex = searchBuckets(buckets, hash);
	              arrayRemoveAt(buckets, bucketIndex);
	              delete bucketsByHash[hash];
	            }
	          }
	        }
	        return oldValue;
	      };

	      this.size = function() {
	        var total = 0, i = buckets.length;
	        while (i--) {
	          total += buckets[i].entries.length;
	        }
	        return total;
	      };

	      this.each = function(callback) {
	        var entries = that.entries(), i = entries.length, entry;
	        while (i--) {
	          entry = entries[i];
	          callback(entry[0], entry[1]);
	        }
	      };

	      this.putAll = function(hashtable, conflictCallback) {
	        var entries = hashtable.entries();
	        var entry, key, value, thisValue, i = entries.length;
	        var hasConflictCallback = (typeof conflictCallback == FUNCTION);
	        while (i--) {
	          entry = entries[i];
	          key = entry[0];
	          value = entry[1];

	          // Check for a conflict. The default behaviour is to overwrite the value for an existing key
	          if ( hasConflictCallback && (thisValue = that.get(key)) ) {
	            value = conflictCallback(key, thisValue, value);
	          }
	          that.put(key, value);
	        }
	      };

	      this.clone = function() {
	        var clone = new Hashtable(hashingFunctionParam, equalityFunctionParam);
	        clone.putAll(that);
	        return clone;
	      };
	    }

	    return Hashtable;
	  })();

	  $.baseClass = function(obj) {
	    obj = $(obj);
	    return obj.get(0).className.match(/([^ ]+)/)[1];
	  };

	  $.fn.addDependClass = function(className, delimiter) {
	    var options = {
	      delimiter: delimiter ? delimiter : '-'
	    };
	    return this.each(function() {
	      var baseClass = $.baseClass(this);
	      if (baseClass)
	        $(this).addClass(baseClass + options.delimiter + className);
	    });
	  };

	  $.fn.removeDependClass = function(className, delimiter) {
	    var options = {
	      delimiter: delimiter ? delimiter : '-'
	    };
	    return this.each(function() {
	      var baseClass = $.baseClass(this);
	      if (baseClass)
	        $(this).removeClass(baseClass + options.delimiter + className);
	    });
	  };

	  $.fn.toggleDependClass = function(className, delimiter) {
	    var options = {
	      delimiter: delimiter ? delimiter : '-'
	    };
	    return this.each(function() {
	      var baseClass = $.baseClass(this);
	      if (baseClass)
	        if ($(this).is('.' + baseClass + options.delimiter + className))
	          $(this).removeClass(baseClass + options.delimiter + className);
	        else
	                    $(this).addClass(baseClass + options.delimiter + className);
	    });
	  };


	  function Draggable() {
	    this._init.apply( this, arguments );
	  }

	  Draggable.prototype.oninit = function() {

	  };

	  Draggable.prototype.events = function() {

	  };

	  Draggable.prototype.onmousedown = function() {
	    this.ptr.css({ position: 'absolute' });
	  };

	  Draggable.prototype.onmousemove = function( evt, x, y ) {
	    this.ptr.css({ left: x, top: y });
	  };

	  Draggable.prototype.onmouseup = function() {

	  };

	  Draggable.prototype.isDefault = {
	    drag: false,
	    clicked: false,
	    toclick: true,
	    mouseup: false
	  };

	  Draggable.prototype._init = function() {
	    if ( arguments.length > 0 ) {
	      this.ptr = $(arguments[0]);
	      this.outer = $('.draggable-outer');

	      this.is = {};
	      $.extend( this.is, this.isDefault );

	      var _offset = this.ptr.offset();
	      this.d = {
	        left: _offset.left,
	        top: _offset.top,
	        width: this.ptr.width(),
	        height: this.ptr.height()
	      };

	      this.oninit.apply( this, arguments );

	      this._events();
	    }
	  };

	  Draggable.prototype._getPageCoords = function( event ) {
	    if ( event.targetTouches && event.targetTouches[0] ) {
	      return { x: event.targetTouches[0].pageX, y: event.targetTouches[0].pageY };
	    } else
	            return { x: event.pageX, y: event.pageY };
	  };

	  Draggable.prototype._bindEvent = function( ptr, eventType, handler ) {
	    var self = this;

	    if ( this.supportTouches_ )
	      ptr.get(0).addEventListener( this.events_[ eventType ], handler, false );

	    else
	            ptr.bind( this.events_[ eventType ], handler );
	  };

	  Draggable.prototype._events = function() {
	    var self = this;

	    this.supportTouches_ = 'ontouchend' in document;
	    this.events_ = {
	      'click': this.supportTouches_ ? 'touchstart' : 'click',
	      'down': this.supportTouches_ ? 'touchstart' : 'mousedown',
	      'move': this.supportTouches_ ? 'touchmove' : 'mousemove',
	      'up': this.supportTouches_ ? 'touchend' : 'mouseup'
	    };

	    this._bindEvent( $( document ), 'move', function( event ) {
	      if ( self.is.drag ) {
	        event.stopPropagation();
	        event.preventDefault();
	        self._mousemove( event );
	      }
	    });
	    this._bindEvent( $( document ), 'down', function( event ) {
	      if ( self.is.drag ) {
	        event.stopPropagation();
	        event.preventDefault();
	      }
	    });
	    this._bindEvent( $( document ), 'up', function( event ) {
	      self._mouseup( event );
	    });

	    this._bindEvent( this.ptr, 'down', function( event ) {
	      self._mousedown( event );
	      return false;
	    });
	    this._bindEvent( this.ptr, 'up', function( event ) {
	      self._mouseup( event );
	    });

	    this.ptr.find('a')
	            .click(function() {
	              self.is.clicked = true;

	              if ( !self.is.toclick ) {
	                self.is.toclick = true;
	                return false;
	              }
	            })
	            .mousedown(function( event ) {
	              self._mousedown( event );
	              return false;
	            });

	    this.events();
	  };

	  Draggable.prototype._mousedown = function( evt ) {
	    this.is.drag = true;
	    this.is.clicked = false;
	    this.is.mouseup = false;

	    var _offset = this.ptr.offset();
	    var coords = this._getPageCoords( evt );
	    this.cx = coords.x - _offset.left;
	    this.cy = coords.y - _offset.top;

	    $.extend(this.d, {
	      left: _offset.left,
	      top: _offset.top,
	      width: this.ptr.width(),
	      height: this.ptr.height()
	    });

	    if ( this.outer && this.outer.get(0) ) {
	      this.outer.css({ height: Math.max(this.outer.height(), $(document.body).height()), overflow: 'hidden' });
	    }

	    this.onmousedown( evt );
	  };

	  Draggable.prototype._mousemove = function( evt ) {
	    this.is.toclick = false;
	    var coords = this._getPageCoords( evt );
	    this.onmousemove( evt, coords.x - this.cx, coords.y - this.cy );
	  };

	  Draggable.prototype._mouseup = function( evt ) {
	    var oThis = this;

	    if ( this.is.drag ) {
	      this.is.drag = false;

	      if ( this.outer && this.outer.get(0) ) {
	        if ( $.browser.mozilla ) {
	          this.outer.css({ overflow: 'hidden' });
	        } else {
	          this.outer.css({ overflow: 'visible' });
	        }

	        if ( $.browser.msie && $.browser.version == '6.0' ) {
	          this.outer.css({ height: '100%' });
	        } else {
	          this.outer.css({ height: 'auto' });
	        }
	      }

	      this.onmouseup( evt );
	    }
	  };

	  window.Draggable = Draggable;

	  var cache = {};

	  var tmpl = function tmpl(str, data) {
	        // Figure out if we're getting a template, or if we need to
	        // load the template - and be sure to cache the result.
	    var fn = !/\W/.test(str) ?
	            cache[str] = cache[str] ||
	                tmpl(document.getElementById(str).innerHTML) :

	            // Generate a reusable function that will serve as a template
	            // generator (and which will be cached).
	            new Function('obj',
	                'var p=[],print=function(){p.push.apply(p,arguments);};' +

	                // Introduce the data as local variables using with(){}
	                "with(obj){p.push('" +

	                // Convert the template into pure JavaScript
	                str
	                    .replace(/[\r\t\n]/g, ' ')
	                    .split('<%').join('\t')
	                    .replace(/((^|%>)[^\t]*)'/g, '$1\r')
	                    .replace(/\t=(.*?)%>/g, "',$1,'")
	                    .split('\t').join("');")
	                    .split('%>').join("p.push('")
	                    .split('\r').join("\\'")
	                + "');}return p.join('');");

	        // Provide some basic currying to the user
	    return data ? fn(data) : fn;
	  };


	    /**
	     * jquery.slider - Slider ui control in jQuery
	     *
	     * Written by
	     * Egor Khmelev (hmelyoff@gmail.com)
	     *
	     * Licensed under the MIT (MIT-LICENSE.txt).
	     *
	     * @author Egor Khmelev
	     * @version 1.1.0-RELEASE ($Id$)
	     *
	     * Dependencies
	     *
	     * jQuery (http://jquery.com)
	     * jquery.numberformatter (http://code.google.com/p/jquery-numberformatter/)
	     * tmpl (http://ejohn.org/blog/javascript-micro-templating/)
	     * jquery.dependClass
	     * draggable
	     *
	     **/

	  function isArray(value) {
	    if (typeof value == 'undefined') return false;

	    if (value instanceof Array || (!(value instanceof Object) &&
	                (Object.prototype.toString.call((value)) == '[object Array]') ||
	                typeof value.length == 'number' &&
	                typeof value.splice != 'undefined' &&
	                typeof value.propertyIsEnumerable != 'undefined' && !value.propertyIsEnumerable('splice')
	            )) {
	      return true;
	    }

	    return false;
	  }

	  $.slider = function(node, settings) {
	    var jNode = $(node);
	    if (!jNode.data('jslider'))
	      jNode.data('jslider', new jSlider(node, settings));

	    return jNode.data('jslider');
	  };

	  $.fn.slider = function(action, opt_value) {
	    var returnValue, args = arguments;

	    function isDef(val) {
	      return val !== undefined;
	    }

	    function isDefAndNotNull(val) {
	      return val != null;
	    }

	    this.each(function() {
	      var self = $.slider(this, action);

	            // do actions
	      if (typeof action == 'string') {
	        switch (action) {
	          case 'value':
	            if (isDef(args[1]) && isDef(args[2])) {
	              var pointers = self.getPointers();
	              if (isDefAndNotNull(pointers[0]) && isDefAndNotNull(args[1])) {
	                pointers[0].set(args[1]);
	                pointers[0].setIndexOver();
	              }

	              if (isDefAndNotNull(pointers[1]) && isDefAndNotNull(args[2])) {
	                pointers[1].set(args[2]);
	                pointers[1].setIndexOver();
	              }
	            }

	            else if (isDef(args[1])) {
	              var pointers = self.getPointers();
	              if (isDefAndNotNull(pointers[0]) && isDefAndNotNull(args[1])) {
	                pointers[0].set(args[1]);
	                pointers[0].setIndexOver();
	              }
	            }

	                        else
	                            returnValue = self.getValue();

	            break;

	          case 'prc':
	            if (isDef(args[1]) && isDef(args[2])) {
	              var pointers = self.getPointers();
	              if (isDefAndNotNull(pointers[0]) && isDefAndNotNull(args[1])) {
	                pointers[0]._set(args[1]);
	                pointers[0].setIndexOver();
	              }

	              if (isDefAndNotNull(pointers[1]) && isDefAndNotNull(args[2])) {
	                pointers[1]._set(args[2]);
	                pointers[1].setIndexOver();
	              }
	            }

	            else if (isDef(args[1])) {
	              var pointers = self.getPointers();
	              if (isDefAndNotNull(pointers[0]) && isDefAndNotNull(args[1])) {
	                pointers[0]._set(args[1]);
	                pointers[0].setIndexOver();
	              }
	            }

	                        else
	                            returnValue = self.getPrcValue();

	            break;

	          case 'calculatedValue':
	            var value = self.getValue().split(';');
	            returnValue = '';
	            for (var i = 0; i < value.length; i++) {
	              returnValue += (i > 0 ? ';' : '') + self.nice(value[i]);
	            }

	            break;

	          case 'skin':
	            self.setSkin(args[1]);

	            break;
	        }
	      }

	            // return actual object
	      else if (!action && !opt_value) {
	        if (!isArray(returnValue))
	          returnValue = [];

	        returnValue.push(self);
	      }
	    });

	        // flatten array just with one slider
	    if (isArray(returnValue) && returnValue.length == 1)
	      returnValue = returnValue[0];

	    return returnValue || this;
	  };

	  var OPTIONS = {

	    settings: {
	      from: 1,
	      to: 10,
	      step: 1,
	      smooth: true,
	      limits: true,
	      round: 0,
	      format: {format: '#,##0.##'},
	      value: '5;7',
	      dimension: ''
	    },

	    className: 'jslider',
	    selector: '.jslider-',

	    template: tmpl(
	            '<span class="<%=className%>">' +
	            '<table><tr><td>' +
	            '<div class="<%=className%>-bg">' +
	            '<i class="l"></i><i class="f"></i><i class="r"></i>' +
	            '<i class="v"></i>' +
	            '</div>' +

	            '<div class="<%=className%>-pointer"></div>' +
	            '<div class="<%=className%>-pointer <%=className%>-pointer-to"></div>' +

	            '<div class="<%=className%>-label"><span><%=settings.from%></span></div>' +
	            '<div class="<%=className%>-label <%=className%>-label-to"><span><%=settings.to%></span><%=settings.dimension%></div>' +

	            '<div class="<%=className%>-value"><span></span><%=settings.dimension%></div>' +
	            '<div class="<%=className%>-value <%=className%>-value-to"><span></span><%=settings.dimension%></div>' +

	            '<div class="<%=className%>-scale"><%=scale%></div>' +

	            '</td></tr></table>' +
	            '</span>'
	        )

	  };

	  function jSlider() {
	    return this.init.apply(this, arguments);
	  }

	  jSlider.prototype.init = function(node, settings) {
	    this.settings = $.extend(true, {}, OPTIONS.settings, settings ? settings : {});

	        // obj.sliderHandler = this;
	    this.inputNode = $(node).hide();

	    this.settings.interval = this.settings.to - this.settings.from;
	    this.settings.value = this.inputNode.attr('value');

	    if (this.settings.calculate && $.isFunction(this.settings.calculate))
	      this.nice = this.settings.calculate;

	    if (this.settings.onstatechange && $.isFunction(this.settings.onstatechange))
	      this.onstatechange = this.settings.onstatechange;

	    this.is = {
	      init: false
	    };
	    this.o = {};

	    this.create();
	  };

	  jSlider.prototype.onstatechange = function() {

	  };

	  jSlider.prototype.create = function() {
	    var $this = this;

	    this.domNode = $(OPTIONS.template({
	      className: OPTIONS.className,
	      settings: {
	        from: this.nice(this.settings.from),
	        to: this.nice(this.settings.to),
	        dimension: this.settings.dimension
	      },
	      scale: this.generateScale()
	    }));

	    this.inputNode.after(this.domNode);
	    this.drawScale();

	        // set skin class
	    if (this.settings.skin && this.settings.skin.length > 0)
	      this.setSkin(this.settings.skin);

	    this.sizes = {
	      domWidth: this.domNode.width(),
	      domOffset: this.domNode.offset()
	    };

	        // find some objects
	    $.extend(this.o, {
	      pointers: {},
	      labels: {
	        0: {
	          o: this.domNode.find(OPTIONS.selector + 'value').not(OPTIONS.selector + 'value-to')
	        },
	        1: {
	          o: this.domNode.find(OPTIONS.selector + 'value').filter(OPTIONS.selector + 'value-to')
	        }
	      },
	      limits: {
	        0: this.domNode.find(OPTIONS.selector + 'label').not(OPTIONS.selector + 'label-to'),
	        1: this.domNode.find(OPTIONS.selector + 'label').filter(OPTIONS.selector + 'label-to')
	      }
	    });

	    $.extend(this.o.labels[0], {
	      value: this.o.labels[0].o.find('span')
	    });

	    $.extend(this.o.labels[1], {
	      value: this.o.labels[1].o.find('span')
	    });


	    if (!$this.settings.value.split(';')[1]) {
	      this.settings.single = true;
	      this.domNode.addDependClass('single');
	    }

	    if (!$this.settings.limits)
	      this.domNode.addDependClass('limitless');

	    this.domNode.find(OPTIONS.selector + 'pointer').each(function(i) {
	      var value = $this.settings.value.split(';')[i];
	      if (value) {
	        $this.o.pointers[i] = new jSliderPointer(this, i, $this);

	        var prev = $this.settings.value.split(';')[i - 1];
	        if (prev && new Number(value) < new Number(prev)) value = prev;

	        value = value < $this.settings.from ? $this.settings.from : value;
	        value = value > $this.settings.to ? $this.settings.to : value;

	        $this.o.pointers[i].set(value, true);
	      }
	    });

	    this.o.value = this.domNode.find('.v');
	    this.is.init = true;

	    $.each(this.o.pointers, function(i) {
	      $this.redraw(this);
	    });

	    (function(self) {
	      $(window).resize(function() {
	        self.onresize();
	      });
	    })(this);
	  };

	  jSlider.prototype.setSkin = function(skin) {
	    if (this.skin_)
	      this.domNode.removeDependClass(this.skin_, '_');

	    this.domNode.addDependClass(this.skin_ = skin, '_');
	  };

	  jSlider.prototype.setPointersIndex = function(i) {
	    $.each(this.getPointers(), function(i) {
	      this.index(i);
	    });
	  };

	  jSlider.prototype.getPointers = function() {
	    return this.o.pointers;
	  };

	  jSlider.prototype.generateScale = function() {
	    if (this.settings.scale && this.settings.scale.length > 0) {
	      var str = '';
	      var s = this.settings.scale;
	      var prc = Math.round((100 / (s.length - 1)) * 10) / 10;
	      for (var i = 0; i < s.length; i++) {
	        str += '<span style="left: ' + i * prc + '%">' + ( s[i] != '|' ? '<ins>' + s[i] + '</ins>' : '' ) + '</span>';
	      }
	      return str;
	    } else return '';

	    return '';
	  };

	  jSlider.prototype.drawScale = function() {
	    this.domNode.find(OPTIONS.selector + 'scale span ins').each(function() {
	      $(this).css({marginLeft: -$(this).outerWidth() / 2});
	    });
	  };

	  jSlider.prototype.onresize = function() {
	    var self = this;
	    this.sizes = {
	      domWidth: this.domNode.width(),
	      domOffset: this.domNode.offset()
	    };

	    $.each(this.o.pointers, function(i) {
	      self.redraw(this);
	    });
	  };

	  jSlider.prototype.update = function() {
	    this.onresize();
	    this.drawScale();
	  };

	  jSlider.prototype.limits = function(x, pointer) {
	        // smooth
	    if (!this.settings.smooth) {
	      var step = this.settings.step * 100 / ( this.settings.interval );
	      x = Math.round(x / step) * step;
	    }

	    var another = this.o.pointers[1 - pointer.uid];
	    if (another && pointer.uid && x < another.value.prc) x = another.value.prc;
	    if (another && !pointer.uid && x > another.value.prc) x = another.value.prc;

	        // base limit
	    if (x < 0) x = 0;
	    if (x > 100) x = 100;

	    return Math.round(x * 10) / 10;
	  };

	  jSlider.prototype.redraw = function(pointer) {
	    if (!this.is.init) return false;

	    this.setValue();

	        // redraw range line
	    if (this.o.pointers[0] && this.o.pointers[1])
	      this.o.value.css({
	        left: this.o.pointers[0].value.prc + '%',
	        width: ( this.o.pointers[1].value.prc - this.o.pointers[0].value.prc ) + '%'
	      });

	    this.o.labels[pointer.uid].value.html(
	            this.nice(
	                pointer.value.origin
	            )
	        );

	        // redraw position of labels
	    this.redrawLabels(pointer);
	  };

	  jSlider.prototype.redrawLabels = function(pointer) {
	    function setPosition(label, sizes, prc) {
	      sizes.margin = -sizes.label / 2;

	            // left limit
	      var label_left = sizes.border + sizes.margin;
	      if (label_left < 0)
	        sizes.margin -= label_left;

	            // right limit
	      if (sizes.border + sizes.label / 2 > self.sizes.domWidth) {
	        sizes.margin = 0;
	        sizes.right = true;
	      } else
	                sizes.right = false;

	      label.o.css({left: prc + '%', marginLeft: sizes.margin, right: 'auto'});
	      if (sizes.right) label.o.css({left: 'auto', right: 0});
	      return sizes;
	    }

	    var self = this;
	    var label = this.o.labels[pointer.uid];
	    var prc = pointer.value.prc;

	    var sizes = {
	      label: label.o.outerWidth(),
	      right: false,
	      border: ( prc * this.sizes.domWidth ) / 100
	    };

	    if (!this.settings.single) {
	            // glue if near;
	      var another = this.o.pointers[1 - pointer.uid];
	      var another_label = this.o.labels[another.uid];

	      switch (pointer.uid) {
	        case 0:
	          if (sizes.border + sizes.label / 2 > another_label.o.offset().left - this.sizes.domOffset.left) {
	            another_label.o.css({visibility: 'hidden'});
	            another_label.value.html(this.nice(another.value.origin));

	            label.o.css({visibility: 'visible'});

	            prc = ( another.value.prc - prc ) / 2 + prc;
	            if (another.value.prc != pointer.value.prc) {
	              label.value.html(this.nice(pointer.value.origin) + '&nbsp;&ndash;&nbsp;' + this.nice(another.value.origin));
	              sizes.label = label.o.outerWidth();
	              sizes.border = ( prc * this.sizes.domWidth ) / 100;
	            }
	          } else {
	            another_label.o.css({visibility: 'visible'});
	          }
	          break;

	        case 1:
	          if (sizes.border - sizes.label / 2 < another_label.o.offset().left - this.sizes.domOffset.left + another_label.o.outerWidth()) {
	            another_label.o.css({visibility: 'hidden'});
	            another_label.value.html(this.nice(another.value.origin));

	            label.o.css({visibility: 'visible'});

	            prc = ( prc - another.value.prc ) / 2 + another.value.prc;
	            if (another.value.prc != pointer.value.prc) {
	              label.value.html(this.nice(another.value.origin) + '&nbsp;&ndash;&nbsp;' + this.nice(pointer.value.origin));
	              sizes.label = label.o.outerWidth();
	              sizes.border = ( prc * this.sizes.domWidth ) / 100;
	            }
	          } else {
	            another_label.o.css({visibility: 'visible'});
	          }
	          break;
	      }
	    }

	    sizes = setPosition(label, sizes, prc);

	        /* draw second label */
	    if (another_label) {
	      var sizes = {
	        label: another_label.o.outerWidth(),
	        right: false,
	        border: ( another.value.prc * this.sizes.domWidth ) / 100
	      };
	      sizes = setPosition(another_label, sizes, another.value.prc);
	    }

	    this.redrawLimits();
	  };

	  jSlider.prototype.redrawLimits = function() {
	    if (this.settings.limits) {
	      var limits = [true, true];

	      for (key in this.o.pointers) {
	        if (!this.settings.single || key == 0) {
	          var pointer = this.o.pointers[key];
	          var label = this.o.labels[pointer.uid];
	          var label_left = label.o.offset().left - this.sizes.domOffset.left;

	          var limit = this.o.limits[0];
	          if (label_left < limit.outerWidth())
	            limits[0] = false;

	          var limit = this.o.limits[1];
	          if (label_left + label.o.outerWidth() > this.sizes.domWidth - limit.outerWidth())
	            limits[1] = false;
	        }
	      }

	      for (var i = 0; i < limits.length; i++) {
	        if (limits[i])
	          this.o.limits[i].fadeIn('fast');
	        else
	                    this.o.limits[i].fadeOut('fast');
	      }
	    }
	  };

	  jSlider.prototype.setValue = function() {
	    var value = this.getValue();
	    this.inputNode.attr('value', value);
	    this.onstatechange.call(this, value);
	  };

	  jSlider.prototype.getValue = function() {
	    if (!this.is.init) return false;
	    var $this = this;

	    var value = '';
	    $.each(this.o.pointers, function(i) {
	      if (this.value.prc != undefined && !isNaN(this.value.prc)) value += (i > 0 ? ';' : '') + $this.prcToValue(this.value.prc);
	    });
	    return value;
	  };

	  jSlider.prototype.getPrcValue = function() {
	    if (!this.is.init) return false;
	    var $this = this;

	    var value = '';
	    $.each(this.o.pointers, function(i) {
	      if (this.value.prc != undefined && !isNaN(this.value.prc)) value += (i > 0 ? ';' : '') + this.value.prc;
	    });
	    return value;
	  };

	  jSlider.prototype.prcToValue = function(prc) {
	    if (this.settings.heterogeneity && this.settings.heterogeneity.length > 0) {
	      var h = this.settings.heterogeneity;

	      var _start = 0;
	      var _from = this.settings.from;

	      for (var i = 0; i <= h.length; i++) {
	        if (h[i]) var v = h[i].split('/');
	        else       var v = [100, this.settings.to];

	        v[0] = new Number(v[0]);
	        v[1] = new Number(v[1]);

	        if (prc >= _start && prc <= v[0]) {
	          var value = _from + ( (prc - _start) * (v[1] - _from) ) / (v[0] - _start);
	        }

	        _start = v[0];
	        _from = v[1];
	      }
	    } else {
	      var value = this.settings.from + ( prc * this.settings.interval ) / 100;
	    }

	    return this.round(value);
	  };

	  jSlider.prototype.valueToPrc = function(value, pointer) {
	    if (this.settings.heterogeneity && this.settings.heterogeneity.length > 0) {
	      var h = this.settings.heterogeneity;

	      var _start = 0;
	      var _from = this.settings.from;

	      for (var i = 0; i <= h.length; i++) {
	        if (h[i]) var v = h[i].split('/');
	        else     var v = [100, this.settings.to];
	        v[0] = new Number(v[0]);
	        v[1] = new Number(v[1]);

	        if (value >= _from && value <= v[1]) {
	          var prc = pointer.limits(_start + (value - _from) * (v[0] - _start) / (v[1] - _from));
	        }

	        _start = v[0];
	        _from = v[1];
	      }
	    } else {
	      var prc = pointer.limits((value - this.settings.from) * 100 / this.settings.interval);
	    }

	    return prc;
	  };

	  jSlider.prototype.round = function(value) {
	    value = Math.round(value / this.settings.step) * this.settings.step;
	    if (this.settings.round) value = Math.round(value * Math.pow(10, this.settings.round)) / Math.pow(10, this.settings.round);
	    else value = Math.round(value);
	    return value;
	  };

	  jSlider.prototype.nice = function(value) {
	    value = value.toString().replace(/,/gi, '.').replace(/ /gi, '');

	    if ($.formatNumber) {
	      return $.formatNumber(new Number(value), this.settings.format || {}).replace(/-/gi, '&minus;');
	    }

	    else {
	      return new Number(value);
	    }
	  };


	  function jSliderPointer() {
	    Draggable.apply(this, arguments);
	  }

	  jSliderPointer.prototype = new Draggable();

	  jSliderPointer.prototype.oninit = function(ptr, id, _constructor) {
	    this.uid = id;
	    this.parent = _constructor;
	    this.value = {};
	    this.settings = this.parent.settings;
	  };

	  jSliderPointer.prototype.onmousedown = function(evt) {
	    this._parent = {
	      offset: this.parent.domNode.offset(),
	      width: this.parent.domNode.width()
	    };
	    this.ptr.addDependClass('hover');
	    this.setIndexOver();
	  };

	  jSliderPointer.prototype.onmousemove = function(evt, x) {
	    var coords = this._getPageCoords(evt);
	    this._set(this.calc(coords.x));
	  };

	  jSliderPointer.prototype.onmouseup = function(evt) {
	    if (this.parent.settings.callback && $.isFunction(this.parent.settings.callback))
	      this.parent.settings.callback.call(this.parent, this.parent.getValue());

	    this.ptr.removeDependClass('hover');
	  };

	  jSliderPointer.prototype.setIndexOver = function() {
	    this.parent.setPointersIndex(1);
	    this.index(2);
	  };

	  jSliderPointer.prototype.index = function(i) {
	    this.ptr.css({zIndex: i});
	  };

	  jSliderPointer.prototype.limits = function(x) {
	    return this.parent.limits(x, this);
	  };

	  jSliderPointer.prototype.calc = function(coords) {
	    var x = this.limits(((coords - this._parent.offset.left) * 100) / this._parent.width);
	    return x;
	  };

	  jSliderPointer.prototype.set = function(value, opt_origin) {
	    this.value.origin = this.parent.round(value);
	    this._set(this.parent.valueToPrc(value, this), opt_origin);
	  };

	  jSliderPointer.prototype._set = function(prc, opt_origin) {
	    if (!opt_origin)
	      this.value.origin = this.parent.prcToValue(prc);

	    this.value.prc = prc;
	    this.ptr.css({left: prc + '%'});
	    this.parent.redraw(this);
	  };

	  var nfLocales = new Hashtable();

	  var nfLocalesLikeUS = [ 'ae', 'au', 'ca', 'cn', 'eg', 'gb', 'hk', 'il', 'in', 'jp', 'sk', 'th', 'tw', 'us' ];
	  var nfLocalesLikeDE = [ 'at', 'br', 'de', 'dk', 'es', 'gr', 'it', 'nl', 'pt', 'tr', 'vn' ];
	  var nfLocalesLikeFR = [ 'cz', 'fi', 'fr', 'ru', 'se', 'pl' ];
	  var nfLocalesLikeCH = [ 'ch' ];

	  var nfLocaleFormatting = [ ['.', ','], [',', '.'], [',', ' '], ['.', "'"] ];
	  var nfAllLocales = [ nfLocalesLikeUS, nfLocalesLikeDE, nfLocalesLikeFR, nfLocalesLikeCH ];

	  function FormatData(dec, group, neg) {
	    this.dec = dec;
	    this.group = group;
	    this.neg = neg;
	  }

	  function init() {
	    // write the arrays into the hashtable
	    for (var localeGroupIdx = 0; localeGroupIdx < nfAllLocales.length; localeGroupIdx++) {
	      var localeGroup = nfAllLocales[localeGroupIdx];
	      for (var i = 0; i < localeGroup.length; i++) {
	        nfLocales.put(localeGroup[i], localeGroupIdx);
	      }
	    }
	  }

	  function formatCodes(locale, isFullLocale) {
	    if (nfLocales.size() == 0)
	      init();

	    // default values
	    var dec = '.';
	    var group = ',';
	    var neg = '-';

	    if (isFullLocale == false) {
	      // Extract and convert to lower-case any language code from a real 'locale' formatted string, if not use as-is
	      // (To prevent locale format like : "fr_FR", "en_US", "de_DE", "fr_FR", "en-US", "de-DE")
	      if (locale.indexOf('_') != -1)
	        locale = locale.split('_')[1].toLowerCase();
	      else if (locale.indexOf('-') != -1)
	        locale = locale.split('-')[1].toLowerCase();
	    }

	    // hashtable lookup to match locale with codes
	    var codesIndex = nfLocales.get(locale);
	    if (codesIndex) {
	      var codes = nfLocaleFormatting[codesIndex];
	      if (codes) {
	        dec = codes[0];
	        group = codes[1];
	      }
	    }
	    return new FormatData(dec, group, neg);
	  }


	  /*	Formatting Methods	*/


	  /**
	   * Formats anything containing a number in standard js number notation.
	   *
	   * @param {Object}	options			The formatting options to use
	   * @param {Boolean}	writeBack		(true) If the output value should be written back to the subject
	   * @param {Boolean} giveReturnValue	(true) If the function should return the output string
	   */
	  jQuery.fn.formatNumber = function(options, writeBack, giveReturnValue) {
	    return this.each(function() {
	      // enforce defaults
	      if (writeBack == null)
	        writeBack = true;
	      if (giveReturnValue == null)
	        giveReturnValue = true;

	      // get text
	      var text;
	      if (jQuery(this).is(':input'))
	        text = new String(jQuery(this).val());
	      else
	        text = new String(jQuery(this).text());

	      // format
	      var returnString = jQuery.formatNumber(text, options);

	      // set formatted string back, only if a success
	//			if (returnString) {
	      if (writeBack) {
	        if (jQuery(this).is(':input'))
	          jQuery(this).val(returnString);
	        else
	          jQuery(this).text(returnString);
	      }
	      if (giveReturnValue)
	        return returnString;
	//			}
	//			return '';
	    });
	  };

	  /**
	   * First parses a string and reformats it with the given options.
	   *
	   * @param {Object} numberString
	   * @param {Object} options
	   */
	  jQuery.formatNumber = function(numberString, options) {
	    var options = jQuery.extend({}, jQuery.fn.formatNumber.defaults, options);
	    var formatData = formatCodes(options.locale.toLowerCase(), options.isFullLocale);

	    var dec = formatData.dec;
	    var group = formatData.group;
	    var neg = formatData.neg;

	    var validFormat = '0#-,.';

	    // strip all the invalid characters at the beginning and the end
	    // of the format, and we'll stick them back on at the end
	    // make a special case for the negative sign "-" though, so
	    // we can have formats like -$23.32
	    var prefix = '';
	    var negativeInFront = false;
	    for (var i = 0; i < options.format.length; i++) {
	      if (validFormat.indexOf(options.format.charAt(i)) == -1)
	        prefix = prefix + options.format.charAt(i);
	      else
	      if (i == 0 && options.format.charAt(i) == '-') {
	        negativeInFront = true;
	        continue;
	      }
	      else
	        break;
	    }
	    var suffix = '';
	    for (var i = options.format.length - 1; i >= 0; i--) {
	      if (validFormat.indexOf(options.format.charAt(i)) == -1)
	        suffix = options.format.charAt(i) + suffix;
	      else
	        break;
	    }

	    options.format = options.format.substring(prefix.length);
	    options.format = options.format.substring(0, options.format.length - suffix.length);

	    // now we need to convert it into a number
	    // while (numberString.indexOf(group) > -1)
	    //	numberString = numberString.replace(group, '');
	    // var number = new Number(numberString.replace(dec, ".").replace(neg, "-"));
	    var number = new Number(numberString);

	    return jQuery._formatNumber(number, options, suffix, prefix, negativeInFront);
	  };

	  /**
	   * Formats a Number object into a string, using the given formatting options
	   *
	   * @param {Object} numberString
	   * @param {Object} options
	   */
	  jQuery._formatNumber = function(number, options, suffix, prefix, negativeInFront) {
	    var options = jQuery.extend({}, jQuery.fn.formatNumber.defaults, options);
	    var formatData = formatCodes(options.locale.toLowerCase(), options.isFullLocale);

	    var dec = formatData.dec;
	    var group = formatData.group;
	    var neg = formatData.neg;

	    var forcedToZero = false;
	    if (isNaN(number)) {
	      if (options.nanForceZero == true) {
	        number = 0;
	        forcedToZero = true;
	      } else
	        return null;
	    }

	    // special case for percentages
	    if (suffix == '%')
	      number = number * 100;

	    var returnString = '';
	    if (options.format.indexOf('.') > -1) {
	      var decimalPortion = dec;
	      var decimalFormat = options.format.substring(options.format.lastIndexOf('.') + 1);

	      // round or truncate number as needed
	      if (options.round == true)
	        number = new Number(number.toFixed(decimalFormat.length));
	      else {
	        var numStr = number.toString();
	        numStr = numStr.substring(0, numStr.lastIndexOf('.') + decimalFormat.length + 1);
	        number = new Number(numStr);
	      }

	      var decimalValue = number % 1;
	      var decimalString = new String(decimalValue.toFixed(decimalFormat.length));
	      decimalString = decimalString.substring(decimalString.lastIndexOf('.') + 1);

	      for (var i = 0; i < decimalFormat.length; i++) {
	        if (decimalFormat.charAt(i) == '#' && decimalString.charAt(i) != '0') {
	          decimalPortion += decimalString.charAt(i);
	          continue;
	        } else if (decimalFormat.charAt(i) == '#' && decimalString.charAt(i) == '0') {
	          var notParsed = decimalString.substring(i);
	          if (notParsed.match('[1-9]')) {
	            decimalPortion += decimalString.charAt(i);
	            continue;
	          } else
	            break;
	        } else if (decimalFormat.charAt(i) == '0')
	          decimalPortion += decimalString.charAt(i);
	      }
	      returnString += decimalPortion;
	    } else
	      number = Math.round(number);

	    var ones = Math.floor(number);
	    if (number < 0)
	      ones = Math.ceil(number);

	    var onesFormat = '';
	    if (options.format.indexOf('.') == -1)
	      onesFormat = options.format;
	    else
	      onesFormat = options.format.substring(0, options.format.indexOf('.'));

	    var onePortion = '';
	    if (!(ones == 0 && onesFormat.substr(onesFormat.length - 1) == '#') || forcedToZero) {
	      // find how many digits are in the group
	      var oneText = new String(Math.abs(ones));
	      var groupLength = 9999;
	      if (onesFormat.lastIndexOf(',') != -1)
	        groupLength = onesFormat.length - onesFormat.lastIndexOf(',') - 1;
	      var groupCount = 0;
	      for (var i = oneText.length - 1; i > -1; i--) {
	        onePortion = oneText.charAt(i) + onePortion;
	        groupCount++;
	        if (groupCount == groupLength && i != 0) {
	          onePortion = group + onePortion;
	          groupCount = 0;
	        }
	      }

	      // account for any pre-data padding
	      if (onesFormat.length > onePortion.length) {
	        var padStart = onesFormat.indexOf('0');
	        if (padStart != -1) {
	          var padLen = onesFormat.length - padStart;

	          // pad to left with 0's or group char
	          var pos = onesFormat.length - onePortion.length - 1;
	          while (onePortion.length < padLen) {
	            var padChar = onesFormat.charAt(pos);
	            // replace with real group char if needed
	            if (padChar == ',')
	              padChar = group;
	            onePortion = padChar + onePortion;
	            pos--;
	          }
	        }
	      }
	    }

	    if (!onePortion && onesFormat.indexOf('0', onesFormat.length - 1) !== -1)
	      onePortion = '0';

	    returnString = onePortion + returnString;

	    // handle special case where negative is in front of the invalid characters
	    if (number < 0 && negativeInFront && prefix.length > 0)
	      prefix = neg + prefix;
	    else if (number < 0)
	      returnString = neg + returnString;

	    if (!options.decimalSeparatorAlwaysShown) {
	      if (returnString.lastIndexOf(dec) == returnString.length - 1) {
	        returnString = returnString.substring(0, returnString.length - 1);
	      }
	    }
	    returnString = prefix + returnString + suffix;
	    return returnString;
	  };


	  /*	Parsing Methods	*/


	  /**
	   * Parses a number of given format from the element and returns a Number object.
	   * @param {Object} options
	   */
	  jQuery.fn.parseNumber = function(options, writeBack, giveReturnValue) {
	    // enforce defaults
	    if (writeBack == null)
	      writeBack = true;
	    if (giveReturnValue == null)
	      giveReturnValue = true;

	    // get text
	    var text;
	    if (jQuery(this).is(':input'))
	      text = new String(jQuery(this).val());
	    else
	      text = new String(jQuery(this).text());

	    // parse text
	    var number = jQuery.parseNumber(text, options);

	    if (number) {
	      if (writeBack) {
	        if (jQuery(this).is(':input'))
	          jQuery(this).val(number.toString());
	        else
	          jQuery(this).text(number.toString());
	      }
	      if (giveReturnValue)
	        return number;
	    }
	  };

	  /**
	   * Parses a string of given format into a Number object.
	   *
	   * @param {Object} string
	   * @param {Object} options
	   */
	  jQuery.parseNumber = function(numberString, options) {
	    var options = jQuery.extend({}, jQuery.fn.parseNumber.defaults, options);
	    var formatData = formatCodes(options.locale.toLowerCase(), options.isFullLocale);

	    var dec = formatData.dec;
	    var group = formatData.group;
	    var neg = formatData.neg;

	    var valid = '1234567890.-';

	    // now we need to convert it into a number
	    while (numberString.indexOf(group) > -1)
	      numberString = numberString.replace(group, '');
	    numberString = numberString.replace(dec, '.').replace(neg, '-');
	    var validText = '';
	    var hasPercent = false;
	    if (numberString.charAt(numberString.length - 1) == '%' || options.isPercentage == true)
	      hasPercent = true;
	    for (var i = 0; i < numberString.length; i++) {
	      if (valid.indexOf(numberString.charAt(i)) > -1)
	        validText = validText + numberString.charAt(i);
	    }
	    var number = new Number(validText);
	    if (hasPercent) {
	      number = number / 100;
	      var decimalPos = validText.indexOf('.');
	      if (decimalPos != -1) {
	        var decimalPoints = validText.length - decimalPos - 1;
	        number = number.toFixed(decimalPoints + 2);
	      } else {
	        number = number.toFixed(validText.length - 1);
	      }
	    }

	    return number;
	  };

	  jQuery.fn.parseNumber.defaults = {
	    locale: 'us',
	    decimalSeparatorAlwaysShown: false,
	    isPercentage: false,
	    isFullLocale: false
	  };

	  jQuery.fn.formatNumber.defaults = {
	    format: '#,###.00',
	    locale: 'us',
	    decimalSeparatorAlwaysShown: false,
	    nanForceZero: true,
	    round: true,
	    isFullLocale: false
	  };

	  Number.prototype.toFixed = function(precision) {
	    return jQuery._roundNumber(this, precision);
	  };

	  jQuery._roundNumber = function(number, decimalPlaces) {
	    var power = Math.pow(10, decimalPlaces || 0);
	    var value = String(Math.round(number * power) / power);

	    // ensure the decimal places are there
	    if (decimalPlaces > 0) {
	      var dp = value.indexOf('.');
	      if (dp == -1) {
	        value += '.';
	        dp = 0;
	      } else {
	        dp = value.length - (dp + 1);
	      }

	      while (dp < decimalPlaces) {
	        value += '0';
	        dp++;
	      }
	    }
	    return value;
	  };


	  $('.rangeSlider').each(function() {
	    var $this = $(this);
	    var settings = {};

	    if (typeof $this.data('settings') == 'object') {
	      settings = $this.data('settings');
	    }

	    $this.slider(settings);
	  });
	};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js!./index.scss");
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = require("!../../../node_modules/style-loader/addStyles.js")(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(module.hot) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js!./index.scss", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js!./index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(24);

	var $ = __webpack_require__(1);
	__webpack_require__(25);
	// require('lg-thumbnail');
	// require('lg-autoplay');
	// require('lg-video');
	// require('lg-fullscreen');
	// require('lg-pager');
	// require('lg-zoom');
	// require('lg-hash');
	// require('lg-share');

	module.exports = function() {
	  $('.lightgallery').each(function() {
	    var $this = $(this);
	    var settings = {};
	    if (typeof $this.data('lightgallery-settings') == 'object') {
	      settings = $this.data('lightgallery-settings');
	    }

	    $(this).lightGallery(settings);
	  });
	};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = require("!!../../../css-loader/index.js!../../../sass-loader/index.js!./lightgallery.scss");
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = require("!../../../style-loader/addStyles.js")(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(module.hot) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../css-loader/index.js!../../../sass-loader/index.js!./lightgallery.scss", function() {
				var newContent = require("!!../../../css-loader/index.js!../../../sass-loader/index.js!./lightgallery.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	/*! lightgallery - v1.6.11 - 2018-05-22
	* http://sachinchoolur.github.io/lightGallery/
	* Copyright (c) 2018 Sachin N; Licensed GPLv3 */
	(function (root, factory) {
	  if (typeof define === 'function' && define.amd) {
	    // AMD. Register as an anonymous module unless amdModuleId is set
	    define(['jquery'], function (a0) {
	      return (factory(a0));
	    });
	  } else if (typeof module === 'object' && module.exports) {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = factory(require('jquery'));
	  } else {
	    factory(root["jQuery"]);
	  }
	}(this, function ($) {

	(function() {
	    'use strict';

	    var defaults = {

	        mode: 'lg-slide',

	        // Ex : 'ease'
	        cssEasing: 'ease',

	        //'for jquery animation'
	        easing: 'linear',
	        speed: 600,
	        height: '100%',
	        width: '100%',
	        addClass: '',
	        startClass: 'lg-start-zoom',
	        backdropDuration: 150,
	        hideBarsDelay: 6000,

	        useLeft: false,

	        closable: true,
	        loop: true,
	        escKey: true,
	        keyPress: true,
	        controls: true,
	        slideEndAnimatoin: true,
	        hideControlOnEnd: false,
	        mousewheel: true,

	        getCaptionFromTitleOrAlt: true,

	        // .lg-item || '.lg-sub-html'
	        appendSubHtmlTo: '.lg-sub-html',

	        subHtmlSelectorRelative: false,

	        /**
	         * @desc number of preload slides
	         * will exicute only after the current slide is fully loaded.
	         *
	         * @ex you clicked on 4th image and if preload = 1 then 3rd slide and 5th
	         * slide will be loaded in the background after the 4th slide is fully loaded..
	         * if preload is 2 then 2nd 3rd 5th 6th slides will be preloaded.. ... ...
	         *
	         */
	        preload: 1,
	        showAfterLoad: true,
	        selector: '',
	        selectWithin: '',
	        nextHtml: '',
	        prevHtml: '',

	        // 0, 1
	        index: false,

	        iframeMaxWidth: '100%',

	        download: true,
	        counter: true,
	        appendCounterTo: '.lg-toolbar',

	        swipeThreshold: 50,
	        enableSwipe: true,
	        enableDrag: true,

	        dynamic: false,
	        dynamicEl: [],
	        galleryId: 1
	    };

	    function Plugin(element, options) {

	        // Current lightGallery element
	        this.el = element;

	        // Current jquery element
	        this.$el = $(element);

	        // lightGallery settings
	        this.s = $.extend({}, defaults, options);

	        // When using dynamic mode, ensure dynamicEl is an array
	        if (this.s.dynamic && this.s.dynamicEl !== 'undefined' && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) {
	            throw ('When using dynamic mode, you must also define dynamicEl as an Array.');
	        }

	        // lightGallery modules
	        this.modules = {};

	        // false when lightgallery complete first slide;
	        this.lGalleryOn = false;

	        this.lgBusy = false;

	        // Timeout function for hiding controls;
	        this.hideBartimeout = false;

	        // To determine browser supports for touch events;
	        this.isTouch = ('ontouchstart' in document.documentElement);

	        // Disable hideControlOnEnd if sildeEndAnimation is true
	        if (this.s.slideEndAnimatoin) {
	            this.s.hideControlOnEnd = false;
	        }

	        // Gallery items
	        if (this.s.dynamic) {
	            this.$items = this.s.dynamicEl;
	        } else {
	            if (this.s.selector === 'this') {
	                this.$items = this.$el;
	            } else if (this.s.selector !== '') {
	                if (this.s.selectWithin) {
	                    this.$items = $(this.s.selectWithin).find(this.s.selector);
	                } else {
	                    this.$items = this.$el.find($(this.s.selector));
	                }
	            } else {
	                this.$items = this.$el.children();
	            }
	        }

	        // .lg-item
	        this.$slide = '';

	        // .lg-outer
	        this.$outer = '';

	        this.init();

	        return this;
	    }

	    Plugin.prototype.init = function() {

	        var _this = this;

	        // s.preload should not be more than $item.length
	        if (_this.s.preload > _this.$items.length) {
	            _this.s.preload = _this.$items.length;
	        }

	        // if dynamic option is enabled execute immediately
	        var _hash = window.location.hash;
	        if (_hash.indexOf('lg=' + this.s.galleryId) > 0) {

	            _this.index = parseInt(_hash.split('&slide=')[1], 10);

	            $('body').addClass('lg-from-hash');
	            if (!$('body').hasClass('lg-on')) {
	                setTimeout(function() {
	                    _this.build(_this.index);
	                });

	                $('body').addClass('lg-on');
	            }
	        }

	        if (_this.s.dynamic) {

	            _this.$el.trigger('onBeforeOpen.lg');

	            _this.index = _this.s.index || 0;

	            // prevent accidental double execution
	            if (!$('body').hasClass('lg-on')) {
	                setTimeout(function() {
	                    _this.build(_this.index);
	                    $('body').addClass('lg-on');
	                });
	            }
	        } else {

	            // Using different namespace for click because click event should not unbind if selector is same object('this')
	            _this.$items.on('click.lgcustom', function(event) {

	                // For IE8
	                try {
	                    event.preventDefault();
	                    event.preventDefault();
	                } catch (er) {
	                    event.returnValue = false;
	                }

	                _this.$el.trigger('onBeforeOpen.lg');

	                _this.index = _this.s.index || _this.$items.index(this);

	                // prevent accidental double execution
	                if (!$('body').hasClass('lg-on')) {
	                    _this.build(_this.index);
	                    $('body').addClass('lg-on');
	                }
	            });
	        }

	    };

	    Plugin.prototype.build = function(index) {

	        var _this = this;

	        _this.structure();

	        // module constructor
	        $.each($.fn.lightGallery.modules, function(key) {
	            _this.modules[key] = new $.fn.lightGallery.modules[key](_this.el);
	        });

	        // initiate slide function
	        _this.slide(index, false, false, false);

	        if (_this.s.keyPress) {
	            _this.keyPress();
	        }

	        if (_this.$items.length > 1) {

	            _this.arrow();

	            setTimeout(function() {
	                _this.enableDrag();
	                _this.enableSwipe();
	            }, 50);

	            if (_this.s.mousewheel) {
	                _this.mousewheel();
	            }
	        } else {
	            _this.$slide.on('click.lg', function() {
	                _this.$el.trigger('onSlideClick.lg');
	            });
	        }

	        _this.counter();

	        _this.closeGallery();

	        _this.$el.trigger('onAfterOpen.lg');

	        // Hide controllers if mouse doesn't move for some period
	        _this.$outer.on('mousemove.lg click.lg touchstart.lg', function() {

	            _this.$outer.removeClass('lg-hide-items');

	            clearTimeout(_this.hideBartimeout);

	            // Timeout will be cleared on each slide movement also
	            _this.hideBartimeout = setTimeout(function() {
	                _this.$outer.addClass('lg-hide-items');
	            }, _this.s.hideBarsDelay);

	        });

	        _this.$outer.trigger('mousemove.lg');

	    };

	    Plugin.prototype.structure = function() {
	        var list = '';
	        var controls = '';
	        var i = 0;
	        var subHtmlCont = '';
	        var template;
	        var _this = this;

	        $('body').append('<div class="lg-backdrop"></div>');
	        $('.lg-backdrop').css('transition-duration', this.s.backdropDuration + 'ms');

	        // Create gallery items
	        for (i = 0; i < this.$items.length; i++) {
	            list += '<div class="lg-item"></div>';
	        }

	        // Create controlls
	        if (this.s.controls && this.$items.length > 1) {
	            controls = '<div class="lg-actions">' +
	                '<button class="lg-prev lg-icon">' + this.s.prevHtml + '</button>' +
	                '<button class="lg-next lg-icon">' + this.s.nextHtml + '</button>' +
	                '</div>';
	        }

	        if (this.s.appendSubHtmlTo === '.lg-sub-html') {
	            subHtmlCont = '<div class="lg-sub-html"></div>';
	        }

	        template = '<div class="lg-outer ' + this.s.addClass + ' ' + this.s.startClass + '">' +
	            '<div class="lg" style="width:' + this.s.width + '; height:' + this.s.height + '">' +
	            '<div class="lg-inner">' + list + '</div>' +
	            '<div class="lg-toolbar lg-group">' +
	            '<span class="lg-close lg-icon"></span>' +
	            '</div>' +
	            controls +
	            subHtmlCont +
	            '</div>' +
	            '</div>';

	        $('body').append(template);
	        this.$outer = $('.lg-outer');
	        this.$slide = this.$outer.find('.lg-item');

	        if (this.s.useLeft) {
	            this.$outer.addClass('lg-use-left');

	            // Set mode lg-slide if use left is true;
	            this.s.mode = 'lg-slide';
	        } else {
	            this.$outer.addClass('lg-use-css3');
	        }

	        // For fixed height gallery
	        _this.setTop();
	        $(window).on('resize.lg orientationchange.lg', function() {
	            setTimeout(function() {
	                _this.setTop();
	            }, 100);
	        });

	        // add class lg-current to remove initial transition
	        this.$slide.eq(this.index).addClass('lg-current');

	        // add Class for css support and transition mode
	        if (this.doCss()) {
	            this.$outer.addClass('lg-css3');
	        } else {
	            this.$outer.addClass('lg-css');

	            // Set speed 0 because no animation will happen if browser doesn't support css3
	            this.s.speed = 0;
	        }

	        this.$outer.addClass(this.s.mode);

	        if (this.s.enableDrag && this.$items.length > 1) {
	            this.$outer.addClass('lg-grab');
	        }

	        if (this.s.showAfterLoad) {
	            this.$outer.addClass('lg-show-after-load');
	        }

	        if (this.doCss()) {
	            var $inner = this.$outer.find('.lg-inner');
	            $inner.css('transition-timing-function', this.s.cssEasing);
	            $inner.css('transition-duration', this.s.speed + 'ms');
	        }

	        setTimeout(function() {
	            $('.lg-backdrop').addClass('in');
	        });

	        setTimeout(function() {
	            _this.$outer.addClass('lg-visible');
	        }, this.s.backdropDuration);

	        if (this.s.download) {
	            this.$outer.find('.lg-toolbar').append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>');
	        }

	        // Store the current scroll top value to scroll back after closing the gallery..
	        this.prevScrollTop = $(window).scrollTop();

	    };

	    // For fixed height gallery
	    Plugin.prototype.setTop = function() {
	        if (this.s.height !== '100%') {
	            var wH = $(window).height();
	            var top = (wH - parseInt(this.s.height, 10)) / 2;
	            var $lGallery = this.$outer.find('.lg');
	            if (wH >= parseInt(this.s.height, 10)) {
	                $lGallery.css('top', top + 'px');
	            } else {
	                $lGallery.css('top', '0px');
	            }
	        }
	    };

	    // Find css3 support
	    Plugin.prototype.doCss = function() {
	        // check for css animation support
	        var support = function() {
	            var transition = ['transition', 'MozTransition', 'WebkitTransition', 'OTransition', 'msTransition', 'KhtmlTransition'];
	            var root = document.documentElement;
	            var i = 0;
	            for (i = 0; i < transition.length; i++) {
	                if (transition[i] in root.style) {
	                    return true;
	                }
	            }
	        };

	        if (support()) {
	            return true;
	        }

	        return false;
	    };

	    /**
	     *  @desc Check the given src is video
	     *  @param {String} src
	     *  @return {Object} video type
	     *  Ex:{ youtube  :  ["//www.youtube.com/watch?v=c0asJgSyxcY", "c0asJgSyxcY"] }
	     */
	    Plugin.prototype.isVideo = function(src, index) {

	        var html;
	        if (this.s.dynamic) {
	            html = this.s.dynamicEl[index].html;
	        } else {
	            html = this.$items.eq(index).attr('data-html');
	        }

	        if (!src) {
	            if(html) {
	                return {
	                    html5: true
	                };
	            } else {
	                console.error('lightGallery :- data-src is not pvovided on slide item ' + (index + 1) + '. Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html');
	                return false;
	            }
	        }

	        var youtube = src.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i);
	        var vimeo = src.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i);
	        var dailymotion = src.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i);
	        var vk = src.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);

	        if (youtube) {
	            return {
	                youtube: youtube
	            };
	        } else if (vimeo) {
	            return {
	                vimeo: vimeo
	            };
	        } else if (dailymotion) {
	            return {
	                dailymotion: dailymotion
	            };
	        } else if (vk) {
	            return {
	                vk: vk
	            };
	        }
	    };

	    /**
	     *  @desc Create image counter
	     *  Ex: 1/10
	     */
	    Plugin.prototype.counter = function() {
	        if (this.s.counter) {
	            $(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + '</span></div>');
	        }
	    };

	    /**
	     *  @desc add sub-html into the slide
	     *  @param {Number} index - index of the slide
	     */
	    Plugin.prototype.addHtml = function(index) {
	        var subHtml = null;
	        var subHtmlUrl;
	        var $currentEle;
	        if (this.s.dynamic) {
	            if (this.s.dynamicEl[index].subHtmlUrl) {
	                subHtmlUrl = this.s.dynamicEl[index].subHtmlUrl;
	            } else {
	                subHtml = this.s.dynamicEl[index].subHtml;
	            }
	        } else {
	            $currentEle = this.$items.eq(index);
	            if ($currentEle.attr('data-sub-html-url')) {
	                subHtmlUrl = $currentEle.attr('data-sub-html-url');
	            } else {
	                subHtml = $currentEle.attr('data-sub-html');
	                if (this.s.getCaptionFromTitleOrAlt && !subHtml) {
	                    subHtml = $currentEle.attr('title') || $currentEle.find('img').first().attr('alt');
	                }
	            }
	        }

	        if (!subHtmlUrl) {
	            if (typeof subHtml !== 'undefined' && subHtml !== null) {

	                // get first letter of subhtml
	                // if first letter starts with . or # get the html form the jQuery object
	                var fL = subHtml.substring(0, 1);
	                if (fL === '.' || fL === '#') {
	                    if (this.s.subHtmlSelectorRelative && !this.s.dynamic) {
	                        subHtml = $currentEle.find(subHtml).html();
	                    } else {
	                        subHtml = $(subHtml).html();
	                    }
	                }
	            } else {
	                subHtml = '';
	            }
	        }

	        if (this.s.appendSubHtmlTo === '.lg-sub-html') {

	            if (subHtmlUrl) {
	                this.$outer.find(this.s.appendSubHtmlTo).load(subHtmlUrl);
	            } else {
	                this.$outer.find(this.s.appendSubHtmlTo).html(subHtml);
	            }

	        } else {

	            if (subHtmlUrl) {
	                this.$slide.eq(index).load(subHtmlUrl);
	            } else {
	                this.$slide.eq(index).append(subHtml);
	            }
	        }

	        // Add lg-empty-html class if title doesn't exist
	        if (typeof subHtml !== 'undefined' && subHtml !== null) {
	            if (subHtml === '') {
	                this.$outer.find(this.s.appendSubHtmlTo).addClass('lg-empty-html');
	            } else {
	                this.$outer.find(this.s.appendSubHtmlTo).removeClass('lg-empty-html');
	            }
	        }

	        this.$el.trigger('onAfterAppendSubHtml.lg', [index]);
	    };

	    /**
	     *  @desc Preload slides
	     *  @param {Number} index - index of the slide
	     */
	    Plugin.prototype.preload = function(index) {
	        var i = 1;
	        var j = 1;
	        for (i = 1; i <= this.s.preload; i++) {
	            if (i >= this.$items.length - index) {
	                break;
	            }

	            this.loadContent(index + i, false, 0);
	        }

	        for (j = 1; j <= this.s.preload; j++) {
	            if (index - j < 0) {
	                break;
	            }

	            this.loadContent(index - j, false, 0);
	        }
	    };

	    /**
	     *  @desc Load slide content into slide.
	     *  @param {Number} index - index of the slide.
	     *  @param {Boolean} rec - if true call loadcontent() function again.
	     *  @param {Boolean} delay - delay for adding complete class. it is 0 except first time.
	     */
	    Plugin.prototype.loadContent = function(index, rec, delay) {

	        var _this = this;
	        var _hasPoster = false;
	        var _$img;
	        var _src;
	        var _poster;
	        var _srcset;
	        var _sizes;
	        var _html;
	        var getResponsiveSrc = function(srcItms) {
	            var rsWidth = [];
	            var rsSrc = [];
	            for (var i = 0; i < srcItms.length; i++) {
	                var __src = srcItms[i].split(' ');

	                // Manage empty space
	                if (__src[0] === '') {
	                    __src.splice(0, 1);
	                }

	                rsSrc.push(__src[0]);
	                rsWidth.push(__src[1]);
	            }

	            var wWidth = $(window).width();
	            for (var j = 0; j < rsWidth.length; j++) {
	                if (parseInt(rsWidth[j], 10) > wWidth) {
	                    _src = rsSrc[j];
	                    break;
	                }
	            }
	        };

	        if (_this.s.dynamic) {

	            if (_this.s.dynamicEl[index].poster) {
	                _hasPoster = true;
	                _poster = _this.s.dynamicEl[index].poster;
	            }

	            _html = _this.s.dynamicEl[index].html;
	            _src = _this.s.dynamicEl[index].src;

	            if (_this.s.dynamicEl[index].responsive) {
	                var srcDyItms = _this.s.dynamicEl[index].responsive.split(',');
	                getResponsiveSrc(srcDyItms);
	            }

	            _srcset = _this.s.dynamicEl[index].srcset;
	            _sizes = _this.s.dynamicEl[index].sizes;

	        } else {

	            if (_this.$items.eq(index).attr('data-poster')) {
	                _hasPoster = true;
	                _poster = _this.$items.eq(index).attr('data-poster');
	            }

	            _html = _this.$items.eq(index).attr('data-html');
	            _src = _this.$items.eq(index).attr('href') || _this.$items.eq(index).attr('data-src');

	            if (_this.$items.eq(index).attr('data-responsive')) {
	                var srcItms = _this.$items.eq(index).attr('data-responsive').split(',');
	                getResponsiveSrc(srcItms);
	            }

	            _srcset = _this.$items.eq(index).attr('data-srcset');
	            _sizes = _this.$items.eq(index).attr('data-sizes');

	        }

	        //if (_src || _srcset || _sizes || _poster) {

	        var iframe = false;
	        if (_this.s.dynamic) {
	            if (_this.s.dynamicEl[index].iframe) {
	                iframe = true;
	            }
	        } else {
	            if (_this.$items.eq(index).attr('data-iframe') === 'true') {
	                iframe = true;
	            }
	        }

	        var _isVideo = _this.isVideo(_src, index);
	        if (!_this.$slide.eq(index).hasClass('lg-loaded')) {
	            if (iframe) {
	                _this.$slide.eq(index).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:' + _this.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + _src + '"  allowfullscreen="true"></iframe></div></div>');
	            } else if (_hasPoster) {
	                var videoClass = '';
	                if (_isVideo && _isVideo.youtube) {
	                    videoClass = 'lg-has-youtube';
	                } else if (_isVideo && _isVideo.vimeo) {
	                    videoClass = 'lg-has-vimeo';
	                } else {
	                    videoClass = 'lg-has-html5';
	                }

	                _this.$slide.eq(index).prepend('<div class="lg-video-cont ' + videoClass + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + _poster + '" /></div></div>');

	            } else if (_isVideo) {
	                _this.$slide.eq(index).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>');
	                _this.$el.trigger('hasVideo.lg', [index, _src, _html]);
	            } else {
	                _this.$slide.eq(index).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + _src + '" /></div>');
	            }

	            _this.$el.trigger('onAferAppendSlide.lg', [index]);

	            _$img = _this.$slide.eq(index).find('.lg-object');
	            if (_sizes) {
	                _$img.attr('sizes', _sizes);
	            }

	            if (_srcset) {
	                _$img.attr('srcset', _srcset);
	                try {
	                    picturefill({
	                        elements: [_$img[0]]
	                    });
	                } catch (e) {
	                    console.warn('lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.');
	                }
	            }

	            if (this.s.appendSubHtmlTo !== '.lg-sub-html') {
	                _this.addHtml(index);
	            }

	            _this.$slide.eq(index).addClass('lg-loaded');
	        }

	        _this.$slide.eq(index).find('.lg-object').on('load.lg error.lg', function() {

	            // For first time add some delay for displaying the start animation.
	            var _speed = 0;

	            // Do not change the delay value because it is required for zoom plugin.
	            // If gallery opened from direct url (hash) speed value should be 0
	            if (delay && !$('body').hasClass('lg-from-hash')) {
	                _speed = delay;
	            }

	            setTimeout(function() {
	                _this.$slide.eq(index).addClass('lg-complete');
	                _this.$el.trigger('onSlideItemLoad.lg', [index, delay || 0]);
	            }, _speed);

	        });

	        // @todo check load state for html5 videos
	        if (_isVideo && _isVideo.html5 && !_hasPoster) {
	            _this.$slide.eq(index).addClass('lg-complete');
	        }

	        if (rec === true) {
	            if (!_this.$slide.eq(index).hasClass('lg-complete')) {
	                _this.$slide.eq(index).find('.lg-object').on('load.lg error.lg', function() {
	                    _this.preload(index);
	                });
	            } else {
	                _this.preload(index);
	            }
	        }

	        //}
	    };

	    /**
	    *   @desc slide function for lightgallery
	        ** Slide() gets call on start
	        ** ** Set lg.on true once slide() function gets called.
	        ** Call loadContent() on slide() function inside setTimeout
	        ** ** On first slide we do not want any animation like slide of fade
	        ** ** So on first slide( if lg.on if false that is first slide) loadContent() should start loading immediately
	        ** ** Else loadContent() should wait for the transition to complete.
	        ** ** So set timeout s.speed + 50
	    <=> ** loadContent() will load slide content in to the particular slide
	        ** ** It has recursion (rec) parameter. if rec === true loadContent() will call preload() function.
	        ** ** preload will execute only when the previous slide is fully loaded (images iframe)
	        ** ** avoid simultaneous image load
	    <=> ** Preload() will check for s.preload value and call loadContent() again accoring to preload value
	        ** loadContent()  <====> Preload();

	    *   @param {Number} index - index of the slide
	    *   @param {Boolean} fromTouch - true if slide function called via touch event or mouse drag
	    *   @param {Boolean} fromThumb - true if slide function called via thumbnail click
	    *   @param {String} direction - Direction of the slide(next/prev)
	    */
	    Plugin.prototype.slide = function(index, fromTouch, fromThumb, direction) {

	        var _prevIndex = this.$outer.find('.lg-current').index();
	        var _this = this;

	        // Prevent if multiple call
	        // Required for hsh plugin
	        if (_this.lGalleryOn && (_prevIndex === index)) {
	            return;
	        }

	        var _length = this.$slide.length;
	        var _time = _this.lGalleryOn ? this.s.speed : 0;

	        if (!_this.lgBusy) {

	            if (this.s.download) {
	                var _src;
	                if (_this.s.dynamic) {
	                    _src = _this.s.dynamicEl[index].downloadUrl !== false && (_this.s.dynamicEl[index].downloadUrl || _this.s.dynamicEl[index].src);
	                } else {
	                    _src = _this.$items.eq(index).attr('data-download-url') !== 'false' && (_this.$items.eq(index).attr('data-download-url') || _this.$items.eq(index).attr('href') || _this.$items.eq(index).attr('data-src'));

	                }

	                if (_src) {
	                    $('#lg-download').attr('href', _src);
	                    _this.$outer.removeClass('lg-hide-download');
	                } else {
	                    _this.$outer.addClass('lg-hide-download');
	                }
	            }

	            this.$el.trigger('onBeforeSlide.lg', [_prevIndex, index, fromTouch, fromThumb]);

	            _this.lgBusy = true;

	            clearTimeout(_this.hideBartimeout);

	            // Add title if this.s.appendSubHtmlTo === lg-sub-html
	            if (this.s.appendSubHtmlTo === '.lg-sub-html') {

	                // wait for slide animation to complete
	                setTimeout(function() {
	                    _this.addHtml(index);
	                }, _time);
	            }

	            this.arrowDisable(index);

	            if (!direction) {
	                if (index < _prevIndex) {
	                    direction = 'prev';
	                } else if (index > _prevIndex) {
	                    direction = 'next';
	                }
	            }

	            if (!fromTouch) {

	                // remove all transitions
	                _this.$outer.addClass('lg-no-trans');

	                this.$slide.removeClass('lg-prev-slide lg-next-slide');

	                if (direction === 'prev') {

	                    //prevslide
	                    this.$slide.eq(index).addClass('lg-prev-slide');
	                    this.$slide.eq(_prevIndex).addClass('lg-next-slide');
	                } else {

	                    // next slide
	                    this.$slide.eq(index).addClass('lg-next-slide');
	                    this.$slide.eq(_prevIndex).addClass('lg-prev-slide');
	                }

	                // give 50 ms for browser to add/remove class
	                setTimeout(function() {
	                    _this.$slide.removeClass('lg-current');

	                    //_this.$slide.eq(_prevIndex).removeClass('lg-current');
	                    _this.$slide.eq(index).addClass('lg-current');

	                    // reset all transitions
	                    _this.$outer.removeClass('lg-no-trans');
	                }, 50);
	            } else {

	                this.$slide.removeClass('lg-prev-slide lg-current lg-next-slide');
	                var touchPrev;
	                var touchNext;
	                if (_length > 2) {
	                    touchPrev = index - 1;
	                    touchNext = index + 1;

	                    if ((index === 0) && (_prevIndex === _length - 1)) {

	                        // next slide
	                        touchNext = 0;
	                        touchPrev = _length - 1;
	                    } else if ((index === _length - 1) && (_prevIndex === 0)) {

	                        // prev slide
	                        touchNext = 0;
	                        touchPrev = _length - 1;
	                    }

	                } else {
	                    touchPrev = 0;
	                    touchNext = 1;
	                }

	                if (direction === 'prev') {
	                    _this.$slide.eq(touchNext).addClass('lg-next-slide');
	                } else {
	                    _this.$slide.eq(touchPrev).addClass('lg-prev-slide');
	                }

	                _this.$slide.eq(index).addClass('lg-current');
	            }

	            if (_this.lGalleryOn) {
	                setTimeout(function() {
	                    _this.loadContent(index, true, 0);
	                }, this.s.speed + 50);

	                setTimeout(function() {
	                    _this.lgBusy = false;
	                    _this.$el.trigger('onAfterSlide.lg', [_prevIndex, index, fromTouch, fromThumb]);
	                }, this.s.speed);

	            } else {
	                _this.loadContent(index, true, _this.s.backdropDuration);

	                _this.lgBusy = false;
	                _this.$el.trigger('onAfterSlide.lg', [_prevIndex, index, fromTouch, fromThumb]);
	            }

	            _this.lGalleryOn = true;

	            if (this.s.counter) {
	                $('#lg-counter-current').text(index + 1);
	            }

	        }
	        _this.index = index;

	    };

	    /**
	     *  @desc Go to next slide
	     *  @param {Boolean} fromTouch - true if slide function called via touch event
	     */
	    Plugin.prototype.goToNextSlide = function(fromTouch) {
	        var _this = this;
	        var _loop = _this.s.loop;
	        if (fromTouch && _this.$slide.length < 3) {
	            _loop = false;
	        }

	        if (!_this.lgBusy) {
	            if ((_this.index + 1) < _this.$slide.length) {
	                _this.index++;
	                _this.$el.trigger('onBeforeNextSlide.lg', [_this.index]);
	                _this.slide(_this.index, fromTouch, false, 'next');
	            } else {
	                if (_loop) {
	                    _this.index = 0;
	                    _this.$el.trigger('onBeforeNextSlide.lg', [_this.index]);
	                    _this.slide(_this.index, fromTouch, false, 'next');
	                } else if (_this.s.slideEndAnimatoin && !fromTouch) {
	                    _this.$outer.addClass('lg-right-end');
	                    setTimeout(function() {
	                        _this.$outer.removeClass('lg-right-end');
	                    }, 400);
	                }
	            }
	        }
	    };

	    /**
	     *  @desc Go to previous slide
	     *  @param {Boolean} fromTouch - true if slide function called via touch event
	     */
	    Plugin.prototype.goToPrevSlide = function(fromTouch) {
	        var _this = this;
	        var _loop = _this.s.loop;
	        if (fromTouch && _this.$slide.length < 3) {
	            _loop = false;
	        }

	        if (!_this.lgBusy) {
	            if (_this.index > 0) {
	                _this.index--;
	                _this.$el.trigger('onBeforePrevSlide.lg', [_this.index, fromTouch]);
	                _this.slide(_this.index, fromTouch, false, 'prev');
	            } else {
	                if (_loop) {
	                    _this.index = _this.$items.length - 1;
	                    _this.$el.trigger('onBeforePrevSlide.lg', [_this.index, fromTouch]);
	                    _this.slide(_this.index, fromTouch, false, 'prev');
	                } else if (_this.s.slideEndAnimatoin && !fromTouch) {
	                    _this.$outer.addClass('lg-left-end');
	                    setTimeout(function() {
	                        _this.$outer.removeClass('lg-left-end');
	                    }, 400);
	                }
	            }
	        }
	    };

	    Plugin.prototype.keyPress = function() {
	        var _this = this;
	        if (this.$items.length > 1) {
	            $(window).on('keyup.lg', function(e) {
	                if (_this.$items.length > 1) {
	                    if (e.keyCode === 37) {
	                        e.preventDefault();
	                        _this.goToPrevSlide();
	                    }

	                    if (e.keyCode === 39) {
	                        e.preventDefault();
	                        _this.goToNextSlide();
	                    }
	                }
	            });
	        }

	        $(window).on('keydown.lg', function(e) {
	            if (_this.s.escKey === true && e.keyCode === 27) {
	                e.preventDefault();
	                if (!_this.$outer.hasClass('lg-thumb-open')) {
	                    _this.destroy();
	                } else {
	                    _this.$outer.removeClass('lg-thumb-open');
	                }
	            }
	        });
	    };

	    Plugin.prototype.arrow = function() {
	        var _this = this;
	        this.$outer.find('.lg-prev').on('click.lg', function() {
	            _this.goToPrevSlide();
	        });

	        this.$outer.find('.lg-next').on('click.lg', function() {
	            _this.goToNextSlide();
	        });
	    };

	    Plugin.prototype.arrowDisable = function(index) {

	        // Disable arrows if s.hideControlOnEnd is true
	        if (!this.s.loop && this.s.hideControlOnEnd) {
	            if ((index + 1) < this.$slide.length) {
	                this.$outer.find('.lg-next').removeAttr('disabled').removeClass('disabled');
	            } else {
	                this.$outer.find('.lg-next').attr('disabled', 'disabled').addClass('disabled');
	            }

	            if (index > 0) {
	                this.$outer.find('.lg-prev').removeAttr('disabled').removeClass('disabled');
	            } else {
	                this.$outer.find('.lg-prev').attr('disabled', 'disabled').addClass('disabled');
	            }
	        }
	    };

	    Plugin.prototype.setTranslate = function($el, xValue, yValue) {
	        // jQuery supports Automatic CSS prefixing since jQuery 1.8.0
	        if (this.s.useLeft) {
	            $el.css('left', xValue);
	        } else {
	            $el.css({
	                transform: 'translate3d(' + (xValue) + 'px, ' + yValue + 'px, 0px)'
	            });
	        }
	    };

	    Plugin.prototype.touchMove = function(startCoords, endCoords) {

	        var distance = endCoords - startCoords;

	        if (Math.abs(distance) > 15) {
	            // reset opacity and transition duration
	            this.$outer.addClass('lg-dragging');

	            // move current slide
	            this.setTranslate(this.$slide.eq(this.index), distance, 0);

	            // move next and prev slide with current slide
	            this.setTranslate($('.lg-prev-slide'), -this.$slide.eq(this.index).width() + distance, 0);
	            this.setTranslate($('.lg-next-slide'), this.$slide.eq(this.index).width() + distance, 0);
	        }
	    };

	    Plugin.prototype.touchEnd = function(distance) {
	        var _this = this;

	        // keep slide animation for any mode while dragg/swipe
	        if (_this.s.mode !== 'lg-slide') {
	            _this.$outer.addClass('lg-slide');
	        }

	        this.$slide.not('.lg-current, .lg-prev-slide, .lg-next-slide').css('opacity', '0');

	        // set transition duration
	        setTimeout(function() {
	            _this.$outer.removeClass('lg-dragging');
	            if ((distance < 0) && (Math.abs(distance) > _this.s.swipeThreshold)) {
	                _this.goToNextSlide(true);
	            } else if ((distance > 0) && (Math.abs(distance) > _this.s.swipeThreshold)) {
	                _this.goToPrevSlide(true);
	            } else if (Math.abs(distance) < 5) {

	                // Trigger click if distance is less than 5 pix
	                _this.$el.trigger('onSlideClick.lg');
	            }

	            _this.$slide.removeAttr('style');
	        });

	        // remove slide class once drag/swipe is completed if mode is not slide
	        setTimeout(function() {
	            if (!_this.$outer.hasClass('lg-dragging') && _this.s.mode !== 'lg-slide') {
	                _this.$outer.removeClass('lg-slide');
	            }
	        }, _this.s.speed + 100);

	    };

	    Plugin.prototype.enableSwipe = function() {
	        var _this = this;
	        var startCoords = 0;
	        var endCoords = 0;
	        var isMoved = false;

	        if (_this.s.enableSwipe && _this.doCss()) {

	            _this.$slide.on('touchstart.lg', function(e) {
	                if (!_this.$outer.hasClass('lg-zoomed') && !_this.lgBusy) {
	                    e.preventDefault();
	                    _this.manageSwipeClass();
	                    startCoords = e.originalEvent.targetTouches[0].pageX;
	                }
	            });

	            _this.$slide.on('touchmove.lg', function(e) {
	                if (!_this.$outer.hasClass('lg-zoomed')) {
	                    e.preventDefault();
	                    endCoords = e.originalEvent.targetTouches[0].pageX;
	                    _this.touchMove(startCoords, endCoords);
	                    isMoved = true;
	                }
	            });

	            _this.$slide.on('touchend.lg', function() {
	                if (!_this.$outer.hasClass('lg-zoomed')) {
	                    if (isMoved) {
	                        isMoved = false;
	                        _this.touchEnd(endCoords - startCoords);
	                    } else {
	                        _this.$el.trigger('onSlideClick.lg');
	                    }
	                }
	            });
	        }

	    };

	    Plugin.prototype.enableDrag = function() {
	        var _this = this;
	        var startCoords = 0;
	        var endCoords = 0;
	        var isDraging = false;
	        var isMoved = false;
	        if (_this.s.enableDrag && _this.doCss()) {
	            _this.$slide.on('mousedown.lg', function(e) {
	                if (!_this.$outer.hasClass('lg-zoomed') && !_this.lgBusy && !$(e.target).text().trim()) {
	                    e.preventDefault();
	                    _this.manageSwipeClass();
	                    startCoords = e.pageX;
	                    isDraging = true;

	                    // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
	                    _this.$outer.scrollLeft += 1;
	                    _this.$outer.scrollLeft -= 1;

	                    // *

	                    _this.$outer.removeClass('lg-grab').addClass('lg-grabbing');

	                    _this.$el.trigger('onDragstart.lg');
	                }
	            });

	            $(window).on('mousemove.lg', function(e) {
	                if (isDraging) {
	                    isMoved = true;
	                    endCoords = e.pageX;
	                    _this.touchMove(startCoords, endCoords);
	                    _this.$el.trigger('onDragmove.lg');
	                }
	            });

	            $(window).on('mouseup.lg', function(e) {
	                if (isMoved) {
	                    isMoved = false;
	                    _this.touchEnd(endCoords - startCoords);
	                    _this.$el.trigger('onDragend.lg');
	                } else if ($(e.target).hasClass('lg-object') || $(e.target).hasClass('lg-video-play')) {
	                    _this.$el.trigger('onSlideClick.lg');
	                }

	                // Prevent execution on click
	                if (isDraging) {
	                    isDraging = false;
	                    _this.$outer.removeClass('lg-grabbing').addClass('lg-grab');
	                }
	            });

	        }
	    };

	    Plugin.prototype.manageSwipeClass = function() {
	        var _touchNext = this.index + 1;
	        var _touchPrev = this.index - 1;
	        if (this.s.loop && this.$slide.length > 2) {
	            if (this.index === 0) {
	                _touchPrev = this.$slide.length - 1;
	            } else if (this.index === this.$slide.length - 1) {
	                _touchNext = 0;
	            }
	        }

	        this.$slide.removeClass('lg-next-slide lg-prev-slide');
	        if (_touchPrev > -1) {
	            this.$slide.eq(_touchPrev).addClass('lg-prev-slide');
	        }

	        this.$slide.eq(_touchNext).addClass('lg-next-slide');
	    };

	    Plugin.prototype.mousewheel = function() {
	        var _this = this;
	        _this.$outer.on('mousewheel.lg', function(e) {

	            if (!e.deltaY) {
	                return;
	            }

	            if (e.deltaY > 0) {
	                _this.goToPrevSlide();
	            } else {
	                _this.goToNextSlide();
	            }

	            e.preventDefault();
	        });

	    };

	    Plugin.prototype.closeGallery = function() {

	        var _this = this;
	        var mousedown = false;
	        this.$outer.find('.lg-close').on('click.lg', function() {
	            _this.destroy();
	        });

	        if (_this.s.closable) {

	            // If you drag the slide and release outside gallery gets close on chrome
	            // for preventing this check mousedown and mouseup happened on .lg-item or lg-outer
	            _this.$outer.on('mousedown.lg', function(e) {

	                if ($(e.target).is('.lg-outer') || $(e.target).is('.lg-item ') || $(e.target).is('.lg-img-wrap')) {
	                    mousedown = true;
	                } else {
	                    mousedown = false;
	                }

	            });
	            
	            _this.$outer.on('mousemove.lg', function() {
	                mousedown = false;
	            });

	            _this.$outer.on('mouseup.lg', function(e) {

	                if ($(e.target).is('.lg-outer') || $(e.target).is('.lg-item ') || $(e.target).is('.lg-img-wrap') && mousedown) {
	                    if (!_this.$outer.hasClass('lg-dragging')) {
	                        _this.destroy();
	                    }
	                }

	            });

	        }

	    };

	    Plugin.prototype.destroy = function(d) {

	        var _this = this;

	        if (!d) {
	            _this.$el.trigger('onBeforeClose.lg');
	            $(window).scrollTop(_this.prevScrollTop);
	        }


	        /**
	         * if d is false or undefined destroy will only close the gallery
	         * plugins instance remains with the element
	         *
	         * if d is true destroy will completely remove the plugin
	         */

	        if (d) {
	            if (!_this.s.dynamic) {
	                // only when not using dynamic mode is $items a jquery collection
	                this.$items.off('click.lg click.lgcustom');
	            }

	            $.removeData(_this.el, 'lightGallery');
	        }

	        // Unbind all events added by lightGallery
	        this.$el.off('.lg.tm');

	        // Distroy all lightGallery modules
	        $.each($.fn.lightGallery.modules, function(key) {
	            if (_this.modules[key]) {
	                _this.modules[key].destroy();
	            }
	        });

	        this.lGalleryOn = false;

	        clearTimeout(_this.hideBartimeout);
	        this.hideBartimeout = false;
	        $(window).off('.lg');
	        $('body').removeClass('lg-on lg-from-hash');

	        if (_this.$outer) {
	            _this.$outer.removeClass('lg-visible');
	        }

	        $('.lg-backdrop').removeClass('in');

	        setTimeout(function() {
	            if (_this.$outer) {
	                _this.$outer.remove();
	            }

	            $('.lg-backdrop').remove();

	            if (!d) {
	                _this.$el.trigger('onCloseAfter.lg');
	            }

	        }, _this.s.backdropDuration + 50);
	    };

	    $.fn.lightGallery = function(options) {
	        return this.each(function() {
	            if (!$.data(this, 'lightGallery')) {
	                $.data(this, 'lightGallery', new Plugin(this, options));
	            } else {
	                try {
	                    $(this).data('lightGallery').init();
	                } catch (err) {
	                    console.error('lightGallery has not initiated properly');
	                }
	            }
	        });
	    };

	    $.fn.lightGallery.modules = {};

	})();


	}));


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var $ = __webpack_require__(1);
	__webpack_require__(27);
	__webpack_require__(28);
	__webpack_require__(29);
	__webpack_require__(30);

	module.exports = function() {
	  $('.popup-btn').each(function(index, obj) {
	    var $this = $(obj);

	    var settings = {};

	    settings.type = 'inline';
	    if ($this.data('type') !== '') {
	      settings.type = $this.data('type');
	    }

	    if (settings.type == 'inline') {
	      var slider = $($this.data('mfp-src')).find('.slick-slider');

	      if (slider.length) {
	        settings.callbacks = {
	          open: function() {
	            slider.slick();
	          }
	        };
	      }
	    }

	    $this.magnificPopup(settings);
	  });
	};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

	/*! Magnific Popup - v1.1.0 - 2016-02-20
	* http://dimsemenov.com/plugins/magnific-popup/
	* Copyright (c) 2016 Dmitry Semenov; */
	;(function (factory) { 
	if (typeof define === 'function' && define.amd) { 
	 // AMD. Register as an anonymous module. 
	 define(['jquery'], factory); 
	 } else if (typeof exports === 'object') { 
	 // Node/CommonJS 
	 factory(require('jquery')); 
	 } else { 
	 // Browser globals 
	 factory(window.jQuery || window.Zepto); 
	 } 
	 }(function($) { 

	/*>>core*/
	/**
	 * 
	 * Magnific Popup Core JS file
	 * 
	 */


	/**
	 * Private static constants
	 */
	var CLOSE_EVENT = 'Close',
		BEFORE_CLOSE_EVENT = 'BeforeClose',
		AFTER_CLOSE_EVENT = 'AfterClose',
		BEFORE_APPEND_EVENT = 'BeforeAppend',
		MARKUP_PARSE_EVENT = 'MarkupParse',
		OPEN_EVENT = 'Open',
		CHANGE_EVENT = 'Change',
		NS = 'mfp',
		EVENT_NS = '.' + NS,
		READY_CLASS = 'mfp-ready',
		REMOVING_CLASS = 'mfp-removing',
		PREVENT_CLOSE_CLASS = 'mfp-prevent-close';


	/**
	 * Private vars 
	 */
	/*jshint -W079 */
	var mfp, // As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'
		MagnificPopup = function(){},
		_isJQ = !!(window.jQuery),
		_prevStatus,
		_window = $(window),
		_document,
		_prevContentType,
		_wrapClasses,
		_currPopupType;


	/**
	 * Private functions
	 */
	var _mfpOn = function(name, f) {
			mfp.ev.on(NS + name + EVENT_NS, f);
		},
		_getEl = function(className, appendTo, html, raw) {
			var el = document.createElement('div');
			el.className = 'mfp-'+className;
			if(html) {
				el.innerHTML = html;
			}
			if(!raw) {
				el = $(el);
				if(appendTo) {
					el.appendTo(appendTo);
				}
			} else if(appendTo) {
				appendTo.appendChild(el);
			}
			return el;
		},
		_mfpTrigger = function(e, data) {
			mfp.ev.triggerHandler(NS + e, data);

			if(mfp.st.callbacks) {
				// converts "mfpEventName" to "eventName" callback and triggers it if it's present
				e = e.charAt(0).toLowerCase() + e.slice(1);
				if(mfp.st.callbacks[e]) {
					mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
				}
			}
		},
		_getCloseBtn = function(type) {
			if(type !== _currPopupType || !mfp.currTemplate.closeBtn) {
				mfp.currTemplate.closeBtn = $( mfp.st.closeMarkup.replace('%title%', mfp.st.tClose ) );
				_currPopupType = type;
			}
			return mfp.currTemplate.closeBtn;
		},
		// Initialize Magnific Popup only when called at least once
		_checkInstance = function() {
			if(!$.magnificPopup.instance) {
				/*jshint -W020 */
				mfp = new MagnificPopup();
				mfp.init();
				$.magnificPopup.instance = mfp;
			}
		},
		// CSS transition detection, http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
		supportsTransitions = function() {
			var s = document.createElement('p').style, // 's' for style. better to create an element if body yet to exist
				v = ['ms','O','Moz','Webkit']; // 'v' for vendor

			if( s['transition'] !== undefined ) {
				return true; 
			}
				
			while( v.length ) {
				if( v.pop() + 'Transition' in s ) {
					return true;
				}
			}
					
			return false;
		};



	/**
	 * Public functions
	 */
	MagnificPopup.prototype = {

		constructor: MagnificPopup,

		/**
		 * Initializes Magnific Popup plugin. 
		 * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed
		 */
		init: function() {
			var appVersion = navigator.appVersion;
			mfp.isLowIE = mfp.isIE8 = document.all && !document.addEventListener;
			mfp.isAndroid = (/android/gi).test(appVersion);
			mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
			mfp.supportsTransition = supportsTransitions();

			// We disable fixed positioned lightbox on devices that don't handle it nicely.
			// If you know a better way of detecting this - let me know.
			mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent) );
			_document = $(document);

			mfp.popupsCache = {};
		},

		/**
		 * Opens popup
		 * @param  data [description]
		 */
		open: function(data) {

			var i;

			if(data.isObj === false) { 
				// convert jQuery collection to array to avoid conflicts later
				mfp.items = data.items.toArray();

				mfp.index = 0;
				var items = data.items,
					item;
				for(i = 0; i < items.length; i++) {
					item = items[i];
					if(item.parsed) {
						item = item.el[0];
					}
					if(item === data.el[0]) {
						mfp.index = i;
						break;
					}
				}
			} else {
				mfp.items = $.isArray(data.items) ? data.items : [data.items];
				mfp.index = data.index || 0;
			}

			// if popup is already opened - we just update the content
			if(mfp.isOpen) {
				mfp.updateItemHTML();
				return;
			}
			
			mfp.types = []; 
			_wrapClasses = '';
			if(data.mainEl && data.mainEl.length) {
				mfp.ev = data.mainEl.eq(0);
			} else {
				mfp.ev = _document;
			}

			if(data.key) {
				if(!mfp.popupsCache[data.key]) {
					mfp.popupsCache[data.key] = {};
				}
				mfp.currTemplate = mfp.popupsCache[data.key];
			} else {
				mfp.currTemplate = {};
			}



			mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data ); 
			mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;

			if(mfp.st.modal) {
				mfp.st.closeOnContentClick = false;
				mfp.st.closeOnBgClick = false;
				mfp.st.showCloseBtn = false;
				mfp.st.enableEscapeKey = false;
			}
			

			// Building markup
			// main containers are created only once
			if(!mfp.bgOverlay) {

				// Dark overlay
				mfp.bgOverlay = _getEl('bg').on('click'+EVENT_NS, function() {
					mfp.close();
				});

				mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click'+EVENT_NS, function(e) {
					if(mfp._checkIfClose(e.target)) {
						mfp.close();
					}
				});

				mfp.container = _getEl('container', mfp.wrap);
			}

			mfp.contentContainer = _getEl('content');
			if(mfp.st.preloader) {
				mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
			}


			// Initializing modules
			var modules = $.magnificPopup.modules;
			for(i = 0; i < modules.length; i++) {
				var n = modules[i];
				n = n.charAt(0).toUpperCase() + n.slice(1);
				mfp['init'+n].call(mfp);
			}
			_mfpTrigger('BeforeOpen');


			if(mfp.st.showCloseBtn) {
				// Close button
				if(!mfp.st.closeBtnInside) {
					mfp.wrap.append( _getCloseBtn() );
				} else {
					_mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) {
						values.close_replaceWith = _getCloseBtn(item.type);
					});
					_wrapClasses += ' mfp-close-btn-in';
				}
			}

			if(mfp.st.alignTop) {
				_wrapClasses += ' mfp-align-top';
			}

		

			if(mfp.fixedContentPos) {
				mfp.wrap.css({
					overflow: mfp.st.overflowY,
					overflowX: 'hidden',
					overflowY: mfp.st.overflowY
				});
			} else {
				mfp.wrap.css({ 
					top: _window.scrollTop(),
					position: 'absolute'
				});
			}
			if( mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos) ) {
				mfp.bgOverlay.css({
					height: _document.height(),
					position: 'absolute'
				});
			}

			

			if(mfp.st.enableEscapeKey) {
				// Close on ESC key
				_document.on('keyup' + EVENT_NS, function(e) {
					if(e.keyCode === 27) {
						mfp.close();
					}
				});
			}

			_window.on('resize' + EVENT_NS, function() {
				mfp.updateSize();
			});


			if(!mfp.st.closeOnContentClick) {
				_wrapClasses += ' mfp-auto-cursor';
			}
			
			if(_wrapClasses)
				mfp.wrap.addClass(_wrapClasses);


			// this triggers recalculation of layout, so we get it once to not to trigger twice
			var windowHeight = mfp.wH = _window.height();

			
			var windowStyles = {};

			if( mfp.fixedContentPos ) {
	            if(mfp._hasScrollBar(windowHeight)){
	                var s = mfp._getScrollbarSize();
	                if(s) {
	                    windowStyles.marginRight = s;
	                }
	            }
	        }

			if(mfp.fixedContentPos) {
				if(!mfp.isIE7) {
					windowStyles.overflow = 'hidden';
				} else {
					// ie7 double-scroll bug
					$('body, html').css('overflow', 'hidden');
				}
			}

			
			
			var classesToadd = mfp.st.mainClass;
			if(mfp.isIE7) {
				classesToadd += ' mfp-ie7';
			}
			if(classesToadd) {
				mfp._addClassToMFP( classesToadd );
			}

			// add content
			mfp.updateItemHTML();

			_mfpTrigger('BuildControls');

			// remove scrollbar, add margin e.t.c
			$('html').css(windowStyles);
			
			// add everything to DOM
			mfp.bgOverlay.add(mfp.wrap).prependTo( mfp.st.prependTo || $(document.body) );

			// Save last focused element
			mfp._lastFocusedEl = document.activeElement;
			
			// Wait for next cycle to allow CSS transition
			setTimeout(function() {
				
				if(mfp.content) {
					mfp._addClassToMFP(READY_CLASS);
					mfp._setFocus();
				} else {
					// if content is not defined (not loaded e.t.c) we add class only for BG
					mfp.bgOverlay.addClass(READY_CLASS);
				}
				
				// Trap the focus in popup
				_document.on('focusin' + EVENT_NS, mfp._onFocusIn);

			}, 16);

			mfp.isOpen = true;
			mfp.updateSize(windowHeight);
			_mfpTrigger(OPEN_EVENT);

			return data;
		},

		/**
		 * Closes the popup
		 */
		close: function() {
			if(!mfp.isOpen) return;
			_mfpTrigger(BEFORE_CLOSE_EVENT);

			mfp.isOpen = false;
			// for CSS3 animation
			if(mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition )  {
				mfp._addClassToMFP(REMOVING_CLASS);
				setTimeout(function() {
					mfp._close();
				}, mfp.st.removalDelay);
			} else {
				mfp._close();
			}
		},

		/**
		 * Helper for close() function
		 */
		_close: function() {
			_mfpTrigger(CLOSE_EVENT);

			var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';

			mfp.bgOverlay.detach();
			mfp.wrap.detach();
			mfp.container.empty();

			if(mfp.st.mainClass) {
				classesToRemove += mfp.st.mainClass + ' ';
			}

			mfp._removeClassFromMFP(classesToRemove);

			if(mfp.fixedContentPos) {
				var windowStyles = {marginRight: ''};
				if(mfp.isIE7) {
					$('body, html').css('overflow', '');
				} else {
					windowStyles.overflow = '';
				}
				$('html').css(windowStyles);
			}
			
			_document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
			mfp.ev.off(EVENT_NS);

			// clean up DOM elements that aren't removed
			mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
			mfp.bgOverlay.attr('class', 'mfp-bg');
			mfp.container.attr('class', 'mfp-container');

			// remove close button from target element
			if(mfp.st.showCloseBtn &&
			(!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
				if(mfp.currTemplate.closeBtn)
					mfp.currTemplate.closeBtn.detach();
			}


			if(mfp.st.autoFocusLast && mfp._lastFocusedEl) {
				$(mfp._lastFocusedEl).focus(); // put tab focus back
			}
			mfp.currItem = null;	
			mfp.content = null;
			mfp.currTemplate = null;
			mfp.prevHeight = 0;

			_mfpTrigger(AFTER_CLOSE_EVENT);
		},
		
		updateSize: function(winHeight) {

			if(mfp.isIOS) {
				// fixes iOS nav bars https://github.com/dimsemenov/Magnific-Popup/issues/2
				var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
				var height = window.innerHeight * zoomLevel;
				mfp.wrap.css('height', height);
				mfp.wH = height;
			} else {
				mfp.wH = winHeight || _window.height();
			}
			// Fixes #84: popup incorrectly positioned with position:relative on body
			if(!mfp.fixedContentPos) {
				mfp.wrap.css('height', mfp.wH);
			}

			_mfpTrigger('Resize');

		},

		/**
		 * Set content of popup based on current index
		 */
		updateItemHTML: function() {
			var item = mfp.items[mfp.index];

			// Detach and perform modifications
			mfp.contentContainer.detach();

			if(mfp.content)
				mfp.content.detach();

			if(!item.parsed) {
				item = mfp.parseEl( mfp.index );
			}

			var type = item.type;

			_mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
			// BeforeChange event works like so:
			// _mfpOn('BeforeChange', function(e, prevType, newType) { });

			mfp.currItem = item;

			if(!mfp.currTemplate[type]) {
				var markup = mfp.st[type] ? mfp.st[type].markup : false;

				// allows to modify markup
				_mfpTrigger('FirstMarkupParse', markup);

				if(markup) {
					mfp.currTemplate[type] = $(markup);
				} else {
					// if there is no markup found we just define that template is parsed
					mfp.currTemplate[type] = true;
				}
			}

			if(_prevContentType && _prevContentType !== item.type) {
				mfp.container.removeClass('mfp-'+_prevContentType+'-holder');
			}

			var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
			mfp.appendContent(newContent, type);

			item.preloaded = true;

			_mfpTrigger(CHANGE_EVENT, item);
			_prevContentType = item.type;

			// Append container back after its content changed
			mfp.container.prepend(mfp.contentContainer);

			_mfpTrigger('AfterChange');
		},


		/**
		 * Set HTML content of popup
		 */
		appendContent: function(newContent, type) {
			mfp.content = newContent;

			if(newContent) {
				if(mfp.st.showCloseBtn && mfp.st.closeBtnInside &&
					mfp.currTemplate[type] === true) {
					// if there is no markup, we just append close button element inside
					if(!mfp.content.find('.mfp-close').length) {
						mfp.content.append(_getCloseBtn());
					}
				} else {
					mfp.content = newContent;
				}
			} else {
				mfp.content = '';
			}

			_mfpTrigger(BEFORE_APPEND_EVENT);
			mfp.container.addClass('mfp-'+type+'-holder');

			mfp.contentContainer.append(mfp.content);
		},


		/**
		 * Creates Magnific Popup data object based on given data
		 * @param  {int} index Index of item to parse
		 */
		parseEl: function(index) {
			var item = mfp.items[index],
				type;

			if(item.tagName) {
				item = { el: $(item) };
			} else {
				type = item.type;
				item = { data: item, src: item.src };
			}

			if(item.el) {
				var types = mfp.types;

				// check for 'mfp-TYPE' class
				for(var i = 0; i < types.length; i++) {
					if( item.el.hasClass('mfp-'+types[i]) ) {
						type = types[i];
						break;
					}
				}

				item.src = item.el.attr('data-mfp-src');
				if(!item.src) {
					item.src = item.el.attr('href');
				}
			}

			item.type = type || mfp.st.type || 'inline';
			item.index = index;
			item.parsed = true;
			mfp.items[index] = item;
			_mfpTrigger('ElementParse', item);

			return mfp.items[index];
		},


		/**
		 * Initializes single popup or a group of popups
		 */
		addGroup: function(el, options) {
			var eHandler = function(e) {
				e.mfpEl = this;
				mfp._openClick(e, el, options);
			};

			if(!options) {
				options = {};
			}

			var eName = 'click.magnificPopup';
			options.mainEl = el;

			if(options.items) {
				options.isObj = true;
				el.off(eName).on(eName, eHandler);
			} else {
				options.isObj = false;
				if(options.delegate) {
					el.off(eName).on(eName, options.delegate , eHandler);
				} else {
					options.items = el;
					el.off(eName).on(eName, eHandler);
				}
			}
		},
		_openClick: function(e, el, options) {
			var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;


			if(!midClick && ( e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey ) ) {
				return;
			}

			var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;

			if(disableOn) {
				if($.isFunction(disableOn)) {
					if( !disableOn.call(mfp) ) {
						return true;
					}
				} else { // else it's number
					if( _window.width() < disableOn ) {
						return true;
					}
				}
			}

			if(e.type) {
				e.preventDefault();

				// This will prevent popup from closing if element is inside and popup is already opened
				if(mfp.isOpen) {
					e.stopPropagation();
				}
			}

			options.el = $(e.mfpEl);
			if(options.delegate) {
				options.items = el.find(options.delegate);
			}
			mfp.open(options);
		},


		/**
		 * Updates text on preloader
		 */
		updateStatus: function(status, text) {

			if(mfp.preloader) {
				if(_prevStatus !== status) {
					mfp.container.removeClass('mfp-s-'+_prevStatus);
				}

				if(!text && status === 'loading') {
					text = mfp.st.tLoading;
				}

				var data = {
					status: status,
					text: text
				};
				// allows to modify status
				_mfpTrigger('UpdateStatus', data);

				status = data.status;
				text = data.text;

				mfp.preloader.html(text);

				mfp.preloader.find('a').on('click', function(e) {
					e.stopImmediatePropagation();
				});

				mfp.container.addClass('mfp-s-'+status);
				_prevStatus = status;
			}
		},


		/*
			"Private" helpers that aren't private at all
		 */
		// Check to close popup or not
		// "target" is an element that was clicked
		_checkIfClose: function(target) {

			if($(target).hasClass(PREVENT_CLOSE_CLASS)) {
				return;
			}

			var closeOnContent = mfp.st.closeOnContentClick;
			var closeOnBg = mfp.st.closeOnBgClick;

			if(closeOnContent && closeOnBg) {
				return true;
			} else {

				// We close the popup if click is on close button or on preloader. Or if there is no content.
				if(!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0]) ) {
					return true;
				}

				// if click is outside the content
				if(  (target !== mfp.content[0] && !$.contains(mfp.content[0], target))  ) {
					if(closeOnBg) {
						// last check, if the clicked element is in DOM, (in case it's removed onclick)
						if( $.contains(document, target) ) {
							return true;
						}
					}
				} else if(closeOnContent) {
					return true;
				}

			}
			return false;
		},
		_addClassToMFP: function(cName) {
			mfp.bgOverlay.addClass(cName);
			mfp.wrap.addClass(cName);
		},
		_removeClassFromMFP: function(cName) {
			this.bgOverlay.removeClass(cName);
			mfp.wrap.removeClass(cName);
		},
		_hasScrollBar: function(winHeight) {
			return (  (mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()) );
		},
		_setFocus: function() {
			(mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
		},
		_onFocusIn: function(e) {
			if( e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target) ) {
				mfp._setFocus();
				return false;
			}
		},
		_parseMarkup: function(template, values, item) {
			var arr;
			if(item.data) {
				values = $.extend(item.data, values);
			}
			_mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item] );

			$.each(values, function(key, value) {
				if(value === undefined || value === false) {
					return true;
				}
				arr = key.split('_');
				if(arr.length > 1) {
					var el = template.find(EVENT_NS + '-'+arr[0]);

					if(el.length > 0) {
						var attr = arr[1];
						if(attr === 'replaceWith') {
							if(el[0] !== value[0]) {
								el.replaceWith(value);
							}
						} else if(attr === 'img') {
							if(el.is('img')) {
								el.attr('src', value);
							} else {
								el.replaceWith( $('<img>').attr('src', value).attr('class', el.attr('class')) );
							}
						} else {
							el.attr(arr[1], value);
						}
					}

				} else {
					template.find(EVENT_NS + '-'+key).html(value);
				}
			});
		},

		_getScrollbarSize: function() {
			// thx David
			if(mfp.scrollbarSize === undefined) {
				var scrollDiv = document.createElement("div");
				scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
				document.body.appendChild(scrollDiv);
				mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
				document.body.removeChild(scrollDiv);
			}
			return mfp.scrollbarSize;
		}

	}; /* MagnificPopup core prototype end */




	/**
	 * Public static functions
	 */
	$.magnificPopup = {
		instance: null,
		proto: MagnificPopup.prototype,
		modules: [],

		open: function(options, index) {
			_checkInstance();

			if(!options) {
				options = {};
			} else {
				options = $.extend(true, {}, options);
			}

			options.isObj = true;
			options.index = index || 0;
			return this.instance.open(options);
		},

		close: function() {
			return $.magnificPopup.instance && $.magnificPopup.instance.close();
		},

		registerModule: function(name, module) {
			if(module.options) {
				$.magnificPopup.defaults[name] = module.options;
			}
			$.extend(this.proto, module.proto);
			this.modules.push(name);
		},

		defaults: {

			// Info about options is in docs:
			// http://dimsemenov.com/plugins/magnific-popup/documentation.html#options

			disableOn: 0,

			key: null,

			midClick: false,

			mainClass: '',

			preloader: true,

			focus: '', // CSS selector of input to focus after popup is opened

			closeOnContentClick: false,

			closeOnBgClick: true,

			closeBtnInside: true,

			showCloseBtn: true,

			enableEscapeKey: true,

			modal: false,

			alignTop: false,

			removalDelay: 0,

			prependTo: null,

			fixedContentPos: 'auto',

			fixedBgPos: 'auto',

			overflowY: 'auto',

			closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',

			tClose: 'Close (Esc)',

			tLoading: 'Loading...',

			autoFocusLast: true

		}
	};



	$.fn.magnificPopup = function(options) {
		_checkInstance();

		var jqEl = $(this);

		// We call some API method of first param is a string
		if (typeof options === "string" ) {

			if(options === 'open') {
				var items,
					itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
					index = parseInt(arguments[1], 10) || 0;

				if(itemOpts.items) {
					items = itemOpts.items[index];
				} else {
					items = jqEl;
					if(itemOpts.delegate) {
						items = items.find(itemOpts.delegate);
					}
					items = items.eq( index );
				}
				mfp._openClick({mfpEl:items}, jqEl, itemOpts);
			} else {
				if(mfp.isOpen)
					mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
			}

		} else {
			// clone options obj
			options = $.extend(true, {}, options);

			/*
			 * As Zepto doesn't support .data() method for objects
			 * and it works only in normal browsers
			 * we assign "options" object directly to the DOM element. FTW!
			 */
			if(_isJQ) {
				jqEl.data('magnificPopup', options);
			} else {
				jqEl[0].magnificPopup = options;
			}

			mfp.addGroup(jqEl, options);

		}
		return jqEl;
	};

	/*>>core*/

	/*>>inline*/

	var INLINE_NS = 'inline',
		_hiddenClass,
		_inlinePlaceholder,
		_lastInlineElement,
		_putInlineElementsBack = function() {
			if(_lastInlineElement) {
				_inlinePlaceholder.after( _lastInlineElement.addClass(_hiddenClass) ).detach();
				_lastInlineElement = null;
			}
		};

	$.magnificPopup.registerModule(INLINE_NS, {
		options: {
			hiddenClass: 'hide', // will be appended with `mfp-` prefix
			markup: '',
			tNotFound: 'Content not found'
		},
		proto: {

			initInline: function() {
				mfp.types.push(INLINE_NS);

				_mfpOn(CLOSE_EVENT+'.'+INLINE_NS, function() {
					_putInlineElementsBack();
				});
			},

			getInline: function(item, template) {

				_putInlineElementsBack();

				if(item.src) {
					var inlineSt = mfp.st.inline,
						el = $(item.src);

					if(el.length) {

						// If target element has parent - we replace it with placeholder and put it back after popup is closed
						var parent = el[0].parentNode;
						if(parent && parent.tagName) {
							if(!_inlinePlaceholder) {
								_hiddenClass = inlineSt.hiddenClass;
								_inlinePlaceholder = _getEl(_hiddenClass);
								_hiddenClass = 'mfp-'+_hiddenClass;
							}
							// replace target inline element with placeholder
							_lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
						}

						mfp.updateStatus('ready');
					} else {
						mfp.updateStatus('error', inlineSt.tNotFound);
						el = $('<div>');
					}

					item.inlineElement = el;
					return el;
				}

				mfp.updateStatus('ready');
				mfp._parseMarkup(template, {}, item);
				return template;
			}
		}
	});

	/*>>inline*/

	/*>>ajax*/
	var AJAX_NS = 'ajax',
		_ajaxCur,
		_removeAjaxCursor = function() {
			if(_ajaxCur) {
				$(document.body).removeClass(_ajaxCur);
			}
		},
		_destroyAjaxRequest = function() {
			_removeAjaxCursor();
			if(mfp.req) {
				mfp.req.abort();
			}
		};

	$.magnificPopup.registerModule(AJAX_NS, {

		options: {
			settings: null,
			cursor: 'mfp-ajax-cur',
			tError: '<a href="%url%">The content</a> could not be loaded.'
		},

		proto: {
			initAjax: function() {
				mfp.types.push(AJAX_NS);
				_ajaxCur = mfp.st.ajax.cursor;

				_mfpOn(CLOSE_EVENT+'.'+AJAX_NS, _destroyAjaxRequest);
				_mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
			},
			getAjax: function(item) {

				if(_ajaxCur) {
					$(document.body).addClass(_ajaxCur);
				}

				mfp.updateStatus('loading');

				var opts = $.extend({
					url: item.src,
					success: function(data, textStatus, jqXHR) {
						var temp = {
							data:data,
							xhr:jqXHR
						};

						_mfpTrigger('ParseAjax', temp);

						mfp.appendContent( $(temp.data), AJAX_NS );

						item.finished = true;

						_removeAjaxCursor();

						mfp._setFocus();

						setTimeout(function() {
							mfp.wrap.addClass(READY_CLASS);
						}, 16);

						mfp.updateStatus('ready');

						_mfpTrigger('AjaxContentAdded');
					},
					error: function() {
						_removeAjaxCursor();
						item.finished = item.loadError = true;
						mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
					}
				}, mfp.st.ajax.settings);

				mfp.req = $.ajax(opts);

				return '';
			}
		}
	});

	/*>>ajax*/

	/*>>image*/
	var _imgInterval,
		_getTitle = function(item) {
			if(item.data && item.data.title !== undefined)
				return item.data.title;

			var src = mfp.st.image.titleSrc;

			if(src) {
				if($.isFunction(src)) {
					return src.call(mfp, item);
				} else if(item.el) {
					return item.el.attr(src) || '';
				}
			}
			return '';
		};

	$.magnificPopup.registerModule('image', {

		options: {
			markup: '<div class="mfp-figure">'+
						'<div class="mfp-close"></div>'+
						'<figure>'+
							'<div class="mfp-img"></div>'+
							'<figcaption>'+
								'<div class="mfp-bottom-bar">'+
									'<div class="mfp-title"></div>'+
									'<div class="mfp-counter"></div>'+
								'</div>'+
							'</figcaption>'+
						'</figure>'+
					'</div>',
			cursor: 'mfp-zoom-out-cur',
			titleSrc: 'title',
			verticalFit: true,
			tError: '<a href="%url%">The image</a> could not be loaded.'
		},

		proto: {
			initImage: function() {
				var imgSt = mfp.st.image,
					ns = '.image';

				mfp.types.push('image');

				_mfpOn(OPEN_EVENT+ns, function() {
					if(mfp.currItem.type === 'image' && imgSt.cursor) {
						$(document.body).addClass(imgSt.cursor);
					}
				});

				_mfpOn(CLOSE_EVENT+ns, function() {
					if(imgSt.cursor) {
						$(document.body).removeClass(imgSt.cursor);
					}
					_window.off('resize' + EVENT_NS);
				});

				_mfpOn('Resize'+ns, mfp.resizeImage);
				if(mfp.isLowIE) {
					_mfpOn('AfterChange', mfp.resizeImage);
				}
			},
			resizeImage: function() {
				var item = mfp.currItem;
				if(!item || !item.img) return;

				if(mfp.st.image.verticalFit) {
					var decr = 0;
					// fix box-sizing in ie7/8
					if(mfp.isLowIE) {
						decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'),10);
					}
					item.img.css('max-height', mfp.wH-decr);
				}
			},
			_onImageHasSize: function(item) {
				if(item.img) {

					item.hasSize = true;

					if(_imgInterval) {
						clearInterval(_imgInterval);
					}

					item.isCheckingImgSize = false;

					_mfpTrigger('ImageHasSize', item);

					if(item.imgHidden) {
						if(mfp.content)
							mfp.content.removeClass('mfp-loading');

						item.imgHidden = false;
					}

				}
			},

			/**
			 * Function that loops until the image has size to display elements that rely on it asap
			 */
			findImageSize: function(item) {

				var counter = 0,
					img = item.img[0],
					mfpSetInterval = function(delay) {

						if(_imgInterval) {
							clearInterval(_imgInterval);
						}
						// decelerating interval that checks for size of an image
						_imgInterval = setInterval(function() {
							if(img.naturalWidth > 0) {
								mfp._onImageHasSize(item);
								return;
							}

							if(counter > 200) {
								clearInterval(_imgInterval);
							}

							counter++;
							if(counter === 3) {
								mfpSetInterval(10);
							} else if(counter === 40) {
								mfpSetInterval(50);
							} else if(counter === 100) {
								mfpSetInterval(500);
							}
						}, delay);
					};

				mfpSetInterval(1);
			},

			getImage: function(item, template) {

				var guard = 0,

					// image load complete handler
					onLoadComplete = function() {
						if(item) {
							if (item.img[0].complete) {
								item.img.off('.mfploader');

								if(item === mfp.currItem){
									mfp._onImageHasSize(item);

									mfp.updateStatus('ready');
								}

								item.hasSize = true;
								item.loaded = true;

								_mfpTrigger('ImageLoadComplete');

							}
							else {
								// if image complete check fails 200 times (20 sec), we assume that there was an error.
								guard++;
								if(guard < 200) {
									setTimeout(onLoadComplete,100);
								} else {
									onLoadError();
								}
							}
						}
					},

					// image error handler
					onLoadError = function() {
						if(item) {
							item.img.off('.mfploader');
							if(item === mfp.currItem){
								mfp._onImageHasSize(item);
								mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
							}

							item.hasSize = true;
							item.loaded = true;
							item.loadError = true;
						}
					},
					imgSt = mfp.st.image;


				var el = template.find('.mfp-img');
				if(el.length) {
					var img = document.createElement('img');
					img.className = 'mfp-img';
					if(item.el && item.el.find('img').length) {
						img.alt = item.el.find('img').attr('alt');
					}
					item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
					img.src = item.src;

					// without clone() "error" event is not firing when IMG is replaced by new IMG
					// TODO: find a way to avoid such cloning
					if(el.is('img')) {
						item.img = item.img.clone();
					}

					img = item.img[0];
					if(img.naturalWidth > 0) {
						item.hasSize = true;
					} else if(!img.width) {
						item.hasSize = false;
					}
				}

				mfp._parseMarkup(template, {
					title: _getTitle(item),
					img_replaceWith: item.img
				}, item);

				mfp.resizeImage();

				if(item.hasSize) {
					if(_imgInterval) clearInterval(_imgInterval);

					if(item.loadError) {
						template.addClass('mfp-loading');
						mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
					} else {
						template.removeClass('mfp-loading');
						mfp.updateStatus('ready');
					}
					return template;
				}

				mfp.updateStatus('loading');
				item.loading = true;

				if(!item.hasSize) {
					item.imgHidden = true;
					template.addClass('mfp-loading');
					mfp.findImageSize(item);
				}

				return template;
			}
		}
	});

	/*>>image*/

	/*>>zoom*/
	var hasMozTransform,
		getHasMozTransform = function() {
			if(hasMozTransform === undefined) {
				hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
			}
			return hasMozTransform;
		};

	$.magnificPopup.registerModule('zoom', {

		options: {
			enabled: false,
			easing: 'ease-in-out',
			duration: 300,
			opener: function(element) {
				return element.is('img') ? element : element.find('img');
			}
		},

		proto: {

			initZoom: function() {
				var zoomSt = mfp.st.zoom,
					ns = '.zoom',
					image;

				if(!zoomSt.enabled || !mfp.supportsTransition) {
					return;
				}

				var duration = zoomSt.duration,
					getElToAnimate = function(image) {
						var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
							transition = 'all '+(zoomSt.duration/1000)+'s ' + zoomSt.easing,
							cssObj = {
								position: 'fixed',
								zIndex: 9999,
								left: 0,
								top: 0,
								'-webkit-backface-visibility': 'hidden'
							},
							t = 'transition';

						cssObj['-webkit-'+t] = cssObj['-moz-'+t] = cssObj['-o-'+t] = cssObj[t] = transition;

						newImg.css(cssObj);
						return newImg;
					},
					showMainContent = function() {
						mfp.content.css('visibility', 'visible');
					},
					openTimeout,
					animatedImg;

				_mfpOn('BuildControls'+ns, function() {
					if(mfp._allowZoom()) {

						clearTimeout(openTimeout);
						mfp.content.css('visibility', 'hidden');

						// Basically, all code below does is clones existing image, puts in on top of the current one and animated it

						image = mfp._getItemToZoom();

						if(!image) {
							showMainContent();
							return;
						}

						animatedImg = getElToAnimate(image);

						animatedImg.css( mfp._getOffset() );

						mfp.wrap.append(animatedImg);

						openTimeout = setTimeout(function() {
							animatedImg.css( mfp._getOffset( true ) );
							openTimeout = setTimeout(function() {

								showMainContent();

								setTimeout(function() {
									animatedImg.remove();
									image = animatedImg = null;
									_mfpTrigger('ZoomAnimationEnded');
								}, 16); // avoid blink when switching images

							}, duration); // this timeout equals animation duration

						}, 16); // by adding this timeout we avoid short glitch at the beginning of animation


						// Lots of timeouts...
					}
				});
				_mfpOn(BEFORE_CLOSE_EVENT+ns, function() {
					if(mfp._allowZoom()) {

						clearTimeout(openTimeout);

						mfp.st.removalDelay = duration;

						if(!image) {
							image = mfp._getItemToZoom();
							if(!image) {
								return;
							}
							animatedImg = getElToAnimate(image);
						}

						animatedImg.css( mfp._getOffset(true) );
						mfp.wrap.append(animatedImg);
						mfp.content.css('visibility', 'hidden');

						setTimeout(function() {
							animatedImg.css( mfp._getOffset() );
						}, 16);
					}

				});

				_mfpOn(CLOSE_EVENT+ns, function() {
					if(mfp._allowZoom()) {
						showMainContent();
						if(animatedImg) {
							animatedImg.remove();
						}
						image = null;
					}
				});
			},

			_allowZoom: function() {
				return mfp.currItem.type === 'image';
			},

			_getItemToZoom: function() {
				if(mfp.currItem.hasSize) {
					return mfp.currItem.img;
				} else {
					return false;
				}
			},

			// Get element postion relative to viewport
			_getOffset: function(isLarge) {
				var el;
				if(isLarge) {
					el = mfp.currItem.img;
				} else {
					el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
				}

				var offset = el.offset();
				var paddingTop = parseInt(el.css('padding-top'),10);
				var paddingBottom = parseInt(el.css('padding-bottom'),10);
				offset.top -= ( $(window).scrollTop() - paddingTop );


				/*

				Animating left + top + width/height looks glitchy in Firefox, but perfect in Chrome. And vice-versa.

				 */
				var obj = {
					width: el.width(),
					// fix Zepto height+padding issue
					height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
				};

				// I hate to do this, but there is no another option
				if( getHasMozTransform() ) {
					obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
				} else {
					obj.left = offset.left;
					obj.top = offset.top;
				}
				return obj;
			}

		}
	});



	/*>>zoom*/

	/*>>iframe*/

	var IFRAME_NS = 'iframe',
		_emptyPage = '//about:blank',

		_fixIframeBugs = function(isShowing) {
			if(mfp.currTemplate[IFRAME_NS]) {
				var el = mfp.currTemplate[IFRAME_NS].find('iframe');
				if(el.length) {
					// reset src after the popup is closed to avoid "video keeps playing after popup is closed" bug
					if(!isShowing) {
						el[0].src = _emptyPage;
					}

					// IE8 black screen bug fix
					if(mfp.isIE8) {
						el.css('display', isShowing ? 'block' : 'none');
					}
				}
			}
		};

	$.magnificPopup.registerModule(IFRAME_NS, {

		options: {
			markup: '<div class="mfp-iframe-scaler">'+
						'<div class="mfp-close"></div>'+
						'<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>'+
					'</div>',

			srcAction: 'iframe_src',

			// we don't care and support only one default type of URL by default
			patterns: {
				youtube: {
					index: 'youtube.com',
					id: 'v=',
					src: '//www.youtube.com/embed/%id%?autoplay=1'
				},
				vimeo: {
					index: 'vimeo.com/',
					id: '/',
					src: '//player.vimeo.com/video/%id%?autoplay=1'
				},
				gmaps: {
					index: '//maps.google.',
					src: '%id%&output=embed'
				}
			}
		},

		proto: {
			initIframe: function() {
				mfp.types.push(IFRAME_NS);

				_mfpOn('BeforeChange', function(e, prevType, newType) {
					if(prevType !== newType) {
						if(prevType === IFRAME_NS) {
							_fixIframeBugs(); // iframe if removed
						} else if(newType === IFRAME_NS) {
							_fixIframeBugs(true); // iframe is showing
						}
					}// else {
						// iframe source is switched, don't do anything
					//}
				});

				_mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function() {
					_fixIframeBugs();
				});
			},

			getIframe: function(item, template) {
				var embedSrc = item.src;
				var iframeSt = mfp.st.iframe;

				$.each(iframeSt.patterns, function() {
					if(embedSrc.indexOf( this.index ) > -1) {
						if(this.id) {
							if(typeof this.id === 'string') {
								embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id)+this.id.length, embedSrc.length);
							} else {
								embedSrc = this.id.call( this, embedSrc );
							}
						}
						embedSrc = this.src.replace('%id%', embedSrc );
						return false; // break;
					}
				});

				var dataObj = {};
				if(iframeSt.srcAction) {
					dataObj[iframeSt.srcAction] = embedSrc;
				}
				mfp._parseMarkup(template, dataObj, item);

				mfp.updateStatus('ready');

				return template;
			}
		}
	});



	/*>>iframe*/

	/*>>gallery*/
	/**
	 * Get looped index depending on number of slides
	 */
	var _getLoopedId = function(index) {
			var numSlides = mfp.items.length;
			if(index > numSlides - 1) {
				return index - numSlides;
			} else  if(index < 0) {
				return numSlides + index;
			}
			return index;
		},
		_replaceCurrTotal = function(text, curr, total) {
			return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
		};

	$.magnificPopup.registerModule('gallery', {

		options: {
			enabled: false,
			arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
			preload: [0,2],
			navigateByImgClick: true,
			arrows: true,

			tPrev: 'Previous (Left arrow key)',
			tNext: 'Next (Right arrow key)',
			tCounter: '%curr% of %total%'
		},

		proto: {
			initGallery: function() {

				var gSt = mfp.st.gallery,
					ns = '.mfp-gallery';

				mfp.direction = true; // true - next, false - prev

				if(!gSt || !gSt.enabled ) return false;

				_wrapClasses += ' mfp-gallery';

				_mfpOn(OPEN_EVENT+ns, function() {

					if(gSt.navigateByImgClick) {
						mfp.wrap.on('click'+ns, '.mfp-img', function() {
							if(mfp.items.length > 1) {
								mfp.next();
								return false;
							}
						});
					}

					_document.on('keydown'+ns, function(e) {
						if (e.keyCode === 37) {
							mfp.prev();
						} else if (e.keyCode === 39) {
							mfp.next();
						}
					});
				});

				_mfpOn('UpdateStatus'+ns, function(e, data) {
					if(data.text) {
						data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
					}
				});

				_mfpOn(MARKUP_PARSE_EVENT+ns, function(e, element, values, item) {
					var l = mfp.items.length;
					values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
				});

				_mfpOn('BuildControls' + ns, function() {
					if(mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
						var markup = gSt.arrowMarkup,
							arrowLeft = mfp.arrowLeft = $( markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left') ).addClass(PREVENT_CLOSE_CLASS),
							arrowRight = mfp.arrowRight = $( markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right') ).addClass(PREVENT_CLOSE_CLASS);

						arrowLeft.click(function() {
							mfp.prev();
						});
						arrowRight.click(function() {
							mfp.next();
						});

						mfp.container.append(arrowLeft.add(arrowRight));
					}
				});

				_mfpOn(CHANGE_EVENT+ns, function() {
					if(mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);

					mfp._preloadTimeout = setTimeout(function() {
						mfp.preloadNearbyImages();
						mfp._preloadTimeout = null;
					}, 16);
				});


				_mfpOn(CLOSE_EVENT+ns, function() {
					_document.off(ns);
					mfp.wrap.off('click'+ns);
					mfp.arrowRight = mfp.arrowLeft = null;
				});

			},
			next: function() {
				mfp.direction = true;
				mfp.index = _getLoopedId(mfp.index + 1);
				mfp.updateItemHTML();
			},
			prev: function() {
				mfp.direction = false;
				mfp.index = _getLoopedId(mfp.index - 1);
				mfp.updateItemHTML();
			},
			goTo: function(newIndex) {
				mfp.direction = (newIndex >= mfp.index);
				mfp.index = newIndex;
				mfp.updateItemHTML();
			},
			preloadNearbyImages: function() {
				var p = mfp.st.gallery.preload,
					preloadBefore = Math.min(p[0], mfp.items.length),
					preloadAfter = Math.min(p[1], mfp.items.length),
					i;

				for(i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
					mfp._preloadItem(mfp.index+i);
				}
				for(i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
					mfp._preloadItem(mfp.index-i);
				}
			},
			_preloadItem: function(index) {
				index = _getLoopedId(index);

				if(mfp.items[index].preloaded) {
					return;
				}

				var item = mfp.items[index];
				if(!item.parsed) {
					item = mfp.parseEl( index );
				}

				_mfpTrigger('LazyLoad', item);

				if(item.type === 'image') {
					item.img = $('<img class="mfp-img" />').on('load.mfploader', function() {
						item.hasSize = true;
					}).on('error.mfploader', function() {
						item.hasSize = true;
						item.loadError = true;
						_mfpTrigger('LazyLoadError', item);
					}).attr('src', item.src);
				}


				item.preloaded = true;
			}
		}
	});

	/*>>gallery*/

	/*>>retina*/

	var RETINA_NS = 'retina';

	$.magnificPopup.registerModule(RETINA_NS, {
		options: {
			replaceSrc: function(item) {
				return item.src.replace(/\.\w+$/, function(m) { return '@2x' + m; });
			},
			ratio: 1 // Function or number.  Set to 1 to disable.
		},
		proto: {
			initRetina: function() {
				if(window.devicePixelRatio > 1) {

					var st = mfp.st.retina,
						ratio = st.ratio;

					ratio = !isNaN(ratio) ? ratio : ratio();

					if(ratio > 1) {
						_mfpOn('ImageHasSize' + '.' + RETINA_NS, function(e, item) {
							item.img.css({
								'max-width': item.img[0].naturalWidth / ratio,
								'width': '100%'
							});
						});
						_mfpOn('ElementParse' + '.' + RETINA_NS, function(e, item) {
							item.src = st.replaceSrc(item, ratio);
						});
					}
				}

			}
		}
	});

	/*>>retina*/
	 _checkInstance(); }));

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = require("!!../../../css-loader/index.js!../../../sass-loader/index.js!./main.scss");
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = require("!../../../style-loader/addStyles.js")(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(module.hot) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../css-loader/index.js!../../../sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!../../../css-loader/index.js!../../../sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	/*
	     _ _      _       _
	 ___| (_) ___| | __  (_)___
	/ __| | |/ __| |/ /  | / __|
	\__ \ | | (__|   < _ | \__ \
	|___/_|_|\___|_|\_(_)/ |___/
	                   |__/

	 Version: 1.8.1
	  Author: Ken Wheeler
	 Website: http://kenwheeler.github.io
	    Docs: http://kenwheeler.github.io/slick
	    Repo: http://github.com/kenwheeler/slick
	  Issues: http://github.com/kenwheeler/slick/issues

	 */
	/* global window, document, define, jQuery, setInterval, clearInterval */
	;(function(factory) {
	    'use strict';
	    if (typeof define === 'function' && define.amd) {
	        define(['jquery'], factory);
	    } else if (typeof exports !== 'undefined') {
	        module.exports = factory(require('jquery'));
	    } else {
	        factory(jQuery);
	    }

	}(function($) {
	    'use strict';
	    var Slick = window.Slick || {};

	    Slick = (function() {

	        var instanceUid = 0;

	        function Slick(element, settings) {

	            var _ = this, dataSettings;

	            _.defaults = {
	                accessibility: true,
	                adaptiveHeight: false,
	                appendArrows: $(element),
	                appendDots: $(element),
	                arrows: true,
	                asNavFor: null,
	                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
	                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
	                autoplay: false,
	                autoplaySpeed: 3000,
	                centerMode: false,
	                centerPadding: '50px',
	                cssEase: 'ease',
	                customPaging: function(slider, i) {
	                    return $('<button type="button" />').text(i + 1);
	                },
	                dots: false,
	                dotsClass: 'slick-dots',
	                draggable: true,
	                easing: 'linear',
	                edgeFriction: 0.35,
	                fade: false,
	                focusOnSelect: false,
	                focusOnChange: false,
	                infinite: true,
	                initialSlide: 0,
	                lazyLoad: 'ondemand',
	                mobileFirst: false,
	                pauseOnHover: true,
	                pauseOnFocus: true,
	                pauseOnDotsHover: false,
	                respondTo: 'window',
	                responsive: null,
	                rows: 1,
	                rtl: false,
	                slide: '',
	                slidesPerRow: 1,
	                slidesToShow: 1,
	                slidesToScroll: 1,
	                speed: 500,
	                swipe: true,
	                swipeToSlide: false,
	                touchMove: true,
	                touchThreshold: 5,
	                useCSS: true,
	                useTransform: true,
	                variableWidth: false,
	                vertical: false,
	                verticalSwiping: false,
	                waitForAnimate: true,
	                zIndex: 1000
	            };

	            _.initials = {
	                animating: false,
	                dragging: false,
	                autoPlayTimer: null,
	                currentDirection: 0,
	                currentLeft: null,
	                currentSlide: 0,
	                direction: 1,
	                $dots: null,
	                listWidth: null,
	                listHeight: null,
	                loadIndex: 0,
	                $nextArrow: null,
	                $prevArrow: null,
	                scrolling: false,
	                slideCount: null,
	                slideWidth: null,
	                $slideTrack: null,
	                $slides: null,
	                sliding: false,
	                slideOffset: 0,
	                swipeLeft: null,
	                swiping: false,
	                $list: null,
	                touchObject: {},
	                transformsEnabled: false,
	                unslicked: false
	            };

	            $.extend(_, _.initials);

	            _.activeBreakpoint = null;
	            _.animType = null;
	            _.animProp = null;
	            _.breakpoints = [];
	            _.breakpointSettings = [];
	            _.cssTransitions = false;
	            _.focussed = false;
	            _.interrupted = false;
	            _.hidden = 'hidden';
	            _.paused = true;
	            _.positionProp = null;
	            _.respondTo = null;
	            _.rowCount = 1;
	            _.shouldClick = true;
	            _.$slider = $(element);
	            _.$slidesCache = null;
	            _.transformType = null;
	            _.transitionType = null;
	            _.visibilityChange = 'visibilitychange';
	            _.windowWidth = 0;
	            _.windowTimer = null;

	            dataSettings = $(element).data('slick') || {};

	            _.options = $.extend({}, _.defaults, settings, dataSettings);

	            _.currentSlide = _.options.initialSlide;

	            _.originalSettings = _.options;

	            if (typeof document.mozHidden !== 'undefined') {
	                _.hidden = 'mozHidden';
	                _.visibilityChange = 'mozvisibilitychange';
	            } else if (typeof document.webkitHidden !== 'undefined') {
	                _.hidden = 'webkitHidden';
	                _.visibilityChange = 'webkitvisibilitychange';
	            }

	            _.autoPlay = $.proxy(_.autoPlay, _);
	            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
	            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
	            _.changeSlide = $.proxy(_.changeSlide, _);
	            _.clickHandler = $.proxy(_.clickHandler, _);
	            _.selectHandler = $.proxy(_.selectHandler, _);
	            _.setPosition = $.proxy(_.setPosition, _);
	            _.swipeHandler = $.proxy(_.swipeHandler, _);
	            _.dragHandler = $.proxy(_.dragHandler, _);
	            _.keyHandler = $.proxy(_.keyHandler, _);

	            _.instanceUid = instanceUid++;

	            // A simple way to check for HTML strings
	            // Strict HTML recognition (must start with <)
	            // Extracted from jQuery v1.11 source
	            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


	            _.registerBreakpoints();
	            _.init(true);

	        }

	        return Slick;

	    }());

	    Slick.prototype.activateADA = function() {
	        var _ = this;

	        _.$slideTrack.find('.slick-active').attr({
	            'aria-hidden': 'false'
	        }).find('a, input, button, select').attr({
	            'tabindex': '0'
	        });

	    };

	    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

	        var _ = this;

	        if (typeof(index) === 'boolean') {
	            addBefore = index;
	            index = null;
	        } else if (index < 0 || (index >= _.slideCount)) {
	            return false;
	        }

	        _.unload();

	        if (typeof(index) === 'number') {
	            if (index === 0 && _.$slides.length === 0) {
	                $(markup).appendTo(_.$slideTrack);
	            } else if (addBefore) {
	                $(markup).insertBefore(_.$slides.eq(index));
	            } else {
	                $(markup).insertAfter(_.$slides.eq(index));
	            }
	        } else {
	            if (addBefore === true) {
	                $(markup).prependTo(_.$slideTrack);
	            } else {
	                $(markup).appendTo(_.$slideTrack);
	            }
	        }

	        _.$slides = _.$slideTrack.children(this.options.slide);

	        _.$slideTrack.children(this.options.slide).detach();

	        _.$slideTrack.append(_.$slides);

	        _.$slides.each(function(index, element) {
	            $(element).attr('data-slick-index', index);
	        });

	        _.$slidesCache = _.$slides;

	        _.reinit();

	    };

	    Slick.prototype.animateHeight = function() {
	        var _ = this;
	        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
	            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
	            _.$list.animate({
	                height: targetHeight
	            }, _.options.speed);
	        }
	    };

	    Slick.prototype.animateSlide = function(targetLeft, callback) {

	        var animProps = {},
	            _ = this;

	        _.animateHeight();

	        if (_.options.rtl === true && _.options.vertical === false) {
	            targetLeft = -targetLeft;
	        }
	        if (_.transformsEnabled === false) {
	            if (_.options.vertical === false) {
	                _.$slideTrack.animate({
	                    left: targetLeft
	                }, _.options.speed, _.options.easing, callback);
	            } else {
	                _.$slideTrack.animate({
	                    top: targetLeft
	                }, _.options.speed, _.options.easing, callback);
	            }

	        } else {

	            if (_.cssTransitions === false) {
	                if (_.options.rtl === true) {
	                    _.currentLeft = -(_.currentLeft);
	                }
	                $({
	                    animStart: _.currentLeft
	                }).animate({
	                    animStart: targetLeft
	                }, {
	                    duration: _.options.speed,
	                    easing: _.options.easing,
	                    step: function(now) {
	                        now = Math.ceil(now);
	                        if (_.options.vertical === false) {
	                            animProps[_.animType] = 'translate(' +
	                                now + 'px, 0px)';
	                            _.$slideTrack.css(animProps);
	                        } else {
	                            animProps[_.animType] = 'translate(0px,' +
	                                now + 'px)';
	                            _.$slideTrack.css(animProps);
	                        }
	                    },
	                    complete: function() {
	                        if (callback) {
	                            callback.call();
	                        }
	                    }
	                });

	            } else {

	                _.applyTransition();
	                targetLeft = Math.ceil(targetLeft);

	                if (_.options.vertical === false) {
	                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
	                } else {
	                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
	                }
	                _.$slideTrack.css(animProps);

	                if (callback) {
	                    setTimeout(function() {

	                        _.disableTransition();

	                        callback.call();
	                    }, _.options.speed);
	                }

	            }

	        }

	    };

	    Slick.prototype.getNavTarget = function() {

	        var _ = this,
	            asNavFor = _.options.asNavFor;

	        if ( asNavFor && asNavFor !== null ) {
	            asNavFor = $(asNavFor).not(_.$slider);
	        }

	        return asNavFor;

	    };

	    Slick.prototype.asNavFor = function(index) {

	        var _ = this,
	            asNavFor = _.getNavTarget();

	        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
	            asNavFor.each(function() {
	                var target = $(this).slick('getSlick');
	                if(!target.unslicked) {
	                    target.slideHandler(index, true);
	                }
	            });
	        }

	    };

	    Slick.prototype.applyTransition = function(slide) {

	        var _ = this,
	            transition = {};

	        if (_.options.fade === false) {
	            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
	        } else {
	            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
	        }

	        if (_.options.fade === false) {
	            _.$slideTrack.css(transition);
	        } else {
	            _.$slides.eq(slide).css(transition);
	        }

	    };

	    Slick.prototype.autoPlay = function() {

	        var _ = this;

	        _.autoPlayClear();

	        if ( _.slideCount > _.options.slidesToShow ) {
	            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
	        }

	    };

	    Slick.prototype.autoPlayClear = function() {

	        var _ = this;

	        if (_.autoPlayTimer) {
	            clearInterval(_.autoPlayTimer);
	        }

	    };

	    Slick.prototype.autoPlayIterator = function() {

	        var _ = this,
	            slideTo = _.currentSlide + _.options.slidesToScroll;

	        if ( !_.paused && !_.interrupted && !_.focussed ) {

	            if ( _.options.infinite === false ) {

	                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
	                    _.direction = 0;
	                }

	                else if ( _.direction === 0 ) {

	                    slideTo = _.currentSlide - _.options.slidesToScroll;

	                    if ( _.currentSlide - 1 === 0 ) {
	                        _.direction = 1;
	                    }

	                }

	            }

	            _.slideHandler( slideTo );

	        }

	    };

	    Slick.prototype.buildArrows = function() {

	        var _ = this;

	        if (_.options.arrows === true ) {

	            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
	            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

	            if( _.slideCount > _.options.slidesToShow ) {

	                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
	                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

	                if (_.htmlExpr.test(_.options.prevArrow)) {
	                    _.$prevArrow.prependTo(_.options.appendArrows);
	                }

	                if (_.htmlExpr.test(_.options.nextArrow)) {
	                    _.$nextArrow.appendTo(_.options.appendArrows);
	                }

	                if (_.options.infinite !== true) {
	                    _.$prevArrow
	                        .addClass('slick-disabled')
	                        .attr('aria-disabled', 'true');
	                }

	            } else {

	                _.$prevArrow.add( _.$nextArrow )

	                    .addClass('slick-hidden')
	                    .attr({
	                        'aria-disabled': 'true',
	                        'tabindex': '-1'
	                    });

	            }

	        }

	    };

	    Slick.prototype.buildDots = function() {

	        var _ = this,
	            i, dot;

	        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

	            _.$slider.addClass('slick-dotted');

	            dot = $('<ul />').addClass(_.options.dotsClass);

	            for (i = 0; i <= _.getDotCount(); i += 1) {
	                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
	            }

	            _.$dots = dot.appendTo(_.options.appendDots);

	            _.$dots.find('li').first().addClass('slick-active');

	        }

	    };

	    Slick.prototype.buildOut = function() {

	        var _ = this;

	        _.$slides =
	            _.$slider
	                .children( _.options.slide + ':not(.slick-cloned)')
	                .addClass('slick-slide');

	        _.slideCount = _.$slides.length;

	        _.$slides.each(function(index, element) {
	            $(element)
	                .attr('data-slick-index', index)
	                .data('originalStyling', $(element).attr('style') || '');
	        });

	        _.$slider.addClass('slick-slider');

	        _.$slideTrack = (_.slideCount === 0) ?
	            $('<div class="slick-track"/>').appendTo(_.$slider) :
	            _.$slides.wrapAll('<div class="slick-track"/>').parent();

	        _.$list = _.$slideTrack.wrap(
	            '<div class="slick-list"/>').parent();
	        _.$slideTrack.css('opacity', 0);

	        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
	            _.options.slidesToScroll = 1;
	        }

	        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

	        _.setupInfinite();

	        _.buildArrows();

	        _.buildDots();

	        _.updateDots();


	        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

	        if (_.options.draggable === true) {
	            _.$list.addClass('draggable');
	        }

	    };

	    Slick.prototype.buildRows = function() {

	        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

	        newSlides = document.createDocumentFragment();
	        originalSlides = _.$slider.children();

	        if(_.options.rows > 0) {

	            slidesPerSection = _.options.slidesPerRow * _.options.rows;
	            numOfSlides = Math.ceil(
	                originalSlides.length / slidesPerSection
	            );

	            for(a = 0; a < numOfSlides; a++){
	                var slide = document.createElement('div');
	                for(b = 0; b < _.options.rows; b++) {
	                    var row = document.createElement('div');
	                    for(c = 0; c < _.options.slidesPerRow; c++) {
	                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
	                        if (originalSlides.get(target)) {
	                            row.appendChild(originalSlides.get(target));
	                        }
	                    }
	                    slide.appendChild(row);
	                }
	                newSlides.appendChild(slide);
	            }

	            _.$slider.empty().append(newSlides);
	            _.$slider.children().children().children()
	                .css({
	                    'width':(100 / _.options.slidesPerRow) + '%',
	                    'display': 'inline-block'
	                });

	        }

	    };

	    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

	        var _ = this,
	            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
	        var sliderWidth = _.$slider.width();
	        var windowWidth = window.innerWidth || $(window).width();

	        if (_.respondTo === 'window') {
	            respondToWidth = windowWidth;
	        } else if (_.respondTo === 'slider') {
	            respondToWidth = sliderWidth;
	        } else if (_.respondTo === 'min') {
	            respondToWidth = Math.min(windowWidth, sliderWidth);
	        }

	        if ( _.options.responsive &&
	            _.options.responsive.length &&
	            _.options.responsive !== null) {

	            targetBreakpoint = null;

	            for (breakpoint in _.breakpoints) {
	                if (_.breakpoints.hasOwnProperty(breakpoint)) {
	                    if (_.originalSettings.mobileFirst === false) {
	                        if (respondToWidth < _.breakpoints[breakpoint]) {
	                            targetBreakpoint = _.breakpoints[breakpoint];
	                        }
	                    } else {
	                        if (respondToWidth > _.breakpoints[breakpoint]) {
	                            targetBreakpoint = _.breakpoints[breakpoint];
	                        }
	                    }
	                }
	            }

	            if (targetBreakpoint !== null) {
	                if (_.activeBreakpoint !== null) {
	                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
	                        _.activeBreakpoint =
	                            targetBreakpoint;
	                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
	                            _.unslick(targetBreakpoint);
	                        } else {
	                            _.options = $.extend({}, _.originalSettings,
	                                _.breakpointSettings[
	                                    targetBreakpoint]);
	                            if (initial === true) {
	                                _.currentSlide = _.options.initialSlide;
	                            }
	                            _.refresh(initial);
	                        }
	                        triggerBreakpoint = targetBreakpoint;
	                    }
	                } else {
	                    _.activeBreakpoint = targetBreakpoint;
	                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
	                        _.unslick(targetBreakpoint);
	                    } else {
	                        _.options = $.extend({}, _.originalSettings,
	                            _.breakpointSettings[
	                                targetBreakpoint]);
	                        if (initial === true) {
	                            _.currentSlide = _.options.initialSlide;
	                        }
	                        _.refresh(initial);
	                    }
	                    triggerBreakpoint = targetBreakpoint;
	                }
	            } else {
	                if (_.activeBreakpoint !== null) {
	                    _.activeBreakpoint = null;
	                    _.options = _.originalSettings;
	                    if (initial === true) {
	                        _.currentSlide = _.options.initialSlide;
	                    }
	                    _.refresh(initial);
	                    triggerBreakpoint = targetBreakpoint;
	                }
	            }

	            // only trigger breakpoints during an actual break. not on initialize.
	            if( !initial && triggerBreakpoint !== false ) {
	                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
	            }
	        }

	    };

	    Slick.prototype.changeSlide = function(event, dontAnimate) {

	        var _ = this,
	            $target = $(event.currentTarget),
	            indexOffset, slideOffset, unevenOffset;

	        // If target is a link, prevent default action.
	        if($target.is('a')) {
	            event.preventDefault();
	        }

	        // If target is not the <li> element (ie: a child), find the <li>.
	        if(!$target.is('li')) {
	            $target = $target.closest('li');
	        }

	        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
	        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

	        switch (event.data.message) {

	            case 'previous':
	                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
	                if (_.slideCount > _.options.slidesToShow) {
	                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
	                }
	                break;

	            case 'next':
	                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
	                if (_.slideCount > _.options.slidesToShow) {
	                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
	                }
	                break;

	            case 'index':
	                var index = event.data.index === 0 ? 0 :
	                    event.data.index || $target.index() * _.options.slidesToScroll;

	                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
	                $target.children().trigger('focus');
	                break;

	            default:
	                return;
	        }

	    };

	    Slick.prototype.checkNavigable = function(index) {

	        var _ = this,
	            navigables, prevNavigable;

	        navigables = _.getNavigableIndexes();
	        prevNavigable = 0;
	        if (index > navigables[navigables.length - 1]) {
	            index = navigables[navigables.length - 1];
	        } else {
	            for (var n in navigables) {
	                if (index < navigables[n]) {
	                    index = prevNavigable;
	                    break;
	                }
	                prevNavigable = navigables[n];
	            }
	        }

	        return index;
	    };

	    Slick.prototype.cleanUpEvents = function() {

	        var _ = this;

	        if (_.options.dots && _.$dots !== null) {

	            $('li', _.$dots)
	                .off('click.slick', _.changeSlide)
	                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
	                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

	            if (_.options.accessibility === true) {
	                _.$dots.off('keydown.slick', _.keyHandler);
	            }
	        }

	        _.$slider.off('focus.slick blur.slick');

	        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
	            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
	            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

	            if (_.options.accessibility === true) {
	                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
	                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
	            }
	        }

	        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
	        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
	        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
	        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

	        _.$list.off('click.slick', _.clickHandler);

	        $(document).off(_.visibilityChange, _.visibility);

	        _.cleanUpSlideEvents();

	        if (_.options.accessibility === true) {
	            _.$list.off('keydown.slick', _.keyHandler);
	        }

	        if (_.options.focusOnSelect === true) {
	            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
	        }

	        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

	        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

	        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

	        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

	    };

	    Slick.prototype.cleanUpSlideEvents = function() {

	        var _ = this;

	        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
	        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

	    };

	    Slick.prototype.cleanUpRows = function() {

	        var _ = this, originalSlides;

	        if(_.options.rows > 0) {
	            originalSlides = _.$slides.children().children();
	            originalSlides.removeAttr('style');
	            _.$slider.empty().append(originalSlides);
	        }

	    };

	    Slick.prototype.clickHandler = function(event) {

	        var _ = this;

	        if (_.shouldClick === false) {
	            event.stopImmediatePropagation();
	            event.stopPropagation();
	            event.preventDefault();
	        }

	    };

	    Slick.prototype.destroy = function(refresh) {

	        var _ = this;

	        _.autoPlayClear();

	        _.touchObject = {};

	        _.cleanUpEvents();

	        $('.slick-cloned', _.$slider).detach();

	        if (_.$dots) {
	            _.$dots.remove();
	        }

	        if ( _.$prevArrow && _.$prevArrow.length ) {

	            _.$prevArrow
	                .removeClass('slick-disabled slick-arrow slick-hidden')
	                .removeAttr('aria-hidden aria-disabled tabindex')
	                .css('display','');

	            if ( _.htmlExpr.test( _.options.prevArrow )) {
	                _.$prevArrow.remove();
	            }
	        }

	        if ( _.$nextArrow && _.$nextArrow.length ) {

	            _.$nextArrow
	                .removeClass('slick-disabled slick-arrow slick-hidden')
	                .removeAttr('aria-hidden aria-disabled tabindex')
	                .css('display','');

	            if ( _.htmlExpr.test( _.options.nextArrow )) {
	                _.$nextArrow.remove();
	            }
	        }


	        if (_.$slides) {

	            _.$slides
	                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
	                .removeAttr('aria-hidden')
	                .removeAttr('data-slick-index')
	                .each(function(){
	                    $(this).attr('style', $(this).data('originalStyling'));
	                });

	            _.$slideTrack.children(this.options.slide).detach();

	            _.$slideTrack.detach();

	            _.$list.detach();

	            _.$slider.append(_.$slides);
	        }

	        _.cleanUpRows();

	        _.$slider.removeClass('slick-slider');
	        _.$slider.removeClass('slick-initialized');
	        _.$slider.removeClass('slick-dotted');

	        _.unslicked = true;

	        if(!refresh) {
	            _.$slider.trigger('destroy', [_]);
	        }

	    };

	    Slick.prototype.disableTransition = function(slide) {

	        var _ = this,
	            transition = {};

	        transition[_.transitionType] = '';

	        if (_.options.fade === false) {
	            _.$slideTrack.css(transition);
	        } else {
	            _.$slides.eq(slide).css(transition);
	        }

	    };

	    Slick.prototype.fadeSlide = function(slideIndex, callback) {

	        var _ = this;

	        if (_.cssTransitions === false) {

	            _.$slides.eq(slideIndex).css({
	                zIndex: _.options.zIndex
	            });

	            _.$slides.eq(slideIndex).animate({
	                opacity: 1
	            }, _.options.speed, _.options.easing, callback);

	        } else {

	            _.applyTransition(slideIndex);

	            _.$slides.eq(slideIndex).css({
	                opacity: 1,
	                zIndex: _.options.zIndex
	            });

	            if (callback) {
	                setTimeout(function() {

	                    _.disableTransition(slideIndex);

	                    callback.call();
	                }, _.options.speed);
	            }

	        }

	    };

	    Slick.prototype.fadeSlideOut = function(slideIndex) {

	        var _ = this;

	        if (_.cssTransitions === false) {

	            _.$slides.eq(slideIndex).animate({
	                opacity: 0,
	                zIndex: _.options.zIndex - 2
	            }, _.options.speed, _.options.easing);

	        } else {

	            _.applyTransition(slideIndex);

	            _.$slides.eq(slideIndex).css({
	                opacity: 0,
	                zIndex: _.options.zIndex - 2
	            });

	        }

	    };

	    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

	        var _ = this;

	        if (filter !== null) {

	            _.$slidesCache = _.$slides;

	            _.unload();

	            _.$slideTrack.children(this.options.slide).detach();

	            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

	            _.reinit();

	        }

	    };

	    Slick.prototype.focusHandler = function() {

	        var _ = this;

	        _.$slider
	            .off('focus.slick blur.slick')
	            .on('focus.slick blur.slick', '*', function(event) {

	            event.stopImmediatePropagation();
	            var $sf = $(this);

	            setTimeout(function() {

	                if( _.options.pauseOnFocus ) {
	                    _.focussed = $sf.is(':focus');
	                    _.autoPlay();
	                }

	            }, 0);

	        });
	    };

	    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

	        var _ = this;
	        return _.currentSlide;

	    };

	    Slick.prototype.getDotCount = function() {

	        var _ = this;

	        var breakPoint = 0;
	        var counter = 0;
	        var pagerQty = 0;

	        if (_.options.infinite === true) {
	            if (_.slideCount <= _.options.slidesToShow) {
	                 ++pagerQty;
	            } else {
	                while (breakPoint < _.slideCount) {
	                    ++pagerQty;
	                    breakPoint = counter + _.options.slidesToScroll;
	                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
	                }
	            }
	        } else if (_.options.centerMode === true) {
	            pagerQty = _.slideCount;
	        } else if(!_.options.asNavFor) {
	            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
	        }else {
	            while (breakPoint < _.slideCount) {
	                ++pagerQty;
	                breakPoint = counter + _.options.slidesToScroll;
	                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
	            }
	        }

	        return pagerQty - 1;

	    };

	    Slick.prototype.getLeft = function(slideIndex) {

	        var _ = this,
	            targetLeft,
	            verticalHeight,
	            verticalOffset = 0,
	            targetSlide,
	            coef;

	        _.slideOffset = 0;
	        verticalHeight = _.$slides.first().outerHeight(true);

	        if (_.options.infinite === true) {
	            if (_.slideCount > _.options.slidesToShow) {
	                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
	                coef = -1

	                if (_.options.vertical === true && _.options.centerMode === true) {
	                    if (_.options.slidesToShow === 2) {
	                        coef = -1.5;
	                    } else if (_.options.slidesToShow === 1) {
	                        coef = -2
	                    }
	                }
	                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
	            }
	            if (_.slideCount % _.options.slidesToScroll !== 0) {
	                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
	                    if (slideIndex > _.slideCount) {
	                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
	                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
	                    } else {
	                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
	                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
	                    }
	                }
	            }
	        } else {
	            if (slideIndex + _.options.slidesToShow > _.slideCount) {
	                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
	                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
	            }
	        }

	        if (_.slideCount <= _.options.slidesToShow) {
	            _.slideOffset = 0;
	            verticalOffset = 0;
	        }

	        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
	            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
	        } else if (_.options.centerMode === true && _.options.infinite === true) {
	            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
	        } else if (_.options.centerMode === true) {
	            _.slideOffset = 0;
	            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
	        }

	        if (_.options.vertical === false) {
	            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
	        } else {
	            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
	        }

	        if (_.options.variableWidth === true) {

	            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
	                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
	            } else {
	                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
	            }

	            if (_.options.rtl === true) {
	                if (targetSlide[0]) {
	                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
	                } else {
	                    targetLeft =  0;
	                }
	            } else {
	                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
	            }

	            if (_.options.centerMode === true) {
	                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
	                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
	                } else {
	                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
	                }

	                if (_.options.rtl === true) {
	                    if (targetSlide[0]) {
	                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
	                    } else {
	                        targetLeft =  0;
	                    }
	                } else {
	                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
	                }

	                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
	            }
	        }

	        return targetLeft;

	    };

	    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

	        var _ = this;

	        return _.options[option];

	    };

	    Slick.prototype.getNavigableIndexes = function() {

	        var _ = this,
	            breakPoint = 0,
	            counter = 0,
	            indexes = [],
	            max;

	        if (_.options.infinite === false) {
	            max = _.slideCount;
	        } else {
	            breakPoint = _.options.slidesToScroll * -1;
	            counter = _.options.slidesToScroll * -1;
	            max = _.slideCount * 2;
	        }

	        while (breakPoint < max) {
	            indexes.push(breakPoint);
	            breakPoint = counter + _.options.slidesToScroll;
	            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
	        }

	        return indexes;

	    };

	    Slick.prototype.getSlick = function() {

	        return this;

	    };

	    Slick.prototype.getSlideCount = function() {

	        var _ = this,
	            slidesTraversed, swipedSlide, centerOffset;

	        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

	        if (_.options.swipeToSlide === true) {
	            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
	                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
	                    swipedSlide = slide;
	                    return false;
	                }
	            });

	            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

	            return slidesTraversed;

	        } else {
	            return _.options.slidesToScroll;
	        }

	    };

	    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

	        var _ = this;

	        _.changeSlide({
	            data: {
	                message: 'index',
	                index: parseInt(slide)
	            }
	        }, dontAnimate);

	    };

	    Slick.prototype.init = function(creation) {

	        var _ = this;

	        if (!$(_.$slider).hasClass('slick-initialized')) {

	            $(_.$slider).addClass('slick-initialized');

	            _.buildRows();
	            _.buildOut();
	            _.setProps();
	            _.startLoad();
	            _.loadSlider();
	            _.initializeEvents();
	            _.updateArrows();
	            _.updateDots();
	            _.checkResponsive(true);
	            _.focusHandler();

	        }

	        if (creation) {
	            _.$slider.trigger('init', [_]);
	        }

	        if (_.options.accessibility === true) {
	            _.initADA();
	        }

	        if ( _.options.autoplay ) {

	            _.paused = false;
	            _.autoPlay();

	        }

	    };

	    Slick.prototype.initADA = function() {
	        var _ = this,
	                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
	                tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
	                    return (val >= 0) && (val < _.slideCount);
	                });

	        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
	            'aria-hidden': 'true',
	            'tabindex': '-1'
	        }).find('a, input, button, select').attr({
	            'tabindex': '-1'
	        });

	        if (_.$dots !== null) {
	            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
	                var slideControlIndex = tabControlIndexes.indexOf(i);

	                $(this).attr({
	                    'role': 'tabpanel',
	                    'id': 'slick-slide' + _.instanceUid + i,
	                    'tabindex': -1
	                });

	                if (slideControlIndex !== -1) {
	                   var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
	                   if ($('#' + ariaButtonControl).length) {
	                     $(this).attr({
	                         'aria-describedby': ariaButtonControl
	                     });
	                   }
	                }
	            });

	            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
	                var mappedSlideIndex = tabControlIndexes[i];

	                $(this).attr({
	                    'role': 'presentation'
	                });

	                $(this).find('button').first().attr({
	                    'role': 'tab',
	                    'id': 'slick-slide-control' + _.instanceUid + i,
	                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
	                    'aria-label': (i + 1) + ' of ' + numDotGroups,
	                    'aria-selected': null,
	                    'tabindex': '-1'
	                });

	            }).eq(_.currentSlide).find('button').attr({
	                'aria-selected': 'true',
	                'tabindex': '0'
	            }).end();
	        }

	        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
	          if (_.options.focusOnChange) {
	            _.$slides.eq(i).attr({'tabindex': '0'});
	          } else {
	            _.$slides.eq(i).removeAttr('tabindex');
	          }
	        }

	        _.activateADA();

	    };

	    Slick.prototype.initArrowEvents = function() {

	        var _ = this;

	        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
	            _.$prevArrow
	               .off('click.slick')
	               .on('click.slick', {
	                    message: 'previous'
	               }, _.changeSlide);
	            _.$nextArrow
	               .off('click.slick')
	               .on('click.slick', {
	                    message: 'next'
	               }, _.changeSlide);

	            if (_.options.accessibility === true) {
	                _.$prevArrow.on('keydown.slick', _.keyHandler);
	                _.$nextArrow.on('keydown.slick', _.keyHandler);
	            }
	        }

	    };

	    Slick.prototype.initDotEvents = function() {

	        var _ = this;

	        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
	            $('li', _.$dots).on('click.slick', {
	                message: 'index'
	            }, _.changeSlide);

	            if (_.options.accessibility === true) {
	                _.$dots.on('keydown.slick', _.keyHandler);
	            }
	        }

	        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

	            $('li', _.$dots)
	                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
	                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

	        }

	    };

	    Slick.prototype.initSlideEvents = function() {

	        var _ = this;

	        if ( _.options.pauseOnHover ) {

	            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
	            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

	        }

	    };

	    Slick.prototype.initializeEvents = function() {

	        var _ = this;

	        _.initArrowEvents();

	        _.initDotEvents();
	        _.initSlideEvents();

	        _.$list.on('touchstart.slick mousedown.slick', {
	            action: 'start'
	        }, _.swipeHandler);
	        _.$list.on('touchmove.slick mousemove.slick', {
	            action: 'move'
	        }, _.swipeHandler);
	        _.$list.on('touchend.slick mouseup.slick', {
	            action: 'end'
	        }, _.swipeHandler);
	        _.$list.on('touchcancel.slick mouseleave.slick', {
	            action: 'end'
	        }, _.swipeHandler);

	        _.$list.on('click.slick', _.clickHandler);

	        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

	        if (_.options.accessibility === true) {
	            _.$list.on('keydown.slick', _.keyHandler);
	        }

	        if (_.options.focusOnSelect === true) {
	            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
	        }

	        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

	        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

	        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

	        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
	        $(_.setPosition);

	    };

	    Slick.prototype.initUI = function() {

	        var _ = this;

	        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

	            _.$prevArrow.show();
	            _.$nextArrow.show();

	        }

	        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

	            _.$dots.show();

	        }

	    };

	    Slick.prototype.keyHandler = function(event) {

	        var _ = this;
	         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
	        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
	            if (event.keyCode === 37 && _.options.accessibility === true) {
	                _.changeSlide({
	                    data: {
	                        message: _.options.rtl === true ? 'next' :  'previous'
	                    }
	                });
	            } else if (event.keyCode === 39 && _.options.accessibility === true) {
	                _.changeSlide({
	                    data: {
	                        message: _.options.rtl === true ? 'previous' : 'next'
	                    }
	                });
	            }
	        }

	    };

	    Slick.prototype.lazyLoad = function() {

	        var _ = this,
	            loadRange, cloneRange, rangeStart, rangeEnd;

	        function loadImages(imagesScope) {

	            $('img[data-lazy]', imagesScope).each(function() {

	                var image = $(this),
	                    imageSource = $(this).attr('data-lazy'),
	                    imageSrcSet = $(this).attr('data-srcset'),
	                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
	                    imageToLoad = document.createElement('img');

	                imageToLoad.onload = function() {

	                    image
	                        .animate({ opacity: 0 }, 100, function() {

	                            if (imageSrcSet) {
	                                image
	                                    .attr('srcset', imageSrcSet );

	                                if (imageSizes) {
	                                    image
	                                        .attr('sizes', imageSizes );
	                                }
	                            }

	                            image
	                                .attr('src', imageSource)
	                                .animate({ opacity: 1 }, 200, function() {
	                                    image
	                                        .removeAttr('data-lazy data-srcset data-sizes')
	                                        .removeClass('slick-loading');
	                                });
	                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
	                        });

	                };

	                imageToLoad.onerror = function() {

	                    image
	                        .removeAttr( 'data-lazy' )
	                        .removeClass( 'slick-loading' )
	                        .addClass( 'slick-lazyload-error' );

	                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

	                };

	                imageToLoad.src = imageSource;

	            });

	        }

	        if (_.options.centerMode === true) {
	            if (_.options.infinite === true) {
	                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
	                rangeEnd = rangeStart + _.options.slidesToShow + 2;
	            } else {
	                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
	                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
	            }
	        } else {
	            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
	            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
	            if (_.options.fade === true) {
	                if (rangeStart > 0) rangeStart--;
	                if (rangeEnd <= _.slideCount) rangeEnd++;
	            }
	        }

	        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

	        if (_.options.lazyLoad === 'anticipated') {
	            var prevSlide = rangeStart - 1,
	                nextSlide = rangeEnd,
	                $slides = _.$slider.find('.slick-slide');

	            for (var i = 0; i < _.options.slidesToScroll; i++) {
	                if (prevSlide < 0) prevSlide = _.slideCount - 1;
	                loadRange = loadRange.add($slides.eq(prevSlide));
	                loadRange = loadRange.add($slides.eq(nextSlide));
	                prevSlide--;
	                nextSlide++;
	            }
	        }

	        loadImages(loadRange);

	        if (_.slideCount <= _.options.slidesToShow) {
	            cloneRange = _.$slider.find('.slick-slide');
	            loadImages(cloneRange);
	        } else
	        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
	            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
	            loadImages(cloneRange);
	        } else if (_.currentSlide === 0) {
	            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
	            loadImages(cloneRange);
	        }

	    };

	    Slick.prototype.loadSlider = function() {

	        var _ = this;

	        _.setPosition();

	        _.$slideTrack.css({
	            opacity: 1
	        });

	        _.$slider.removeClass('slick-loading');

	        _.initUI();

	        if (_.options.lazyLoad === 'progressive') {
	            _.progressiveLazyLoad();
	        }

	    };

	    Slick.prototype.next = Slick.prototype.slickNext = function() {

	        var _ = this;

	        _.changeSlide({
	            data: {
	                message: 'next'
	            }
	        });

	    };

	    Slick.prototype.orientationChange = function() {

	        var _ = this;

	        _.checkResponsive();
	        _.setPosition();

	    };

	    Slick.prototype.pause = Slick.prototype.slickPause = function() {

	        var _ = this;

	        _.autoPlayClear();
	        _.paused = true;

	    };

	    Slick.prototype.play = Slick.prototype.slickPlay = function() {

	        var _ = this;

	        _.autoPlay();
	        _.options.autoplay = true;
	        _.paused = false;
	        _.focussed = false;
	        _.interrupted = false;

	    };

	    Slick.prototype.postSlide = function(index) {

	        var _ = this;

	        if( !_.unslicked ) {

	            _.$slider.trigger('afterChange', [_, index]);

	            _.animating = false;

	            if (_.slideCount > _.options.slidesToShow) {
	                _.setPosition();
	            }

	            _.swipeLeft = null;

	            if ( _.options.autoplay ) {
	                _.autoPlay();
	            }

	            if (_.options.accessibility === true) {
	                _.initADA();

	                if (_.options.focusOnChange) {
	                    var $currentSlide = $(_.$slides.get(_.currentSlide));
	                    $currentSlide.attr('tabindex', 0).focus();
	                }
	            }

	        }

	    };

	    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

	        var _ = this;

	        _.changeSlide({
	            data: {
	                message: 'previous'
	            }
	        });

	    };

	    Slick.prototype.preventDefault = function(event) {

	        event.preventDefault();

	    };

	    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

	        tryCount = tryCount || 1;

	        var _ = this,
	            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
	            image,
	            imageSource,
	            imageSrcSet,
	            imageSizes,
	            imageToLoad;

	        if ( $imgsToLoad.length ) {

	            image = $imgsToLoad.first();
	            imageSource = image.attr('data-lazy');
	            imageSrcSet = image.attr('data-srcset');
	            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
	            imageToLoad = document.createElement('img');

	            imageToLoad.onload = function() {

	                if (imageSrcSet) {
	                    image
	                        .attr('srcset', imageSrcSet );

	                    if (imageSizes) {
	                        image
	                            .attr('sizes', imageSizes );
	                    }
	                }

	                image
	                    .attr( 'src', imageSource )
	                    .removeAttr('data-lazy data-srcset data-sizes')
	                    .removeClass('slick-loading');

	                if ( _.options.adaptiveHeight === true ) {
	                    _.setPosition();
	                }

	                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
	                _.progressiveLazyLoad();

	            };

	            imageToLoad.onerror = function() {

	                if ( tryCount < 3 ) {

	                    /**
	                     * try to load the image 3 times,
	                     * leave a slight delay so we don't get
	                     * servers blocking the request.
	                     */
	                    setTimeout( function() {
	                        _.progressiveLazyLoad( tryCount + 1 );
	                    }, 500 );

	                } else {

	                    image
	                        .removeAttr( 'data-lazy' )
	                        .removeClass( 'slick-loading' )
	                        .addClass( 'slick-lazyload-error' );

	                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

	                    _.progressiveLazyLoad();

	                }

	            };

	            imageToLoad.src = imageSource;

	        } else {

	            _.$slider.trigger('allImagesLoaded', [ _ ]);

	        }

	    };

	    Slick.prototype.refresh = function( initializing ) {

	        var _ = this, currentSlide, lastVisibleIndex;

	        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

	        // in non-infinite sliders, we don't want to go past the
	        // last visible index.
	        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
	            _.currentSlide = lastVisibleIndex;
	        }

	        // if less slides than to show, go to start.
	        if ( _.slideCount <= _.options.slidesToShow ) {
	            _.currentSlide = 0;

	        }

	        currentSlide = _.currentSlide;

	        _.destroy(true);

	        $.extend(_, _.initials, { currentSlide: currentSlide });

	        _.init();

	        if( !initializing ) {

	            _.changeSlide({
	                data: {
	                    message: 'index',
	                    index: currentSlide
	                }
	            }, false);

	        }

	    };

	    Slick.prototype.registerBreakpoints = function() {

	        var _ = this, breakpoint, currentBreakpoint, l,
	            responsiveSettings = _.options.responsive || null;

	        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

	            _.respondTo = _.options.respondTo || 'window';

	            for ( breakpoint in responsiveSettings ) {

	                l = _.breakpoints.length-1;

	                if (responsiveSettings.hasOwnProperty(breakpoint)) {
	                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

	                    // loop through the breakpoints and cut out any existing
	                    // ones with the same breakpoint number, we don't want dupes.
	                    while( l >= 0 ) {
	                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
	                            _.breakpoints.splice(l,1);
	                        }
	                        l--;
	                    }

	                    _.breakpoints.push(currentBreakpoint);
	                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

	                }

	            }

	            _.breakpoints.sort(function(a, b) {
	                return ( _.options.mobileFirst ) ? a-b : b-a;
	            });

	        }

	    };

	    Slick.prototype.reinit = function() {

	        var _ = this;

	        _.$slides =
	            _.$slideTrack
	                .children(_.options.slide)
	                .addClass('slick-slide');

	        _.slideCount = _.$slides.length;

	        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
	            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
	        }

	        if (_.slideCount <= _.options.slidesToShow) {
	            _.currentSlide = 0;
	        }

	        _.registerBreakpoints();

	        _.setProps();
	        _.setupInfinite();
	        _.buildArrows();
	        _.updateArrows();
	        _.initArrowEvents();
	        _.buildDots();
	        _.updateDots();
	        _.initDotEvents();
	        _.cleanUpSlideEvents();
	        _.initSlideEvents();

	        _.checkResponsive(false, true);

	        if (_.options.focusOnSelect === true) {
	            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
	        }

	        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

	        _.setPosition();
	        _.focusHandler();

	        _.paused = !_.options.autoplay;
	        _.autoPlay();

	        _.$slider.trigger('reInit', [_]);

	    };

	    Slick.prototype.resize = function() {

	        var _ = this;

	        if ($(window).width() !== _.windowWidth) {
	            clearTimeout(_.windowDelay);
	            _.windowDelay = window.setTimeout(function() {
	                _.windowWidth = $(window).width();
	                _.checkResponsive();
	                if( !_.unslicked ) { _.setPosition(); }
	            }, 50);
	        }
	    };

	    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

	        var _ = this;

	        if (typeof(index) === 'boolean') {
	            removeBefore = index;
	            index = removeBefore === true ? 0 : _.slideCount - 1;
	        } else {
	            index = removeBefore === true ? --index : index;
	        }

	        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
	            return false;
	        }

	        _.unload();

	        if (removeAll === true) {
	            _.$slideTrack.children().remove();
	        } else {
	            _.$slideTrack.children(this.options.slide).eq(index).remove();
	        }

	        _.$slides = _.$slideTrack.children(this.options.slide);

	        _.$slideTrack.children(this.options.slide).detach();

	        _.$slideTrack.append(_.$slides);

	        _.$slidesCache = _.$slides;

	        _.reinit();

	    };

	    Slick.prototype.setCSS = function(position) {

	        var _ = this,
	            positionProps = {},
	            x, y;

	        if (_.options.rtl === true) {
	            position = -position;
	        }
	        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
	        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

	        positionProps[_.positionProp] = position;

	        if (_.transformsEnabled === false) {
	            _.$slideTrack.css(positionProps);
	        } else {
	            positionProps = {};
	            if (_.cssTransitions === false) {
	                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
	                _.$slideTrack.css(positionProps);
	            } else {
	                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
	                _.$slideTrack.css(positionProps);
	            }
	        }

	    };

	    Slick.prototype.setDimensions = function() {

	        var _ = this;

	        if (_.options.vertical === false) {
	            if (_.options.centerMode === true) {
	                _.$list.css({
	                    padding: ('0px ' + _.options.centerPadding)
	                });
	            }
	        } else {
	            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
	            if (_.options.centerMode === true) {
	                _.$list.css({
	                    padding: (_.options.centerPadding + ' 0px')
	                });
	            }
	        }

	        _.listWidth = _.$list.width();
	        _.listHeight = _.$list.height();


	        if (_.options.vertical === false && _.options.variableWidth === false) {
	            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
	            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

	        } else if (_.options.variableWidth === true) {
	            _.$slideTrack.width(5000 * _.slideCount);
	        } else {
	            _.slideWidth = Math.ceil(_.listWidth);
	            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
	        }

	        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
	        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

	    };

	    Slick.prototype.setFade = function() {

	        var _ = this,
	            targetLeft;

	        _.$slides.each(function(index, element) {
	            targetLeft = (_.slideWidth * index) * -1;
	            if (_.options.rtl === true) {
	                $(element).css({
	                    position: 'relative',
	                    right: targetLeft,
	                    top: 0,
	                    zIndex: _.options.zIndex - 2,
	                    opacity: 0
	                });
	            } else {
	                $(element).css({
	                    position: 'relative',
	                    left: targetLeft,
	                    top: 0,
	                    zIndex: _.options.zIndex - 2,
	                    opacity: 0
	                });
	            }
	        });

	        _.$slides.eq(_.currentSlide).css({
	            zIndex: _.options.zIndex - 1,
	            opacity: 1
	        });

	    };

	    Slick.prototype.setHeight = function() {

	        var _ = this;

	        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
	            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
	            _.$list.css('height', targetHeight);
	        }

	    };

	    Slick.prototype.setOption =
	    Slick.prototype.slickSetOption = function() {

	        /**
	         * accepts arguments in format of:
	         *
	         *  - for changing a single option's value:
	         *     .slick("setOption", option, value, refresh )
	         *
	         *  - for changing a set of responsive options:
	         *     .slick("setOption", 'responsive', [{}, ...], refresh )
	         *
	         *  - for updating multiple values at once (not responsive)
	         *     .slick("setOption", { 'option': value, ... }, refresh )
	         */

	        var _ = this, l, item, option, value, refresh = false, type;

	        if( $.type( arguments[0] ) === 'object' ) {

	            option =  arguments[0];
	            refresh = arguments[1];
	            type = 'multiple';

	        } else if ( $.type( arguments[0] ) === 'string' ) {

	            option =  arguments[0];
	            value = arguments[1];
	            refresh = arguments[2];

	            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

	                type = 'responsive';

	            } else if ( typeof arguments[1] !== 'undefined' ) {

	                type = 'single';

	            }

	        }

	        if ( type === 'single' ) {

	            _.options[option] = value;


	        } else if ( type === 'multiple' ) {

	            $.each( option , function( opt, val ) {

	                _.options[opt] = val;

	            });


	        } else if ( type === 'responsive' ) {

	            for ( item in value ) {

	                if( $.type( _.options.responsive ) !== 'array' ) {

	                    _.options.responsive = [ value[item] ];

	                } else {

	                    l = _.options.responsive.length-1;

	                    // loop through the responsive object and splice out duplicates.
	                    while( l >= 0 ) {

	                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

	                            _.options.responsive.splice(l,1);

	                        }

	                        l--;

	                    }

	                    _.options.responsive.push( value[item] );

	                }

	            }

	        }

	        if ( refresh ) {

	            _.unload();
	            _.reinit();

	        }

	    };

	    Slick.prototype.setPosition = function() {

	        var _ = this;

	        _.setDimensions();

	        _.setHeight();

	        if (_.options.fade === false) {
	            _.setCSS(_.getLeft(_.currentSlide));
	        } else {
	            _.setFade();
	        }

	        _.$slider.trigger('setPosition', [_]);

	    };

	    Slick.prototype.setProps = function() {

	        var _ = this,
	            bodyStyle = document.body.style;

	        _.positionProp = _.options.vertical === true ? 'top' : 'left';

	        if (_.positionProp === 'top') {
	            _.$slider.addClass('slick-vertical');
	        } else {
	            _.$slider.removeClass('slick-vertical');
	        }

	        if (bodyStyle.WebkitTransition !== undefined ||
	            bodyStyle.MozTransition !== undefined ||
	            bodyStyle.msTransition !== undefined) {
	            if (_.options.useCSS === true) {
	                _.cssTransitions = true;
	            }
	        }

	        if ( _.options.fade ) {
	            if ( typeof _.options.zIndex === 'number' ) {
	                if( _.options.zIndex < 3 ) {
	                    _.options.zIndex = 3;
	                }
	            } else {
	                _.options.zIndex = _.defaults.zIndex;
	            }
	        }

	        if (bodyStyle.OTransform !== undefined) {
	            _.animType = 'OTransform';
	            _.transformType = '-o-transform';
	            _.transitionType = 'OTransition';
	            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
	        }
	        if (bodyStyle.MozTransform !== undefined) {
	            _.animType = 'MozTransform';
	            _.transformType = '-moz-transform';
	            _.transitionType = 'MozTransition';
	            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
	        }
	        if (bodyStyle.webkitTransform !== undefined) {
	            _.animType = 'webkitTransform';
	            _.transformType = '-webkit-transform';
	            _.transitionType = 'webkitTransition';
	            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
	        }
	        if (bodyStyle.msTransform !== undefined) {
	            _.animType = 'msTransform';
	            _.transformType = '-ms-transform';
	            _.transitionType = 'msTransition';
	            if (bodyStyle.msTransform === undefined) _.animType = false;
	        }
	        if (bodyStyle.transform !== undefined && _.animType !== false) {
	            _.animType = 'transform';
	            _.transformType = 'transform';
	            _.transitionType = 'transition';
	        }
	        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
	    };


	    Slick.prototype.setSlideClasses = function(index) {

	        var _ = this,
	            centerOffset, allSlides, indexOffset, remainder;

	        allSlides = _.$slider
	            .find('.slick-slide')
	            .removeClass('slick-active slick-center slick-current')
	            .attr('aria-hidden', 'true');

	        _.$slides
	            .eq(index)
	            .addClass('slick-current');

	        if (_.options.centerMode === true) {

	            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

	            centerOffset = Math.floor(_.options.slidesToShow / 2);

	            if (_.options.infinite === true) {

	                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
	                    _.$slides
	                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
	                        .addClass('slick-active')
	                        .attr('aria-hidden', 'false');

	                } else {

	                    indexOffset = _.options.slidesToShow + index;
	                    allSlides
	                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
	                        .addClass('slick-active')
	                        .attr('aria-hidden', 'false');

	                }

	                if (index === 0) {

	                    allSlides
	                        .eq(allSlides.length - 1 - _.options.slidesToShow)
	                        .addClass('slick-center');

	                } else if (index === _.slideCount - 1) {

	                    allSlides
	                        .eq(_.options.slidesToShow)
	                        .addClass('slick-center');

	                }

	            }

	            _.$slides
	                .eq(index)
	                .addClass('slick-center');

	        } else {

	            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

	                _.$slides
	                    .slice(index, index + _.options.slidesToShow)
	                    .addClass('slick-active')
	                    .attr('aria-hidden', 'false');

	            } else if (allSlides.length <= _.options.slidesToShow) {

	                allSlides
	                    .addClass('slick-active')
	                    .attr('aria-hidden', 'false');

	            } else {

	                remainder = _.slideCount % _.options.slidesToShow;
	                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

	                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

	                    allSlides
	                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
	                        .addClass('slick-active')
	                        .attr('aria-hidden', 'false');

	                } else {

	                    allSlides
	                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
	                        .addClass('slick-active')
	                        .attr('aria-hidden', 'false');

	                }

	            }

	        }

	        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
	            _.lazyLoad();
	        }
	    };

	    Slick.prototype.setupInfinite = function() {

	        var _ = this,
	            i, slideIndex, infiniteCount;

	        if (_.options.fade === true) {
	            _.options.centerMode = false;
	        }

	        if (_.options.infinite === true && _.options.fade === false) {

	            slideIndex = null;

	            if (_.slideCount > _.options.slidesToShow) {

	                if (_.options.centerMode === true) {
	                    infiniteCount = _.options.slidesToShow + 1;
	                } else {
	                    infiniteCount = _.options.slidesToShow;
	                }

	                for (i = _.slideCount; i > (_.slideCount -
	                        infiniteCount); i -= 1) {
	                    slideIndex = i - 1;
	                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
	                        .attr('data-slick-index', slideIndex - _.slideCount)
	                        .prependTo(_.$slideTrack).addClass('slick-cloned');
	                }
	                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
	                    slideIndex = i;
	                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
	                        .attr('data-slick-index', slideIndex + _.slideCount)
	                        .appendTo(_.$slideTrack).addClass('slick-cloned');
	                }
	                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
	                    $(this).attr('id', '');
	                });

	            }

	        }

	    };

	    Slick.prototype.interrupt = function( toggle ) {

	        var _ = this;

	        if( !toggle ) {
	            _.autoPlay();
	        }
	        _.interrupted = toggle;

	    };

	    Slick.prototype.selectHandler = function(event) {

	        var _ = this;

	        var targetElement =
	            $(event.target).is('.slick-slide') ?
	                $(event.target) :
	                $(event.target).parents('.slick-slide');

	        var index = parseInt(targetElement.attr('data-slick-index'));

	        if (!index) index = 0;

	        if (_.slideCount <= _.options.slidesToShow) {

	            _.slideHandler(index, false, true);
	            return;

	        }

	        _.slideHandler(index);

	    };

	    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

	        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
	            _ = this, navTarget;

	        sync = sync || false;

	        if (_.animating === true && _.options.waitForAnimate === true) {
	            return;
	        }

	        if (_.options.fade === true && _.currentSlide === index) {
	            return;
	        }

	        if (sync === false) {
	            _.asNavFor(index);
	        }

	        targetSlide = index;
	        targetLeft = _.getLeft(targetSlide);
	        slideLeft = _.getLeft(_.currentSlide);

	        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

	        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
	            if (_.options.fade === false) {
	                targetSlide = _.currentSlide;
	                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
	                    _.animateSlide(slideLeft, function() {
	                        _.postSlide(targetSlide);
	                    });
	                } else {
	                    _.postSlide(targetSlide);
	                }
	            }
	            return;
	        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
	            if (_.options.fade === false) {
	                targetSlide = _.currentSlide;
	                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
	                    _.animateSlide(slideLeft, function() {
	                        _.postSlide(targetSlide);
	                    });
	                } else {
	                    _.postSlide(targetSlide);
	                }
	            }
	            return;
	        }

	        if ( _.options.autoplay ) {
	            clearInterval(_.autoPlayTimer);
	        }

	        if (targetSlide < 0) {
	            if (_.slideCount % _.options.slidesToScroll !== 0) {
	                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
	            } else {
	                animSlide = _.slideCount + targetSlide;
	            }
	        } else if (targetSlide >= _.slideCount) {
	            if (_.slideCount % _.options.slidesToScroll !== 0) {
	                animSlide = 0;
	            } else {
	                animSlide = targetSlide - _.slideCount;
	            }
	        } else {
	            animSlide = targetSlide;
	        }

	        _.animating = true;

	        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

	        oldSlide = _.currentSlide;
	        _.currentSlide = animSlide;

	        _.setSlideClasses(_.currentSlide);

	        if ( _.options.asNavFor ) {

	            navTarget = _.getNavTarget();
	            navTarget = navTarget.slick('getSlick');

	            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
	                navTarget.setSlideClasses(_.currentSlide);
	            }

	        }

	        _.updateDots();
	        _.updateArrows();

	        if (_.options.fade === true) {
	            if (dontAnimate !== true) {

	                _.fadeSlideOut(oldSlide);

	                _.fadeSlide(animSlide, function() {
	                    _.postSlide(animSlide);
	                });

	            } else {
	                _.postSlide(animSlide);
	            }
	            _.animateHeight();
	            return;
	        }

	        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
	            _.animateSlide(targetLeft, function() {
	                _.postSlide(animSlide);
	            });
	        } else {
	            _.postSlide(animSlide);
	        }

	    };

	    Slick.prototype.startLoad = function() {

	        var _ = this;

	        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

	            _.$prevArrow.hide();
	            _.$nextArrow.hide();

	        }

	        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

	            _.$dots.hide();

	        }

	        _.$slider.addClass('slick-loading');

	    };

	    Slick.prototype.swipeDirection = function() {

	        var xDist, yDist, r, swipeAngle, _ = this;

	        xDist = _.touchObject.startX - _.touchObject.curX;
	        yDist = _.touchObject.startY - _.touchObject.curY;
	        r = Math.atan2(yDist, xDist);

	        swipeAngle = Math.round(r * 180 / Math.PI);
	        if (swipeAngle < 0) {
	            swipeAngle = 360 - Math.abs(swipeAngle);
	        }

	        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
	            return (_.options.rtl === false ? 'left' : 'right');
	        }
	        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
	            return (_.options.rtl === false ? 'left' : 'right');
	        }
	        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
	            return (_.options.rtl === false ? 'right' : 'left');
	        }
	        if (_.options.verticalSwiping === true) {
	            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
	                return 'down';
	            } else {
	                return 'up';
	            }
	        }

	        return 'vertical';

	    };

	    Slick.prototype.swipeEnd = function(event) {

	        var _ = this,
	            slideCount,
	            direction;

	        _.dragging = false;
	        _.swiping = false;

	        if (_.scrolling) {
	            _.scrolling = false;
	            return false;
	        }

	        _.interrupted = false;
	        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

	        if ( _.touchObject.curX === undefined ) {
	            return false;
	        }

	        if ( _.touchObject.edgeHit === true ) {
	            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
	        }

	        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

	            direction = _.swipeDirection();

	            switch ( direction ) {

	                case 'left':
	                case 'down':

	                    slideCount =
	                        _.options.swipeToSlide ?
	                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
	                            _.currentSlide + _.getSlideCount();

	                    _.currentDirection = 0;

	                    break;

	                case 'right':
	                case 'up':

	                    slideCount =
	                        _.options.swipeToSlide ?
	                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
	                            _.currentSlide - _.getSlideCount();

	                    _.currentDirection = 1;

	                    break;

	                default:


	            }

	            if( direction != 'vertical' ) {

	                _.slideHandler( slideCount );
	                _.touchObject = {};
	                _.$slider.trigger('swipe', [_, direction ]);

	            }

	        } else {

	            if ( _.touchObject.startX !== _.touchObject.curX ) {

	                _.slideHandler( _.currentSlide );
	                _.touchObject = {};

	            }

	        }

	    };

	    Slick.prototype.swipeHandler = function(event) {

	        var _ = this;

	        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
	            return;
	        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
	            return;
	        }

	        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
	            event.originalEvent.touches.length : 1;

	        _.touchObject.minSwipe = _.listWidth / _.options
	            .touchThreshold;

	        if (_.options.verticalSwiping === true) {
	            _.touchObject.minSwipe = _.listHeight / _.options
	                .touchThreshold;
	        }

	        switch (event.data.action) {

	            case 'start':
	                _.swipeStart(event);
	                break;

	            case 'move':
	                _.swipeMove(event);
	                break;

	            case 'end':
	                _.swipeEnd(event);
	                break;

	        }

	    };

	    Slick.prototype.swipeMove = function(event) {

	        var _ = this,
	            edgeWasHit = false,
	            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

	        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

	        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
	            return false;
	        }

	        curLeft = _.getLeft(_.currentSlide);

	        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
	        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

	        _.touchObject.swipeLength = Math.round(Math.sqrt(
	            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

	        verticalSwipeLength = Math.round(Math.sqrt(
	            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

	        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
	            _.scrolling = true;
	            return false;
	        }

	        if (_.options.verticalSwiping === true) {
	            _.touchObject.swipeLength = verticalSwipeLength;
	        }

	        swipeDirection = _.swipeDirection();

	        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
	            _.swiping = true;
	            event.preventDefault();
	        }

	        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
	        if (_.options.verticalSwiping === true) {
	            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
	        }


	        swipeLength = _.touchObject.swipeLength;

	        _.touchObject.edgeHit = false;

	        if (_.options.infinite === false) {
	            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
	                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
	                _.touchObject.edgeHit = true;
	            }
	        }

	        if (_.options.vertical === false) {
	            _.swipeLeft = curLeft + swipeLength * positionOffset;
	        } else {
	            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
	        }
	        if (_.options.verticalSwiping === true) {
	            _.swipeLeft = curLeft + swipeLength * positionOffset;
	        }

	        if (_.options.fade === true || _.options.touchMove === false) {
	            return false;
	        }

	        if (_.animating === true) {
	            _.swipeLeft = null;
	            return false;
	        }

	        _.setCSS(_.swipeLeft);

	    };

	    Slick.prototype.swipeStart = function(event) {

	        var _ = this,
	            touches;

	        _.interrupted = true;

	        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
	            _.touchObject = {};
	            return false;
	        }

	        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
	            touches = event.originalEvent.touches[0];
	        }

	        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
	        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

	        _.dragging = true;

	    };

	    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

	        var _ = this;

	        if (_.$slidesCache !== null) {

	            _.unload();

	            _.$slideTrack.children(this.options.slide).detach();

	            _.$slidesCache.appendTo(_.$slideTrack);

	            _.reinit();

	        }

	    };

	    Slick.prototype.unload = function() {

	        var _ = this;

	        $('.slick-cloned', _.$slider).remove();

	        if (_.$dots) {
	            _.$dots.remove();
	        }

	        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
	            _.$prevArrow.remove();
	        }

	        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
	            _.$nextArrow.remove();
	        }

	        _.$slides
	            .removeClass('slick-slide slick-active slick-visible slick-current')
	            .attr('aria-hidden', 'true')
	            .css('width', '');

	    };

	    Slick.prototype.unslick = function(fromBreakpoint) {

	        var _ = this;
	        _.$slider.trigger('unslick', [_, fromBreakpoint]);
	        _.destroy();

	    };

	    Slick.prototype.updateArrows = function() {

	        var _ = this,
	            centerOffset;

	        centerOffset = Math.floor(_.options.slidesToShow / 2);

	        if ( _.options.arrows === true &&
	            _.slideCount > _.options.slidesToShow &&
	            !_.options.infinite ) {

	            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
	            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

	            if (_.currentSlide === 0) {

	                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
	                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

	            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

	                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
	                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

	            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

	                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
	                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

	            }

	        }

	    };

	    Slick.prototype.updateDots = function() {

	        var _ = this;

	        if (_.$dots !== null) {

	            _.$dots
	                .find('li')
	                    .removeClass('slick-active')
	                    .end();

	            _.$dots
	                .find('li')
	                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
	                .addClass('slick-active');

	        }

	    };

	    Slick.prototype.visibility = function() {

	        var _ = this;

	        if ( _.options.autoplay ) {

	            if ( document[_.hidden] ) {

	                _.interrupted = true;

	            } else {

	                _.interrupted = false;

	            }

	        }

	    };

	    $.fn.slick = function() {
	        var _ = this,
	            opt = arguments[0],
	            args = Array.prototype.slice.call(arguments, 1),
	            l = _.length,
	            i,
	            ret;
	        for (i = 0; i < l; i++) {
	            if (typeof opt == 'object' || typeof opt == 'undefined')
	                _[i].slick = new Slick(_[i], opt);
	            else
	                ret = _[i].slick[opt].apply(_[i].slick, args);
	            if (typeof ret != 'undefined') return ret;
	        }
	        return _;
	    };

	}));


/***/ }),
/* 30 */
/***/ (function(module, exports) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = require("!!../../css-loader/index.js!../../sass-loader/index.js!./slick.scss");
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = require("!../../style-loader/addStyles.js")(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(module.hot) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../css-loader/index.js!../../sass-loader/index.js!./slick.scss", function() {
				var newContent = require("!!../../css-loader/index.js!../../sass-loader/index.js!./slick.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var $ = __webpack_require__(1);
	__webpack_require__(29);
	__webpack_require__(30);

	module.exports = function() {
	  $('.slick-slider').each(function() {
	    var $this = $(this);
	    if ($this.parents('.hidden').length == 0) {
	      $this.slick();
	    }
	  });
	};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

	module.exports = __webpack_public_path__ + "assets/static/css/bootstrap.min_ec3bb52a00e176a7181d454dffaea219.css";

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js!./index.scss");
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = require("!../../../node_modules/style-loader/addStyles.js")(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(module.hot) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js!./index.scss", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js!./index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ })
/******/ ]);