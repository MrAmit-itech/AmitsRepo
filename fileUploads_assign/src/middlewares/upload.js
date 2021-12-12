const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'../final_upload'))
    },
    filename: function (req, file, cb) {
      const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniquePrefix + '-' + file.originalname)
    }
  })
  
  function fileFilter (req, file, cb) {
    if((file.mimetype == 'image/jpg') || (file.mimetype == 'image/png')){
        cb(null, true)
    }else{
        cb(null , false)
    }
  }

module.exports = multer({
    storage,
    fileFilter,
    limits:{
        fileSize:1024 * 1024 * 5
    }
})