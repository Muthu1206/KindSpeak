import { useNavigate } from 'react-router-dom';
import { Shield, MessageSquare, TrendingUp, Users, Settings, LogOut, Moon, Sun, Activity, AlertTriangle, CheckCircle2, BarChart3 } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export default function Dashboard() {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  const stats = [
    {
      title: 'Messages Analyzed',
      value: '2,847',
      change: '+12.5%',
      icon: MessageSquare,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    },
    {
      title: 'Threats Blocked',
      value: '143',
      change: '-8.3%',
      icon: AlertTriangle,
      color: 'text-red-600 dark:text-red-400',
      bgColor: 'bg-red-100 dark:bg-red-900/30',
    },
    {
      title: 'Safe Messages',
      value: '2,704',
      change: '+15.2%',
      icon: CheckCircle2,
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
    },
    {
      title: 'Active Users',
      value: '1,234',
      change: '+5.7%',
      icon: Users,
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
    },
  ];

  const recentActivity = [
    { message: 'Message analyzed: "Hey, how are you?"', severity: 'safe', time: '2 min ago' },
    { message: 'Threat detected and blocked', severity: 'high', time: '5 min ago' },
    { message: 'Message analyzed: "Great job today!"', severity: 'safe', time: '12 min ago' },
    { message: 'Medium severity warning issued', severity: 'medium', time: '18 min ago' },
    { message: 'AI suggested alternative provided', severity: 'safe', time: '25 min ago' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-xl">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold">KindSpeak</h1>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
              <Button variant="ghost" size="icon" onClick={() => navigate('/settings')}>
                <Settings className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => navigate('/login')}>
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Monitor your AI-powered cyberbullying prevention system
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`${stat.bgColor} p-3 rounded-xl`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <span className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                  </span>
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <Card className="lg:col-span-1 border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Navigate to key features</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                onClick={() => navigate('/analyzer')}
                className="w-full justify-start bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Analyze Message
              </Button>
              <Button onClick={() => navigate('/analytics')} variant="outline" className="w-full justify-start">
                <TrendingUp className="w-5 h-5 mr-2" />
                View Analytics
              </Button>
              <Button onClick={() => navigate('/moderator')} variant="outline" className="w-full justify-start">
                <BarChart3 className="w-5 h-5 mr-2" />
                Moderator Dashboard
              </Button>
              <Button onClick={() => navigate('/admin')} variant="outline" className="w-full justify-start">
                <Users className="w-5 h-5 mr-2" />
                Admin Panel
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="lg:col-span-2 border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Live feed of system activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 pb-4 border-b border-gray-100 dark:border-gray-800 last:border-0">
                    <div className={`p-2 rounded-lg ${
                      activity.severity === 'high' ? 'bg-red-100 dark:bg-red-900/30' :
                      activity.severity === 'medium' ? 'bg-yellow-100 dark:bg-yellow-900/30' :
                      'bg-green-100 dark:bg-green-900/30'
                    }`}>
                      <Activity className={`w-4 h-4 ${
                        activity.severity === 'high' ? 'text-red-600 dark:text-red-400' :
                        activity.severity === 'medium' ? 'text-yellow-600 dark:text-yellow-400' :
                        'text-green-600 dark:text-green-400'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{activity.message}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
