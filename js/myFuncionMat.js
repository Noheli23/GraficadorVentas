 (function () {

 	document.getElementById('btn').addEventListener('click', leer); 
  



})();
 
function leer(){

 	var año= Number(document.getElementById("año").value); 
 	var m1 = Number(document.getElementById("m1").value); 
 	var m2 = Number(document.getElementById("m2").value); 
	var m3 = Number(document.getElementById("m3").value); 
 	var m4=  Number(document.getElementById("m4").value); 
 	var m5 = Number(document.getElementById("m5").value); 
 	var m6 = Number(document.getElementById("m6").value); 
 	var m7 = Number(document.getElementById("m7").value); 
 	var m8=  Number(document.getElementById("m8").value); 
 	var m9 = Number(document.getElementById("m9").value); 
 	var m10 = Number(document.getElementById("m10").value); 
 	var m11 = Number(document.getElementById("m11").value); 
 	var m12=  Number(document.getElementById("m12").value); 
 	var cod = document.getElementById("periodo").value; 
 	var combo = document.getElementById("periodo"); 
 	var selec = combo.options[combo.selectedIndex].text; 

 	control (año,cod,selec,m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12);

 } 


function control(año,cod,selec,m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12){

 	var valorM=[0,m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12]; 
 	var valorB= bimestre(m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12); 
 	var valorT= trimestre(m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12); 
 	var valorC= cuatri(m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12); 
 	var valorS= semestre(m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12); 
    
    var vM=[0,1,2,3,4,5,6,7,8,9,10,11,12];
    var vB=[0,1,2,3,4,5,6];
    var vT=[0,1,2,3,4];
    var vC=[0,1,2,3];
    var vS=[0,1,2];
	
	if (año==0) {
		alert("Debe llenar todos los campos"); 
 		return false; 
 	}else if (valiSelect(cod)) {
 		return false;
 	
 	}else{
 		
 		if (cod==12) {
 			crearTabla(año,valorM,cod,selec,m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12);
 			drawStuff(valorM,vM,año,m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12); 
 		}else if (cod==6){
 			crearTabla(año,valorB,cod,selec,m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12);
 			drawStuff(valorB,vB,año,m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12); 
 		}else if( cod==4){
 			crearTabla(año,valorT,cod,selec,m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12); 
 			drawStuff(valorT,vT,año,m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12);
 		}else if (cod==3) {
 			crearTabla(año,valorC,cod,selec,m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12); 
 			drawStuff(valorC,vC,año,m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12);
 		}else if (cod==2) {
 			crearTabla(año,valorS,cod,selec,m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12);
 			drawStuff(valorS,vS,año,m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12); 
 		}	
 	}
}


function valiNumber(a) {
  
  if (a.value.length >a.maxLength) {
     a.value=a.value.slice(0,a.maxLength);
  }
}

function valiSelect(cod){
	if (cod==0) {
		alert("Debe seleccionar una opción");
		
	}

}

 function bimestre(m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12){
 	var suma1=m1+m2; 
 	var suma2=m3+m4; 
 	var suma3=m5+m6; 
 	var suma4=m7+m8; 
 	var suma5=m9+m10; 
 	var suma6=m11+m12; 
 	var valor=[0,suma1,suma2,suma3,suma4,suma5,suma6]; 
 	return valor; 
 } 

 function trimestre(m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12){
 	var suma1=m1+m2+m3;
 	var suma2=m4+m5+m6; 
 	var suma3=m7+m8+m9; 
 	var suma4=m10+m11+m12; 
 	var valor=[0,suma1,suma2,suma3,suma4]; 
 	return valor; 
 }

 function cuatri(m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12){
 	var suma1=m1+m2+m3+m4; 
 	var suma2=m5+m6+m7+m8; 
 	var suma3=m9+m10+m11+m12; 
 	var valor=[0,suma1,suma2,suma3]; 
 	return valor; 
 }
 
 function semestre(m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12){
 	var suma1=m1+m2+m3+m4+m5+m6; 
 	var suma2=m7+m8+m9+m10+m11+m12; 
 	var valor=[0,suma1,suma2]; 
 	return valor; 
 } 


 	function crearTabla(año,valor,cod,selec,m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12) {

 		if (m1 && m2 && m3&& m4&& m5&& m6&& m7&& m8&& m9&& m10&& m11&& m12) {
 			let table = document.getElementById("table"); 
 			let t = "<table class='table table-striped;'>"; 
 			t += "<thead>"; 
 			t += "<tr>"; 
 			t += "<tr><th colspan='2;' class='text-center;'>Información de Ventas año: "+año+"</th> </tr>"; 
 			t += "<th scope='col;'>"+selec+"</th>"; 
 			t += "<th scope='col;'>Valor</th>"; 
 			t += "</thead>"; 
 			for (let i = 1; i <=cod; i++) {
 				t += "<tr>"; 
 				t += "<td>" + i + "</td>"; 
 				t += "<td>" + valor[i] + "</td>"; 
 				t += "</tr>"; 
 			} 
 			t += "</table>"; 
 			table.innerHTML = t;
 		} else {
 			alert("No puede estar vacío o tener un valor igual a 0") 
 		} 
 	} 

google.charts.load('current', {'packages':['bar']}); 

function drawStuff(valor,vec,año,m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12) {

 	if (m1 && m2 && m3&& m4&& m5&& m6&& m7&& m8&& m9&& m10&& m11&& m12) {
 		var data = new google.visualization.DataTable();

 		data.addColumn('number', "Ventas "+año);
        data.addColumn('number', 'Values');
        data.addRows(vec.length);
        for(i=0;i<vec.length;i++){

        data.setCell(i, 0, vec[i]);
        data.setCell(i, 1, valor[i]);
        
        }
		var options = {
 		  title: 'Gráfica',
 		  width: 500,
 		  height: 400,
 		  legend: { position: 'none' },
 		  chart: { title: 'Gráfica'},
          bars: 'horizontal', // Required for Material Bar Charts.
          axes: {
          	x: {
              0: { side: 'top', label: 'Valor'} // Top x-axis.
          }
      },
      bar: { groupWidth: "90%" }
  };
	var chart = new google.charts.Bar(document.getElementById('top_x_div'));
  	chart.draw(data, options);
 }else{
 	return false;
 }
};

