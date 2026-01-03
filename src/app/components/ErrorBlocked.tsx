import { useNavigate } from 'react-router-dom';
import { ShieldAlert, ArrowLeft, AlertTriangle, Home, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export default function ErrorBlocked() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
      <Card className="w-full max-w-2xl border-0 shadow-2xl">
        <CardHeader className="text-center pb-2">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="bg-red-100 dark:bg-red-900/30 p-6 rounded-2xl">
                <ShieldAlert className="w-16 h-16 text-red-600 dark:text-red-400" />
              </div>
              <div className="absolute -top-2 -right-2 bg-red-600 dark:bg-red-500 p-2 rounded-full">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
          <CardTitle className="text-4xl text-red-600 dark:text-red-400 mb-2">
            Message Blocked
          </CardTitle>
          <CardDescription className="text-lg">
            Your message has been blocked due to detected harmful content
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Error Details */}
          <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400 mt-1 flex-shrink-0" />
              <div className="space-y-2">
                <h3 className="font-semibold text-red-900 dark:text-red-200">
                  Why was my message blocked?
                </h3>
                <p className="text-sm text-red-800 dark:text-red-300">
                  Our AI detected language that may be harmful, threatening, or violates our community guidelines. 
                  This includes cyberbullying, harassment, hate speech, or threatening content.
                </p>
              </div>
            </div>
          </div>

          {/* Violation Details */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900 dark:text-white">Detected Issues:</h4>
            <div className="grid gap-2">
              <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">Threatening language detected</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">Potential harassment content</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">Violates community standards</span>
              </div>
            </div>
          </div>

          {/* What can you do */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-3">
              What can you do?
            </h4>
            <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Rephrase your message using respectful language</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Use our AI suggestions to communicate more kindly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Review our community guidelines</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Contact support if you believe this was a mistake</span>
              </li>
            </ul>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              onClick={() => navigate('/analyzer')}
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Try Again
            </Button>
            <Button
              onClick={() => navigate('/ai-response')}
              variant="outline"
              className="flex-1"
            >
              Get AI Suggestions
            </Button>
            <Button
              onClick={() => navigate('/dashboard')}
              variant="outline"
              className="flex-1"
            >
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Button>
          </div>

          {/* Additional Warning */}
          <div className="text-center pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Repeated violations may result in account suspension. Please communicate respectfully.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
