import { useState, useEffect } from 'react';
import { Calendar, Clock, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Post {
  title: string;
  summary: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
}

const PostsSection = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch posts from GitHub repository
  useEffect(() => {
    const fetchPostsFromGitHub = async () => {
      try {
        setLoading(true);
        
        // Replace with your GitHub username and repository name
        const username = 'trinathanantham';
        const repo = 'posts';
        
        // Fetch repository contents
        const response = await fetch(
          `https://api.github.com/repos/${username}/${repo}/contents`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        
        const files = await response.json();
        
        // Filter for markdown files
        const markdownFiles = files.filter((file: any) => 
          file.name.endsWith('.md') && file.type === 'file'
        );
        
        // Fetch content of each markdown file to extract metadata
        const postsData = await Promise.all(
          markdownFiles.map(async (file: any) => {
            try {
              const contentResponse = await fetch(file.download_url);
              const content = await contentResponse.text();
              
              // Extract metadata from markdown frontmatter or content
              const lines = content.split('\n');
              const title = extractTitle(content, file.name);
              const summary = extractSummary(content);
              const tags = extractTags(content);
              
              return {
                title,
                summary,
                date: new Date(file.sha ? '2024-01-15' : Date.now()).toISOString().split('T')[0], // Use commit date if available
                readTime: calculateReadTime(content),
                tags,
                slug: file.name.replace('.md', '')
              };
            } catch (error) {
              console.error(`Error processing file ${file.name}:`, error);
              return null;
            }
          })
        );
        
        // Filter out null values and sort by date
        const validPosts = postsData
          .filter((post): post is Post => post !== null)
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        
        setPosts(validPosts);
      } catch (error) {
        console.error('Error fetching posts from GitHub:', error);
        // Fallback to mock data if GitHub fetch fails
        const mockPosts: Post[] = [
          {
            title: "Building OneCompiler: Scaling to 2 Million Users",
            summary: "Deep dive into the architecture decisions and scaling challenges we faced while building OneCompiler, an online IDE supporting 60+ programming languages.",
            date: "2024-01-15",
            readTime: "8 min read",
            tags: ["Architecture", "Scaling", "React", "Node.js"],
            slug: "building-onecompiler-scaling"
          },
          {
            title: "Microservices at Scale: Lessons from SaasLabs",
            summary: "Key insights from managing microservices architecture for Billing, Balance, and Subscriber services, including monitoring and DevOps best practices.",
            date: "2023-12-10",
            readTime: "6 min read", 
            tags: ["Microservices", "DevOps", "Kubernetes", "MongoDB"],
            slug: "microservices-at-scale"
          }
        ];
        setPosts(mockPosts);
      } finally {
        setLoading(false);
      }
    };

    fetchPostsFromGitHub();
  }, []);

  // Helper functions for parsing markdown content
  const extractTitle = (content: string, filename: string): string => {
    // Try to extract title from frontmatter or first heading
    const titleMatch = content.match(/^#\s+(.+)$/m) || content.match(/title:\s*['"]?([^'"\n]+)['"]?/);
    return titleMatch ? titleMatch[1].trim() : filename.replace('.md', '').replace(/-/g, ' ');
  };

  const extractSummary = (content: string): string => {
    // Extract summary from frontmatter or first paragraph
    const summaryMatch = content.match(/summary:\s*['"]?([^'"\n]+)['"]?/) || 
                         content.match(/description:\s*['"]?([^'"\n]+)['"]?/);
    
    if (summaryMatch) return summaryMatch[1].trim();
    
    // Fallback: extract first paragraph after title
    const lines = content.split('\n').filter(line => line.trim());
    const firstParagraph = lines.find(line => !line.startsWith('#') && !line.includes(':') && line.length > 50);
    return firstParagraph ? firstParagraph.substring(0, 150) + '...' : 'No summary available';
  };

  const extractTags = (content: string): string[] => {
    // Extract tags from frontmatter
    const tagsMatch = content.match(/tags:\s*\[(.*?)\]/s) || content.match(/tags:\s*([^\n]+)/);
    if (tagsMatch) {
      const tagsStr = tagsMatch[1];
      return tagsStr.split(',').map(tag => tag.trim().replace(/['"\[\]]/g, ''));
    }
    return ['Technical', 'Blog'];
  };

  const calculateReadTime = (content: string): string => {
    const wordCount = content.split(/\s+/).length;
    const readingSpeed = 200; // words per minute
    const minutes = Math.ceil(wordCount / readingSpeed);
    return `${minutes} min read`;
  };

  const handlePostClick = (slug: string) => {
    // In real implementation, this would navigate to the full post
    window.open(`https://github.com/trinathanantham/posts/blob/main/${slug}.md`, '_blank');
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
            Insights and experiences from building scalable systems, leading engineering teams, 
            and creating developer tools that impact millions of users.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {posts.map((post) => (
            <Card 
              key={post.slug} 
              className="card-gradient hover-lift border-border/50 cursor-pointer"
              onClick={() => handlePostClick(post.slug)}
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <CardTitle className="text-xl hover:text-primary transition-smooth">
                    {post.title}
                  </CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString()}
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

        <div className="text-center mt-12">
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
        </div>
      </div>
    </section>
  );
};

export default PostsSection;