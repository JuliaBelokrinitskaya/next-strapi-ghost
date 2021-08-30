const { task, dest, src } = require('gulp');
const change = require('gulp-change');
const fs = require('fs');
const critical = require('critical');

const hash = function (str, seed = 0) {
  let h1 = 0xdeadbeef ^ seed,
    h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 =
    Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^
    Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 =
    Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^
    Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};

async function extractStyles(content, done) {
  const regexp = new RegExp(/<style id.*<\/style>/g);
  const match = content.match(regexp);

  if (match) {
    const { css, html, uncritical } = await critical.generate({
      inline: true,
      html: content,
      width: 450,
      height: 850,
      extract: true,
      rebase: {
        to: 'out/_next/static/css/',
      },
    });

    if (uncritical) {
      if (!fs.existsSync('out/_next/static/css/')) {
        fs.mkdirSync('out/_next/static/css/', { recursive: true });
      }
      const filename = `/_next/static/css/style-${hash(uncritical)}.css`;
      fs.writeFile(`out${filename}`, uncritical, 'utf-8', (err) => {
        if (err) {
          console.log(err);
        }
      });

      content = html.replace(
        '<noscript data-n-css=""></noscript>',
        `<link rel="preload" href="${filename}" as="style"/><link rel="stylesheet" href="${filename}" data-n-p=""/><noscript data-n-css=""></noscript>`,
      );
    }

    content = content.replace(regexp, `<style>${css}</style>`);
  }

  done(null, content);
}

task('styles', () => {
  return src('out/**/*.html').pipe(change(extractStyles)).pipe(dest('out/'));
});
