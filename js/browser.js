	$(function() {	
		//document.write(navigator.userAgent+"<br>");
		var browser="unknown";
		var version=0;
		var agent=navigator.userAgent;
		var i=-1;
		if((i=agent.indexOf("IE"))!=-1){//检测IE 10以下的版本
			browser="IE";
			var starti=i+browser.length+1;
			version=parseFloat(agent.slice(starti,starti+3));
			//IE提示
			$('.browser').slideDown("3000");
		}else if((i=agent.indexOf("Firefox"))!=-1){//检测firefox的版本
			browser="Firefox";//检测Firefox
			var starti=i+browser.length+1;
			version=parseFloat(agent.slice(starti,starti+3));
		}else if((i=agent.indexOf("OPR"))!=-1){//检查OPR
			browser="OPR";
			var starti=i+browser.length+1;
			version=parseFloat(agent.slice(starti,starti+3));
		}else if((i=agent.indexOf("Chrome"))!=-1){//检查Chrome
			browser="Chrome";
			var starti=i+browser.length+1;
			version=parseFloat(agent.slice(starti,starti+3));
		}else if((i=agent.indexOf("Safari"))!=-1){//检查Safari
			browser="Safari";
			var starti=i+browser.length+1;
			version=parseFloat(agent.slice(starti,starti+3));
		}else if(agent.indexOf("Trident")!=-1){//检测IE 11的版本：Trident
			browser="IE11+";
			var i=agent.indexOf("rv");
			var starti=i+2+1;
			version=parseFloat(agent.slice(starti,starti+3));
			//IE提示
			$('.browser').slideDown("3000");
		}
		//document.write("浏览器："+browser+" 版本号："+version);

	});


	