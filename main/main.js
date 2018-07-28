// Write your cade below:
module.exports = function main(a,b) {
	var flag = input_Check(a,b);
	if(flag)
	{
	var c=a%b;
	return c;
	}
	else
	return;
};
//-----检查输入是否合法函数------//
//1.检查数据类型是否是number
//2.检查输入a，b是否是非负整数范围内(对浮点数取余数容易产生数据错误)
function input_Check(a,b)
{
	var typeof_a = typeof(a);
	var typeof_b = typeof(b);
	if(typeof_a != "number"||typeof_b != "number" )
	{
		console.error("Please enter number！\n");
		return false;
	}
	if(a<0||b<0)
	{
		console.error("Please enter non-negative number！\n");
		return false;
	}
	if(!(Number.isInteger(a)&&Number.isInteger(b)))
	{
		console.error("Please enter integers！\n");
		return false;
	}
	return true;
};