export default function template (_, title, meta, link, style, css, content, js) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charSet="utf-8" />
<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1" />

${title}
${meta}
${link}
<link rel="manifest" href="/manifest.json">

<style type="text/css">${style}</style>
<link rel="stylesheet" href="/${css}" media="print" onload="this.media='all';this.onload=null;">

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
<script type="application/javascript" src="/${js}" async></script>
</body>
</html>`
}
