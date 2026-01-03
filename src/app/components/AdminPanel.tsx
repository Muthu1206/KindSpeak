import { useNavigate } from 'react-router-dom';
import { Shield, ArrowLeft, Users, UserCheck, UserX, Search, MoreVertical, Ban, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { toast } from 'sonner';

const users = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'User', status: 'active', messages: 245, threats: 2 },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Moderator', status: 'active', messages: 156, threats: 0 },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'User', status: 'suspended', messages: 89, threats: 12 },
  { id: 4, name: 'Diana Prince', email: 'diana@example.com', role: 'Admin', status: 'active', messages: 324, threats: 0 },
  { id: 5, name: 'Eve Adams', email: 'eve@example.com', role: 'User', status: 'active', messages: 178, threats: 1 },
  { id: 6, name: 'Frank Miller', email: 'frank@example.com', role: 'User', status: 'banned', messages: 45, threats: 25 },
];  

const moderators = users.filter(u => u.role === 'Moderator' || u.role === 'Admin');
const bannedUsers = users.filter(u => u.status === 'banned');

export default function AdminPanel() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleAction = (action: string, userName: string) => {
    toast.success(`${action} ${userName}`);
  };

  const UserRow = ({ user }: { user: typeof users[0] }) => (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-4 flex-1">
        <Avatar>
          <AvatarFallback className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
            {user.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <p className="font-medium text-gray-900 dark:text-white">{user.name}</p>
            <Badge variant={
              user.status === 'active' ? 'outline' : 
              user.status === 'suspended' ? 'default' : 
              'destructive'
            }>
              {user.status}
            </Badge>
            {user.role !== 'User' && (
              <Badge variant="secondary">{user.role}</Badge>
            )}
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
          <div className="flex items-center gap-4 mt-2 text-xs text-gray-600 dark:text-gray-400">
            <span>{user.messages} messages</span>
            <span className={user.threats > 0 ? 'text-red-600 dark:text-red-400' : ''}>
              {user.threats} threats
            </span>
          </div>
        </div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <MoreVertical className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => handleAction('Viewed profile of', user.name)}>
            View Profile
          </DropdownMenuItem>
          {user.status === 'active' && (
            <DropdownMenuItem onClick={() => handleAction('Suspended', user.name)}>
              Suspend User
            </DropdownMenuItem>
          )}
          {user.status === 'suspended' && (
            <DropdownMenuItem onClick={() => handleAction('Activated', user.name)}>
              Activate User
            </DropdownMenuItem>
          )}
          <DropdownMenuItem 
            onClick={() => handleAction('Banned', user.name)}
            className="text-red-600"
          >
            Ban User
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );

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
                <Shield className="w-6 h-6 text-red-600 dark:text-red-400" />
                <span className="font-semibold">Admin Panel</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Content Moderation</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Manage users and moderate content across the platform
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl">
                  <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">1,234</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Users</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl">
                  <UserCheck className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">1,198</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Active Users</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-xl">
                  <UserX className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">24</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Suspended</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-xl">
                  <Ban className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">12</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Banned</p>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <Card className="border-0 shadow-sm mb-6">
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search users by name or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* User Management Tabs */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList>
            <TabsTrigger value="all">All Users ({users.length})</TabsTrigger>
            <TabsTrigger value="moderators">Moderators ({moderators.length})</TabsTrigger>
            <TabsTrigger value="banned">Banned ({bannedUsers.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>View and manage all registered users</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {users.map((user) => (
                  <UserRow key={user.id} user={user} />
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="moderators" className="space-y-4">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Moderator Team</CardTitle>
                <CardDescription>Platform moderators and administrators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {moderators.map((user) => (
                  <UserRow key={user.id} user={user} />
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="banned" className="space-y-4">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Banned Users</CardTitle>
                <CardDescription>Users who have been banned from the platform</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {bannedUsers.map((user) => (
                  <UserRow key={user.id} user={user} />
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
