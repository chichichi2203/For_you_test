
function checkTenanh() {
	var Anh = document.getElementById('tenanh').value;
	var hisName = ["nam","Nam","Đỗ Đình Nam","do dinh nam","NAM","ĐỖ ĐÌNH NAM","DO DINH NAM"];
	var Em = document.getElementById('myname').value
	var myName = ["chi","Chi","Phuong Chi","phương chi","CHI","PHƯƠNG CHI","PHUONG CHI"];
	if(hisName.includes(Anh) && myName.includes(Em)){
			return true;
		} else{
			alert('Anh phải nhập đúng tên hai chúng mình');
			return false;
		}
}
	//var herName = 'chi';
	//if(Anh != hisName || Em != herName) {
	//	alert('Tên anh hoặc em mà anh cũng nhập sai à');
	//	return false;
	//} else if (Anh == null || Em == null){
	//	alert('Anh không được để trống tên 2 chúng mình đâu');
	//	return false;
	//}
//}
var Dangnhap = document.getElementById('dangnhap');
Dangnhap.onclick = function check() {
    //Gọi các hàm đã viết

    checkTenanh();
}

