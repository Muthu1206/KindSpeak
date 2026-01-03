import { useLocation, useNavigate } from 'react-router-dom';
import { Shield, ArrowLeft, AlertTriangle, CheckCircle, Clock, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';

export default function SeverityResult() {
  const location = useLocation();
  const navigate = useNavigate();
  const { message, result } = location.state || {};

  if (!result) {
    navigate('/analyzer');
    return null;
  }

  const severityColor = result.severity === 'High' ? 'red' : result.severity === 'Medium' ? 'yellow' : 'green';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => navigate('/analyzer')}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Analyzer
            </button>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <span className="font-semibold">KindSpeak</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Severity Header */}
        <div className="text-center mb-8">
          <div className={`inline-flex items-center justify-center p-4 rounded-2xl mb-4 ${
            severityColor === 'red' ? 'bg-red-100 dark:bg-red-900/30' :
            severityColor === 'yellow' ? 'bg-yellow-100 dark:bg-yellow-900/30' :
            'bg-green-100 dark:bg-green-900/30'
          }`}>
            {severityColor === 'green' ? (
              <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
            ) : (
              <AlertTriangle className={`w-12 h-12 ${
                severityColor === 'red' ? 'text-red-600 dark:text-red-400' : 'text-yellow-600 dark:text-yellow-400'
              }`} />
            )}
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {result.severity} Severity
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Detailed analysis report for your message
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-xl ${
                  severityColor === 'red' ? 'bg-red-100 dark:bg-red-900/30' :
                  severityColor === 'yellow' ? 'bg-yellow-100 dark:bg-yellow-900/30' :
                  'bg-green-100 dark:bg-green-900/30'
                }`}>
                  <TrendingUp className={`w-6 h-6 ${
                    severityColor === 'red' ? 'text-red-600 dark:text-red-400' :
                    severityColor === 'yellow' ? 'text-yellow-600 dark:text-yellow-400' :
                    'text-green-600 dark:text-green-400'
                  }`} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{result.score}%</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Threat Score</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-900/30">
                  <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{result.categories.length}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Categories</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30">
                  <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {new Date(result.timestamp).toLocaleTimeString()}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Analysis Time</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Message Content */}
        <Card className="border-0 shadow-md mb-6">
          <CardHeader>
            <CardTitle>Analyzed Message</CardTitle>
            <CardDescription>The message that was analyzed</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-900 dark:text-white">{message}</p>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Analysis */}
        <Card className="border-0 shadow-md mb-6">
          <CardHeader>
            <CardTitle>Severity Breakdown</CardTitle>
            <CardDescription>Color-coded severity indicators</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Overall Threat Level</span>
                <Badge variant={result.severity === 'High' ? 'destructive' : result.severity === 'Medium' ? 'default' : 'outline'}>
                  {result.severity}
                </Badge>
              </div>
              <Progress 
                value={result.score} 
                className="h-4"
                indicatorClassName={
                  severityColor === 'red' ? 'bg-red-600' :
                  severityColor === 'yellow' ? 'bg-yellow-600' :
                  'bg-green-600'
                }
              />
            </div>
          </CardContent>
        </Card>

        {/* Category Tags */}
        <Card className="border-0 shadow-md mb-6">
          <CardHeader>
            <CardTitle>Category Tags</CardTitle>
            <CardDescription>Identified categories in the message</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {result.categories.map((category: string, idx: number) => (
                <Badge 
                  key={idx} 
                  variant="secondary"
                  className="text-base px-4 py-2"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={() => navigate('/analyzer')}
            variant="outline"
            className="flex-1"
          >
            Analyze Another Message
          </Button>
          {result.severity !== 'Safe' && (
            <Button
              onClick={() => navigate('/ai-response', { state: { message, result } })}
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Get AI Suggested Alternatives
            </Button>
          )}
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
