//Переменные со значениями поля ввода, кнопкой добавления и таблицы с задачами
var	input  = document.querySelector(".input_line");
var	button  = document.querySelector(".add_button");
var tasklist = document.querySelector(".taks_list");


//Функция для добавления задачи в таблицу
function NewTask(text){

	//Создаем кнопку с задачей и кнопку для удаления задачи
	var task = document.createElement("input");
	var del = document.createElement("button");
	del.setAttribute("class", "close");


	//Засовываем задачу в кнопку и икс вместе с ним
	task.value = text;
	task.setAttribute("id", 'tt');
	del.textContent = ("\u00D7");


	//Чекбокс с лейблом для видимого чекбокса
	var	checkbox = document.createElement("input");
	checkbox.setAttribute("type", "checkbox");
	checkbox.setAttribute("id", Date.now());
	var label = document.createElement("label");
	label.setAttribute("for", Date.now());


	//Новая строка
	var new_task = document.createElement("li");

	//В эту строку чекбокс и кнопки
	new_task.appendChild(checkbox);
	new_task.appendChild(label);
	new_task.appendChild(task);
	new_task.appendChild(del);


	//Функция удаления
	del.addEventListener("click", function(){
		tasklist.removeChild(new_task);
	});


	//Строку в общий список
	tasklist.appendChild(new_task);
}


//Нажатие кнопки "Add" и обращение к функции
button.addEventListener("click", function (e){
	e.preventDefault();
	if (input.value != "") {
		NewTask(input.value);
		input.value = "";
	}
});


