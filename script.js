
function submitbutton()
{var message="Order summary";
message=message+"\n";
if(document.form1.button1.value!=="")
  {message=message+"Cheese dosa-";
  var quantity=document.form1.button1.value;
  message=message+quantity;
  message=message+"\n";}
if(document.form1.button2.value!=="")
  {message=message+"Cheese masala dosa-";
  var quantity=document.form1.button2.value;
  message=message+quantity;
  message=message+"\n";}
  if(document.form1.button3.value!=="")
  {message=message+"Chilli cheese dosa-";
  var quantity=document.form1.button3.value;
  message=message+quantity;
  message=message+"\n";}
  if(document.form1.button4.value!=="")
  {message=message+"Podi dosa-";
  var quantity=document.form1.button4.value;
  message=message+quantity;
  message=message+"\n";}
  if(document.form1.button5.value!=="")
  {message=message+"Chocolate dosa-";
  var quantity=document.form1.button5.value;
  message=message+quantity;
  message=message+"\n";}
    
alert(message);
}
