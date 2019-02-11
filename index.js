const five = require('johnny-five')
const pEvent = require('p-event')
const robot = require('robotjs')
const got = require('got')
const { exec } = require('child_process')

// WARNING! If you're on a mac you need to give permission
// to your current terminal to do some things.
// Go in Preferences > Security & Privacy > Accessibility and make sure
// the terminal app you're using is checked

(async () => {
  const board = new five.Board()

  await pEvent(board, 'ready')
  console.log(`I'm ready!`)

  const button = new five.Button(2)

  button.on('press', async () => {
    console.log(`I've been pressed!`)

    // trigger mouse
    // robot.mouseClick() doesn't fucking work on multiple screens
    // so first you have to do `brew install cliclick`
    // exec('cliclick c:.')

    // trigger keys
    robot.keyTap('enter')


    // trigger a sound
    // 💻 this works only on mac
    // exec(`afplay /Users/accurat_mf/Desktop/carlo/echfu.m4a`)


    // make the computer say something
    // 💻 this works only on mac
    // exec(`say stocazzo`)


    // send a message to a slack channel using the integration `incoming-webhook`
    // the HOOK_URL is provided by the integration
    // const HOOK_URL = ''
    // got.post(HOOK_URL, {
    //   body: JSON.stringify({
    //     username: 'RED BUTTON',
    //     text: `I've been pressed!`,
    //     icon_url: 'https://i.imgur.com/9PpFcY8.jpg'
    //   })
    // })
  })
})
