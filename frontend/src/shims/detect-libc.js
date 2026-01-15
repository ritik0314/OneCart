// Minimal shim for detect-libc used during build/deploy environments
const GLIBC = 'glibc'
const MUSL = 'musl'

const isLinux = () => typeof process !== 'undefined' && process.platform === 'linux'

const family = async () => {
  return isLinux() ? GLIBC : null
}

const familySync = () => {
  return isLinux() ? GLIBC : null
}

const isNonGlibcLinux = async () => isLinux() && (await family()) !== GLIBC
const isNonGlibcLinuxSync = () => isLinux() && familySync() !== GLIBC

const version = async () => null
const versionSync = () => null

module.exports = {
  GLIBC,
  MUSL,
  family,
  familySync,
  isNonGlibcLinux,
  isNonGlibcLinuxSync,
  version,
  versionSync
}
