const express = require('express')
const chalk = require('chalk')
const fs = require('fs')
const path = require('path')
const opn = require('opn')
const childProcess = require('child_process')

const app = express()
const entryFilePath = path.join(__dirname, '..', './.docz/dist/index.html')

const openStaticServer = () => {
  app.use('/static', express.static(path.join(__dirname, '..', './.docz/dist/static')))

  app.get('*', function (req, res) {
    const content = fs.readFileSync(entryFilePath, 'utf8')
    res.send(content)
  })

  app.listen(3333, function () {
    console.log(chalk.cyan('Example app listening on port 3333!\n'))
    console.log(chalk.yellow('You Can Visit: ') + chalk.green('http://localhost:3333/'))
    opn('http://localhost:3333')
  })
}

const main = () => {
  const isExist = fs.existsSync(entryFilePath)
  if (isExist) {
    openStaticServer()
  } else {
    const commandStr = `yarn run build`
    const output = childProcess.execSync(commandStr, {
      cwd: process.cwd(),
      timeout: 60000,
      encoding: 'utf8'
    })
    openStaticServer()
    console.log(output)
  }
}

main()