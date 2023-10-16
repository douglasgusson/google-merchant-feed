import { FeedBuilder } from "../src/feed-builder";

describe("FeedBuilder", () => {
  let feedBuilder: FeedBuilder;

  beforeEach(() => {
    feedBuilder = new FeedBuilder();
  });

  describe("withTitle", () => {
    it("should set the title of the feed channel", () => {
      const title = "My Feed Title";
      feedBuilder.withTitle(title);
      expect(feedBuilder.getFeed().channel.title).toEqual(title);
    });

    it("should return the FeedBuilder instance", () => {
      const result = feedBuilder.withTitle("My Feed Title");
      expect(result).toBe(feedBuilder);
    });
  });

  describe("withLink", () => {
    it("should set the link of the feed channel", () => {
      const link = "https://example.com/feed";
      feedBuilder.withLink(link);
      expect(feedBuilder.getFeed().channel.link).toEqual(link);
    });

    it("should return the FeedBuilder instance", () => {
      const result = feedBuilder.withLink("https://example.com/feed");
      expect(result).toBe(feedBuilder);
    });
  });

  describe("withDescription", () => {
    it("should set the description of the feed channel", () => {
      const description = "My Feed Description";
      feedBuilder.withDescription(description);
      expect(feedBuilder.getFeed().channel.description).toEqual(description);
    });

    it("should return the FeedBuilder instance", () => {
      const result = feedBuilder.withDescription("My Feed Description");
      expect(result).toBe(feedBuilder);
    });
  });

  describe("withProduct", () => {
    it("should add a product to the feed", () => {
      const product = { id: "123", title: "My Product" };
      feedBuilder.withProduct(product);
      expect(feedBuilder.getFeed().products).toContain(product);
    });

    it("should return the FeedBuilder instance", () => {
      const result = feedBuilder.withProduct({
        id: "123",
        title: "My Product",
      });
      expect(result).toBe(feedBuilder);
    });
  });

  describe("buildXml", () => {
    it("should build the XML feed", () => {
      const title = "My Feed Title";
      const link = "https://example.com/feed";
      const description = "My Feed Description";
      const product = { id: "123", title: "My Product" };

      feedBuilder
        .withTitle(title)
        .withLink(link)
        .withDescription(description)
        .withProduct(product);
      const xml = feedBuilder.buildXml();

      expect(xml).toContain("<title>My Feed Title</title>");
      expect(xml).toContain("<link>https://example.com/feed</link>");
      expect(xml).toContain("<description>My Feed Description</description>");
      expect(xml).toContain("<g:id>123</g:id>");
      expect(xml).toContain("<g:title>My Product</g:title>");
    });
  });
});
