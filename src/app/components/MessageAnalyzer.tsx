import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, ArrowLeft, Send, Sparkles, AlertTriangle } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';

// Mock AI detection logic
const analyzeMessage = (text: string) => {
  const lowerText = text.toLowerCase();
  
  // Bullying keywords detection
  const threats = ['kill', 'hurt', 'die', 'stupid', 'idiot', 'hate', 'loser', 'ugly', 'dumb', 'worthless'];
  const harassment = ['annoying', 'pathetic', 'failure', 'disgust', 'shame'];
  const insults = ['fool', 'moron', 'trash', 'garbage'];
  
  let score = 0;
  let categories = [];
  let matchedWords = [];
  
  threats.forEach(word => {
    if (lowerText.includes(word)) {
      score += 30;
      matchedWords.push(word);
      if (!categories.includes('Threat')) categories.push('Threat');
    }
  });
  
  harassment.forEach(word => {
    if (lowerText.includes(word)) {
      score += 20;
      matchedWords.push(word);
      if (!categories.includes('Harassment')) categories.push('Harassment');
    }
  });
  
  insults.forEach(word => {
    if (lowerText.includes(word)) {
      score += 15;
      matchedWords.push(word);
      if (!categories.includes('Insult')) categories.push('Insult');
    }
  });
  
  if (score === 0) categories.push('Neutral');
  
  const severity = score >= 50 ? 'High' : score >= 20 ? 'Medium' : 'Safe';
  
  return {
    score: Math.min(score, 100),
    severity,
    categories,
    matchedWords,
    timestamp: new Date().toISOString(),
  };
};

export default function MessageAnalyzer() {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleAnalyze = () => {
    if (!message.trim()) return;
    
    setAnalyzing(true);
    setTimeout(() => {
      const analysis = analyzeMessage(message);
      setResult(analysis);
      setAnalyzing(false);
    }, 1500);
  };

  const handleViewFullResult = () => {
    navigate('/result', { state: { message, result } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => navigate('/dashboard')}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Dashboard
            </button>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <span className="font-semibold">KindSpeak</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-4">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Real-Time Message Analyzer
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Type or paste a message to analyze it for cyberbullying
          </p>
        </div>

        <Card className="border-0 shadow-2xl mb-6">
          <CardHeader>
            <CardTitle>Enter Message</CardTitle>
            <CardDescription>
              Our AI will analyze the text for potential cyberbullying content
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[200px] text-base"
            />
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {message.length} characters
              </span>
              <Button
                onClick={handleAnalyze}
                disabled={!message.trim() || analyzing}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                {analyzing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Analyze Message
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Real-time Results */}
        {result && (
          <Card className="border-0 shadow-2xl animate-in fade-in slide-in-from-bottom-4">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Analysis Result</CardTitle>
                <Badge
                  variant={result.severity === 'High' ? 'destructive' : result.severity === 'Medium' ? 'default' : 'outline'}
                  className={
                    result.severity === 'High' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' :
                    result.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' :
                    'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-300 dark:border-green-700'
                  }
                >
                  {result.severity}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Threat Score */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Threat Level</span>
                  <span className="text-sm font-bold">{result.score}%</span>
                </div>
                <Progress 
                  value={result.score} 
                  className="h-3"
                  indicatorClassName={
                    result.score >= 50 ? 'bg-red-600' :
                    result.score >= 20 ? 'bg-yellow-600' :
                    'bg-green-600'
                  }
                />
              </div>

              {/* Categories */}
              <div>
                <span className="text-sm font-medium block mb-2">Detected Categories</span>
                <div className="flex flex-wrap gap-2">
                  {result.categories.map((cat: string, idx: number) => (
                    <Badge key={idx} variant="secondary" className="px-3 py-1">
                      {cat}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Matched Words */}
              {result.matchedWords.length > 0 && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-red-900 dark:text-red-200 mb-1">
                        Flagged Content Detected
                      </p>
                      <p className="text-xs text-red-700 dark:text-red-300">
                        Keywords: {result.matchedWords.join(', ')}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-3 pt-4">
                <Button
                  onClick={handleViewFullResult}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  View Full Report
                </Button>
                {result.severity !== 'Safe' && (
                  <Button
                    onClick={() => navigate('/ai-response', { state: { message, result } })}
                    variant="outline"
                    className="flex-1"
                  >
                    Get AI Suggestion
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}
