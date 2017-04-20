var root=  {
 "name": "flare",
 "children": [
 
  {
   "name": "中国",
   "lev": "1",
   "children": [
    {"name": "材料学院", "size": 2600},
    {"name": "服装学院", "size": 1600},
    {"name": "化工学院", "size": 600},
    {"name": "机械学院", "size": 1600} ,
    {"name": "信息学院", "size": 600},
    {"name": "计算机学院", "size": 1600} ,
    {"name": "国家级重点实验室", "size": 600},
    {"name": "环境学院", "size": 100}
   ]
  },
  {
   "name": "德国",
   "lev": "1",
   "children": [
    {"name": "材料学院", "size": 200},
    {"name": "服装学院", "size": 110},
    {"name": "化工学院", "size": 10},
    {"name": "机械学院", "size": 800} ,
    {"name": "信息学院", "size": 600}, 
    {"name": "环境学院", "size": 100}
   ]
  },
  {
   "name": "美国",
   "lev": "1",
   "children": [
       {"name": "材料学院", "size": 300},
    {"name": "服装学院", "size": 500},
    {"name": "化工学院", "size": 600},
    {"name": "机械学院", "size": 700} ,
    {"name": "信息学院", "size": 100},
    {"name": "计算机学院", "size": 500} ,
    {"name": "国家级重点实验室", "size": 100},
    {"name": "环境学院", "size": 100}
   ]
  } 
   ,
  {
   "name": "其他",
   "lev": "1",
   "children": [
    {"name": "材料学院", "size": 20},
    {"name": "服装学院", "size": 160},
    {"name": "化工学院", "size": 60},
    {"name": "机械学院", "size": 100} ,
    {"name": "信息学院", "size": 100},
    {"name": "计算机学院", "size": 160} ,
    {"name": "国家级重点实验室", "size": 600},
    {"name": "环境学院", "size": 100}
   ]
  } 
   
 ]
}





var svg = d3.select("svg"),
    diameter = +svg.attr("width"),
    g = svg.append("g").attr("transform", "translate(2,2)"),
    format = d3.format(",d");

var pack = d3.pack()
    .size([diameter - 4, diameter - 4]);

//d3.json("donghua.json", function(error, root) {
   

  root = d3.hierarchy(root)
      .sum(function(d) { return d.size; })
      .sort(function(a, b) { return b.value - a.value; });

  var node = g.selectAll(".node")
    .data(pack(root).descendants())
    .enter().append("g")
      .attr("class", 
    function(d) { 
      if(d.depth==1) return "one node" ;
      return d.children ? "node" : "leaf node"; 
    
    })
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

  node.append("title")
      .text(function(d) { return d.data.name + "\n" + format(d.value); });

  node.append("circle")
      .attr("r", function(d) { return d.r; });

  node.filter(function(d) { return !d.children; }).append("text")
      .attr("dy", "0.3em")
      .text(function(d) { return d.data.name.substring(0, d.r / 3); });
//});

