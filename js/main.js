$(document).ready(function () {
	//блок переменных. Вводим переменные для использования в коде
	var currentFloor = 2;  //значение этажа
	var floorPath = $(".home-image path")  //блок этажа в SVG
	var counterUp = $(".counter-up")  //кнопка вверх
	var counterDown = $(".counter-down")  //кнопка вниз

    //задаем, что при наведении мышью на блок этажа выполняется сдедующая функция
	floorPath.on("mouseover", function() {
		floorPath.removeClass("current-floor");   //очищаем класс, чтобы пропала подсветка с ранее выбранных этажей
		currentFloor = $(this).attr('data-floor');  //меняем значение этажа на текущее по атрибуту
		$(".counter").text(currentFloor);  //выводим значение текущего этажа на счетчик
	})

    //задаем функцию при клике на кнопку вверх
	counterUp.on("click", function(){
		if (currentFloor < 18) {  //если значение этажа меньше 18, то
			currentFloor++;  //прибавляем 1
		    usCurrentFloor = currentFloor.toLocaleString('en-Us', {minimumIntegerDigits:2, useGroupping: false})  //преобразуем переменную в двухзначное число
		    $(".counter").text(usCurrentFloor); // выводим на счетчик значение этажа
		    floorPath.removeClass("current-floor");  //очищаем класс, чтобы пропала подсветка с ранее выбранных этажей
		    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); //присваеваем класс текущему этажу, при этом задаем в css файле прозрачность 1, т.е. подсвечиваем только текущий этаж
		}
	})
    //задаем функцию при клике на кнопку вниз аналогично кнопке вверх
	counterDown.on("click", function(){
		if (currentFloor > 2) {
			currentFloor--;
		    usCurrentFloor = currentFloor.toLocaleString('en-Us', {minimumIntegerDigits:2, useGroupping: false})
		    $(".counter").text(usCurrentFloor);
		    floorPath.removeClass("current-floor");
		    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");

		}
	})

});