const fs = require('fs-extra')
const path = require('path')

const directoryPath = './src/data'
const dryRun = process.argv.includes('--dry-run')

async function removeOldFiles() {
  try {
    const files = await fs.readdir(directoryPath)
    let count = 0

    console.log(`Found ${files.length} files in directory: ${directoryPath}`)

    const now = new Date()
    const oneWeekAgo = new Date(now.setDate(now.getDate() - 7))

    for (const file of files) {
      const filePath = path.join(directoryPath, file)

      // Check if it's a JSON file
      if (path.extname(file) === '.json') {
        const data = await fs.readJson(filePath)

        if (data.updated_time) {
          const updatedTime = new Date(data.updated_time)

          if (updatedTime < oneWeekAgo) {
            count++
            if (dryRun) {
              console.log(`(Dry Run) Would remove old file: ${file}`)
            } else {
              await fs.remove(filePath)
              console.log(`Removed old file: ${file}`)
            }
          }
        }
      }
    }
    console.log(`Removed ${count} files`)
  } catch (err) {
    console.error('Error reading directory or removing files:', err)
  }
}

removeOldFiles()
