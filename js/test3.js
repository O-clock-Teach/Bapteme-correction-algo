/*
 * Tests
 */
var container = document.getElementById('container');
if (
  getExtension('test1.css') === 'css'
  && getExtension('jquery.min.js') === 'js'
  && getExtension('.eslintrc') === 'eslintrc'
  && getExtension('monfichier') === false
) {
  container.textContent = 'Yeaaah';
  container.className = 'success';
}
else {
  container.textContent = 'Nope';
  container.className = 'error';
}


/*
 * Exo3
 *
 * str est une string
 * Retourner l'extension de fichier.
 * Par exemple index.html => html
 */
function getExtension(str) {
  /*
  var lastPoint = str.lastIndexOf('.');

  if (lastPoint === -1) {
    return false;
  }

  var ext = str.slice(lastPoint + 1);

  return ext;
  */

  var parts = str.split('.');

  if (parts.length === 1) {
    return false;
  }

  var lastPart = parts[parts.length - 1];

  return lastPart;
}
