
(function(){
	$('#subscribeForm').on('submit', function(e) {
		$('#subscribeForm .title.message').hide();
		e.preventDefault();
		var elemArr = $(this).find('input');
		var url = "https://www.amecet.in/api/query-institute.php";
		showResult1();
		//$('#subscribeForm .title.message').show();
		$.ajax({
			type: "post",
			url: url,
			data: elemArr,
			contentType: "application/x-www-form-urlencoded",
			success: function(responseData, textStatus, jqXHR) {				
				clearMessage();	
			},
			error: function(jqXHR, textStatus, errorThrown) {				
				clearMessage();
			}
		})
	})

	function clearMessage() {
		setTimeout(function() {
			$('#subscribeForm .title.message').hide();
			$('#subscribeForm')[0].reset();
		}, 10);
	}
	
	function showResult1(){
		$('.subscribe').hide();
		$("#success-div").removeClass("hide");	
		$('#registerForm').html($('#apply #Name').val());
	}
   	
})();
(function() {
	$('#enquiry').on('submit', function(e) {
		$('#enquiry .title.message').hide();
		e.preventDefault();
		var elemArr = $(this).find('input');
		var url = "https://www.amecet.in/api/query-institute.php";
		//$('#enquiry .title.message').show();
		showResult();
		$.ajax({
			type: "post",
			url: url,
			data: elemArr,
			contentType: "application/x-www-form-urlencoded",
			success: function(responseData, textStatus, jqXHR) {				
				clearMessage();	
			},
			error: function(jqXHR, textStatus, errorThrown) {				
				clearMessage();
			}
		})
	})

	function clearMessage() {
		setTimeout(function() {
			$('#enquiry .title .message').hide();
			$('#enquiry')[0].reset();
		}, 10);
	}	
	function showResult(){
		$('#apply .panel-body').hide();
		$("#successfully-div").removeClass("hide");	
		$('#candidate_name').html($('#apply #Name').val());
	}
})();

function isNumberKey(evt){
            var charCode = (evt.which) ? evt.which : event.keyCode
            if (charCode > 31 && (charCode < 48 || charCode > 57))
                return false;

            return true;
}
   
(function(){
	$('#apply2').on('submit', function(e) {
		$('#apply2 .title.message').hide();
		e.preventDefault();
		var elemArr = $(this).find('input');
		var url = "https://www.amecet.in/api/query-institute.php";
		showResult1();
		//$('#subscribeForm .title.message').show();
		$.ajax({
			type: "post",
			url: url,
			data: elemArr,
			contentType: "application/x-www-form-urlencoded",
			success: function(responseData, textStatus, jqXHR) {				
				clearMessage();	
			},
			error: function(jqXHR, textStatus, errorThrown) {				
				clearMessage();
			}
		})
	})
	   function clearMessage() {
		  setTimeout(function() {
			  $('#forgot-form').modal('hide');}, 10);
		  }
/*	function clearMessage() {
		setTimeout(function() {
	      $('.modal').modal('toggle');
		}, 10);
	}
	*/
	function showResult1(){
		$('.subscri').hide();
		$("#success-div7").removeClass("hide");	
	 } 	
   })();
   
   (function(){
	$('#Counselling').on('submit', function(e) {
		$('#Counselling .title.message').hide();
		e.preventDefault();
		var elemArr = $(this).find('input');
		var url = "https://www.amecet.in/api/query-institute.php";
		showResult1();
		//$('#subscribeForm .title.message').show();
		$.ajax({
			type: "post",
			url: url,
			data: elemArr,
			contentType: "application/x-www-form-urlencoded",
			success: function(responseData, textStatus, jqXHR) {				
				clearMessage();	
			},
			error: function(jqXHR, textStatus, errorThrown) {				
				clearMessage();
			}
		})
	})
	   function clearMessage() {
		  setTimeout(function() {
			  $('#forgot-form').modal('hide');}, 10);
		  }
/*	function clearMessage() {
		setTimeout(function() {
	      $('.modal').modal('toggle');
		}, 10);
	}
	*/
	function showResult1(){
		$('.subs').hide();
		$("#success-div8").removeClass("hide");	
	 } 	
   })();
   
   (function(){
	$('#fee').on('submit', function(e) {
		$('#fee itle.message').hide();
		e.preventDefault();
		var elemArr = $(this).find('input');
		var url = "https://www.amecet.in/api/query-institute.php";
		showResult1();
		//$('#subscribeForm .title.message').show();
		$.ajax({
			type: "post",
			url: url,
			data: elemArr,
			contentType: "application/x-www-form-urlencoded",
			success: function(responseData, textStatus, jqXHR) {				
				clearMessage();	
			},
			error: function(jqXHR, textStatus, errorThrown) {				
				clearMessage();
			}
		})
	})
	   function clearMessage() {
		  setTimeout(function() {
			  $('#forgot-form').modal('hide');}, 10);
		  }
/*	function clearMessage() {
		setTimeout(function() {
	      $('.modal').modal('toggle');
		}, 10);
	}
	*/
	function showResult1(){
		$('.subsi').hide();
		$("#success").removeClass("hide");	
	 } 	
   })();