import express from "express";
import fs from 'fs';

export class DownloadFile{
    downloadPDF = (req: express.Request, res: express.Response) => {
        try {
            const filename = req.params.name;
            const directoryPath = process.env.UPLOAD_PATH + filename;
            const stream = this.loadFile(directoryPath);
            res.writeHead(200, {
                "Content-Type": filename,
                "Content-Disposition": "attachment; filename="+filename,
            });
            stream.on('open', () => {
                stream.pipe(res);
            });

        } catch (err: any) {
            res.status(err.status).send({message: `${err.message}`});
        }
    };

    loadFile(filePath: string): fs.ReadStream {
        return fs.createReadStream(filePath);
    }
}
