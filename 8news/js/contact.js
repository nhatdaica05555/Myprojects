$(function(){

	
	  $('form').submit(function(event){
   		 event.preventDefault();
   		 $('.er-name').text('');
		$('.er-email').text('');
		$('.er-mes').text('');
   		 var name = $('#name').val();
		var email = $('#email').val();
		var textarea = $('#textarea').val();
		var flag = 0
		if (name == ""){
				$('.er-name').text('Vui lòng kiểm tra tên');
				flag = 1;
		}	
		if (email == ""){
				$('.er-email').text('Vui lòng kiểm tra email');
				flag=1;
		}
		if (textarea == ""){
				$('.er-mes').text('Vui lòng kiểm tra Tin nhắn');
				flag= 1;
		}

		if (flag == 0) {
			$('.noidung').text('Cảm ơn '+name+' đã đóng góp ý kiến! Chúng tôi sẽ liên hệ cho bạn trong thời gian sớm nhất!');
			$('#myModal').modal("show");
		}


		


   		
  });
	
})