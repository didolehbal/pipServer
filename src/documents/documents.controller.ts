import { Controller, UploadedFiles, UploadedFile, Get, Param, Res } from '@nestjs/common';
import {Document } from "./model/document.entity"
import { Crud, Override, ParsedRequest, ParsedBody, CrudRequest, CrudController } from '@nestjsx/crud';
import { DocumentsService } from './documents.service';
import {FileInterceptor} from "@nestjs/platform-express"
import { FileUploadingUtils } from './Upload';


class createDoc{
    title:string
    doc:any
    url:string
    "cours.id":number
}


@Crud({
    model:{type:Document},
    query:{
        join:{
            cours:{
                eager:true
            },
            task:{
              eager:true
            }
        }
    },
    routes: {
        createOneBase: {
          interceptors: [FileUploadingUtils.singleFileUploader('doc')],
        },
      },
})
@Controller('documents')
export class DocumentsController implements CrudController<Document> {
    constructor(public service:DocumentsService){}
    @Override()
    createOne(
      @ParsedRequest() req: CrudRequest,
      @ParsedBody() dto: createDoc,
      @UploadedFile() doc: any,
    ) {
        console.log({dto,doc})
        dto.url = doc.filename
      return this.service.createOne(req, dto);
    }


    @Get('files/:fileId')
    async serveAvatar(@Param('fileId') fileId, @Res() res): Promise<any> {
      res.sendFile(fileId, { root: 'uploads/documents'});
    }
}
