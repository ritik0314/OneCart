const fs = require('fs')
const path = require('path')

const target = path.join(__dirname, '..', 'node_modules', 'detect-libc', 'lib', 'detect-libc.js')
const dir = path.dirname(target)

try {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(dir, { recursive: true })
    const shim = `// detect-libc shim created by root postinstall\nmodule.exports = {\n  isMusl: function () { return false },\n  isGLIBC: function () { return true },\n  family: 'unknown'\n}\n`
    fs.writeFileSync(target, shim, 'utf8')
    console.log('Created root detect-libc shim at', target)
  }
} catch (err) {
  console.error('Failed to create root detect-libc shim:', err)
}
