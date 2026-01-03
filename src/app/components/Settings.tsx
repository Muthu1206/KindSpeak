import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Shield, ArrowLeft, Moon, Sun, Bell, Lock, Globe, Sliders, User, Mail } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Slider } from './ui/slider';
import { Input } from './ui/input';
import { Separator } from './ui/separator';
import { toast } from 'sonner';

export default function Settings() {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const [notifications, setNotifications] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(false);
  const [aiSensitivity, setAiSensitivity] = useState([50]);

  const handleSave = () => {
    toast.success('Settings saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <span className="font-semibold">Settings</span>
              </div>
            </div>
            <Button onClick={handleSave} className="bg-gradient-to-r from-blue-600 to-purple-600">
              Save Changes
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {/* Profile Settings */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <CardTitle>Profile Settings</CardTitle>
              </div>
              <CardDescription>Manage your account information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="john@example.com" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Appearance */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <div className="flex items-center gap-2">
                {theme === 'dark' ? (
                  <Moon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                ) : (
                  <Sun className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                )}
                <CardTitle>Appearance</CardTitle>
              </div>
              <CardDescription>Customize your interface theme</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="theme">Theme Mode</Label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Choose your preferred theme</p>
                </div>
                <Select value={theme} onValueChange={setTheme}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-green-600 dark:text-green-400" />
                <CardTitle>Notifications & Alerts</CardTitle>
              </div>
              <CardDescription>Configure notification preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="notifications">Push Notifications</Label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Receive real-time threat alerts</p>
                </div>
                <Switch
                  id="notifications"
                  checked={notifications}
                  onCheckedChange={setNotifications}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-alerts">Email Alerts</Label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Get email notifications for high-severity threats</p>
                </div>
                <Switch
                  id="email-alerts"
                  checked={emailAlerts}
                  onCheckedChange={setEmailAlerts}
                />
              </div>
            </CardContent>
          </Card>

          {/* AI Sensitivity */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Sliders className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <CardTitle>AI Sensitivity Level</CardTitle>
              </div>
              <CardDescription>Adjust the sensitivity of threat detection</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Detection Sensitivity</Label>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {aiSensitivity[0]}%
                  </span>
                </div>
                <Slider
                  value={aiSensitivity}
                  onValueChange={setAiSensitivity}
                  max={100}
                  step={10}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>Less Sensitive</span>
                  <span>Balanced</span>
                  <span>More Sensitive</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Higher sensitivity may flag more messages as potential threats, while lower sensitivity may miss some concerning content.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Language */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <CardTitle>Language & Region</CardTitle>
              </div>
              <CardDescription>Set your preferred language</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="language">Language</Label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Choose your interface language</p>
                </div>
                <Select defaultValue="en">
                  <SelectTrigger className="w-[150px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="de">Deutsch</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Privacy */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-red-600 dark:text-red-400" />
                <CardTitle>Privacy & Security</CardTitle>
              </div>
              <CardDescription>Manage your privacy settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                Change Password
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Two-Factor Authentication
              </Button>
              <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700 dark:text-red-400">
                Delete Account
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
