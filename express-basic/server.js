// Notes.
// Use standardjs style: https://standardjs.com/

const Express = require('express')
const Seneca = require('seneca')
const { cdata, hexToName } = require('./list/utility')

const app = Express()

// Matches a 3 or 6 digit hex color code, with or without a leading '#'.
const HEX_RE = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i

function expandShortHex (hex) {
  // e.g. 'f00' -> 'ff0000'
  return hex.split('').map((c) => c + c).join('')
}

app.use('/color/:name', function (req, res) {
  const input = req.params.name.trim()

  const hexMatch = input.match(HEX_RE)

  if (hexMatch) {
    // Issue #3: reverse lookup - hex code -> color name.
    let hex = hexMatch[1].toLowerCase()
    if (hex.length === 3) {
      hex = expandShortHex(hex)
    }

    const name = hexToName[hex]
    if (name) {
      res.send(name)
    } else {
      res.status(404).send('Unknown color code: ' + input)
    }
    return
  }

  // Issue #2: forward lookup - color name -> hex code (case-insensitive).
  const name = input.toLowerCase()
  const code = cdata[name]

  if (code) {
    res.send(code)
  } else {
    res.status(404).send('Unknown color name: ' + input)
  }
})

app.listen(3000)

module.exports = app
