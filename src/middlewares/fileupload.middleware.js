import multer from 'multer';

// 2. Configure storage with filename and location.
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
        const sanitizedName = new Date().toISOString().replace(/:/g, '-') + file.originalname;
        cb(null, sanitizedName);
      }
      
});

export const upload = multer({
    storage: storage,
});
