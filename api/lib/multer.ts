import multer from 'multer'

const imageFilter = function (req, file, cb) {
  // accept image only
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return cb(null, false, new Error('Only image files are allowed!'))
  }
  cb(null, true)
}

export const postFileUpload = multer({
  limits: { fieldSize: 1024 * 1024 * 25 },
  dest: '../server/uploads/posts'
})
export const postImageUpload = multer({
  limits: { fieldSize: 1024 * 1024 * 25 },
  dest: '../server/uploads/posts/image',
  fileFilter: imageFilter
})
export const memberImageUpload = multer({
  dest: '../server/uploads/members',
  fileFilter: imageFilter
})
