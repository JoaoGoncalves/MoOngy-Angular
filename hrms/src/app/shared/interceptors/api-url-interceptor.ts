import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CONSTANTS } from '../contants';

export const apiUrlInterceptor: HttpInterceptorFn = (req, next) => {

  const constants = inject(CONSTANTS);


  // if the request already has a full URL (e.g. "http://", "https://") — skip
  if (/^https?:\/\//i.test(req.url)) {
    return next(req);
  }

  // normalize base and path:
  const base = constants.apiUrl.replace(/\/$/, '');  // remove slash final
  const path = req.url.replace(/^\//, '');           // remove slash inicial

  const newUrl = `${constants.apiUrl}${req.url}`;
  const newReq = req.clone({ url: newUrl });

  return next(newReq);

};
