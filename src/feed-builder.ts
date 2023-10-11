import { xmlObjectFormatter } from "./formatters";
import { Feed } from "./models/feed";
import { Product } from "./models/product";
import { XMLBuilder } from "./protocols/xml-builder";
import { xmlPropertiesMap } from "./xml-properties-map";
import { XMLBuilder2XMLBuilder } from "./xmlbuilder2-xml-builder";

export class FeedBuilder {
  private feed: Feed = {
    channel: {},
    products: [],
  };

  constructor(
    private readonly xmlBuilder: XMLBuilder = new XMLBuilder2XMLBuilder(),
  ) {}

  withTitle(title: string) {
    this.feed.channel.title = title;
    return this;
  }

  withLink(link: string) {
    this.feed.channel.link = link;
    return this;
  }

  withDescription(description: string) {
    this.feed.channel.description = description;
    return this;
  }

  withProduct(product: Product) {
    this.feed.products.push(product);
    return this;
  }

  getFeed() {
    return this.feed;
  }

  buildXml() {
    if (this.feed.products.length > 0) {
      this.feed.channel.item = this.feed.products.map((product) =>
        xmlObjectFormatter(product, xmlPropertiesMap),
      );
    }

    const feed = {
      rss: {
        "@xmlns:g": "http://base.google.com/ns/1.0",
        "@version": "2.0",
        channel: this.feed.channel,
      },
    };

    return this.xmlBuilder.buildXML(feed);
  }
}
