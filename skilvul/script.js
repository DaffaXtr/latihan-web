function handleGetFormData(){
    const name = document.getElementById("name").value;
    const city = document.getElementById("city").value;
    const email = document.getElementById("email").value;
    const zipCode = document.getElementById("zip-code").value;
    const status = document.getElementById("status").checked;
        
    return {
      name: name,
      city: city,
      email: email,
      zipCode: zipCode,
      status: status,
    };
}
const formData = handleGetFormData();

function isNumber(inputString) {
  return !isNaN(inputString) && !isNaN(parseFloat(inputString));
}

function checkboxIsChecked() {
  const isChecked = handleGetFormData().status; 
  return isChecked;
}

function validateFormData(data) {
  if (data === null) {
    return false;
  }
  if (!isNumber(data.zipCode)) {
    return false;
  }
  if (!checkboxIsChecked()) {
    return false;
  }
  return true;
}

function validateFormData(form_Data) {
  return form_Data && !isNaN(form_Data.zipCode) && checkboxIsChecked(form_Data.status);
}

function submit() {
  if (!validateFormData(handleGetFormData())) {
    return (document.getElementById('warning').innerText = 'Periksa form anda sekali lagi');
  } else {
    return (document.getElementById('warning').innerText = '');
  }
}