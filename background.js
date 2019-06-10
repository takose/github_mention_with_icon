Object.entries(document.getElementsByClassName('write-content')).forEach ((el) => {
  el[1].addEventListener("keyup", function(event) {
    if (!document.querySelector('ul[role="listbox"].suggester-container')) {
      return;
    }
    Object.entries(document.querySelector('ul[role="listbox"].suggester-container').getElementsByTagName('li')).forEach((li) => {
      if (li[1].getElementsByTagName('img').length < 1) {
        li[1].setAttribute("style", "display: flex; align-items: center;");
        const id = /suggester-\d+/.exec(li[1].getAttribute('id'))[0].substr(10);
        const imgTag = document.createElement('img');
        imgTag.src = `https://avatars3.githubusercontent.com/u/${id}`
        imgTag.width = 20;
        imgTag.height = 20;
        imgTag.style = 'margin-right: 10px;'
        li[1].insertBefore(imgTag, li[1].firstChild);
      }
    })
  });
});
