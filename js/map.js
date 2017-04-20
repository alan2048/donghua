$(function () {
    $("nav .navbar-collapse > ul.nav.navbar-left > li").on({
        mouseover:function () {
          $(this).children(".nav-bg").addClass("current");
        },
        mouseout:function () {
          $(this).children(".nav-bg").removeClass("current");
        }
    });

    // section#map01功能函数区
   	$("section#map01 .downBtn").on("click",function () {
   		$(this).toggleClass("down");
   		$(".inputList").slideToggle();
   		var html=template("listLevel01_script",{school});
   		$(".inputList").empty().append(html);
   	});

   	$(".inputList").on({
   		mouseover:function () {
   			$(this).siblings().children(".listIcon").removeClass("current");
   			$(this).children(".listIcon").addClass("current");
   			var bid=$(this).attr("data-buildingid");
   			$(".dingwei span.listIcon[data-buildingid="+bid+"]").addClass("current");
   		},
   		mouseout:function () {
   			$(this).children(".listIcon").removeClass("current");
   			var bid=$(this).attr("data-buildingid");
   			$(".dingwei span.listIcon[data-buildingid="+bid+"]").removeClass("current");
   		},
   		click:function () {
   			var bid=$(this).attr("data-buildingid");
   			if(bid==4){
   				window.location.href=comPath+":8080/sports/cdyy.html"
   			}else{
   				var building;
   				$.each(school,function (index,value) {
   					if(value.buildingId==bid){
   						building=school[index];
   					}
   				});
   				var html=template("listLevel02_script",building);
   				$(".inputList").empty().append(html);
   			}
   			
   		}
   	},'ul >li.list');

   	$("#mapFloor05").click(function () {
   		var bid=1;
   		var building;
   		$.each(school,function (index,value) {
   			if(value.buildingId==bid){
   				building=school[index];
   			}
   		});
   		var html=template("listLevel02_script",building);
   		$(".inputList").empty().append(html);
   		$("section#map01 .inputList").show();
   	});
   	if(window.location.hash.indexOf("mapFloor05")>=0){
   		$("#mapFloor05").click();
   	};

	$("section#map01 .dingwei >span.listIcon").click(function () {
   		var bid=$(this).attr("data-buildingid");
   		if(bid){
   			if(bid==4){
   				window.location.href=comPath+":8080/sports/cdyy.html"
   			}else{
   				var building;
   				$.each(school,function (index,value) {
   					if(value.buildingId==bid){
   						building=school[index];
   					}
   				});
   				var html=template("listLevel02_script",building);
   				$(".inputList").empty().append(html);
   				$("section#map01 .inputList").show();
   			}
   		}
	});

   	$(".inputList").on({
   		mouseover:function () {
   			$(this).siblings().children(".listIcon").removeClass("current");
   			$(this).children(".listIcon").addClass("current");
   		},
   		mouseout:function () {
   			$(this).children(".listIcon").removeClass("current");
   		},
   		click:function () {
   			var index=$(this).index();
   			if(index==0){
   				var html01=template("listLevel01_script",{school});
   				$(".inputList").empty().append(html01);
   			}else{
   				var bid=$(this).attr("data-buildingid");
   				var building;
   				$.each(school,function (index,value) {
   					if(value.buildingId==bid){
   						building=school[index];
   					}
   				});

   				var floorId=$(this).attr("data-floorid");
   				var curfloor;
   				$.each(building.floor,function (index,value) {
   					if(value.floorId==floorId){
   						curfloor=building.floor[index];
   					}
   				});

   				var floorDetail=curfloor.detail;
   				var html02=template("listLevel03_script",floorDetail);
   				// console.log(html02);
   				$(".map02inputList").empty().append(html02);
   				$("section#map01").fadeOut(500);
   				$("section#map02").fadeIn(1000);
   			}
   		}
   	},'ul >li.sublist');


   	// section#map02功能函数区
   	$("section#map02 .downBtn").on("click",function () {
   		$(this).toggleClass("down");
   		$(".map02inputList").slideToggle();
   	});

   	$("section#map02 .map02inputList").on("click",".map02head",function () {
   		$("section#map02").fadeOut(500);
   		$("section#map02 .map02inputList").empty();
   		$("section#map01").fadeIn(1000);
   	});

   	$("section#map02 .map02inputList").on("click",".tabHead li",function () {
   		$(this).addClass("current").siblings().removeClass("current");
   		var index=$(this).index();
   		$("section#map02 .map02inputList .tabBody >li").removeClass("current").eq(index).addClass("current");
   		$("section#map02 .areaMap >div").removeClass("current").eq(index+1).addClass("current");
   	});

   	

   	$("section#map02 .map02inputList").on("click",".otherLink .otherLinkBtn",function () {
   		if(!$(this).hasClass("top")){
   			$(this).parents(".otherLink").animate({
   				height:"390px"
   			},1000);
   			$("section#map02 .map02inputList .tabBody").animate({
   				height:"280px"
   			},1000);
   			$(this).addClass("top");
   		}else{
   			$(this).parents(".otherLink").animate({
   				height:"170px"
   			},1000);
   			$("section#map02 .map02inputList .tabBody").animate({
   				height:"500px"
   			},1000);
   			$(this).removeClass("top");
   		}
   	});

   	$("section#map02 .map02inputList").on({
   		click:function () {
   			var classId=$(this).attr("data-classid");
   			$("#labDetail").show().next(".window-mask").eq(0).show();
   		},
   		mouseover:function () {
   			var className=$(this).attr("data-class");
   			var classJson=$(this).attr("data-classJson");
   			if(classJson){
   				$("section#map02 .areaMap >div."+className+" span.dingweiBox").show().animate(JSON.parse(classJson),100);
   			};
   		}
   	},".tabBody .classList");



   	$("#labDetail .labDetailTab >div").click(function () {
   		$(this).addClass("current").siblings().removeClass("current");
   		var index=$(this).index();
   		$("#labDetail .labTabBody >.labList").removeClass("current").eq(index).addClass("current");
   	});

   	$("#labDetail .labDetailHeader >span.labCloseBtn").click(function () {
   		$("#labDetail").hide().next(".window-mask").eq(0).hide();
   	});


});
var school=[
		{
			title:"五号学院楼",
			desc:"五号学院楼简介",
			descDetail:"东华大学松江校区",
			buildingId:1,
			floor:[{
				title:"五号学院楼1楼",
				desc:"1楼实验室简介...",
				floorId:501
			},{
				title:"五号学院楼2楼",
				desc:"2楼实验室简介...",
				floorId:502,
				detail:{
					title:"五号学院楼-2楼",
					desc:"东华大学松江校区",
					sistem:[{
							title:"仪器预约系统",
							sistemId:"sis01",
							url:comPath+":84/Home/index"
						},{
							title:"场地管理系统",
							sistemId:"sis02",
							url:comPath+":83/Home/index"
						},{
							title:"实验室预约系统",
							sistemId:"sis03",
							url:comPath+":84/Home/index"
						},{
							title:"排课管理系统",
							sistemId:"sis04",
							url:comPath+":83/Home/index"
						},{
							title:"场地预约系统",
							sistemId:"sis05",
							url:comPath+":84/Home/index"
						},{
							title:"社团管理系统",
							sistemId:"sis06",
							url:comPath+":8080/sports/stgl.html"
						},{
							title:"设备管理系统",
							sistemId:"sis07",
							url:comPath+":84/Home/index"
						},{
							title:"课外活动管理系统",
							sistemId:"sis08",
							url:comPath+":8080/sports/kwhd.html"
						},{
							title:"耗材管理系统",
							sistemId:"sis09",
							url:comPath+":83/Home/index"
						},{
							title:"奖励学分管理系统",
							sistemId:"sis10",
							url:comPath+":8080/sports/jlxf.html"
						},{
							title:"绩效考核系统",
							sistemId:"sis11",
							url:comPath+":82/Home/index"
						},{
							title:"成绩管理系统",
							sistemId:"sis12",
							url:comPath+":82/Home/index"
						}],
					areaName:[{
							areaId:1,
							name:"A区"
						},{
							areaId:2,
							name:"B区"
						},{
							areaId:3,
							name:"C区"
						}],
					area:[{
						areaA:[{
							title:"A201-泵版实验室",
							id:"A201"
						},{
							title:"A202-元素分析",
							id:"A202"
						},{
							title:"A203-熔融纺丝实验室",
							id:"A203"
						},{
							title:"A204-紫外光谱",
							id:"A204"
						},{
							title:"A206-复合纺丝机纺丝间",
							id:"A206"
						},{
							title:"A207-煅烧实验室",
							id:"A207"
						},{
							title:"A210-FDY纺丝机纺丝间",
							id:"A210"
						},{
							title:"A214-静电纺丝实验室",
							id:"A214"
						},{
							title:"A215-化学实验室1",
							id:"A215"
						},{
							title:"A217-化学实验室2",
							id:"A217"
						},{
							title:"A218-化学准备实验室",
							id:"A218"
						},{
							title:"A221-化学实验室3",
							id:"A221"
						},{
							title:"A222-电导电位仪实验室",
							id:"A222"
						},{
							title:"A226-万能制样实验室",
							id:"A226"
						},{
							title:"A227-化学实验室4",
							id:"A227"
						},{
							title:"A229-化学实验室5",
							id:"A229"
						},{
							title:"A230-布洛维硬度实验室",
							id:"A230"
						},{
							title:"A233-珠宝鉴定实验室",
							id:"A233"
						},{
							title:"A233-化学实验室6",
							id:"A233"
						},{
							title:"A236-材料热工实验室",
							id:"A236"
						},{
							title:"A237-天平实验室",
							id:"A237"
						},{
							title:"A238-析晶温度实验室",
							id:"A238"
						},{
							title:"A242-烧结温度实验室",
							id:"A242"
						}]
					},{
						areaA:[{
							title:"B201-超薄切片室",
							id:"B201",
							class:"mapB",
							classJson:'{"width":"107px","height":"107px","top":"13px","left":"0"}'
						},{
							title:"B202-公共样品处理室",
							id:"B202",
							class:"mapB",
							classJson:'{"width":"54px","height":"107px","top":"13px","left":"108px"}'
						},{
							title:"B206-X射线仪室",
							id:"B206",
							class:"mapB",
							classJson:'{"width":"121px","height":"48px","top":"281px","left":"0"}'
						},{
							title:"B207-小角X射线",
							id:"B207",
							class:"mapB",
							classJson:'{"width":"121px","height":"48px","top":"325px","left":"0"}'
						},{
							title:"B214-气质联用仪器室",
							id:"B214",
							class:"mapB",
							classJson:'{"width":"121px","height":"48px","top":"612px","left":"0"}'
						},{
							title:"B215-气质联用制样室",
							id:"B215",
							class:"mapB",
							classJson:'{"width":"121px","height":"48px","top":"656px","left":"0"}'
						},{
							title:"B217-红外拉曼光谱仪器室",
							id:"B217",
							class:"mapB",
							classJson:'{"width":"121px","height":"100px","top":"700px","left":"0"}'
						},{
							title:"B218-红外拉曼光谱办公室",
							id:"B218",
							class:"mapB",
							classJson:'{"width":"56px","height":"105px","top":"842px","left":"0"}'
						},{
							title:"B221-气质联用办公室",
							id:"B221",
							class:"mapB",
							classJson:'{"width":"58px","height":"150px","top":"742px","left":"162px"}'
						},{
							title:"B222-X射线衍射办公室",
							id:"B222",
							class:"mapB",
							classJson:'{"width":"60px","height":"150px","top":"742px","left":"218px"}'
						},{
							title:"B224-X射线衍射仪器室",
							id:"B224",
							class:"mapB",
							classJson:'{"width":"86px","height":"90px","top":"614px","left":"162px"}'
						}]
					},{
						areaA:[{
							title:"C237-天平实验室",
							id:"C237"
						},{
							title:"C202-生物材料物理实验室",
							id:"C202"
						},{
							title:"C203-生物材料化学实验室",
							id:"C203"
						},{
							title:"C205-无机合成新技术（1）",
							id:"C205"
						},{
							title:"C212-教授办公室",
							id:"C212"
						},{
							title:"C213-工程中心开发研究室",
							id:"C213"
						},{
							title:"C214-工程中心第一室",
							id:"C214"
						},{
							title:"C216-工程中心第二室",
							id:"C216"
						},{
							title:"C217-无机纳米材料研究室",
							id:"C217"
						},{
							title:"C220-先进玻璃技术工程中心",
							id:"C220"
						},{
							title:"C222-工程中心第三室",
							id:"C222"
						},{
							title:"C223-无机系化学实验室",
							id:"C223"
						},{
							title:"C225-学院发展用房",
							id:"C225"
						},{
							title:"C228-玻璃与陶瓷编辑室",
							id:"C228"
						},{
							title:"C230-教授办公室",
							id:"C230"
						},{
							title:"C232-无机合成新技术",
							id:"C232"
						},{
							title:"C233-东华大学珠宝检测中心",
							id:"C233"
						},{
							title:"C234-工程中心第三室",
							id:"C234"
						},{
							title:"C242-科研仪器研究室",
							id:"C242"
						},{
							title:"C244-接触镜产品检测室",
							id:"C244"
						},{
							title:"C246-天平计量器",
							id:"C246"
						},{
							title:"C248-化学处理室",
							id:"C248"
						},{
							title:"C256-资料室",
							id:"C256"
						},{
							title:"C260-样品室",
							id:"C260"
						},{
							title:"C262-中心主任室一",
							id:"C262"
						},{
							title:"C263-眼镜常规检测室",
							id:"C263"
						},{
							title:"C264-中心主任室二",
							id:"C264"
						},{
							title:"C265-光学参数检测室",
							id:"C265"
						},{
							title:"C266-人员办公室一",
							id:"C266"
						},{
							title:"C269-眼镜国际标准检测室",
							id:"C269"
						},{
							title:"C270-人员办公室三",
							id:"C270"
						},{
							title:"C272-人员办公室四",
							id:"C272"
						},{
							title:"C273-玻璃产品检测室",
							id:"C273"
						},{
							title:"C274-人员办公室五",
							id:"C274"
						},{
							title:"C276-材料性能检测",
							id:"C276"
						},{
							title:"C277-搪瓷保温瓶检测室",
							id:"C277"
						},{
							title:"C278-仪器设计加工室",
							id:"C278"
						}]
					}]
				}
			},{
				title:"五号学院楼3楼",
				desc:"3楼实验室简介...",
				floorId:503
			}]
		},
		{
			title:"化学实验楼",
			desc:"化学实验楼简介",
			descDetail:"东华大学松江校区",
			buildingId:3
		},
		{
			title:"综合实验楼",
			desc:"综合实验楼简介",
			descDetail:"东华大学松江校区",
			buildingId:2
		},
		{
			title:"体育部",
			desc:"体育部简介",
			descDetail:"东华大学松江校区",
			buildingId:4
		}
]