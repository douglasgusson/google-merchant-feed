import { create } from "xmlbuilder2";
import { XMLBuilder } from "./protocols/xml-builder";

export class XMLBuilder2XMLBuilder implements XMLBuilder {
  constructor(private readonly options: { encoding?: string } = {}) {}

  public buildXML(contents: string | object): string {
    const builder = create({ encoding: "utf-8", ...this.options }, contents);
    return builder.end({ prettyPrint: true });
  }
}
