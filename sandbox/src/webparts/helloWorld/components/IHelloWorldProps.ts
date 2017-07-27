import { IWebPartContext } from "@microsoft/sp-webpart-base";
import { ISPLists } from "../HelloWorldWebPart"

export interface IHelloWorldProps {
  description: string;
  context: IWebPartContext
  test: string;
  test1: boolean;
  test2: string;
  test3: boolean;
  listData: ISPLists; 
}
