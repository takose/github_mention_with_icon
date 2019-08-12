Object.entries(document.getElementsByClassName('write-content')).forEach ((el) => {
  el[1].oninput = function(event) {
    if (!document.querySelector('ul[role="listbox"].suggester-container')) {
      return;
    }
    Array.from(document.querySelector('ul[role="listbox"].suggester-container').getElementsByTagName('li')).forEach((li) => {
      if (li.getElementsByTagName('img').length < 1) {
        const id = /suggester-\d+/.exec(li.getAttribute('id'))[0].substr(10);
        const imgTag = document.createElement('img');
        imgTag.src = `https://avatars3.githubusercontent.com/u/${id}`
        imgTag.style = 'position: absolute; width: 20px; height: 20px;'
        li.insertBefore(imgTag, li.firstChild);
      }
    })
  };
});
