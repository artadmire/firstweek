//统计c在str中出现的次数
function charTimes(c, str) {
	var times = 0;
	for(var i = 0; i < str.length; i++) {
		if(c == str[i]) {
			times++;
		}
	}

	return times;
}

//数组去重
function norepeat(arr) {

	for(var i = 0; i < arr.length - 1; i++) {

		//内层循环要 把i 后面所有的数都找出，跟 arr【i】对比
		for(var j = i + 1; j < arr.length; j++) {
			if(arr[i] == arr[j]) {
				//如果出现相等，删掉
				//在循环遍历数组，如果删除了一个元素，要记得让 index--，否则会漏掉一个元素
				arr.splice(j, 1);
				j--;
			}
		}
	}
}

//随机 n - m之间的整数
function randomInt(n, m) {
	if(n > m) {
		var t = n;
		n = m;
		m = t;
	}

	return Math.ceil(Math.random() * (m - n)) + n
}

//随机颜色
function randomColor() {
	var str = '0123456789ABCDEF';
	var res = '';
	for(var i = 0; i < 6; i++) {
		var n = parseInt(Math.random() * str.length)
		res += str[n];
	}
	return '#' + res;
}

//getStyle(div,'width')
function getStyle(ele,attr){
	if(ele.currentStyle){
		return ele.currentStyle[attr]
	}else{
		
		return getComputedStyle(ele)[attr]
	}
}

//通过类名获取 元素 
function getElementsByClassName(className){
				console.log()
				if(document.getElementsByClassName){
					 return document.getElementsByClassName(className);
				}else{
					//低版本ie    undefined
					//document.getElementsByClassName
					var arr = [];
					
					var eles = document.getElementsByTagName('*');
					for(var i=0;i<eles.length;i++){
						var ele = eles[i];
						//class 是关键字 
						
						if(ele.className.indexOf(className) !=-1){
							console.log(ele.className)
							arr.push(ele)
							
						}
						
					}
					
					return arr;
					
				}
			}
