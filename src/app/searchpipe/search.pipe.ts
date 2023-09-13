import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(alldata:any[],searchString:string,propName:string):any{
    const result:any=[]
    if(!alldata||searchString==""||propName==""){
      return alldata
    }
    else{
      alldata.forEach((item:any)=>{
        if(item[propName].trim().toLowerCase().includes(searchString.trim().toLocaleLowerCase())){
          result.push(item)
        }
      })
      return result
    }
  }
   

}
