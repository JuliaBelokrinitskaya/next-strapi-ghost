const Amperize = require('amperize');
const amperize = new Amperize();

export function getAmp(html) {
  html = html.replace('loading="lazy"', '');
  return new Promise((resolve) => {
    amperize.parse(html, (error, result) => {
      return resolve(error || result);
    });
  });
}
