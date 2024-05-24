import { NextFunction } from "express";

const multer = require('multer');
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
  destination: './src/images',
  filename: (req: any, file: any, cb: any) => {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
});

const upload = multer({ storage: storage });

export const uploadMiddleware = (req: any, res: any, next: NextFunction) => {
    upload.array('images', 5)(req, res, (err: any) => {
        if (err) {
          return res.status(400).json({error: err.message});
        }
      const files = req.files;
      console.log(files)

      const errors: string[] = [];

      files.forEach((file: any) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
        const maxSize = 5 * 1024 * 1024; // 5MB

        if (!allowedTypes.includes(file.mimetype)) {
          errors.push(`Invalid file type: ${file.originalname}`);
        }

        if (file.size > maxSize) {
          errors.push(`File too large: ${file.originalname}`);
        }
      });

      if (errors.length > 0) {
        files.forEach((file: any) => {
          fs.unlinkSync(file.path);
        });

        return res.status(400).json({ errors });
      }

      req.files = files;

      next();
  });
};
