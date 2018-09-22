function addProtocol(url, protocol) {
  if(!url) return '';
  if (!/^(f|ht)tps?:\/\//i.test(url)) {
     url = protocol + url;
  }
  return url;
}

function stripProtocol(url){
  return url.replace(/(^\w+:|^)\/\//, '');
}

function getProtocol(url){
  const values = url.match(/(^\w+:|^)\/\//);

  return values && (values.length > 0) ? values[0] : '';
}

export { addProtocol, getProtocol, stripProtocol };
