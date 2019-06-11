Object.entries(document.getElementsByClassName('write-content')).forEach ((el) => {
  el[1].addEventListener("keyup", function(event) {
    if (!document.querySelector('ul[role="listbox"].suggester-container')) {
      return;
    }
    Object.entries(document.querySelector('ul[role="listbox"].suggester-container').getElementsByTagName('li')).forEach((li) => {
      if (li[1].getElementsByTagName('img').length < 1) {
        li[1].setAttribute("style", "position: relative");
        Object.entries(span = li[1].getElementsByTagName('span'))[0][1].setAttribute("style", "margin-left: 30px;");
        const id = /suggester-\d+/.exec(li[1].getAttribute('id'))[0].substr(10);
        const imgTag = document.createElement('img');
        imgTag.src = `https://avatars3.githubusercontent.com/u/${id}`
        imgTag.style = 'position: absolute; width: 20px; height: 20px;'
        li[1].insertBefore(imgTag, li[1].firstChild);
      }
    })
  });
});
