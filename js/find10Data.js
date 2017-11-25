function show(){
	var data =myCollection.find({},{
		$orderBy:{date:-1},
		$limit:10


	});
	console.log(data);
		for(var i=0 ; i<data.length; i++){
		
	$("#myTbody").append(
     "<tr>" + 
		"<td>" + i + "</td>" +
		"<td>" + data[i].date + "</td>" +
		"<td>" + data[i].kind+"</td>"+
		"<td>" + data[i].money+"</td>"+
	"</tr>"
	);
 　}
　
}

  var fdb = new ForerunnerDB();
  var myDB = fdb.db("myDB");
  var myCollection = myDB.collection("myCollection");
  myCollection.load(show);
