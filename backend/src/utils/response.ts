export function success(data: any, meta: any = {}) {
  return { success: true, data, meta };
}
export function failure(code: string, message: string, meta: any = {}) {
  return { success: false, error: { code, message }, meta };
}
