$(document).ready(function(){
	var val="";
	var operations="";
	var operand1=null;
	var operand2=null;
	var result;
	var count=0;
	function assigningValues()
	{
		if(operand1==null && result==null)
				{
					operand1= + val;
					val="";
				}
				else
				{
					operand1=result;
				}
	}
	function performOperation()
	{
		if(operations=="+")
		{
			result=operand1+operand2;
			$("#displayBox").attr("value",result);
		}
		else if(operations=="-")
		{
			result=operand1-operand2;
			$("#displayBox").attr("value",result);
		}
		else if(operations=="*")
		{
			result=operand1*operand2;
			$("#displayBox").attr("value",result);
		}
		else if(operations=="/")
		{
			if(operand2!=0)
			{
			result=operand1/operand2;
			$("#displayBox").attr("value",result);
			}
		else
		{
			$("#displayBox").attr("value","Error");
		}
		}
		operations="";
		count=0;
		operand2=null;
	}
		$("#one").click(function(){
			
			val+="1";
			$("#displayBox").attr("value",val);
		});
		$("#two").click(function(){
			val+="2";
			$("#displayBox").attr("value",val);
		});
		$("#three").click(function(){
			val+="3";
			$("#displayBox").attr("value",val);
		});
		$("#four").click(function(){
			val+="4";
			$("#displayBox").attr("value",val);
		});
		$("#five").click(function(){
			val+="5";
			$("#displayBox").attr("value",val);
		});
		$("#six").click(function(){
			val+="6";
			$("#displayBox").attr("value",val);
		});
		$("#seven").click(function(){
			val+="7";
			$("#displayBox").attr("value",val);
		});
		$("#eight").click(function(){
			val+="8";
			$("#displayBox").attr("value",val);
		});
		$("#nine").click(function(){
			val+="9";
			$("#displayBox").attr("value",val);
		});
		$("#zero").click(function(){
			val+="0";
			$("#displayBox").attr("value",val);
		});
		$("#doubleZero").click(function(){
			val+="00";
			$("#displayBox").attr("value",val);
		});
		$("#plus").click(function(){
				if(operations!="" && operand2!=null)
				{
					performOperation();
				}
				else if(operations=="")
				{
				operations="+";
				$("#displayBox").attr("value",operations);
				assigningValues();
				val="";
			}
			else 
			{
				assigningValues();
				performOperation();
			}
			count=0;
		});
		$("#minus").click(function(){
				if(operations!="" && operand2!=null)
				{
					performOperation();
				}
				else if(operations=="")
				{
				operations="-";
				$("#displayBox").attr("value",operations);
				assigningValues();
				val="";
			}
			else 
			{
				assigningValues();
				performOperation();
			}
			count=0;
		});
		$("#multiply").click(function(){
				if(operations!="" && operand2!=null)
				{
					performOperation();
				}
				else if(operations=="")
				{
				operations="*";
				$("#displayBox").attr("value",operations);
				assigningValues();
				val="";
			}
			else 
			{
				assigningValues();
				performOperation();
			}
			count=0;
		});
		$("#division").click(function(){
				if(operations!="" && operand2!=null)
				{
					performOperation();
				}
				else if(operations=="")
				{
				operations="/";
				$("#displayBox").attr("value",operations);
				assigningValues();
				val="";
			}
			else 
			{
				assigningValues();
				performOperation();
			}
			count=0;
		});
		$("#equal").click(function(){
				if(operand1!=null)
					if(operand2!=null)
					{
						if(operations!="")
				{
					performOperation();
					val="";
				}
			}
			else
			{
				operand2= + val;
					val="";
				performOperation();
			}
		});
		$("#decimal").click(function(){
			if(count==0)
			{
				val+=".";
				$("#displayBox").attr("value",val);
			}
			count++;
		});
		$("#clear").click(function(){
			$("#displayBox").attr("value","");
			val="";
			operation="";
			count=0;
			result=null;
			operand1=null;
			operand2=null;
		});
		$("#delete").click(function(){
			val=val.substring(0,val.length-1);
			$("#displayBox").attr("value",val);
		});

});