export default () => {
  const e = window?.navigator.userAgent.toLowerCase()
  const t = "ipad" == e.match(/ipad/i)
  const i = "iphone" == e.match(/iphone/i)
  const r = "midp" == e.match(/midp/i)
  const n = "rv:1.2.3.4" == e.match(/rv:1.2.3.4/i)
  const a = "ucweb" == e.match(/ucweb/i)
  const o = "android" == e.match(/android/i)
  const s = "windows ce" == e.match(/windows ce/i)
  const l = "windows mobile" == e.match(/windows mobile/i);
  return !(t || i || r || n || a || o || s || l)
}