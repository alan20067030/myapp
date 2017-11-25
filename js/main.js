function show(){
	var data =myCollection.find();
	console.log(data);
}

  var fdb = new ForerunnerDB();
  var myDB = fdb.db("myDB");
  var myCollection = myDB.collection("myCollection");
  myCollection.load(show);


$("#btn_green").on("click",function(){
	var newDate = $("#date").val()
	var newkind = $("#my_kind").val()
	var newmoney = $("#money").val()

	var newData={
    	date:newDate,
		kind:newkind,
		money:newmoney
	}
    myCollection.insert(newData);
    myCollection.save();

    console.log(newData);

});




