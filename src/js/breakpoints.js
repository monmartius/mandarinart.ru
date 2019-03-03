

function decomposeObject(object){ // {a: 1} => {'key': 'a', 'value': 1}

	var key, value, result = {};

	for( key in object ){

		result['key'] = key;
		result['value'] = object[key];
	}

	return result;
} // function decomposeObject(object){


function objectToArray(object){ // {a: 1, b:2} = > [{'key': 'a', 'value': 1}, {'key': 'b', 'value': 2}]

	var arr = [], item = {};

	for( var key in object ){

		item[key] = object[key];

		item = decomposeObject(item);

		arr.push(item);

		item = {};
	}

	return arr;
} // function objectToArray(object){

	


var $window = $(window);




//alert($window );

var	settings = {
		'sm' : 576,
		'md' : 768,
		'lg' : 992,
		'xl' : 1200
	};

// breackPoints.size => '-sm', 'sm', 'md' ... 'xl'

	settings = objectToArray(settings);

let breakPoints = {

	scrollTop : $window.scrollTop(),
	sizeWindow : '',
	previousSizeWindow : undefined,
	_previousSizeWindow : undefined,


	init (parameters){


		if(parameters){

			var arr = [], i = 0, obj = {};

			for(var sizeSymbol in parameters){

				obj = {};

				obj[sizeSymbol] = parameters[sizeSymbol];

				obj = decomposeObject(obj);

				arr.push(obj);

				i++;
		} // if(parameters){



		for( i = 0; i < arr.length; i++ ){

			for( var j = i; j < arr.length; j++ ){

				var objI = arr[i], keyI,
					objJ = arr[j], keyJ;

				objI = decomposeObject(arr[i]);
				objJ = decomposeObject(arr[j]);

				if( objI['value']  > objJ['value'] ) {

					var temp = arr[i];
					arr[i] = arr[j];
					arr[j] = temp;
				}

			} // for( var j = i; j < arr.length; j++ ){
		} // for( i = 0; i < arr.length; i++ ){

		settings = arr;

		// arr.push
		// console.log("settings");
		// console.log(settings);



		} // if(parameters){
		// else{

		// 	settings = 
		// }

		settings.unshift({'key' : '-' + settings[0]['key'], 'value' : 0});
		// 		console.log("settings");
		// console.log(settings);

		this._previousSizeWindow = this.onPoint();

		return $window;

	}, // init : function(parameters){


	onPoint : function(){
		
		var width = $window.width(), 
			size;				

// console.log(settings);

		for( var i = settings.length - 1; i >= 0; i--){

// console.log('i=' + i);

// console.log('width = ' + width );
// console.log("settings[i]['value'] = " + settings[i]['value'] );


			if( width >= settings[i]['value'] ){

				break;
			}
		}

		if( i <= 0 ){

			size = settings[0]['key'];
		}
		else{

			size = settings[i]['key'];
		}


		this.sizeWindow = size;

		if((this._previousSizeWindow !== this.sizeWindow) && (this._previousSizeWindow != undefined)){

// console.log('change ' + this._previousSizeWindow + ' => ' + this.sizeWindow);

			$window.trigger('breakPointChangeStart');

			this.previousSizeWindow = this._previousSizeWindow;
		}

		this._previousSizeWindow = this.sizeWindow;

// console.log('change ' + this._previousSizeWindow + ' => ' + this.sizeWindow);
		
		return {width, size};
	}, // size = function(){

	// onPoint : this.size



		}; // vp = {

		//$.vp = vp;



$window.on('breakPointChangeStart', function(){

	if (!this.breakPointChangeStartTrigger){

		// $.vp.__previousSizeWindow = $.vp._previousSizeWindow;

		this.breakPointChangeStartTrigger = true;

		setTimeout(function(){

			this.breakPointChangeStartTrigger = false;

// console.log('breakPointChangeStart finished');
			// $.vp._previousSizeWindow = $.vp.__previousSizeWindow;

			$window.trigger('breakPointChange');

			
		}, 1000);
	}
	else{


	}

// console.log('trigger ' + this._previousSizeWindow + ' ' + this.sizeWindow);
// console.log('$.vp.breakPointChangeStartTrigger ' + this.breakPointChangeStartTrigger);

// alert('trigger ' + $.vp._previousSizeWindow + ' ' + $.vp.sizeWindow);	
});





$window.on('resize', function(){
	breakPoints.onPoint()
});





module.exports = breakPoints;
