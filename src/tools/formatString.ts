export class fomartString{

    static escapeRegExp(string):string {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      }

}