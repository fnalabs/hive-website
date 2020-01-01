export default function template (_, title, meta, link, style, css, content, js) {
  return `<!DOCTYPE html>
<html>
<head>
<meta charSet="utf-8" />
<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1" />

${title}
${meta}
${link}
<link rel="manifest" href="/manifest.json">

<style type="text/css">${style}</style>
<noscript><link rel="stylesheet" type="text/css" href="/${css}"></noscript>

<link rel="apple-touch-icon" type="image/png" sizes="512x512" href="/icon_512x512.png" />
<link rel="apple-touch-icon" type="image/png" sizes="192x192" href="/icon_192x192.png" />
<link rel="apple-touch-icon" type="image/png" sizes="144x144" href="/icon_144x144.png" />
<link rel="apple-touch-icon" type="image/png" sizes="114x114" href="/icon_114x114.png" />
<link rel="apple-touch-icon" type="image/png" sizes="72x72" href="/icon_72x72.png" />
<link rel="apple-touch-icon" type="image/png" sizes="57x57" href="/icon_57x57.png" />
<link rel="shortcut icon" type="image/png" sizes="32x32" href="/icon_32x32.png" />

</head>
<body>

${content}

<script type="text/javascript">
// TODO: Replace with link preload solution when support exceeds 90%. https://caniuse.com/#feat=link-rel-preload
document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend", '<link rel="stylesheet" type="text/css" href="/${css}">')
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("/sw.js"))
}
</script>
<script type="application/javascript" src="/${js}" async></script>

</body>
</html>`
}
