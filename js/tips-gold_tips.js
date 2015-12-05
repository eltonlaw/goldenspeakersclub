
	var numberOfPics = 11;
	function createSource(number) {
		var src =[];
		for(var i = 1 ;i<=number ;i++) {
			var link = "../../../img/gold_tips/" + i + ".jpg";
			src.push(link);
		}
		return src;
	}

	var sources = createSource(numberOfPics);

	function randomize(srcArray) {
		var x = Math.random() * srcArray.length;
		var y = Math.floor(x);
		for (var i=0;i<srcArray.length;i++) {
			if (y==i) {
				return(srcArray[i]);
			}
		}
	}
	var randomlyGenerated = randomize(sources)

	document.getElementById("random").src = randomlyGenerated


