var contacts = [];
var count = 0;
var currentContactID ;
$(document).ready(function() {
$("#Save").click(function() {
	
	contactName   =  $("#nameForm").val();
	contactPhone  =  $("#phoneForm").val();
	contactEmail  =  $("#emailForm").val();
	contactGender =  $("#genderForm").val();
	
	if(contactName!="" && contactPhone!="" && contactEmail!="")
	{
	contact = contactPhone + "," + contactName + "," + contactEmail + "," + contactGender ;
	var indx = check(contactPhone); 
	if(indx > -1)
	{
		var liId = "#li"+indx;
	//	alert(liId);
		$(liId).remove();

	}
//	contacts.splice(count,0,contact);
	contacts[count] = contact ;
	var addContact = "<li id='li"+count+"'><a href='#selectedContactPage' id='"+count+"' onclick='setData(id)'>";
	
	if(contactGender=="Female")
		addContact += "<img src='femaleContact.jpg'>" 
	else if(contactGender=="Male")
		addContact += "<img src='maleContact.jpg'> " 
	
	addContact  += contactName;
	addContact	+= "</a><a data-role='button' data-icon='phone' href='tel:";
	addContact  += contactPhone;
	addContact  += "'> </a></li>";
	
	$("#contactList").append(addContact);
	$("#contactList").listview("refresh");
	count++;
	
	}
	
});

});


function check(contactCheck){
	var indx = -1;
	for(counter=0;counter<contacts.length;counter++)
	{
		if(contacts[counter].indexOf(contactCheck)>-1)
		{
			indx = counter;
		}
	}
	return indx ;
}

function setData(contactID){
	contactId = "#"+contactID;
	var contactPhone =  $(contactId).next().attr("href");
	$("#call").attr("href",contactPhone);
		
	var contactImg = $(contactId).children().first().attr("src");
	$("#contactImage").attr("src",contactImg);
	
	var contactName = $(contactId).text();
	$("#selectedContactPage").children().first().children().first().text(contactName);
	currentContactID  = contactID;
}

function deleteContact(){
	
	var liId = "#li"+currentContactID;
	//alert(liId);
	$(liId).remove();
	//contacts.splice(parseInt(currentContactID),1);
	
	//	$("#contactList").remove(liId);
	//$("#contactList").listview("refresh");
	
}
function flushForm(){
	
	$("#nameForm").val("");
	$("#phoneForm").val("");
	$("#emailForm").val("");
//	$("#genderForm").val();
	
}

function edit(){
	
	var data = contacts[currentContactID].split(",");
	//alert(contacts[currentContactID]);
	$("#phoneForm").val(data[0]);
	$("#nameForm").val(data[1]);
	$("#emailForm").val(data[2]);
	$("#genderForm").val(data[3]);
	
}
