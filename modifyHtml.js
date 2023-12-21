const fs = require('fs');

// Read the HTML file
fs.readFile('./docs/index.html', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Replace href and src attributes with /monko prefix
  const modifiedHtml = data
    .replace(/(href="|src=")(?!https?:\/\/)(?!\/monko)/g, '$1/monko');

  // Write the modified HTML back to the file
  fs.writeFile('./docs/index.html', modifiedHtml, 'utf8', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('HTML file updated successfully!');
  });
});
