import { CoreOutput } from "src/common/dtos/output.dto";

export class VerifyEmailInput {
    code: string;
}


export class VerifyEmailOutput extends CoreOutput {}