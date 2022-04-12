$(document).ready(function(){
    var i=1;
    function KTDN() {
        let mauKT = /^[A-Za-z0-9]{6,16}$/;
        if ($("#txtDN").val() == "") {
          $("#tbDN").html("Không để trống");
          return false;
        }
        if (!mauKT.test($("#txtDN").val())) {
          $("#tbDN").html("* Chỉ được chữ và số, từ 6-16 kí tự");
          return false;
        }
        $("#tbName").html("*");
        return true;
      }
      $("#txtDN").blur(KTDN);
      function KTMK() {
        let mauKT = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if ($("#txtMK").val() == "") {
          $("#tbMK").html("Không để trống");
          return false;
        }
        if (!mauKT.test($("#txtMK").val())) {
          $("#tbMK").html("* Tối thiểu tám ký tự, ít nhất một chữ cái viết hoa, một chữ cái viết thường và một số");
          return false;
        }
        $("#tbMK").html("*");
        return true;
      }
      $("#txtMK").blur(KTMK);
      function KTMKl() {
        let mauKT = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if ($("#txtMKl").val() == "") {
          $("#tbMKl").html("Không để trống");
          return false;
        }
        if (!mauKT.test($("#txtMKl").val())) {
          $("#tbMKl").html("* Tối thiểu tám ký tự, ít nhất một chữ cái viết hoa, một chữ cái viết thường và một số");
          return false;
        }
        $("#tbMKl").html("*");
        return true;
      }
      $("#txtMKl").blur(KTMKl);
      function kiemTraHo() {
     
        let mauKT = /^([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if ($("#txtHo").val() == "") {
          $("#tbHo").html("Không để trống");
          return false;
        }
        if (!mauKT.test($("#txtHo").val())) {
          $("#tbHo").html("* Mỗi ký tự đầu viết hoa không sử dụng số");
          return false;
        }
        $("#tbHo").html("*");
        return true;
      }
      $("#txtHo").blur(kiemTraHo);
      function kiemTraTen() {
     
        let mauKT = /^([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if ($("#txtTen").val() == "") {
          $("#tbTen").html("Không để trống");
          return false;
        }
        if (!mauKT.test($("#txtTen").val())) {
          $("#tbTen").html("* Mỗi ký tự đầu viết hoa không sử dụng số");
          return false;
        }
        $("#tbTen").html("*");
        return true;
      }
      $("#txtTen").blur(kiemTraTen);
      function KTMail(){
        var mail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)+(\.\w{2,3})+$/;
        if($("#txtEDN").val()==""){
            $("#tbEDN").html("* Bắt buộc nhập !");
            return false;
        }
        if(!mail.test($("#txtEDN").val())){
            $("#tbEDN").html("* Nhập đúng định dạng mail");
            return false;
        }
        $("#tbEDN").html("*");
        return true;
    }
    $("#txtEDN").blur(KTMail);
    function KiemTraNLEDN(){
        if($("#txtNLEDN").val()==""){
            $("#tbNLEDN").html("* Bắt buộc nhập !");
            return false;
        }
        if($("#txtNLEDN").val() != $("#txtEDN").val()) {
            $("#tbNLEDN").html("* Phải giống email");
            return false;
        } else{
            $("#tbNLEDN").html("*");
            return true;
            
        }   
    }
    $("#txtNLEDN").blur(KiemTraNLEDN);
    function KTNS(){
        ns=$("#txtNS").val();
        if($("#txtNS").val()==""){
            $("#tbNS").html("* Bắt buộc nhập !");
            return false;
        }
        if(ns>2004){
            $("#tbNS").html("Tuổi lớn hơn 18");
            return false;
        }else{
            $("#tbNS").html("*");
            return true;
        }
    }
    $("#txtNS").blur(KTNS);

});