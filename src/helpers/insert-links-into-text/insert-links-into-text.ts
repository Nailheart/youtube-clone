// TODO: need replace hashtag and timelist
const insertLinksIntoText = (text: string) => {
  return (text || '').replace(/([^\S]|^)(((https?\:\/\/)|(www\.))(\S+))/gi, (match, space, url) => {
    let hyperlink = url;
    if (!hyperlink.match('^https?://')) {
      hyperlink = 'http://' + hyperlink;
    }
    return space + '<a href="' + hyperlink + '">' + url + '</a>';
  });
};

export { insertLinksIntoText };