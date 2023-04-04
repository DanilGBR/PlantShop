export type GenericResponse<T> = {
  message: string | null;
} & T;
