import express from "express";
import { Code } from "../common/code";
import { CroppedImageException } from "../common/exception/croppedImageException";
import { StatusCode } from "../common/statusCode";
import { CroppedValidation } from "../common/validation/croppedValidation";
import { EmptyValidation } from "../common/validation/emptyValidation";

export const paramsCropped = async (req: express.Request, res: express.Response)=>{
    const left: number = req.body.left;
    const top: number = req.body.top;
    const width: number = req.body.width;
    const height: number = req.body.height;
    const LEFT_TOP_MAX: number = 100;
    const WIDTH_HEIGHT_MAX: number = 1000;
    const widthString: any = width;
    const heigthString: any = height;

    if (left > LEFT_TOP_MAX){
        throw new CroppedImageException(
			"Invalid data parameter: " + left + " Can't be more than '100px'" ,
			StatusCode.BadRequest,
			Code.EXTRACTOR_ERROR_01
		)
    }else{
        if (top > LEFT_TOP_MAX){
            throw new CroppedImageException(
                "Invalid data parameter: " + top + " Can't be more than '100px'" ,
                StatusCode.BadRequest,
                Code.EXTRACTOR_ERROR_01
            )
        }
    }
    if (width > WIDTH_HEIGHT_MAX){
        throw new CroppedImageException(
			"Invalid data parameter: " + width+ " Can't be more than '1000px'" ,
			StatusCode.BadRequest,
			Code.EXTRACTOR_ERROR_01
		)
    }else{
        if (height > WIDTH_HEIGHT_MAX){
            throw new CroppedImageException(
                "Invalid data parameter: " + height + " Can't be more than '1000px'" ,
                StatusCode.BadRequest,
                Code.EXTRACTOR_ERROR_01
            )
        }
    }

    if(widthString.trim().length === 0){
        throw new CroppedImageException(
            "Invalid data parameter: empty" ,
            StatusCode.BadRequest,
            Code.EXTRACTOR_ERROR_01
        )
    }
    /*const empty= new CroppedValidation(height, height)
    empty.validate();
    */

}
