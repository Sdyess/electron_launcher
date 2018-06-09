const shell = require ('electron').shell;

var btn_website = document.getElementById ('website');
// TODO: make this button actually do something.
var btn_hovered = document.getElementById ('website');
var btn_forums = document.getElementById ('forums');
var btn_donate = document.getElementById ('donate');

btn_website.addEventListener('click', function (event)
{
	shell.openExternal('http://cronus-wow.com')
});
// TODO: Make this button actually do something.
btn_hovered.addEventListener('click', function (event)
{
  //shell.openExternal('#')
});
btn_forums.addEventListener('click', function (event)
{
	shell.openExternal('http://forum.cronus-wow.com')
});
btn_donate.addEventListener('click', function (event)
{
  // TODO: Add the link for this button.
  // shell.openExternal('http://electron.atom.io')
});



// set each link to open in the user's default browser.
const links = document.querySelectorAll ('a[href]');


Array.prototype.forEach.call (links, function (link) {
  const url = link.getAttribute ('href');
  if (url.indexOf ('http') === 0) {
    link.addEventListener ('click', function (e) {
      e.preventDefault ();
      shell.openExternal (url);
    });
  };
});