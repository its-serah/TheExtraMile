
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Lightbulb, ArrowDown, Zap, Target, Code, Sparkles } from "lucide-react";

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-orange-50 to-purple-100">
      {/* Scroll Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-600 to-orange-600 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23a563f1' fill-opacity='0.4'%3e%3ccircle cx='30' cy='30' r='2'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        <div className="container mx-auto px-6 text-center z-10">
          <div className="animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-600 via-orange-500 to-purple-800 bg-clip-text text-transparent">
                The Extra Mile
              </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto font-medium">
              Going beyond the requirements to build my own algorithm from scratch 🚀
            </p>
            
            <Button 
              onClick={() => scrollToSection('why-matters')}
              className="bg-gradient-to-r from-purple-600 to-orange-600 hover:from-purple-700 hover:to-orange-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Scroll to My Journey
              <ArrowDown className="ml-2 animate-bounce" size={20} />
            </Button>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <Brain className="text-purple-600 animate-pulse" size={40} />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <Code className="text-orange-500 animate-pulse" size={40} />
        </div>
      </section>

      {/* Why This Matters Section */}
      <section id="why-matters" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-8">
              <Lightbulb className="text-yellow-500 mr-4 animate-pulse" size={48} />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                Why build from scratch?
              </h2>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-purple-100">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Understanding an algorithm at its core gives you <span className="font-bold text-purple-600">true mastery</span>, 
                sharp debugging skills, and the confidence to innovate. While "black box" tools make you fast, 
                <span className="font-bold text-orange-600"> building your own makes you wise</span>. 
                It's the difference between knowing how to use a tool and understanding why it works.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dev Diary Recap Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                My Dev Diary 🧠
              </h2>
              <p className="text-xl text-gray-600">The real journey behind the algorithm</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Challenges Card */}
              <Card className="bg-gradient-to-br from-red-50 to-pink-50 border-red-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center">
                    <Target className="text-red-500 mr-3" size={24} />
                    <CardTitle className="text-red-700">Challenges</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 text-base">
                    The probability calculations kept giving me NaN values. Turns out, I was trying to take 
                    the log of zero probabilities! The solution was implementing Laplace smoothing - 
                    adding a small constant to avoid zero probabilities. Sometimes the smallest bugs 
                    teach you the biggest lessons.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Breakthrough Card */}
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center">
                    <Zap className="text-green-500 mr-3" size={24} />
                    <CardTitle className="text-green-700">Breakthrough Moment</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 text-base">
                    Everything clicked when I visualized the Gaussian distributions on paper first. 
                    Drawing out the bell curves for each class made me understand why we multiply 
                    probabilities and how the "naive" assumption actually works in practice.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* If I Could Start Again Card */}
              <Card className="bg-gradient-to-br from-orange-50 to-cyan-50 border-orange-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center">
                    <Brain className="text-orange-500 mr-3" size={24} />
                    <CardTitle className="text-orange-700">If I Could Start Again</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 text-base">
                    I'd start with a simpler dataset and build unit tests from day one. 
                    Also, I'd implement logging earlier - tracking intermediate calculations 
                    would have saved me hours of debugging mysterious results.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Wisdom Card */}
              <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center">
                    <Sparkles className="text-purple-500 mr-3" size={24} />
                    <CardTitle className="text-purple-700">One-liner Wisdom</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 text-base font-mono bg-gray-100 p-4 rounded-lg border-l-4 border-purple-500">
                    "Print. Everything. Debug like it's a lifestyle."
                  </CardDescription>
                  <p className="text-sm text-gray-600 mt-2">
                    When you're building from scratch, console.log is your best friend.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Aid Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              Visualizing My Thinking
            </h2>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-purple-200">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-12 mb-6 min-h-[300px] flex items-center justify-center">
                <div className="text-center">
                  <Brain className="text-purple-600 mx-auto mb-4" size={64} />
                  <p className="text-gray-600 text-lg">
                    Mind map or handwritten notes would go here
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    (Algorithm flow diagram, probability formulas, data structure sketches)
                  </p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "This is how I mapped the algorithm logic before writing code - 
                breaking down Bayes' theorem into digestible chunks and visualizing 
                the data flow through each step."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-orange-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Go the Extra Mile 💪
            </h2>
            
            <p className="text-xl md:text-2xl mb-12 leading-relaxed">
              I encourage every student to try building something from scratch, even if it feels impossible at first. 
              The struggle is where the real learning happens. Don't just use the tools - 
              <span className="font-bold"> understand them</span>.
            </p>
            
            <Button 
              className="bg-white text-purple-600 hover:bg-gray-100 hover:text-orange-600 px-12 py-6 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-bold"
            >
              Try It Yourself
              <Sparkles className="ml-3" size={24} />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white text-center">
        <p className="text-gray-400">
          Built with passion for learning • The Extra Mile Journey
        </p>
      </footer>
    </div>
  );
};

export default Index;
