import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Clock, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Post {
  title: string;
  summary: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
  filePath: string;
  mdContent: string;
}

const PostsSection = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch all markdown files from local posts directory
  const fetchLocalMarkdownFiles = async (): Promise<any[]> => {
    try {
      // Define the markdown files we want to load
      const markdownFiles = [
        { name: "ai-vs-generative-ai", path: "/posts/ai-vs-generative-ai.md" },
        {
          name: "microservices-best-practices",
          path: "/posts/microservices-best-practices.md",
        },
      ];

      const filesWithContent = await Promise.all(
        markdownFiles.map(async (file) => {
          try {
            const response = await fetch(file.path);
            if (!response.ok) {
              console.error(`Failed to fetch ${file.path}:`, response.status);
              return null;
            }
            const content = await response.text();
            return {
              name: file.name,
              path: file.path,
              content: content,
              download_url: file.path,
            };
          } catch (error) {
            return null;
          }
        })
      );

      const validFiles = filesWithContent.filter((file) => file !== null);
      return validFiles;
    } catch (error) {
      return [];
    }
  };

  useEffect(() => {
    const fetchPostsFromGitHub = async () => {
      try {
        setLoading(true);

        // Fetch all markdown files from local posts directory
        const markdownFiles = await fetchLocalMarkdownFiles();

        // Process each markdown file
        const postsData = markdownFiles.map((file: any) => {
          try {
            const content = file.content;
            // Extract date from markdown content using "**Published:**" format
            const dateMatch = content.match(/\*\*Published:\*\*\s*([^\n]+)/i);
            let postDate = new Date().toISOString().split("T")[0]; // fallback to current date

            if (dateMatch) {
              const extractedDate = dateMatch[1].trim();
              // Try to parse the date and format it as YYYY-MM-DD
              const parsedDate = new Date(extractedDate);
              if (!isNaN(parsedDate.getTime())) {
                postDate = parsedDate.toISOString().split("T")[0];
              }
            }

            // Extract metadata from markdown frontmatter or content
            const title = extractTitle(content, file.name);
            const summary = extractSummary(content);
            const tags = extractTags(content);

            return {
              title,
              summary,
              date: postDate,
              readTime: calculateReadTime(content),
              tags,
              slug: file.name.replace(".md", ""),
              filePath: file.path,
              mdContent: content,
            };
          } catch (error) {
            return null;
          }
        });

        // Filter out null values and sort by date
        const validPosts = postsData
          .filter((post): post is Post => post !== null)
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          );

        setPosts(validPosts);
      } catch (error) {
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPostsFromGitHub();
  }, []);

  // Helper functions for parsing markdown content
  const extractTitle = (content: string, filename: string): string => {
    // Try to extract title from frontmatter or first heading
    const titleMatch =
      content.match(/^#\s+(.+)$/m) ||
      content.match(/title:\s*['"]?([^'"\n]+)['"]?/);
    return titleMatch
      ? titleMatch[1].trim()
      : filename.replace(".md", "").replace(/-/g, " ");
  };

  const extractSummary = (content: string): string => {
    // Extract summary from markdown content using "**Description:**" format
    const descriptionMatch = content.match(
      /\*\*Description:\*\*\s*([\s\S]*?)(?=\n\n|\n---|\n##|\n###|\n#)/i
    );
    if (descriptionMatch) {
      return descriptionMatch[1].trim();
    }

    // Fallback: try other common patterns
    const summaryMatch =
      content.match(/summary:\s*['"]?([^'"\n]+)['"]?/) ||
      content.match(/description:\s*['"]?([^'"\n]+)['"]?/);

    if (summaryMatch) return summaryMatch[1].trim();

    // Fallback: extract first paragraph after title
    const lines = content.split("\n").filter((line) => line.trim());
    const firstParagraph = lines.find(
      (line) => !line.startsWith("#") && !line.includes(":") && line.length > 50
    );
    return firstParagraph
      ? firstParagraph.substring(0, 150) + "..."
      : "No summary available";
  };

  const extractTags = (content: string): string[] => {
    // Extract tags from markdown content using the format "**Tags:** tag1, tag2, tag3"
    const tagsMatch = content.match(/\*\*Tags:\*\*\s*([^\n]+)/i);
    if (tagsMatch) {
      const tagsStr = tagsMatch[1];
      return tagsStr
        .split(",")
        .map((tag) => tag.trim().replace(/['"\[\]]/g, ""));
    }

    // Fallback: try other common patterns
    const fallbackMatch =
      content.match(/tags:\s*\[(.*?)\]/s) || content.match(/tags:\s*([^\n]+)/i);
    if (fallbackMatch) {
      const tagsStr = fallbackMatch[1];
      return tagsStr
        .split(",")
        .map((tag) => tag.trim().replace(/['"\[\]]/g, ""));
    }

    return ["Technical", "Blog"];
  };

  const calculateReadTime = (content: string): string => {
    const wordCount = content.split(/\s+/).length;
    const readingSpeed = 200; // words per minute
    const minutes = Math.ceil(wordCount / readingSpeed);
    return `${minutes} min read`;
  };

  const handlePostClick = (slug: string, filePath: string) => {
    // Navigate to the post view page with file path
    navigate(`/post/${slug}?path=${encodeURIComponent(filePath)}`);
  };

  if (loading) {
    return (
      <section id="posts" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Latest Posts
            </h2>
            <div className="animate-pulse">
              <div className="h-4 bg-muted rounded w-1/2 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="posts" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Latest Posts
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights and experiences from building scalable systems, leading
            engineering teams, and creating developer tools that impact millions
            of users.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {posts.map((post) => (
            <Card
              key={post.slug}
              className="card-gradient hover-lift border-border/50 cursor-pointer"
              onClick={() => handlePostClick(post.slug, post.filePath)}
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <CardTitle className="text-xl hover:text-primary transition-smooth">
                    {post.title}
                  </CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {post.summary}
                </p>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-2">
                  <Button variant="ghost" size="sm" className="group">
                    Read More
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/trinathanantham/posts"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Posts on GitHub
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default PostsSection;
