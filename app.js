const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");


function onLoginSubmit(event){
    event.preventDefault();
    //preventDefault() -> stops the default behaviour of any event.
    console.log(loginInput.value); 
}

//submit event : enter를 누르거나 버튼 클릭할 때 발생 
//event가 있을 때 onLoginSubmit을 호출 할건데, 그냥 호출하는게 아니라 인자로 
// 정보를 전달하면서 호출함 --> onLoginSubmit(information~~); 이런식으로 
// eventListener function의 첫번째 인자는 항상 어떤 일이 일어났는지에 대한 정보임.
loginForm.addEventListener("submit", onLoginSubmit);