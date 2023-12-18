import { ContentfulRichTextGatsbyReference, RenderRichTextData } from "gatsby-source-contentful/rich-text";

export interface Publication {
  id: string;
  authors: string;
  year: string;
  link: string;
  title: string;
  publication: RenderRichTextData<ContentfulRichTextGatsbyReference>;
}

export interface Manuscript {
  id: string;
  title: string;
  underReview: boolean;
  createdAt: Date;
}
