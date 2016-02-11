let factory=function(variants){
	let EnumValue=function(name,data){
		Object.defineProperties(this,{
			'__rusted':{
				value:true,
				writable:false,
				enumerable:false,
				configurable:false
			},
			'__name':{
				value:name,
				writable:false,
				enumerable:false,
				configurable:false
			},
			'__data':{
				value:data,
				writable:false,
				enumerable:false,
				configurable:false
			}
		});
	};

	let Enum={};

	for(let variant in variants){
		let data=variants[variant];

		if(data===null){
			Object.defineProperty(Enum,variant,{
				get(){
					return new EnumValue(variant,data);
				},
				enumerable:true,
				configurable:false
			});
		}else{
			Object.defineProperty(Enum,variant,{
				value(data){
					return new EnumValue(variant,data);
				},
				writable:false,
				enumerable:true,
				configurable:false
			});
		}
	}

	Object.defineProperty(Enum,'prototype',{
		set(value){
			EnumValue.prototype=value;
		},
		get(){
			return EnumValue.prototype;
		},
		enumerable:false,
		configurable:false
	});

	return Enum;
};

export default factory;
