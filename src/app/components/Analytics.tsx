import { useNavigate } from 'react-router-dom';
import { Shield, ArrowLeft, TrendingUp, TrendingDown, Download, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { BarChart, Bar, LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const dailyData = [
  { date: '12/16', safe: 385, threats: 42, warnings: 15 },
  { date: '12/17', safe: 398, threats: 38, warnings: 12 },
  { date: '12/18', safe: 412, threats: 35, warnings: 18 },
  { date: '12/19', safe: 428, threats: 32, warnings: 14 },
  { date: '12/20', safe: 445, threats: 28, warnings: 16 },
  { date: '12/21', safe: 468, threats: 25, warnings: 11 },
  { date: '12/22', safe: 475, threats: 22, warnings: 9 },
];

const weeklyData = [
  { week: 'Week 1', safe: 2640, threats: 245, warnings: 98 },
  { week: 'Week 2', safe: 2785, threats: 198, warnings: 85 },
  { week: 'Week 3', safe: 2912, threats: 176, warnings: 72 },
  { week: 'Week 4', safe: 3048, threats: 143, warnings: 64 },
];

const hourlyData = [
  { hour: '00:00', messages: 45 },
  { hour: '03:00', messages: 28 },
  { hour: '06:00', messages: 52 },
  { hour: '09:00', messages: 186 },
  { hour: '12:00', messages: 245 },
  { hour: '15:00', messages: 298 },
  { hour: '18:00', messages: 356 },
  { hour: '21:00', messages: 278 },
];

export default function Analytics() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/dashboard')}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
              >
                <ArrowLeft className="w-5 h-5" />
                Back
              </button>
              <div className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <span className="font-semibold">Analytics & Reports</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Calendar className="w-4 h-4 mr-2" />
                Date Range
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Analytics Dashboard</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Comprehensive cyberbullying statistics and trends
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-sm font-medium text-green-600">+15.3%</span>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">95.2%</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Safety Rate</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-xl">
                  <TrendingDown className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <span className="text-sm font-medium text-red-600">-8.3%</span>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">143</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Threats This Week</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-sm font-medium text-green-600">+12.5%</span>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">2,847</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Messages Analyzed</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <span className="text-sm font-medium text-green-600">+5.7%</span>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">1,234</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Active Users</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabbed Charts */}
        <Tabs defaultValue="daily" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="hourly">Hourly</TabsTrigger>
          </TabsList>

          <TabsContent value="daily" className="space-y-6">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Daily Statistics</CardTitle>
                <CardDescription>Message analysis over the past 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <AreaChart data={dailyData}>
                    <defs>
                      <linearGradient id="colorSafe" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorThreats" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="safe" stroke="#10b981" fillOpacity={1} fill="url(#colorSafe)" name="Safe Messages" />
                    <Area type="monotone" dataKey="threats" stroke="#ef4444" fillOpacity={1} fill="url(#colorThreats)" name="Threats" />
                    <Area type="monotone" dataKey="warnings" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.3} name="Warnings" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="weekly" className="space-y-6">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Weekly Statistics</CardTitle>
                <CardDescription>Monthly overview by week</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="safe" fill="#10b981" name="Safe Messages" />
                    <Bar dataKey="threats" fill="#ef4444" name="Threats" />
                    <Bar dataKey="warnings" fill="#f59e0b" name="Warnings" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="hourly" className="space-y-6">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Hourly Activity</CardTitle>
                <CardDescription>Message volume by time of day</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={hourlyData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="messages" stroke="#3b82f6" strokeWidth={3} name="Messages" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Top Categories</CardTitle>
              <CardDescription>Most common threat categories</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: 'Threats', count: 145, percentage: 50 },
                  { name: 'Harassment', count: 98, percentage: 34 },
                  { name: 'Insults', count: 76, percentage: 26 },
                  { name: 'Hate Speech', count: 54, percentage: 19 },
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.name}</span>
                      <span className="text-sm font-bold text-gray-900 dark:text-white">{item.count}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${item.percentage}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Response Time</CardTitle>
              <CardDescription>Average AI analysis speed</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="text-center">
                  <p className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">0.3s</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Average Analysis Time</p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">0.1s</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Fastest</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">0.8s</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Slowest</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
