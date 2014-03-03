	$(".nav li").click(function(){
				var a1=$(this).find("a").eq("0").text();
				
				if(a1=="关于博隆"){
					$(".nav li").eq("1").addClass("active");
					$(".nav li").eq("0").removeClass("active");
					$(".nav li").eq("2").removeClass("active");
					$(".nav li").eq("3").removeClass("active");
					$(".nav li").eq("4").removeClass("active");
					
					
				}

				if(a1=="首页"){
					$(".nav li").eq("0").addClass("active");
					$(".nav li").eq("1").removeClass("active");
					$(".nav li").eq("2").removeClass("active");
					$(".nav li").eq("3").removeClass("active");
					$(".nav li").eq("4").removeClass("active");
					
					
				}
				

				if(a1=="校招职位"){
					$(".nav li").eq("2").addClass("active");
					$(".nav li").eq("1").removeClass("active");
					$(".nav li").eq("0").removeClass("active");
					$(".nav li").eq("3").removeClass("active");
					$(".nav li").eq("4").removeClass("active");
					
					
				}
				

				if(a1=="校招流程"){
					$(".nav li").eq("3").addClass("active");
					$(".nav li").eq("0").removeClass("active");
					$(".nav li").eq("2").removeClass("active");
					$(".nav li").eq("1").removeClass("active");
					$(".nav li").eq("4").removeClass("active");
					
					
				}
				if(a1=="招聘帮助"){
					$(".nav li").eq("4").addClass("active");
					$(".nav li").eq("0").removeClass("active");
					$(".nav li").eq("2").removeClass("active");
					$(".nav li").eq("3").removeClass("active");
					$(".nav li").eq("1").removeClass("active");
					
					
				}
				
				
				
				
				
				
		})