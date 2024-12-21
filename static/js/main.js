let value = document.getElementsByClassName('persent');
for (let index = 0; index < value.length; index++) {
    // const element = value[index];
    value[index].style.width = value[index].innerText;
}