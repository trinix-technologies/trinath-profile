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

  // Mock posts data - in real implementation, this would fetch from GitHub API
  useEffect(() => {
    // Simulate API call to GitHub repo for posts
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
      },
      {
        title: "From Monolith to Microservices: A Migration Story",
        summary: "How we successfully migrated a monolithic application to microservices architecture while maintaining zero downtime and improving performance.",
        date: "2023-11-22",
        readTime: "10 min read",
        tags: ["Migration", "Architecture", "Docker", "AWS"],
        slug: "monolith-to-microservices"
      },
      {
        title: "Real-time Code Execution: Technical Deep Dive",
        summary: "Technical challenges and solutions for building secure, isolated code execution environments that can handle millions of code compilations.",
        date: "2023-10-05",
        readTime: "12 min read",
        tags: ["Security", "Docker", "Performance", "Sandboxing"],
        slug: "realtime-code-execution"
      }
    ];

    // Simulate loading delay
    setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 1000);
  }, []);

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