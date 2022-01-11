var harga = ['2000','5000','4000'];
var jenis = ['Anak-anak','Dewasa','Pelajar'];
function Tujuan() {
 // body...
 var tujuan = document.getElementById('inp_tujuan').value;
 var kereta2 = document.getElementById('kereta2');
 kereta2.innerHTML="<option>--PILIH KERETA--</option>"
 if (tujuan=='jmbr') {
  for (var i = 0; i < 2; i++) {
   result="<option value="+i+">"+kereta[i]+"</option>";
   kereta2.innerHTML+=result;
  }
 }
 else if (tujuan=='sby') {
  for (var i = 2; i < 4; i++) {
   result="<option value="+i+">"+kereta[i]+"</option>";
   kereta2.innerHTML+=result;
  }
 }
}
function harganya(){
 var harga2 = document.getElementById('kereta2').value;
  tampil.value="Rp. "+harga[parseInt(harga2)];
}