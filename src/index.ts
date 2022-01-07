import { fakeData } from "./data";
import { FakeItemType } from "./types";

const groupBy = (fakeData: FakeItemType[], propriedade: string) => {
  // your code here.
}

const companies = groupBy(fakeData, "company");
console.table(companies);
