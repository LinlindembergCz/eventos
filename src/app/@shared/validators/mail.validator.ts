


  export function ValidEmail(value: string)
  {
    const pattern = /^[\w]{1,}[\w.+-]{0,}@[\w-]{1,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/;
    return value.match(pattern) ;
  }