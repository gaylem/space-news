var contents = document.getElementById('contents');
var contentsParent = contents.parentNode;
contentsParent.removeChild(contents);
contentsParent.prepend(
  <img src='https://media.wired.com/photos/593261cab8eb31692072f129/master/w_2560%2Cc_limit/85120553.jpg' />,
);
