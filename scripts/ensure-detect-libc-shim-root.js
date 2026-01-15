const fs = require('fs')
const path = require('path')

const libDir = path.join(__dirname, '..', 'node_modules', 'detect-libc', 'lib')
const target = path.join(libDir, 'detect-libc.js')
const elfTarget = path.join(libDir, 'elf.js')

try {
  if (!fs.existsSync(libDir)) fs.mkdirSync(libDir, { recursive: true })

  if (!fs.existsSync(target)) {
    const shim = `// detect-libc shim created by root postinstall\nmodule.exports = {\n  isMusl: function () { return false },\n  isGLIBC: function () { return true },\n  family: 'unknown'\n}\n`
    fs.writeFileSync(target, shim, 'utf8')
    console.log('Created root detect-libc shim at', target)
  }

  if (!fs.existsSync(elfTarget)) {
    const elfShim = `// elf stub for detect-libc\nmodule.exports = { isElf: true }\n`
    fs.writeFileSync(elfTarget, elfShim, 'utf8')
    console.log('Created root elf stub at', elfTarget)
  }
} catch (err) {
  console.error('Failed to create root detect-libc shim:', err)
}
