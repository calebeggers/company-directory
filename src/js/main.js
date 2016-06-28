import $ from "jquery";

$.ajax({
  url: 'http://api.randomuser.me/?results=12',
  dataType: 'json',
}).then(function(data) {
  		console.log(data);
  		console.log(data.results);
  		console.log(data.results[0])
  		data.results.forEach(profile);
	});

function profile(data) {
	var dob   = new Date(data.dob * 1000);
	var month = dob.getMonth() + 1;
	var day   = dob.getDate();
	var year  = dob.getYear() > 100
	          ? "20" + (dob.getYear() - 100).toString()
	          : "19" + (dob.getYear()).toString()
	$("#main").append(
		`<div class="profile">
        	<div>
        		<img src="${data.picture.large}">
        	</div>
        	<div class="name">
            	<span>${data.name.first} ${data.name.last}</span>
          	</div>
          	<div class="email">
          		<span>${data.email}</span>
          	</div>
          	<div class="birthday">
          		<span>${month}/${day}/${year}</span>
          	</div>
	        <div class="address">
	        	<span>${data.location.street}</span>
	        	<span>${data.location.city}, ${data.location.state}, ${data.location.postcode}</span>
	        </div>
	        <div class="phone">
	        	<span>${data.cell}</span>
	        </div>
	        <div class="password">
	        	<span>${data.login.password}</span>
	        </div>
        </div>`
		)
}