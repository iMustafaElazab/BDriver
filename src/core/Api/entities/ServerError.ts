import type {AxiosError} from 'axios';
import type {ServerErrorResponse} from 'src/core';

interface ServerError extends AxiosError<ServerErrorResponse> {
  date?: Date;
  status?: number;
  data?: ServerErrorResponse;
  errorMessage?: string;
}

export default ServerError;
