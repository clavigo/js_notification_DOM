var e=function(e,t,n,i,o){var a=document.querySelector("body"),s=document.createElement("div"),c=document.createElement("h2"),l=document.createElement("p");s.setAttribute("class","notification ".concat(o)),s.style.top="".concat(e,"px"),s.style.right="".concat(t,"px"),c.setAttribute("class","title"),c.innerText=n,l.innerText=i,s.appendChild(c),s.appendChild(l),a.appendChild(s),setTimeout(function(){s.style.display="none"},"2000")};e(10,10,"Title of Success message","Message example.\n Notification should contain title and description.","success"),e(150,10,"Title of Error message","Message example.\n Notification should contain title and description.","error"),e(290,10,"Title of Warning message","Message example.\n Notification should contain title and description.","warning");
//# sourceMappingURL=index.064bbad8.js.map
