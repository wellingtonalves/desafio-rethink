import { fakeData } from "./data";
import { TypeFakePeople } from "./types";

const groupBy = (fakeData: TypeFakePeople[], propriedade: string) => {
  // your code here.
};

const info = groupBy(fakeData, "company");
console.table(info);
