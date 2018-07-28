// Write your cade below:
module.exports = function main(a,b) {
	input_Check(a,b);
	var c=a%b;
	return c;
};

//1.检查输入a，b是否是非负整数范围内
//2.是否兼容其他进制数字
function input_Check(a,b){
	var typeof_a = typeof(a);
	var typeof_b = typeof(b);
	if(typeof_a != "number"||typeof_b != "number" )
	{
		console.error("Please input number！\n");
	}
	if(a<0||b<0)
	{
		console.error("Please input number！\n");
	}
};