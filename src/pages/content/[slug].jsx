import fs from "fs";
import path from "path";
import parseMarkdown from "../../utils/markdown";
import Header from "../../components/common/Header";

function BlogPost({ content, frontmatter }) {
  return (
    <div>
      <Header title={frontmatter.title} />

      <div className="px-5" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), "content");
  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(".md", "") },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const postFilePath = path.join(process.cwd(), "content", `${slug}.md`);
  const markdownContent = fs.readFileSync(postFilePath, "utf8");
  const { content, frontmatter } = parseMarkdown(markdownContent);

  return {
    props: {
      content,
      frontmatter,
    },
  };
}

export default BlogPost;
