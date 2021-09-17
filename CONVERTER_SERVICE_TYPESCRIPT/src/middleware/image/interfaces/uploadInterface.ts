import multer from "multer";

export interface IUpload {
    storage: multer.StorageEngine;
}
