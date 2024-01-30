const form =  document.getElementById("registrationForm")

form.addEventListener("submit", function (e) {
e.preventDefault()

    let usernameInput = document.getElementById('username');
    let emailInput = document.getElementById('email');
    let passwordInput = document.getElementById('password');

    let username = usernameInput.value.trim();
    let email = emailInput.value.trim();
    let password = passwordInput.value.trim();

    if (username !== "" && email !== "" && password !== "") {
        let newUser = {
        username: username,
        email: email,
        password: password
      };

      const existingUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

      const userExists = existingUsers.some(function(user) {
        return user.username === newUser.username || user.email === newUser.email;
      });

      if (!userExists) {
        existingUsers.push(newUser);

        localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));

        usernameInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';

        alert('Người dùng đã đăng ký thành công!');
      } else {
        alert('Tên người dùng hoặc email đã tồn tại. Vui lòng chọn một cái khác.');
      }
    } else {
      alert('Vui lòng điền vào tất cả các hỗ trống.');
    }
  })


