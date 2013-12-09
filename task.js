self.addEventListener('message', function(e) {
  var data = e.data;
  switch (data.cmd) {
    case 'cnn':
      self.postMessage('http://rss.cnn.com/rss/edition.rss');
      break;
    case 'bbc':
      self.postMessage('http://feeds.bbci.co.uk/news/rss.xml');
      break;
    default:
      self.postMessage('Unknown command: ' + data.cmd);
  };
}, false);