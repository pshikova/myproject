function formValidate() {
	
	var firstName = document.forms["loginForm"]["firstName"];
	var lastName = document.forms["loginForm"]["lastName"];
	var email = document.forms["loginForm"]["email"];
	var password = document.forms["loginForm"]["password"];
	var validName = new RegExp("^[A-Za-z]+[A-Za-z]*$");
	var validEmail = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
	var validPassword = new RegExp("^(?=.*\d.*)(?=.*[a-zA-Z].*)(?=.*[!#\$%&\?].*).{8,}$");
	var inputs = document.forms["loginForm"].getElementsByTagName("input").length;
	
	for (var i =0; i< inputs; i++) {

		if(!validName.test(firstName.value) || firstName.value === "") {

			document.getElementById("firstNameError").removeAttribute("hidden");
			document.getElementById("exampleInputFirstName").style.borderColor = "#FF7A7A";
				
		} else {

			document.getElementById("firstNameError").setAttribute("hidden", false);
			document.getElementById("exampleInputFirstName").style.borderColor = "#ced4da";
		}

		if(!validName.test(lastName.value) || lastName.value === "") {

			document.getElementById("lastNameError").removeAttribute("hidden");
			document.getElementById("exampleInputLastName").style.borderColor = "#FF7A7A";

		} else {

			document.getElementById("lastNameError").setAttribute("hidden", false);
			document.getElementById("exampleInputLastName").style.borderColor = "#ced4da";
		}

		if(!validEmail.test(email.value) || email.value === "") {

			document.getElementById("emailError").removeAttribute("hidden");
			document.getElementById("exampleInputEmail").style.borderColor = "#FF7A7A";
			email.placeholder = "email@example/com";
			email.classList.add('email-placeholder');

		} else {

			console.log(validEmail.test(email.value));
			document.getElementById("emailError").setAttribute("hidden", false);
			document.getElementById("exampleInputEmail").style.borderColor = "#ced4da";
			email.classList.remove('email-placeholder');
		}

		if(!validPassword.test(password.value) || password.value === "") {

			document.getElementById("passwordError").removeAttribute("hidden");
			document.getElementById("exampleInputPassword").style.borderColor = "#FF7A7A";

		} else {

			document.getElementById("passwordError").setAttribute("hidden", false);
			document.getElementById("exampleInputPassword").style.borderColor = "#ced4da";
		}
	
	}

}

