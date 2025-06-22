import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { environment } from '../../../enviroments/environment';

export const authInterceptor: HttpInterceptorFn = (req:HttpRequest<unknown>, next:HttpHandlerFn) => {
  const apiKey:string = environment.tmdbApiKey;
  if(req.url.startsWith(environment.tmdbBaseUrl)){
    const headers = req.headers.set('Authorization', `Bearer ${apiKey}`);
    const clonedReq = req.clone({headers});
    return next(clonedReq);
  }
  return next(req)
};
