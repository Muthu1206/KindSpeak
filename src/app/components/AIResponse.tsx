import { useLocation, useNavigate } from 'react-router-dom';
import { Shield, ArrowLeft, Sparkles, Copy, Check, Lightbulb } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { toast } from 'sonner';

// Mock AI suggestions
const generateSuggestions = (message: string) => {
  return [
    {
      title: "Respectful Version",
      text: "I understand you might be upset, but could we discuss this calmly?",
      tone: "Diplomatic",
    },
    {
      title: "Constructive Feedback",
      text: "I'd like to share some thoughts on this. Can we have a constructive conversation?",
      tone: "Professional",
    },
    {
      title: "Empathetic Approach",
      text: "I hear what you're saying. Let's try to understand each other better.",
      tone: "Compassionate",
    },
  ];
};

export default function AIResponse() {
  const location = useLocation();
  const navigate = useNavigate();
  const { message, result } = location.state || {};
  const [copied, setCopied] = useState<number | null>(null);

  if (!result) {
    navigate('/analyzer');
    return null;
  }

  const suggestions = generateSuggestions(message);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopied(index);
    toast.success('Copied to clipboard!');
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => navigate('/result', { state: { message, result } })}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Results
            </button>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <span className="font-semibold">KindSpeak AI</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl mb-4 animate-pulse">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            AI Polite Alternatives
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Here are some kinder ways to express your message
          </p>
        </div>

        {/* Original Message */}
        <Card className="border-0 shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-yellow-500" />
              Original Message
            </CardTitle>
            <CardDescription>The message that was flagged for improvement</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <p className="text-gray-900 dark:text-white">{message}</p>
            </div>
          </CardContent>
        </Card>

        {/* AI Suggestions */}
        <div className="space-y-6 mb-8">
          {suggestions.map((suggestion, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{suggestion.title}</CardTitle>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium">
                    {suggestion.tone}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-4">
                  <p className="text-gray-900 dark:text-white">{suggestion.text}</p>
                </div>
                <Button
                  onClick={() => handleCopy(suggestion.text, index)}
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  {copied === index ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Text
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tips Card */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 mb-8">
          <CardHeader>
            <CardTitle>Communication Tips</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white mb-1">Think before you type</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Take a moment to consider how your words might affect others
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg">
                <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white mb-1">Use positive language</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Frame your messages constructively and respectfully
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                <Lightbulb className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white mb-1">Practice empathy</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Try to see things from the other person's perspective
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={() => navigate('/analyzer')}
            className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
            Analyze Another Message
          </Button>
          <Button
            onClick={() => navigate('/dashboard')}
            variant="outline"
            className="flex-1"
          >
            Back to Dashboard
          </Button>
        </div>
      </main>
    </div>
  );
}
