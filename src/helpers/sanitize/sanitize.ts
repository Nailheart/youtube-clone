import sanitizeHtml, { IOptions } from 'sanitize-html';

const sanitizeHTML = (html: string, options?: IOptions): string => {
  return sanitizeHtml(html, options);
};

export { sanitizeHTML };