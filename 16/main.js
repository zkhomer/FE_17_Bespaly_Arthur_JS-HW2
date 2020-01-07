var floors = prompt("Веди количество этажей")
var apartmentsPerFloor = prompt("веди количество квартир на этаже")
var apartmentNumber =prompt("Номер квартиры")
var floor = Math.ceil(apartmentNumber / apartmentsPerFloor)
var porch = Math.ceil(floor / floors)
floor -= (porch - 1) * floors
alert("Квартира с номером " + apartmentNumber + " находится в подъезде № " + porch + " на " + floor + " этаже")