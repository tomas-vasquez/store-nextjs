// markdown.js

import { remark } from "remark";
import remarkHTML from "remark-html";
import grayMatter from "gray-matter";

function parseMarkdown(markdownContent) {
  const { content, data } = grayMatter(markdownContent);
  const processedContent = remark()
    .use(remarkHTML)
    .processSync(content)
    .toString();
  return { content: processedContent, frontmatter: data };
}

export default parseMarkdown;
