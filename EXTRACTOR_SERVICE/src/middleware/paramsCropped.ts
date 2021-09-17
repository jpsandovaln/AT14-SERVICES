import express from "express";
import { Code } from "../common/code";
import { CroppedImageException } from "../common/exception/croppedImageException";
import { StatusCode } from "../common/statusCode";

export class ParamsCropped {
    LEFT_TOP_MAX: number = 100;
    WIDTH_HEIGHT_MAX: number = 1000;

    paramatersCropped = async (req: express.Request, res: express.Response)=>{
        const left: number = req.body.left;
        const top: number = req.body.top;
        const width: number = req.body.width;
        const height: number = req.body.height;
        const leftString: any = left;
        const topString: any = top;
        const widthString: any = width;
        const heigthString: any = height;

        this.checkUndefined(left);
        this.checkUndefined(top);
        this.checkUndefined(width);
        this.checkUndefined(height);
        this.checkLeftTop(left);
        this.checkLeftTop(top);
        this.checkWidthHeight(width);
        this.checkWidthHeight(height);
        this.checkIsEmpty(left);
        this.checkIsEmpty(top);
        this.checkIsEmpty(width);
        this.checkIsEmpty(height);
        this.checkString(leftString);
        this.checkString(topString);
        this.checkString(widthString);
        this.checkString(heigthString);
    }

    checkUndefined(params: number): void{
        if (params == undefined) {
            throw new CroppedImageException(
                "Invalid data parameter: " + params,
                StatusCode.BadRequest,
                Code.EXTRACTOR_ERROR_01
            );
        }
    }

    checkLeftTop(params: number): void {
        if (params > this.LEFT_TOP_MAX){
            throw new CroppedImageException(
                "Invalid data parameter: " + params + " Can't be more than '100px'",
                StatusCode.BadRequest,
                Code.EXTRACTOR_ERROR_01
            );
         }
    }

    checkWidthHeight(params: number): void {
        if (params > this.WIDTH_HEIGHT_MAX){
            throw new CroppedImageException(
                "Invalid data parameter: " + params + " Can't be more than '1000px'",
                StatusCode.BadRequest,
                Code.EXTRACTOR_ERROR_01
            );
        }
    }

    checkIsEmpty(params: any): void {
        if(params.trim().length === 0){
            throw new CroppedImageException(
                "Invalid data parameter: Empty",
                StatusCode.BadRequest,
                Code.EXTRACTOR_ERROR_01
            );
        }
    }

    checkString(params: any): void{
        var pattern = (/([^0-9])/);
        if(params.match(pattern)) {
            throw new CroppedImageException(
                "Invalid data parameter: " + params,
                StatusCode.BadRequest,
                Code.EXTRACTOR_ERROR_01
            );
        }
    }
}
