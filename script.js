var products = [ 
	{ 
	  id: "100", 
	  name: "iPhone 4S", 
	  brand: "Apple", 
	  os: "iOS", 
	}, 
	{ 
	  id: "101", 
	  name: "Moto X", 
	  brand: "Motorola", 
	  os: "Android", 
	}, 
	{ 
	  id: "102", 
	  name: "iPhone 6", 
	  brand: "Apple", 
	  os: "iOS", 
	}, 
	{ 
	  id: "103", 
	  name: "Samsung Galaxy S", 
	  brand: "Samsung", 
	  os: "Android", 
	}, 
	{ 
	  id: "104", 
	  name: "Google Nexus", 
	  brand: "ASUS", 
	  os: "Android", 
	}, 
	{ 
	  id: "105", 
	  name: "Surface", 
	  brand: "Microsoft", 
	  os: "Windows", 
	}, 
  ]; 
 //Table content
  products.forEach(function (val) { 
	var text = `<tr> 
	<td>${val.id}</td> 
	<td>${val.name}</td> 
	<td>${val.brand}</td> 
	<td>${val.os}</td> 
	<td><a href="#" class="remove">X</a></td> 
  </tr>`; 
	$("table").append(text); 
  }); 
   
  //updating table
  function appendTable() { 
	$("table").find("tr:gt(0)").remove(); 
	products.forEach(function (val) { 
	  var text = `<tr> 
	<td>${val.id}</td> 
	<td>${val.name}</td> 
	<td>${val.brand}</td> 
	<td>${val.os}</td> 
	<td><a href="#" class="remove">X</a></td> 
  </tr>`; 
	  $("table").append(text); 
	}); 
  }
   

   //filter by brand and OS
   $(".search").on("change", ".ByOS", filter); 
   $(".search").on("change", ".ByBrand", filter); 
	 
   function filter(){ 
	 var tOS=$('.ByOS').val(); 
	 var tBrand=$('.ByBrand').val(); 
	 trAdd=$("table").children().children().next(); 
	 products.forEach(function(val,index){ 
	
		 if(tOS != "-1" && tBrand == "-1"){ 
		   if(tOS.indexOf(val.os)>-1){ 
			 $(trAdd[index]).show(); 
		   } 
		   else{ 
		   $(trAdd[index]).hide(); 
		   } 
		 } 
		  else if(tBrand != "-1" &&(tOS == "-1")){ 
			 if(tBrand.indexOf(val.brand)>-1){ 
			   $(trAdd[index]).show(); 
			 } 
			 else{ 
			 $(trAdd[index]).hide(); 
			 } 
		 } 
		 else if(tOS != "-1" && tBrand !="-1"){ 
		   if(tOS.indexOf(val.os)>-1 && tBrand.indexOf(val.brand)>-1){ 
			 $(trAdd[index]).show(); 
		   } 
		   else{ 
		   $(trAdd[index]).hide(); 
		   } 
	   } 
	   else{ 
		 appendTable(); 
	   } 
	 }) 
   } 
	
  
  //filter by OS
  const setOS=new Set(); 
  products.forEach(function (val){ 
	setOS.add(val.os);   
  }) 
  setOS.forEach(function(val){ 
	var text= `<option value="${val}">${val}</option>`; 
	$(".ByOS").append(text); 
   
  }) 
   
   
 
   //filter by brand
   const setBrand=new Set(); 
   products.forEach(function (val){ 
	 setBrand.add(val.brand);   
   }) 
   setBrand.forEach(function (val){ 
	 var text= `<option value="${val}">${val}</option>`; 
	 $(".ByBrand").append(text); 
   }) 
    //search by id and brand
  $(".search-box").on('click','.search-items' ,function(){ 
	flag=true; 
	let data=$(".seach").val(); 
	$('table').find("tr:gt(0)").hide(); 
	products.forEach(function (val){ 
	  let text=""; 
	text=data.toUpperCase(); 
	searchVal=(val.name).toUpperCase(); 
   
	if(searchVal.indexOf(text)> -1){ 
	  if(searchVal.match(text)!=null){ 
		flag=false; 
		var DisplayTR=`<tr> 
		<td>${val.id}</td> 
		<td>${val.name}</td> 
		<td>${val.brand}</td> 
		<td>${val.os}</td> 
		<td><a href="#" class="remove">X</a></td> 
	  </tr>`; 
		  $("table").append(DisplayTR); 
	  } 
	} 
	else if(val.id.match(data)!=null){ 
	  flag=false; 
		var DisplayTR=`<tr> 
		<td>${val.id}</td> 
		<td>${val.name}</td> 
		<td>${val.brand}</td> 
		<td>${val.os}</td> 
		<td><a href="#" class="remove">X</a></td> 
	  </tr>`; 
		  $("table").append(DisplayTR); 
	  } 
  }); 
  if(flag==true){ 
  appendTable(); 
  alert("Items Didn't Match"); 
  } 
  });
	
   
  //removing items when clicked on x
  $("table").on("click", ".remove", function (event) { 
	let index = $(event.target).parents("tr").index() - 1; 
	products.splice(index, 1); 
	appendTable(); 
  }); 
   
   
 