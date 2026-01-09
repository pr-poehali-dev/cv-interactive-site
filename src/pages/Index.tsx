import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

type TabType = 'built' | 'learnt' | 'taught';

interface Project {
  title: string;
  duration: string;
  technologies: string[];
  description: string;
  impact: string;
  link: string;
}

interface Learning {
  title: string;
  source: string;
  skills: string[];
  description: string;
}

interface Teaching {
  title: string;
  audience: string;
  topics: string[];
  description: string;
}

interface Recommendation {
  name: string;
  title: string;
  pdfLink: string;
}

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabType>('built');

  const projects: Project[] = [
    {
      title: 'Local Bookstore Marketplace',
      duration: 'Summer 2025 (2.5 months)',
      technologies: ['React', 'TypeScript', 'Stripe API', 'Firebase'],
      description: 'Started because my neighborhood bookstore was struggling. Built them a custom online store where customers could browse inventory, reserve books, and pay online for pickup.',
      impact: 'Helped them survive COVID — sales jumped 300% in first month. Now processing $2k+ weekly',
      link: 'https://github.com/yourproject'
    },
    {
      title: 'StudySync — Pomodoro with Friends',
      duration: 'Fall 2025 (6 weeks)',
      technologies: ['Vue', 'Socket.io', 'Node.js', 'MongoDB'],
      description: 'Got tired of studying alone during remote learning. Made an app where you can see friends studying in real-time, share timers, and celebrate focus streaks together.',
      impact: '200+ students from 4 schools use it daily. One user said it got them through finals 🎉',
      link: 'https://github.com/yourproject'
    },
    {
      title: 'Open Source: React Calendar Library',
      duration: 'Ongoing since March 2025',
      technologies: ['React', 'TypeScript', 'Rollup', 'Jest'],
      description: 'Frustrated by bloated calendar packages, built a lightweight alternative. Contributed to the ecosystem I rely on.',
      impact: '1.2k GitHub stars, 50+ contributors, used in production by 3 startups I know of',
      link: 'https://github.com/yourproject'
    }
  ];

  const learnings: Learning[] = [
    {
      title: 'The Hard Way: Database Design',
      source: 'Breaking my own app at 3am + Stack Overflow',
      skills: ['Indexing', 'Query Optimization', 'Normalization', 'Redis Caching'],
      description: 'My app crashed when 50 users joined at once. Spent a weekend learning why my queries were slow, how indexes work, and when to cache. Now it handles 500+ concurrent users smoothly.'
    },
    {
      title: 'TypeScript (from JavaScript chaos)',
      source: 'Refactoring a 3000-line JS mess',
      skills: ['Type Systems', 'Generics', 'Strict Mode', 'Utility Types'],
      description: 'Had a project with bugs everywhere. Decided to learn TypeScript properly. Caught 40+ bugs during migration. Never going back to vanilla JS for serious projects.'
    },
    {
      title: 'System Design from Scratch',
      source: 'MIT OCW + Building for Scale',
      skills: ['Load Balancing', 'CDNs', 'Microservices', 'API Design'],
      description: 'Studied how real systems work — from Netflix to Discord. Applied concepts when my app needed to handle traffic spikes. Fascinating how theory connects to practice.'
    }
  ];

  const teachings: Teaching[] = [
    {
      title: 'Coding Club @ Local Library',
      audience: '15 kids (ages 12-16) every Saturday',
      topics: ['HTML/CSS', 'JavaScript Basics', 'Making Games', 'GitHub'],
      description: 'Started this because I wished someone taught me code when I was younger. We built personal websites, simple games, and even a group project. Seeing their first "Hello World" never gets old.'
    },
    {
      title: 'YouTube: "Code With Me" Series',
      audience: '~3k subscribers, mostly beginners',
      topics: ['React Tutorials', 'Debugging Live', 'Project Walkthroughs'],
      description: 'Record myself building projects from scratch, mistakes and all. Comments say the "unpolished" style helps more than perfect tutorials. Posted 12 videos so far.'
    },
    {
      title: 'Mentoring @ Dev Together',
      audience: '3 mentees transitioning to tech',
      topics: ['Portfolio Reviews', 'Interview Prep', 'Code Reviews', 'Career Advice'],
      description: 'Weekly 1-on-1s helping people break into tech. One mentee just landed their first dev job! Learned as much from them as they did from me.'
    }
  ];

  const recommendations: Recommendation[] = [
    {
      name: 'Prof. James Martinez',
      title: 'CS Department, State University',
      pdfLink: '/recommendations/martinez.pdf'
    },
    {
      name: 'Sarah Kim',
      title: 'Founder, LocalBookstore.com',
      pdfLink: '/recommendations/kim.pdf'
    },
    {
      name: 'David Chen',
      title: 'Engineering Lead, TechCorp',
      pdfLink: '/recommendations/chen.pdf'
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'built':
        return (
          <div className="space-y-6 animate-fade-in">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-3">
                      <Icon name="Clock" size={16} />
                      <span className="text-sm">{project.duration}</span>
                    </div>
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <span className="font-medium">View Project</span>
                    <Icon name="ExternalLink" size={18} />
                  </a>
                </div>
                
                <p className="text-foreground/80 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex items-start gap-2 mb-4 p-3 bg-secondary/10 rounded-lg">
                  <Icon name="TrendingUp" size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                  <p className="text-sm font-medium text-foreground">
                    <span className="text-secondary">Impact:</span> {project.impact}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="px-3 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        );

      case 'learnt':
        return (
          <div className="space-y-6 animate-fade-in">
            {learnings.map((learning, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon name="GraduationCap" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-1">{learning.title}</h3>
                    <p className="text-sm text-muted-foreground">{learning.source}</p>
                  </div>
                </div>
                
                <p className="text-foreground/80 mb-4 leading-relaxed">{learning.description}</p>
                
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground/70">Key Skills Acquired:</p>
                  <div className="flex flex-wrap gap-2">
                    {learning.skills.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="px-3 py-1 border-primary/30 text-primary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        );

      case 'taught':
        return (
          <div className="space-y-6 animate-fade-in">
            {teachings.map((teaching, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <Icon name="Users" size={24} className="text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-1">{teaching.title}</h3>
                    <p className="text-sm text-muted-foreground">{teaching.audience}</p>
                  </div>
                </div>
                
                <p className="text-foreground/80 mb-4 leading-relaxed">{teaching.description}</p>
                
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground/70">Topics Covered:</p>
                  <div className="flex flex-wrap gap-2">
                    {teaching.topics.map((topic, idx) => (
                      <Badge key={idx} className="px-3 py-1 bg-secondary/20 text-secondary hover:bg-secondary/30">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">
        
        <section className="text-center space-y-6 animate-fade-in">
          <div className="relative inline-block">
            <img 
              src="https://cdn.poehali.dev/projects/6f8500c4-0dc8-4659-ba09-7c681d21699d/files/24768bf5-a728-45bc-a84a-dfb45f2e60a3.jpg" 
              alt="Profile" 
              className="w-32 h-32 rounded-full object-cover border-4 border-primary/20 shadow-xl mx-auto"
            />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center shadow-lg">
              <Icon name="Code" size={16} className="text-white" />
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Alex</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I build things, break them, fix them, then help others do the same. 
              Started coding at 14. Still figuring it out. Love it anyway.
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-4 pt-4">
            <a href="mailto:alex@example.com" className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Icon name="Mail" size={20} />
              <span>alex@example.com</span>
            </a>
            <span className="text-muted-foreground">•</span>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Icon name="Github" size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setActiveTab('built')}
              className={`flex-1 sm:flex-none px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                activeTab === 'built'
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                  : 'bg-card hover:bg-muted border-2 border-border text-foreground hover:scale-102'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Icon name="Hammer" size={20} />
                <span>What I Built</span>
              </div>
            </button>
            
            <button
              onClick={() => setActiveTab('learnt')}
              className={`flex-1 sm:flex-none px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                activeTab === 'learnt'
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                  : 'bg-card hover:bg-muted border-2 border-border text-foreground hover:scale-102'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Icon name="BookOpen" size={20} />
                <span>What I Learnt</span>
              </div>
            </button>
            
            <button
              onClick={() => setActiveTab('taught')}
              className={`flex-1 sm:flex-none px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                activeTab === 'taught'
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                  : 'bg-card hover:bg-muted border-2 border-border text-foreground hover:scale-102'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Icon name="Users" size={20} />
                <span>What I Taught</span>
              </div>
            </button>
          </div>

          <div className="min-h-[400px]">
            {renderContent()}
          </div>
        </section>

        <section className="space-y-8 animate-fade-in">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-2">Recommendations</h2>
            <p className="text-muted-foreground">What others say about my work</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {recommendations.map((rec, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="FileText" size={28} className="text-white" />
                </div>
                <h3 className="font-bold text-lg mb-1">{rec.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{rec.title}</p>
                <a 
                  href={rec.pdfLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors group-hover:gap-3"
                >
                  <span>Read Letter</span>
                  <Icon name="Download" size={16} />
                </a>
              </Card>
            ))}
          </div>
        </section>

        <footer className="text-center pt-8 pb-4 text-sm text-muted-foreground">
          <p>Built by hand, no templates. React + TypeScript + lots of coffee ☕</p>
        </footer>

      </div>
    </div>
  );
};

export default Index;