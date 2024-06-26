function validate()
{
   var fn=frm.value; 
   for(x in fn)
   {
    ch=fn.charcodeAt(x);
    if(ch<65||ch>90 && ch>97 || ch>122)
    {
        alert("invalid first name");
        return false;
    }
  }
  var ln=frn.lname.value

var fn=frm.value; 
   for(y in ln)
   {
    ch=ln.charcodeAt(x);
    if(ch<65||ch>90 && ch>97 || ch>122)
    {
        alert("invalid first nam");
        return false;
    }
  }
  var phn=frm.phone.value;
  var lenp=phn.length;
  {
    if(lenp!=10)
    {
        alert("phone number should be 10 digits");
        return false;
    }
  }
  var pwd1=frm.password.value;
  var pwd2=pwd1.length;
  if(pwd2%2==1)
  {
    alert("password should contain even number od characters")
    return false;

  }
  if(pwd2>8)
  {
    alert("password should not exits 8 characters")
    return false;
  }
  var reg=/[1-9][0-9]*|0 or [1-9]\d*|0/
  var mail=frm.mailid.value
  if(reg.test(mail))
  {
    alert("registration successful")
  }
  else{
    alert("invalid email")
    return false;

  }
  return true;
}
