$(function () {
    winChange();
    $(window).resize(function () {
        winChange();
    });
    $("#echart02 #echart02-zhu ul li").click(function () {
       var index=$(this).index();
       $("#echart02 .echart02-desc >ul >li").removeClass("current").eq(index).addClass("current");
       var echartIndex='echart02-0'+index;
       var Arr=[
                    [600,210,100,90],
                    [700,200,50,120],
                    [300,400,500,600],
                    [200,500,600,300],
                    [333,122,444,777]
                ];
       echart_C01(echartIndex,Arr[index]);
    }); 
    $("nav .navbar-collapse > ul.nav.navbar-left > li").on({
        mouseover:function () {
          $(this).children(".nav-bg").addClass("current");
        },
        mouseout:function () {
          $(this).children(".nav-bg").removeClass("current");
        }
    });

});
function winChange() {
		    echart_A01('carousel-echart01');
        echart_A02('carousel-echart02');
        // echart_A03('carousel-echart03');

        echart_B01('echart01-01');
        echart_B02('echart01-02');
        // echart_B03('echart01-03');

        echart_C01('echart02-00',[600,210,100,90]);
       
        echart_D01('echart03-01');
        echart_D02('echart03-02');

        d3_chart01();
}
function echart_A01(id,where){
    var myChart = echarts.init(document.getElementById(id));
    var idx = 1;
    var option={
    title: {
        text: '堆叠区域图'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['材料学院','纺织学院','服装学院','化工学院','机械学院']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'材料学院',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'纺织学院',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'服装学院',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'化工学院',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'机械学院',
            type:'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {normal: {}},
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};
myChart.setOption(option);      
};

function echart_A02(id,where){
    var myChart = echarts.init(document.getElementById(id));
    var idx = 1;
    var option = {
    color: ['#0da1c8'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['材料学院','纺织学院','服装学院','化工学院','机械学院','信息学院','环境学院','理学院','计算机学院','人文学院','国家级重点实验室'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'社团活动次数',
            type:'bar',
            barWidth: '60%',
            itemStyle: {normal: {barBorderRadius:[5, 5, 0, 0],label:{show:true}}},
            data:[10, 52, 200, 334, 390, 330, 220, 100, 300, 250, 220]
        }
    ]
};
myChart.setOption(option);      
};

function echart_A03(id,where){
    var myChart = echarts.init(document.getElementById(id));
    var idx = 1;
    var option = {
        color: ['#c5e7e2'],
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['场地使用次数']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['材料学院','纺织学院','服装学院','化工学院','机械学院','信息学院','环境学院','理学院','计算机学院','人文学院','国家级重点实验室']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'场地使用次数',
            type:'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {normal: {}},
            data:[440, 420, 450, 550, 500, 550, 500,620,520,650,630]
        }
    ]
};
myChart.setOption(option);      
};



function echart_B01(id,where){
    var myChart = echarts.init(document.getElementById(id));
    var idx = 1;
   

var noise = getNoiseHelper();
var xData = [];
var yData = [];
noise.seed(Math.random());
function generateData(theta, min, max) {
    var data = [];
    for (var i = 0; i <= 200; i++) {
        for (var j = 0; j <= 100; j++) {
            // var x = (max - min) * i / 200 + min;
            // var y = (max - min) * j / 100 + min;
            data.push([i, j, noise.perlin2(i / 40, j / 20) + 0.5]);
            // data.push([i, j, normalDist(theta, x) * normalDist(theta, y)]);
        }
        yData.push(i);
        xData.push(i);
    }
    return data;
}
var data = generateData(2, -5, 5);

option = {
    tooltip: {},
    xAxis: {
        type: 'category',
        data: xData
    },
    yAxis: {
        type: 'category',
        data: yData
    },
    visualMap: {
        min: 0,
        max: 1,
        calculable: true,
        realtime: false,
        inRange: {
            color: ['rgba(49,54,149,0.5)', 'rgba(69,117,180,0.5)', 'rgba(116,173,209,0.5)', 'rgba(171,217,233,0.5)', 'rgba(224,243,248,0.5)', 'rgba(255,255,191,0.5)', 'rgba(254,224,144,0.5)', 'rgba(253,174,97,0.5)', 'rgba(244,109,67,0.5)', 'rgba(215,48,39,0.5)', 'rgba(165,0,38,0.5)']
        }
    },
    series: [{
        name: '热力值',
        type: 'heatmap',
        data: data,
        center: ['50%', '50%'],
        itemStyle: {
            emphasis: {
                borderColor: '#333',
                borderWidth: 1
            }
        },
        progressive: 1000,
        animation: false
    }]
};



///////////////////////////////////////////////////////////////////////////
// Simplex and perlin noise helper from https://github.com/josephg/noisejs
///////////////////////////////////////////////////////////////////////////
function getNoiseHelper(global) {

  var module = {};

  function Grad(x, y, z) {
    this.x = x; this.y = y; this.z = z;
  }

  Grad.prototype.dot2 = function(x, y) {
    return this.x*x + this.y*y;
  };

  Grad.prototype.dot3 = function(x, y, z) {
    return this.x*x + this.y*y + this.z*z;
  };

  var grad3 = [new Grad(1,1,0),new Grad(-1,1,0),new Grad(1,-1,0),new Grad(-1,-1,0),
               new Grad(1,0,1),new Grad(-1,0,1),new Grad(1,0,-1),new Grad(-1,0,-1),
               new Grad(0,1,1),new Grad(0,-1,1),new Grad(0,1,-1),new Grad(0,-1,-1)];

  var p = [151,160,137,91,90,15,
  131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,
  190, 6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,
  88,237,149,56,87,174,20,125,136,171,168, 68,175,74,165,71,134,139,48,27,166,
  77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,
  102,143,54, 65,25,63,161, 1,216,80,73,209,76,132,187,208, 89,18,169,200,196,
  135,130,116,188,159,86,164,100,109,198,173,186, 3,64,52,217,226,250,124,123,
  5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,
  223,183,170,213,119,248,152, 2,44,154,163, 70,221,153,101,155,167, 43,172,9,
  129,22,39,253, 19,98,108,110,79,113,224,232,178,185, 112,104,218,246,97,228,
  251,34,242,193,238,210,144,12,191,179,162,241, 81,51,145,235,249,14,239,107,
  49,192,214, 31,181,199,106,157,184, 84,204,176,115,121,50,45,127, 4,150,254,
  138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];
  // To remove the need for index wrapping, double the permutation table length
  var perm = new Array(512);
  var gradP = new Array(512);

  // This isn't a very good seeding function, but it works ok. It supports 2^16
  // different seed values. Write something better if you need more seeds.
  module.seed = function(seed) {
    if(seed > 0 && seed < 1) {
      // Scale the seed out
      seed *= 65536;
    }

    seed = Math.floor(seed);
    if(seed < 256) {
      seed |= seed << 8;
    }

    for(var i = 0; i < 256; i++) {
      var v;
      if (i & 1) {
        v = p[i] ^ (seed & 255);
      } else {
        v = p[i] ^ ((seed>>8) & 255);
      }

      perm[i] = perm[i + 256] = v;
      gradP[i] = gradP[i + 256] = grad3[v % 12];
    }
  };

  module.seed(0);

  /*
  for(var i=0; i<256; i++) {
    perm[i] = perm[i + 256] = p[i];
    gradP[i] = gradP[i + 256] = grad3[perm[i] % 12];
  }*/

  // Skewing and unskewing factors for 2, 3, and 4 dimensions
  var F2 = 0.5*(Math.sqrt(3)-1);
  var G2 = (3-Math.sqrt(3))/6;

  var F3 = 1/3;
  var G3 = 1/6;

  // 2D simplex noise
  module.simplex2 = function(xin, yin) {
    var n0, n1, n2; // Noise contributions from the three corners
    // Skew the input space to determine which simplex cell we're in
    var s = (xin+yin)*F2; // Hairy factor for 2D
    var i = Math.floor(xin+s);
    var j = Math.floor(yin+s);
    var t = (i+j)*G2;
    var x0 = xin-i+t; // The x,y distances from the cell origin, unskewed.
    var y0 = yin-j+t;
    // For the 2D case, the simplex shape is an equilateral triangle.
    // Determine which simplex we are in.
    var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
    if(x0>y0) { // lower triangle, XY order: (0,0)->(1,0)->(1,1)
      i1=1; j1=0;
    } else {    // upper triangle, YX order: (0,0)->(0,1)->(1,1)
      i1=0; j1=1;
    }
    // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
    // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
    // c = (3-sqrt(3))/6
    var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
    var y1 = y0 - j1 + G2;
    var x2 = x0 - 1 + 2 * G2; // Offsets for last corner in (x,y) unskewed coords
    var y2 = y0 - 1 + 2 * G2;
    // Work out the hashed gradient indices of the three simplex corners
    i &= 255;
    j &= 255;
    var gi0 = gradP[i+perm[j]];
    var gi1 = gradP[i+i1+perm[j+j1]];
    var gi2 = gradP[i+1+perm[j+1]];
    // Calculate the contribution from the three corners
    var t0 = 0.5 - x0*x0-y0*y0;
    if(t0<0) {
      n0 = 0;
    } else {
      t0 *= t0;
      n0 = t0 * t0 * gi0.dot2(x0, y0);  // (x,y) of grad3 used for 2D gradient
    }
    var t1 = 0.5 - x1*x1-y1*y1;
    if(t1<0) {
      n1 = 0;
    } else {
      t1 *= t1;
      n1 = t1 * t1 * gi1.dot2(x1, y1);
    }
    var t2 = 0.5 - x2*x2-y2*y2;
    if(t2<0) {
      n2 = 0;
    } else {
      t2 *= t2;
      n2 = t2 * t2 * gi2.dot2(x2, y2);
    }
    // Add contributions from each corner to get the final noise value.
    // The result is scaled to return values in the interval [-1,1].
    return 70 * (n0 + n1 + n2);
  };

  // 3D simplex noise
  module.simplex3 = function(xin, yin, zin) {
    var n0, n1, n2, n3; // Noise contributions from the four corners

    // Skew the input space to determine which simplex cell we're in
    var s = (xin+yin+zin)*F3; // Hairy factor for 2D
    var i = Math.floor(xin+s);
    var j = Math.floor(yin+s);
    var k = Math.floor(zin+s);

    var t = (i+j+k)*G3;
    var x0 = xin-i+t; // The x,y distances from the cell origin, unskewed.
    var y0 = yin-j+t;
    var z0 = zin-k+t;

    // For the 3D case, the simplex shape is a slightly irregular tetrahedron.
    // Determine which simplex we are in.
    var i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords
    var i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords
    if(x0 >= y0) {
      if(y0 >= z0)      { i1=1; j1=0; k1=0; i2=1; j2=1; k2=0; }
      else if(x0 >= z0) { i1=1; j1=0; k1=0; i2=1; j2=0; k2=1; }
      else              { i1=0; j1=0; k1=1; i2=1; j2=0; k2=1; }
    } else {
      if(y0 < z0)      { i1=0; j1=0; k1=1; i2=0; j2=1; k2=1; }
      else if(x0 < z0) { i1=0; j1=1; k1=0; i2=0; j2=1; k2=1; }
      else             { i1=0; j1=1; k1=0; i2=1; j2=1; k2=0; }
    }
    // A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
    // a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
    // a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
    // c = 1/6.
    var x1 = x0 - i1 + G3; // Offsets for second corner
    var y1 = y0 - j1 + G3;
    var z1 = z0 - k1 + G3;

    var x2 = x0 - i2 + 2 * G3; // Offsets for third corner
    var y2 = y0 - j2 + 2 * G3;
    var z2 = z0 - k2 + 2 * G3;

    var x3 = x0 - 1 + 3 * G3; // Offsets for fourth corner
    var y3 = y0 - 1 + 3 * G3;
    var z3 = z0 - 1 + 3 * G3;

    // Work out the hashed gradient indices of the four simplex corners
    i &= 255;
    j &= 255;
    k &= 255;
    var gi0 = gradP[i+   perm[j+   perm[k   ]]];
    var gi1 = gradP[i+i1+perm[j+j1+perm[k+k1]]];
    var gi2 = gradP[i+i2+perm[j+j2+perm[k+k2]]];
    var gi3 = gradP[i+ 1+perm[j+ 1+perm[k+ 1]]];

    // Calculate the contribution from the four corners
    var t0 = 0.6 - x0*x0 - y0*y0 - z0*z0;
    if(t0<0) {
      n0 = 0;
    } else {
      t0 *= t0;
      n0 = t0 * t0 * gi0.dot3(x0, y0, z0);  // (x,y) of grad3 used for 2D gradient
    }
    var t1 = 0.6 - x1*x1 - y1*y1 - z1*z1;
    if(t1<0) {
      n1 = 0;
    } else {
      t1 *= t1;
      n1 = t1 * t1 * gi1.dot3(x1, y1, z1);
    }
    var t2 = 0.6 - x2*x2 - y2*y2 - z2*z2;
    if(t2<0) {
      n2 = 0;
    } else {
      t2 *= t2;
      n2 = t2 * t2 * gi2.dot3(x2, y2, z2);
    }
    var t3 = 0.6 - x3*x3 - y3*y3 - z3*z3;
    if(t3<0) {
      n3 = 0;
    } else {
      t3 *= t3;
      n3 = t3 * t3 * gi3.dot3(x3, y3, z3);
    }
    // Add contributions from each corner to get the final noise value.
    // The result is scaled to return values in the interval [-1,1].
    return 32 * (n0 + n1 + n2 + n3);

  };

  // ##### Perlin noise stuff

  function fade(t) {
    return t*t*t*(t*(t*6-15)+10);
  }

  function lerp(a, b, t) {
    return (1-t)*a + t*b;
  }

  // 2D Perlin Noise
  module.perlin2 = function(x, y) {
    // Find unit grid cell containing point
    var X = Math.floor(x), Y = Math.floor(y);
    // Get relative xy coordinates of point within that cell
    x = x - X; y = y - Y;
    // Wrap the integer cells at 255 (smaller integer period can be introduced here)
    X = X & 255; Y = Y & 255;

    // Calculate noise contributions from each of the four corners
    var n00 = gradP[X+perm[Y]].dot2(x, y);
    var n01 = gradP[X+perm[Y+1]].dot2(x, y-1);
    var n10 = gradP[X+1+perm[Y]].dot2(x-1, y);
    var n11 = gradP[X+1+perm[Y+1]].dot2(x-1, y-1);

    // Compute the fade curve value for x
    var u = fade(x);

    // Interpolate the four results
    return lerp(
        lerp(n00, n10, u),
        lerp(n01, n11, u),
       fade(y));
  };

  // 3D Perlin Noise
  module.perlin3 = function(x, y, z) {
    // Find unit grid cell containing point
    var X = Math.floor(x), Y = Math.floor(y), Z = Math.floor(z);
    // Get relative xyz coordinates of point within that cell
    x = x - X; y = y - Y; z = z - Z;
    // Wrap the integer cells at 255 (smaller integer period can be introduced here)
    X = X & 255; Y = Y & 255; Z = Z & 255;

    // Calculate noise contributions from each of the eight corners
    var n000 = gradP[X+  perm[Y+  perm[Z  ]]].dot3(x,   y,     z);
    var n001 = gradP[X+  perm[Y+  perm[Z+1]]].dot3(x,   y,   z-1);
    var n010 = gradP[X+  perm[Y+1+perm[Z  ]]].dot3(x,   y-1,   z);
    var n011 = gradP[X+  perm[Y+1+perm[Z+1]]].dot3(x,   y-1, z-1);
    var n100 = gradP[X+1+perm[Y+  perm[Z  ]]].dot3(x-1,   y,   z);
    var n101 = gradP[X+1+perm[Y+  perm[Z+1]]].dot3(x-1,   y, z-1);
    var n110 = gradP[X+1+perm[Y+1+perm[Z  ]]].dot3(x-1, y-1,   z);
    var n111 = gradP[X+1+perm[Y+1+perm[Z+1]]].dot3(x-1, y-1, z-1);

    // Compute the fade curve value for x, y, z
    var u = fade(x);
    var v = fade(y);
    var w = fade(z);

    // Interpolate
    return lerp(
        lerp(
          lerp(n000, n100, u),
          lerp(n001, n101, u), w),
        lerp(
          lerp(n010, n110, u),
          lerp(n011, n111, u), w),
       v);
  };


  return module;
}


myChart.setOption(option);     
};


function echart_B03(id,where){
    var myChart = echarts.init(document.getElementById(id));
    var idx = 1;
    var option = {
   
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x : 'center',
        y : 'bottom',
        data:['材料学院','纺织学院','服装学院','化工学院','机械学院','信息学院']
    },
    calculable : true,
    series : [
        
        {
            name:'面积模式',
            type:'pie',
            radius : [30, 110],
            center : ['50%', '50%'],
            roseType : 'area',
            data:[
                {value:10, name:'材料学院'},
                {value:5, name:'纺织学院'},
                {value:15, name:'服装学院'},
                {value:25, name:'化工学院'},
                {value:20, name:'机械学院'},
                {value:35, name:'信息学院'}
            ]
        }
    ]
};
myChart.setOption(option);      
};
function echart_B02(id,where){
    var myChart = echarts.init(document.getElementById(id));
    var idx = 1;
    var dataBJ = [
    [1,55,9,56,0.46,18,6,"良"],
    [2,25,11,21,0.65,34,9,"优"],
    [3,56,7,63,0.3,14,5,"良"],
    [4,33,7,29,0.33,16,6,"优"],
    [5,42,24,44,0.76,40,16,"优"],
    [6,82,58,90,1.77,68,33,"良"],
    [7,74,49,77,1.46,48,27,"良"],
    [8,78,55,80,1.29,59,29,"良"],
    [9,267,216,280,4.8,108,64,"重度污染"],
    [10,185,127,216,2.52,61,27,"中度污染"],
    [11,39,19,38,0.57,31,15,"优"],
    [12,41,11,40,0.43,21,7,"优"],
    [13,64,38,74,1.04,46,22,"良"],
    [14,108,79,120,1.7,75,41,"轻度污染"],
    [15,108,63,116,1.48,44,26,"轻度污染"],
    [16,33,6,29,0.34,13,5,"优"],
    [17,94,66,110,1.54,62,31,"良"],
    [18,186,142,192,3.88,93,79,"中度污染"],
    [19,57,31,54,0.96,32,14,"良"],
    [20,22,8,17,0.48,23,10,"优"],
    [21,39,15,36,0.61,29,13,"优"],
    [22,94,69,114,2.08,73,39,"良"],
    [23,99,73,110,2.43,76,48,"良"],
    [24,31,12,30,0.5,32,16,"优"],
    [25,42,27,43,1,53,22,"优"],
    [26,154,117,157,3.05,92,58,"中度污染"],
    [27,234,185,230,4.09,123,69,"重度污染"],
    [28,160,120,186,2.77,91,50,"中度污染"],
    [29,134,96,165,2.76,83,41,"轻度污染"],
    [30,52,24,60,1.03,50,21,"良"],
    [31,46,5,49,0.28,10,6,"优"]
];

var dataGZ = [
    [1,26,37,27,1.163,27,13,"优"],
    [2,85,62,71,1.195,60,8,"良"],
    [3,78,38,74,1.363,37,7,"良"],
    [4,21,21,36,0.634,40,9,"优"],
    [5,41,42,46,0.915,81,13,"优"],
    [6,56,52,69,1.067,92,16,"良"],
    [7,64,30,28,0.924,51,2,"良"],
    [8,55,48,74,1.236,75,26,"良"],
    [9,76,85,113,1.237,114,27,"良"],
    [10,91,81,104,1.041,56,40,"良"],
    [11,84,39,60,0.964,25,11,"良"],
    [12,64,51,101,0.862,58,23,"良"],
    [13,70,69,120,1.198,65,36,"良"],
    [14,77,105,178,2.549,64,16,"良"],
    [15,109,68,87,0.996,74,29,"轻度污染"],
    [16,73,68,97,0.905,51,34,"良"],
    [17,54,27,47,0.592,53,12,"良"],
    [18,51,61,97,0.811,65,19,"良"],
    [19,91,71,121,1.374,43,18,"良"],
    [20,73,102,182,2.787,44,19,"良"],
    [21,73,50,76,0.717,31,20,"良"],
    [22,84,94,140,2.238,68,18,"良"],
    [23,93,77,104,1.165,53,7,"良"],
    [24,99,130,227,3.97,55,15,"良"],
    [25,146,84,139,1.094,40,17,"轻度污染"],
    [26,113,108,137,1.481,48,15,"轻度污染"],
    [27,81,48,62,1.619,26,3,"良"],
    [28,56,48,68,1.336,37,9,"良"],
    [29,82,92,174,3.29,0,13,"良"],
    [30,106,116,188,3.628,101,16,"轻度污染"],
    [31,118,50,0,1.383,76,11,"轻度污染"]
];

var dataSH = [
    [1,91,45,125,0.82,34,23,"良"],
    [2,65,27,78,0.86,45,29,"良"],
    [3,83,60,84,1.09,73,27,"良"],
    [4,109,81,121,1.28,68,51,"轻度污染"],
    [5,106,77,114,1.07,55,51,"轻度污染"],
    [6,109,81,121,1.28,68,51,"轻度污染"],
    [7,106,77,114,1.07,55,51,"轻度污染"],
    [8,89,65,78,0.86,51,26,"良"],
    [9,53,33,47,0.64,50,17,"良"],
    [10,80,55,80,1.01,75,24,"良"],
    [11,117,81,124,1.03,45,24,"轻度污染"],
    [12,99,71,142,1.1,62,42,"良"],
    [13,95,69,130,1.28,74,50,"良"],
    [14,116,87,131,1.47,84,40,"轻度污染"],
    [15,108,80,121,1.3,85,37,"轻度污染"],
    [16,134,83,167,1.16,57,43,"轻度污染"],
    [17,79,43,107,1.05,59,37,"良"],
    [18,71,46,89,0.86,64,25,"良"],
    [19,97,71,113,1.17,88,31,"良"],
    [20,84,57,91,0.85,55,31,"良"],
    [21,87,63,101,0.9,56,41,"良"],
    [22,104,77,119,1.09,73,48,"轻度污染"],
    [23,87,62,100,1,72,28,"良"],
    [24,168,128,172,1.49,97,56,"中度污染"],
    [25,65,45,51,0.74,39,17,"良"],
    [26,39,24,38,0.61,47,17,"优"],
    [27,39,24,39,0.59,50,19,"优"],
    [28,93,68,96,1.05,79,29,"良"],
    [29,188,143,197,1.66,99,51,"中度污染"],
    [30,174,131,174,1.55,108,50,"中度污染"],
    [31,187,143,201,1.39,89,53,"中度污染"]
];


var schema = [
    {name: 'date', index: 0, text: '日'},
    {name: 'AQIindex', index: 1, text: '用电量'},
    {name: 'PM25', index: 2, text: 'PM2.5'},
    {name: 'PM10', index: 3, text: 'PM10'},
    {name: 'CO', index: 4, text: '一氧化碳（CO）'},
    {name: 'NO2', index: 5, text: '二氧化氮（NO2）'},
    {name: 'SO2', index: 6, text: '二氧化硫（SO2）'}
];


var itemStyle = {
    normal: {
        opacity: 0.8,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
    }
};

var option = {
    backgroundColor: '#ffd34e',
    color: [
        '#dd4444', '#fec42c', '#80F1BE'
    ],
    legend: {
        y: 'top',
        data: ['材料学院', '纺织学院', '服装学院'],
        textStyle: {
            color: '#fff',
            fontSize: 12
        }
    },
    grid: {
        x: '10%',
        x2: 50,
        y: '18%',
        y2: '10%'
    },
    tooltip: {
        padding: 10,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        formatter: function (obj) {
            var value = obj.value;
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + obj.seriesName + ' ' + value[0] + '日'
                + '</div>'
                + schema[1].text + '：' + value[1] + '<br>';
        }
    },
    xAxis: {
        type: 'value',
        name: '日期',
        nameGap: 16,
        nameTextStyle: {
            color: '#fff',
            fontSize: 14
        },
        max: 31,
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#eee'
            }
        }
    },
    yAxis: {
        type: 'value',
        name: '用电量',
        nameLocation: 'end',
        nameGap: 20,
        nameTextStyle: {
            color: '#fff',
            fontSize: 16
        },
        axisLine: {
            lineStyle: {
                color: '#eee'
            }
        },
        splitLine: {
            show: false
        }
    },
    visualMap: [
        {
            left: 'right',
            top: '10%',
            dimension: 2,
            min: 0,
            max: 250,
            itemWidth: 20,
            itemHeight: 80,
            calculable: true,
            precision: 0.1,
            text: ['用电量'],
            textGap: 30,
            textStyle: {
                color: '#fff'
            },
            inRange: {
                symbolSize: [10, 70]
            },
            outOfRange: {
                symbolSize: [10, 70],
                color: ['rgba(255,255,255,.2)']
            },
            controller: {
                inRange: {
                    color: ['#c23531']
                },
                outOfRange: {
                    color: ['#444']
                }
            }
        }
    ],
    series: [
        {
            name: '材料学院',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataBJ
        },
        {
            name: '纺织学院',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataSH
        },
        {
            name: '服装学院',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataGZ
        }
    ]
};


    
myChart.setOption(option);      
};



function echart_C01(id,Arr){
    var myChart = echarts.init(document.getElementById(id));
    var idx = 1;
    var option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    color:['#1698cd', '#f2685b','#b9d520','#45c2a4'],
    series : [
        {
            name: '高质设备学院分布',
            type: 'pie',
            radius : '75%',
            center: ['50%', '50%'],
            data:[
                {value:Arr[0], name:'设备名称一'},
                {value:Arr[1], name:'设备名称二'},
                {value:Arr[2], name:'设备名称三'},
                {value:Arr[3], name:'设备名称四'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
myChart.setOption(option);       
};
function echart_C02(id,where){
    var myChart = echarts.init(document.getElementById(id));
    var idx = 1;
    var option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    color:['#1698cd', '#f2685b','#b9d520','#45c2a4'],
    series : [
        {
            name: '设备分布',
            type: 'pie',
            radius : '75%',
            center: ['50%', '50%'],
            data:[
                {value:600, name:'设备名称一'},
                {value:210, name:'设备名称二'},
                {value:100, name:'设备名称三'},
                {value:90, name:'设备名称四'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
myChart.setOption(option);       
};
function echart_C03(id,where){
    var myChart = echarts.init(document.getElementById(id));
    var idx = 1;
    var option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    color:['#1698cd', '#f2685b','#b9d520','#45c2a4'],
    series : [
        {
            name: '设备分布',
            type: 'pie',
            radius : '75%',
            center: ['50%', '50%'],
            data:[
                {value:600, name:'设备名称一'},
                {value:210, name:'设备名称二'},
                {value:100, name:'设备名称三'},
                {value:90, name:'设备名称四'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
myChart.setOption(option);       
};
function echart_C04(id,where){
    var myChart = echarts.init(document.getElementById(id));
    var idx = 1;
    var option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    color:['#1698cd', '#f2685b','#b9d520','#45c2a4'],
    series : [
        {
            name: '设备分布',
            type: 'pie',
            radius : '75%',
            center: ['50%', '50%'],
            data:[
                {value:600, name:'设备名称一'},
                {value:210, name:'设备名称二'},
                {value:100, name:'设备名称三'},
                {value:90, name:'设备名称四'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
myChart.setOption(option);       
};
function echart_C05(id,where){
    var myChart = echarts.init(document.getElementById(id));
    var idx = 1;
    var option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    color:['#1698cd', '#f2685b','#b9d520','#45c2a4'],
    series : [
        {
            name: '设备分布',
            type: 'pie',
            radius : '75%',
            center: ['50%', '50%'],
            data:[
                {value:600, name:'设备名称一'},
                {value:210, name:'设备名称二'},
                {value:100, name:'设备名称三'},
                {value:90, name:'设备名称四'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
myChart.setOption(option);       
};

function echart_D01(id,where){
    var myChart = echarts.init(document.getElementById(id));
    var idx = 1;
    var option = {
    color: ['#9de0e5'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['材料学院','纺织学院','服装学院','化工学院','机械学院','信息学院','环境学院','理学院','计算机学院','人文学院','国家级重点实验室'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'社团活动次数',
            type:'bar',
            barWidth: '60%',
            itemStyle: {normal: {barBorderRadius:[5, 5, 0, 0],label:{show:true}}},
            data:[10, 52, 200, 334, 390, 330, 220, 100, 300, 250, 220]
        }
    ]
};
myChart.setOption(option);      
};
function echart_D02(id,where){
    var myChart = echarts.init(document.getElementById(id));
    var idx = 1;
    var option = {
        color: ['#e9bb9e'],
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['场地使用次数']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['材料学院','纺织学院','服装学院','化工学院','机械学院','信息学院','环境学院','理学院','计算机学院','人文学院','国家级重点实验室']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'场地使用次数',
            type:'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {normal: {}},
            data:[350, 420, 450, 550, 500, 550, 500,620,520,650,630]
        }
    ]
};
myChart.setOption(option);      
};

function d3_chart01() {
    
    //1.定义数据
    // 城市名
    var city_name = [ "材料学院" , "纺织学院" , "服装学院" , "化工学院" , "信息学院" , "理学院" ];
    
    // 城市人口的来源，如
    //        北京    上海
    //  北京    1000    3045
    //  上海    3214    2000
 
    var population = [
      [ 20000,  3045　 , 4567　, 1234 , 3714 , 31],
      [ 3214,  0 , 2060　, 124  , 3234 , 31],
      [ 8761,  6545　 , 0, 8045 , 647  , 31],
      [ 3211,  1067  , 3214 , 0  , 1006 , 31],
      [ 2146,  1034　 , 6745 , 4764  , 0, 31 ] ,
      [ 310,  310 , 310 , 310  , 310, 310 ]
    ];

    //2.转换数据，并输出转换后的数据
    var chord_layout = d3.layout.chord()
                       .padding(0.03)   //节点之间的间隔
                       .sortSubgroups(d3.descending)  //排序
                       .matrix(population); //输入矩阵

    var groups = chord_layout.groups();
    var chords = chord_layout.chords();

    // console.log( groups );
    // console.log( chords );
    
    //3.SVG，弦图，颜色函数的定义
    var width  = 400;
    var height = 400;
    var innerRadius = width/2 * 0.7;
    var outerRadius = innerRadius * 1.1;

    var color20 = d3.scale.category20();

    var box=document.getElementById('echart01-03');
    var svg = d3.select(box).append("svg")
      .attr("width", width)
      .attr("height", height)
        .append("g")
      .attr("transform", "translate(" + width/2 + "," + height/2 + ")");

    //4.绘制节点（即分组，有多少个城市画多少个弧形），及绘制城市名称
    var outer_arc =  d3.svg.arc()
           .innerRadius(innerRadius)
           .outerRadius(outerRadius);
    
    var g_outer = svg.append("g");
    
    g_outer.selectAll("path")
        .data(groups)
        .enter()
        .append("path")
        .style("fill", function(d) { return color20(d.index); })
        .style("stroke", function(d) { return color20(d.index); })
        .attr("d", outer_arc );
      
    g_outer.selectAll("text")
        .data(groups)
        .enter()
        .append("text")
        .each( function(d,i) { 
          d.angle = (d.startAngle + d.endAngle) / 2; 
          d.name = city_name[i];
        })
        .attr("dy",".35em")
        .attr("transform", function(d){
          return "rotate(" + ( d.angle * 180 / Math.PI ) + ")" +
               "translate(0,"+ -1.0*(outerRadius+10) +")" +
                ( ( d.angle > Math.PI*3/4 && d.angle < Math.PI*5/4 ) ? "rotate(180)" : "");
        })
        .text(function(d){
          return d.name;
        });
        

    //5.绘制内部弦（即所有城市人口的来源，即有5*5=25条弧）
    var inner_chord =  d3.svg.chord()
            .radius(innerRadius);
    
    svg.append("g")
      .attr("class", "chord")
        .selectAll("path")
      .data(chords)
        .enter()
      .append("path")
      .attr("d", inner_chord )
        .style("fill", function(d) { return color20(d.source.index); })
      .style("opacity", 1)
      .on("mouseover",function(d,i){
        d3.select(this)
          .style("fill","yellow");
      })
      .on("mouseout",function(d,i) { 
        d3.select(this)
          .transition()
                    .duration(1000)
          .style("fill",color20(d.source.index));
      });
}

