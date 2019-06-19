//作业1：创建一个空对象，变量名为user；添加一个name属性，并设置值为John；添加一个surname属性，并设置其值为Mike；将name属性的值改为Peter;删除user的name属性
var user = new Object();
	  user.name="John";
    user.surname="Mike";
	  user.name="Peter";
	  user.name=undefined;
		
    alert(user.name);
	  alert(user.surname);
---------------------------------------------

//作业2：计算下面fruit对象共有多少个水果，应该输出50
var fruit = {
apple: 20,
pear: 20,
peach: 10
};
var sum;
sum=fruit.apple+fruit.pear+fruit.peach;
alert(sum);// 50
