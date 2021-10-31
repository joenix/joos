/* !!
 * Joos
 * ===== ===== ===== ===== ===== ===== ===== ===== ===== =====
 * Just A Javascript Library For Easy Control Interactive
 * 
 * Thanks for all the friends who have helped me.
 * ===== ===== ===== ===== ===== ===== ===== ===== ===== =====
 * Code By Joenix
 * 
 * - QQ: 312272592
 * - Web Site: http://joenix.com/
 */

'use strict';

(function( global, factory ){

	// Detect Environment( Document )
	global.document ? factory( global || this ) : console.log('Joos must run in Document');

})

(

// Global
this,

// Factory
function( global, undefined ){

	var

	// Window
	window = global === global.top ? global : ( global.top || global ),

	// Document
	document = window.document,

	// Location
	location = window.location,

	// History
	history = window.history,

	// Ua
	ua = window.navigator.userAgent.toLowerCase(),

	// Noop
	noop = function(){},

	// Loop
	loop = function( data, callback, index ){

		for( index in data ){

			if( callback( index, data[ index ] ) === false ){

				break;

			}

		}

	},

	// Object Source
	source = (function( expand, extend ){

		return extend( expand, [String, Number, Boolean, Array, Date, RegExp, Object, Function] );

	})

	(

		{

			String: {},

			Number: {},

			Boolean: {},

			Array: {

				min: function(){

					return Math.min.apply( null, this );

				},

				max: function(){

					return Math.max.apply( null, this );

				}

			},

			Date: {},

			RegExp: {},

			Object: {

				extend: function(destination, source){

					return (function( destination ){

						loop( source, function( name, space ){

							destination[ name ] = space;

						});

						return destination;

					})

					( destination.constructor === Object ? destination : new Object() );

				}

			},

			Function: {}

		},

		function( expand, source, ant, exp, hand ){

			loop( source, function( x, ant ){

				loop( expand[ ant.name ], function( name, space ){

					ant.prototype[ name ] = space;

				});

			});

			return Array.prototype.slice.call( source );

		}

	),

	// Events
	events = (function( mobile, space ){

		return space[2].split(' ').concat( space[ mobile + 0 ].split(' ') );

	})
	(
		/mobile/.test( ua ),

		[
			// Computer
			'mousedown mouseup mousemove mouseover mouseout keypress keydown keyup',

			// Mobile
			'touchstart touchend touchmove textInput',

			// General
			'click dbclick focus blur change'
		]
	);


	// Soul
	function joos(){

		return this.function.apply( this, arguments );

	};

	joos.prototype = {

		// Joos Version
		version: 'Version 1.0.2016.0105',

		// Debug
		debug: function( e ){

			switch( e ){

				case true:

					window.onerror = function( message, url, line ){

						console.dir({

							message: message,

							url: url,

							line: line

						});

						return true;

					};

					break;

				case false:

					window.onerror = function(){

						return false;

					};

					break;

				default:

					throw new Error( e );

					break;

			}

		},

		// Export Module
		export: function( namespace ){

			try{

				loop( eval( namespace ).prototype, function( name, space ){

					if( space ){

						joos.prototype[ name ] = space;

					}

				});

			}

			catch( error ){

				this.debug( error );

			}

		},

		// Destroy
		destroy: function( namespace ){

			try{

				loop( eval( namespace ).prototype, function( name, space ){

					if( space ){

						delete joos.prototype[ name ];

					}

				});

			}

			catch( error ){

				this.debug( error );

			}

		},

		// Function
		function(){



		}

	};


	// Kit
	function kit(){}

	kit.prototype = {

		// Value In Data
		in: function( value, data ){

			return !!( data.length ? ~data.indexOf( value ) : value in data );

		},

		// Detect Object
		detect: function( obj, type ){

			return type ? (obj.constructor === type) :

				(function( class2type, obj )
				{
					return window
					[
						/[A-Z]\w+/
							.exec(
								class2type.call( obj )
							)
							.toString()
					]
				})
				( {}.toString, obj );

		},

		// Loop Through
		each: function( arr, callback, mode ){

			var

			len = arr.length,

			i,

			rate = mode ? ( this.detect( mode, Number ) ? mode : 2 ) : 1;

			if( len ){

				if( !~mode ){ // -1

					for( i = len; i--; ){

						callback( i, arr[i] );

					}

				}

				else{

					for( i = 0; i < len; i++ ){

						if( mode === 'odd' ){

							if( i % rate === 1 ){

								callback( i, arr[i] );

							}

						}

						else{

							if( !(i % rate) ){

								callback( i, arr[i] );

							}

						}

					}

				}

			}

			else{

				for( i in arr ){

					callback( i, arr[i] );

				}

			}

		},

		// Data
		data: function( key, value ){



		},

		// Return Option
		option: function( property, argument ){

			var options = {};

			this.each( property, function( name, hand ){

				// 

			});

		}

	};


	// Event
	function evt(){}

	evt.prototype = {

		on: function( element, event, callback, capture ){

			element.addEventListener( event, callback, capture || false );

		}

	};


	// Control
	function control(){}

	control.prototype = {

		selector: function( query ){

			return document.querySelectorAll( query );

		},

		event: function( element, event, callback, capture ){



		}

	};


	// Assignment to Global
	return window.joos = new joos();

});